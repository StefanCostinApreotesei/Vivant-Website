/* ════════════════════════════════════════════════════════
   VIVANT — Booking Modal
   ════════════════════════════════════════════════════════
   Hooks every element with [data-booking-trigger] (e.g. all
   "Programează-te" / "Book Now" buttons). Opens a modal that
   embeds the Calendly inline widget if BOOKING_CONFIG.calendlyUrl
   is set; otherwise shows a graceful fallback (call + message).
   ════════════════════════════════════════════════════════ */

window.BOOKING_CONFIG = {
  // ▸ TO ENABLE LIVE BOOKING: paste your Calendly event URL here.
  //   Example: 'https://calendly.com/vivant-osteo/consultatie'
  //   Leave empty → modal shows the fallback (call + contact form link).
  calendlyUrl: '',

  // Fallback contact channels (used when calendlyUrl is empty)
  fallbackPhone: '0746865189',
  fallbackPhoneDisplay: '0746 865 189',
  fallbackContactUrl: 'contact.html'
};

(function () {
  let modalEl = null;
  let calendlyLoaded = false;

  function t(key) {
    return window.VivantI18n ? window.VivantI18n.t(key) : '';
  }

  function buildModal() {
    if (modalEl) return modalEl;

    modalEl = document.createElement('div');
    modalEl.className = 'booking-modal';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.innerHTML = `
      <div class="booking-modal-backdrop"></div>
      <div class="booking-modal-content" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
        <button class="booking-modal-close" type="button" aria-label="Close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <line x1="6" y1="6" x2="18" y2="18"/>
            <line x1="18" y1="6" x2="6" y2="18"/>
          </svg>
        </button>
        <div class="booking-modal-body"></div>
      </div>
    `;
    document.body.appendChild(modalEl);

    modalEl.querySelector('.booking-modal-backdrop').addEventListener('click', close);
    modalEl.querySelector('.booking-modal-close').addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalEl.classList.contains('is-open')) close();
    });

    return modalEl;
  }

  function renderCalendly(body) {
    body.innerHTML = `
      <div class="booking-modal-header">
        <span class="section-label" data-i18n="booking.modalSubtitle"></span>
        <h2 id="booking-modal-title" data-i18n="booking.modalTitle"></h2>
      </div>
      <div class="calendly-inline-widget"
           data-url="${window.BOOKING_CONFIG.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1"
           style="min-width:320px;height:680px;"></div>
    `;
    if (window.VivantI18n) window.VivantI18n.apply(window.VivantI18n.current);

    if (!calendlyLoaded) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      calendlyLoaded = true;
    } else if (window.Calendly && window.Calendly.initInlineWidgets) {
      window.Calendly.initInlineWidgets();
    }
  }

  function renderFallback(body) {
    const phone = window.BOOKING_CONFIG.fallbackPhone;
    const phoneDisplay = window.BOOKING_CONFIG.fallbackPhoneDisplay;
    const contactUrl = window.BOOKING_CONFIG.fallbackContactUrl;

    body.innerHTML = `
      <div class="booking-modal-header">
        <span class="section-label" data-i18n="booking.modalSubtitle"></span>
        <h2 id="booking-modal-title" data-i18n="booking.fallbackTitle"></h2>
        <p class="booking-modal-lead" data-i18n="booking.fallbackBody"></p>
      </div>
      <div class="booking-fallback">
        <a href="tel:${phone}" class="btn btn-primary btn-lg booking-fallback-call">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span><span data-i18n="booking.fallbackCallNow"></span> · ${phoneDisplay}</span>
        </a>
        <a href="${contactUrl}" class="booking-fallback-link" data-i18n="booking.fallbackOrWrite"></a>
      </div>
    `;
    if (window.VivantI18n) window.VivantI18n.apply(window.VivantI18n.current);
  }

  function open() {
    const el = buildModal();
    const body = el.querySelector('.booking-modal-body');
    if (window.BOOKING_CONFIG.calendlyUrl) {
      renderCalendly(body);
    } else {
      renderFallback(body);
    }
    el.classList.add('is-open');
    el.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!modalEl) return;
    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function init() {
    document.addEventListener('click', e => {
      const trigger = e.target.closest('[data-booking-trigger]');
      if (!trigger) return;
      e.preventDefault();
      open();
    });
  }

  window.VivantBooking = { init, open, close };
})();
