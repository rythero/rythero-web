const MODEL = 'gemini-3.8-flash';
const MAX_AUDIO_BYTES = 8 * 1024 * 1024;

const SYSTEM_INSTRUCTION = `You are Rythero's music-analysis engine. Analyze audio as a music producer and audio researcher, but be conservative about uncertainty.

Rules:
- Never identify, guess, or output an artist, performer, song title, label, or copyrighted work.
- Never transcribe lyrics or reproduce a melody, hook, chord-by-chord transcription, or other protectable expressive sequence.
- Analyze transferable high-level musical characteristics only: genre families, mood, tempo feel, meter, probable key/mode when reasonably audible, vocal presence/delivery/character, probable instruments, groove, bass behavior, harmony character, production/mix character, broad structure, energy contour, and distinctive production traits.
- Do not pretend to recover the original generation prompt. A suggested prompt must describe a NEW musical direction with new melody, harmony, lyrics and vocal identity.
- Do not use artist names in the suggested prompt.
- Use confidence values honestly. If something cannot be determined from the excerpts, put it in uncertainties rather than guessing.
- Treat the supplied local DSP metrics as measured technical context. They can help with duration, level, dynamics and tempo, but they are not proof of genre, instrument or mood.
- The audio may contain three short excerpts from early, middle and late parts of one track concatenated together. Do not mistake the edit boundaries for original song transitions.
- Keep the output concise and useful for music creation.`;

const tagArray = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: { type: 'string' },
      confidence: { type: 'number' }
    },
    required: ['label', 'confidence']
  }
};

const singleSchema = {
  type: 'object',
  properties: {
    mode: { type: 'string' },
    summary: { type: 'string' },
    genre: tagArray,
    moods: tagArray,
    tempo: {
      type: 'object',
      properties: { value: { type: 'string' }, confidence: { type: 'number' }, notes: { type: 'string' } },
      required: ['value', 'confidence', 'notes']
    },
    meter: {
      type: 'object',
      properties: { value: { type: 'string' }, confidence: { type: 'number' } },
      required: ['value', 'confidence']
    },
    key: {
      type: 'object',
      properties: { value: { type: 'string' }, confidence: { type: 'number' }, notes: { type: 'string' } },
      required: ['value', 'confidence', 'notes']
    },
    vocals: {
      type: 'object',
      properties: {
        presence: { type: 'string' },
        delivery: { type: 'array', items: { type: 'string' } },
        character: { type: 'array', items: { type: 'string' } },
        confidence: { type: 'number' }
      },
      required: ['presence', 'delivery', 'character', 'confidence']
    },
    instruments: tagArray,
    groove: tagArray,
    bass: tagArray,
    harmony: tagArray,
    production: tagArray,
    structure: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          label: { type: 'string' },
          start: { type: 'string' },
          confidence: { type: 'number' }
        },
        required: ['label', 'start', 'confidence']
      }
    },
    distinctiveTraits: { type: 'array', items: { type: 'string' } },
    uncertainties: { type: 'array', items: { type: 'string' } },
    suggestedPrompt: { type: 'string' },
    exclude: { type: 'array', items: { type: 'string' } }
  },
  required: ['mode','summary','genre','moods','tempo','meter','key','vocals','instruments','groove','bass','harmony','production','structure','distinctiveTraits','uncertainties','suggestedPrompt','exclude']
};

const buildSchema = {
  type: 'object',
  properties: {
    mode: { type: 'string' },
    summary: { type: 'string' },
    sharedTraits: tagArray,
    referenceDifferences: { type: 'array', items: { type: 'string' } },
    coreSignature: { type: 'array', items: { type: 'string' } },
    suggestedPrompt: { type: 'string' },
    exclude: { type: 'array', items: { type: 'string' } },
    uncertainties: { type: 'array', items: { type: 'string' } }
  },
  required: ['mode','summary','sharedTraits','referenceDifferences','coreSignature','suggestedPrompt','exclude','uncertainties']
};

const compareSchema = {
  type: 'object',
  properties: {
    mode: { type: 'string' },
    summary: { type: 'string' },
    matches: tagArray,
    differences: tagArray,
    nextChanges: { type: 'array', items: { type: 'string' } },
    revisedPrompt: { type: 'string' },
    uncertainties: { type: 'array', items: { type: 'string' } }
  },
  required: ['mode','summary','matches','differences','nextChanges','revisedPrompt','uncertainties']
};

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

function bufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, Math.min(i + chunk, bytes.length)));
  }
  return btoa(binary);
}

function cleanJson(value, fallback) {
  if (typeof value !== 'string' || !value.trim()) return fallback;
  try { return JSON.parse(value); } catch { return fallback; }
}

