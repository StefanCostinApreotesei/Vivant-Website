/* ════════════════════════════════════════════════════════
   VIVANT — i18n: Romanian (default) + English
   ════════════════════════════════════════════════════════
   Translates any element with data-i18n="key.path",
   data-i18n-html="key.path" (innerHTML, allows spans),
   data-i18n-attr="placeholder:key.path" (attribute setters),
   and <title data-i18n-title="key.path">.
   Persists choice in localStorage. Auto-detects browser
   language on first visit.
   ════════════════════════════════════════════════════════ */

window.VIVANT_TRANSLATIONS = {
  ro: {
    nav: {
      home: 'Acasă',
      about: 'Despre noi',
      services: 'Servicii',
      conditions: 'Afecțiuni',
      pricing: 'Prețuri',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Programează-te'
    },
    hero: {
      eyebrow: 'Clinică de Osteopatie & Fizioterapie · Iași',
      titleHtml: 'Redescoperă mișcarea.<span class="italic">Redescoperă viața.</span>',
      subtitle: 'La Vivant, fiecare tratament începe cu ascultare și se construiește în jurul nevoilor tale unice.',
      ctaPrimary: 'Programează-te acum',
      ctaSecondary: 'Descoperă serviciile',
      metaPhone: 'Telefon',
      metaSchedule: 'Program',
      scheduleValue: 'Lun – Vin · 09 – 17'
    },
    trust: {
      patientsLabel: 'Pacienți tratați',
      yearsLabel: 'Ani experiență',
      specialistsLabel: 'Specialiști'
    },
    about: {
      eyebrow: 'Despre Vivant',
      title: 'Mai mult decât un cabinet medical.',
      p1: 'Vivant este un spațiu dedicat oamenilor care vor să își recâștige libertatea de mișcare. Combinăm osteopatia, fizioterapia și kinetoterapia într-o abordare integrată, care tratează cauza durerii — nu doar simptomul.',
      p2: 'Filozofia noastră se bazează pe o întâlnire reală cu fiecare pacient: ascultăm povestea ta, evaluăm posturalitatea, înțelegem stilul de viață, apoi construim un plan care îți redă mobilitatea și încrederea în propriul corp.',
      p3: 'Echipa Vivant unește experiența clinică cu cele mai recente cercetări internaționale, oferind tratamente care funcționează și durează în timp.',
      bullet1: 'Abordare personalizată pentru fiecare pacient',
      bullet2: 'Tehnici validate și bazate pe evidență clinică',
      bullet3: 'Programare flexibilă, fără liste de așteptare lungi',
      ctaTeam: 'Cunoaște echipa noastră →'
    },
    services: {
      eyebrow: 'Ce facem',
      title: 'Serviciile noastre',
      subtitle: 'Tehnici complementare care lucrează împreună pentru a-ți reda mobilitatea, echilibrul și starea de bine.',
      osteopathyTitle: 'Osteopatie',
      osteopathyDesc: 'Tehnici manuale subtile care restabilesc echilibrul corpului prin abordarea sistemului musculo-scheletic și visceral.',
      physioTitle: 'Fizioterapie',
      physioDesc: 'Programe terapeutice individualizate care folosesc mișcarea și exercițiul pentru recuperarea funcțională completă.',
      kinetoTitle: 'Kinetoterapie',
      kinetoDesc: 'Exerciții terapeutice supravegheate, concepute pentru a reeduca mușchii și a restabili amplitudinea de mișcare.',
      manualTitle: 'Terapie Manuală',
      manualDesc: 'Mobilizări articulare și tehnici de țesut moale pentru reducerea durerii și creșterea mobilității.',
      massageTitle: 'Masaj Terapeutic',
      massageDesc: 'Tehnici de relaxare profundă și decontracturare care eliberează tensiunea musculară acumulată.',
      postopTitle: 'Recuperare Post-Op',
      postopDesc: 'Programe specializate pentru reabilitarea după intervenții chirurgicale ortopedice sau traumatisme severe.',
      details: 'Detalii →',
      seeAll: 'Vezi toate serviciile →'
    },
    conditions: {
      eyebrow: 'Ce tratăm',
      title: 'Afecțiuni tratate',
      subtitle: 'De la durerile cronice la recuperarea post-operatorie — fiecare caz primește atenție individuală.',
      tagLumbar: 'Dureri lombare',
      tagCervical: 'Cervicalgii',
      tagHernia: 'Hernie de disc',
      tagShoulder: 'Dureri de umăr',
      tagSciatica: 'Sciatică',
      tagSports: 'Leziuni sportive',
      tagPostop: 'Recuperare post-op',
      tagScoliosis: 'Scolioză',
      seeAll: 'Toate afecțiunile tratate →'
    },
    reviews: {
      eyebrow: 'Voci de la pacienți',
      title: 'Ce spun cei care ne-au trecut pragul',
      averagePrefix: 'Media pe',
      verified: 'Verificat',
      seeAllOnGoogle: 'Vezi toate recenziile pe Google →',
      reviewsCount: 'recenzii'
    },
    cta: {
      title: 'Primul pas spre recuperare începe cu un telefon.',
      subtitle: 'Programează-te astăzi. Luni–Vineri, 09:00–17:00',
      button: 'Programează-te'
    },
    contactPreview: {
      eyebrow: 'Vino la noi',
      title: 'Ne găsești în inima Iașiului',
      addressLine: 'Str. Pantelimon Halipa 5A<br>Iași 700612',
      scheduleLine: 'Luni–Vineri<br>09:00–17:00',
      button: 'Contactează-ne →'
    },
    footer: {
      tagline: 'Redescoperă mișcarea. Redescoperă viața.',
      colPages: 'Pagini',
      colContact: 'Contact',
      schedule: 'Luni–Vineri: 09:00–17:00<br>Sâmbătă–Duminică: Închis',
      copyright: '© 2026 Vivant Osteo & Physio · Toate drepturile rezervate.'
    },
    booking: {
      modalTitle: 'Programează o consultație',
      modalSubtitle: 'Alege un moment care ți se potrivește',
      fallbackTitle: 'Hai să stabilim o programare',
      fallbackBody: 'Sună-ne și găsim împreună cel mai bun moment pentru tine.',
      fallbackCallNow: 'Sună acum',
      fallbackOrWrite: 'sau scrie-ne un mesaj',
      close: 'Închide'
    },
    lang: {
      switchTo: 'Switch to English'
    },
    page: {
      indexTitle: 'Vivant Osteo & Physio — Clinică de Osteopatie și Fizioterapie, Iași'
    }
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      conditions: 'Conditions',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      bookNow: 'Book Now'
    },
    hero: {
      eyebrow: 'Osteopathy & Physiotherapy Clinic · Iași',
      titleHtml: 'Rediscover movement.<span class="italic">Rediscover life.</span>',
      subtitle: 'At Vivant, every treatment begins with listening and is built around your unique needs.',
      ctaPrimary: 'Book your visit now',
      ctaSecondary: 'Explore our services',
      metaPhone: 'Phone',
      metaSchedule: 'Hours',
      scheduleValue: 'Mon – Fri · 09 – 17'
    },
    trust: {
      patientsLabel: 'Patients treated',
      yearsLabel: 'Years of experience',
      specialistsLabel: 'Specialists'
    },
    about: {
      eyebrow: 'About Vivant',
      title: 'More than a medical practice.',
      p1: 'Vivant is a space dedicated to people who want to reclaim their freedom of movement. We combine osteopathy, physiotherapy, and kinesiotherapy into an integrated approach that treats the cause of pain — not just the symptom.',
      p2: 'Our philosophy is built on a real encounter with every patient: we listen to your story, assess your posture, understand your lifestyle, and then craft a plan that restores your mobility and confidence in your own body.',
      p3: 'The Vivant team blends clinical experience with the latest international research, delivering treatments that work and last.',
      bullet1: 'A personalised approach for every patient',
      bullet2: 'Validated, evidence-based techniques',
      bullet3: 'Flexible scheduling, no long waiting lists',
      ctaTeam: 'Get to know our team →'
    },
    services: {
      eyebrow: 'What we do',
      title: 'Our services',
      subtitle: 'Complementary techniques that work together to restore your mobility, balance, and wellbeing.',
      osteopathyTitle: 'Osteopathy',
      osteopathyDesc: 'Subtle manual techniques that restore the body’s balance by addressing the musculoskeletal and visceral systems.',
      physioTitle: 'Physiotherapy',
      physioDesc: 'Individualised therapeutic programs using movement and exercise for complete functional recovery.',
      kinetoTitle: 'Kinesiotherapy',
      kinetoDesc: 'Supervised therapeutic exercises designed to re-educate muscles and restore range of motion.',
      manualTitle: 'Manual Therapy',
      manualDesc: 'Joint mobilisation and soft-tissue techniques to reduce pain and improve mobility.',
      massageTitle: 'Therapeutic Massage',
      massageDesc: 'Deep relaxation and decontracting techniques that release accumulated muscular tension.',
      postopTitle: 'Post-Op Recovery',
      postopDesc: 'Specialised programs for rehabilitation after orthopaedic surgery or severe trauma.',
      details: 'Details →',
      seeAll: 'Explore all our services →'
    },
    conditions: {
      eyebrow: 'What we treat',
      title: 'Conditions we treat',
      subtitle: 'From chronic pain to post-operative recovery — every case receives individual attention.',
      tagLumbar: 'Lower back pain',
      tagCervical: 'Neck pain',
      tagHernia: 'Herniated disc',
      tagShoulder: 'Shoulder pain',
      tagSciatica: 'Sciatica',
      tagSports: 'Sports injuries',
      tagPostop: 'Post-op recovery',
      tagScoliosis: 'Scoliosis',
      seeAll: 'See all conditions treated →'
    },
    reviews: {
      eyebrow: 'Voices from our patients',
      title: 'What our patients say',
      averagePrefix: 'Average on',
      verified: 'Verified',
      seeAllOnGoogle: 'View all our reviews on Google →',
      reviewsCount: 'reviews'
    },
    cta: {
      title: 'The first step toward recovery starts with a phone call.',
      subtitle: 'Book today. Monday–Friday, 09:00–17:00',
      button: 'Book Now'
    },
    contactPreview: {
      eyebrow: 'Come visit us',
      title: 'Find us in the heart of Iași',
      addressLine: '5A Pantelimon Halipa St.<br>Iași 700612',
      scheduleLine: 'Monday–Friday<br>09:00–17:00',
      button: 'Get in touch with us →'
    },
    footer: {
      tagline: 'Rediscover movement. Rediscover life.',
      colPages: 'Pages',
      colContact: 'Contact',
      schedule: 'Monday–Friday: 09:00–17:00<br>Saturday–Sunday: Closed',
      copyright: '© 2026 Vivant Osteo & Physio · All rights reserved.'
    },
    booking: {
      modalTitle: 'Book a consultation',
      modalSubtitle: 'Pick a time that works for you',
      fallbackTitle: 'Let’s schedule your visit',
      fallbackBody: 'Call us and we’ll find the best time together.',
      fallbackCallNow: 'Call now',
      fallbackOrWrite: 'or send us a message',
      close: 'Close'
    },
    lang: {
      switchTo: 'Schimbă în română'
    },
    page: {
      indexTitle: 'Vivant Osteo & Physio — Osteopathy & Physiotherapy Clinic, Iași'
    }
  }
};

