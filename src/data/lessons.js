export const lessons = {
  styleDna: {
    number: '03',
    slug: 'style-dna',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · LESSON 03',
      title: 'Style DNA: build a recognizable sound without imitating artists',
      dek: 'A useful style reference is not a famous name. It is a set of musical decisions you can describe, test and change: groove, tempo feel, harmony, texture, voice, arrangement and production.',
      quickTitle: 'Quick answer',
      quick: 'Instead of writing “make it like Artist X”, translate the reference into traits. Describe what the drums do, how the bass moves, how dense the arrangement is, what the voice feels like, where the energy changes and how the mix is shaped. That gives an AI music tool a clearer brief while keeping the direction yours.',
      sections: [
        {
          title: 'What “Style DNA” means',
          paragraphs: [
            'Style DNA is Rythero’s shorthand for the small group of musical traits that make a direction coherent. It is not a fingerprint that identifies a person and it is not an attempt to reproduce a recording. Think of it as a reusable production brief.',
            'The goal is to separate inspiration from imitation. You can admire the tension of a dark verse, the bounce of a bassline or the width of a chorus without asking a generator to recreate a named artist.'
          ]
        },
        {
          title: 'The seven layers worth describing',
          bullets: [
            'Groove: straight, swung, syncopated, half-time, double-time, rolling or sparse.',
            'Tempo feel: slow, mid-tempo, driving or fast — optionally with a BPM range.',
            'Harmony: major/minor direction, modal color, tension, chord density and how often harmony moves.',
            'Palette: the few instruments or textures that define the track instead of a shopping list of sounds.',
            'Voice: register, delivery, intimacy, grit, breath, rhythmic phrasing and amount of layering.',
            'Arrangement: where the track becomes wider, emptier, faster, quieter or more intense.',
            'Production: low-end behavior, space, stereo width, transients, saturation, polish and what should be avoided.'
          ]
        },
        {
          title: 'Turn a reference into traits in five minutes',
          paragraphs: ['Listen once for the whole impression, then again with a job for each pass. Do not try to name every instrument. Capture only what changes the identity.'],
          bullets: [
            'Pass 1 — rhythm: what makes the body move?',
            'Pass 2 — sound: which two or three textures dominate?',
            'Pass 3 — voice: how is the lead delivered and placed in the mix?',
            'Pass 4 — structure: where does energy rise, drop or switch pocket?',
            'Pass 5 — production: what is dry, wide, saturated, clean, dark or bright?'
          ]
        },
        {
          title: 'From imitation language to a usable prompt',
          paragraphs: ['Named references are often vague anyway: one artist can have dozens of very different songs. Musical traits are more portable and easier to revise.'],
          example: {
            weakLabel: 'Too dependent on a name',
            weak: '“Make a song exactly like my favorite artist: same voice, same beat and same emotional style.”',
            strongLabel: 'More useful',
            strong: '“Mid-tempo nocturnal alt-R&B; restrained syncopated drums; warm sub bass; sparse minor-key harmony; intimate low male vocal with slightly raspy texture; narrow verses opening into a wider chorus; short half-time breakdown; dark spacious mix; no copied hooks or recognizable melodic phrases.”'
          }
        },
        {
          title: 'Keep only three non-negotiables',
          paragraphs: [
            'A common mistake is treating every detail as essential. Choose three traits that must survive every generation — for example the vocal character, the groove and the contrast between verse and chorus. Everything else can move.',
            'This makes iteration easier. If the first result misses, you know what to correct instead of rewriting the entire prompt.'
          ]
        },
        {
          title: 'How Rythero can help',
          paragraphs: [
            'Style DNA inside Rythero Studio helps turn a direction into a compact set of musical choices. Signature Lab goes one step further: it can combine local measurements with AI-assisted analysis of short derived excerpts and return high-level traits for you to review.',
            'Use those outputs as notes, not as truth. Keep the traits that sound right, remove the ones that do not, and make the final creative decision yourself.'
          ]
        },
        {
          title: 'Common mistakes',
          bullets: [
            'Using five genres when one main direction and one secondary influence would be clearer.',
            'Describing mood with ten adjectives but saying nothing about rhythm or arrangement.',
            'Treating a BPM or key as the identity of the song.',
            'Trying to preserve every detail from a reference instead of extracting a few transferable ideas.',
            'Leaving out what should not happen, such as a long intro, heavy autotune or an EDM-style drop.'
          ]
        }
      ],
      takeawayTitle: 'A simple Style DNA template',
      takeaway: 'Core direction + groove + tempo feel + tonal/harmonic direction + 2–4 defining sounds + vocal delivery + arrangement contrast + production character + 2–3 things to avoid.',
      ctaTitle: 'Build your own direction',
      ctaText: 'Start in Rythero Studio if you already know roughly what you want. Use Signature Lab when you need help translating references into reviewable high-level traits.',
      studio: 'Open Rythero Studio',
      signature: 'Open Signature Lab',
      related: 'Next lesson: BPM, key and energy',
      faqTitle: 'FAQ',
      faqs: [
        ['Is using a genre name imitation?', 'No. Broad genres, musical techniques and production traits are useful descriptive language. The problem Rythero tries to avoid is asking for a direct reproduction of a specific artist, voice, hook or recording.'],
        ['How many traits should a Style DNA contain?', 'Enough to create direction, not enough to remove all freedom. Around five to eight meaningful traits plus a short avoid list is a useful starting point.'],
        ['Can I use several references?', 'Yes. Look for the traits that genuinely recur across them and keep their differences separate. Do not force every reference into one overloaded prompt.'],
        ['Does a stronger prompt guarantee the result?', 'No. Generative music tools are probabilistic. A clearer brief improves the experiment; it does not turn the generator into a deterministic instrument.']
      ],
      sourcesTitle: 'References',
      sources: [
        ['Suno Safety — originality and imitation', 'https://about.suno.com/safety'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Updated: September 2026.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · AI MUSIC · LECCIÓN 03',
      title: 'Style DNA: construye un sonido reconocible sin imitar artistas',
      dek: 'Una referencia de estilo útil no es un nombre famoso. Es un conjunto de decisiones musicales que puedes describir, probar y cambiar: groove, sensación de tempo, armonía, textura, voz, arreglo y producción.',
      quickTitle: 'Respuesta rápida',
      quick: 'En lugar de escribir “hazlo como el artista X”, traduce la referencia a rasgos. Describe qué hace la batería, cómo se mueve el bajo, cuánta densidad tiene el arreglo, cómo se siente la voz, dónde cambia la energía y cómo está tratado el sonido. Así das al generador una dirección más clara sin dejar de construir algo propio.',
      sections: [
        {
          title: 'Qué significa “Style DNA”',
          paragraphs: [
            'Style DNA es la forma breve que usa Rythero para nombrar el pequeño grupo de rasgos musicales que hace coherente una dirección. No es una huella para identificar a una persona ni un intento de reproducir una grabación. Piensa en ello como un brief de producción reutilizable.',
            'La idea es separar inspiración e imitación. Puedes quedarte con la tensión de un verso oscuro, el rebote de una línea de bajo o la amplitud de un estribillo sin pedir al generador que recree a un artista concreto.'
          ]
        },
        {
          title: 'Las siete capas que merece la pena describir',
          bullets: [
            'Groove: recto, con swing, sincopado, half-time, double-time, rodante o escaso.',
            'Sensación de tempo: lenta, media, impulsiva o rápida; si ayuda, añade un rango de BPM.',
            'Armonía: dirección mayor/menor, color modal, tensión, densidad de acordes y frecuencia de cambio.',
            'Paleta: los pocos instrumentos o texturas que realmente definen el tema, no una lista interminable.',
            'Voz: registro, interpretación, intimidad, aspereza, aire, fraseo rítmico y cantidad de capas.',
            'Arreglo: dónde la canción se hace más ancha, vacía, rápida, tranquila o intensa.',
            'Producción: comportamiento de graves, espacio, anchura estéreo, transitorios, saturación, pulido y lo que conviene evitar.'
          ]
        },
        {
          title: 'Convierte una referencia en rasgos en cinco minutos',
          paragraphs: ['Escucha una vez para captar la impresión general y después repite con una misión distinta en cada pasada. No necesitas identificar todos los instrumentos: apunta solo lo que cambia la identidad.'],
          bullets: [
            'Pasada 1 — ritmo: ¿qué hace que el cuerpo se mueva?',
            'Pasada 2 — sonido: ¿qué dos o tres texturas dominan?',
            'Pasada 3 — voz: ¿cómo se interpreta y dónde está colocada en la mezcla?',
            'Pasada 4 — estructura: ¿dónde sube, baja o cambia de pocket la energía?',
            'Pasada 5 — producción: ¿qué suena seco, ancho, saturado, limpio, oscuro o brillante?'
          ]
        },
        {
          title: 'De la imitación a un prompt utilizable',
          paragraphs: ['Las referencias por nombre suelen ser vagas: un mismo artista puede tener canciones completamente distintas. Los rasgos musicales son más portables y mucho más fáciles de corregir.'],
          example: {
            weakLabel: 'Demasiado dependiente de un nombre',
            weak: '“Haz una canción exactamente como mi artista favorito: misma voz, mismo beat y mismo estilo emocional.”',
            strongLabel: 'Más útil',
            strong: '“Alt-R&B nocturno a tempo medio; batería sincopada y contenida; subgrave cálido; armonía escasa en tonalidad menor; voz masculina grave, íntima y ligeramente rasgada; versos estrechos que se abren en un estribillo más ancho; breakdown breve en half-time; mezcla oscura y espaciosa; sin hooks copiados ni frases melódicas reconocibles.”'
          }
        },
        {
          title: 'Elige solo tres rasgos no negociables',
          paragraphs: [
            'Un error frecuente es tratar cada detalle como imprescindible. Elige tres rasgos que deban sobrevivir a todas las generaciones —por ejemplo el carácter vocal, el groove y el contraste entre verso y estribillo—. El resto puede moverse.',
            'Así es mucho más fácil iterar. Si la primera generación falla, sabes qué corregir en lugar de reescribir todo el prompt.'
          ]
        },
        {
          title: 'Cómo puede ayudarte Rythero',
          paragraphs: [
            'Style DNA dentro de Rythero Studio ayuda a convertir una dirección en un conjunto compacto de decisiones musicales. Signature Lab va un paso más allá: puede combinar mediciones locales con análisis asistido por IA de pequeños fragmentos derivados y devolverte rasgos de alto nivel para que los revises.',
            'Usa esos resultados como notas, no como verdades. Conserva lo que encaje con lo que oyes, elimina lo que no y toma tú la decisión creativa final.'
          ]
        },
        {
          title: 'Errores frecuentes',
          bullets: [
            'Usar cinco géneros cuando una dirección principal y una influencia secundaria serían más claras.',
            'Describir el estado de ánimo con diez adjetivos sin decir nada sobre ritmo o arreglo.',
            'Tratar un BPM o una tonalidad como si fueran la identidad completa de la canción.',
            'Intentar conservar todos los detalles de una referencia en vez de extraer unas pocas ideas transferibles.',
            'No indicar lo que debe evitarse: una intro larga, autotune fuerte, un drop EDM, etc.'
          ]
        }
      ],
      takeawayTitle: 'Plantilla sencilla de Style DNA',
      takeaway: 'Dirección principal + groove + sensación de tempo + dirección tonal/armónica + 2–4 sonidos definitorios + interpretación vocal + contraste de arreglo + carácter de producción + 2–3 cosas que evitar.',
      ctaTitle: 'Construye tu propia dirección',
      ctaText: 'Empieza en Rythero Studio si ya sabes aproximadamente qué quieres. Usa Signature Lab cuando necesites ayuda para traducir referencias a rasgos de alto nivel que puedas revisar.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Signature Lab',
      related: 'Siguiente lección: BPM, tonalidad y energía',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        ['¿Usar el nombre de un género es imitar?', 'No. Los géneros amplios, técnicas musicales y rasgos de producción son lenguaje descriptivo útil. Rythero intenta evitar la petición de reproducir directamente a un artista, una voz, un hook o una grabación concreta.'],
        ['¿Cuántos rasgos debe tener un Style DNA?', 'Los suficientes para crear dirección, pero no tantos como para eliminar toda libertad. Unos cinco a ocho rasgos significativos y una pequeña lista de exclusiones son un buen punto de partida.'],
        ['¿Puedo usar varias referencias?', 'Sí. Busca los rasgos que realmente se repitan entre ellas y mantén aparte sus diferencias. No intentes meter cada detalle de cada referencia en un solo prompt.'],
        ['¿Un prompt más claro garantiza el resultado?', 'No. Las herramientas generativas son probabilísticas. Un brief mejor hace el experimento más útil, pero no convierte al generador en un instrumento determinista.']
      ],
      sourcesTitle: 'Referencias',
      sources: [
        ['Suno Safety — originalidad e imitación', 'https://about.suno.com/safety'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Actualizado: septiembre de 2026.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · AI MUSIC · AULA 03',
      title: 'Style DNA: construa um som reconhecível sem imitar artistas',
      dek: 'Uma referência de estilo útil não é um nome famoso. É um conjunto de decisões musicais que você pode descrever, testar e mudar: groove, sensação de andamento, harmonia, textura, voz, arranjo e produção.',
      quickTitle: 'Resposta rápida',
      quick: 'Em vez de escrever “faça como o artista X”, traduza a referência em características. Descreva o que a bateria faz, como o baixo se move, a densidade do arranjo, a sensação da voz, onde a energia muda e como a mixagem é tratada. Isso dá ao gerador uma direção mais clara sem deixar de construir algo seu.',
      sections: [
        {
          title: 'O que “Style DNA” significa',
          paragraphs: [
            'Style DNA é a forma curta que o Rythero usa para chamar o pequeno grupo de características musicais que mantém uma direção coerente. Não é uma impressão digital para identificar uma pessoa nem uma tentativa de reproduzir uma gravação. Pense nele como um briefing de produção reutilizável.',
            'A ideia é separar inspiração de imitação. Você pode aproveitar a tensão de um verso escuro, o balanço de uma linha de baixo ou a abertura de um refrão sem pedir ao gerador para recriar um artista específico.'
          ]
        },
        {
          title: 'As sete camadas que vale a pena descrever',
          bullets: [
            'Groove: reto, com swing, sincopado, half-time, double-time, contínuo ou espaçado.',
            'Sensação de andamento: lenta, média, impulsiva ou rápida; se ajudar, acrescente uma faixa de BPM.',
            'Harmonia: direção maior/menor, cor modal, tensão, densidade de acordes e frequência de mudança.',
            'Paleta: poucos instrumentos ou texturas que realmente definem a faixa, não uma lista infinita.',
            'Voz: registro, entrega, intimidade, aspereza, ar, fraseado rítmico e quantidade de camadas.',
            'Arranjo: onde a música fica mais ampla, vazia, rápida, calma ou intensa.',
            'Produção: comportamento dos graves, espaço, largura estéreo, transientes, saturação, polimento e o que deve ser evitado.'
          ]
        },
        {
          title: 'Transforme uma referência em características em cinco minutos',
          paragraphs: ['Ouça uma vez para captar a impressão geral e depois repita com uma tarefa diferente em cada passagem. Você não precisa identificar todos os instrumentos: anote apenas o que muda a identidade.'],
          bullets: [
            'Passagem 1 — ritmo: o que faz o corpo se mover?',
            'Passagem 2 — som: quais duas ou três texturas dominam?',
            'Passagem 3 — voz: como ela é interpretada e posicionada na mixagem?',
            'Passagem 4 — estrutura: onde a energia sobe, cai ou muda de pocket?',
            'Passagem 5 — produção: o que soa seco, amplo, saturado, limpo, escuro ou brilhante?'
          ]
        },
        {
          title: 'Da imitação para um prompt útil',
          paragraphs: ['Referências por nome também costumam ser vagas: um mesmo artista pode ter músicas muito diferentes. Características musicais são mais portáteis e muito mais fáceis de revisar.'],
          example: {
            weakLabel: 'Dependente demais de um nome',
            weak: '“Faça uma música exatamente como meu artista favorito: mesma voz, mesmo beat e mesmo estilo emocional.”',
            strongLabel: 'Mais útil',
            strong: '“Alt-R&B noturno em andamento médio; bateria sincopada e contida; subgrave quente; harmonia esparsa em tonalidade menor; vocal masculino grave, íntimo e levemente rouco; versos estreitos abrindo para um refrão mais amplo; breakdown curto em half-time; mix escura e espaçosa; sem hooks copiados nem frases melódicas reconhecíveis.”'
          }
        },
        {
          title: 'Escolha apenas três características não negociáveis',
          paragraphs: [
            'Um erro comum é tratar cada detalhe como essencial. Escolha três características que precisam sobreviver a todas as gerações — por exemplo o caráter vocal, o groove e o contraste entre verso e refrão. O restante pode variar.',
            'Assim fica muito mais fácil iterar. Se o primeiro resultado falhar, você sabe o que corrigir em vez de reescrever o prompt inteiro.'
          ]
        },
        {
          title: 'Como o Rythero pode ajudar',
          paragraphs: [
            'O Style DNA dentro do Rythero Studio ajuda a transformar uma direção em um conjunto compacto de decisões musicais. O Signature Lab vai além: pode combinar medições locais com análise assistida por IA de pequenos trechos derivados e devolver características de alto nível para você revisar.',
            'Use esses resultados como anotações, não como verdades. Mantenha o que combina com o que você ouve, remova o que não combina e tome a decisão criativa final.'
          ]
        },
        {
          title: 'Erros comuns',
          bullets: [
            'Usar cinco gêneros quando uma direção principal e uma influência secundária seriam mais claras.',
            'Descrever o clima com dez adjetivos sem dizer nada sobre ritmo ou arranjo.',
            'Tratar BPM ou tonalidade como se fossem a identidade inteira da música.',
            'Tentar preservar todos os detalhes de uma referência em vez de extrair poucas ideias transferíveis.',
            'Esquecer de dizer o que deve ser evitado, como introdução longa, autotune pesado ou drop de EDM.'
          ]
        }
      ],
      takeawayTitle: 'Modelo simples de Style DNA',
      takeaway: 'Direção principal + groove + sensação de andamento + direção tonal/harmônica + 2–4 sons definidores + entrega vocal + contraste de arranjo + caráter de produção + 2–3 coisas a evitar.',
      ctaTitle: 'Construa sua própria direção',
      ctaText: 'Comece no Rythero Studio se você já sabe mais ou menos o que quer. Use o Signature Lab quando precisar de ajuda para traduzir referências em características de alto nível que possam ser revisadas.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Signature Lab',
      related: 'Próxima aula: BPM, tonalidade e energia',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        ['Usar o nome de um gênero é imitação?', 'Não. Gêneros amplos, técnicas musicais e características de produção são linguagem descritiva útil. O Rythero tenta evitar pedidos de reprodução direta de um artista, voz, hook ou gravação específica.'],
        ['Quantas características um Style DNA deve ter?', 'O suficiente para criar direção, mas não tanto a ponto de eliminar toda liberdade. Cerca de cinco a oito características significativas e uma pequena lista do que evitar é um bom começo.'],
        ['Posso usar várias referências?', 'Sim. Procure as características que realmente se repetem entre elas e mantenha as diferenças separadas. Não force todos os detalhes de todas as referências em um único prompt.'],
        ['Um prompt mais claro garante o resultado?', 'Não. Ferramentas generativas são probabilísticas. Um briefing melhor torna o experimento mais útil, mas não transforma o gerador em um instrumento determinístico.']
      ],
      sourcesTitle: 'Referências',
      sources: [
        ['Suno Safety — originalidade e imitação', 'https://about.suno.com/safety'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Atualizado: setembro de 2026.'
    }
  },

  bpmKeyEnergy: {
    number: '04',
    slug: 'bpm-key-energy',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · LESSON 04',
      title: 'BPM, key and energy: three controls that are easy to confuse',
      dek: 'Tempo tells you how quickly the pulse moves. Key describes the tonal center. Energy describes how intense the music feels. They influence one another, but they are not the same thing.',
      quickTitle: 'Quick answer',
      quick: 'Choose the emotional energy first, then a sensible tempo range, then a tonal direction that suits the voice or mood. Do not treat BPM and key as magic numbers. Arrangement, drum density, register, dynamics and production can make two tracks at the same BPM feel completely different.',
      sections: [
        {
          title: '1. BPM is speed, not identity',
          paragraphs: [
            'BPM means beats per minute. It gives a numerical description of pulse, but the number alone does not tell you the genre or how busy the music feels.',
            'A 70 BPM groove can be perceived as 140 in double-time; a fast tempo can still feel relaxed when the drums and phrasing leave space. Use BPM as a useful constraint, not a diagnosis.'
          ],
          bullets: [
            '70–90 BPM often supports spacious, slow or half-time feels.',
            '90–115 BPM covers a large amount of mid-tempo pop, hip-hop, R&B and crossover music.',
            '118–130 BPM is common territory for many dance-oriented grooves.',
            '140 BPM and above can feel very fast — or like a slower half-time pocket, depending on the rhythm.'
          ]
        },
        {
          title: '2. Key is a tonal home, not an emotion switch',
          paragraphs: [
            'A key tells you which pitch center the harmony is organized around. Major and minor can suggest different colors, but “major = happy” and “minor = sad” is far too simple. Melody, chords, voicing, register, rhythm and production change the emotional result.',
            'For vocal music, a practical key is often the one that lets the lead voice sit in a comfortable and expressive range. If you do not know the singer’s range, a tonal direction such as “minor-key center with a brief relative-major lift” can be more useful than forcing a precise key.'
          ]
        },
        {
          title: '3. Energy is an arrangement decision',
          paragraphs: ['Energy is what the listener feels. You can raise or lower it without changing BPM at all.'],
          bullets: [
            'Add or remove drums and percussion.',
            'Move the vocal or lead into a higher or lower register.',
            'Increase or reduce harmonic density.',
            'Open stereo width in the chorus and narrow it in the verse.',
            'Use silence, breakdowns, fills and transitions to create contrast.',
            'Change bass movement, transient impact, saturation or reverb depth.'
          ]
        },
        {
          title: 'A better order for choosing them',
          bullets: [
            'First: define the job of the section — intimate, tense, driving, euphoric, restrained, etc.',
            'Second: choose a BPM range that supports the rhythmic pocket you want.',
            'Third: choose a tonal direction that supports the melody and voice.',
            'Fourth: design the energy curve across the song instead of asking every section to be “high energy”.'
          ]
        },
        {
          title: 'Example: same tempo, different energy',
          example: {
            weakLabel: 'Flat instruction',
            weak: '“108 BPM, G minor, high energy all the way.”',
            strongLabel: 'More musical',
            strong: '“106–110 BPM; minor-key center; restrained verse with dry drums and sparse bass movement; pre-chorus removes the kick; chorus adds wider drums, stronger sub movement and layered vocal support; short low-energy breakdown before the final lift.”'
          },
          paragraphs: ['The second version does not merely specify numbers. It explains how the listener should experience movement.']
        },
        {
          title: 'When an exact BPM or key is useful',
          paragraphs: [
            'Exact values matter more when you are matching an existing production session, planning DJ transitions, recording musicians, working with stems or aligning a generation with material that already has a fixed tempo and pitch center.',
            'During early ideation, a small range often gives the generator enough freedom to find a natural pocket.'
          ]
        },
        {
          title: 'Common mistakes',
          bullets: [
            'Giving two or three contradictory BPM values in the same prompt.',
            'Assuming a minor key automatically makes a song dark.',
            'Using “high energy” in every section and leaving nowhere for the chorus to grow.',
            'Choosing a key without considering vocal range.',
            'Changing tempo when what you really need is a denser or sparser arrangement.'
          ]
        }
      ],
      takeawayTitle: 'A practical one-line formula',
      takeaway: 'Energy goal → rhythmic pocket → BPM range → tonal direction → section-by-section energy curve.',
      ctaTitle: 'Put the numbers in context',
      ctaText: 'Rythero Studio can suggest a tempo range from the chosen direction, build an arrangement map and flag conflicting BPM instructions before you generate.',
      studio: 'Open Rythero Studio',
      signature: 'Open Prompt Builder',
      related: 'Next lesson: Suno v6 — what changed',
      faqTitle: 'FAQ',
      faqs: [
        ['Should I always include BPM in an AI music prompt?', 'No. Include it when tempo matters to the groove or when you need repeatability. A qualitative tempo description can be enough for early exploration.'],
        ['Should I always include a key?', 'No. A key is useful when you have a vocal or instrumental reason for it. Otherwise a tonal direction can be more flexible.'],
        ['Can a slow song have high energy?', 'Yes. Energy can come from density, dynamics, vocal intensity, distortion, harmony and arrangement rather than speed alone.'],
        ['Why does the generated BPM sometimes differ?', 'Generative systems do not always follow numerical instructions exactly. Treat BPM as guidance unless the tool provides an explicit tempo-locking workflow.']
      ],
      sourcesTitle: 'References',
      sources: [
        ['Ableton Learning Music', 'https://learningmusic.ableton.com/'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Updated: September 2026.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · AI MUSIC · LECCIÓN 04',
      title: 'BPM, tonalidad y energía: tres controles fáciles de confundir',
      dek: 'El tempo indica la velocidad del pulso. La tonalidad describe el centro tonal. La energía describe cuánta intensidad sentimos. Se influyen entre sí, pero no son lo mismo.',
      quickTitle: 'Respuesta rápida',
      quick: 'Elige primero la energía emocional, después un rango de tempo razonable y por último una dirección tonal que encaje con la voz o el ambiente. No trates BPM y tonalidad como números mágicos. El arreglo, la densidad de batería, el registro, la dinámica y la producción pueden hacer que dos temas al mismo BPM se sientan completamente distintos.',
      sections: [
        {
          title: '1. BPM es velocidad, no identidad',
          paragraphs: [
            'BPM significa pulsos por minuto. Sirve para describir numéricamente el tempo, pero el número por sí solo no te dice el género ni lo ocupada que se siente la música.',
            'Un groove a 70 BPM puede percibirse como 140 en double-time; un tempo rápido puede sentirse relajado si la batería y el fraseo dejan espacio. Usa el BPM como restricción útil, no como diagnóstico.'
          ],
          bullets: [
            '70–90 BPM suele funcionar para sensaciones espaciosas, lentas o en half-time.',
            '90–115 BPM cubre muchísimo pop, hip-hop, R&B y música de cruce a tempo medio.',
            '118–130 BPM es territorio habitual de muchos grooves orientados a baile.',
            '140 BPM o más puede sentirse muy rápido o como un pocket más lento en half-time, según el ritmo.'
          ]
        },
        {
          title: '2. La tonalidad es un hogar tonal, no un interruptor emocional',
          paragraphs: [
            'La tonalidad indica el centro de alturas alrededor del que se organiza la armonía. Mayor y menor pueden sugerir colores distintos, pero “mayor = alegre” y “menor = triste” simplifica demasiado. Melodía, acordes, voicings, registro, ritmo y producción cambian el resultado emocional.',
            'En música vocal, una tonalidad práctica suele ser la que permite a la voz principal moverse en una zona cómoda y expresiva. Si no conoces su rango, una dirección como “centro tonal menor con una breve apertura hacia el relativo mayor” puede ser más útil que forzar una tonalidad exacta.'
          ]
        },
        {
          title: '3. La energía es una decisión de arreglo',
          paragraphs: ['La energía es lo que siente quien escucha. Puedes subirla o bajarla sin cambiar el BPM.'],
          bullets: [
            'Añade o elimina batería y percusión.',
            'Mueve la voz o el lead a un registro más alto o más bajo.',
            'Aumenta o reduce la densidad armónica.',
            'Abre la anchura estéreo en el estribillo y estréchala en el verso.',
            'Usa silencios, breakdowns, fills y transiciones para crear contraste.',
            'Cambia el movimiento del bajo, el impacto de transitorios, la saturación o la profundidad de reverb.'
          ]
        },
        {
          title: 'Un orden mejor para elegirlos',
          bullets: [
            'Primero: define el trabajo de la sección —íntima, tensa, impulsiva, eufórica, contenida, etc.—.',
            'Segundo: elige un rango de BPM que favorezca el pocket rítmico que buscas.',
            'Tercero: elige una dirección tonal que apoye la melodía y la voz.',
            'Cuarto: diseña la curva de energía de toda la canción en lugar de pedir “energía alta” en todas las partes.'
          ]
        },
        {
          title: 'Ejemplo: mismo tempo, energía distinta',
          example: {
            weakLabel: 'Instrucción plana',
            weak: '“108 BPM, Sol menor, energía alta todo el tiempo.”',
            strongLabel: 'Más musical',
            strong: '“106–110 BPM; centro tonal menor; verso contenido con batería seca y poco movimiento de bajo; el pre-estribillo elimina el bombo; el estribillo añade batería más ancha, mayor movimiento de subgrave y apoyo vocal por capas; breakdown corto de energía baja antes de la subida final.”'
          },
          paragraphs: ['La segunda versión no se limita a poner números. Explica cómo debe sentirse el movimiento.']
        },
        {
          title: 'Cuándo conviene un BPM o una tonalidad exactos',
          paragraphs: [
            'Los valores exactos importan más cuando quieres encajar en una sesión de producción existente, preparar transiciones de DJ, grabar músicos, trabajar con stems o alinear una generación con material que ya tiene tempo y centro tonal fijos.',
            'Durante la fase de ideas, un pequeño rango suele dejar libertad suficiente para que el generador encuentre un pocket natural.'
          ]
        },
        {
          title: 'Errores frecuentes',
          bullets: [
            'Dar dos o tres BPM contradictorios dentro del mismo prompt.',
            'Suponer que una tonalidad menor hace automáticamente oscura una canción.',
            'Pedir “energía alta” en todas las secciones y dejar al estribillo sin espacio para crecer.',
            'Elegir tonalidad sin pensar en el rango vocal.',
            'Cambiar el tempo cuando en realidad necesitas un arreglo más denso o más vacío.'
          ]
        }
      ],
      takeawayTitle: 'Una fórmula práctica en una línea',
      takeaway: 'Objetivo de energía → pocket rítmico → rango de BPM → dirección tonal → curva de energía por secciones.',
      ctaTitle: 'Pon los números en contexto',
      ctaText: 'Rythero Studio puede sugerir un rango de tempo según la dirección elegida, construir un mapa de arreglo y detectar instrucciones de BPM contradictorias antes de generar.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Prompt Builder',
      related: 'Siguiente lección: Suno v6 — qué ha cambiado',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        ['¿Debo poner siempre BPM en un prompt musical?', 'No. Inclúyelo cuando el tempo sea importante para el groove o necesites repetibilidad. Para explorar, una descripción cualitativa del tempo puede bastar.'],
        ['¿Debo indicar siempre una tonalidad?', 'No. Es útil cuando tienes una razón vocal o instrumental. Si no, una dirección tonal puede dar más flexibilidad.'],
        ['¿Una canción lenta puede tener mucha energía?', 'Sí. La energía también puede venir de densidad, dinámica, intensidad vocal, distorsión, armonía y arreglo, no solo de la velocidad.'],
        ['¿Por qué a veces el BPM generado es diferente?', 'Los sistemas generativos no siempre siguen instrucciones numéricas con precisión. Trata el BPM como una guía salvo que la herramienta ofrezca un flujo explícito para fijarlo.']
      ],
      sourcesTitle: 'Referencias',
      sources: [
        ['Ableton Learning Music', 'https://learningmusic.ableton.com/'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Actualizado: septiembre de 2026.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · AI MUSIC · AULA 04',
      title: 'BPM, tonalidade e energia: três controles fáceis de confundir',
      dek: 'O andamento diz quão rápido o pulso se move. A tonalidade descreve o centro tonal. A energia descreve a intensidade percebida. Eles se influenciam, mas não são a mesma coisa.',
      quickTitle: 'Resposta rápida',
      quick: 'Escolha primeiro a energia emocional, depois uma faixa de andamento coerente e por fim uma direção tonal que funcione com a voz ou o clima. Não trate BPM e tonalidade como números mágicos. Arranjo, densidade de bateria, registro, dinâmica e produção podem fazer duas faixas no mesmo BPM parecerem completamente diferentes.',
      sections: [
        {
          title: '1. BPM é velocidade, não identidade',
          paragraphs: [
            'BPM significa batidas por minuto. Ele descreve numericamente o pulso, mas o número sozinho não revela o gênero nem o quanto a música parece ocupada.',
            'Um groove a 70 BPM pode ser percebido como 140 em double-time; um andamento rápido ainda pode soar relaxado se a bateria e o fraseado deixarem espaço. Use BPM como uma restrição útil, não como diagnóstico.'
          ],
          bullets: [
            '70–90 BPM costuma funcionar para sensações espaçosas, lentas ou em half-time.',
            '90–115 BPM cobre muito pop, hip-hop, R&B e música híbrida em andamento médio.',
            '118–130 BPM é território comum para muitos grooves voltados à pista.',
            '140 BPM ou mais pode soar muito rápido ou como um pocket mais lento em half-time, dependendo do ritmo.'
          ]
        },
        {
          title: '2. Tonalidade é um centro, não um botão de emoção',
          paragraphs: [
            'A tonalidade indica o centro de alturas em torno do qual a harmonia se organiza. Maior e menor podem sugerir cores diferentes, mas “maior = feliz” e “menor = triste” é simplificação demais. Melodia, acordes, voicings, registro, ritmo e produção mudam o resultado emocional.',
            'Em música vocal, uma tonalidade prática geralmente é aquela que deixa a voz principal em uma região confortável e expressiva. Se você não conhece a extensão vocal, uma direção como “centro menor com uma breve abertura para o relativo maior” pode ser mais útil do que forçar uma tonalidade exata.'
          ]
        },
        {
          title: '3. Energia é uma decisão de arranjo',
          paragraphs: ['Energia é o que a pessoa sente ao ouvir. Você pode aumentar ou reduzir sem mudar o BPM.'],
          bullets: [
            'Adicione ou retire bateria e percussão.',
            'Leve a voz ou o lead para um registro mais alto ou mais baixo.',
            'Aumente ou reduza a densidade harmônica.',
            'Abra a largura estéreo no refrão e estreite nos versos.',
            'Use silêncio, breakdowns, fills e transições para criar contraste.',
            'Mude o movimento do baixo, o impacto dos transientes, a saturação ou a profundidade da reverberação.'
          ]
        },
        {
          title: 'Uma ordem melhor para escolher',
          bullets: [
            'Primeiro: defina a função da seção — íntima, tensa, impulsiva, eufórica, contida etc.',
            'Segundo: escolha uma faixa de BPM que favoreça o pocket rítmico desejado.',
            'Terceiro: escolha uma direção tonal que apoie a melodia e a voz.',
            'Quarto: desenhe a curva de energia da música inteira em vez de pedir “alta energia” em todas as seções.'
          ]
        },
        {
          title: 'Exemplo: mesmo andamento, energia diferente',
          example: {
            weakLabel: 'Instrução plana',
            weak: '“108 BPM, Sol menor, energia alta o tempo todo.”',
            strongLabel: 'Mais musical',
            strong: '“106–110 BPM; centro tonal menor; verso contido com bateria seca e pouco movimento de baixo; pré-refrão retira o bumbo; refrão adiciona bateria mais ampla, maior movimento de subgrave e apoio vocal em camadas; breakdown curto de baixa energia antes da elevação final.”'
          },
          paragraphs: ['A segunda versão não coloca apenas números. Ela explica como o movimento deve ser sentido.']
        },
        {
          title: 'Quando BPM ou tonalidade exatos são úteis',
          paragraphs: [
            'Valores exatos importam mais quando você precisa encaixar em uma sessão de produção existente, preparar transições de DJ, gravar músicos, trabalhar com stems ou alinhar uma geração a material que já tem andamento e centro tonal fixos.',
            'Na fase inicial de ideias, uma pequena faixa costuma dar liberdade suficiente para o gerador encontrar um pocket natural.'
          ]
        },
        {
          title: 'Erros comuns',
          bullets: [
            'Dar dois ou três valores de BPM contraditórios no mesmo prompt.',
            'Supor que uma tonalidade menor torna a música automaticamente escura.',
            'Pedir “alta energia” em todas as seções e não deixar espaço para o refrão crescer.',
            'Escolher tonalidade sem considerar a extensão vocal.',
            'Mudar o andamento quando o que você realmente precisa é de um arranjo mais denso ou mais vazio.'
          ]
        }
      ],
      takeawayTitle: 'Uma fórmula prática em uma linha',
      takeaway: 'Objetivo de energia → pocket rítmico → faixa de BPM → direção tonal → curva de energia por seções.',
      ctaTitle: 'Coloque os números em contexto',
      ctaText: 'O Rythero Studio pode sugerir uma faixa de andamento a partir da direção escolhida, construir um mapa de arranjo e detectar instruções de BPM contraditórias antes da geração.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Prompt Builder',
      related: 'Próxima aula: Suno v6 — o que mudou',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        ['Devo sempre incluir BPM em um prompt musical?', 'Não. Inclua quando o andamento for importante para o groove ou quando você precisar de repetibilidade. Para explorar, uma descrição qualitativa do andamento pode ser suficiente.'],
        ['Devo sempre indicar uma tonalidade?', 'Não. Ela é útil quando existe uma razão vocal ou instrumental. Caso contrário, uma direção tonal pode dar mais flexibilidade.'],
        ['Uma música lenta pode ter muita energia?', 'Sim. A energia também pode vir de densidade, dinâmica, intensidade vocal, distorção, harmonia e arranjo, não apenas da velocidade.'],
        ['Por que o BPM gerado às vezes é diferente?', 'Sistemas generativos nem sempre seguem instruções numéricas com precisão. Trate o BPM como orientação, a menos que a ferramenta ofereça um fluxo explícito para fixá-lo.']
      ],
      sourcesTitle: 'Referências',
      sources: [
        ['Ableton Learning Music', 'https://learningmusic.ableton.com/'],
        ['Suno Help — Music Glossary', 'https://help.suno.com/en/articles/9010177']
      ],
      updated: 'Atualizado: setembro de 2026.'
    }
  },

  sunoV6: {
    number: '05',
    slug: 'suno-v6',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · LESSON 05',
      title: 'Suno v6: what changed and which v6 model should you use?',
      dek: 'Suno introduced the v6 model family on September 9, 2026. The important change is not only sound quality: v6 separates precise creation, experimental exploration and fast iteration into three model variants.',
      quickTitle: 'Quick answer',
      quick: 'Use v6 when you want the most precise interpretation of a clear idea, v6-wild when you deliberately want more surprise, and v6-mini for fast exploration or when you are on the Free plan. All three can generate up to eight minutes in one generation. v6 and v6-wild require Pro or Premier; v6-mini is available on all plans.',
      sections: [
        {
          title: 'The three v6 models',
          bullets: [
            'v6 — the flagship model. Suno positions it as the reliable, precise choice when you know what you want. Available on Pro and Premier.',
            'v6-wild — the exploratory model. It is intentionally less predictable and more varied. Available on Pro and Premier.',
            'v6-mini — the faster, lighter option for quick ideas and high-volume iteration. Available on all plans, including Free.'
          ],
          paragraphs: ['There is no single “best” model for every step. A practical workflow is to explore cheaply and quickly, then move to the more controlled model when the direction is worth refining.']
        },
        {
          title: 'What v6 adds beyond a normal text-to-song prompt',
          paragraphs: ['According to Suno’s September 2026 release notes, the v6 family is also the foundation for a broader set of creation and editing workflows.'],
          bullets: [
            'Edit part of an existing song using plain-language instructions.',
            'Build mashups from multiple source elements in one request.',
            'Sample a section, isolate an element and build a new beat around it.',
            'Create from a vibe, genre or mixture of inspirations.',
            'Use text, audio, images and video as creative input.',
            'Change a lyric line without rebuilding the entire song.',
            'Use v6-powered tools such as Custom Models, Suno Sounds and Remix & Edit where your plan supports them.'
          ]
        },
        {
          title: 'Eight minutes does not mean you should always ask for eight minutes',
          paragraphs: [
            'Suno states that v6, v6-wild and v6-mini can generate up to eight minutes in a single generation. That is useful for longer structures, but duration is still a creative decision.',
            'If the idea only needs three minutes, a tighter structure often gives you more useful material to judge. Longer generation is most valuable when the arrangement has enough contrast and development to justify the extra time.'
          ]
        },
        {
          title: 'How prompting should change with v6',
          paragraphs: [
            'Do not respond to a more capable model by making the prompt twice as long. Give it hierarchy. Put the core direction first, then the groove and palette, then voice and structure, then production details and exclusions.',
            'When exploring with v6-wild, loosen one or two constraints on purpose. When moving back to v6, keep the discoveries you liked and turn them into clear traits.'
          ],
          example: {
            weakLabel: 'Overloaded',
            weak: '“Modern, emotional, cinematic, viral, dark, bright, powerful, intimate, experimental, commercial, retro and futuristic with lots of instruments and constant changes.”',
            strongLabel: 'Clearer for v6',
            strong: '“Nocturnal melodic hip-hop at mid tempo; deep controlled 808; sparse piano and atmospheric synth texture; low intimate male vocal; hook in the first seconds; restrained first verse, faster rhythmic pocket in verse 2, short breakdown, wider final hook; polished dark mix; no EDM drop, no long intro, no fade-out.”'
          }
        },
        {
          title: 'A simple v6 workflow',
          bullets: [
            '1. Define the song job: what should the listener feel and remember?',
            '2. Build a compact Style DNA instead of stacking adjectives.',
            '3. Use v6-mini for quick alternatives when speed matters.',
            '4. Use v6-wild when you want an intentional detour or unexpected combination.',
            '5. Bring the strongest direction into v6 for more controlled refinement.',
            '6. Change one major variable at a time so you know what actually improved the result.'
          ]
        },
        {
          title: 'What Rythero does differently',
          paragraphs: [
            'Rythero is not a Suno interface and is not affiliated with Suno. Its job is to help you make the creative decisions before you spend generations: song direction, prompt hierarchy, arrangement, lyrics brief, reference analysis and exclusions.',
            'That makes model changes easier to survive. A good creative brief can be adapted to Suno, another generator or a conventional production workflow instead of being locked to one version number.'
          ]
        },
        {
          title: 'What may change after this article',
          paragraphs: [
            'Suno changes quickly. Model access, plan limits, editing tools and interface labels can move after publication. This lesson uses Suno’s official documentation available on September 16, 2026. Check the linked official pages if a button, model or limit looks different later.'
          ]
        }
      ],
      takeawayTitle: 'Which model should I choose?',
      takeaway: 'Need control → v6. Need surprise → v6-wild. Need speed or Free-plan access → v6-mini. The model matters, but the quality of your creative brief still matters more than adding extra adjectives.',
      ctaTitle: 'Prepare the brief before you generate',
      ctaText: 'Use Prompt Builder for a focused generator prompt or Rythero Studio when you also want structure, Style DNA, lyrics planning and prompt checking.',
      studio: 'Open Rythero Studio',
      signature: 'Open Prompt Builder',
      related: 'Back to all lessons',
      faqTitle: 'FAQ',
      faqs: [
        ['When did Suno v6 launch?', 'Suno announced the v6 family on September 9, 2026.'],
        ['Is v6 available on the Free plan?', 'The flagship v6 and v6-wild models are listed for Pro and Premier subscribers. v6-mini is available on all plans.'],
        ['How long can v6 generate?', 'Suno’s current help documentation says v6, v6-wild and v6-mini support up to eight minutes per generation.'],
        ['Is v6-wild better than v6?', 'It serves a different purpose. v6 is positioned for precision and reliability; v6-wild is intentionally more unpredictable and exploratory.'],
        ['Will this guide stay current forever?', 'No platform-specific guide can. The article is date-stamped and links to Suno’s official release notes and help pages so changes can be checked.']
      ],
      sourcesTitle: 'Official Suno sources',
      sources: [
        ['Suno — Introducing v6', 'https://about.suno.com/release-notes/introducing-v6'],
        ['Suno Help — What’s new in v6?', 'https://help.suno.com/en/articles/13924801'],
        ['Suno Help — Current Models: v6', 'https://help.suno.com/en/articles/13924737'],
        ['Suno Help — How long will my song be?', 'https://help.suno.com/en/articles/13924929']
      ],
      updated: 'Updated: September 16, 2026.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · AI MUSIC · LECCIÓN 05',
      title: 'Suno v6: qué ha cambiado y qué modelo v6 conviene usar',
      dek: 'Suno presentó la familia v6 el 9 de septiembre de 2026. El cambio importante no es solo la calidad de sonido: v6 separa la creación precisa, la exploración experimental y la iteración rápida en tres variantes.',
      quickTitle: 'Respuesta rápida',
      quick: 'Usa v6 cuando quieras la interpretación más precisa de una idea clara, v6-wild cuando busques deliberadamente más sorpresa y v6-mini para explorar rápido o si estás en el plan Free. Los tres pueden generar hasta ocho minutos en una sola generación. v6 y v6-wild requieren Pro o Premier; v6-mini está disponible en todos los planes.',
      sections: [
        {
          title: 'Los tres modelos v6',
          bullets: [
            'v6 — modelo principal. Suno lo presenta como la opción fiable y precisa cuando sabes lo que quieres. Disponible en Pro y Premier.',
            'v6-wild — modelo exploratorio. Es deliberadamente menos predecible y más variado. Disponible en Pro y Premier.',
            'v6-mini — opción más rápida y ligera para ideas rápidas e iteración abundante. Disponible en todos los planes, incluido Free.'
          ],
          paragraphs: ['No existe un único modelo “mejor” para todos los pasos. Un flujo práctico es explorar rápido y con menos coste de oportunidad, y pasar al modelo más controlado cuando una dirección merece refinarse.']
        },
        {
          title: 'Qué añade v6 más allá de un prompt normal de texto a canción',
          paragraphs: ['Según las notas oficiales de Suno de septiembre de 2026, la familia v6 también sirve de base para un conjunto más amplio de flujos de creación y edición.'],
          bullets: [
            'Editar una parte de una canción existente con instrucciones en lenguaje natural.',
            'Construir mashups a partir de varios elementos fuente dentro de una misma petición.',
            'Muestrear una sección, aislar un elemento y construir un beat nuevo alrededor.',
            'Crear desde un ambiente, género o mezcla de inspiraciones.',
            'Usar texto, audio, imágenes y vídeo como entrada creativa.',
            'Cambiar una línea de letra sin reconstruir toda la canción.',
            'Usar herramientas impulsadas por v6 como Custom Models, Suno Sounds y Remix & Edit cuando el plan sea compatible.'
          ]
        },
        {
          title: 'Ocho minutos no significa que siempre debas pedir ocho minutos',
          paragraphs: [
            'Suno indica que v6, v6-wild y v6-mini pueden generar hasta ocho minutos en una sola generación. Es útil para estructuras largas, pero la duración sigue siendo una decisión creativa.',
            'Si la idea solo necesita tres minutos, una estructura más compacta suele darte material más fácil de evaluar. La duración extra merece la pena cuando el arreglo tiene suficiente contraste y desarrollo.'
          ]
        },
        {
          title: 'Cómo debería cambiar tu forma de escribir prompts con v6',
          paragraphs: [
            'No respondas a un modelo más capaz duplicando la longitud del prompt. Dale jerarquía: primero dirección principal, después groove y paleta, luego voz y estructura, y al final detalles de producción y exclusiones.',
            'Cuando explores con v6-wild, afloja una o dos restricciones a propósito. Si aparece algo interesante, vuelve a v6 conservando ese descubrimiento como un rasgo claro.'
          ],
          example: {
            weakLabel: 'Sobrecargado',
            weak: '“Moderno, emocional, cinematográfico, viral, oscuro, brillante, potente, íntimo, experimental, comercial, retro y futurista, con muchos instrumentos y cambios constantes.”',
            strongLabel: 'Más claro para v6',
            strong: '“Hip-hop melódico nocturno a tempo medio; 808 profundo y controlado; piano escaso y textura atmosférica de sintetizador; voz masculina grave e íntima; hook en los primeros segundos; primer verso contenido, pocket rítmico más rápido en el verso 2, breakdown corto y hook final más ancho; mezcla oscura y pulida; sin drop EDM, sin intro larga y sin fade-out.”'
          }
        },
        {
          title: 'Un flujo sencillo para v6',
          bullets: [
            '1. Define el trabajo de la canción: ¿qué debe sentir y recordar quien escucha?',
            '2. Construye un Style DNA compacto en lugar de apilar adjetivos.',
            '3. Usa v6-mini para alternativas rápidas cuando la velocidad sea importante.',
            '4. Usa v6-wild cuando quieras un desvío deliberado o una combinación inesperada.',
            '5. Lleva la dirección más fuerte a v6 para refinarla con mayor control.',
            '6. Cambia una variable importante cada vez para saber qué mejoró realmente el resultado.'
          ]
        },
        {
          title: 'Qué hace Rythero de forma diferente',
          paragraphs: [
            'Rythero no es una interfaz de Suno ni está afiliada a Suno. Su función es ayudarte a tomar decisiones creativas antes de gastar generaciones: dirección de canción, jerarquía del prompt, arreglo, guía de letra, análisis de referencias y exclusiones.',
            'Eso hace que los cambios de modelo sean más fáciles de soportar. Un buen brief creativo puede adaptarse a Suno, a otro generador o a un flujo de producción convencional sin quedar atado a un número de versión.'
          ]
        },
        {
          title: 'Qué puede cambiar después de este artículo',
          paragraphs: [
            'Suno cambia con rapidez. El acceso a modelos, los límites de planes, las herramientas de edición y los nombres de la interfaz pueden cambiar después de publicar. Esta lección utiliza la documentación oficial disponible el 16 de septiembre de 2026. Consulta las fuentes enlazadas si más adelante ves algo diferente.'
          ]
        }
      ],
      takeawayTitle: '¿Qué modelo elijo?',
      takeaway: 'Necesitas control → v6. Necesitas sorpresa → v6-wild. Necesitas velocidad o acceso desde Free → v6-mini. El modelo importa, pero un buen brief creativo sigue siendo más útil que añadir más adjetivos.',
      ctaTitle: 'Prepara el brief antes de generar',
      ctaText: 'Usa Prompt Builder para crear un prompt centrado o Rythero Studio si también quieres estructura, Style DNA, planificación de letra y revisión del prompt.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Prompt Builder',
      related: 'Volver a todas las lecciones',
      faqTitle: 'Preguntas frecuentes',
      faqs: [
        ['¿Cuándo salió Suno v6?', 'Suno anunció la familia v6 el 9 de septiembre de 2026.'],
        ['¿v6 está disponible en el plan Free?', 'Los modelos principales v6 y v6-wild están indicados para suscriptores Pro y Premier. v6-mini está disponible en todos los planes.'],
        ['¿Cuánto puede durar una generación con v6?', 'La documentación actual de Suno indica que v6, v6-wild y v6-mini admiten hasta ocho minutos por generación.'],
        ['¿v6-wild es mejor que v6?', 'Tiene otro objetivo. v6 está orientado a precisión y fiabilidad; v6-wild es deliberadamente más impredecible y exploratorio.'],
        ['¿Esta guía será válida para siempre?', 'No hay una guía de plataforma que lo sea. El artículo está fechado y enlaza las notas y páginas oficiales de Suno para poder comprobar cambios.']
      ],
      sourcesTitle: 'Fuentes oficiales de Suno',
      sources: [
        ['Suno — Introducing v6', 'https://about.suno.com/release-notes/introducing-v6'],
        ['Suno Help — What’s new in v6?', 'https://help.suno.com/en/articles/13924801'],
        ['Suno Help — Current Models: v6', 'https://help.suno.com/en/articles/13924737'],
        ['Suno Help — How long will my song be?', 'https://help.suno.com/en/articles/13924929']
      ],
      updated: 'Actualizado: 16 de septiembre de 2026.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · AI MUSIC · AULA 05',
      title: 'Suno v6: o que mudou e qual modelo v6 vale a pena usar',
      dek: 'A Suno apresentou a família v6 em 9 de setembro de 2026. A mudança importante não é apenas qualidade sonora: v6 separa criação precisa, exploração experimental e iteração rápida em três variantes.',
      quickTitle: 'Resposta rápida',
      quick: 'Use v6 quando quiser a interpretação mais precisa de uma ideia clara, v6-wild quando quiser deliberadamente mais surpresa e v6-mini para explorar rápido ou se estiver no plano Free. Os três podem gerar até oito minutos em uma única geração. v6 e v6-wild exigem Pro ou Premier; v6-mini está disponível em todos os planos.',
      sections: [
        {
          title: 'Os três modelos v6',
          bullets: [
            'v6 — modelo principal. A Suno o posiciona como a opção confiável e precisa quando você sabe o que quer. Disponível no Pro e Premier.',
            'v6-wild — modelo de exploração. É propositalmente menos previsível e mais variado. Disponível no Pro e Premier.',
            'v6-mini — opção mais rápida e leve para ideias rápidas e muitas iterações. Disponível em todos os planos, inclusive Free.'
          ],
          paragraphs: ['Não existe um único modelo “melhor” para todas as etapas. Um fluxo prático é explorar rapidamente e depois passar ao modelo mais controlado quando uma direção vale o refinamento.']
        },
        {
          title: 'O que v6 adiciona além de um prompt normal de texto para música',
          paragraphs: ['Segundo as notas oficiais da Suno de setembro de 2026, a família v6 também serve de base para um conjunto mais amplo de fluxos de criação e edição.'],
          bullets: [
            'Editar parte de uma música existente com instruções em linguagem natural.',
            'Criar mashups a partir de vários elementos de origem em um único pedido.',
            'Amostrar uma seção, isolar um elemento e construir um novo beat ao redor dele.',
            'Criar a partir de uma vibe, gênero ou mistura de inspirações.',
            'Usar texto, áudio, imagens e vídeo como entrada criativa.',
            'Alterar uma linha da letra sem reconstruir a música inteira.',
            'Usar ferramentas baseadas em v6 como Custom Models, Suno Sounds e Remix & Edit quando o plano for compatível.'
          ]
        },
        {
          title: 'Oito minutos não significa que você deve sempre pedir oito minutos',
          paragraphs: [
            'A Suno informa que v6, v6-wild e v6-mini podem gerar até oito minutos em uma única geração. Isso é útil para estruturas longas, mas duração continua sendo uma decisão criativa.',
            'Se a ideia precisa de apenas três minutos, uma estrutura mais enxuta costuma gerar material mais fácil de avaliar. A duração extra vale quando o arranjo tem contraste e desenvolvimento suficientes.'
          ]
        },
        {
          title: 'Como sua forma de escrever prompts deve mudar com v6',
          paragraphs: [
            'Não responda a um modelo mais capaz dobrando o tamanho do prompt. Dê hierarquia: primeiro a direção central, depois groove e paleta, em seguida voz e estrutura, e por último detalhes de produção e exclusões.',
            'Ao explorar com v6-wild, solte uma ou duas restrições de propósito. Se aparecer algo interessante, volte ao v6 mantendo a descoberta como uma característica clara.'
          ],
          example: {
            weakLabel: 'Sobrecarregado',
            weak: '“Moderno, emocional, cinematográfico, viral, escuro, brilhante, poderoso, íntimo, experimental, comercial, retrô e futurista, com muitos instrumentos e mudanças constantes.”',
            strongLabel: 'Mais claro para v6',
            strong: '“Hip-hop melódico noturno em andamento médio; 808 profundo e controlado; piano esparso e textura atmosférica de synth; vocal masculino grave e íntimo; hook nos primeiros segundos; primeiro verso contido, pocket rítmico mais rápido no verso 2, breakdown curto e hook final mais amplo; mix escura e polida; sem drop de EDM, sem introdução longa e sem fade-out.”'
          }
        },
        {
          title: 'Um fluxo simples para v6',
          bullets: [
            '1. Defina a função da música: o que a pessoa deve sentir e lembrar?',
            '2. Construa um Style DNA compacto em vez de empilhar adjetivos.',
            '3. Use v6-mini para alternativas rápidas quando velocidade importar.',
            '4. Use v6-wild quando quiser um desvio intencional ou uma combinação inesperada.',
            '5. Leve a direção mais forte ao v6 para refinar com mais controle.',
            '6. Mude uma variável importante por vez para saber o que realmente melhorou o resultado.'
          ]
        },
        {
          title: 'O que o Rythero faz de diferente',
          paragraphs: [
            'O Rythero não é uma interface da Suno e não é afiliado à Suno. Sua função é ajudar você a tomar decisões criativas antes de gastar gerações: direção da música, hierarquia do prompt, arranjo, briefing de letra, análise de referências e exclusões.',
            'Isso torna mudanças de modelo mais fáceis de atravessar. Um bom briefing criativo pode ser adaptado à Suno, a outro gerador ou a um fluxo convencional de produção sem ficar preso a um número de versão.'
          ]
        },
        {
          title: 'O que pode mudar depois deste artigo',
          paragraphs: [
            'A Suno muda rápido. Acesso a modelos, limites de planos, ferramentas de edição e nomes da interface podem mudar depois da publicação. Esta aula usa a documentação oficial disponível em 16 de setembro de 2026. Consulte as fontes abaixo se algo estiver diferente no futuro.'
          ]
        }
      ],
      takeawayTitle: 'Qual modelo escolher?',
      takeaway: 'Precisa de controle → v6. Precisa de surpresa → v6-wild. Precisa de velocidade ou acesso no Free → v6-mini. O modelo importa, mas a qualidade do briefing criativo ainda vale mais do que adicionar mais adjetivos.',
      ctaTitle: 'Prepare o briefing antes de gerar',
      ctaText: 'Use o Prompt Builder para um prompt focado ou o Rythero Studio quando também quiser estrutura, Style DNA, planejamento de letra e revisão do prompt.',
      studio: 'Abrir Rythero Studio',
      signature: 'Abrir Prompt Builder',
      related: 'Voltar para todas as aulas',
      faqTitle: 'Perguntas frequentes',
      faqs: [
        ['Quando o Suno v6 foi lançado?', 'A Suno anunciou a família v6 em 9 de setembro de 2026.'],
        ['v6 está disponível no plano Free?', 'Os modelos principais v6 e v6-wild são indicados para assinantes Pro e Premier. v6-mini está disponível em todos os planos.'],
        ['Quanto tempo uma geração com v6 pode ter?', 'A documentação atual da Suno informa que v6, v6-wild e v6-mini suportam até oito minutos por geração.'],
        ['v6-wild é melhor que v6?', 'Ele tem outra função. v6 é voltado para precisão e confiabilidade; v6-wild é deliberadamente mais imprevisível e exploratório.'],
        ['Este guia ficará atualizado para sempre?', 'Nenhum guia específico de plataforma fica. O artigo é datado e inclui links para as notas e páginas oficiais da Suno para verificar mudanças.']
      ],
      sourcesTitle: 'Fontes oficiais da Suno',
      sources: [
        ['Suno — Introducing v6', 'https://about.suno.com/release-notes/introducing-v6'],
        ['Suno Help — What’s new in v6?', 'https://help.suno.com/en/articles/13924801'],
        ['Suno Help — Current Models: v6', 'https://help.suno.com/en/articles/13924737'],
        ['Suno Help — How long will my song be?', 'https://help.suno.com/en/articles/13924929']
      ],
      updated: 'Atualizado: 16 de setembro de 2026.'
    }
  }
};
