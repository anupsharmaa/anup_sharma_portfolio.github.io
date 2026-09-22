(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var iconMoon = document.getElementById('iconMoon');
  var iconSun = document.getElementById('iconSun');

  function applyTheme(t) {
    if (t === 'light') {
      root.setAttribute('data-theme', 'light');
      if (iconMoon) iconMoon.style.display = 'none';
      if (iconSun) iconSun.style.display = 'block';
    } else {
      root.removeAttribute('data-theme');
      if (iconMoon) iconMoon.style.display = 'block';
      if (iconSun) iconSun.style.display = 'none';
    }
  }

  var saved = null;
  try { saved = localStorage.getItem('anup-portfolio-theme'); } catch (e) {}
  if (saved) {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isLight = root.getAttribute('data-theme') === 'light';
      var next = isLight ? 'dark' : 'light';
      applyTheme(next);
      try { localStorage.setItem('anup-portfolio-theme', next); } catch (e) {}
    });
  }

  var menuBtn = document.getElementById('menuToggle');
  var drawer = document.getElementById('drawer');
  var drawerClose = document.getElementById('drawerClose');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', function () { drawer.classList.add('open'); });
  }
  if (drawerClose && drawer) {
    drawerClose.addEventListener('click', function () { drawer.classList.remove('open'); });
  }
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { drawer.classList.remove('open'); });
    });
  }

  // Scroll-reveal: respects prefers-reduced-motion via CSS fallback,
  // and via JS by skipping the observer entirely.
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // Set current year in footer, if present.
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