/* ─── i18n engine ─── */
(function () {
  const STORAGE_KEY = 'vivant-lang';
  const SUPPORTED = ['ro', 'en'];
  const DEFAULT = 'ro';

  function detectInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    const browser = (navigator.language || 'ro').toLowerCase();
    if (browser.startsWith('en')) return 'en';
    return DEFAULT;
  }

  function resolve(key, lang) {
    const dict = window.VIVANT_TRANSLATIONS[lang] || window.VIVANT_TRANSLATIONS[DEFAULT];
    return key.split('.').reduce((obj, k) => (obj == null ? undefined : obj[k]), dict);
  }

  window.VivantI18n = {
    current: DEFAULT,
    supported: SUPPORTED,

    t(key, lang) {
      return resolve(key, lang || this.current);
    },

    apply(lang) {
      if (!SUPPORTED.includes(lang)) lang = DEFAULT;
      this.current = lang;
      document.documentElement.lang = lang;
      localStorage.setItem(STORAGE_KEY, lang);

      // textContent
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = resolve(el.dataset.i18n, lang);
        if (val !== undefined) el.textContent = val;
      });

      // innerHTML (for elements with inline children)
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = resolve(el.dataset.i18nHtml, lang);
        if (val !== undefined) el.innerHTML = val;
      });

      // attributes — format: "attr:key.path,attr2:key.path2"
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        el.dataset.i18nAttr.split(',').forEach(pair => {
          const [attr, key] = pair.trim().split(':');
          const val = resolve(key, lang);
          if (val !== undefined) el.setAttribute(attr, val);
        });
      });

      // <title>
      const titleEl = document.querySelector('title[data-i18n-title]');
      if (titleEl) {
        const val = resolve(titleEl.dataset.i18nTitle, lang);
        if (val !== undefined) document.title = val;
      }

      // Update toggle label
      const toggleOther = document.querySelector('[data-lang-other]');
      const toggleCurrent = document.querySelector('[data-lang-current]');
      if (toggleCurrent) toggleCurrent.textContent = lang.toUpperCase();
      if (toggleOther) {
        toggleOther.textContent = (lang === 'ro' ? 'EN' : 'RO');
      }
      const toggleBtn = document.querySelector('.lang-toggle');
      if (toggleBtn) {
        const switchLabel = resolve('lang.switchTo', lang === 'ro' ? 'en' : 'ro');
        if (switchLabel) toggleBtn.setAttribute('aria-label', switchLabel);
      }

      // Notify listeners (e.g. reviews carousel to re-render)
      window.dispatchEvent(new CustomEvent('vivant:langchange', { detail: { lang } }));
    },

    toggle() {
      this.apply(this.current === 'ro' ? 'en' : 'ro');
    },

    init() {
      this.apply(detectInitialLang());
      // Wire toggle button
      document.addEventListener('click', e => {
        const btn = e.target.closest('.lang-toggle');
        if (btn) {
          e.preventDefault();
          this.toggle();
        }
      });
    }
  };
})();
