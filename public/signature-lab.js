(() => {
  const root = document.querySelector('[data-signature-lab]');
  if (!root) return;
  const lang = root.getAttribute('data-lang') || 'en';
  const $ = (s, r = root) => r.querySelector(s);
  const $$ = (s, r = root) => Array.from(r.querySelectorAll(s));
  const t = {
    en: {
      ready:'AI engine ready', off:'AI engine not activated yet', working:'Listening and analyzing…', decoding:'Preparing a short analysis excerpt…',
      choose:'Choose an audio file first.', refs:'Choose 2–3 reference tracks.', max:'Use a maximum of 3 reference tracks.', decode:'This audio could not be decoded by your browser.', api:'The AI analysis could not be completed.',
      localTitle:'TECHNICAL ESTIMATE', duration:'Duration', bpm:'Estimated BPM', level:'Average level', dynamics:'Dynamic range', peak:'Peak', movement:'Energy movement', technical:'Technical measurements only — they do not identify genre, instruments or vocal style.',
      uncertain:'Uncertainties', differences:'What differs', core:'Core signature', matches:'Matches', changes:'Change next', confidence:'confidence', saved:'Signature saved in this browser.',
      promptRule:'Create a new melody, harmony, lyrics and vocal identity. Avoid direct artist imitation, cloned voices, copied hooks and recognizable melodic phrases.'
    },
    es: {
      ready:'Motor IA listo', off:'Motor IA todavía sin activar', working:'Escuchando y analizando…', decoding:'Preparando un fragmento breve para el análisis…',
      choose:'Elige primero un archivo de audio.', refs:'Elige 2–3 canciones de referencia.', max:'Usa un máximo de 3 canciones de referencia.', decode:'El navegador no ha podido decodificar este audio.', api:'No se ha podido completar el análisis IA.',
      localTitle:'ESTIMACIÓN TÉCNICA', duration:'Duración', bpm:'BPM estimado', level:'Nivel medio', dynamics:'Rango dinámico', peak:'Pico', movement:'Evolución de energía', technical:'Son mediciones técnicas: por sí solas no identifican género, instrumentos ni estilo vocal.',
      uncertain:'Incertidumbres', differences:'Qué cambia', core:'Núcleo sonoro', matches:'Coincidencias', changes:'Cambiar en la siguiente', confidence:'confianza', saved:'Signature guardada en este navegador.',
      promptRule:'Create a new melody, harmony, lyrics and vocal identity. Avoid direct artist imitation, cloned voices, copied hooks and recognizable melodic phrases.'
    },
    'pt-br': {
      ready:'Motor de IA pronto', off:'Motor de IA ainda não ativado', working:'Ouvindo e analisando…', decoding:'Preparando um pequeno trecho para análise…',
      choose:'Escolha primeiro um arquivo de áudio.', refs:'Escolha 2–3 músicas de referência.', max:'Use no máximo 3 músicas de referência.', decode:'O navegador não conseguiu decodificar este áudio.', api:'Não foi possível concluir a análise de IA.',
      localTitle:'ESTIMATIVA TÉCNICA', duration:'Duração', bpm:'BPM estimado', level:'Nível médio', dynamics:'Faixa dinâmica', peak:'Pico', movement:'Movimento de energia', technical:'São medições técnicas: sozinhas não identificam gênero, instrumentos ou estilo vocal.',
      uncertain:'Incertezas', differences:'O que muda', core:'Núcleo sonoro', matches:'Coincidências', changes:'Mudar na próxima', confidence:'confiança', saved:'Signature salva neste navegador.',
      promptRule:'Create a new melody, harmony, lyrics and vocal identity. Avoid direct artist imitation, cloned voices, copied hooks and recognizable melodic phrases.'
    }
  }[lang];

  const reviewTemplate = $('#sig-review-copy');
  const reviewText = key => reviewTemplate?.content?.querySelector(`[data-${key}]`)?.textContent || key;
  const statusEl = $('#sig-ai-status');

  const tabs = $$('[data-sig-tab]');
  const panels = $$('[data-sig-panel]');
  const openTab = id => {
    tabs.forEach(b => b.classList.toggle('active', b.dataset.sigTab === id));
    panels.forEach(p => { const on = p.dataset.sigPanel === id; p.hidden = !on; p.classList.toggle('active', on); });
  };
  tabs.forEach(b => b.addEventListener('click', () => openTab(b.dataset.sigTab)));

  let audioContext;
  const getContext = () => audioContext || (audioContext = new (window.AudioContext || window.webkitAudioContext)());
  const mean = values => values.length ? values.reduce((a,b) => a + b, 0) / values.length : 0;
  const std = values => { const m = mean(values); return Math.sqrt(mean(values.map(v => (v - m) ** 2))); };
  const percentile = (values, p) => {
    if (!values.length) return 0;
    const sorted = [...values].sort((a,b) => a - b);
    return sorted[Math.min(sorted.length - 1, Math.max(0, Math.round((sorted.length - 1) * p)))];
  };
  const db = v => v > 0 ? 20 * Math.log10(v) : -120;
  const fmtTime = seconds => `${Math.floor(seconds / 60)}:${String(Math.round(seconds % 60)).padStart(2,'0')}`;

  async function decode(file) {
    try { return await getContext().decodeAudioData((await file.arrayBuffer()).slice(0)); }
    catch { throw new Error(t.decode); }
  }

  function monoSample(buffer, frame) {
    const i = Math.max(0, Math.min(buffer.length - 1, frame));
    let value = 0;
    for (let c = 0; c < buffer.numberOfChannels; c++) value += buffer.getChannelData(c)[i] / buffer.numberOfChannels;
    return value;
  }

  function estimateTempo(buffer) {
    const sr = buffer.sampleRate;
    const seconds = Math.min(120, buffer.duration);
    const step = Math.max(1, Math.round(sr / 50));
    const points = Math.floor(seconds * sr / step);
    if (points < 100) return null;
    const env = new Float32Array(points);
    for (let p = 0; p < points; p++) {
      const start = p * step;
      const end = Math.min(buffer.length, start + step);
      let sum = 0, n = 0;
      for (let i = start; i < end; i += Math.max(1, Math.floor(step / 24))) { sum += Math.abs(monoSample(buffer, i)); n++; }
      env[p] = sum / Math.max(1, n);
    }
    const onset = new Float32Array(points);
    let avg = 0;
    for (let i = 1; i < points; i++) { onset[i] = Math.max(0, env[i] - env[i - 1]); avg += onset[i]; }
    avg /= Math.max(1, points - 1);
    for (let i = 0; i < points; i++) onset[i] = Math.max(0, onset[i] - avg * .45);
    let bestBpm = 0, bestScore = -Infinity;
    for (let bpm = 60; bpm <= 190; bpm++) {
      const lag = Math.max(1, Math.round(50 * 60 / bpm));
      let score = 0;
      for (let i = lag; i < points; i++) score += onset[i] * onset[i - lag];
      if (score > bestScore) { bestScore = score; bestBpm = bpm; }
    }
    if (!bestBpm) return null;
    while (bestBpm < 75) bestBpm *= 2;
    while (bestBpm > 170) bestBpm /= 2;
    return Math.round(bestBpm);
  }

  function technicalMetrics(buffer) {
    const stride = Math.max(1, Math.floor(buffer.length / 1200000));
    let sumSq = 0, peak = 0, count = 0;
    for (let i = 0; i < buffer.length; i += stride) {
      const v = monoSample(buffer, i), a = Math.abs(v);
      sumSq += v * v; if (a > peak) peak = a; count++;
    }
    const rmsDb = db(Math.sqrt(sumSq / Math.max(1, count)));
    const blockFrames = Math.max(512, Math.round(buffer.sampleRate * .08));
    const blockDb = [];
    for (let start = 0; start < buffer.length; start += blockFrames) {
      const end = Math.min(buffer.length, start + blockFrames);
      let ss = 0, n = 0;
      for (let i = start; i < end; i += stride) { const v = monoSample(buffer, i); ss += v * v; n++; }
      blockDb.push(db(Math.sqrt(ss / Math.max(1, n))));
    }
    const dynamics = Math.max(0, percentile(blockDb, .9) - percentile(blockDb, .1));
    const segments = [];
    const segCount = 12;
    for (let s = 0; s < segCount; s++) {
      const start = Math.floor(buffer.length * s / segCount), end = Math.floor(buffer.length * (s + 1) / segCount);
      let ss = 0, n = 0;
      for (let i = start; i < end; i += stride) { const v = monoSample(buffer, i); ss += v * v; n++; }
      segments.push(db(Math.sqrt(ss / Math.max(1, n))));
    }
    return {
      duration: Number(buffer.duration.toFixed(2)),
      bpm: estimateTempo(buffer),
      rmsDb: Number(rmsDb.toFixed(1)),
      dynamicsDb: Number(dynamics.toFixed(1)),
      peakDb: Number(db(peak).toFixed(1)),
      movementDb: Number(std(segments).toFixed(1))
    };
  }

  function resampleSegment(buffer, startSec, durationSec, targetRate = 16000) {
    const srcRate = buffer.sampleRate;
    const outputLength = Math.max(1, Math.floor(durationSec * targetRate));
    const output = new Float32Array(outputLength);
    const startFrame = startSec * srcRate;
    const ratio = srcRate / targetRate;
    for (let i = 0; i < outputLength; i++) {
      const pos = startFrame + i * ratio;
      const left = Math.floor(pos), right = Math.min(buffer.length - 1, left + 1), frac = pos - left;
      output[i] = monoSample(buffer, left) * (1 - frac) + monoSample(buffer, right) * frac;
    }
    return output;
  }

  function encodeWav(samples, sampleRate = 16000) {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);
    const write = (offset, text) => { for (let i = 0; i < text.length; i++) view.setUint8(offset + i, text.charCodeAt(i)); };
    write(0, 'RIFF'); view.setUint32(4, 36 + samples.length * 2, true); write(8, 'WAVE'); write(12, 'fmt ');
    view.setUint32(16, 16, true); view.setUint16(20, 1, true); view.setUint16(22, 1, true); view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); view.setUint16(32, 2, true); view.setUint16(34, 16, true); write(36, 'data'); view.setUint32(40, samples.length * 2, true);
    let offset = 44;
    for (let i = 0; i < samples.length; i++, offset += 2) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return new Blob([buffer], { type:'audio/wav' });
  }

  function analysisExcerpt(buffer) {
    const maxWhole = 21;
    if (buffer.duration <= maxWhole) return encodeWav(resampleSegment(buffer, 0, buffer.duration));
    const slice = 7;
    const starts = [
      Math.max(0, buffer.duration * .06),
      Math.max(0, buffer.duration * .50 - slice / 2),
      Math.max(0, buffer.duration * .88 - slice)
    ].map(s => Math.min(buffer.duration - slice, s));
    const segments = starts.map(s => resampleSegment(buffer, s, slice));
    const silence = new Float32Array(2400);
    const total = segments.reduce((n, x) => n + x.length, 0) + silence.length * (segments.length - 1);
    const joined = new Float32Array(total);
    let cursor = 0;
    segments.forEach((segment, index) => { joined.set(segment, cursor); cursor += segment.length; if (index < segments.length - 1) cursor += silence.length; });
    return encodeWav(joined);
  }

  async function prepare(file) {
    const buffer = await decode(file);
    return { file, metrics: technicalMetrics(buffer), excerpt: analysisExcerpt(buffer) };
  }

  function localRender(el, metrics) {
    el.replaceChildren();
    const h = document.createElement('h3'); h.textContent = t.localTitle; el.appendChild(h);
    const grid = document.createElement('div'); grid.className = 'metric-grid';
    const items = [
      [t.duration, fmtTime(metrics.duration)],
      [t.bpm, metrics.bpm ? `${metrics.bpm} BPM` : '—'],
      [t.level, `${metrics.rmsDb} dBFS`],
      [t.dynamics, `${metrics.dynamicsDb} dB`],
      [t.peak, `${metrics.peakDb} dBFS`],
      [t.movement, `${metrics.movementDb} dB`]
    ];
    items.forEach(([label, value]) => {
      const card = document.createElement('div'); card.className = 'metric-card';
      const small = document.createElement('small'); small.textContent = label;
      const strong = document.createElement('b'); strong.textContent = value;
      card.append(small, strong); grid.appendChild(card);
    });
    const note = document.createElement('div'); note.className = 'uncertainties'; note.textContent = t.technical;
    el.append(grid, note);
  }

  async function callAI(mode, prepared, extra = {}) {
    const fd = new FormData();
    fd.append('mode', mode); fd.append('lang', lang);
    fd.append('metrics', JSON.stringify(mode === 'build' ? prepared.map(p => p.metrics) : prepared[0].metrics));
    if (extra.hint) fd.append('hint', extra.hint);
    if (extra.focus) fd.append('focus', extra.focus);
    if (extra.target) fd.append('target', JSON.stringify(extra.target));
    prepared.forEach((p, index) => fd.append(`audio${index}`, p.excerpt, `analysis-${index + 1}.wav`));
    const response = await fetch('/api/music-analyze', { method:'POST', body:fd, credentials:'same-origin' });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || t.api);
    return data.analysis;
  }

  function confidenceText(value) {
    if (!Number.isFinite(value)) return '';
    return `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`;
  }

  function addTraitGroup(container, title, items, category, removable = true) {
    const normalized = (items || []).map(item => typeof item === 'string' ? { label:item, confidence:null } : item).filter(item => item?.label);
    if (!normalized.length) return;
    const group = document.createElement('div'); group.className = 'trait-group';
    const heading = document.createElement('strong'); heading.textContent = title;
    const list = document.createElement('div'); list.className = 'trait-list';
    normalized.forEach(item => {
      const chip = document.createElement('span'); chip.className = 'trait-chip'; chip.dataset.trait = item.label; chip.dataset.category = category;
      const label = document.createElement('span'); label.textContent = item.label; chip.appendChild(label);
      const conf = confidenceText(item.confidence);
      if (conf) { const c = document.createElement('span'); c.className = 'confidence'; c.textContent = conf; chip.appendChild(c); }
      if (removable) {
        const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', `Remove ${item.label}`);
        remove.addEventListener('click', () => chip.remove()); chip.appendChild(remove);
      }
      list.appendChild(chip);
    });
    group.append(heading, list); container.appendChild(group);
  }

  function promptFromKept(out, analysis) {
    const groups = {};
    $$('.trait-chip[data-trait]', out).forEach(chip => {
      const category = chip.dataset.category || 'trait';
      (groups[category] ||= []).push(chip.dataset.trait);
    });
    const parts = [];
    if (groups.genre?.length) parts.push(`genre direction: ${groups.genre.join(', ')}`);
    if (groups.mood?.length) parts.push(`mood: ${groups.mood.join(', ')}`);
    if (analysis.tempo?.value) parts.push(`tempo: ${analysis.tempo.value}`);
    if (analysis.meter?.value && !/unknown|uncertain/i.test(analysis.meter.value)) parts.push(`meter: ${analysis.meter.value}`);
    if (analysis.key?.value && !/unknown|uncertain|not enough/i.test(analysis.key.value)) parts.push(`tonal direction: ${analysis.key.value}`);
    if (groups.vocals?.length) parts.push(`vocals: ${groups.vocals.join(', ')}`);
    if (groups.instruments?.length) parts.push(`instrumentation: ${groups.instruments.join(', ')}`);
    if (groups.groove?.length) parts.push(`groove: ${groups.groove.join(', ')}`);
    if (groups.bass?.length) parts.push(`bass: ${groups.bass.join(', ')}`);
    if (groups.harmony?.length) parts.push(`harmony: ${groups.harmony.join(', ')}`);
    if (groups.production?.length) parts.push(`production: ${groups.production.join(', ')}`);
    if (groups.distinctive?.length) parts.push(`distinctive traits: ${groups.distinctive.join(', ')}`);
    const exclude = (analysis.exclude || []).filter(Boolean);
    return `Original music direction: ${parts.join('; ')}. ${t.promptRule}${exclude.length ? ` Avoid: ${exclude.join(', ')}.` : ''}`;
  }

  function promptBox(out, analysis, initialPrompt, allowRebuild = false) {
    const box = document.createElement('div'); box.className = 'prompt-box';
    const heading = document.createElement('strong'); heading.textContent = reviewText('prompt');
    const text = document.createElement('div'); text.className = 'prompt-text'; text.textContent = initialPrompt || '';
    const actions = document.createElement('div'); actions.className = 'prompt-actions';
    if (allowRebuild) {
      const rebuild = document.createElement('button'); rebuild.type = 'button'; rebuild.className = 'mini-btn'; rebuild.textContent = reviewText('rebuild');
      rebuild.addEventListener('click', () => { text.textContent = promptFromKept(out, analysis); out.dataset.prompt = text.textContent; });
      actions.appendChild(rebuild);
    }
    const copy = document.createElement('button'); copy.type = 'button'; copy.className = 'mini-btn'; copy.textContent = reviewText('copy');
    copy.addEventListener('click', async () => {
      const value = text.textContent.trim(); if (!value) return;
      try { await navigator.clipboard.writeText(value); const old = copy.textContent; copy.textContent = `✓ ${reviewText('copied')}`; setTimeout(() => copy.textContent = old, 1000); } catch {}
    });
    actions.appendChild(copy); box.append(heading, text, actions); out.appendChild(box); out.dataset.prompt = text.textContent;
  }

  function renderSingleAI(out, a) {
    out.replaceChildren();
    const title = document.createElement('h3'); title.textContent = a.summary || reviewText('review'); out.appendChild(title);
    const grid = document.createElement('div'); grid.className = 'metric-grid';
    const metrics = [
      ['Tempo', a.tempo?.value || '—'], ['Meter', a.meter?.value || '—'], ['Key / mode', a.key?.value || '—']
    ];
    metrics.forEach(([label,value]) => { const card=document.createElement('div');card.className='metric-card';const s=document.createElement('small');s.textContent=label;const b=document.createElement('b');b.textContent=value;card.append(s,b);grid.appendChild(card); });
    out.appendChild(grid);
    const review = document.createElement('div'); review.className = 'trait-group';
    const rh = document.createElement('strong'); rh.textContent = reviewText('review');
    const rp = document.createElement('div'); rp.className = 'uncertainties'; rp.textContent = reviewText('review-hint');
    review.append(rh, rp); out.appendChild(review);
    addTraitGroup(out, 'Genre / style', a.genre, 'genre');
    addTraitGroup(out, 'Mood', a.moods, 'mood');
    const vocalTags = [...(a.vocals?.delivery || []), ...(a.vocals?.character || [])].map(label => ({ label, confidence:a.vocals?.confidence }));
    if (a.vocals?.presence && !/none|no vocal|instrumental/i.test(a.vocals.presence)) vocalTags.unshift({ label:a.vocals.presence, confidence:a.vocals?.confidence });
    addTraitGroup(out, 'Vocals', vocalTags, 'vocals');
    addTraitGroup(out, 'Instruments', a.instruments, 'instruments');
    addTraitGroup(out, 'Groove', a.groove, 'groove');
    addTraitGroup(out, 'Bass', a.bass, 'bass');
    addTraitGroup(out, 'Harmony', a.harmony, 'harmony');
    addTraitGroup(out, 'Production', a.production, 'production');
    addTraitGroup(out, 'Distinctive traits', (a.distinctiveTraits || []).map(label => ({label, confidence:null})), 'distinctive');
    if (a.uncertainties?.length) { const u=document.createElement('div');u.className='uncertainties';u.textContent=`${t.uncertain}: ${a.uncertainties.join(' · ')}`;out.appendChild(u); }
    promptBox(out, a, a.suggestedPrompt, true);
  }

  function renderBuild(out, a) {
    out.replaceChildren(); const h=document.createElement('h3');h.textContent=a.summary || t.core;out.appendChild(h);
    addTraitGroup(out, t.core, a.sharedTraits, 'shared', true);
    if (a.coreSignature?.length) { const g=document.createElement('div');g.className='trait-group';const s=document.createElement('strong');s.textContent=t.core;const list=document.createElement('ul');a.coreSignature.forEach(x=>{const li=document.createElement('li');li.textContent=x;list.appendChild(li);});g.append(s,list);out.appendChild(g); }
    if (a.referenceDifferences?.length) { const g=document.createElement('div');g.className='trait-group';const s=document.createElement('strong');s.textContent=t.differences;const list=document.createElement('ul');a.referenceDifferences.forEach(x=>{const li=document.createElement('li');li.textContent=x;list.appendChild(li);});g.append(s,list);out.appendChild(g); }
    if (a.uncertainties?.length) { const u=document.createElement('div');u.className='uncertainties';u.textContent=`${t.uncertain}: ${a.uncertainties.join(' · ')}`;out.appendChild(u); }
    promptBox(out, a, a.suggestedPrompt, false);
    const saved=document.createElement('div');saved.className='uncertainties';saved.textContent=t.saved;out.appendChild(saved);
  }

  function renderCompare(out, a) {
    out.replaceChildren(); const h=document.createElement('h3');h.textContent=a.summary || t.matches;out.appendChild(h);
    addTraitGroup(out, t.matches, a.matches, 'matches', false);
    addTraitGroup(out, t.differences, a.differences, 'differences', false);
    if (a.nextChanges?.length) { const g=document.createElement('div');g.className='trait-group';const s=document.createElement('strong');s.textContent=t.changes;const list=document.createElement('ul');a.nextChanges.forEach(x=>{const li=document.createElement('li');li.textContent=x;list.appendChild(li);});g.append(s,list);out.appendChild(g); }
    if (a.uncertainties?.length) { const u=document.createElement('div');u.className='uncertainties';u.textContent=`${t.uncertain}: ${a.uncertainties.join(' · ')}`;out.appendChild(u); }
    promptBox(out, a, a.revisedPrompt, false);
  }

  async function checkEngine() {
    try {
      const response = await fetch('/api/music-analyze', { credentials:'same-origin', cache:'no-store' });
      const data = await response.json();
      statusEl.textContent = data.configured ? `${t.ready} · ${data.model || ''}` : t.off;
      statusEl.dataset.ready = data.configured ? '1' : '0';
    } catch { statusEl.textContent = t.off; statusEl.dataset.ready = '0'; }
  }
  checkEngine();

  const singleForm = $('#sig-single-form');
  const singleLocal = $('#sig-single-local-output');
  const singleAI = $('#sig-single-ai-output');
  let lastSinglePrepared = null;
  async function getSinglePrepared() {
    const file = $('#sig-single-file')?.files?.[0];
    if (!file) throw new Error(t.choose);
    if (lastSinglePrepared?.file === file) return lastSinglePrepared.prepared;
    const prepared = await prepare(file); lastSinglePrepared = { file, prepared }; return prepared;
  }
  $('#sig-single-local')?.addEventListener('click', async () => {
    singleLocal.textContent = t.decoding;
    try { const prepared = await getSinglePrepared(); localRender(singleLocal, prepared.metrics); }
    catch (e) { singleLocal.textContent = e.message || t.decode; }
  });
  singleForm?.addEventListener('submit', async event => {
    event.preventDefault(); singleAI.textContent = t.decoding;
    try {
      const prepared = await getSinglePrepared(); localRender(singleLocal, prepared.metrics); singleAI.textContent = t.working;
      const analysis = await callAI('single', [prepared], { focus:$('#sig-single-focus')?.value || 'balanced', hint:$('#sig-single-hint')?.value || '' });
      renderSingleAI(singleAI, analysis);
    } catch (e) { singleAI.textContent = e.message || t.api; }
  });
  $('#sig-single-file')?.addEventListener('change', () => { lastSinglePrepared = null; });

  const buildForm = $('#sig-build-form');
  const buildOut = $('#sig-build-output');
  buildForm?.addEventListener('submit', async event => {
    event.preventDefault(); const files = Array.from($('#sig-build-files')?.files || []);
    if (files.length < 2) { buildOut.textContent = t.refs; return; }
    if (files.length > 3) { buildOut.textContent = t.max; return; }
    buildOut.textContent = t.decoding;
    try {
      const prepared = []; for (const file of files) prepared.push(await prepare(file));
      buildOut.textContent = t.working;
      const analysis = await callAI('build', prepared, { focus:'shared musical identity' });
      try { localStorage.setItem('rythero-signature-v2', JSON.stringify(analysis)); } catch {}
      renderBuild(buildOut, analysis);
    } catch (e) { buildOut.textContent = e.message || t.api; }
  });

  const compareForm = $('#sig-compare-form');
  const compareOut = $('#sig-compare-output');
  compareForm?.addEventListener('submit', async event => {
    event.preventDefault(); let target = null;
    try { target = JSON.parse(localStorage.getItem('rythero-signature-v2') || 'null'); } catch {}
    if (!target) { compareOut.textContent = root.querySelector('[data-sig-panel="compare"] .sig-output')?.textContent || t.api; return; }
    const file = $('#sig-compare-file')?.files?.[0]; if (!file) { compareOut.textContent = t.choose; return; }
    compareOut.textContent = t.decoding;
    try { const prepared = await prepare(file); compareOut.textContent = t.working; const analysis = await callAI('compare', [prepared], { target }); renderCompare(compareOut, analysis); }
    catch (e) { compareOut.textContent = e.message || t.api; }
  });

  $('#sig-reset')?.addEventListener('click', () => {
    try { localStorage.removeItem('rythero-signature-v1'); localStorage.removeItem('rythero-signature-v2'); } catch {}
    singleForm?.reset(); buildForm?.reset(); compareForm?.reset(); location.reload();
  });
})();
