(() => {
  const root = document.querySelector('[data-studio-shell]');
  if (!root) return;

  const lang = root.getAttribute('data-studio-locale') || 'en';
  const labels = {
    en: {
      tabs: ['Song Blueprint','Prompt Doctor','Style DNA','Arrangement','Lyrics Blueprint','Export','Audio Analyzer'],
      kickers: ['01 · SONG BLUEPRINT','02 · PROMPT DOCTOR','03 · STYLE DNA','04 · ARRANGEMENT MAP','05 · LYRICS BLUEPRINT','06 · EXPORT','07 · AUDIO ANALYZER'],
      purposeTitle: 'What is Audio Analyzer for?',
      purposeText: 'Upload a finished or generated track to inspect its duration, estimated BPM, average level, dynamics, peak and waveform. It is useful for checking tempo, comparing versions and spotting a track that feels unusually flat or over-compressed. The file stays in your browser and is not uploaded.',
      purposeNote: 'It does not judge whether a song is good, detect chords or replace professional mastering tools. BPM and dynamics are estimates.'
    },
    es: {
      tabs: ['Plan de canción','Doctor de prompts','ADN de estilo','Arreglo','Plan de letra','Exportar','Analizador de audio'],
      kickers: ['01 · PLAN DE CANCIÓN','02 · DOCTOR DE PROMPTS','03 · ADN DE ESTILO','04 · MAPA DE ARREGLO','05 · PLAN DE LETRA','06 · EXPORTAR','07 · ANALIZADOR DE AUDIO'],
      purposeTitle: '¿Para qué sirve el Analizador de audio?',
      purposeText: 'Sube una canción terminada o generada para ver su duración, BPM estimado, nivel medio, dinámica, pico y forma de onda. Te sirve para comprobar el tempo, comparar versiones y detectar si un tema ha quedado demasiado plano o comprimido. El archivo se analiza en tu navegador y no se sube.',
      purposeNote: 'No decide si una canción es buena, no detecta acordes y no sustituye una herramienta profesional de mastering. El BPM y la dinámica son estimaciones.'
    },
    'pt-br': {
      tabs: ['Plano da música','Doutor de prompts','DNA de estilo','Arranjo','Plano de letra','Exportar','Analisador de áudio'],
      kickers: ['01 · PLANO DA MÚSICA','02 · DOUTOR DE PROMPTS','03 · DNA DE ESTILO','04 · MAPA DE ARRANJO','05 · PLANO DE LETRA','06 · EXPORTAR','07 · ANALISADOR DE ÁUDIO'],
      purposeTitle: 'Para que serve o Analisador de áudio?',
      purposeText: 'Envie uma música finalizada ou gerada para ver duração, BPM estimado, nível médio, dinâmica, pico e forma de onda. Ele ajuda a conferir o andamento, comparar versões e perceber se uma faixa ficou plana ou comprimida demais. O arquivo é analisado no navegador e não é enviado.',
      purposeNote: 'Ele não decide se a música é boa, não detecta acordes e não substitui ferramentas profissionais de masterização. BPM e dinâmica são estimativas.'
    }
  }[lang] || null;

  if (!labels) return;

  const tabButtons = Array.from(root.querySelectorAll('[data-studio-tab]'));
  tabButtons.forEach((button, index) => {
    if (labels.tabs[index]) button.textContent = labels.tabs[index];
  });

  const ids = ['blueprint','doctor','dna','arrangement','lyrics','export','audio'];
  ids.forEach((id, index) => {
    const panel = root.querySelector(`[data-studio-panel="${id}"]`);
    const kicker = panel?.querySelector('.panel-head span');
    if (kicker && labels.kickers[index]) kicker.textContent = labels.kickers[index];
  });

  const optionMap = lang === 'es' ? {
    'Dark':'Oscuro','Melancholic':'Melancólico','Hopeful':'Esperanzador','Euphoric':'Eufórico','Intimate':'Íntimo','Defiant':'Desafiante','Dreamy':'Onírico','Romantic':'Romántico','Nocturnal':'Nocturno','Uplifting':'Luminoso',
    'Low':'Baja','Medium':'Media','High':'Alta','Dynamic / evolving':'Dinámica / evolutiva',
    'Male vocal':'Voz masculina','Female vocal':'Voz femenina','Androgynous vocal':'Voz andrógina','Duet':'Dúo','Rap vocal':'Voz rap','Instrumental / no lead vocal':'Instrumental / sin voz principal',
    'English':'Inglés','Spanish':'Español','Portuguese':'Portugués','Instrumental':'Instrumental',
    'Straight':'Recto','Swung':'Con swing','Syncopated':'Sincopado','Rolling':'Rodante','Broken':'Quebrado','Half-time':'Medio tiempo','Four-on-the-floor':'Bombo a negras',
    'Clean':'Limpio','Warm':'Cálido','Raw':'Crudo','Airy':'Aéreo','Organic':'Orgánico','Glossy':'Pulido','Lo-fi':'Lo-fi',
    'Modern':'Moderno','Retro-modern':'Retro-moderno','90s-informed':'Inspirado en los 90','2000s-informed':'Inspirado en los 2000','Timeless':'Atemporal','Futuristic':'Futurista',
    'Minor tension':'Tensión menor','Major lift':'Apertura mayor','Modal / ambiguous':'Modal / ambiguo','Soulful extensions':'Extensiones soul','Minimal harmony':'Armonía mínima','Cinematic movement':'Movimiento cinematográfico',
    'Raspy':'Rasgada','Soulful':'Con alma','Powerful':'Potente','Gritty':'Áspera','Processed':'Procesada',
    'Dry / close':'Seco / cercano','Small room':'Sala pequeña','Wide stereo':'Estéreo amplio','Deep atmospheric':'Atmosférico profundo','Club-focused':'Enfocado a club','Cinematic':'Cinematográfico',
    'Hook-first':'Gancho primero','Pop build':'Construcción pop','Rap / verse-led':'Rap / guiado por versos','Club / drop-led':'Club / guiado por drop','Slow burn':'Crecimiento lento',
    'First person':'Primera persona','Second person':'Segunda persona','Third person / story':'Tercera persona / historia',
    'Tension → release':'Tensión → liberación','Loss → acceptance':'Pérdida → aceptación','Doubt → confidence':'Duda → confianza','Distance → intimacy':'Distancia → intimidad','Calm → explosive':'Calma → explosión','Steady / hypnotic':'Estable / hipnótico',
    'Light':'Ligera','Balanced':'Equilibrada','Dense':'Densa','Generic':'Genérico'
  } : lang === 'pt-br' ? {
    'Dark':'Escuro','Melancholic':'Melancólico','Hopeful':'Esperançoso','Euphoric':'Eufórico','Intimate':'Íntimo','Defiant':'Desafiador','Dreamy':'Sonhador','Romantic':'Romântico','Nocturnal':'Noturno','Uplifting':'Elevado',
    'Low':'Baixa','Medium':'Média','High':'Alta','Dynamic / evolving':'Dinâmica / evolutiva',
    'Male vocal':'Voz masculina','Female vocal':'Voz feminina','Androgynous vocal':'Voz andrógina','Duet':'Dueto','Rap vocal':'Voz de rap','Instrumental / no lead vocal':'Instrumental / sem voz principal',
    'English':'Inglês','Spanish':'Espanhol','Portuguese':'Português','Instrumental':'Instrumental',
    'Hook-first':'Gancho primeiro','Pop build':'Construção pop','Rap / verse-led':'Rap / guiado por versos','Club / drop-led':'Club / guiado pelo drop','Slow burn':'Crescimento lento',
    'First person':'Primeira pessoa','Second person':'Segunda pessoa','Third person / story':'Terceira pessoa / história',
    'Light':'Leve','Balanced':'Equilibrada','Dense':'Densa','Generic':'Genérico'
  } : {};

  root.querySelectorAll('select option').forEach(option => {
    const raw = option.value || option.textContent || '';
    if (!option.dataset.rawValue) option.dataset.rawValue = raw;
    option.value = option.dataset.rawValue;
    if (optionMap[option.dataset.rawValue]) option.textContent = optionMap[option.dataset.rawValue];
  });

  const audioPanel = root.querySelector('[data-studio-panel="audio"]');
  if (audioPanel && !audioPanel.querySelector('.audio-purpose')) {
    const box = document.createElement('div');
    box.className = 'audio-purpose';
    const strong = document.createElement('strong');
    strong.textContent = labels.purposeTitle;
    const p = document.createElement('p');
    p.textContent = labels.purposeText;
    const small = document.createElement('small');
    small.textContent = labels.purposeNote;
    box.append(strong, p, small);
    const head = audioPanel.querySelector('.panel-head');
    if (head) head.insertAdjacentElement('afterend', box);
    else audioPanel.prepend(box);
  }
})();
