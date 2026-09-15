(() => {
  const lang = document.documentElement.lang === 'es' ? 'es' : document.documentElement.lang === 'pt-BR' ? 'pt-br' : 'en';
  const maxBySelector = { genre: 4, mood: 3, vocal: 4, instruments: 5, production: 4, exclude: 5 };
  const labels = {
    en: {
      genre: 'Add another style', mood: 'Add another mood', vocal: 'Add another vocal detail', instruments: 'Add another element', production: 'Add another trait', exclude: 'Add another exclusion', selected: 'selected'
    },
    es: {
      genre: 'Añade otro estilo', mood: 'Añade otro estado', vocal: 'Añade otro rasgo vocal', instruments: 'Añade otro elemento', production: 'Añade otro rasgo', exclude: 'Añade otra exclusión', selected: 'elegidos'
    },
    'pt-br': {
      genre: 'Adicione outro estilo', mood: 'Adicione outro clima', vocal: 'Adicione outro detalhe vocal', instruments: 'Adicione outro elemento', production: 'Adicione outro traço', exclude: 'Adicione outra exclusão', selected: 'escolhidos'
    }
  }[lang];

  const isTouch = () => window.matchMedia?.('(pointer: coarse)').matches || window.innerWidth <= 850;

  document.querySelectorAll('[data-selector]').forEach((root) => {
    const key = root.dataset.selector;
    const max = maxBySelector[key];
    if (!max) return;

    const search = root.querySelector('[data-search]');
    const chips = root.querySelector('[data-chips]');
    const results = root.querySelector('[data-results]');
    if (!(search instanceof HTMLInputElement) || !chips || !results) return;

    const initialPlaceholder = search.placeholder;

    const updatePlaceholder = () => {
      const count = chips.querySelectorAll('.smart-chip').length;
      if (count === 0) {
        search.placeholder = initialPlaceholder;
        return;
      }
      if (count >= max) {
        search.placeholder = `${count}/${max} ${labels.selected}`;
        return;
      }
      search.placeholder = `${labels[key]} · ${count}/${max}`;
    };

    const observer = new MutationObserver(updatePlaceholder);
    observer.observe(chips, { childList: true });
    updatePlaceholder();

    results.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('.smart-option')) return;
      if (!isTouch()) return;
      setTimeout(() => search.blur(), 0);
    });

    chips.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest('.smart-chip')) return;
      if (!isTouch()) return;
      setTimeout(() => search.blur(), 0);
    });
  });
})();
