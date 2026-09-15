(() => {
  const lang = document.documentElement.lang === 'es' ? 'es' : document.documentElement.lang === 'pt-BR' ? 'pt-br' : 'en';
  const t = {
    en:{
      empty:'Add a little information first.', copied:'Copied.', latestMissing:'Create a Song Blueprint first.',
      issues:'Issues found', repaired:'Repaired prompt', noIssues:'No obvious conflicts found. The prompt is already fairly focused.',
      vague:'The prompt is very short and may leave too many decisions to the generator.', long:'The prompt is long enough to dilute priorities.',
      imitation:'Artist-imitation wording detected. Translate the reference into musical traits instead.', conflict:'Potentially conflicting instructions detected',
      genres:'Too many genre directions can weaken the identity.', bpm:'More than one BPM value appears in the prompt.',
      blueprintLabels:['Direction','Tempo','Key direction','Core palette','Vocal','Arrangement','Production','Avoid'], finalPrompt:'GENERATOR PROMPT',
      dna:'STYLE DNA', timeline:'TIMELINE', lyricPlan:'LYRICS PLAN', audioLabels:['Duration','Estimated BPM','Average level','Dynamics'],
      energyLow:'Low',energyMedium:'Medium',energyHigh:'High',
      sections:{Intro:'Intro',Hook:'Hook',Verse:'Verse',Verse1:'Verse 1',Verse2:'Verse 2','Pre-Chorus':'Pre-Chorus',Chorus:'Chorus',Breakdown:'Breakdown',Bridge:'Bridge',Drop:'Drop','Drop 2':'Drop 2',Outro:'Outro','Final Chorus':'Final Chorus'},
      lyricJobs:{Intro:'Set the world quickly; one concrete image is enough.',Hook:'State the central emotional contradiction in the simplest memorable language.',Verse1:'Establish the situation and the first specific detail.',Verse2:'Advance the story; do not repeat Verse 1 with different rhymes.','Pre-Chorus':'Increase pressure and point clearly toward the hook.',Chorus:'Deliver the emotional thesis and the most repeatable phrase.',Breakdown:'Reduce information; expose a vulnerable or contrasting thought.',Bridge:'Reveal something new that changes how the earlier lines feel.','Final Chorus':'Return to the hook with one changed line or stronger final meaning.',Outro:'Leave one image, consequence or unresolved question.'}
    },
    es:{
      empty:'Añade primero un poco de información.', copied:'Copiado.', latestMissing:'Crea primero un Song Blueprint.',
      issues:'Problemas detectados', repaired:'Prompt reparado', noIssues:'No se han encontrado conflictos claros. El prompt ya está bastante enfocado.',
      vague:'El prompt es muy corto y deja demasiadas decisiones al generador.', long:'El prompt es tan largo que puede diluir las prioridades.',
      imitation:'Se ha detectado lenguaje de imitación de artistas. Conviene traducir la referencia a rasgos musicales.', conflict:'Posibles instrucciones contradictorias',
      genres:'Demasiadas direcciones de género pueden debilitar la identidad.', bpm:'Aparece más de un valor BPM en el prompt.',
      blueprintLabels:['Dirección','Tempo','Dirección tonal','Paleta base','Voz','Arreglo','Producción','Evitar'], finalPrompt:'PROMPT PARA GENERADOR',
      dna:'STYLE DNA', timeline:'LÍNEA DE TIEMPO', lyricPlan:'PLAN DE LETRA', audioLabels:['Duración','BPM estimado','Nivel medio','Dinámica'],
      energyLow:'Baja',energyMedium:'Media',energyHigh:'Alta',
      sections:{Intro:'Intro',Hook:'Gancho',Verse:'Verso',Verse1:'Verso 1',Verse2:'Verso 2','Pre-Chorus':'Pre-estribillo',Chorus:'Estribillo',Breakdown:'Breakdown',Bridge:'Puente',Drop:'Drop','Drop 2':'Drop 2',Outro:'Outro','Final Chorus':'Estribillo final'},
      lyricJobs:{Intro:'Sitúa el mundo rápidamente; basta una imagen concreta.',Hook:'Expresa la contradicción emocional central con la frase más simple y memorable.',Verse1:'Presenta la situación y el primer detalle específico.',Verse2:'Haz avanzar la historia; no repitas el verso 1 con otras rimas.','Pre-Chorus':'Aumenta la tensión y conduce claramente hacia el estribillo.',Chorus:'Entrega la tesis emocional y la frase más repetible.',Breakdown:'Reduce información y deja una idea vulnerable o de contraste.',Bridge:'Revela algo nuevo que cambie cómo se entienden las líneas anteriores.','Final Chorus':'Vuelve al gancho cambiando una línea o reforzando el significado final.',Outro:'Deja una imagen, consecuencia o pregunta abierta.'}
    },
    'pt-br':{
      empty:'Adicione primeiro um pouco de informação.', copied:'Copiado.', latestMissing:'Crie primeiro um Song Blueprint.',
      issues:'Problemas encontrados', repaired:'Prompt corrigido', noIssues:'Nenhum conflito óbvio foi encontrado. O prompt já está bem focado.',
      vague:'O prompt é muito curto e deixa decisões demais para o gerador.', long:'O prompt é longo o suficiente para diluir as prioridades.',
      imitation:'Foi detectada linguagem de imitação de artista. Converta a referência em características musicais.', conflict:'Possíveis instruções contraditórias',
      genres:'Direções de gênero demais podem enfraquecer a identidade.', bpm:'Há mais de um valor de BPM no prompt.',
      blueprintLabels:['Direção','Tempo','Direção tonal','Paleta base','Voz','Arranjo','Produção','Evitar'], finalPrompt:'PROMPT PARA GERADOR',
      dna:'STYLE DNA', timeline:'LINHA DO TEMPO', lyricPlan:'PLANO DE LETRA', audioLabels:['Duração','BPM estimado','Nível médio','Dinâmica'],
      energyLow:'Baixa',energyMedium:'Média',energyHigh:'Alta',
      sections:{Intro:'Intro',Hook:'Gancho',Verse:'Verso',Verse1:'Verso 1',Verse2:'Verso 2','Pre-Chorus':'Pré-refrão',Chorus:'Refrão',Breakdown:'Breakdown',Bridge:'Ponte',Drop:'Drop','Drop 2':'Drop 2',Outro:'Outro','Final Chorus':'Refrão final'},
      lyricJobs:{Intro:'Apresente o mundo rapidamente; uma imagem concreta já basta.',Hook:'Expresse a contradição emocional central da forma mais simples e memorável.',Verse1:'Apresente a situação e o primeiro detalhe específico.',Verse2:'Faça a história avançar; não repita o verso 1 com outras rimas.','Pre-Chorus':'Aumente a pressão e conduza claramente ao refrão.',Chorus:'Entregue a tese emocional e a frase mais repetível.',Breakdown:'Reduza a informação e exponha uma ideia vulnerável ou contrastante.',Bridge:'Revele algo novo que mude a leitura das linhas anteriores.','Final Chorus':'Volte ao gancho mudando uma linha ou reforçando o sentido final.',Outro:'Deixe uma imagem, consequência ou pergunta em aberto.'}
    }
  }[lang];

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const clean = value => String(value || '').trim();
  const normalize = value => clean(value).toLocaleLowerCase();
  const escapeLine = value => clean(value).replace(/\s+/g,' ');
  const formatTime = seconds => { const total = Math.max(0, Math.round(seconds)); return `${Math.floor(total/60)}:${String(total%60).padStart(2,'0')}`; };
  const durationToSeconds = value => { const [m,s] = String(value).split(':').map(Number); return (m || 0) * 60 + (s || 0); };
  const formData = form => Object.fromEntries(new FormData(form).entries());
  const setPlain = (el, text) => { if (el) el.textContent = text; };
  const copyText = async text => { if (!text) return false; try { await navigator.clipboard.writeText(text); return true; } catch { return false; } };

  const tabs = $$('[data-studio-tab]');
  const panels = $$('[data-studio-panel]');
  const openTab = name => {
    tabs.forEach(button => button.classList.toggle('active', button.dataset.studioTab === name));
    panels.forEach(panel => { const active = panel.dataset.studioPanel === name; panel.hidden = !active; panel.classList.toggle('active', active); });
    if (history.replaceState) history.replaceState(null,'',`#${name}`);
  };
  tabs.forEach(button => button.addEventListener('click', () => openTab(button.dataset.studioTab)));
  const hash = location.hash.replace('#','');
  if (tabs.some(button => button.dataset.studioTab === hash)) openTab(hash);

  const styleProfiles = [
    {keys:['afro house'], bpm:[122,126], palette:'deep kick, warm sub bass, organic percussion, restrained synth or piano motifs', production:'rolling low end, hypnotic development, gradual layer changes, clean club depth', avoid:'overcrowded drops and constant maximal energy'},
    {keys:['amapiano'], bpm:[110,116], palette:'log drum, spacious percussion, warm chords, light melodic accents', production:'patient groove, deep pocket, generous negative space and evolving dancefloor energy', avoid:'dense wall-of-sound production'},
    {keys:['afrobeats','afrobeat'], bpm:[96,112], palette:'syncopated percussion, elastic bass, light guitar or synth motifs, vocal-forward arrangement', production:'warm groove, crisp percussion and uncluttered melodic movement', avoid:'overly heavy low end that masks the vocal'},
    {keys:['k-pop'], bpm:[108,128], palette:'polished drums, layered synths, bass movement, contrast textures and hook-focused vocal layers', production:'sharp sectional contrast, controlled switch-ups and glossy modern finish', avoid:'random genre changes without a clear central hook'},
    {keys:['alt-r&b','alternative r&b'], bpm:[74,96], palette:'soft drums, sub bass, atmospheric keys, restrained synth texture', production:'intimate vocal space, detailed low end, sparse verses and wider hook sections', avoid:'overproduced vocal stacks in every section'},
    {keys:['r&b'], bpm:[76,102], palette:'warm drums, bass, Rhodes or soft keys, selective atmospheric textures', production:'smooth pocket, expressive vocal focus and controlled harmonic color', avoid:'busy percussion that fights the vocal'},
    {keys:['trap'], bpm:[132,150], palette:'deep 808, crisp hats, focused drums, dark or minimal melodic bed', production:'strong pocket, controlled transients and selective variation', avoid:'continuous hi-hat tricks and flat four-bar looping'},
    {keys:['hip-hop','rap'], bpm:[82,100], palette:'focused drums, bass movement, one strong sample or melodic motif, vocal space', production:'clear rhythmic pocket, section changes that support the lyric and punch without clutter', avoid:'too many competing melodic layers'},
    {keys:['house'], bpm:[122,128], palette:'four-on-the-floor kick, bass groove, percussion, concise chord or synth motif', production:'stable dance pulse, evolving layers and clear kick/bass separation', avoid:'long static sections with no arrangement movement'},
    {keys:['techno'], bpm:[128,140], palette:'driving kick, sub or rumble, percussion, focused synth texture', production:'tension through automation, texture and gradual structural changes', avoid:'pop-style over-arrangement'},
    {keys:['drum & bass','dnb'], bpm:[170,176], palette:'break-driven drums, sub bass, atmospheric pads or stabs, concise hooks', production:'fast momentum, clean sub relationship and high-contrast transitions', avoid:'muddy low mids and overlong breakdowns'},
    {keys:['reggaeton'], bpm:[90,102], palette:'tight dembow groove, bass, concise melodic motif and vocal-forward accents', production:'direct rhythmic pocket, clean low end and immediate topline space', avoid:'crowded percussion and unnecessary EDM drops'},
    {keys:['brazilian funk','baile funk'], bpm:[130,150], palette:'hard percussive groove, sub impact, sparse melodic accents and rhythmic vocal space', production:'direct energy, fast transitions and punchy low end', avoid:'soft unfocused drums'},
    {keys:['flamenco'], bpm:[92,112], palette:'nylon guitar, palmas or cajón, modern bass and restrained contemporary drums', production:'human rhythmic feel with modern low-end support and clear vocal space', avoid:'turning every section into a dense fusion collage'},
    {keys:['arabic pop','raï','rai'], bpm:[96,120], palette:'regional melodic color, modern drums, bass, selective strings or plucked instruments', production:'expressive vocal focus, contemporary pop structure and rhythmic clarity', avoid:'tokenistic instrument overload'},
    {keys:['rock'], bpm:[108,142], palette:'drums, bass, guitars and one defining texture or lead element', production:'performance-led dynamics, strong chorus lift and clear live-band roles', avoid:'over-quantized sterile feel'},
    {keys:['lo-fi'], bpm:[70,90], palette:'soft drums, warm bass, mellow keys or guitar, subtle texture', production:'relaxed transients, imperfect warmth and uncluttered arrangement', avoid:'hyper-bright polish'},
    {keys:['synthwave'], bpm:[96,118], palette:'analog-style synths, pulsing bass, electronic drums and cinematic pads', production:'retro-futurist depth, nocturnal atmosphere and clear melodic hierarchy', avoid:'excessive layers that blur the lead motif'},
    {keys:['pop'], bpm:[100,124], palette:'focused drums, bass, chord foundation and one memorable hook element', production:'clear melodic hierarchy, concise sections and polished contemporary finish', avoid:'generic mid-tempo sameness and weak section contrast'}
  ];

  const defaultProfile = {bpm:[100,120], palette:'focused drums, supportive bass, one harmonic foundation and one memorable hook element', production:'modern, clean, genre-aware production with purposeful section contrast', avoid:'flat looped arrangement, unnecessary layers and unfocused transitions'};
  const findProfile = style => { const value = normalize(style); return styleProfiles.find(profile => profile.keys.some(key => value.includes(key))) || defaultProfile; };
  const keyForMood = mood => { const value = normalize(mood); if (/(dark|melancholic|nocturnal|defiant|intimate)/.test(value)) return 'minor key center; try G minor, D minor or a nearby comfortable vocal key'; if (/(hopeful|euphoric|uplifting|romantic)/.test(value)) return 'major or relative-major lift; keep some modal color if the style needs tension'; return 'choose a key around the lead vocal range; minor/major ambiguity can keep the track flexible'; };
  const bpmFor = (profile, energy) => { let [lo,hi] = profile.bpm || defaultProfile.bpm; const e = normalize(energy); if (e === 'low') hi = Math.max(lo, Math.round((lo+hi)/2)); if (e === 'high') lo = Math.min(hi, Math.round((lo+hi)/2)); return `${lo}–${hi} BPM`; };

  const arrangementShapes = {
    'Hook-first': [['Hook',.10],['Verse1',.20],['Chorus',.17],['Verse2',.19],['Breakdown',.12],['Final Chorus',.17],['Outro',.05]],
    'Pop build': [['Intro',.06],['Verse1',.18],['Pre-Chorus',.10],['Chorus',.17],['Verse2',.17],['Chorus',.15],['Bridge',.10],['Final Chorus',.07]],
    'Rap / verse-led': [['Intro',.05],['Hook',.12],['Verse1',.25],['Hook',.12],['Verse2',.25],['Breakdown',.08],['Final Chorus',.10],['Outro',.03]],
    'Club / drop-led': [['Intro',.10],['Verse1',.12],['Pre-Chorus',.08],['Drop',.20],['Breakdown',.15],['Drop 2',.23],['Outro',.12]],
    'Slow burn': [['Intro',.10],['Verse1',.23],['Chorus',.15],['Verse2',.22],['Bridge',.12],['Final Chorus',.14],['Outro',.04]]
  };
  const buildArrangement = (durationValue, shape='Hook-first') => {
    const total = durationToSeconds(durationValue); const recipe = arrangementShapes[shape] || arrangementShapes['Hook-first']; let cursor = 0;
    return recipe.map(([name,ratio], index) => { const start = cursor; const end = index === recipe.length - 1 ? total : cursor + total * ratio; cursor = end; return {name,start,end,duration:end-start,ratio}; });
  };

  const renderCards = (output, cards, promptLabel, promptText) => {
    if (!output) return; output.replaceChildren(); const grid = document.createElement('div'); grid.className = 'out-grid';
    cards.forEach(([label,value]) => { const card = document.createElement('div'); card.className = 'out-card'; const small = document.createElement('small'); small.textContent = label; const strong = document.createElement('b'); strong.textContent = value; card.append(small,strong); grid.appendChild(card); });
    output.appendChild(grid);
    if (promptText) { const block = document.createElement('div'); block.className = 'prompt-block'; const title = document.createElement('strong'); title.textContent = promptLabel; const text = document.createElement('div'); text.style.marginTop = '7px'; text.textContent = promptText; block.append(title,text); output.appendChild(block); }
  };

  const blueprintForm = $('#blueprint-form'); const blueprintOutput = $('#blueprint-output'); let latestBlueprint = ''; let latestBlueprintPrompt = '';
  const saveLatestBlueprint = value => { latestBlueprint = value; try { localStorage.setItem('rythero-blueprint-v1', value); } catch {} };
  try { latestBlueprint = localStorage.getItem('rythero-blueprint-v1') || ''; } catch {}
  const createBlueprint = data => {
    const idea = escapeLine(data.idea); const style = escapeLine(data.style) || 'contemporary pop / hybrid'; const mood = escapeLine(data.mood) || 'focused'; const energy = escapeLine(data.energy) || 'Medium'; const vocal = escapeLine(data.vocal) || 'lead vocal that suits the style'; const duration = escapeLine(data.duration) || '3:00'; const lyricsLanguage = escapeLine(data.language) || 'English';
    const profile = findProfile(style); const tempo = bpmFor(profile, energy); const key = keyForMood(mood); const sections = buildArrangement(duration, 'Hook-first'); const arrangementText = sections.map(s => `${s.name} ${formatTime(s.start)}–${formatTime(s.end)}`).join(' · '); const direction = idea ? `${style}; ${mood}; ${idea}` : `${style}; ${mood}; clear emotional premise`;
    const vocalText = lyricsLanguage === 'Instrumental' ? 'Instrumental; no lead vocal' : `${vocal}; lyrics in ${lyricsLanguage}; expressive, intelligible phrasing with a distinct performance character`;
    const prompt = [`Create a cohesive ${style} track with ${mood.toLowerCase()} mood and ${energy.toLowerCase()} energy.`, idea ? `Song concept: ${idea}.` : 'Give the song a clear emotional premise and one memorable central idea.', `Tempo direction: ${tempo}. Tonal direction: ${key}.`, `Core palette: ${profile.palette}.`, `Vocal direction: ${vocalText}.`, `Target length: about ${duration}. Use an arrangement with an early memorable hook, purposeful section contrast and a stronger final payoff.`, `Production: ${profile.production}.`, `Avoid ${profile.avoid}. Keep the result original, coherent and performed rather than mechanically looped.`].join(' ');
    const plain = [`${t.blueprintLabels[0]}: ${direction}`,`${t.blueprintLabels[1]}: ${tempo}`,`${t.blueprintLabels[2]}: ${key}`,`${t.blueprintLabels[3]}: ${profile.palette}`,`${t.blueprintLabels[4]}: ${vocalText}`,`${t.blueprintLabels[5]}: ${arrangementText}`,`${t.blueprintLabels[6]}: ${profile.production}`,`${t.blueprintLabels[7]}: ${profile.avoid}`,'',`${t.finalPrompt}:`,prompt].join('\n');
    return {plain,prompt,cards:[[t.blueprintLabels[0],direction],[t.blueprintLabels[1],tempo],[t.blueprintLabels[2],key],[t.blueprintLabels[3],profile.palette],[t.blueprintLabels[4],vocalText],[t.blueprintLabels[5],arrangementText],[t.blueprintLabels[6],profile.production],[t.blueprintLabels[7],profile.avoid]]};
  };
  blueprintForm?.addEventListener('submit', event => { event.preventDefault(); const result = createBlueprint(formData(blueprintForm)); latestBlueprintPrompt = result.prompt; saveLatestBlueprint(result.plain); renderCards(blueprintOutput, result.cards, t.finalPrompt, result.prompt); });
  $('#blueprint-to-export')?.addEventListener('click', () => { if (!latestBlueprint) { setPlain(blueprintOutput, t.latestMissing); return; } const exportSource = $('#export-form textarea[name="source"]'); if (exportSource) exportSource.value = latestBlueprint; openTab('export'); exportSource?.focus(); });

  const doctorForm = $('#doctor-form'); const doctorOutput = $('#doctor-output');
  const genreWords = ['pop','rock','trap','hip-hop','hip hop','house','techno','r&b','reggaeton','afrobeats','afro house','amapiano','drill','jazz','country','metal','folk','synthwave','hyperpop','flamenco','dnb','drum & bass','garage'];
  const conflictPairs = [['minimal','dense'],['instrumental','lead vocal'],['no vocal','vocal-forward'],['dry vocal','huge reverb'],['fade out','no fade'],['slow tempo','fast tempo'],['acoustic only','electronic drums']];
  const repairPrompt = source => {
    let repaired = clean(source).replace(/\s+/g,' '); repaired = repaired.replace(/\b(in the style of|sounds exactly like|sound exactly like)\s+[^,.;]+/gi,'with a distinct original identity built from clear musical traits');
    const clauses = repaired.split(/(?<=[.!?])\s+|,\s+/).map(clean).filter(Boolean); const seen = new Set(); const unique = []; clauses.forEach(clause => { const key = normalize(clause); if (!seen.has(key)) { seen.add(key); unique.push(clause); } }); repaired = unique.join(', ').replace(/,\s*([.!?])/g,'$1');
    const words = repaired.split(/\s+/); if (words.length > 120) repaired = words.slice(0,120).join(' ') + '.'; if (words.length < 12) repaired += ' Use a clear genre identity, one memorable hook, focused instrumentation, purposeful section contrast and a coherent modern production direction.'; if (!/[.!?]$/.test(repaired)) repaired += '.'; repaired += ' Keep priorities internally consistent and avoid unnecessary layers or random style switching.'; return repaired;
  };
  doctorForm?.addEventListener('submit', event => {
    event.preventDefault(); const source = clean(formData(doctorForm).prompt); if (!source) { setPlain(doctorOutput,t.empty); return; } const lower = normalize(source); const words = source.split(/\s+/).filter(Boolean); const issues = [];
    if (words.length < 12) issues.push(t.vague); if (words.length > 140) issues.push(t.long); if (/(in the style of|sounds exactly like|sound exactly like)/i.test(source)) issues.push(t.imitation); const conflicts = conflictPairs.filter(([a,b]) => lower.includes(a) && lower.includes(b)); if (conflicts.length) issues.push(`${t.conflict}: ${conflicts.map(x=>x.join(' ↔ ')).join(', ')}.`); const genreCount = genreWords.filter(g => lower.includes(g)).length; if (genreCount > 4) issues.push(t.genres); const bpmValues = [...source.matchAll(/\b(\d{2,3})\s*bpm\b/gi)].map(m=>m[1]); if (new Set(bpmValues).size > 1) issues.push(t.bpm);
    const repaired = repairPrompt(source); doctorOutput.replaceChildren(); const issueTitle = document.createElement('strong'); issueTitle.textContent = t.issues; const list = document.createElement('ul'); list.style.margin = '8px 0 16px 18px'; (issues.length ? issues : [t.noIssues]).forEach(issue => { const li = document.createElement('li'); li.textContent = issue; list.appendChild(li); }); const repairedTitle = document.createElement('strong'); repairedTitle.textContent = t.repaired; const repairedText = document.createElement('div'); repairedText.style.marginTop = '7px'; repairedText.textContent = repaired; doctorOutput.append(issueTitle,list,repairedTitle,repairedText);
  });

  const dnaForm = $('#dna-form'); const dnaOutput = $('#dna-output'); let currentDna = null;
  const buildDna = data => { const name = escapeLine(data.name) || 'Untitled DNA'; const values = {groove:escapeLine(data.groove),texture:escapeLine(data.texture),era:escapeLine(data.era),harmony:escapeLine(data.harmony),voice:escapeLine(data.voice),space:escapeLine(data.space),energy:escapeLine(data.energy)}; const prompt = `Style DNA “${name}”: ${values.groove.toLowerCase()} groove, ${values.texture.toLowerCase()} texture, ${values.era.toLowerCase()} finish, ${values.harmony.toLowerCase()} harmony, ${values.voice.toLowerCase()} vocal character, ${values.space.toLowerCase()} space and ${values.energy.toLowerCase()} energy. Preserve this identity across songs while changing melodies, stories and arrangements. Avoid direct artist imitation.`; return {name,values,prompt}; };
  const renderDna = dna => { renderCards(dnaOutput,[['Groove',dna.values.groove],['Texture',dna.values.texture],['Era',dna.values.era],['Harmony',dna.values.harmony],['Voice',dna.values.voice],['Space',dna.values.space],['Energy',dna.values.energy]],t.dna,dna.prompt); };
  dnaForm?.addEventListener('submit', event => { event.preventDefault(); currentDna = buildDna(formData(dnaForm)); renderDna(currentDna); });
  const dnaList = $('#dna-saved-list');
  const getSavedDna = () => { try { return JSON.parse(localStorage.getItem('rythero-style-dna-v1') || '[]'); } catch { return []; } };
  const setSavedDna = items => { try { localStorage.setItem('rythero-style-dna-v1', JSON.stringify(items.slice(0,5))); } catch {} };
  const renderSavedDna = () => { if (!dnaList) return; dnaList.replaceChildren(); getSavedDna().forEach((item,index) => { const button = document.createElement('button'); button.type = 'button'; button.textContent = item.name; button.addEventListener('click', () => { if (!dnaForm) return; Object.entries(item.values || {}).forEach(([key,value]) => { const field = dnaForm.elements.namedItem(key); if (field) field.value = value; }); const nameField = dnaForm.elements.namedItem('name'); if (nameField) nameField.value = item.name; currentDna = item; renderDna(item); }); button.title = `#${index+1}`; dnaList.appendChild(button); }); };
  $('#dna-save')?.addEventListener('click', () => { if (!dnaForm) return; currentDna = currentDna || buildDna(formData(dnaForm)); const items = getSavedDna().filter(item => normalize(item.name) !== normalize(currentDna.name)); items.unshift(currentDna); setSavedDna(items); renderSavedDna(); renderDna(currentDna); });
  renderSavedDna();

  const arrangementForm = $('#arrangement-form'); const arrangementOutput = $('#arrangement-output'); const arrangementTimeline = $('#arrangement-timeline');
  const renderTimeline = sections => { if (!arrangementTimeline) return; arrangementTimeline.replaceChildren(); sections.forEach(section => { const block = document.createElement('div'); block.className = 'timeline-segment'; block.style.flex = `${Math.max(.04,section.duration)} 1 0`; const localized = t.sections[section.name] || section.name; block.textContent = `${localized}\n${formatTime(section.start)}`; block.title = `${localized} ${formatTime(section.start)}–${formatTime(section.end)}`; arrangementTimeline.appendChild(block); }); };
  arrangementForm?.addEventListener('submit', event => { event.preventDefault(); const data = formData(arrangementForm); const sections = buildArrangement(data.duration, data.shape); renderTimeline(sections); const lines = sections.map((section,index) => { const localized = t.sections[section.name] || section.name; const purpose = index === 0 ? 'Set the identity quickly.' : /Hook|Chorus|Drop/.test(section.name) ? 'Deliver the clearest payoff and strongest memory.' : /Verse/.test(section.name) ? 'Advance the idea with new detail and controlled density.' : /Bridge|Breakdown/.test(section.name) ? 'Create contrast before the final payoff.' : 'Close without overstaying.'; return `${formatTime(section.start)}–${formatTime(section.end)} · ${localized} — ${purpose}`; }); setPlain(arrangementOutput, `${t.timeline}\n${lines.join('\n')}`); });

  const lyricsForm = $('#lyrics-form'); const lyricsOutput = $('#lyrics-output');
  const lyricSectionsForShape = shape => { if (shape === 'Pop build') return ['Verse1','Pre-Chorus','Chorus','Verse2','Chorus','Bridge','Final Chorus']; if (shape === 'Rap / verse-led') return ['Hook','Verse1','Hook','Verse2','Breakdown','Final Chorus']; if (shape === 'Club / drop-led') return ['Verse1','Pre-Chorus','Hook','Breakdown','Final Chorus']; if (shape === 'Slow burn') return ['Intro','Verse1','Chorus','Verse2','Bridge','Final Chorus','Outro']; return ['Hook','Verse1','Chorus','Verse2','Breakdown','Final Chorus']; };
  lyricsForm?.addEventListener('submit', event => {
    event.preventDefault(); const data = formData(lyricsForm); const theme = escapeLine(data.theme); const detail = escapeLine(data.detail); if (!theme) { setPlain(lyricsOutput,t.empty); return; } const sections = lyricSectionsForShape(data.shape); const header = [`${t.lyricPlan}`,`Theme: ${theme}`,`Concrete anchor: ${detail || 'choose one physical object, place, gesture or sensory detail'}`,`Point of view: ${data.pov}`,`Emotional arc: ${data.arc}`,`Rhyme density: ${data.rhyme}`,`Lyrics language: ${data.language}`,'']; const lines = sections.map(section => `${t.sections[section] || section}: ${t.lyricJobs[section] || t.lyricJobs.Chorus}`); const close = lang === 'es' ? '\nRegla: cada sección debe añadir información nueva. Reserva la frase más simple y reconocible para el gancho. Evita clichés si no están anclados a un detalle concreto.' : lang === 'pt-br' ? '\nRegra: cada seção deve adicionar informação nova. Guarde a frase mais simples e reconhecível para o gancho. Evite clichês sem um detalhe concreto.' : '\nRule: every section should add new information. Save the simplest, most recognizable phrase for the hook. Avoid clichés unless they are anchored to a concrete detail.'; setPlain(lyricsOutput, header.concat(lines).join('\n') + close);
  });

  const exportForm = $('#export-form'); const exportOutput = $('#export-output'); const exportSource = exportForm?.elements.namedItem('source');
  const loadLatest = () => { let value = latestBlueprint; if (!value) { try { value = localStorage.getItem('rythero-blueprint-v1') || ''; } catch {} } if (exportSource) exportSource.value = value; return value; };
  $('#export-latest')?.addEventListener('click', () => { if (!loadLatest()) setPlain(exportOutput,t.latestMissing); });
  const prepareExport = (source,target) => { const cleanSource = clean(source); if (!cleanSource) return ''; if (target === 'Suno') return ['STYLE / PRODUCTION',cleanSource.slice(0,2200),'','GENERATION PRIORITIES','Keep one clear genre identity, an immediate memorable hook, purposeful section changes, expressive performance, controlled low end and a decisive ending. Avoid random style switching or overfilled arrangements.'].join('\n'); if (target === 'Udio') return ['MUSIC DIRECTION',cleanSource.slice(0,2400),'','Focus on a coherent performance, strong musical hierarchy, natural transitions and a distinct central motif. Let the arrangement evolve instead of repeating one loop unchanged.'].join('\n'); return ['RYTHERO GENERIC CREATIVE BRIEF',cleanSource,'','Use this as a platform-neutral production direction. Preserve the musical priorities and adapt syntax only where the destination tool requires it.'].join('\n'); };
  exportForm?.addEventListener('submit', event => { event.preventDefault(); const data = formData(exportForm); const result = prepareExport(data.source,data.target); setPlain(exportOutput,result || t.empty); });
  $('#export-copy')?.addEventListener('click', async () => { const text = clean(exportOutput?.textContent); if (!text || text === exportOutput?.dataset.empty) return; const ok = await copyText(text); if (ok) { const original = text; setPlain(exportOutput, `${original}\n\n✓ ${t.copied}`); setTimeout(() => setPlain(exportOutput,original),1100); } });

  const audioForm = $('#audio-form'); const audioOutput = $('#audio-output'); const audioCanvas = $('#audio-waveform'); let lastAudioText = '';
  const monoFromBuffer = buffer => { const length = buffer.length; const channels = buffer.numberOfChannels; const mono = new Float32Array(length); for (let c=0;c<channels;c++) { const data = buffer.getChannelData(c); for (let i=0;i<length;i++) mono[i] += data[i] / channels; } return mono; };
  const percentile = (values,p) => { if (!values.length) return 0; const sorted = [...values].sort((a,b)=>a-b); const index = Math.min(sorted.length-1,Math.max(0,Math.round((sorted.length-1)*p))); return sorted[index]; };
  const db = value => value > 0 ? 20*Math.log10(value) : -120;
  const estimateTempo = (samples,sampleRate) => {
    const maxSeconds = Math.min(120, samples.length/sampleRate); const step = Math.max(1,Math.round(sampleRate/50)); const points = Math.floor(maxSeconds*sampleRate/step); if (points < 100) return null; const envelope = new Float32Array(points);
    for (let p=0;p<points;p++) { const start=p*step, end=Math.min(samples.length,start+step); let sum=0; for (let i=start;i<end;i++) sum += Math.abs(samples[i]); envelope[p]=sum/Math.max(1,end-start); }
    const onset = new Float32Array(points); let mean=0; for (let i=1;i<points;i++) { onset[i]=Math.max(0,envelope[i]-envelope[i-1]); mean += onset[i]; } mean/=Math.max(1,points-1); for (let i=0;i<points;i++) onset[i]=Math.max(0,onset[i]-mean*.5);
    let bestBpm=0,bestScore=-Infinity; for (let bpm=70;bpm<=180;bpm++) { const lag=50*60/bpm; const lagFloor=Math.floor(lag); let score=0; for (let i=lagFloor+1;i<points;i++) score += onset[i]*onset[i-lagFloor]; if (score>bestScore){bestScore=score;bestBpm=bpm;} }
    if (!bestBpm) return null; while(bestBpm<80) bestBpm*=2; while(bestBpm>160) bestBpm/=2; return Math.round(bestBpm);
  };
  const drawWaveform = samples => { if (!(audioCanvas instanceof HTMLCanvasElement)) return; const ctx = audioCanvas.getContext('2d'); if (!ctx) return; const width=audioCanvas.width,height=audioCanvas.height; ctx.clearRect(0,0,width,height); ctx.fillStyle='#07100a';ctx.fillRect(0,0,width,height); ctx.strokeStyle='#1b3b28';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(0,height/2);ctx.lineTo(width,height/2);ctx.stroke(); ctx.strokeStyle='#66ff8c';ctx.lineWidth=1.4; const bucket=Math.max(1,Math.floor(samples.length/width)); ctx.beginPath(); for(let x=0;x<width;x++){ const start=x*bucket,end=Math.min(samples.length,start+bucket); let min=1,max=-1; for(let i=start;i<end;i++){const v=samples[i];if(v<min)min=v;if(v>max)max=v;} const y1=(1-max)*height/2,y2=(1-min)*height/2; ctx.moveTo(x,y1);ctx.lineTo(x,y2);} ctx.stroke(); audioCanvas.hidden=false; };
  const analyzeBuffer = buffer => { const samples=monoFromBuffer(buffer); let sumSq=0,peak=0; for (let i=0;i<samples.length;i++){const a=Math.abs(samples[i]);sumSq+=samples[i]*samples[i];if(a>peak)peak=a;} const rms=Math.sqrt(sumSq/Math.max(1,samples.length)); const blockSize=Math.max(512,Math.round(buffer.sampleRate*.05)); const blockDb=[]; for(let start=0;start<samples.length;start+=blockSize){ const end=Math.min(samples.length,start+blockSize);let ss=0; for(let i=start;i<end;i++)ss+=samples[i]*samples[i]; blockDb.push(db(Math.sqrt(ss/Math.max(1,end-start)))); } const dynamic=Math.max(0,percentile(blockDb,.9)-percentile(blockDb,.1)); const bpm=estimateTempo(samples,buffer.sampleRate); drawWaveform(samples); const rmsDb=db(rms); const energy = rmsDb < -22 ? t.energyLow : rmsDb < -14 ? t.energyMedium : t.energyHigh; return {duration:formatTime(buffer.duration),bpm:bpm ? `${bpm} BPM` : '—',level:`${rmsDb.toFixed(1)} dBFS · ${energy}`,dynamics:`${dynamic.toFixed(1)} dB`,peak:`${db(peak).toFixed(1)} dBFS`,sampleRate:`${Math.round(buffer.sampleRate/100)/10} kHz`}; };
  audioForm?.addEventListener('submit', async event => {
    event.preventDefault(); const input=$('#audio-file'); const file=input?.files?.[0]; if (!file) { setPlain(audioOutput,t.empty); return; } setPlain(audioOutput, lang==='es'?'Analizando en este dispositivo…':lang==='pt-br'?'Analisando neste dispositivo…':'Analyzing on this device…');
    try { const arrayBuffer=await file.arrayBuffer(); const AudioCtx=window.AudioContext||window.webkitAudioContext; if (!AudioCtx) throw new Error('Web Audio API unavailable'); const ctx=new AudioCtx(); const buffer=await ctx.decodeAudioData(arrayBuffer.slice(0)); const result=analyzeBuffer(buffer); await ctx.close(); audioOutput.replaceChildren(); const metrics=document.createElement('div');metrics.className='analysis-metrics'; [[t.audioLabels[0],result.duration],[t.audioLabels[1],result.bpm],[t.audioLabels[2],result.level],[t.audioLabels[3],result.dynamics]].forEach(([label,value])=>{ const card=document.createElement('div');card.className='analysis-metric'; const small=document.createElement('small');small.textContent=label; const strong=document.createElement('strong');strong.textContent=value; card.append(small,strong);metrics.appendChild(card); }); audioOutput.appendChild(metrics); const extra=document.createElement('div');extra.className='prompt-block';extra.textContent=`Peak: ${result.peak} · Sample rate: ${result.sampleRate} · File: ${file.name}`;audioOutput.appendChild(extra); lastAudioText=`${t.audioLabels[0]}: ${result.duration}\n${t.audioLabels[1]}: ${result.bpm}\n${t.audioLabels[2]}: ${result.level}\n${t.audioLabels[3]}: ${result.dynamics}\nPeak: ${result.peak}\nSample rate: ${result.sampleRate}`; }
    catch { setPlain(audioOutput, lang==='es'?'No se pudo leer este archivo de audio en el navegador. Prueba con MP3, WAV, M4A o un formato compatible.':lang==='pt-br'?'Não foi possível ler este arquivo no navegador. Tente MP3, WAV, M4A ou outro formato compatível.':'This browser could not decode the audio file. Try MP3, WAV, M4A or another supported format.'); }
  });
  $('#audio-copy')?.addEventListener('click', async () => { if (lastAudioText) await copyText(lastAudioText); });
})();
