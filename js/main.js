/* =========================================================
   CEO Flow Systems. Interactions
   Header behavior · Scroll reveals · FAQ · Stat counters · Mobile menu
   ========================================================= */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ----- Header scroll state ----- */
  const header = document.querySelector('.site-header');
  if (header) {
    let lastY = window.scrollY;
    const updateHeader = () => {
      const y = window.scrollY;
      header.classList.toggle('scrolled', y > 12);
      lastY = y;
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ----- Mobile menu toggle ----- */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        nav.classList.remove('is-open');
        menuToggle.classList.remove('is-open');
        document.body.style.overflow = '';
      })
    );
  }

  /* ----- Reveal-on-scroll using IntersectionObserver ----- */
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
  }

  /* ----- Stat count-up animation ----- */
  const counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    const animate = (el) => {
      const target = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const duration = prefersReducedMotion ? 0 : 1400;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3);

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = target * ease(progress);
        el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((c) => counterObserver.observe(c));
    } else {
      counters.forEach(animate);
    }
  }

  /* ----- FAQ accordion ----- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      faqItems.forEach((i) => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
    q.setAttribute('aria-expanded', 'false');
  });

  /* ----- Year in footer ----- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ----- Mark active nav link ----- */
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href === path || (href !== '/' && path.startsWith(href.replace('.html', '')))) {
      a.classList.add('is-active');
    }
    if (path === '/' || path.endsWith('index.html')) {
      if (href === 'index.html' || href === '/') a.classList.add('is-active');
    }
  });

  /* ----- GSAP scroll-driven parallax on hero (if GSAP present) ----- */
  if (window.gsap && window.ScrollTrigger && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // Hero subtle parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      gsap.to(heroBg, {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
        },
      });
    }

    // Hero photo subtle drift on scroll
    const heroPhoto = document.querySelector('.hero-photo');
    if (heroPhoto) {
      gsap.to(heroPhoto, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }
  }
})();
