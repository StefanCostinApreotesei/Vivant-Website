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
    form: {
      sending: "Se trimite…",
    },
    notFound: {
      eyebrow: "Eroare 404",
      message: "Pagina pe care o cauți nu există sau a fost mutată. Hai să te ducem înapoi pe drumul cel bun.",
      home: "Înapoi acasă",
      contact: "Contactează-ne",
    },
    aboutPage: {
      heroTitle: "Despre noi",
      storyEyebrow: "Povestea noastră",
      storyTitle: "Vivant — un loc unde corpul își regăsește vocea.",
      storyP1: "Vivant Osteo & Physio s-a născut din convingerea că recuperarea nu se rezumă la a trata o durere, ci la a redescoperi o întreagă relație cu propriul corp. Am fondat clinica pentru a oferi pacienților din Iași un spațiu unde să fie ascultați cu adevărat și tratați cu rigoare clinică.",
      storyP2: "Abordarea noastră este holistică și ferm ancorată în evidență științifică. Combinăm osteopatia cu fizioterapia, kinetoterapia și terapia manuală pentru a construi planuri de tratament adaptate fiecărui pacient, nu protocoale generice.",
      storyP3: "Suntem alături de pacient pe tot parcursul drumului — de la prima evaluare, până la momentul în care durerea devine o amintire și mișcarea, o bucurie regăsită.",
      storyP4: "Numele „Vivant\" vine din latinescul <em>vivere</em> — a fi viu, a trăi pe deplin. Este promisiunea pe care o facem fiecărui om care intră pe ușa clinicii noastre.",
      valuesEyebrow: "Principiile noastre",
      valuesTitle: "Valorile care ne ghidează",
      v1Title: "Empatie",
      v1Desc: "Ascultăm înainte de a trata. Fiecare poveste contează și fiecare durere are propria istorie.",
      v2Title: "Excelență",
      v2Desc: "Aplicăm tehnici bazate pe cele mai recente cercetări internaționale și pe formare continuă.",
      v3Title: "Holism",
      v3Desc: "Tratăm omul, nu simptomul. Privim corpul ca un întreg interconectat, nu ca o sumă de părți.",
      v4Title: "Continuitate",
      v4Desc: "Însoțim pacientul pe tot parcursul recuperării, de la prima evaluare până la rezultatul final.",
      teamEyebrow: "Specialiștii Vivant",
      teamTitle: "Cunoaște echipa noastră",
      teamSubtitle: "Oameni dedicați, cu formare riguroasă și pasiune pentru ceea ce fac.",
      role1: "Coordonator Vivant Osteo & Physio",
      role2: "Fizioterapeut",
      role3: "Farmacolog",
      bio1: "Fizioterapeut cu 10 ani de experiență în tratamentul afecțiunilor locomotorii, neurologice și a simptomatologiei psihosomatice. Specializare în osteopatie viscerală și neurologică, P-DTR și acupunctură.",
      bio2: "Fizioterapeut cu specializare în gimnastică medicală avansată. Construiește programe de exerciții individualizate, adaptate nevoilor fiecărui pacient.",
      bio3: "Farmacolog cu specializare în chimia produsului cosmetic și formulare cosmetică.",
      tag_visc: "Osteopatie viscerală",
      tag_acu: "Acupunctură",
      tag_gym: "Gimnastică medicală",
      tag_cosmchem: "Chimie cosmetică",
      tag_cosmform: "Formulare cosmetică",
    },
    servicesPage: {
      heroTitle: "Serviciile noastre",
      introEyebrow: "Abordare integrată",
      introP1: "Combinăm mai multe discipline terapeutice pentru a aborda durerea, mobilitatea și recuperarea din toate unghiurile. Fiecare serviciu poate fi folosit individual sau ca parte dintr-un plan complex de recuperare.",
      introP2: "Toate ședințele includ evaluare, tratament și recomandări personalizate pentru acasă — pentru rezultate care durează.",
      recommendedFor: "Recomandat pentru:",
      duration: "Durata",
      priceFrom: "Preț de la",
      bookSession: "Programează o ședință →",
      s1Title: "Osteopatie",
      s1p1: "Osteopatia este o terapie manuală care folosește tehnici subtile pentru a restabili mobilitatea articulară, viscerală și cranio-sacrală. Privește corpul ca un întreg interconectat, identifică tiparele de tensiune și le elimină pentru a permite vindecarea naturală.",
      s1p2: "La Vivant, fiecare ședință începe cu o evaluare detaliată a posturii și a istoricului tău medical.",
      s1li1: "Dureri lombare cronice",
      s1li2: "Cervicalgii",
      s1li3: "Cefalee tensională",
      s1li4: "Probleme digestive funcționale",
      s1li5: "Sugari (colici, plagiocefalie)",
      s2Title: "Fizioterapie",
      s2p1: "Fizioterapia folosește mișcarea, exercițiul terapeutic și agenți fizici pentru a restabili funcția musculo-scheletică. Este abordarea ideală pentru recuperarea după traumatisme, afecțiuni cronice sau intervenții chirurgicale.",
      s2p2: "Programele noastre sunt construite pe baza evaluării clinice și ajustate continuu în funcție de progres.",
      s2li1: "Leziuni sportive",
      s2li2: "Recuperare post-fractură",
      s2li3: "Hernie de disc",
      s2li4: "Tendinite",
      s2li5: "Reeducare neuromotorie",
      s3Title: "Kinetoterapie",
      s3p1: "Kinetoterapia se concentrează pe exercițiul terapeutic supravegheat, conceput pentru a reeduca musculatura, a restabili amplitudinea de mișcare și a îmbunătăți coordonarea. Este componenta activă a procesului de recuperare.",
      s3p2: "Fiecare exercițiu este ales pentru tine și ajustat progresiv pentru a îți oferi rezultate sigure și durabile.",
      s3li1: "Scolioză & cifoză",
      s3li2: "Recuperare post-operatorie",
      s3li3: "Afecțiuni neurologice",
      s3li4: "Probleme posturale",
      s3li5: "Reabilitare cardio-respiratorie",
      s4Title: "Terapie Manuală",
      s4p1: "Terapia manuală combină mobilizările articulare, tehnici de țesut moale și manipulări specifice pentru a reduce durerea și a crește mobilitatea zonelor afectate. Este o intervenție precisă și eficientă.",
      s4p2: "Folosim tehnici validate clinic, alese în funcție de diagnosticul tău și reacția corpului în timpul ședinței.",
      s4li1: "Blocaje articulare",
      s4li2: "Dureri de umăr",
      s4li3: "Dureri de șold",
      s4li4: "Limitări de mobilitate",
      s4li5: "Contracturi musculare",
      s5Title: "Masaj Terapeutic",
      s5p1: "Masajul terapeutic eliberează tensiunea acumulată în mușchi și țesut conjunctiv, îmbunătățește circulația și induce o stare profundă de relaxare. Este un complement excelent pentru osteopatie și fizioterapie.",
      s5p2: "Lucrăm cu intenție clinică, nu doar pentru relaxare — fiecare manevră are un scop terapeutic clar.",
      s5li1: "Stres și oboseală musculară",
      s5li2: "Contracturi cervicale",
      s5li3: "Dureri lombare",
      s5li4: "Recuperare după efort",
      s5li5: "Insomnie tensională",
      s6Title: "Recuperare Post-Operatorie",
      s6p1: "Programe specializate pentru reabilitarea după intervenții chirurgicale ortopedice, neurologice sau traumatisme severe. Lucrăm în etape, cu progresie controlată, pentru o recuperare sigură și completă.",
      s6p2: "Coordonăm planul de tratament cu medicul tău chirurg și ajustăm exercițiile în funcție de stadiul vindecării.",
      s6li1: "Post-artroplastie genunchi / șold",
      s6li2: "Post-meniscectomie",
      s6li3: "Post-fractură",
      s6li4: "Post-intervenții coloană",
      s6li5: "Recuperare ligament cruciat",
    },
    conditionsPage: {
      heroTitle: "Afecțiuni tratate",
      introEyebrow: "Ce putem trata",
      introP: "Echipa Vivant abordează o gamă largă de afecțiuni musculo-scheletice, neurologice și posturale. Indiferent de natura disconfortului tău, primul pas este o evaluare detaliată care ne ajută să stabilim cel mai potrivit plan de tratament.",
      c1Title: "Dureri lombare",
      c1Desc: "Durerea în zona lombară, acută sau cronică, cu sau fără iradiere.",
      c2Title: "Dureri cervicale",
      c2Desc: "Cervicalgii, torticolis și tensiuni musculare în zona gâtului.",
      c3Title: "Hernie de disc",
      c3Desc: "Tratament conservator pentru hernii lombare sau cervicale.",
      c4Title: "Dureri de umăr",
      c4Desc: "Periartrită scapulo-humerală, conflict sub-acromial, capsulită.",
      c5Title: "Dureri de genunchi",
      c5Desc: "Gonartroză, leziuni meniscale, ligamentare sau patelo-femurale.",
      c6Title: "Dureri de șold",
      c6Desc: "Coxartroză, sindrom piriformis, bursite și tendinopatii.",
      c7Title: "Scolioză & Cifoză",
      c7Desc: "Corectare posturală și exerciții specifice pentru curburi anormale.",
      c8Title: "Sciatică",
      c8Desc: "Durere iradiată pe traiectul nervului sciatic, cu sau fără parestezii.",
      c9Title: "Recuperare post-op",
      c9Desc: "Programe specifice după intervenții chirurgicale ortopedice.",
      c10Title: "Leziuni sportive",
      c10Desc: "Entorse, contracturi, leziuni musculo-tendinoase și de revenire la sport.",
      c11Title: "Tendinite & Entorse",
      c11Desc: "Tratament al inflamațiilor tendinoase și al leziunilor ligamentare.",
      c12Title: "Cefalee cervicogenă",
      c12Desc: "Dureri de cap cu origine în coloana cervicală sau musculatura gâtului.",
      c13Title: "Dureri sarcină / post-partum",
      c13Desc: "Suport pentru viitoare mămici și recuperare după naștere.",
      c14Title: "Afecțiuni pediatrice",
      c14Desc: "Plagiocefalie, colici la sugari, dezvoltare motorie întârziată.",
      note: "Nu îți regăsești afecțiunea în listă? Acest tabel acoperă cele mai frecvente cazuri, dar nu este exhaustiv. Contactează-ne pentru o evaluare personalizată.",
      noteBtn: "Contactează-ne →",
    },
    pricingPage: {
      heroTitle: "Prețuri transparente",
      heroSubtitle: "Fără costuri ascunse. Fără surprize.",
      introEyebrow: "Investiția în sănătate",
      introP: "Credem în transparență totală. Vei ști exact ce plătești, ce primești și care este planul tău de tratament încă de la prima consultație. Fără rețete ambigue, fără ședințe inutile.",
      c1Title: "Consultație Inițială",
      min60: "60 minute",
      badgeRecommended: "Recomandat",
      c2Title: "Ședință Standard",
      min45: "45 minute",
      badgeSave: "Economisești 300 RON",
      c3Title: "Pachet 10 Ședințe",
      c3Sub: "120 RON / ședință · Valabil 3 luni",
      f1: "Evaluare posturală completă",
      f2: "Examinare funcțională",
      f3: "Stabilirea planului de tratament",
      f4: "Primul tratament inclus",
      f5: "Tratament osteopatic / fizioterapeutic",
      f6: "Exerciții terapeutice personalizate",
      f7: "Urmărirea progresului",
      f8: "Recomandări pentru acasă",
      f9: "Toate beneficiile ședinței standard",
      f10: "Evaluare de progres inclusă",
      f11: "Prioritate la programare",
      f12: "Flexibilitate în planificare",
      legal: "Prețurile afișate sunt orientative și pot varia în funcție de complexitatea cazului. Planul exact va fi stabilit în urma consultației inițiale.",
    },
    faqPage: {
      heroTitle: "Întrebări frecvente",
      q1: "Ce este osteopatia și cum diferă de alte terapii manuale?",
      q2: "Câte ședințe sunt necesare pentru a vedea rezultate?",
      q3: "Cum decurge prima consultație la Vivant Osteo & Physio?",
      q4: "Tratamentele osteopatice sau de fizioterapie sunt dureroase?",
      q5: "Ce documente sau investigații trebuie să aduc la prima vizită?",
      q6: "Pot urma osteopatie și fizioterapie în același timp?",
      q7: "Care este diferența dintre fizioterapie și kinetoterapie?",
      q8: "Cum pot face o programare?",
      a1: "Osteopatia este o terapie manuală care abordează corpul ca un întreg interconectat. Spre deosebire de tratamentele care se concentrează doar pe zona dureroasă, osteopatia caută cauza disfuncției — poate fi într-o zonă complet diferită. Folosim tehnici subtile pentru a restabili mobilitatea articulară, viscerală și cranio-sacrală.",
      a2: "Numărul de ședințe depinde de complexitatea cazului, vechimea afecțiunii și răspunsul individual la tratament. Pentru probleme acute, 2–4 ședințe sunt adesea suficiente. Pentru afecțiuni cronice, planul poate include 6–10 ședințe distribuite pe câteva săptămâni. Vei primi un plan clar după consultația inițială.",
      a3: "Prima consultație durează 60 de minute și include: discuție detaliată despre istoricul tău medical, evaluare posturală, examinare funcțională și testare specifică zonelor afectate. La final, stabilim împreună planul de tratament și efectuăm primul tratament. Vei pleca cu o înțelegere clară a ce urmează.",
      a4: "În general, nu. Tehnicile pe care le folosim sunt blânde și adaptate toleranței tale. Poți resimți un disconfort temporar în zonele tensionate, dar tratamentul nu trebuie să fie dureros. Lucrăm întotdeauna în limitele tale și comunicăm permanent în timpul ședinței.",
      a5: "Adu cu tine orice investigație recentă: radiografii, RMN, ecografii sau scrisori medicale relevante. Dacă urmezi tratament medicamentos, este util să ne spui ce medicamente iei. Vino într-o ținută comodă, care să permită mișcarea — sau te poți schimba în clinică.",
      a6: "Da, în multe cazuri abordarea combinată oferă rezultate mai bune. Osteopatia restabilește mobilitatea și echilibrul global, iar fizioterapia consolidează rezultatele prin exerciții specifice. Echipa noastră coordonează tratamentele pentru a-ți construi un plan unitar și eficient.",
      a7: "Fizioterapia este o disciplină mai largă, care include evaluare, tratament manual, exerciții, agenți fizici și consiliere. Kinetoterapia este componenta sa centrată pe mișcare și exercițiul terapeutic. La Vivant, le combinăm strategic pentru a-ți oferi cea mai bună abordare pentru afecțiunea ta.",
      a8: "Cel mai simplu este să ne suni la <a href=\"tel:0746865189\" style=\"color: var(--olive-gold);\">0746 865 189</a>, Luni–Vineri între 09:00 și 17:00. Poți, de asemenea, completa formularul din pagina de <a href=\"contact.html\" style=\"color: var(--olive-gold);\">Contact</a> și te vom contacta în cel mai scurt timp pentru a stabili împreună prima vizită.",
      helpTitle: "Mai ai întrebări?",
      helpSubtitle: "Suntem la doar un telefon distanță. Răspundem cu plăcere.",
      callNow: "Sună acum: 0746 865 189",
      sendMessage: "Trimite un mesaj",
    },
    contactPage: {
      heroTitle: "Contact & Programare",
      lblAddress: "Adresă",
      lblPhone: "Telefon",
      lblEmail: "Email",
      lblHours: "Program",
      lblSocial: "Social",
      addressSub: "Interfon 17, 18 · Iași, cod poștal 700612",
      phoneSub: "Disponibil Luni–Vineri, 09:00–17:00",
      mon: "Luni",
      tue: "Marți",
      wed: "Miercuri",
      thu: "Joi",
      fri: "Vineri",
      sat: "Sâmbătă",
      sun: "Duminică",
      closed: "Închis",
      mapNote: "Parcare disponibilă în fața clădirii.",
      formTitle: "Trimite-ne un mesaj",
      fName: "Nume complet *",
      fPhone: "Telefon *",
      fEmail: "Email *",
      fService: "Serviciul dorit",
      fMessage: "Descrie pe scurt problema *",
      errName: "Te rugăm introdu numele.",
      errPhone: "Te rugăm introdu un număr valid.",
      errEmail: "Te rugăm introdu un email valid.",
      errMessage: "Te rugăm descrie problema.",
      optOsteo: "Osteopatie",
      optPhysio: "Fizioterapie",
      optKineto: "Kinetoterapie",
      optManual: "Terapie Manuală",
      optMassage: "Masaj Terapeutic",
      optPostop: "Recuperare Post-Operatorie",
      optUnsureNo: "Nu știu încă",
      gdpr: "Sunt de acord ca datele mele să fie folosite pentru a fi contactat de Vivant Osteo & Physio, conform politicii de confidențialitate.",
      submit: "Trimite mesajul",
      success: "✓ Mesaj trimis cu succes! Te vom contacta Luni–Vineri, 09:00–17:00.",
      urgency: "Luni–Vineri · 09:00 – 17:00",
    },
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
      addressLine: 'Str. Pantelimon Halipa Nr.5A, Etaj 4<br>Interfon 17, 18 · Iași 700612',
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
      indexTitle: 'Vivant Osteo & Physio — Clinică de Osteopatie și Fizioterapie, Iași',
      about: "Despre noi — Vivant Osteo & Physio, Iași",
      services: "Servicii — Osteopatie, Fizioterapie | Vivant Iași",
      conditions: "Afecțiuni tratate — Vivant Osteo & Physio, Iași",
      pricing: "Prețuri — Vivant Osteo & Physio, Iași",
      faq: "Întrebări frecvente — Vivant Osteo & Physio, Iași",
      contact: "Contact & Programare — Vivant Osteo & Physio, Iași"
    }
  },

  en: {
    form: {
      sending: "Sending…",
    },
    notFound: {
      eyebrow: "Error 404",
      message: "The page you are looking for doesn’t exist or has moved. Let’s get you back on track.",
      home: "Back home",
      contact: "Contact us",
    },
    aboutPage: {
      heroTitle: "About us",
      storyEyebrow: "Our story",
      storyTitle: "Vivant — where the body finds its voice again.",
      storyP1: "Vivant Osteo & Physio was born from the belief that recovery isn’t just about treating pain, but about rediscovering a whole relationship with your own body. We founded the clinic to give patients in Iași a space where they are truly listened to and treated with clinical rigour.",
      storyP2: "Our approach is holistic and firmly grounded in scientific evidence. We combine osteopathy with physiotherapy, kinesiotherapy and manual therapy to build treatment plans tailored to each patient, not generic protocols.",
      storyP3: "We stand by our patients every step of the way — from the first assessment to the moment when pain becomes a memory and movement, a rediscovered joy.",
      storyP4: "The name “Vivant” comes from the Latin <em>vivere</em> — to be alive, to live fully. It is the promise we make to everyone who walks through our door.",
      valuesEyebrow: "Our principles",
      valuesTitle: "The values that guide us",
      v1Title: "Empathy",
      v1Desc: "We listen before we treat. Every story matters and every pain has its own history.",
      v2Title: "Excellence",
      v2Desc: "We apply techniques based on the latest international research and continuous training.",
      v3Title: "Holism",
      v3Desc: "We treat the person, not the symptom. We see the body as an interconnected whole, not a sum of parts.",
      v4Title: "Continuity",
      v4Desc: "We accompany the patient throughout recovery, from the first assessment to the final result.",
      teamEyebrow: "The Vivant specialists",
      teamTitle: "Meet our team",
      teamSubtitle: "Dedicated people, with rigorous training and passion for what they do.",
      role1: "Coordinator, Vivant Osteo & Physio",
      role2: "Physiotherapist",
      role3: "Pharmacologist",
      bio1: "Physiotherapist with 10 years of experience in treating musculoskeletal and neurological conditions, as well as psychosomatic symptoms. Specialised in visceral and neurological osteopathy, P-DTR and acupuncture.",
      bio2: "Physiotherapist specialised in advanced medical gymnastics. She builds individualised exercise programs, tailored to each patient's needs.",
      bio3: "Pharmacologist specialised in cosmetic product chemistry and cosmetic formulation.",
      tag_visc: "Visceral osteopathy",
      tag_acu: "Acupuncture",
      tag_gym: "Medical gymnastics",
      tag_cosmchem: "Cosmetic chemistry",
      tag_cosmform: "Cosmetic formulation",
    },
    servicesPage: {
      heroTitle: "Our services",
      introEyebrow: "Integrated approach",
      introP1: "We combine several therapeutic disciplines to address pain, mobility and recovery from every angle. Each service can be used on its own or as part of a comprehensive recovery plan.",
      introP2: "Every session includes assessment, treatment and personalised home recommendations — for results that last.",
      recommendedFor: "Recommended for:",
      duration: "Duration",
      priceFrom: "From",
      bookSession: "Book a session →",
      s1Title: "Osteopathy",
      s1p1: "Osteopathy is a manual therapy that uses subtle techniques to restore joint, visceral and cranio-sacral mobility. It views the body as an interconnected whole, identifies patterns of tension and releases them to allow natural healing.",
      s1p2: "At Vivant, every session begins with a detailed assessment of your posture and medical history.",
      s1li1: "Chronic lower back pain",
      s1li2: "Neck pain",
      s1li3: "Tension headaches",
      s1li4: "Functional digestive issues",
      s1li5: "Infants (colic, plagiocephaly)",
      s2Title: "Physiotherapy",
      s2p1: "Physiotherapy uses movement, therapeutic exercise and physical agents to restore musculoskeletal function. It is the ideal approach for recovery after trauma, chronic conditions or surgery.",
      s2p2: "Our programs are built on clinical assessment and continuously adjusted according to progress.",
      s2li1: "Sports injuries",
      s2li2: "Post-fracture recovery",
      s2li3: "Herniated disc",
      s2li4: "Tendinitis",
      s2li5: "Neuromotor re-education",
      s3Title: "Kinesiotherapy",
      s3p1: "Kinesiotherapy focuses on supervised therapeutic exercise designed to re-educate the muscles, restore range of motion and improve coordination. It is the active component of the recovery process.",
      s3p2: "Every exercise is chosen for you and progressively adjusted to deliver safe, lasting results.",
      s3li1: "Scoliosis & kyphosis",
      s3li2: "Post-operative recovery",
      s3li3: "Neurological conditions",
      s3li4: "Postural problems",
      s3li5: "Cardio-respiratory rehabilitation",
      s4Title: "Manual Therapy",
      s4p1: "Manual therapy combines joint mobilisation, soft-tissue techniques and specific manipulations to reduce pain and increase mobility in the affected areas. It is a precise and effective intervention.",
      s4p2: "We use clinically validated techniques, chosen according to your diagnosis and your body’s response during the session.",
      s4li1: "Joint restrictions",
      s4li2: "Shoulder pain",
      s4li3: "Hip pain",
      s4li4: "Mobility limitations",
      s4li5: "Muscle contractures",
      s5Title: "Therapeutic Massage",
      s5p1: "Therapeutic massage releases tension accumulated in the muscles and connective tissue, improves circulation and induces deep relaxation. It is an excellent complement to osteopathy and physiotherapy.",
      s5p2: "We work with clinical intent, not just relaxation — every technique has a clear therapeutic purpose.",
      s5li1: "Stress and muscle fatigue",
      s5li2: "Neck contractures",
      s5li3: "Lower back pain",
      s5li4: "Post-exertion recovery",
      s5li5: "Tension-related insomnia",
      s6Title: "Post-Operative Recovery",
      s6p1: "Specialised programs for rehabilitation after orthopaedic or neurological surgery or severe trauma. We work in stages, with controlled progression, for a safe and complete recovery.",
      s6p2: "We coordinate the treatment plan with your surgeon and adjust the exercises according to the stage of healing.",
      s6li1: "Post knee / hip arthroplasty",
      s6li2: "Post-meniscectomy",
      s6li3: "Post-fracture",
      s6li4: "Post spinal surgery",
      s6li5: "Cruciate ligament recovery",
    },
    conditionsPage: {
      heroTitle: "Conditions treated",
      introEyebrow: "What we can treat",
      introP: "The Vivant team addresses a wide range of musculoskeletal, neurological and postural conditions. Whatever the nature of your discomfort, the first step is a detailed assessment that helps us determine the most suitable treatment plan.",
      c1Title: "Lower back pain",
      c1Desc: "Pain in the lower back, acute or chronic, with or without radiation.",
      c2Title: "Neck pain",
      c2Desc: "Neck pain, torticollis and muscle tension in the neck area.",
      c3Title: "Herniated disc",
      c3Desc: "Conservative treatment for lumbar or cervical herniated discs.",
      c4Title: "Shoulder pain",
      c4Desc: "Scapulohumeral periarthritis, subacromial impingement, capsulitis.",
      c5Title: "Knee pain",
      c5Desc: "Knee osteoarthritis, meniscal, ligament or patellofemoral injuries.",
      c6Title: "Hip pain",
      c6Desc: "Hip osteoarthritis, piriformis syndrome, bursitis and tendinopathies.",
      c7Title: "Scoliosis & Kyphosis",
      c7Desc: "Postural correction and specific exercises for abnormal spinal curves.",
      c8Title: "Sciatica",
      c8Desc: "Pain radiating along the sciatic nerve, with or without paraesthesia.",
      c9Title: "Post-op recovery",
      c9Desc: "Specific programs after orthopaedic surgery.",
      c10Title: "Sports injuries",
      c10Desc: "Sprains, contractures, musculotendinous injuries and return-to-sport care.",
      c11Title: "Tendinitis & Sprains",
      c11Desc: "Treatment of tendon inflammation and ligament injuries.",
      c12Title: "Cervicogenic headache",
      c12Desc: "Headaches originating in the cervical spine or neck muscles.",
      c13Title: "Pregnancy / post-partum pain",
      c13Desc: "Support for expectant mothers and recovery after childbirth.",
      c14Title: "Paediatric conditions",
      c14Desc: "Plagiocephaly, infant colic, delayed motor development.",
      note: "Can’t find your condition in the list? This table covers the most common cases but isn’t exhaustive. Contact us for a personalised assessment.",
      noteBtn: "Contact us →",
    },
    pricingPage: {
      heroTitle: "Transparent pricing",
      heroSubtitle: "No hidden costs. No surprises.",
      introEyebrow: "An investment in your health",
      introP: "We believe in complete transparency. You’ll know exactly what you pay, what you get and what your treatment plan is from the very first consultation. No vague prescriptions, no unnecessary sessions.",
      c1Title: "Initial Consultation",
      min60: "60 minutes",
      badgeRecommended: "Recommended",
      c2Title: "Standard Session",
      min45: "45 minutes",
      badgeSave: "Save 300 RON",
      c3Title: "10-Session Package",
      c3Sub: "120 RON / session · Valid for 3 months",
      f1: "Complete postural assessment",
      f2: "Functional examination",
      f3: "Treatment plan established",
      f4: "First treatment included",
      f5: "Osteopathic / physiotherapeutic treatment",
      f6: "Personalised therapeutic exercises",
      f7: "Progress tracking",
      f8: "Home recommendations",
      f9: "All the benefits of the standard session",
      f10: "Progress assessment included",
      f11: "Priority scheduling",
      f12: "Scheduling flexibility",
      legal: "The prices shown are indicative and may vary depending on the complexity of the case. The exact plan will be established after the initial consultation.",
    },
    faqPage: {
      heroTitle: "Frequently asked questions",
      q1: "What is osteopathy and how does it differ from other manual therapies?",
      q2: "How many sessions are needed to see results?",
      q3: "What happens during the first consultation at Vivant Osteo & Physio?",
      q4: "Are osteopathic or physiotherapy treatments painful?",
      q5: "What documents or investigations should I bring to my first visit?",
      q6: "Can I have osteopathy and physiotherapy at the same time?",
      q7: "What is the difference between physiotherapy and kinesiotherapy?",
      q8: "How can I make an appointment?",
      a1: "Osteopathy is a manual therapy that treats the body as an interconnected whole. Unlike treatments that focus only on the painful area, osteopathy looks for the cause of the dysfunction — which may lie in a completely different region. We use subtle techniques to restore joint, visceral and cranio-sacral mobility.",
      a2: "The number of sessions depends on the complexity of the case, how long the condition has lasted and your individual response to treatment. For acute problems, 2–4 sessions are often enough. For chronic conditions, the plan may include 6–10 sessions spread over a few weeks. You’ll receive a clear plan after the initial consultation.",
      a3: "The first consultation lasts 60 minutes and includes: a detailed discussion of your medical history, a postural assessment, a functional examination and specific testing of the affected areas. At the end, we agree on the treatment plan together and carry out the first treatment. You’ll leave with a clear understanding of what comes next.",
      a4: "Generally, no. The techniques we use are gentle and adapted to your tolerance. You may feel temporary discomfort in tense areas, but the treatment should not be painful. We always work within your limits and communicate throughout the session.",
      a5: "Bring any recent investigations: X-rays, MRIs, ultrasounds or relevant medical letters. If you’re on medication, it helps to tell us what you’re taking. Wear comfortable clothing that allows movement — or you can change at the clinic.",
      a6: "Yes — in many cases a combined approach delivers better results. Osteopathy restores overall mobility and balance, while physiotherapy consolidates the results through specific exercises. Our team coordinates the treatments to build a unified, effective plan for you.",
      a7: "Physiotherapy is a broader discipline that includes assessment, manual treatment, exercise, physical agents and counselling. Kinesiotherapy is its component centred on movement and therapeutic exercise. At Vivant, we combine them strategically to give you the best approach for your condition.",
      a8: "The simplest way is to call us at <a href=\"tel:0746865189\" style=\"color: var(--olive-gold);\">0746 865 189</a>, Monday–Friday between 09:00 and 17:00. You can also fill in the form on the <a href=\"contact.html\" style=\"color: var(--olive-gold);\">Contact</a> page and we’ll get back to you as soon as possible to arrange your first visit together.",
      helpTitle: "Still have questions?",
      helpSubtitle: "We’re just a phone call away. We’re happy to help.",
      callNow: "Call now: 0746 865 189",
      sendMessage: "Send a message",
    },
    contactPage: {
      heroTitle: "Contact & Booking",
      lblAddress: "Address",
      lblPhone: "Phone",
      lblEmail: "Email",
      lblHours: "Hours",
      lblSocial: "Social",
      addressSub: "Intercom 17, 18 · Iași, postal code 700612",
      phoneSub: "Available Monday–Friday, 09:00–17:00",
      mon: "Monday",
      tue: "Tuesday",
      wed: "Wednesday",
      thu: "Thursday",
      fri: "Friday",
      sat: "Saturday",
      sun: "Sunday",
      closed: "Closed",
      mapNote: "Parking available in front of the building.",
      formTitle: "Send us a message",
      fName: "Full name *",
      fPhone: "Phone *",
      fEmail: "Email *",
      fService: "Service of interest",
      fMessage: "Briefly describe the problem *",
      errName: "Please enter your name.",
      errPhone: "Please enter a valid number.",
      errEmail: "Please enter a valid email.",
      errMessage: "Please describe the problem.",
      optOsteo: "Osteopathy",
      optPhysio: "Physiotherapy",
      optKineto: "Kinesiotherapy",
      optManual: "Manual Therapy",
      optMassage: "Therapeutic Massage",
      optPostop: "Post-Operative Recovery",
      optUnsureNo: "I’m not sure yet",
      gdpr: "I agree that my data may be used to be contacted by Vivant Osteo & Physio, in accordance with the privacy policy.",
      submit: "Send message",
      success: "✓ Message sent successfully! We’ll contact you Monday–Friday, 09:00–17:00.",
      urgency: "Monday–Friday · 09:00 – 17:00",
    },
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
      addressLine: 'Pantelimon Halipa St. Nr.5A, Floor 4<br>Intercom 17, 18 · Iași 700612',
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
      indexTitle: 'Vivant Osteo & Physio — Osteopathy & Physiotherapy Clinic, Iași',
      about: "About us — Vivant Osteo & Physio, Iași",
      services: "Services — Osteopathy, Physiotherapy | Vivant Iași",
      conditions: "Conditions treated — Vivant Osteo & Physio, Iași",
      pricing: "Pricing — Vivant Osteo & Physio, Iași",
      faq: "Frequently asked questions — Vivant Osteo & Physio, Iași",
      contact: "Contact & Booking — Vivant Osteo & Physio, Iași"
    }
  }
};

/* ─── i18n engine ─── */
(function () {
  const STORAGE_KEY = 'vivant-lang';
  const SUPPORTED = ['ro', 'en'];
  const DEFAULT = 'ro';

  function detectInitialLang() {
    // Prima vizită este întotdeauna în română, indiferent de limba browserului.
    // Comutarea pe EN rămâne doar alegerea explicită a vizitatorului (butonul RO/EN).
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
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
