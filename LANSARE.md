# Vivant Osteo & Physio — Pregătire pentru LIVE

Document de lansare. Mai jos: **ce a fost făcut** (gata) și **pașii manuali rămași** înainte / după publicare.

Domeniu configurat peste tot: **https://www.vivantop.ro**

---

## ✅ Ce este gata (făcut automat)

### Pregătire pentru live
- **Imagini locale, pe brand** — toate placeholderele externe `placehold.co` au fost înlocuite cu SVG-uri locale elegante în `img/` (fără dependență de un server extern). Se încarcă instant și arată curat.
- **Favicon complet** — `favicon.ico`, `favicon-16/32.png`, `apple-touch-icon.png`, `icon-192/512.png` + `site.webmanifest` (PWA-ready).
- **Formular de contact funcțional** — conectat la **Web3Forms** (AJAX, stare „se trimite", mesaj de eroare, protecție anti-spam honeypot). *Necesită o cheie gratuită — vezi pașii manuali.*
- **Pagină 404** brandată (`404.html`).
- **`.htaccess`** — redirect HTTPS + www, pagină 404, compresie GZIP, cache browser, headere de securitate. (Se aplică pe hosting Apache/cPanel; ignorat pe Netlify/Vercel/nginx.)
- Corectată o greșeală de tipar în FAQ („Foloseam" → „Folosim").

### SEO
- **Meta pe fiecare pagină** — `canonical`, Open Graph (Facebook/WhatsApp), Twitter Card, `robots`, `theme-color`, geo-tags Iași.
- **Imagine de share** `og-image.png` (1200×630) — apare când linkul e distribuit pe social/WhatsApp.
- **Date structurate JSON-LD** (rich results Google):
  - `MedicalClinic` + `LocalBusiness` (NAP: nume, adresă, telefon, program, rețele) — pe toate paginile
  - `WebSite` — pe homepage
  - `BreadcrumbList` — pe paginile interne
  - `FAQPage` — pe `faq.html` (poate apărea cu întrebări extinse direct în Google)
  - `Service` cu prețuri — pe `servicii.html`
- **`sitemap.xml`** (7 pagini) + **`robots.txt`** (cu link către sitemap).

### Bilingv RO / EN
- **Traducere completă EN** pe TOATE paginile interne (Despre, Servicii, Afecțiuni, Prețuri, FAQ, Contact) + pagina 404. Butonul RO/EN funcționează acum peste tot (înainte traducea doar meniul și footer-ul). 216 texte noi traduse.
- Verificat automat: 552 de noduri de text comută corect RO↔EN, 0 erori.

---

## 🔧 Pași manuali rămași (înainte / la lansare)

### 1. Creează căsuța de email `contact@vivantop.ro`
Site-ul afișează acum peste tot `contact@vivantop.ro` (footer, pagina Contact, datele structurate). Asigură-te că această căsuță există la providerul de hosting/email — altfel mesajele trimise pe ea se pierd.

### 2. Activează formularul de contact (Web3Forms) — **5 minute**
1. Intră pe [web3forms.com](https://web3forms.com), introdu adresa unde vrei să primești mesajele (ex. `contact@vivantop.ro`).
2. Copiază cheia (Access Key) primită.
3. În `contact.html`, înlocuiește `YOUR_WEB3FORMS_ACCESS_KEY` cu cheia ta.

Până atunci, formularul afișează mesajul de succes **fără a trimite** (mod demo, ca să nu pară stricat).

### 3. Fotografii reale
Înlocuiește SVG-urile din `img/` (sau căile `<img src>`) cu poze reale JPG/WebP:
- `img/clinic-interior.svg` — interior clinică (homepage)
- `img/about-story.svg` — pagina Despre
- `img/team-andrei.svg`, `team-maria.svg`, `team-mihai.svg` — echipa
- `img/service-*.svg` — cele 6 servicii

### 4. Verifică linkurile de social & recenzii
- Facebook / Instagram: momentan `facebook.com/vivantosteo` și `instagram.com/vivantosteo` — confirmă sau înlocuiește.
- Homepage folosește widget-ul **Elfsight Google Reviews** — confirmă că e contul vostru (free tier: ~200 afișări/lună).

### 5. Deploy + Google
1. Urcă TOATE fișierele în rădăcina `www.vivantop.ro`.
2. [Google Search Console](https://search.google.com/search-console): adaugă & verifică domeniul, trimite `sitemap.xml`.
3. Testează datele structurate: [Rich Results Test](https://search.google.com/test/rich-results).
4. Revendică / actualizează **Google Business Profile** cu aceleași date (nume, adresă, telefon) — esențial pentru SEO local în Iași.

### 6. (Opțional) Booking online
Butoanele „Programează-te" deschid un modal cu fallback „Sună acum". Ca să activezi programarea online, pune URL-ul Calendly în `booking.js` (`calendlyUrl`). Detalii în `INTEGRATIONS.md`.

---

## Cum rulezi local
Din folderul proiectului:
```
python -m http.server 8000
```
Apoi deschide **http://localhost:8000**.
