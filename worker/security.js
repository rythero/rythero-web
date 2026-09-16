import app from './index.js';

const DEFAULT_WINDOW_SECONDS = 600;
const DEFAULT_MAX_PER_IP = 6;
const DEFAULT_GLOBAL_PER_MINUTE = 30;
const MAX_DECLARED_BODY_BYTES = 9 * 1024 * 1024;

const ipBuckets = new Map();
let globalBucket = { startedAt: 0, count: 0 };

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...extraHeaders
    }
  });
}

function positiveInt(value, fallback) {
  const n = Number.parseInt(String(value ?? ''), 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function clientKey(request) {
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp;
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function cleanExpired(now, windowMs) {
  if (ipBuckets.size < 1000) return;
  for (const [key, bucket] of ipBuckets) {
    if (now - bucket.startedAt >= windowMs) ipBuckets.delete(key);
  }
}

function takeRateLimit(request, env) {
  const now = Date.now();
  const windowSeconds = positiveInt(env.AI_RATE_LIMIT_WINDOW_SECONDS, DEFAULT_WINDOW_SECONDS);
  const maxPerIp = positiveInt(env.AI_RATE_LIMIT_MAX, DEFAULT_MAX_PER_IP);
  const globalPerMinute = positiveInt(env.AI_GLOBAL_PER_MINUTE, DEFAULT_GLOBAL_PER_MINUTE);
  const windowMs = windowSeconds * 1000;

  cleanExpired(now, windowMs);

  if (!globalBucket.startedAt || now - globalBucket.startedAt >= 60_000) {
    globalBucket = { startedAt: now, count: 0 };
  }
  if (globalBucket.count >= globalPerMinute) {
    const retryAfter = Math.max(1, Math.ceil((60_000 - (now - globalBucket.startedAt)) / 1000));
    return { ok: false, retryAfter };
  }

  const key = clientKey(request);
  let bucket = ipBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= windowMs) {
    bucket = { startedAt: now, count: 0 };
    ipBuckets.set(key, bucket);
  }

  if (bucket.count >= maxPerIp) {
    const retryAfter = Math.max(1, Math.ceil((windowMs - (now - bucket.startedAt)) / 1000));
    return { ok: false, retryAfter };
  }

  bucket.count += 1;
  globalBucket.count += 1;
  return { ok: true };
}

function aiDisabled(env) {
  return ['1', 'true', 'yes', 'on'].includes(String(env.AI_ANALYSIS_DISABLED || '').toLowerCase());
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname !== '/api/music-analyze' || request.method === 'GET') {
      return app.fetch(request, env, ctx);
    }

    if (aiDisabled(env)) {
      return json(
        { configured: false, error: 'Advanced AI analysis is temporarily unavailable.' },
        503,
        { 'retry-after': '3600' }
      );
    }

    const fetchSite = request.headers.get('sec-fetch-site');
    if (fetchSite && !['same-origin', 'same-site', 'none'].includes(fetchSite)) {
      return json({ error: 'Cross-site request blocked.' }, 403);
    }

    const declaredLength = Number(request.headers.get('content-length') || 0);
    if (declaredLength && declaredLength > MAX_DECLARED_BODY_BYTES) {
      return json({ error: 'Request body is too large.' }, 413);
    }

    const limit = takeRateLimit(request, env);
    if (!limit.ok) {
      return json(
        { error: 'Too many AI analysis requests. Please wait before trying again.' },
        429,
        { 'retry-after': String(limit.retryAfter) }
      );
    }

    return app.fetch(request, env, ctx);
  }
};
