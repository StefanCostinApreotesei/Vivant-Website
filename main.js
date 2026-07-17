/* ════════════════════════════════════════════════════════
   VIVANT OSTEO & PHYSIO — Global JavaScript
   ════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // Always start at the top on (re)load — unless the URL has an anchor like #trust
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (window.VivantI18n) window.VivantI18n.init();
    if (window.VivantBooking) window.VivantBooking.init();
    if (window.VivantReviews) window.VivantReviews.init();

    initLogoVariants();      // must run BEFORE navbar scroll so crossfade targets exist
    initScrollProgress();
    initNavbarScroll();
    initMobileMenu();
    initActiveNavLink();
    initFadeIn();
    initCounters();
    initFAQ();
    initContactForm();
    initTodayHighlight();
    initScrollTop();
    initFormFieldState();
    initCustomSelect();
    initHeroParallax();
  });

  /* ─── 0. Inject dark-bg logo variant for crossfade + swap footer logo.
     Only installed AFTER confirming logo-dark.png loads — graceful fallback
     to single-variant logo if the file isn't present. ─── */
  function initLogoVariants() {
    const probe = new Image();
    probe.addEventListener('load', installVariants, { once: true });
    probe.addEventListener('error', () => {
      console.info('[Vivant] logo-dark.png not found — keeping single logo variant.');
    }, { once: true });
    probe.src = 'logo-dark.png';

    function installVariants() {
      document.querySelectorAll('.navbar-logo').forEach(logoLink => {
        const lightImg = logoLink.querySelector('img');
        if (!lightImg || logoLink.querySelector('.logo-variant-dark')) return;

        lightImg.classList.add('logo-variant-light');

        const darkImg = new Image();
        darkImg.src = 'logo-dark.png';
        darkImg.alt = '';
        darkImg.className = 'logo-variant-dark';
        darkImg.setAttribute('aria-hidden', 'true');
        logoLink.appendChild(darkImg);
      });

      // Footer is permanently dark — swap to dark-bg variant for seamless blend
      document.querySelectorAll('.footer-logo img').forEach(img => {
        img.src = 'logo-dark.png';
      });
    }
  }

  /* ─── 1. Navbar theme + scroll
     States set on .navbar element:
       - .is-default-light     → at top of LIGHT hero (cream nav, dark logo)
       - .navbar-on-dark       → at top of DARK hero (transparent nav, dark-bg logo)
       - .is-scrolled          → scrolled past 80px on ANY page (dark nav, dark-bg logo)
     The logo variants crossfade automatically via CSS based on these classes.
  ─── */
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const hasDarkHero = document.querySelector('.hero-small, .hero-dark') !== null;

    if (hasDarkHero) {
      navbar.classList.add('navbar-on-dark');
    } else {
      navbar.classList.add('is-default-light');
    }

    function onScroll() {
      if (window.scrollY > 80) {
        navbar.classList.add('is-scrolled');
        navbar.classList.remove('is-default-light');
      } else {
        navbar.classList.remove('is-scrolled');
        if (!hasDarkHero) navbar.classList.add('is-default-light');
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ─── 2. Mobile hamburger menu ─── */
  function initMobileMenu() {
    const hamburger = document.querySelector('.navbar-hamburger');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.mobile-overlay');
    if (!hamburger || !drawer || !overlay) return;

    function toggle(open) {
      const isOpen = open !== undefined ? open : !drawer.classList.contains('is-open');
      drawer.classList.toggle('is-open', isOpen);
      overlay.classList.toggle('is-open', isOpen);
      hamburger.classList.toggle('is-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', () => toggle());
    overlay.addEventListener('click', () => toggle(false));
    const closeBtn = document.querySelector('.mobile-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', () => toggle(false));
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  }

  /* ─── 3. Active navigation link based on URL.
     Excludes .btn elements (CTAs) so the "Programează-te" button doesn't
     get the .active link styling — which would recolor its text gold and
     make it invisible on the gold background. ─── */
  function initActiveNavLink() {
    let path = window.location.pathname.split('/').pop() || 'index.html';
    if (path === '') path = 'index.html';

    document.querySelectorAll('.navbar-link:not(.btn), .mobile-drawer a:not(.btn)').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path) link.classList.add('active');
    });
  }

  /* ─── 4. Fade-in on scroll + auto-stagger between siblings (Apple-style) ─── */
  function initFadeIn() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length || !('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    // Auto-stagger: siblings with .fade-in in the same parent get incremental delays
    const groups = new Map();
    elements.forEach(el => {
      const parent = el.parentElement;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });
    groups.forEach(siblings => {
      if (siblings.length < 2) return;
      siblings.forEach((el, i) => {
        if (!el.style.transitionDelay) {
          el.style.transitionDelay = `${Math.min(i * 90, 540)}ms`;
        }
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(el => observer.observe(el));
  }

  /* ─── 5. Counter animation in trust bar ─── */
  function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    if (!counters.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    function animateCounter(el) {
      const target = parseFloat(el.getAttribute('data-counter'));
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1500;
      const start = performance.now();

      function frame(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(frame);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(frame);
    }
  }

  /* ─── 6. FAQ accordion ─── */
  function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');
        item.classList.toggle('is-open', !isOpen);
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = '0px';
        }
      });
    });
  }

  /* ─── 7. Contact form validation + Web3Forms submission ─── */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const success = document.getElementById('form-success');
    const errorBox = document.getElementById('form-error');
    const submitBtn = form.querySelector('[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', async e => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll('.form-field').forEach(f => f.classList.remove('has-error'));
      if (errorBox) errorBox.classList.remove('is-visible');

      const name = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      const email = form.querySelector('[name="email"]');
      const message = form.querySelector('[name="message"]');
      const gdpr = form.querySelector('[name="gdpr"]');

      if (!name.value.trim()) { name.closest('.form-field').classList.add('has-error'); valid = false; }
      if (!/^[\d\s+()-]{10,}$/.test(phone.value)) { phone.closest('.form-field').classList.add('has-error'); valid = false; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { email.closest('.form-field').classList.add('has-error'); valid = false; }
      if (!message.value.trim()) { message.closest('.form-field').classList.add('has-error'); valid = false; }
      if (gdpr && !gdpr.checked) {
        gdpr.parentElement.style.color = 'var(--error)';
        valid = false;
      } else if (gdpr) {
        gdpr.parentElement.style.color = '';
      }

      if (!valid) return;

      const accessKey = (form.querySelector('[name="access_key"]') || {}).value || '';
      const configured = accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY';

      const showSuccess = () => {
        form.style.transition = 'opacity 300ms ease';
        form.style.opacity = '0';
        setTimeout(() => {
          form.style.display = 'none';
          if (success) {
            success.classList.add('is-visible');
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      };

      // Graceful fallback: until a real Web3Forms key is set, behave like a demo.
      if (!configured) {
        console.warn('[Vivant] Web3Forms access_key not set — form not actually sent. ' +
          'Add your key in contact.html to enable email delivery.');
        showSuccess();
        return;
      }

      // Live submission to Web3Forms
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = t('form.sending', 'Se trimite…'); }
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: new FormData(form)
        });
        const data = await res.json();
        if (res.ok && data.success) {
          showSuccess();
        } else {
          throw new Error(data.message || 'submit failed');
        }
      } catch (err) {
        console.error('[Vivant] Form submission failed:', err);
        if (errorBox) {
          errorBox.classList.add('is-visible');
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitLabel; }
      }
    });

    // Small i18n helper local to this module (falls back to provided default)
    function t(key, fallback) {
      const v = window.VivantI18n ? window.VivantI18n.t(key) : undefined;
      return (v === undefined || v === null) ? fallback : v;
    }
  }

  /* ─── 8. Today highlight in schedule table ─── */
  function initTodayHighlight() {
    const table = document.querySelector('.schedule-table');
    if (!table) return;

    const today = new Date().getDay(); // 0=Sunday ... 6=Saturday
    const map = { 1: 'mon', 2: 'tue', 3: 'wed', 4: 'thu', 5: 'fri', 6: 'sat', 0: 'sun' };
    const key = map[today];
    const row = table.querySelector(`[data-day="${key}"]`);
    if (row) row.classList.add('today');
  }

  /* ─── 9. Scroll to top button ─── */
  function initScrollTop() {
    const btn = document.querySelector('.scroll-top');
    if (!btn) return;

    function onScroll() {
      btn.classList.toggle('is-visible', window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ─── 10. Form field "has-value" state for select ─── */
  function initFormFieldState() {
    document.querySelectorAll('.form-field select').forEach(sel => {
      function update() {
        sel.classList.toggle('has-value', !!sel.value);
      }
      sel.addEventListener('change', update);
      update();
    });
  }

  /* ─── 10b. Custom modern dropdown — progressive enhancement over native <select>.
     The native <select> stays in the DOM (visually hidden) as the single source of
     truth: form submission, i18n on <option>s and validation all keep working.
     A styled trigger + listbox panel mirror it and sync both ways. ─── */
  function initCustomSelect() {
    document.querySelectorAll('.form-field select').forEach(select => {
      const field = select.closest('.form-field');
      if (!field || field.classList.contains('has-custom-select')) return;
      field.classList.add('has-custom-select');

      const label = field.querySelector('label');
      if (label && !label.id) label.id = (select.id || 'sel') + '-label';

      const wrap = document.createElement('div');
      wrap.className = 'cs';

      const trigger = document.createElement('button');
      trigger.type = 'button';
      trigger.className = 'cs-trigger';
      trigger.id = (select.id || 'sel') + '-trigger';
      trigger.setAttribute('aria-haspopup', 'listbox');
      trigger.setAttribute('aria-expanded', 'false');
      if (label) trigger.setAttribute('aria-labelledby', label.id + ' ' + trigger.id);

      const valueEl = document.createElement('span');
      valueEl.className = 'cs-value';
      trigger.appendChild(valueEl);

      const panel = document.createElement('div');
      panel.className = 'cs-panel';
      panel.setAttribute('role', 'listbox');

      wrap.appendChild(trigger);
      wrap.appendChild(panel);
      field.appendChild(wrap);

      let options = [];
      let activeIndex = -1;

      function buildOptions() {
        panel.innerHTML = '';
        options = [];
        Array.from(select.options).forEach(opt => {
          if (opt.value === '') return; // skip placeholder
          const o = document.createElement('div');
          o.className = 'cs-option';
          o.setAttribute('role', 'option');
          o.dataset.value = opt.value;
          o.textContent = opt.textContent;
          const on = opt.value === select.value;
          o.setAttribute('aria-selected', on ? 'true' : 'false');
          o.classList.toggle('is-selected', on);
          o.addEventListener('click', () => choose(opt.value));
          panel.appendChild(o);
          options.push({ value: opt.value, el: o });
        });
      }

      function syncValue() {
        const sel = select.options[select.selectedIndex];
        valueEl.textContent = (sel && sel.value) ? sel.textContent : '';
        select.classList.toggle('has-value', !!select.value);
        options.forEach(o => {
          const on = o.value === select.value;
          o.el.classList.toggle('is-selected', on);
          o.el.setAttribute('aria-selected', on ? 'true' : 'false');
        });
      }

      function highlight(i) {
        if (!options.length) return;
        activeIndex = (i + options.length) % options.length;
        options.forEach((o, idx) => o.el.classList.toggle('is-active', idx === activeIndex));
        options[activeIndex].el.scrollIntoView({ block: 'nearest' });
      }

      function isOpen() { return wrap.classList.contains('is-open'); }

      function open() {
        buildOptions();
        wrap.classList.add('is-open');
        field.classList.add('cs-focused');
        trigger.setAttribute('aria-expanded', 'true');
        const cur = options.findIndex(o => o.value === select.value);
        highlight(cur >= 0 ? cur : 0);
        document.addEventListener('click', onOutside, true);
      }

      function close() {
        wrap.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onOutside, true);
      }

      function onOutside(e) { if (!wrap.contains(e.target)) { close(); field.classList.remove('cs-focused'); } }

      function choose(value) {
        select.value = value;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        syncValue();
        close();
        trigger.focus();
      }

      trigger.addEventListener('click', () => { isOpen() ? close() : open(); });

      trigger.addEventListener('keydown', e => {
        const openNow = isOpen();
        switch (e.key) {
          case 'ArrowDown': e.preventDefault(); openNow ? highlight(activeIndex + 1) : open(); break;
          case 'ArrowUp':   e.preventDefault(); openNow ? highlight(activeIndex - 1) : open(); break;
          case 'Home':      if (openNow) { e.preventDefault(); highlight(0); } break;
          case 'End':       if (openNow) { e.preventDefault(); highlight(options.length - 1); } break;
          case 'Enter':
          case ' ':
            e.preventDefault();
            if (openNow && activeIndex >= 0) choose(options[activeIndex].value); else open();
            break;
          case 'Escape':    if (openNow) { e.preventDefault(); close(); } break;
          case 'Tab':       close(); field.classList.remove('cs-focused'); break;
        }
      });

      trigger.addEventListener('blur', () => {
        setTimeout(() => {
          if (!wrap.contains(document.activeElement)) { close(); field.classList.remove('cs-focused'); }
        }, 0);
      });

      // Re-sync when language toggles (translations.js rewrites <option> text)
      window.addEventListener('vivant:langchange', () => { buildOptions(); syncValue(); });

      buildOptions();
      syncValue();
    });
  }

  /* ─── 11. Scroll progress bar (Apple-style top indicator) ─── */
  function initScrollProgress() {
    const wrap = document.createElement('div');
    wrap.className = 'scroll-progress';
    const bar = document.createElement('div');
    bar.className = 'scroll-progress-bar';
    wrap.appendChild(bar);
    document.body.appendChild(wrap);

    let ticking = false;
    function update() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      bar.style.transform = `scaleX(${pct})`;
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ─── 12. Hero parallax (subtle, Apple-style depth) ─── */
  function initHeroParallax() {
    const hero = document.querySelector('.hero');
    const inner = document.querySelector('.hero .hero-inner');
    if (!hero || !inner) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    function update() {
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (y < vh) {
        const shift = y * 0.18;
        const fade = Math.max(0, 1 - (y / vh) * 1.2);
        inner.style.transform = `translateY(${shift}px)`;
        inner.style.opacity = String(fade);
      }
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }
})();
