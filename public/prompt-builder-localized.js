(() => {
  const form = document.querySelector('#builder');
  const output = document.querySelector('#output');
  const copy = document.querySelector('#copy');
  const status = document.querySelector('#status');
  if (!form || !output) return;

  const lang = document.documentElement.lang === 'es' ? 'es' : document.documentElement.lang === 'pt-BR' ? 'pt-br' : 'en';
  const copyText = {
    en: { suggested:'Suggested', matches:'Matches', more:'More ideas ↻', maximum:'Maximum', remove:'Remove', add:'Add', custom:'Custom', copied:'Copied.', manual:'Select the prompt and copy it manually.', empty:'Your prompt will appear here.' },
    es: { suggested:'Sugerencias', matches:'Coincidencias', more:'Más ideas ↻', maximum:'Máximo', remove:'Quitar', add:'Añadir', custom:'Personalizado', copied:'Copiado.', manual:'Selecciona el prompt y cópialo manualmente.', empty:'Tu prompt aparecerá aquí.' },
    'pt-br': { suggested:'Sugestões', matches:'Resultados', more:'Mais ideias ↻', maximum:'Máximo', remove:'Remover', add:'Adicionar', custom:'Personalizado', copied:'Copiado.', manual:'Selecione o prompt e copie manualmente.', empty:'Seu prompt aparecerá aqui.' }
  }[lang];

  const groupTranslations = {
    es: {Current:'Actual',Core:'Base',Crossover:'Fusión',Emotion:'Emoción',Atmosphere:'Atmósfera',Attitude:'Actitud',Tone:'Tono',Energy:'Energía',Scale:'Escala','Voice type':'Tipo de voz',Delivery:'Interpretación',Character:'Carácter',Presence:'Presencia',Register:'Registro',Layers:'Capas',FX:'FX','Low end':'Graves',Rhythm:'Ritmo',Keys:'Teclas',Synth:'Sintetizador',Guitar:'Guitarra',Orchestral:'Orquestal',Texture:'Textura',Regional:'Regional',Wind:'Viento',Vocal:'Voz',Width:'Anchura',Arrangement:'Arreglo',Dynamics:'Dinámica',Finish:'Acabado',Space:'Espacio',Movement:'Movimiento',Impact:'Impacto',Avoid:'Evitar'},
    'pt-br': {Current:'Atual',Core:'Base',Crossover:'Fusão',Emotion:'Emoção',Atmosphere:'Atmosfera',Attitude:'Atitude',Tone:'Timbre',Energy:'Energia',Scale:'Escala','Voice type':'Tipo de voz',Delivery:'Interpretação',Character:'Caráter',Presence:'Presença',Register:'Registro',Layers:'Camadas',FX:'FX','Low end':'Graves',Rhythm:'Ritmo',Keys:'Teclas',Synth:'Sintetizador',Guitar:'Guitarra',Orchestral:'Orquestral',Texture:'Textura',Regional:'Regional',Wind:'Sopro',Vocal:'Voz',Width:'Amplitude',Arrangement:'Arranjo',Dynamics:'Dinâmica',Finish:'Acabamento',Space:'Espaço',Movement:'Movimento',Impact:'Impacto',Avoid:'Evitar'}
  };
  const groupLabel = (value) => groupTranslations[lang]?.[value] || value;
  const clean = (value) => String(value || '').trim();
  const normalize = (value) => clean(value).toLocaleLowerCase();

  const selectorConfigs = {
    genre: {
      max: 4,
      popular: ['K-pop','Afro house','Alt-R&B','Hyperpop','Amapiano','Melodic hip-hop','Afrobeats','Drum & bass','Pop','House','R&B','Trap','Indie pop','Dark pop','UK garage','J-pop','Cinematic pop','Synth-pop','Latin pop','Reggaeton','Brazilian funk','Flamenco fusion','Arabic pop','Raï pop'],
      catalog: [
        ['K-pop','Current'],['K-pop dance-pop','Current'],['K-pop R&B','Current'],['K-pop trap','Current'],['K-pop rock hybrid','Current'],['Afro house','Current'],['Amapiano','Current'],['3-step','Current'],['Afrobeats','Current'],['Afro-pop','Current'],['Hyperpop','Current'],['Alt-R&B','Current'],['Melodic hip-hop','Current'],['Drum & bass','Current'],['Liquid drum & bass','Current'],['UK garage','Current'],['Jersey club','Current'],['Dark pop','Current'],['Cinematic pop','Current'],['Brazilian funk','Current'],['Pop','Core'],['Indie pop','Core'],['Alt-pop','Core'],['Dance-pop','Core'],['Electropop','Core'],['Synth-pop','Core'],['Dream pop','Core'],['Bedroom pop','Core'],['Hip-hop','Core'],['Trap','Core'],['Drill','Core'],['Boom bap','Core'],['Rage rap','Core'],['Cloud rap','Core'],['R&B','Core'],['Contemporary R&B','Core'],['Neo-soul','Core'],['Electronic','Core'],['House','Core'],['Deep house','Core'],['Tech house','Core'],['Melodic house','Core'],['Progressive house','Core'],['Organic house','Core'],['Techno','Core'],['Trance','Core'],['Ambient','Core'],['Lo-fi','Core'],['Synthwave','Core'],['Phonk','Core'],['Rock','Core'],['Indie rock','Core'],['Alternative rock','Core'],['Pop punk','Core'],['Shoegaze','Core'],['Metal','Core'],['Soul','Core'],['Funk','Core'],['Gospel','Core'],['Folk','Core'],['Country','Core'],['Jazz','Core'],['Blues','Core'],['Cinematic orchestral','Core'],['Latin pop','Crossover'],['Reggaeton','Crossover'],['Latin trap','Crossover'],['Salsa pop','Crossover'],['Bachata pop','Crossover'],['Flamenco fusion','Crossover'],['Arabic pop','Crossover'],['Raï pop','Crossover'],['J-pop','Crossover'],['City pop','Crossover'],['Baile funk','Crossover']
      ]
    },
    mood: {
      max: 3,
      popular: ['Euphoric','Intimate','Dark','Dreamy','Nocturnal','Defiant','Melancholic','Romantic','Hopeful','Nostalgic','Hypnotic','Uplifting','Aggressive','Sensual','Triumphant','Mysterious','Playful','Warm','Cold','Tense','Bittersweet','Tender','Confident','Reflective'],
      catalog: [
        ['Euphoric','Emotion'],['Intimate','Emotion'],['Dark','Emotion'],['Dreamy','Atmosphere'],['Nocturnal','Atmosphere'],['Defiant','Attitude'],['Melancholic','Emotion'],['Romantic','Emotion'],['Hopeful','Emotion'],['Nostalgic','Emotion'],['Aggressive','Attitude'],['Playful','Attitude'],['Sensual','Emotion'],['Triumphant','Emotion'],['Tense','Emotion'],['Hypnotic','Atmosphere'],['Warm','Tone'],['Cold','Tone'],['Mysterious','Atmosphere'],['Uplifting','Emotion'],['Bittersweet','Emotion'],['Tender','Emotion'],['Confident','Attitude'],['Reflective','Emotion'],['Vulnerable','Emotion'],['Energetic','Energy'],['Calm','Energy'],['Chaotic','Energy'],['Epic','Scale'],['Minimal','Scale'],['Cinematic','Atmosphere'],['Spiritual','Atmosphere'],['Celebratory','Emotion'],['Seductive','Emotion'],['Rebellious','Attitude']
      ]
    },
    vocal: {
      max: 4,
      popular: ['Female vocal','Male vocal','Duet','Raspy','Soulful','Airy','Powerful','Close-mic intimate','Rap vocal','Melodic rap','Breathy','Gritty','Warm','Low register','Falsetto','Layered harmonies','Whispered','Youthful','Mature','Raw','Bright','Dark tone','Call-and-response','Vocal chops'],
      catalog: [
        ['Female vocal','Voice type'],['Male vocal','Voice type'],['Androgynous vocal','Voice type'],['Duet','Voice type'],['Mixed duet','Voice type'],['Choir','Voice type'],['Instrumental / no lead vocal','Voice type'],['Rap vocal','Delivery'],['Melodic rap','Delivery'],['Spoken word','Delivery'],['Whispered','Delivery'],['Rhythmic phrasing','Delivery'],['Soulful','Character'],['Raspy','Character'],['Gritty','Character'],['Smoky','Character'],['Airy','Character'],['Breathy','Character'],['Powerful','Character'],['Warm','Character'],['Raw','Character'],['Bright','Character'],['Dark tone','Character'],['Youthful','Character'],['Mature','Character'],['Close-mic intimate','Presence'],['Falsetto','Register'],['Low register','Register'],['High register','Register'],['Chest voice','Register'],['Layered harmonies','Layers'],['Call-and-response','Layers'],['Gang vocals','Layers'],['Vocal chops','FX'],['Vocoder texture','FX'],['Minimal autotune','FX'],['Heavy vocal processing','FX']
      ]
    },
    instruments: {
      max: 5,
      popular: ['Deep 808','Acoustic drums','Electronic drums','Analog synths','Piano','Electric guitar','Ambient pads','Nylon guitar','Sub bass','Handclaps','Rhodes','Strings','Bright plucks','Cajón','Percussion','Saxophone','Oud','Tabla','Brass','Choir textures','Acoustic guitar','Flute','Vocal chops','Field recordings'],
      catalog: [
        ['Deep 808','Low end'],['Sub bass','Low end'],['Bass guitar','Low end'],['Synth bass','Low end'],['Acoustic drums','Rhythm'],['Electronic drums','Rhythm'],['Breakbeats','Rhythm'],['Handclaps','Rhythm'],['Shakers','Rhythm'],['Cajón','Rhythm'],['Percussion','Rhythm'],['Log drum','Rhythm'],['Congas','Rhythm'],['Piano','Keys'],['Rhodes','Keys'],['Organ','Keys'],['Analog synths','Synth'],['Digital synths','Synth'],['Bright plucks','Synth'],['Ambient pads','Synth'],['Arpeggiated synth','Synth'],['Nylon guitar','Guitar'],['Electric guitar','Guitar'],['Acoustic guitar','Guitar'],['Distorted guitar','Guitar'],['Strings','Orchestral'],['Brass','Orchestral'],['Orchestral percussion','Orchestral'],['Choir textures','Texture'],['Vocal chops','Texture'],['Oud','Regional'],['Tabla','Regional'],['Sitar','Regional'],['Darbuka','Regional'],['Saxophone','Wind'],['Flute','Wind'],['Trumpet','Wind'],['Vinyl texture','Texture'],['Field recordings','Texture'],['Found sounds','Texture']
      ]
    },
    production: {
      max: 4,
      popular: ['Warm low end','Punchy drums','Dry vocal','Wide chorus','Minimal verses','Cinematic build','Glossy pop mix','Club-ready master','Analog warmth','Dark spacious mix','Tight low end','Intimate close mix','Polished high end','Raw live feel','Sidechain pulse','Dynamic contrast','Airy top end','Saturated drums','Clean transient punch','Lo-fi texture','Deep sub focus','Wide stereo image','Vocal-forward mix','Organic texture'],
      catalog: [
        ['Warm low end','Tone'],['Punchy drums','Impact'],['Dry vocal','Vocal'],['Vocal-forward mix','Vocal'],['Wide chorus','Width'],['Wide stereo image','Width'],['Tight mono verses','Width'],['Minimal verses','Arrangement'],['Dense chorus','Arrangement'],['Cinematic build','Dynamics'],['Dynamic contrast','Dynamics'],['Gradual build','Dynamics'],['Glossy pop mix','Finish'],['Club-ready master','Finish'],['Polished high end','Finish'],['Radio-ready finish','Finish'],['Analog warmth','Tone'],['Dark spacious mix','Space'],['Intimate close mix','Space'],['Large reverb space','Space'],['Sidechain pulse','Movement'],['Saturated drums','Texture'],['Clean transient punch','Impact'],['Lo-fi texture','Texture'],['Organic texture','Texture'],['Raw live feel','Texture'],['Deep sub focus','Low end'],['Tight low end','Low end'],['Airy top end','Tone'],['Crisp percussion','Impact']
      ]
    },
    exclude: {
      max: 5,
      popular: ['Heavy autotune','EDM drop','Fade-out','Long intro','Dembow','Excessive reverb','Busy arrangement','Spoken intro','Over-compression','Trap hi-hat rolls','Choir','Bright EDM synths','Long instrumental break','Vocal chops','Abrupt ending','Crowded low end'],
      catalog: [
        ['Heavy autotune','Avoid'],['EDM drop','Avoid'],['Fade-out','Avoid'],['Long intro','Avoid'],['Dembow','Avoid'],['Excessive reverb','Avoid'],['Busy arrangement','Avoid'],['Spoken intro','Avoid'],['Over-compression','Avoid'],['Trap hi-hat rolls','Avoid'],['Female backing vocals','Avoid'],['Male backing vocals','Avoid'],['Choir','Avoid'],['Bright EDM synths','Avoid'],['Long instrumental break','Avoid'],['Vocal chops','Avoid'],['Abrupt ending','Avoid'],['Crowded low end','Avoid'],['Harsh distortion','Avoid'],['Excessive ad-libs','Avoid'],['Long outro','Avoid'],['Four-on-the-floor kick','Avoid'],['Acoustic drums','Avoid'],['Guitar solo','Avoid'],['Orchestral strings','Avoid']
      ]
    }
  };

  const genreProfiles = [
    ['k-pop','hook-forward songwriting, polished modern production, strong sectional contrast and purposeful switch-ups'],['afro house','a deep rolling groove, organic percussion, warm low end and gradual hypnotic development'],['amapiano','log-drum-driven low end, spacious percussion, groove-first writing and patient dancefloor development'],['afrobeats','syncopated percussion, a warm elastic bassline, melodic rhythmic phrasing and light guitar or synth accents'],['hyperpop','bold synthetic textures, sharp contrast, exaggerated transitions and energetic sound design'],['alt-r&b','spacious groove, intimate vocal focus, restrained atmospheric layers and modern low-end detail'],['r&b','a smooth pocket, expressive vocal space, warm harmony and controlled low-end movement'],['melodic hip-hop','a memorable melodic topline, punchy drums, deep 808s and an emotional harmonic bed'],['hip-hop','a confident rhythmic pocket, focused drums, purposeful bass movement and space for the vocal'],['trap','deep 808s, crisp rhythmic detail, strong pocket and controlled melodic atmosphere'],['drum & bass','fast break-driven momentum, sub-bass weight, atmospheric tension and clean energetic transitions'],['uk garage','shuffled drums, syncopated bass movement, clipped rhythmic detail and a nimble club groove'],['jersey club','a chopped kick-driven pulse, rhythmic vocal energy and abrupt but musical transitions'],['dark pop','a memorable pop hook framed by moody harmony, restrained tension and polished dark textures'],['cinematic pop','wide dynamics, emotional builds, strong melodic payoff and cinematic depth without losing song focus'],['pop','clear melodic hierarchy, an immediate central hook, concise sections and polished contemporary production'],['house','a stable dance pulse, groove-led repetition, evolving layers and a clean low-end relationship'],['reggaeton','a tight Latin urban groove, strong rhythmic pocket, memorable topline and uncluttered bass movement'],['brazilian funk','percussive forward motion, hard rhythmic accents, direct hooks and energetic low-end impact'],['flamenco fusion','organic hand percussion, expressive guitar or flamenco color and a modern rhythm section without losing human feel'],['arabic pop','melodic ornamentation, strong vocal focus, regional instrumental color and contemporary pop structure'],['raï pop','North African melodic character, expressive vocal phrasing, rhythmic drive and modern pop/electronic production'],['j-pop','bright melodic movement, detailed arrangement changes, clear hooks and energetic harmonic color'],['rock','strong live-band energy, clear guitar/bass/drum roles, dynamic section contrast and a performance-led feel'],['lo-fi','soft transients, relaxed groove, warm imperfect texture and a deliberately uncluttered arrangement'],['synthwave','retro-futurist synth layers, pulsing bass, gated or electronic drums and cinematic nocturnal atmosphere']
  ];

  const selectorInstances = [];
  const createSmartSelector = (root) => {
    const key = root.dataset.selector;
    const config = selectorConfigs[key];
    if (!config) return null;
    const search = root.querySelector('[data-search]');
    const results = root.querySelector('[data-results]');
    const chips = root.querySelector('[data-chips]');
    const valueInput = root.querySelector('[data-value]');
    const combobox = root.querySelector('[data-combobox]');
    const selected = [];
    const catalog = config.catalog.map(([name, group]) => ({ name, group }));
    let suggestionOffset = 0;
    let activeIndex = -1;

    const sync = () => { if (valueInput) valueInput.value = selected.join(', '); };
    const close = () => {
      if (!results || !search) return;
      results.hidden = true;
      activeIndex = -1;
      search.removeAttribute('aria-activedescendant');
      search.setAttribute('aria-expanded','false');
    };
    const availablePopular = () => config.popular.filter((name) => !selected.some((chosen) => normalize(chosen) === normalize(name)));
    const matchesFor = (query) => {
      const q = normalize(query);
      const available = catalog.filter((item) => !selected.some((chosen) => normalize(chosen) === normalize(item.name)));
      if (!q) {
        const pool = availablePopular();
        if (!pool.length) return [];
        const start = Math.min(suggestionOffset, Math.max(0, pool.length - 1));
        return pool.slice(start, start + 8).map((name)=>available.find((item)=>item.name===name)).filter(Boolean);
      }
      return available.filter((item)=>normalize(item.name).includes(q)).sort((a,b)=>{const as=normalize(a.name).startsWith(q)?0:1;const bs=normalize(b.name).startsWith(q)?0:1;return as-bs||a.name.localeCompare(b.name);}).slice(0,8);
    };
    const renderChips = () => {
      if (!chips) return;
      chips.replaceChildren();
      selected.forEach((item)=>{
        const chip=document.createElement('button');
        chip.type='button';
        chip.className='smart-chip';
        chip.setAttribute('aria-label',`${copyText.remove} ${item}`);
        const label=document.createElement('span');
        label.textContent=item;
        const remove=document.createElement('span');
        remove.textContent='×';
        remove.setAttribute('aria-hidden','true');
        chip.append(label,remove);
        chip.addEventListener('click',()=>{const index=selected.indexOf(item);if(index!==-1)selected.splice(index,1);suggestionOffset=0;sync();renderChips();search?.focus();renderResults(search?.value||'');});
        chips.appendChild(chip);
      });
    };
    const add = (rawValue) => {const value=clean(rawValue);if(!value||selected.length>=config.max)return;if(selected.some((item)=>normalize(item)===normalize(value)))return;selected.push(value);suggestionOffset=0;sync();renderChips();if(search)search.value='';renderResults('');search?.focus();};
    const setActiveOption = (index) => {
      if (!results || !search) return;
      const options = Array.from(results.querySelectorAll('.smart-option'));
      if (!options.length) return;
      activeIndex = ((index % options.length) + options.length) % options.length;
      options.forEach((option, i) => {
        const active = i === activeIndex;
        option.setAttribute('aria-selected', active ? 'true' : 'false');
        option.style.background = active ? '#132219' : '';
      });
      const active = options[activeIndex];
      if (active instanceof HTMLElement) {
        search.setAttribute('aria-activedescendant', active.id);
        active.scrollIntoView({block:'nearest'});
      }
    };
    const makeOption = (labelText, badgeText, onSelect, index) => {
      const option=document.createElement('button');
      option.type='button';
      option.className='smart-option';
      option.setAttribute('role','option');
      option.setAttribute('aria-selected','false');
      option.id=`${key}-option-${index}`;
      const label=document.createElement('span');
      label.textContent=labelText;
      const badge=document.createElement('small');
      badge.textContent=badgeText;
      option.append(label,badge);
      option.addEventListener('mousedown',(event)=>event.preventDefault());
      option.addEventListener('click',onSelect);
      return option;
    };
    const renderResults = (query='') => {
      if(!results||!search)return;
      const typed = clean(query);
      const popular = typed ? [] : availablePopular();
      const matches=matchesFor(query);
      results.replaceChildren();
      activeIndex=-1;
      search.removeAttribute('aria-activedescendant');
      if(selected.length>=config.max){const message=document.createElement('div');message.className='smart-message';message.textContent=`${copyText.maximum} ${config.max}.`;results.appendChild(message);}
      else if(matches.length){
        const toolbar=document.createElement('div');
        toolbar.className='smart-results-toolbar';
        const heading=document.createElement('div');
        heading.className='smart-results-head';
        heading.textContent=typed?copyText.matches:copyText.suggested;
        toolbar.appendChild(heading);

        if(!typed&&popular.length>8){
          const pageCount=Math.ceil(popular.length/8);
          const more=document.createElement('button');
          more.type='button';
          more.className='smart-more';
          more.textContent=copyText.more;
          more.setAttribute('aria-label',copyText.more);
          more.addEventListener('pointerdown',(event)=>{event.preventDefault();event.stopPropagation();});
          more.addEventListener('click',(event)=>{
            event.preventDefault();
            event.stopPropagation();
            const currentPage=Math.floor(suggestionOffset/8);
            const nextPage=(currentPage+1)%pageCount;
            suggestionOffset=nextPage*8;
            renderResults('');
            results.scrollTop=0;
          });
          toolbar.appendChild(more);
        }
        results.appendChild(toolbar);
        matches.forEach((item,index)=>results.appendChild(makeOption(item.name,groupLabel(item.group),()=>add(item.name),index)));
      }
      else if(typed){
        const custom=makeOption(`${copyText.add} “${typed}”`,copyText.custom,()=>add(query),0);
        custom.classList.add('smart-custom');
        results.appendChild(custom);
      }
      results.hidden=false;
      search.setAttribute('aria-expanded','true');
    };
    search?.addEventListener('focus',()=>renderResults(search.value));
    search?.addEventListener('input',()=>{suggestionOffset=0;renderResults(search.value);});
    search?.addEventListener('keydown',(event)=>{
      const options = Array.from(results?.querySelectorAll('.smart-option') || []);
      if(event.key==='ArrowDown'&&options.length){event.preventDefault();setActiveOption(activeIndex<0?0:activeIndex+1);return;}
      if(event.key==='ArrowUp'&&options.length){event.preventDefault();setActiveOption(activeIndex<0?options.length-1:activeIndex-1);return;}
      if(event.key==='Enter'){
        event.preventDefault();
        const target = activeIndex>=0 ? options[activeIndex] : options[0];
        if(target instanceof HTMLElement)target.click();else if(clean(search.value))add(search.value);
      }
      if(event.key==='Escape')close();
      if(event.key==='Backspace'&&!search.value&&selected.length){selected.pop();suggestionOffset=0;sync();renderChips();renderResults('');}
    });
    document.addEventListener('click',(event)=>{
      if(!combobox)return;
      const path=typeof event.composedPath==='function'?event.composedPath():[];
      if(path.includes(combobox))return;
      if(event.target instanceof Node&&combobox.contains(event.target))return;
      close();
    });
    return {commitTypedValue(){if(search&&clean(search.value)&&selected.length<config.max)add(search.value);},reset(){selected.splice(0,selected.length);suggestionOffset=0;sync();renderChips();if(search)search.value='';close();}};
  };

  document.querySelectorAll('[data-selector]').forEach((root)=>{const instance=createSmartSelector(root);if(instance)selectorInstances.push(instance);});
  const profileForGenres = (genreText) => {const normalizedGenres=normalize(genreText);return genreProfiles.filter(([needle])=>normalizedGenres.includes(needle)).slice(0,2).map(([,guidance])=>guidance);};

  form.addEventListener('submit',(event)=>{
    event.preventDefault();selectorInstances.forEach((instance)=>instance.commitTypedValue());
    const d=Object.fromEntries(new FormData(form).entries());
    const genre=clean(d.genre),mood=clean(d.mood),energy=clean(d.energy),bpm=clean(d.bpm),vocal=clean(d.vocal),instruments=clean(d.instruments),structure=clean(d.structure),production=clean(d.production),exclude=clean(d.exclude);const genreGuidance=profileForGenres(genre);const sentences=[];
    sentences.push(genre?`Create a contemporary ${genre} track.`:'Create a contemporary track with a clear musical identity rather than a generic AI-generated feel.');
    if(genreGuidance.length){sentences.push(`Build the style around ${genreGuidance.join('; ')}.`);if(genre.includes(','))sentences.push('Blend the selected genres into one coherent identity instead of switching between unrelated styles.');}else if(genre){sentences.push('Keep the rhythm, harmony, sound palette and arrangement authentic to the selected style while still sounding current.');}
    if(mood)sentences.push(`Emotional direction: ${mood}. Let that mood shape the harmony, melodic contour, dynamics and sound choices.`);else sentences.push('Give the song a clear emotional arc that fits the style and remains consistent from section to section.');
    if(bpm)sentences.push(`Tempo: around ${bpm} BPM with ${energy||'balanced'} energy.`);else sentences.push(`Use a tempo that feels natural for the style, with ${energy||'balanced'} energy and a convincing groove rather than a generic mid-tempo default.`);
    if(vocal)sentences.push(`Vocals: ${vocal}. Keep the delivery expressive, intelligible and stylistically consistent, with phrasing that feels performed rather than mechanically generated.`);else sentences.push('If vocals are used, choose a lead voice and delivery that naturally fit the genre, with clear character and controlled layering rather than generic processing.');
    if(instruments)sentences.push(`Core arrangement: ${instruments}. Give each element a clear role and leave enough space for the hook and lead vocal.`);else sentences.push('Use a focused, genre-appropriate instrument palette with a defined rhythmic foundation, supportive low end and enough space for the main hook.');
    if(structure&&structure!=='Custom / flexible structure')sentences.push(`Structure: ${structure}. Make each section earn its place, create clear contrast, and let the main hook arrive with a noticeable lift.`);else sentences.push('Use a concise structure with purposeful section changes, a memorable early hook and a stronger final payoff.');
    if(production)sentences.push(`Production direction: ${production}. Keep the mix intentional, with controlled low end, clear transients and depth without unnecessary clutter.`);else sentences.push('Keep the production modern and genre-authentic: controlled low end, defined transients, useful stereo depth and clear separation between the lead elements.');
    sentences.push('Prioritize one memorable musical idea, purposeful transitions and enough variation to avoid a flat looped arrangement.');if(exclude)sentences.push(`Avoid: ${exclude}.`);output.textContent=sentences.join(' ');if(status)status.textContent='';
  });
  form.addEventListener('reset',()=>setTimeout(()=>{selectorInstances.forEach((instance)=>instance.reset());output.textContent=copyText.empty;if(status)status.textContent='';},0));
  copy?.addEventListener('click',async()=>{const text=output.textContent||'';if(!text||text===copyText.empty)return;try{await navigator.clipboard.writeText(text);if(status)status.textContent=copyText.copied;}catch{if(status)status.textContent=copyText.manual;}});
})();