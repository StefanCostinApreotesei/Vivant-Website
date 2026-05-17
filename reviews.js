/* ════════════════════════════════════════════════════════
   VIVANT — Reviews component (Google Reviews-ready)
   ════════════════════════════════════════════════════════
   Renders into any element with class .reviews-container.
   Pre-populated with curated mock reviews — swap to live
   Google Places API data by setting REVIEWS_CONFIG.source
   to 'google' and providing apiKey + placeId (you'll need a
   tiny serverless proxy for security — see INTEGRATIONS.md).
   ════════════════════════════════════════════════════════ */

window.REVIEWS_CONFIG = {
  source: 'mock', // 'mock' | 'google' (requires backend proxy)

  // For 'google' mode (see INTEGRATIONS.md):
  apiProxyUrl: '', // e.g. 'https://your-domain.com/api/google-reviews'
  placeId: '',     // your Google Place ID

  // Aggregate display (visible in the header badge)
  averageRating: 4.9,
  totalReviews: 127,
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Vivant+Osteo+Physio+Iasi',

  // Curated reviews (used in 'mock' mode and as fallback)
  reviews: [
    {
      name: 'Andreea M.',
      initials: 'AM',
      rating: 5,
      date: '2026-04-12',
      condition: { ro: 'Dureri lombare cronice', en: 'Chronic lower back pain' },
      text: {
        ro: 'După ani de dureri lombare, am găsit la Vivant nu doar ușurare, ci o nouă înțelegere a propriului corp. Echipa este atentă și profesionistă.',
        en: 'After years of lower back pain, I found at Vivant not only relief but a new understanding of my own body. The team is attentive and professional.'
      }
    },
    {
      name: 'Răzvan S.',
      initials: 'RS',
      rating: 5,
      date: '2026-03-28',
      condition: { ro: 'Recuperare post-operatorie', en: 'Post-op recovery' },
      text: {
        ro: 'Recuperarea după operația la genunchi a decurs mult mai bine decât speram. Plan personalizat, urmărire constantă și rezultate vizibile săptămână de săptămână.',
        en: 'My recovery after knee surgery went far better than I’d hoped. A personalised plan, constant follow-up, and visible results week after week.'
      }
    },
    {
      name: 'Ioana P.',
      initials: 'IP',
      rating: 5,
      date: '2026-03-15',
      condition: { ro: 'Cervicalgii', en: 'Neck pain' },
      text: {
        ro: 'Mi-au explicat fiecare pas, fără grabă. Pentru prima dată m-am simțit cu adevărat ascultată într-o clinică. Recomand cu toată încrederea.',
        en: 'They explained every step without rushing. For the first time, I truly felt listened to in a clinic. I recommend them wholeheartedly.'
      }
    },
    {
      name: 'Mihai D.',
      initials: 'MD',
      rating: 5,
      date: '2026-02-20',
      condition: { ro: 'Hernie de disc', en: 'Herniated disc' },
      text: {
        ro: 'Diagnostic clar, fără tratamente inutile. Am evitat operația datorită planului propus și mă simt mai bine ca acum doi ani.',
        en: 'Clear diagnosis, no unnecessary treatments. I avoided surgery thanks to their plan and I feel better than I did two years ago.'
      }
    },
    {
      name: 'Elena T.',
      initials: 'ET',
      rating: 5,
      date: '2026-02-08',
      condition: { ro: 'Sciatică', en: 'Sciatica' },
      text: {
        ro: 'Profesionalism rar întâlnit. Cabinetul este liniștit, curat, cald — exact cum ar trebui să fie un spațiu de vindecare.',
        en: 'A rare level of professionalism. The clinic is calm, clean, warm — exactly what a healing space should be.'
      }
    },
    {
      name: 'Cristian B.',
      initials: 'CB',
      rating: 5,
      date: '2026-01-30',
      condition: { ro: 'Leziune sportivă', en: 'Sports injury' },
      text: {
        ro: 'Sunt atlet amator și aveam nevoie să revin rapid după o entorsă serioasă. M-au ajutat să mă reîntorc în sport mai puternic decât eram înainte.',
        en: 'I’m an amateur athlete and needed to come back quickly after a serious sprain. They helped me return to sport stronger than before.'
      }
    }
  ]
};

