export const advancedLessons = {
  'prompt-repair': {
    order: 11,
    updated: '2026-09-17',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · PROMPT REPAIR',
      title: 'Prompt repair: what to do when an AI music generator ignores you',
      description: 'A diagnostic method for AI music prompts that are too vague, contradictory or overloaded, with a step-by-step repair workflow.',
      intro: 'When a generator ignores an instruction, adding more instructions is often the worst response. Long prompts can contain conflicts, repeated ideas and low-priority details that compete with the part you actually care about.',
      quick: 'Reduce the prompt to three non-negotiables, one arrangement move and one avoid instruction. Test that version first. Add detail back only after the core behavior appears.',
      sections: [
        { title: 'Find contradictions before blaming the model', paragraphs: ['Read the prompt as if you were a producer receiving a brief. “Minimal but huge,” “slow and frantic,” or “dry vocal with massive reverb” may be artistically possible, but they need section context. Without it, the generator must guess which instruction wins.'], bullets: ['Separate section-specific instructions from whole-song traits.', 'Remove synonyms that repeat the same idea.', 'Do not specify five genres unless you explain what each contributes.', 'Check whether the avoid list contradicts the desired style.'] },
        { title: 'Use the compression test', paragraphs: ['Rewrite the prompt in one sentence under roughly 35–50 words. If the song direction disappears when you shorten it, the original prompt probably depended on decoration rather than decisions. Keep the compressed version as the control test.'] },
        { title: 'Move priorities to the front', paragraphs: ['Put the most important musical behavior first: groove, vocal character, core palette or arrangement change. Secondary mix adjectives and optional details can come later.'], example: { weak: 'Emotional cinematic atmospheric modern dark polished song with many details... and somewhere in verse two use double-time vocals.', strong: 'Mid-tempo dark alt-pop; verse 2 switches briefly to double-time vocal phrasing over the same BPM; low intimate lead; sparse drums and warm sub; chorus opens wider; no EDM drop.' } },
        { title: 'Change one variable between tests', paragraphs: ['If you rewrite genre, voice, structure and production together, you cannot know what fixed the result. Keep a small prompt log: version, one change, what improved, what regressed. After three or four tests you will have evidence instead of guesses.'] }
      ],
      takeaway: 'Repair order: remove contradictions → compress → place priorities first → test → change one variable → add detail back only when needed.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · REPARAR PROMPTS',
      title: 'Cómo reparar un prompt cuando el generador de música con IA te ignora',
      description: 'Método de diagnóstico para prompts vagos, contradictorios o sobrecargados, con un proceso de corrección paso a paso.',
      intro: 'Cuando un generador ignora una instrucción, añadir todavía más instrucciones suele empeorar el problema. Los prompts largos pueden contener conflictos, repeticiones y detalles secundarios que compiten con lo que realmente te importa.',
      quick: 'Reduce el prompt a tres rasgos no negociables, un cambio de arreglo y una exclusión. Prueba esa versión. Añade detalle solo cuando el comportamiento principal ya aparezca.',
      sections: [
        { title: 'Busca contradicciones antes de culpar al modelo', paragraphs: ['Lee el prompt como si fueras un productor que recibe un encargo. “Minimalista pero enorme”, “lento y frenético” o “voz seca con reverb gigantesca” pueden funcionar, pero necesitan contexto por secciones. Si no lo das, el modelo decide qué instrucción priorizar.'], bullets: ['Separa instrucciones de una sección concreta de los rasgos generales.', 'Elimina sinónimos que repiten la misma idea.', 'No metas cinco géneros si no explicas qué aporta cada uno.', 'Comprueba que la lista de exclusiones no contradiga el estilo deseado.'] },
        { title: 'Haz la prueba de compresión', paragraphs: ['Reescribe el prompt en una sola frase de unas 35–50 palabras. Si al acortarlo desaparece la dirección musical, probablemente el original dependía más de decoración que de decisiones. Conserva la versión comprimida como prueba de control.'] },
        { title: 'Pon las prioridades al principio', paragraphs: ['Coloca primero el comportamiento que más te importa: groove, carácter vocal, paleta principal o cambio de arreglo. Los adjetivos de mezcla y detalles opcionales pueden ir después.'], example: { weak: 'Canción emocional, cinematográfica, atmosférica, moderna, oscura, pulida, con muchos detalles... y en algún lugar del segundo verso usa double-time.', strong: 'Alt-pop oscuro a tempo medio; el verso 2 cambia brevemente a fraseo vocal double-time sobre el mismo BPM; voz grave e íntima; batería escasa y subgrave cálido; estribillo más ancho; sin drop EDM.' } },
        { title: 'Cambia una variable entre pruebas', paragraphs: ['Si cambias a la vez género, voz, estructura y producción, no sabrás qué arregló el problema. Lleva un registro mínimo: versión, un cambio, qué mejoró y qué empeoró. En tres o cuatro pruebas tendrás evidencia, no intuiciones.'] }
      ],
      takeaway: 'Orden de reparación: elimina contradicciones → comprime → adelanta prioridades → prueba → cambia una variable → recupera detalle solo si hace falta.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · REPARO DE PROMPTS',
      title: 'Como reparar um prompt quando o gerador de música com IA ignora você',
      description: 'Método de diagnóstico para prompts vagos, contraditórios ou sobrecarregados, com um fluxo de correção passo a passo.',
      intro: 'Quando um gerador ignora uma instrução, adicionar ainda mais instruções costuma piorar. Prompts longos podem conter conflitos, repetições e detalhes secundários que competem com o que realmente importa.',
      quick: 'Reduza o prompt a três pontos não negociáveis, uma mudança de arranjo e uma exclusão. Teste essa versão. Só recoloque detalhes depois que o comportamento principal aparecer.',
      sections: [
        { title: 'Procure contradições antes de culpar o modelo', paragraphs: ['Leia o prompt como um produtor recebendo um briefing. “Minimalista mas enorme”, “lento e frenético” ou “vocal seco com reverb gigante” podem funcionar, mas precisam de contexto por seção. Sem isso, o gerador decide qual instrução vence.'], bullets: ['Separe instruções específicas de seção dos traços da música inteira.', 'Remova sinônimos que repetem a mesma ideia.', 'Não use cinco gêneros sem explicar o papel de cada um.', 'Confira se a lista do que evitar não contradiz o estilo desejado.'] },
        { title: 'Faça o teste de compressão', paragraphs: ['Reescreva o prompt em uma única frase de cerca de 35–50 palavras. Se a direção musical desaparecer quando você encurta, o prompt original provavelmente dependia de decoração e não de decisões. Use a versão comprimida como teste de controle.'] },
        { title: 'Coloque prioridades no início', paragraphs: ['Comece pelo comportamento musical mais importante: groove, caráter vocal, paleta principal ou mudança de arranjo. Adjetivos de mix e detalhes opcionais podem vir depois.'], example: { weak: 'Música emocional, cinematográfica, atmosférica, moderna, escura, polida, com muitos detalhes... e em algum lugar do segundo verso use double-time.', strong: 'Alt-pop escuro em andamento médio; verso 2 muda brevemente para fraseado vocal double-time no mesmo BPM; lead grave e íntimo; bateria esparsa e sub quente; refrão mais amplo; sem drop EDM.' } },
        { title: 'Mude uma variável entre testes', paragraphs: ['Se você muda gênero, voz, estrutura e produção ao mesmo tempo, não consegue saber o que corrigiu o resultado. Registre versão, uma mudança, o que melhorou e o que piorou. Em três ou quatro testes você terá evidência em vez de chute.'] }
      ],
      takeaway: 'Ordem de reparo: remova contradições → comprima → coloque prioridades primeiro → teste → mude uma variável → recoloque detalhes só se necessário.'
    }
  },

  'reference-audio-without-imitation': {
    order: 12,
    updated: '2026-09-17',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · REFERENCES',
      title: 'Reference audio without imitation: extract traits, not identities',
      description: 'A safe, creative method for turning reference tracks into transferable musical traits without trying to reproduce a specific artist, voice or recording.',
      intro: 'A reference is most useful when it helps you hear decisions. Instead of asking a model to copy a person or recording, use the reference to identify groove, density, palette, vocal behavior, arrangement and production traits that can be recombined into your own direction.',
      quick: 'Listen in passes. Write what the rhythm does, what dominates the sound, how the voice behaves, where the energy changes and what the production feels like. Remove names before writing the final prompt.',
      sections: [
        { title: 'Use five listening passes', paragraphs: ['One unfocused listen produces vague adjectives. Five focused passes give you a reusable brief.'], bullets: ['Rhythm: subdivision, swing, syncopation, backbeat and bass movement.', 'Palette: the two or three textures that dominate.', 'Voice: register, texture, delivery, phrase density and layers.', 'Arrangement: when elements enter, disappear or change role.', 'Production: dry/wet, narrow/wide, dark/bright, clean/gritty, soft/sharp transients.'] },
        { title: 'Do not confuse surface with structure', paragraphs: ['A guitar tone or vocal texture may be memorable, but the deeper reason a reference works may be its arrangement. Ask what would still be effective if the instrument changed. That answer is usually more transferable.'] },
        { title: 'Build a trait matrix from several references', paragraphs: ['If you use three references, do not average everything into one overloaded style. Mark which traits repeat and which are unique. Repeated traits can become your core; unique traits can become optional experiments.'], example: { weak: 'Reference A + B + C, combine everything.', strong: 'Core across references: sparse syncopated drums, low intimate lead, chorus widens without a tempo change. Optional experiment from reference B: brief half-time breakdown. Different instrumentation from all three.' } },
        { title: 'Only upload audio you have the right to use', paragraphs: ['If a platform supports reference uploads, follow its current upload rules. Some services require that you own or control the uploaded audio and may restrict copyrighted commercial recordings. A descriptive listening exercise does not require uploading the reference at all.'] }
      ],
      takeaway: 'Reference workflow: listen in passes → extract traits → remove names → keep recurring traits → recombine them with your own palette and story.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · REFERENCIAS',
      title: 'Audio de referencia sin imitar: extrae rasgos, no identidades',
      description: 'Método creativo para convertir referencias musicales en rasgos transferibles sin intentar reproducir a un artista, una voz o una grabación concreta.',
      intro: 'Una referencia es más útil cuando te ayuda a escuchar decisiones. En vez de pedir al modelo que copie a una persona o una grabación, úsala para identificar groove, densidad, paleta, comportamiento vocal, arreglo y producción, y recombina esos rasgos en una dirección propia.',
      quick: 'Escucha por pasadas. Apunta qué hace el ritmo, qué domina el sonido, cómo se comporta la voz, dónde cambia la energía y cómo se siente la producción. Elimina nombres antes de escribir el prompt final.',
      sections: [
        { title: 'Haz cinco escuchas con una misión', paragraphs: ['Una escucha sin foco produce adjetivos vagos. Cinco pasadas concretas generan un brief reutilizable.'], bullets: ['Ritmo: subdivisión, swing, síncopa, backbeat y movimiento del bajo.', 'Paleta: las dos o tres texturas dominantes.', 'Voz: registro, textura, interpretación, densidad de fraseo y capas.', 'Arreglo: cuándo entran, salen o cambian de función los elementos.', 'Producción: seca/húmeda, estrecha/ancha, oscura/brillante, limpia/áspera, transitorios suaves/agresivos.'] },
        { title: 'No confundas superficie con estructura', paragraphs: ['Un timbre de guitarra o una textura vocal pueden llamar la atención, pero quizá la referencia funciona por su arreglo. Pregunta qué seguiría funcionando si cambiara el instrumento. Esa respuesta suele ser más transferible.'] },
        { title: 'Crea una matriz de rasgos con varias referencias', paragraphs: ['Si usas tres referencias, no mezcles absolutamente todo en un estilo sobrecargado. Marca qué rasgos se repiten y cuáles son únicos. Los repetidos pueden convertirse en núcleo; los únicos, en experimentos opcionales.'], example: { weak: 'Referencia A + B + C, mezclarlo todo.', strong: 'Núcleo común: batería sincopada y escasa, voz grave e íntima, estribillo que se ensancha sin cambiar tempo. Experimento opcional de la referencia B: breakdown breve en half-time. Instrumentación distinta de las tres.' } },
        { title: 'Sube solo audio que tengas derecho a usar', paragraphs: ['Si una plataforma permite subir referencias, respeta sus reglas actuales. Algunos servicios exigen que seas titular o controles el audio y pueden restringir grabaciones comerciales protegidas. Para hacer un análisis descriptivo ni siquiera necesitas subir la referencia.'] }
      ],
      takeaway: 'Flujo de referencia: escucha por pasadas → extrae rasgos → elimina nombres → conserva rasgos recurrentes → recombínalos con tu propia paleta e historia.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · REFERÊNCIAS',
      title: 'Áudio de referência sem imitação: extraia traços, não identidades',
      description: 'Método criativo para transformar referências musicais em traços transferíveis sem tentar reproduzir um artista, uma voz ou uma gravação específica.',
      intro: 'Uma referência é mais útil quando ajuda você a ouvir decisões. Em vez de pedir ao modelo para copiar uma pessoa ou gravação, use a referência para identificar groove, densidade, paleta, comportamento vocal, arranjo e produção, e recombine esses traços em uma direção própria.',
      quick: 'Ouça em passagens. Anote o que o ritmo faz, o que domina o som, como a voz se comporta, onde a energia muda e como a produção soa. Remova nomes antes de escrever o prompt final.',
      sections: [
        { title: 'Faça cinco audições com uma missão', paragraphs: ['Uma audição sem foco produz adjetivos vagos. Cinco passagens específicas geram um briefing reutilizável.'], bullets: ['Ritmo: subdivisão, swing, síncope, backbeat e movimento do baixo.', 'Paleta: duas ou três texturas dominantes.', 'Voz: registro, textura, entrega, densidade de fraseado e camadas.', 'Arranjo: quando elementos entram, saem ou mudam de função.', 'Produção: seca/molhada, estreita/ampla, escura/brilhante, limpa/áspera, transientes suaves/fortes.'] },
        { title: 'Não confunda superfície com estrutura', paragraphs: ['Um timbre de guitarra ou uma textura vocal podem ser memoráveis, mas talvez a referência funcione por causa do arranjo. Pergunte o que continuaria funcionando se o instrumento mudasse. Essa resposta costuma ser mais transferível.'] },
        { title: 'Crie uma matriz de traços com várias referências', paragraphs: ['Se usar três referências, não misture tudo em um estilo sobrecarregado. Marque quais traços se repetem e quais são únicos. Os repetidos podem virar núcleo; os únicos, experimentos opcionais.'], example: { weak: 'Referência A + B + C, combinar tudo.', strong: 'Núcleo comum: bateria sincopada e esparsa, lead grave e íntimo, refrão que abre sem mudar andamento. Experimento opcional da referência B: breakdown curto em half-time. Instrumentação diferente das três.' } },
        { title: 'Envie apenas áudio que você tem direito de usar', paragraphs: ['Se a plataforma aceita áudio de referência, siga as regras atuais de upload. Alguns serviços exigem que você seja dono ou controlador do áudio e podem restringir gravações comerciais protegidas. Um exercício de escuta descritiva nem precisa de upload.'] }
      ],
      takeaway: 'Fluxo de referência: ouça em passagens → extraia traços → remova nomes → mantenha traços recorrentes → recombine com sua própria paleta e história.'
    }
  },

  'lyrics-that-move': {
    order: 13,
    updated: '2026-09-17',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · LYRICS',
      title: 'Lyrics that move: hook, point of view, images and section jobs',
      description: 'Write AI-assisted lyrics with a clear point of view, section purpose, natural rhyme and a hook that changes meaning as the song progresses.',
      intro: 'Lyrics often feel generic when every section says the same emotion in different words. A song moves when information, perspective or emotional pressure changes from section to section.',
      quick: 'Give every section one job: verse shows evidence, pre-chorus tightens the question, chorus states the unavoidable truth, second verse changes the angle, bridge reveals or reframes something.',
      sections: [
        { title: 'Write the one-sentence story first', paragraphs: ['Summarize the song without poetic language: “He returns to the neighborhood after years away and realizes the place changed less than he did.” That sentence becomes a filter. A line that does not help that story probably does not belong.'] },
        { title: 'Use concrete images before abstract emotion', paragraphs: ['“I miss you” is clear but generic. A physical detail can carry the same feeling with more identity: an untouched cup, a key that no longer opens anything, a jacket still hanging in the wrong house. Use a few strong images, not a catalogue of metaphors.'] },
        { title: 'Let the hook gain meaning', paragraphs: ['A good hook can repeat while its context changes. In the first chorus “I left the light on” might mean waiting. After the bridge it might mean forgiveness. The words remain simple, but the story gives them more weight.'] },
        { title: 'Rhyme is support, not the steering wheel', paragraphs: ['Prefer natural syntax and believable speech. If a rhyme forces a strange word, change the rhyme. Internal rhyme, repeated vowels and rhythmic echoes can create musicality without ending every line with an obvious pair.'], bullets: ['Read the lyric aloud without music.', 'Mark any line you would never actually say.', 'Remove filler that exists only to complete a rhyme.', 'Vary line length so every verse does not march identically.'] }
      ],
      takeaway: 'Story sentence + section jobs + concrete images + evolving hook + natural speech. Rhyme should reinforce meaning, not replace it.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · LETRAS',
      title: 'Letras que avanzan: hook, punto de vista, imágenes y función de cada sección',
      description: 'Escribe letras asistidas por IA con punto de vista claro, secciones que cumplen una función, rima natural y un hook que gana significado.',
      intro: 'Una letra suele sonar genérica cuando todas las secciones repiten la misma emoción con palabras distintas. La canción avanza cuando cambian la información, el punto de vista o la presión emocional.',
      quick: 'Da un trabajo a cada parte: el verso muestra pruebas, el preestribillo aprieta la pregunta, el estribillo dice la verdad inevitable, el segundo verso cambia el ángulo y el puente revela o reinterpreta algo.',
      sections: [
        { title: 'Escribe primero la historia en una frase', paragraphs: ['Resume la canción sin lenguaje poético: “Vuelve al barrio después de años y descubre que el lugar ha cambiado menos que él.” Esa frase funciona como filtro. Una línea que no ayude a esa historia probablemente sobra.'] },
        { title: 'Usa imágenes concretas antes que emoción abstracta', paragraphs: ['“Te echo de menos” es claro, pero genérico. Un detalle físico puede cargar con la misma emoción y tener más identidad: una taza sin tocar, una llave que ya no abre nada, una chaqueta que sigue colgada en la casa equivocada. Usa pocas imágenes fuertes, no un catálogo de metáforas.'] },
        { title: 'Haz que el hook gane significado', paragraphs: ['Un buen hook puede repetirse mientras cambia su contexto. En el primer estribillo “dejé la luz encendida” puede significar espera. Después del puente puede significar perdón. Las palabras siguen siendo simples, pero la historia les añade peso.'] },
        { title: 'La rima acompaña; no conduce', paragraphs: ['Prioriza sintaxis natural y una voz creíble. Si una rima te obliga a usar una palabra extraña, cambia la rima. Rimas internas, vocales repetidas y ecos rítmicos pueden dar musicalidad sin cerrar cada línea con una pareja obvia.'], bullets: ['Lee la letra en voz alta sin música.', 'Marca cualquier frase que jamás dirías hablando.', 'Elimina relleno que solo existe para completar una rima.', 'Varía la longitud de las líneas para que todos los versos no marchen igual.'] }
      ],
      takeaway: 'Historia en una frase + función por secciones + imágenes concretas + hook que evoluciona + habla natural. La rima refuerza el significado; no lo sustituye.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · LETRAS',
      title: 'Letras que avançam: hook, ponto de vista, imagens e função de cada seção',
      description: 'Escreva letras assistidas por IA com ponto de vista claro, seções com função, rima natural e um hook que ganha significado ao longo da música.',
      intro: 'A letra costuma soar genérica quando todas as seções repetem a mesma emoção com palavras diferentes. A música avança quando informação, perspectiva ou pressão emocional mudam de seção para seção.',
      quick: 'Dê um trabalho a cada parte: o verso mostra evidências, o pré-refrão aperta a pergunta, o refrão diz a verdade inevitável, o segundo verso muda o ângulo e a ponte revela ou reformula algo.',
      sections: [
        { title: 'Escreva primeiro a história em uma frase', paragraphs: ['Resuma a música sem linguagem poética: “Ele volta ao bairro depois de anos e percebe que o lugar mudou menos do que ele.” Essa frase vira um filtro. Uma linha que não ajuda essa história provavelmente não precisa estar ali.'] },
        { title: 'Use imagens concretas antes da emoção abstrata', paragraphs: ['“Sinto sua falta” é claro, mas genérico. Um detalhe físico pode carregar a mesma emoção com mais identidade: uma xícara intocada, uma chave que já não abre nada, uma jaqueta ainda pendurada na casa errada. Use poucas imagens fortes, não um catálogo de metáforas.'] },
        { title: 'Faça o hook ganhar significado', paragraphs: ['Um bom hook pode se repetir enquanto o contexto muda. No primeiro refrão, “deixei a luz acesa” pode significar espera. Depois da ponte, pode significar perdão. As palavras continuam simples, mas a história dá mais peso.'] },
        { title: 'Rima apoia; não dirige', paragraphs: ['Priorize sintaxe natural e uma voz crível. Se uma rima obriga você a usar uma palavra estranha, troque a rima. Rimas internas, vogais repetidas e ecos rítmicos criam musicalidade sem terminar toda linha com pares óbvios.'], bullets: ['Leia a letra em voz alta sem música.', 'Marque qualquer frase que você nunca diria falando.', 'Remova enchimento que existe apenas para completar uma rima.', 'Varie o tamanho das linhas para que todos os versos não andem iguais.'] }
      ],
      takeaway: 'História em uma frase + função por seções + imagens concretas + hook que evolui + fala natural. A rima reforça o significado; não substitui.'
    }
  },

  'iteration-workflow': {
    order: 14,
    updated: '2026-09-17',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · WORKFLOW',
      title: 'From promising generation to finished song: an iteration workflow that does not lose the idea',
      description: 'A disciplined AI music iteration workflow: freeze what works, isolate the weakest section, version changes and know when to stop regenerating.',
      intro: 'A promising generation can get worse when every revision rewrites the whole song. Finishing requires preserving what works and narrowing the change surface.',
      quick: 'Freeze the identity, rank problems by impact, fix one section or trait at a time, keep versions and stop when new generations trade one solved problem for another of similar size.',
      sections: [
        { title: 'Write a keep list before touching anything', paragraphs: ['Immediately note the three things you do not want to lose: perhaps the lead vocal character, chorus melody and dry groove. These become your anchors. If a later version improves the bridge but destroys two anchors, it is not an upgrade.'] },
        { title: 'Rank problems instead of chasing perfection', paragraphs: ['Label issues as A, B or C. A-problems block the song: weak hook, unusable vocal, broken structure. B-problems reduce quality but can wait. C-problems are preferences. Fix A first.'] },
        { title: 'Version by hypothesis', paragraphs: ['Name each revision by what you are testing: v03-shorter-intro, v04-chorus-vocal, v05-half-time-bridge. A version number without a hypothesis becomes a pile of files you cannot learn from.'] },
        { title: 'Know the regeneration trap', paragraphs: ['If each new generation is different rather than clearly better, return to the strongest version and finish around it. Infinite variation can hide the fact that the creative decision is already good enough.'] }
      ],
      takeaway: 'Keep list → problem ranking → one hypothesis per version → compare against anchors → stop when variation replaces improvement.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · FLUJO DE TRABAJO',
      title: 'De una buena generación a una canción terminada: cómo iterar sin perder la idea',
      description: 'Flujo disciplinado de iteración: congela lo que funciona, aísla la parte más débil, versiona cambios y aprende cuándo dejar de regenerar.',
      intro: 'Una generación prometedora puede empeorar cuando cada revisión reescribe la canción completa. Terminar exige proteger lo que funciona y reducir la superficie de cambio.',
      quick: 'Congela la identidad, ordena los problemas por impacto, corrige una sección o rasgo cada vez, conserva versiones y detente cuando cada nueva generación cambie un problema por otro de tamaño parecido.',
      sections: [
        { title: 'Haz una lista de lo que debes conservar', paragraphs: ['Apunta inmediatamente tres cosas que no quieres perder: quizá el carácter de la voz principal, la melodía del estribillo y el groove seco. Son tus anclas. Si una versión mejora el puente pero destruye dos anclas, no es una mejora global.'] },
        { title: 'Ordena problemas en vez de perseguir perfección', paragraphs: ['Clasifica los fallos como A, B o C. Los A bloquean la canción: hook débil, voz inutilizable, estructura rota. Los B restan calidad pero pueden esperar. Los C son preferencias. Empieza por los A.'] },
        { title: 'Versiona por hipótesis', paragraphs: ['Nombra cada revisión por lo que estás probando: v03-intro-mas-corta, v04-voz-estribillo, v05-puente-half-time. Un número sin hipótesis termina siendo una carpeta de archivos de la que no aprendes nada.'] },
        { title: 'Reconoce la trampa de regenerar', paragraphs: ['Si cada nueva generación es distinta pero no claramente mejor, vuelve a la versión más fuerte y termina alrededor de ella. La variación infinita puede ocultar que la decisión creativa ya era suficientemente buena.'] }
      ],
      takeaway: 'Lista de cosas a conservar → problemas por impacto → una hipótesis por versión → compara con tus anclas → para cuando la variación sustituya a la mejora.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · FLUXO DE TRABALHO',
      title: 'De uma boa geração a uma música terminada: como iterar sem perder a ideia',
      description: 'Fluxo disciplinado de iteração: congele o que funciona, isole a parte mais fraca, versione mudanças e saiba quando parar de regenerar.',
      intro: 'Uma geração promissora pode piorar quando cada revisão reescreve a música inteira. Finalizar exige preservar o que funciona e reduzir a superfície de mudança.',
      quick: 'Congele a identidade, ordene problemas por impacto, corrija uma seção ou traço por vez, mantenha versões e pare quando cada nova geração trocar um problema resolvido por outro de tamanho parecido.',
      sections: [
        { title: 'Faça uma lista do que precisa ficar', paragraphs: ['Anote imediatamente três coisas que você não quer perder: talvez o caráter do vocal principal, a melodia do refrão e o groove seco. Esses são seus pontos de ancoragem. Se uma versão melhora a ponte mas destrói dois deles, não é melhoria global.'] },
        { title: 'Ordene problemas em vez de perseguir perfeição', paragraphs: ['Classifique falhas como A, B ou C. Problemas A bloqueiam a música: hook fraco, vocal inutilizável, estrutura quebrada. B reduz qualidade mas pode esperar. C é preferência. Corrija A primeiro.'] },
        { title: 'Versione por hipótese', paragraphs: ['Nomeie cada revisão pelo teste: v03-intro-curta, v04-vocal-refrão, v05-ponte-half-time. Um número sem hipótese vira uma pilha de arquivos da qual você não aprende nada.'] },
        { title: 'Reconheça a armadilha da regeneração', paragraphs: ['Se cada nova geração é diferente, mas não claramente melhor, volte à versão mais forte e termine em torno dela. Variação infinita pode esconder que a decisão criativa já estava boa o suficiente.'] }
      ],
      takeaway: 'Lista do que manter → problemas por impacto → uma hipótese por versão → compare com os pontos de ancoragem → pare quando variação substituir melhoria.'
    }
  },

  'ai-music-rights-checklist': {
    order: 15,
    updated: '2026-09-17',
    en: {
      eyebrow: 'AI MUSIC CREATOR SCHOOL · RIGHTS CHECKLIST',
      title: 'AI music rights before release: a practical checklist, not legal advice',
      description: 'A pre-release checklist for AI-generated music covering platform terms, input rights, commercial-use plans, distribution, attribution and copyright uncertainty.',
      intro: '“I generated it” does not answer every rights question. Platform contracts, the material you supplied, local copyright law and the distributor’s rules are separate layers. Check all of them before monetizing or publishing widely.',
      quick: 'Save the platform terms that applied when you generated the track, confirm your plan allows the intended commercial use, verify every uploaded lyric/audio/voice asset, and read your distributor’s current AI-content rules.',
      sections: [
        { title: 'Separate four different questions', paragraphs: ['Do not collapse ownership, copyright, platform permission and distribution eligibility into one yes/no answer. A service can grant you contractual use rights even where national law gives limited or uncertain copyright protection to fully machine-generated material.'], bullets: ['Platform permission: what the service contract lets you do.', 'Input rights: whether you had permission to use lyrics, audio, samples or voices you supplied.', 'Copyright status: what protection, if any, local law grants the output.', 'Distribution policy: whether Spotify distributors, stock libraries, sync platforms or clients accept the material under their own rules.'] },
        { title: 'Keep evidence', paragraphs: ['Save the date, plan, receipt, relevant terms URL and a copy or screenshot of the commercial-use language. Terms can change. Good records help you prove what conditions applied to your generation and release workflow.'] },
        { title: 'Treat reference uploads as a separate risk', paragraphs: ['A platform may allow reference audio only when you own or control it. Do not assume that “reference” means “fair use.” If you cannot document your rights to upload a commercial recording, use descriptive traits instead.'] },
        { title: 'Do a release-day check', paragraphs: ['Immediately before distribution, revisit the generator terms and the distributor policy. If the song includes third-party lyrics, cloned or recognizable voices, samples or uploaded recordings, verify those permissions separately. For a commercial release with material risk, obtain qualified legal advice in the relevant jurisdiction.'] }
      ],
      takeaway: 'Terms + plan + input rights + copyright position + distributor rules + records. Check each layer separately before commercial release.'
    },
    es: {
      eyebrow: 'ESCUELA DE CREADORES · CHECKLIST DE DERECHOS',
      title: 'Derechos de música con IA antes de publicar: checklist práctico, no asesoramiento legal',
      description: 'Lista de comprobación antes de publicar música generada con IA: condiciones de la plataforma, derechos de entrada, uso comercial, distribución y copyright.',
      intro: '“La he generado yo” no responde a todas las preguntas jurídicas. El contrato de la plataforma, el material que aportaste, la legislación local de copyright y las reglas del distribuidor son capas distintas. Revisa todas antes de monetizar o publicar a gran escala.',
      quick: 'Guarda las condiciones que estaban vigentes cuando generaste el tema, confirma que tu plan permite el uso comercial previsto, verifica cada letra/audio/voz que hayas aportado y lee las reglas actuales de tu distribuidor sobre contenido generado con IA.',
      sections: [
        { title: 'Separa cuatro preguntas distintas', paragraphs: ['No conviertas propiedad, copyright, permiso de plataforma y elegibilidad para distribución en una sola respuesta de sí/no. Un servicio puede concederte derechos contractuales de uso aunque la legislación nacional otorgue protección limitada o incierta a material totalmente generado por máquina.'], bullets: ['Permiso de plataforma: qué permite hacer el contrato del servicio.', 'Derechos de entrada: si tenías permiso sobre letras, audio, samples o voces que aportaste.', 'Situación de copyright: qué protección reconoce, si la hay, la ley aplicable al resultado.', 'Política de distribución: si distribuidores, librerías, plataformas de sync o clientes aceptan ese material bajo sus propias reglas.'] },
        { title: 'Guarda pruebas', paragraphs: ['Conserva fecha, plan, recibo, URL de condiciones y una copia o captura del texto sobre uso comercial. Las condiciones cambian. Un buen registro ayuda a acreditar qué reglas se aplicaban a tu flujo de generación y publicación.'] },
        { title: 'Trata el audio de referencia como un riesgo separado', paragraphs: ['Una plataforma puede permitir referencias solo si eres titular o controlas el audio. No des por hecho que “referencia” equivale a “uso legítimo”. Si no puedes documentar el derecho a subir una grabación comercial, trabaja con rasgos descriptivos.'] },
        { title: 'Haz una revisión el día de publicar', paragraphs: ['Justo antes de distribuir, vuelve a comprobar las condiciones del generador y la política del distribuidor. Si hay letras de terceros, voces clonadas o reconocibles, samples o grabaciones subidas, verifica esos permisos por separado. Para un lanzamiento comercial con riesgo relevante, consulta a un profesional jurídico cualificado en la jurisdicción aplicable.'] }
      ],
      takeaway: 'Condiciones + plan + derechos de entrada + situación de copyright + reglas del distribuidor + documentación. Revisa cada capa por separado antes de publicar comercialmente.'
    },
    'pt-br': {
      eyebrow: 'ESCOLA DE CRIADORES · CHECKLIST DE DIREITOS',
      title: 'Direitos de música com IA antes de publicar: checklist prático, não aconselhamento jurídico',
      description: 'Checklist pré-lançamento para música gerada com IA: termos da plataforma, direitos sobre entradas, uso comercial, distribuição e incerteza de copyright.',
      intro: '“Eu gerei” não responde a todas as perguntas de direitos. O contrato da plataforma, o material fornecido, a lei local de copyright e as regras do distribuidor são camadas diferentes. Confira todas antes de monetizar ou publicar amplamente.',
      quick: 'Guarde os termos vigentes quando a faixa foi gerada, confirme que seu plano permite o uso comercial pretendido, verifique cada letra/áudio/voz fornecida e leia as regras atuais do distribuidor sobre conteúdo com IA.',
      sections: [
        { title: 'Separe quatro perguntas diferentes', paragraphs: ['Não misture propriedade, copyright, permissão da plataforma e elegibilidade de distribuição em uma única resposta de sim/não. Um serviço pode conceder direitos contratuais de uso mesmo onde a lei nacional oferece proteção limitada ou incerta a material totalmente gerado por máquina.'], bullets: ['Permissão da plataforma: o que o contrato do serviço permite.', 'Direitos sobre entradas: se você tinha permissão para usar letras, áudio, samples ou vozes fornecidas.', 'Status de copyright: qual proteção, se houver, a lei aplicável reconhece no resultado.', 'Política de distribuição: se distribuidores, bibliotecas, plataformas de sync ou clientes aceitam o material segundo suas regras.'] },
        { title: 'Guarde evidências', paragraphs: ['Salve data, plano, recibo, URL dos termos e uma cópia ou captura do texto sobre uso comercial. Termos mudam. Bons registros ajudam a demonstrar quais condições se aplicavam ao seu fluxo de geração e lançamento.'] },
        { title: 'Trate uploads de referência como um risco separado', paragraphs: ['Uma plataforma pode permitir referência apenas quando você é dono ou controla o áudio. Não presuma que “referência” significa “uso permitido”. Se não consegue documentar o direito de enviar uma gravação comercial, trabalhe com traços descritivos.'] },
        { title: 'Faça uma checagem no dia do lançamento', paragraphs: ['Imediatamente antes de distribuir, confira novamente os termos do gerador e a política do distribuidor. Se houver letras de terceiros, vozes clonadas ou reconhecíveis, samples ou gravações enviadas, verifique essas permissões separadamente. Para lançamento comercial com risco relevante, procure orientação jurídica qualificada na jurisdição aplicável.'] }
      ],
      takeaway: 'Termos + plano + direitos sobre entradas + status de copyright + regras do distribuidor + registros. Confira cada camada separadamente antes do lançamento comercial.'
    }
  }
};

export const advancedLessonSlugs = Object.keys(advancedLessons);
