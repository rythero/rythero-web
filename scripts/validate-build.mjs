import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(here, '..');
const dist = path.join(projectRoot, 'dist');
const origin = 'https://rythero.com';
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function normalizePathname(value) {
  let pathname = value || '/';
  try { pathname = decodeURI(pathname); } catch {}
  pathname = pathname.replace(/\/+/g, '/');
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname.length > 1) pathname = pathname.replace(/\/+$/, '');
  return pathname || '/';
}

function routeForHtml(file) {
  const rel = path.relative(dist, file).split(path.sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return normalizePathname(`/${rel.slice(0, -'/index.html'.length)}`);
  if (rel.endsWith('.html')) return normalizePathname(`/${rel.slice(0, -'.html'.length)}`);
  return normalizePathname(`/${rel}`);
}

function localPathFromUrl(raw, currentRoute = '/') {
  if (!raw || raw.startsWith('#') || /^(mailto:|tel:|javascript:|data:|blob:)/i.test(raw)) return null;
  if (raw.startsWith('//')) return null;
  try {
    const url = new URL(raw, `${origin}${currentRoute === '/' ? '/' : `${currentRoute}/`}`);
    if (url.origin !== origin) return null;
    return normalizePathname(url.pathname);
  } catch {
    fail(`Invalid URL "${raw}" on ${currentRoute}`);
    return null;
  }
}

function routeExists(route) {
  const clean = normalizePathname(route).replace(/^\//, '');
  if (!clean) return fs.existsSync(path.join(dist, 'index.html'));
  const direct = path.join(dist, clean);
  const candidates = [direct, `${direct}.html`, path.join(direct, 'index.html')];
  return candidates.some((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*["']([^"']*)["']`, 'i'));
  return match?.[1] ?? null;
}

function stripNonText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ');
}

if (!fs.existsSync(dist)) {
  console.error('dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const indexableCanonicals = new Set();
const canonicalOwners = new Map();

for (const file of htmlFiles) {
  const route = routeForHtml(file);
  const html = fs.readFileSync(file, 'utf8');
  const text = stripNonText(html);

  if (!/<meta\b[^>]*name=["']viewport["'][^>]*>/i.test(html)) fail(`${route}: missing viewport meta`);

  for (const tag of html.match(/<img\b[^>]*>/gi) ?? []) {
    if (!/\balt\s*=/i.test(tag)) fail(`${route}: image missing alt attribute`);
    const src = attr(tag, 'src');
    const target = localPathFromUrl(src, route);
    if (target && !routeExists(target)) fail(`${route}: missing image ${src}`);
  }

  for (const tag of html.match(/<script\b[^>]*src=["'][^"']+["'][^>]*>/gi) ?? []) {
    const src = attr(tag, 'src');
    const target = localPathFromUrl(src, route);
    if (target && !routeExists(target)) fail(`${route}: missing script ${src}`);
  }

  for (const tag of html.match(/<a\b[^>]*href=["'][^"']+["'][^>]*>/gi) ?? []) {
    const href = attr(tag, 'href');
    const target = localPathFromUrl(href, route);
    if (target && !routeExists(target)) fail(`${route}: broken internal link ${href}`);
  }

  const canonicalTag = (html.match(/<link\b[^>]*rel=["']canonical["'][^>]*>/i) ?? html.match(/<link\b[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/i))?.[0];
  if (!canonicalTag) {
    fail(`${route}: missing canonical`);
  } else {
    const canonical = attr(canonicalTag, 'href');
    try {
      const url = new URL(canonical);
      const canonicalRoute = normalizePathname(url.pathname);
      if (url.origin !== origin) fail(`${route}: canonical uses unexpected origin ${url.origin}`);
      if (canonicalRoute !== normalizePathname(route)) fail(`${route}: canonical points to ${canonicalRoute}`);
      const owner = canonicalOwners.get(canonicalRoute);
      if (owner && owner !== route) fail(`${route}: duplicate canonical also used by ${owner}`);
      canonicalOwners.set(canonicalRoute, route);
      const robots = html.match(/<meta\b[^>]*name=["']robots["'][^>]*>/i)?.[0] ?? '';
      const isNoindex = /noindex/i.test(attr(robots, 'content') ?? '');
      if (route === '/404') {
        if (!isNoindex) fail('/404: must be noindex');
      } else {
        if (isNoindex) fail(`${route}: unexpectedly noindex`);
        indexableCanonicals.add(canonicalRoute);
      }
    } catch {
      fail(`${route}: invalid canonical ${canonical}`);
    }
  }

  if (route !== '/404') {
    const alternates = new Map();
    for (const tag of html.match(/<link\b[^>]*rel=["']alternate["'][^>]*>/gi) ?? []) {
      const lang = attr(tag, 'hreflang');
      const href = attr(tag, 'href');
      if (lang && href) alternates.set(lang, href);
    }
    for (const lang of ['en', 'es', 'pt-BR', 'x-default']) {
      if (!alternates.has(lang)) fail(`${route}: missing hreflang ${lang}`);
      const target = alternates.get(lang) ? localPathFromUrl(alternates.get(lang), route) : null;
      if (target && !routeExists(target)) fail(`${route}: hreflang ${lang} points to missing ${target}`);
    }
  }

  if (route === '/es' || route.startsWith('/es/')) {
    if (/\bPrompt Builder\b/.test(text)) fail(`${route}: use "Generador de prompts" instead of "Prompt Builder" in Spanish UI`);
  }
  if (route === '/pt-br' || route.startsWith('/pt-br/')) {
    if (/\bPrompt Builder\b/.test(text)) fail(`${route}: use "Gerador de prompts" instead of "Prompt Builder" in Portuguese UI`);
  }
}

const sitemapFile = path.join(dist, 'sitemap.xml');
if (!fs.existsSync(sitemapFile)) {
  fail('Missing dist/sitemap.xml');
} else {
  const sitemap = fs.readFileSync(sitemapFile, 'utf8');
  const sitemapPaths = new Set();
  for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    try {
      const url = new URL(match[1]);
      if (url.origin !== origin) fail(`Sitemap URL uses unexpected origin: ${match[1]}`);
      const route = normalizePathname(url.pathname);
      sitemapPaths.add(route);
      if (!routeExists(route)) fail(`Sitemap points to missing route: ${route}`);
      if (route === '/404') fail('404 must not appear in sitemap');
    } catch {
      fail(`Invalid sitemap URL: ${match[1]}`);
    }
  }

  for (const canonical of indexableCanonicals) {
    if (!sitemapPaths.has(canonical)) fail(`Indexable canonical missing from sitemap: ${canonical}`);
  }

  const baseRoutes = new Set([...sitemapPaths].map((route) => normalizePathname(route.replace(/^\/(es|pt-br)(?=\/|$)/, '') || '/')));
  for (const baseRoute of baseRoutes) {
    const en = baseRoute;
    const es = baseRoute === '/' ? '/es' : `/es${baseRoute}`;
    const pt = baseRoute === '/' ? '/pt-br' : `/pt-br${baseRoute}`;
    for (const [lang, route] of [['en', en], ['es', es], ['pt-BR', pt]]) {
      if (!sitemapPaths.has(normalizePathname(route))) fail(`Sitemap language parity missing ${lang}: ${route}`);
    }
  }
}

if (errors.length) {
  console.error(`Rythero validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Rythero validation passed: ${htmlFiles.length} HTML pages checked, internal links/assets resolved, canonicals/hreflang/sitemap verified.`);