(function () {
  const FMT_DATE = {
    ro: { months: ['ian', 'feb', 'mar', 'apr', 'mai', 'iun', 'iul', 'aug', 'sep', 'oct', 'noi', 'dec'] },
    en: { months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }
  };

  function getLang() {
    return window.VivantI18n ? window.VivantI18n.current : 'ro';
  }

  function t(key) {
    return window.VivantI18n ? window.VivantI18n.t(key) : key;
  }

  function formatDate(iso, lang) {
    try {
      const d = new Date(iso);
      const m = FMT_DATE[lang]?.months || FMT_DATE.ro.months;
      return `${d.getDate()} ${m[d.getMonth()]} ${d.getFullYear()}`;
    } catch { return iso; }
  }

  function renderStars(n) {
    const full = '★'.repeat(n);
    const empty = '☆'.repeat(5 - n);
    return `<span class="rev-stars" aria-label="${n} / 5">${full}${empty}</span>`;
  }

  function renderCard(r, lang) {
    const text = (r.text && r.text[lang]) || (r.text && r.text.ro) || '';
    const condition = (r.condition && r.condition[lang]) || (r.condition && r.condition.ro) || '';
    return `
      <article class="rev-card">
        <header class="rev-card-head">
          <div class="rev-avatar">${r.initials}</div>
          <div class="rev-meta">
            <div class="rev-name">${r.name}</div>
            <div class="rev-date">${formatDate(r.date, lang)}</div>
          </div>
          ${renderStars(r.rating)}
        </header>
        <p class="rev-text">${text}</p>
        <footer class="rev-foot">
          <span class="rev-condition">${condition}</span>
          <span class="rev-source" title="Google">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.3 9.14 5.38 12 5.38z"/>
            </svg>
            Google
          </span>
        </footer>
      </article>
    `;
  }

  function renderHeader(lang) {
    const avg = window.REVIEWS_CONFIG.averageRating.toFixed(1);
    const total = window.REVIEWS_CONFIG.totalReviews;
    const reviewsLabel = t('reviews.reviewsCount');
    return `
      <div class="reviews-badge">
        <div class="reviews-badge-google">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.83z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.3 9.14 5.38 12 5.38z"/>
          </svg>
        </div>
        <div class="reviews-badge-info">
          <div class="reviews-badge-stars">
            <span class="reviews-rating-num">${avg}</span>
            <span class="reviews-rating-stars">${renderStars(Math.round(window.REVIEWS_CONFIG.averageRating))}</span>
          </div>
          <div class="reviews-badge-meta">${total} ${reviewsLabel} · Google</div>
        </div>
      </div>
    `;
  }

  function render() {
    const containers = document.querySelectorAll('.reviews-container');
    if (!containers.length) return;
    const lang = getLang();
    const list = window.REVIEWS_CONFIG.reviews;

    containers.forEach(container => {
      container.innerHTML = `
        ${renderHeader(lang)}
        <div class="reviews-grid">
          ${list.slice(0, 6).map(r => renderCard(r, lang)).join('')}
        </div>
        <div class="reviews-footer">
          <a href="${window.REVIEWS_CONFIG.googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-ghost-dark reviews-cta" data-i18n="reviews.seeAllOnGoogle"></a>
        </div>
      `;
      if (window.VivantI18n) window.VivantI18n.apply(window.VivantI18n.current);
    });
  }

  async function fetchGoogle() {
    // Placeholder — requires a backend proxy for security.
    // See INTEGRATIONS.md for the recommended setup.
    if (!window.REVIEWS_CONFIG.apiProxyUrl) return null;
    try {
      const res = await fetch(`${window.REVIEWS_CONFIG.apiProxyUrl}?placeId=${window.REVIEWS_CONFIG.placeId}`);
      if (!res.ok) throw new Error('proxy error');
      return await res.json();
    } catch (e) {
      console.warn('[Vivant Reviews] Live fetch failed, using mock data.', e);
      return null;
    }
  }

  async function init() {
    if (window.REVIEWS_CONFIG.source === 'google') {
      const live = await fetchGoogle();
      if (live && live.reviews) {
        window.REVIEWS_CONFIG.reviews = live.reviews;
        if (live.averageRating) window.REVIEWS_CONFIG.averageRating = live.averageRating;
        if (live.totalReviews) window.REVIEWS_CONFIG.totalReviews = live.totalReviews;
      }
    }
    render();
    window.addEventListener('vivant:langchange', render);
  }

  window.VivantReviews = { init, render };
})();
