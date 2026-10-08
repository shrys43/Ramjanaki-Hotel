(function() {
  let currentLang = localStorage.getItem('ramjanaki-lang') || 'en';

  document.addEventListener('DOMContentLoaded', function() {
    applyLanguage(currentLang);
    updateButtonLabel();
  });

  window.toggleLanguage = function() {
    currentLang = currentLang === 'en' ? 'np' : 'en';
    localStorage.setItem('ramjanaki-lang', currentLang);
    applyLanguage(currentLang);
    updateButtonLabel();
  };

  function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-en][data-np]');
    elements.forEach(function(el) {
      const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-np');
      if (text) el.textContent = text;
    });

    document.documentElement.lang = lang === 'en' ? 'en' : 'ne';

    const title = document.title;
    if (lang === 'np' && !title.includes('रामजानकी')) {
      document.title = title.replace('RamJanaki Hotel', 'रामजानकी होटल');
    } else if (lang === 'en' && title.includes('रामजानकी')) {
      document.title = title.replace('रामजानकी होटल', 'RamJanaki Hotel');
    }
  }

  function updateButtonLabel() {
    const label = document.getElementById('lang-label');
    if (label) label.textContent = currentLang === 'en' ? 'नेपाली' : 'English';
  }
})();
