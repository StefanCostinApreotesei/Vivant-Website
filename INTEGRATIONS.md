# Vivant — Setup integrări

3 sisteme noi sunt deja wired-up și funcționale cu mock data / fallback. Mai jos cum le activezi cu datele tale reale.

---

## 1. Calendly (Booking modal)

Acum: toate butoanele "Programează-te" / "Programează o ședință" / "Trimite un mesaj" deschid un modal. Dacă URL-ul Calendly nu e setat, modalul arată un fallback (buton "Sună acum" + link spre formular).

**Pași pentru activare:**

1. Creează cont gratuit pe [calendly.com](https://calendly.com).
2. Creează un eveniment nou (ex.: "Consultație inițială — 60 min").
3. Copiază URL-ul evenimentului (ex.: `https://calendly.com/vivant-osteo/consultatie`).
4. Deschide [booking.js](booking.js) și editează:

```js
window.BOOKING_CONFIG = {
  calendlyUrl: 'https://calendly.com/vivant-osteo/consultatie',  // ← pune aici
  fallbackPhone: '0746865189',
  fallbackPhoneDisplay: '0746 865 189',
  fallbackContactUrl: 'contact.html'
};
```

Gata. La următorul refresh, butoanele deschid widget-ul Calendly embedded.

**Alternative românești:**
- [setmore.com](https://setmore.com) — similar cu Calendly, URL embed identic
- [calendis.ro](https://calendis.ro) — local, dar embed mai complex (necesită iframe custom). Înlocuiește `renderCalendly()` din `booking.js` cu codul lor de embed.

---

## 2. Google Reviews

Acum: secțiunea Reviews de pe homepage e populată cu 6 recenzii curate (mock) și un badge "4.9 ★ pe Google". Reviews-urile sunt complet stylizate, traduse RO/EN, cu logo Google și link spre Google Maps.

### Calea ușoară: widget terț (recomandată)

Cea mai rapidă cale pentru reviews live e un widget terț care se ocupă de toate API-urile:

- **[Trustindex](https://www.trustindex.io)** — free tier OK, 5-10 min setup
- **[Elfsight](https://elfsight.com/google-reviews-widget/)** — free tier 200 vizualizări/lună
- **[Tagembed](https://tagembed.com)** — free tier robust

Toate îți dau un snippet `<script>` + `<div>` pe care-l înlocuiești cu `<div class="reviews-container">` din `index.html`.

### Calea profesională: Google Places API + proxy backend

Pentru control total:

1. Activează [Google Places API](https://developers.google.com/maps/documentation/places/web-service/get-api-key) (necesar cont Google Cloud + card, dar free tier generos: ~$200/lună credit).
2. Găsește **Place ID** pentru clinică: [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id).
3. Cheia API NU poate fi expusă în client-side JS (oricine o vede în Network tab). Ai nevoie de un **mic proxy backend** care apelează Google și-ți returnează doar review-urile. Variante:
   - **Vercel/Netlify serverless function** (free tier, 5 min setup) — recomandat
   - **Cloudflare Worker** (free tier, mai performant)
   - **PHP simplu** pe hosting-ul tău existent

Exemplu serverless function (Vercel — `api/google-reviews.js`):

```js
export default async function handler(req, res) {
  const { placeId } = req.query;
  const key = process.env.GOOGLE_PLACES_API_KEY; // setat în Vercel dashboard
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${key}`;
  const r = await fetch(url);
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600'); // cache 1h
  res.json({
    averageRating: data.result?.rating,
    totalReviews: data.result?.user_ratings_total,
    reviews: (data.result?.reviews || []).map(r => ({
      name: r.author_name,
      initials: r.author_name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase(),
      rating: r.rating,
      date: new Date(r.time * 1000).toISOString().split('T')[0],
      condition: { ro: '', en: '' },
      text: { ro: r.text, en: r.text } // Google nu dă traducere — vezi mai jos
    }))
  });
}
```

Apoi în [reviews.js](reviews.js):

```js
window.REVIEWS_CONFIG = {
  source: 'google',                                          // ← schimbă 'mock' → 'google'
  apiProxyUrl: 'https://vivant.ro/api/google-reviews',       // ← URL-ul proxy-ului tău
  placeId: 'ChIJ...',                                        // ← Place ID-ul tău
  // ... rest (folosite ca fallback dacă fetch eșuează)
};
```

**Notă despre traducere:** Google API întoarce review-urile în limba originală. Pentru traducere automată RO↔EN ai nevoie de un al doilea API call (Google Translate API, DeepL, etc.) în proxy-ul tău. Sau afișezi review-ul original cu un mic disclaimer "Original review in [limbă]".

---

## 3. Multi-language (RO / EN)

Acum: toggle "RO/EN" e vizibil în navbar și mobile drawer pe TOATE paginile. Detectează automat limba browserului la prima vizită și o salvează în localStorage.

**Ce e tradus complet:**
- Navbar, mobile drawer, butoane CTA (toate paginile)
- Footer: tagline, titluri coloane, link-uri, program, copyright (toate paginile)
- **index.html** — întreaga pagină (hero, trust bar, despre, servicii, afecțiuni, reviews, CTA, contact preview)
- Modalul de booking
- Componenta Reviews

**Ce trebuie tradus încă** (page-specific content pe paginile interne):
- `despre.html` — povestea clinicii, valorile, secțiunea echipă
- `servicii.html` — descrierile celor 6 servicii detaliate
- `afectiuni.html` — cele 14 carduri de afecțiuni
- `preturi.html` — descrierile celor 3 carduri de prețuri
- `faq.html` — cele 8 întrebări și răspunsuri
- `contact.html` — labels din formular, info contact

### Cum extinzi traducerea pe paginile interne

Pentru fiecare element de text dintr-un HTML, adaugă atributul `data-i18n="cheie.path"`:

```html
<!-- Înainte -->
<h1>Despre noi</h1>

<!-- După -->
<h1 data-i18n="aboutPage.heroTitle">Despre noi</h1>
```

Apoi adaugă cheia în [translations.js](translations.js), în ambele blocuri `ro` și `en`:

```js
ro: {
  // ... existente
  aboutPage: {
    heroTitle: 'Despre noi',
    storyEyebrow: 'Povestea noastră',
    // ...
  }
},
en: {
  // ...
  aboutPage: {
    heroTitle: 'About us',
    storyEyebrow: 'Our story',
    // ...
  }
}
```

**Tipuri de atribute disponibile:**

| Atribut | Folosire | Exemplu |
|---------|----------|---------|
| `data-i18n="..."` | Schimbă `textContent` | `<p data-i18n="hero.subtitle">Text default</p>` |
| `data-i18n-html="..."` | Schimbă `innerHTML` (permite span-uri interne) | `<h1 data-i18n-html="hero.title">Text cu <span>span</span></h1>` |
| `data-i18n-attr="placeholder:form.name"` | Schimbă un atribut (placeholder, title, aria-label etc.) | `<input data-i18n-attr="placeholder:form.namePlaceholder">` |
| `data-i18n-title="..."` (pe `<title>`) | Schimbă titlul paginii | `<title data-i18n-title="page.about">Despre — Vivant</title>` |

### Adăugare limbi suplimentare (FR, RU, etc.)

În [translations.js](translations.js):

```js
window.VIVANT_TRANSLATIONS = {
  ro: { /* ... */ },
  en: { /* ... */ },
  fr: { /* ... copy structure of ro, translate values */ }
};

// Și actualizează lista SUPPORTED:
const SUPPORTED = ['ro', 'en', 'fr'];
```

Toggle-ul curent e binar (RO ↔ EN). Pentru 3+ limbi modifică partea de UI în navbar-uri să fie dropdown.

---

## Resume rapid de configurare

| Feature | Status default | Activare reală |
|---------|---------------|----------------|
| Booking modal | Fallback (call + form link) | Setează `calendlyUrl` în `booking.js` |
| Google Reviews | 6 mock reviews stilizate Google | Widget terț (5 min) sau proxy backend + API key |
| Multi-language EN | Funcțional pe navbar/footer + index.html | Adaugă `data-i18n` pe celelalte pagini, extinde `translations.js` |

Toate cele 3 sisteme **funcționează acum** cu mock data — vizitatorul nu vede nimic stricat. Le poți activa rând pe rând, fără să fie blocate una de alta.
