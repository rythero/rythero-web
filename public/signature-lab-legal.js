(() => {
  const root = document.querySelector('[data-signature-lab]');
  if (!root || root.dataset.legalUploadReady === '1') return;
  root.dataset.legalUploadReady = '1';

  const lang = root.getAttribute('data-lang') || 'en';
  const copy = {
    en: {
      title: 'Rights & privacy before AI analysis',
      body: 'Use only audio you own, are licensed to use, or are otherwise legally entitled to analyze. Do not submit protected material, third-party personal data, confidential recordings or identifiable voices unless you have the rights and a lawful basis to do so. For AI analysis, your browser creates a short reduced excerpt. The full original file is not sent to the AI provider or stored by Rythero as an uploaded file. The derived excerpt is sent through Rythero to Google Gemini to provide the analysis. Google may process or retain limited request data under its API terms and security/abuse-monitoring rules.',
      confirm: 'I confirm that I have the rights or authorization needed to analyze this audio and, where applicable, a lawful basis to submit any third-party personal data it contains. I have read the',
      privacy: 'Privacy Policy',
      privacyHref: '/privacy'
    },
    es: {
      title: 'Derechos y privacidad antes del análisis IA',
      body: 'Usa únicamente audio propio, con licencia o que tengas derecho legal a analizar. No envíes material protegido, datos personales de terceros, grabaciones confidenciales ni voces identificables si no dispones de los derechos y de una base jurídica válida para hacerlo. Para el análisis IA, tu navegador crea un fragmento breve y reducido. El archivo original completo no se envía al proveedor de IA ni se almacena en Rythero como archivo subido. El fragmento derivado se envía a través de Rythero a Google Gemini para realizar el análisis. Google puede tratar o conservar de forma limitada determinados datos de la solicitud conforme a sus condiciones de API y controles de seguridad y prevención de abusos.',
      confirm: 'Confirmo que dispongo de los derechos o la autorización necesarios para analizar este audio y, cuando corresponda, de una base jurídica válida para enviar los datos personales de terceros que pueda contener. He leído la',
      privacy: 'Política de privacidad',
      privacyHref: '/es/privacy'
    },
    'pt-br': {
      title: 'Direitos e privacidade antes da análise por IA',
      body: 'Use apenas áudio próprio, licenciado ou que você tenha direito legal de analisar. Não envie material protegido, dados pessoais de terceiros, gravações confidenciais ou vozes identificáveis sem possuir os direitos e uma base jurídica válida para isso. Para a análise por IA, o navegador cria um pequeno trecho reduzido. O arquivo original completo não é enviado ao provedor de IA nem armazenado pelo Rythero como arquivo enviado. O trecho derivado é enviado pelo Rythero ao Google Gemini para realizar a análise. O Google pode processar ou reter de forma limitada determinados dados da solicitação conforme os termos da API e os controles de segurança e prevenção de abuso.',
      confirm: 'Confirmo que tenho os direitos ou a autorização necessários para analisar este áudio e, quando aplicável, uma base jurídica válida para enviar quaisquer dados pessoais de terceiros nele contidos. Li a',
      privacy: 'Política de Privacidade',
      privacyHref: '/pt-br/privacy'
    }
  }[lang] || null;

  if (!copy) return;

  const forms = [
    document.getElementById('sig-single-form'),
    document.getElementById('sig-build-form'),
    document.getElementById('sig-compare-form')
  ].filter(Boolean);

  forms.forEach((form, index) => {
    if (form.querySelector('[data-sig-rights-confirm]')) return;
    const fileInput = form.querySelector('input[type="file"]');
    const fileLabel = fileInput?.closest('label');
    if (!fileInput || !fileLabel) return;

    const noticeId = `sig-upload-legal-${index + 1}`;
    const notice = document.createElement('div');
    notice.className = 'sig-upload-legal wide';
    notice.id = noticeId;

    const heading = document.createElement('strong');
    heading.textContent = copy.title;
    const paragraph = document.createElement('p');
    paragraph.textContent = copy.body;
    notice.append(heading, paragraph);

    fileLabel.insertAdjacentElement('afterend', notice);
    fileInput.setAttribute('aria-describedby', noticeId);

    const confirmLabel = document.createElement('label');
    confirmLabel.className = 'sig-rights-confirm wide';
    confirmLabel.setAttribute('data-sig-rights-confirm', '');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.required = true;
    checkbox.name = `rights-confirmation-${index + 1}`;
    checkbox.value = 'confirmed';
    checkbox.autocomplete = 'off';

    const text = document.createElement('span');
    text.append(document.createTextNode(`${copy.confirm} `));
    const link = document.createElement('a');
    link.href = copy.privacyHref;
    link.textContent = copy.privacy;
    link.target = '_blank';
    link.rel = 'noopener';
    text.append(link, document.createTextNode('.'));

    confirmLabel.append(checkbox, text);
    notice.insertAdjacentElement('afterend', confirmLabel);
  });
})();