function promptFor(mode, lang, metrics, hint, focus, target) {
  const language = lang === 'es' ? 'Spanish' : lang === 'pt-br' ? 'Brazilian Portuguese' : 'English';
  if (mode === 'build') {
    return `Analyze the supplied reference excerpts as separate tracks. Find only the high-level musical traits that genuinely recur across them. Distinguish shared traits from differences. Build a reusable original sound signature, not an imitation. The final explanation should be in ${language}; the suggested generator prompt should be in English for portability.\n\nLocal technical metrics per reference:\n${JSON.stringify(metrics)}\n\nCreator focus: ${focus || 'balanced'}.`;
  }
  if (mode === 'compare') {
    return `Compare the supplied result excerpt with the saved target signature below. State which high-level traits match, which differ, and give a short set of concrete changes for the next generation. Do not judge quality. The explanation should be in ${language}; the revised generator prompt should be in English.\n\nSaved target signature:\n${JSON.stringify(target)}\n\nLocal technical metrics for the new result:\n${JSON.stringify(metrics)}.`;
  }
  return `Analyze this track excerpt in detail. Infer high-level style, probable instrumentation, vocal delivery, groove, bass, harmony character, production, broad structure and other transferable traits. Do not invent specifics when confidence is low. The explanation should be in ${language}; the suggested generator prompt should be in English for portability.\n\nLocal technical metrics:\n${JSON.stringify(metrics)}\n\nCreator focus: ${focus || 'balanced'}.\nCreator note (may be empty): ${hint || ''}.`;
}

async function callGemini(env, mode, lang, files, metrics, hint, focus, target) {
  const schema = mode === 'build' ? buildSchema : mode === 'compare' ? compareSchema : singleSchema;
  const parts = [{ text: promptFor(mode, lang, metrics, hint, focus, target) }];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    parts.push({ text: mode === 'build' ? `Reference ${i + 1} analysis excerpt:` : 'Audio analysis excerpt:' });
    parts.push({ inlineData: { mimeType: file.type || 'audio/wav', data: bufferToBase64(await file.arrayBuffer()) } });
  }

  const payload = {
    store: false,
    systemInstruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
    contents: [{ role: 'user', parts }],
    generationConfig: {
      responseFormat: {
        text: {
          mimeType: 'application/json',
          schema
        }
      }
    }
  };

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-goog-api-key': env.GEMINI_API_KEY
    },
    body: JSON.stringify(payload)
  });

  const raw = await response.json();
  if (!response.ok) {
    const message = raw?.error?.message || 'The AI provider could not analyze this audio.';
    throw new Error(message);
  }
  const text = raw?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('').trim();
  if (!text) throw new Error('The AI provider returned no analysis.');
  try { return JSON.parse(text); } catch { throw new Error('The AI provider returned an unreadable analysis.'); }
}

async function handleAnalysis(request, env) {
  if (request.method === 'GET') {
    return json({ configured: Boolean(env.GEMINI_API_KEY), provider: env.GEMINI_API_KEY ? 'gemini' : null, model: env.GEMINI_API_KEY ? MODEL : null });
  }
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405, { allow: 'GET, POST' });

  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && origin !== requestUrl.origin) return json({ error: 'Cross-origin request blocked.' }, 403);
  if (!env.GEMINI_API_KEY) return json({ configured: false, error: 'Advanced AI analysis is not activated yet.' }, 503);

  const type = request.headers.get('content-type') || '';
  if (!type.includes('multipart/form-data')) return json({ error: 'Expected multipart form data.' }, 415);

  const form = await request.formData();
  const mode = ['single','build','compare'].includes(String(form.get('mode'))) ? String(form.get('mode')) : 'single';
  const lang = ['en','es','pt-br'].includes(String(form.get('lang'))) ? String(form.get('lang')) : 'en';
  const metrics = cleanJson(form.get('metrics'), mode === 'build' ? [] : {});
  const target = cleanJson(form.get('target'), {});
  const hint = String(form.get('hint') || '').slice(0, 300);
  const focus = String(form.get('focus') || 'balanced').slice(0, 60);

  const files = [];
  for (let i = 0; i < 3; i++) {
    const file = form.get(`audio${i}`);
    if (file instanceof File && file.size > 0) files.push(file);
  }
  const minFiles = mode === 'build' ? 2 : 1;
  if (files.length < minFiles) return json({ error: mode === 'build' ? 'At least two analysis excerpts are required.' : 'An analysis excerpt is required.' }, 400);
  if (mode !== 'build' && files.length > 1) files.splice(1);
  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (total > MAX_AUDIO_BYTES) return json({ error: 'The derived analysis excerpts are too large.' }, 413);
  if (files.some(file => !String(file.type || '').startsWith('audio/'))) return json({ error: 'Only audio excerpts are accepted.' }, 415);

  try {
    const analysis = await callGemini(env, mode, lang, files, metrics, hint, focus, target);
    return json({ configured: true, provider: 'gemini', model: MODEL, analysis });
  } catch (error) {
    return json({ configured: true, error: error?.message || 'Audio analysis failed.' }, 502);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/music-analyze') return handleAnalysis(request, env);
    return env.ASSETS.fetch(request);
  }
};
