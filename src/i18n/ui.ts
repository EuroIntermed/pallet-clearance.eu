/**
 * Copy dictionary for both locales (PalletClearance). RO is authoritative; EN is
 * idiomatic parity (not a literal translation). Copy is benefit-led, concise and
 * scannable — the shared content standard for all ecosystem sites. Every
 * user-facing string on the site resolves through here.
 *
 * PalletClearance is a buy/sell desk for surplus stock (overstock, returns,
 * end-of-line, near-expiry, liquidation). It has TWO flows — SELLER and BUYER —
 * and NO public catalog: offers stay confidential (client requirement). The site
 * presents the two value propositions and routes each to the WhatsApp / AI flow.
 */

export type Locale = 'ro' | 'en'

const ro = {
  meta: {
    homeTitle: 'PalletClearance.eu | Vinde overstock, cumpără loturi clearance',
    homeDescription:
      'PalletClearance conectează companiile cu stoc de valorificat — overstock, retururi, near-expiry, lichidare — cu cumpărători B2B calificați. Flux confidențial.',
    howTitle: 'Cum funcționează | Vânzare & cumpărare loturi — PalletClearance.eu',
    howDescription:
      'Fluxul de vânzător și de cumpărător pentru loturi de clearance, pas cu pas. Fără listări publice, fără prețuri vizibile — totul confidențial și calificat B2B.',
    contactTitle: 'Contact | PalletClearance.eu',
    contactDescription:
      'Continuă pe WhatsApp cu cererea deja completată sau discută cu asistentul AI. Vânzare de stoc, cumpărare de loturi sau intrare pe piața din România.',
    notFoundTitle: 'Pagină negăsită | PalletClearance.eu',
  },
  brand: {
    name: 'PalletClearance.eu',
    tagline: 'Clearance & Overstock',
    mark: 'PC',
  },
  nav: {
    skip: 'Sari la conținut',
    home: 'Acasă',
    how: 'Cum funcționează',
    faq: 'Întrebări',
    contact: 'Contact',
    cta: 'Scrie-ne pe WhatsApp',
    openMenu: 'Deschide meniul',
    closeMenu: 'Închide meniul',
  },
  hero: {
    badge: 'Exclusiv B2B · Clearance · Overstock · Near-expiry · Lichidare',
    title: 'Vinde-ți stocul în piața din România.',
    lead: 'PalletClearance conectează companiile care au stocuri clearance, overstock sau surplus cu cumpărători B2B potriviți. Fără listări publice și fără prețuri vizibile — fiecare lot este calificat și direcționat confidențial.',
    sell: 'Vând stoc',
    buy: 'Cumpăr loturi',
    whatsapp: 'Scrie-ne pe WhatsApp',
    whatsappText:
      'Buna ziua. Vreau sa discut prin PalletClearance despre stoc clearance/overstock. Rol (vand/cumpar): ___ · Categorie: ___ · Cantitate: ___',
    sellWaText:
      'Buna ziua. Vreau sa vand stoc clearance/overstock prin PalletClearance. Categorie: ___ · Cantitate: ___ · Locatie: ___ · Termen valabilitate (daca e cazul): ___',
    buyWaText:
      'Buna ziua. Sunt cumparator B2B si caut loturi de clearance/overstock prin PalletClearance. Categorii: ___ · Volum obisnuit: ___ · Piata de livrare: ___',
    trustLine:
      'Food · Non-food · FMCG · Termen scurt · Surplus · Confidențial, fără expunere publică',
    panel: {
      kicker: 'Flux confidențial · exemplu',
      status: 'În calificare',
      seller: { label: 'Stoc vânzător', value: 'Analiză privată' },
      buyer: { label: 'Profil cumpărător', value: 'Direcționare controlată' },
      route: { label: 'Rută România', value: 'Analiză Euro Intermed' },
      note: 'Fără navigare liberă. Fără expunere publică a stocului.',
    },
  },
  paths: {
    eyebrow: 'Alege ruta',
    title: 'Două fluxuri, un singur principiu: confidențialitate',
    copy: 'Vinzi stoc sau cumperi loturi? Alege ruta care ți se potrivește. Fluxul cere doar informațiile necesare pentru calificarea oportunității.',
    seller: {
      tag: 'Vânzător',
      title: 'Vând stoc',
      body: 'Pentru stoc blocat, cu rotație lentă, în surplus, cu termen scurt sau de lichidare. Ne spui ce ai și unde e; noi îl calificăm și îl direcționăm confidențial.',
      points: [
        'Stoc blocat, slow-moving sau surplus',
        'Near-expiry, end-of-line sau retururi',
        'Lichidare rapidă de stoc',
      ],
      note: 'Detaliile stocului nu sunt făcute publice.',
      cta: 'Începe ca vânzător',
    },
    buyer: {
      tag: 'Cumpărător',
      title: 'Cumpăr loturi',
      body: 'Pentru cumpărători B2B calificați care caută loturi de clearance relevante. Ne spui ce categorii cumperi, volumul și piața; primești doar oportunități potrivite.',
      points: [
        'Loturi food, non-food și FMCG',
        'Volume și piață de livrare la alegere',
        'Oportunități transmise doar după calificare',
      ],
      note: 'Oportunitățile se transmit doar către cumpărători calificați.',
      cta: 'Începe ca cumpărător',
    },
  },
  handle: {
    eyebrow: 'Ce gestionăm',
    title: 'Loturi de clearance și surplus pe care le putem califica',
    copy: 'Gestionăm stoc food, non-food, FMCG și materii prime, acolo unde un flux B2B calificat este mai potrivit decât expunerea publică. Fără catalog public — doar calificare și direcționare.',
    items: [
      {
        tag: 'Stoc food',
        name: 'Produse alimentare, ingrediente și loturi mixte',
        body: 'Produse ambientale, ingrediente, băuturi, dulciuri, conserve, loturi mixte sau produse cu termen scurt.',
      },
      {
        tag: 'Stoc non-food',
        name: 'FMCG, igienă, cosmetice și produse pentru casă',
        body: 'Produse de igienă, cosmetice, home care, cleaning, pet products, ambalaje sau paleți mixți.',
      },
      {
        tag: 'Rută România',
        name: 'Stoc standard, private label și testare de piață',
        body: 'Pentru furnizori europeni care vor să testeze produse în România sau să găsească parteneri B2B locali.',
      },
    ],
  },
  confidential: {
    eyebrow: 'Un flux B2B controlat',
    title: 'Fără listări publice. Fără prețuri vizibile. Fără navigare la întâmplare.',
    copy: 'Stocurile de clearance sunt sensibile comercial. Vânzătorii pot avea nevoie de confidențialitate, cumpărătorii au nevoie de oportunități relevante, iar condițiile depind de volum, locație, urgență și contextul stocului.',
    benefits: [
      'Protejează confidențialitatea vânzătorului',
      'Filtrează cumpărătorii necalificați',
      'Direcționează doar oportunități relevante',
      'Păstrează negocierea sub control',
    ],
  },
  process: {
    eyebrow: 'Cum funcționează',
    title: 'Mai întâi calificarea, apoi direcționarea',
    steps: [
      {
        title: 'Alegi ruta',
        body: 'Vânzător sau cumpărător. Fiecare rută pornește fluxul potrivit pe WhatsApp sau cu asistentul AI.',
      },
      {
        title: 'Trimiți detalii minime',
        body: 'Companie, contact, categorie, volum și context. Pozele pentru stoc se adaugă în flux, nu pe site.',
      },
      {
        title: 'Analiză privată',
        body: 'Echipa verifică potrivirea și poate cere detalii suplimentare dacă este nevoie.',
      },
      {
        title: 'Direcționare controlată',
        body: 'Revenirea relevantă se face cu parteneri calificați, nu prin expunere publică.',
      },
    ],
    cta: 'Vezi fluxul complet',
  },
  trust: {
    eyebrow: 'Încredere',
    title: 'B2B, confidențial și conform',
    items: [
      {
        title: 'Confidențial, fără listări publice',
        body: 'Nu publicăm numele companiei, prețurile, pozele sau detaliile stocului fără acordul tău.',
      },
      {
        title: 'Conform GDPR',
        body: 'Consimțământ, drepturi GDPR și ștergerea datelor la cerere.',
      },
      {
        title: 'Companie reală, din România',
        body: 'Operat în ecosistemul EURO INTERMED SOLUTIONS · J8/735/2018 · CUI 39132147 · Brașov.',
      },
    ],
  },
  ecosystem: {
    eyebrow: 'Ecosistemul Euro Intermed',
    title: 'Ruta greșită? Te trimitem unde trebuie',
    copy: 'PalletClearance este canalul de clearance și overstock. Pentru aprovizionare standard sau recurentă, folosește canalul potrivit din ecosistem.',
    pillars: [
      {
        key: 'hub',
        badge: 'Hub B2B',
        name: 'Euro Intermed',
        line: 'Punctul central care direcționează fiecare cerere pe canalul potrivit.',
        cta: 'Deschide Euro Intermed',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'Sourcing B2B',
        name: 'Angrosist',
        line: 'Aprovizionare standard și recurentă — materii prime, produse vrac și FMCG.',
        cta: 'Deschide Angrosist',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'În dezvoltare',
        name: 'SkalYou',
        line: 'Scalare B2B asistată de AI — în construcție.',
        cta: 'Află despre SkalYou',
        roadmap: true,
      },
    ],
  },
  faq: {
    eyebrow: 'Întrebări frecvente',
    title: 'Clarificări înainte de primul contact',
    items: [
      {
        q: 'Sunteți un marketplace?',
        a: 'Nu. PalletClearance nu publică liste deschise de stocuri, prețuri vizibile sau pagini de checkout. Fiecare oportunitate este calificată și direcționată în mod privat.',
      },
      {
        q: 'Pot vedea ofertele actuale?',
        a: 'Nu public. Oportunitățile de clearance sunt transmise doar către cumpărători B2B relevanți, după analiza profilului de cumpărare.',
      },
      {
        q: 'De ce nu publicați prețuri?',
        a: 'Condițiile de clearance depind de tipul stocului, cantitate, locație, urgență, termen de valabilitate, profilul cumpărătorului și condițiile comerciale. Le gestionăm printr-un flux B2B calificat.',
      },
      {
        q: 'Informațiile despre stoc rămân confidențiale?',
        a: 'Da. Nu publicăm numele companiei, prețurile, pozele sau detaliile despre stoc fără acordul tău.',
      },
      {
        q: 'Ce fac dacă stocul meu este aprovizionare standard?',
        a: 'Dacă este aprovizionare standard sau recurentă, poate fi mai potrivit Angrosist.ro, canalul de sourcing B2B din ecosistemul Euro Intermed.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Începe acum',
    title: 'Ai stoc de vândut sau un profil de cumpărător de înregistrat?',
    copy: 'Începe cu un flux scurt de calificare. Vom direcționa cererea în mod privat și vom reveni cu următorul pas relevant. CUI-ul, documentele și prețurile se discută ulterior.',
    primary: 'Scrie-ne pe WhatsApp',
    secondary: 'Vezi opțiunile de contact',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Continuă pe WhatsApp',
    lead: 'Fără formulare. Alege ce descrie cererea ta, iar noi pregătim mesajul de WhatsApp pentru tine. Poți folosi și asistentul AI din colțul paginii — același flux, calificat în timp real.',
    chooseLabel: 'Alege ce descrie cererea ta',
    intentOptions: [
      {
        value: 'sell-overstock',
        label: 'Vând stoc / overstock',
        wa: 'Buna ziua. Vreau sa vand stoc clearance/overstock prin PalletClearance. Categorie: ___ · Cantitate: ___ · Locatie: ___ · Termen valabilitate (daca e cazul): ___',
      },
      {
        value: 'near-expiry',
        label: 'Stoc cu termen scurt',
        wa: 'Buna ziua. Am stoc cu termen scurt (near-expiry) de valorificat prin PalletClearance. Categorie: ___ · Cantitate: ___ · Termen: ___ · Locatie: ___',
      },
      {
        value: 'buy-clearance',
        label: 'Cumpăr loturi de clearance',
        wa: 'Buna ziua. Sunt cumparator B2B si caut loturi de clearance/overstock. Categorii: ___ · Volum obisnuit: ___ · Piata de livrare: ___',
      },
      {
        value: 'liquidation',
        label: 'Lichidare de stoc',
        wa: 'Buna ziua. Am o lichidare de stoc de valorificat rapid prin PalletClearance. Categorie: ___ · Cantitate: ___ · Termen limita: ___ · Locatie: ___',
      },
      {
        value: 'market-entry',
        label: 'Intrare pe piața din România',
        wa: 'Buna ziua. Sunt furnizor european si vreau sa intru pe piata din Romania. Categorie produs: ___ · Tip stoc (clearance/standard): ___',
      },
      {
        value: 'other-b2b',
        label: 'Altă oportunitate B2B',
        wa: 'Buna ziua. Am o oportunitate B2B de clearance/overstock si vreau sa discut cu Euro Intermed. Detalii: ___',
      },
    ],
    whatsapp: {
      helper: 'Mesajul de WhatsApp se precompletează în funcție de ruta aleasă.',
      cta: 'Scrie-ne pe WhatsApp',
    },
    widget: {
      eyebrow: 'Asistent B2B',
      title: 'Sau discută cu asistentul AI',
      body: 'Asistentul din colțul din dreapta-jos califică și direcționează cererea ta în timp real, pe același flux ca WhatsApp.',
    },
    next: {
      eyebrow: 'Ce urmează',
      items: [
        'Cererea este analizată în funcție de ruta aleasă.',
        'Echipa verifică potrivirea și poate cere detalii suplimentare.',
        'Pentru vânzători, pozele stocului se adaugă în flux; CUI-ul și prețurile se discută ulterior.',
      ],
    },
    direct: {
      eyebrow: 'Contact direct',
      email: 'Email',
      phone: 'Telefon',
      calendlyCta: 'Deschide Calendly',
    },
  },
  how: {
    eyebrow: 'Cum funcționează',
    title: 'Un flux simplu, confidențial, fără listări publice',
    lead: 'PalletClearance funcționează ca punct de pornire pentru loturi de clearance. Alegi ruta de vânzător sau cumpărător, trimiți detalii minime, iar noi calificăm și direcționăm confidențial.',
    seller: {
      eyebrow: 'Flux vânzător',
      title: 'Vinzi stoc',
      steps: [
        {
          title: 'Descrii stocul',
          body: 'Tip de stoc, categorie, cantitate, locație și dacă ai nevoie de gestionare confidențială. Pe WhatsApp sau cu asistentul AI.',
        },
        {
          title: 'Adaugi pozele',
          body: 'Pozele stocului sunt obligatorii pentru calificare și se adaugă în flux, nu pe site-ul public. Fără poze, lotul nu avansează.',
        },
        {
          title: 'Analiză privată',
          body: 'Echipa verifică potrivirea și, dacă e cazul, cere detalii suplimentare despre termen, ambalare sau logistică.',
        },
        {
          title: 'Direcționare controlată',
          body: 'Lotul este propus doar cumpărătorilor B2B calificați relevanți. Nimic nu devine public fără acordul tău.',
        },
      ],
    },
    buyer: {
      eyebrow: 'Flux cumpărător',
      title: 'Cumperi loturi',
      steps: [
        {
          title: 'Îți construiești profilul',
          body: 'Ne spui ce categorii cumperi, volumul obișnuit și piața de livrare. Pe WhatsApp sau cu asistentul AI.',
        },
        {
          title: 'Calificarea cumpărătorului',
          body: 'Verificăm profilul B2B pentru a-ți transmite doar oportunitățile relevante, nu zgomot.',
        },
        {
          title: 'Primești oportunități potrivite',
          body: 'Când apare un lot relevant, îl primești confidențial, cu detaliile necesare deciziei.',
        },
        {
          title: 'Negociere controlată',
          body: 'Condițiile comerciale se convin direct între părțile relevante, sub direcționarea desk-ului.',
        },
      ],
    },
    note: {
      eyebrow: 'De reținut',
      title: 'Pozele stocului sunt obligatorii pentru vânzători',
      body: 'Un lot de vânzare nu avansează fără poze. Pozele se adaugă în fluxul de calificare (widget sau WhatsApp), nu pe pagina publică — și rămân confidențiale până când aprobi transmiterea lor.',
    },
    cta: {
      title: 'Gata să începi?',
      copy: 'Un mesaj scurt e suficient pentru primul pas — ca vânzător sau cumpărător.',
      primary: 'Scrie-ne pe WhatsApp',
      secondary: 'Vezi opțiunile de contact',
    },
  },
  footer: {
    tagline:
      'Birou B2B pentru clearance și overstock — vânzare și cumpărare de loturi, confidențial. Operat în ecosistemul EURO INTERMED SOLUTIONS.',
    explore: 'Explorează',
    ecosystem: 'Ecosistem',
    legal: 'Legal',
    contact: 'Contact',
    linkHow: 'Cum funcționează',
    linkContact: 'Contact',
    privacy: 'Politică de confidențialitate',
    terms: 'Termeni și condiții',
    gdpr: 'GDPR & ștergerea datelor',
    legalNote: 'Textele juridice sunt în curs de revizuire finală înainte de lansarea publică.',
    rights: '© 2026 EURO INTERMED SOLUTIONS',
    reg: 'Reg. Com.: J8/735/2018 · CUI: 39132147',
  },
  cookie: {
    message:
      'Folosim cookie-uri de analiză pentru a înțelege traficul. Nu se activează fără acordul tău.',
    accept: 'Accept',
    reject: 'Refuz',
    label: 'Consimțământ cookie',
  },
  theme: { toggle: 'Schimbă tema', light: 'Temă deschisă', dark: 'Temă întunecată' },
  notFound: {
    title: 'Pagina nu a fost găsită',
    body: 'Pagina căutată nu există sau a fost mutată. Revino la pagina principală.',
    cta: 'Înapoi la pagina principală',
  },
  legal: {
    backToSite: 'Înapoi la site',
    updated: 'Ultima actualizare',
  },
}

const en: typeof ro = {
  meta: {
    homeTitle:
      'PalletClearance.eu | Sell overstock · Source clearance lots B2B',
    homeDescription:
      'PalletClearance connects companies with stock to move — overstock, returns, near-expiry, liquidation — to qualified B2B buyers. A confidential flow.',
    howTitle: 'How it works | Selling & buying lots — PalletClearance.eu',
    howDescription:
      'The seller and buyer flow for clearance lots, step by step. No public listings, no visible prices — everything confidential and B2B-qualified.',
    contactTitle: 'Contact | PalletClearance.eu',
    contactDescription:
      'Continue on WhatsApp with your request pre-filled or talk to the AI assistant. Sell stock, buy lots or enter the Romanian market.',
    notFoundTitle: 'Page not found | PalletClearance.eu',
  },
  brand: {
    name: 'PalletClearance.eu',
    tagline: 'Clearance & Overstock',
    mark: 'PC',
  },
  nav: {
    skip: 'Skip to content',
    home: 'Home',
    how: 'How it works',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Message us on WhatsApp',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  hero: {
    badge: 'B2B only · Clearance · Overstock · Near-expiry · Liquidation',
    title: 'Sell overstock. Source clearance.',
    lead: 'PalletClearance connects companies with clearance, overstock or surplus stock to the right B2B buyers. No public listings and no visible prices — every lot is qualified and routed confidentially.',
    sell: 'Sell stock',
    buy: 'Buy lots',
    whatsapp: 'Message us on WhatsApp',
    whatsappText:
      'Hello. I want to discuss clearance/overstock stock via PalletClearance. Role (sell/buy): ___ · Category: ___ · Quantity: ___',
    sellWaText:
      'Hello. I want to sell clearance/overstock stock via PalletClearance. Category: ___ · Quantity: ___ · Location: ___ · Shelf life (if any): ___',
    buyWaText:
      'Hello. I am a B2B buyer looking for clearance/overstock lots via PalletClearance. Categories: ___ · Usual volume: ___ · Delivery market: ___',
    trustLine:
      'Food · Non-food · FMCG · Near-expiry · Surplus · Confidential, no public exposure',
    panel: {
      kicker: 'Confidential flow · example',
      status: 'Qualifying',
      seller: { label: 'Seller stock', value: 'Private review' },
      buyer: { label: 'Buyer profile', value: 'Controlled routing' },
      route: { label: 'Romania route', value: 'Euro Intermed review' },
      note: 'No open browsing. No public stock exposure.',
    },
  },
  paths: {
    eyebrow: 'Choose your route',
    title: 'Two flows, one principle: confidentiality',
    copy: 'Selling stock or buying lots? Pick the route that fits. The flow asks only the information needed to qualify the opportunity.',
    seller: {
      tag: 'Seller',
      title: 'Sell stock',
      body: 'For blocked, slow-moving, surplus, near-expiry or liquidation stock. Tell us what you have and where it is; we qualify it and route it confidentially.',
      points: [
        'Blocked, slow-moving or surplus stock',
        'Near-expiry, end-of-line or returns',
        'Fast stock liquidation',
      ],
      note: 'Your stock details are not made public.',
      cta: 'Start as a seller',
    },
    buyer: {
      tag: 'Buyer',
      title: 'Buy lots',
      body: 'For qualified B2B buyers looking for relevant clearance lots. Tell us the categories you buy, your volume and market; you only get opportunities that fit.',
      points: [
        'Food, non-food and FMCG lots',
        'Your choice of volume and delivery market',
        'Opportunities shared only after qualification',
      ],
      note: 'Opportunities are shared only with qualified buyers.',
      cta: 'Start as a buyer',
    },
  },
  handle: {
    eyebrow: 'What we handle',
    title: 'Clearance and surplus lots we can qualify',
    copy: 'We handle food, non-food, FMCG and raw-material stock where a qualified B2B flow is more appropriate than public exposure. No public catalog — only qualification and routing.',
    items: [
      {
        tag: 'Food stock',
        name: 'Food products, ingredients and mixed lots',
        body: 'Ambient products, ingredients, beverages, sweets, canned goods, mixed lots and short shelf-life stock.',
      },
      {
        tag: 'Non-food stock',
        name: 'FMCG, hygiene, cosmetics and home care',
        body: 'Hygiene products, cosmetics, home care, cleaning products, pet products, packaging and mixed pallets.',
      },
      {
        tag: 'Romania route',
        name: 'Regular stock, private label and market testing',
        body: 'For European suppliers looking to test products in Romania or find local B2B partners.',
      },
    ],
  },
  confidential: {
    eyebrow: 'A controlled B2B flow',
    title: 'No public listings. No visible prices. No random browsing.',
    copy: 'Clearance stock is commercially sensitive. Sellers may need confidentiality, buyers need relevant opportunities, and terms depend on volume, location, urgency and stock context.',
    benefits: [
      'Protects seller confidentiality',
      'Filters out unqualified buyer noise',
      'Routes only relevant opportunities',
      'Keeps negotiation under control',
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Qualification first, then routing',
    steps: [
      {
        title: 'Choose your route',
        body: 'Seller or buyer. Each route starts the right flow on WhatsApp or with the AI assistant.',
      },
      {
        title: 'Send minimum details',
        body: 'Company, contact, category, volume and context. Stock photos are added in the flow, not on the site.',
      },
      {
        title: 'Private review',
        body: 'The team checks fit and may ask for additional details if needed.',
      },
      {
        title: 'Controlled routing',
        body: 'Relevant follow-up happens with qualified partners, not through public exposure.',
      },
    ],
    cta: 'See the full flow',
  },
  trust: {
    eyebrow: 'Trust',
    title: 'B2B, confidential and compliant',
    items: [
      {
        title: 'Confidential, no public listings',
        body: 'We do not publish your company name, prices, photos or stock details without your approval.',
      },
      {
        title: 'GDPR-compliant',
        body: 'Consent, GDPR rights and data deletion on request.',
      },
      {
        title: 'A real Romanian company',
        body: 'Operated in the EURO INTERMED SOLUTIONS ecosystem · J8/735/2018 · VAT 39132147 · Brașov.',
      },
    ],
  },
  ecosystem: {
    eyebrow: 'The Euro Intermed ecosystem',
    title: 'Wrong route? We point you the right way',
    copy: 'PalletClearance is the clearance and overstock channel. For standard or recurring supply, use the right channel in the ecosystem.',
    pillars: [
      {
        key: 'hub',
        badge: 'B2B hub',
        name: 'Euro Intermed',
        line: 'The central point that routes every request to the right channel.',
        cta: 'Open Euro Intermed',
        roadmap: false,
      },
      {
        key: 'angrosist',
        badge: 'B2B sourcing',
        name: 'Angrosist',
        line: 'Standard and recurring supply — raw materials, bulk products and FMCG.',
        cta: 'Open Angrosist',
        roadmap: false,
      },
      {
        key: 'skalyou',
        badge: 'In development',
        name: 'SkalYou',
        line: 'AI-assisted B2B scaling — in the works.',
        cta: 'About SkalYou',
        roadmap: true,
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked',
    title: 'Clarifications before the first contact',
    items: [
      {
        q: 'Are you a marketplace?',
        a: 'No. PalletClearance does not publish open stock lists, visible prices or checkout pages. Each opportunity is qualified and routed privately.',
      },
      {
        q: 'Can I see current offers?',
        a: 'Not publicly. Clearance opportunities are shared only with relevant qualified B2B buyers after the buyer profile is reviewed.',
      },
      {
        q: 'Why don’t you publish prices?',
        a: 'Clearance terms depend on stock type, quantity, location, urgency, shelf life, buyer profile and commercial conditions. We handle them through a qualified B2B flow.',
      },
      {
        q: 'Is my stock information confidential?',
        a: 'Yes. We do not publish your company name, prices, photos or stock details without your approval.',
      },
      {
        q: 'What if my stock is standard supply?',
        a: 'If it is standard or recurring supply, Angrosist.ro — the B2B sourcing channel of the Euro Intermed ecosystem — may be a better fit.',
      },
    ],
  },
  contactCta: {
    eyebrow: 'Start now',
    title: 'Have stock to sell or a buyer profile to register?',
    copy: 'Start with a short qualification flow. We route your request privately and come back with the relevant next step. VAT, documents and prices are discussed later.',
    primary: 'Message us on WhatsApp',
    secondary: 'See contact options',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Continue on WhatsApp',
    lead: 'No forms. Pick what describes your request and we prepare the WhatsApp message for you. You can also use the AI assistant in the corner of the page — the same flow, qualified in real time.',
    chooseLabel: 'Pick what describes your request',
    intentOptions: [
      {
        value: 'sell-overstock',
        label: 'Sell stock / overstock',
        wa: 'Hello. I want to sell clearance/overstock stock via PalletClearance. Category: ___ · Quantity: ___ · Location: ___ · Shelf life (if any): ___',
      },
      {
        value: 'near-expiry',
        label: 'Short shelf-life stock',
        wa: 'Hello. I have near-expiry stock to move via PalletClearance. Category: ___ · Quantity: ___ · Shelf life: ___ · Location: ___',
      },
      {
        value: 'buy-clearance',
        label: 'Buy clearance lots',
        wa: 'Hello. I am a B2B buyer looking for clearance/overstock lots. Categories: ___ · Usual volume: ___ · Delivery market: ___',
      },
      {
        value: 'liquidation',
        label: 'Stock liquidation',
        wa: 'Hello. I have a stock liquidation to move fast via PalletClearance. Category: ___ · Quantity: ___ · Deadline: ___ · Location: ___',
      },
      {
        value: 'market-entry',
        label: 'Enter the Romanian market',
        wa: 'Hello. I am a European supplier and want to enter the Romanian market. Product category: ___ · Stock type (clearance/standard): ___',
      },
      {
        value: 'other-b2b',
        label: 'Another B2B opportunity',
        wa: 'Hello. I have a B2B clearance/overstock opportunity and want to talk to Euro Intermed. Details: ___',
      },
    ],
    whatsapp: {
      helper: 'The WhatsApp message pre-fills based on the route you choose.',
      cta: 'Message us on WhatsApp',
    },
    widget: {
      eyebrow: 'B2B assistant',
      title: 'Or talk to the AI assistant',
      body: 'The assistant in the bottom-right corner qualifies and routes your request in real time, on the same flow as WhatsApp.',
    },
    next: {
      eyebrow: 'What happens next',
      items: [
        'The request is reviewed based on the chosen route.',
        'The team checks fit and may ask for more details.',
        'For sellers, stock photos are added in the flow; VAT and prices are discussed later.',
      ],
    },
    direct: {
      eyebrow: 'Direct contact',
      email: 'Email',
      phone: 'Phone',
      calendlyCta: 'Open Calendly',
    },
  },
  how: {
    eyebrow: 'How it works',
    title: 'A simple, confidential flow — no public listings',
    lead: 'PalletClearance works as a starting point for clearance lots. You choose the seller or buyer route, send minimum details, and we qualify and route confidentially.',
    seller: {
      eyebrow: 'Seller flow',
      title: 'You sell stock',
      steps: [
        {
          title: 'Describe the stock',
          body: 'Stock type, category, quantity, location and whether confidential handling matters. On WhatsApp or with the AI assistant.',
        },
        {
          title: 'Add the photos',
          body: 'Stock photos are mandatory for qualification and are added in the flow, not on the public site. Without photos, the lot does not advance.',
        },
        {
          title: 'Private review',
          body: 'The team checks fit and, where needed, asks for more details on shelf life, packaging or logistics.',
        },
        {
          title: 'Controlled routing',
          body: 'The lot is offered only to relevant qualified B2B buyers. Nothing becomes public without your approval.',
        },
      ],
    },
    buyer: {
      eyebrow: 'Buyer flow',
      title: 'You buy lots',
      steps: [
        {
          title: 'Build your profile',
          body: 'Tell us the categories you buy, your usual volume and delivery market. On WhatsApp or with the AI assistant.',
        },
        {
          title: 'Buyer qualification',
          body: 'We review the B2B profile so we send you only relevant opportunities, not noise.',
        },
        {
          title: 'Get matching opportunities',
          body: 'When a relevant lot appears, you receive it confidentially, with the details you need to decide.',
        },
        {
          title: 'Controlled negotiation',
          body: 'Commercial terms are agreed directly between the relevant parties, under the desk’s routing.',
        },
      ],
    },
    note: {
      eyebrow: 'Good to know',
      title: 'Stock photos are mandatory for sellers',
      body: 'A selling lot does not advance without photos. Photos are added inside the qualification flow (widget or WhatsApp), not on the public page — and stay confidential until you approve sharing them.',
    },
    cta: {
      title: 'Ready to start?',
      copy: 'A short message is enough for the first step — as a seller or a buyer.',
      primary: 'Message us on WhatsApp',
      secondary: 'See contact options',
    },
  },
  footer: {
    tagline:
      'A B2B desk for clearance and overstock — buying and selling lots, confidentially. Operated in the EURO INTERMED SOLUTIONS ecosystem.',
    explore: 'Explore',
    ecosystem: 'Ecosystem',
    legal: 'Legal',
    contact: 'Contact',
    linkHow: 'How it works',
    linkContact: 'Contact',
    privacy: 'Privacy policy',
    terms: 'Terms & conditions',
    gdpr: 'GDPR & data deletion',
    legalNote: 'The legal texts are under final review before public launch.',
    rights: '© 2026 EURO INTERMED SOLUTIONS',
    reg: 'Reg. No.: J8/735/2018 · VAT: 39132147',
  },
  cookie: {
    message:
      'We use analytics cookies to understand traffic. They stay off until you agree.',
    accept: 'Accept',
    reject: 'Decline',
    label: 'Cookie consent',
  },
  theme: { toggle: 'Switch theme', light: 'Light theme', dark: 'Dark theme' },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved. Return to the home page.',
    cta: 'Back to the home page',
  },
  legal: {
    backToSite: 'Back to site',
    updated: 'Last updated',
  },
}

export const ui: Record<Locale, typeof ro> = { ro, en }
