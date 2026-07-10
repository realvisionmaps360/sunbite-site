// ============================================
// SUNBITE — Website Copy (EN / DE)
// DE is a localisation, not a literal translation — tone matters more
// than word-for-word accuracy. Swiss German: use "ss", never "ß".
// ============================================

export type Lang = 'en' | 'de'

const en = {
  nav: {
    about:   'About',
    gallery: 'Gallery',
    findUs:  'Find Us',
    book:    'Opening',
    bookCTA: 'Book SUNBITE',
    bookPrompt: 'Write us to book:',
    copy:    'Copy',
    copied:  'Copied!',
  },

  hero: {
    headline:     'The strawberry cup worth chasing.',
    openingLead:  'SUNBITE opens on July 18.',
    subheadline:  'Celebrate the first SUNBITE evening with us — fresh strawberries, Swiss chocolate and summer vibes by the Aare.',
    eventMeta:    'July 18 · from 19:30 · Aarau',
    primaryCTA:   'View Invitation',
    secondaryCTA: 'Book SUNBITE',
  },

  product: {
    eyebrow:   'Strawberry Chocolate Cups',
    headline:  'One thing.\nDone perfectly.',
    body:      "We don't offer a long menu. We focus on one product and prepare it with the care it deserves. Fresh strawberries. Premium Swiss chocolate. Prepared fresh for every customer.",
    pullQuote: 'These are not ordinary chocolate strawberries.',
  },

  ingredients: {
    eyebrow:  'What Goes Into Every Cup',
    headline: 'Every ingredient is a decision.',
    blocks: [
      {
        title: 'Premium Swiss Chocolate',
        body:  'Not any chocolate. Switzerland sets the standard — and that is the only standard we accept.',
      },
      {
        title: 'Fresh Strawberries',
        body:  'Local when possible. Seasonal always. Never frozen, never compromised.',
      },
      {
        title: 'Prepared Fresh',
        body:  'Every cup is made for the person standing in front of us. Not before. Not in advance.',
      },
    ],
    closing: 'No shortcuts. No compromises.',
  },

  romana: {
    eyebrow:  'Meet Romana',
    headline: "Hi, I'm Romana.",
    body:     "I didn't start SUNBITE to sell desserts. I started it because I believe small moments deserve to be exceptional — a warm afternoon, something beautiful to eat, a reason to smile.\n\nEverything at SUNBITE is made the way I would want to receive it: with real ingredients, real care, and no shortcuts. That's the only way I know how to do this.",
    photoAlt: 'Romana, founder of SUNBITE',
  },

  findUs: {
    eyebrow:    'Find Sunbite',
    headline:   'We move.\nHere\'s how to find us.',
    leftTitle:  'Next Appearances',
    noEvents:   'New dates coming soon — follow us on Instagram for the first announcement.',
    rightTitle: 'Real-time updates',
    rightBody:  "Can't see your date? We post every new location on Instagram first.",
    cta:        'Follow @sunbite.ch',
  },

  book: {
    eyebrow:    'SUNBITE · OCCASIONS',
    headline:   'Every occasion, a little sweeter',
    body:       "Wherever the celebration takes you, our Swiss strawberry-chocolate bike rolls up to make the moment unforgettable.",
    categories: [
      { label: 'Weddings',             tagline: 'Make your most beautiful day even sweeter.' },
      { label: 'Birthdays',            tagline: 'Another year worth celebrating, one bite at a time.' },
      { label: 'Corporate Events',     tagline: 'Treat your team to something handcrafted and Swiss.' },
      { label: 'Festivals',            tagline: 'Sun-warmed strawberries and chocolate, on two wheels.' },
      { label: 'Private Celebrations', tagline: 'Intimate gatherings deserve an unforgettable finish.' },
      { label: 'Markets',              tagline: 'Find the bike, follow the aroma, taste the summer.' },
    ],
    cta:   'Request Event Booking',
    trust: 'We respond within 24 hours.',
  },

  gallery: {
    eyebrow:  'Moments with Sunbite',
    headline: 'See what a sunny day looks like.',
    cta:      'Follow @sunbite.ch on Instagram',
  },

  faq: {
    eyebrow:  'Questions',
    headline: 'Good questions.\nHonest answers.',
    items: [
      {
        q: 'Can I book SUNBITE for private events?',
        a: 'Absolutely. SUNBITE is available for birthdays, weddings, corporate events, festivals, and private celebrations. Use the booking form above and we will get back to you within 24 hours.',
      },
      {
        q: 'Where can I find SUNBITE next?',
        a: 'Check the "Find Sunbite" section above for upcoming appearances. For real-time updates and surprise locations, follow us on Instagram @sunbite.ch.',
      },
      {
        q: 'Which chocolate do you use?',
        a: 'Premium Swiss chocolate. We source quality Swiss chocolate — because when the product is this simple, every ingredient has to be exceptional.',
      },
      {
        q: 'Are the cups prepared fresh?',
        a: 'Always. Every Strawberry Chocolate Cup is prepared fresh for the customer standing in front of us. We do not prepare in advance.',
      },
      {
        q: 'How far in advance should I book for an event?',
        a: 'We recommend reaching out at least 4–6 weeks before your event to confirm availability. For peak season and weddings, earlier is better.',
      },
      {
        q: 'Do you travel to events outside Aarau?',
        a: 'Yes. We travel to events and markets across the region. Get in touch with your event details and we will confirm availability and any travel considerations.',
      },
    ],
  },

  finalCTA: {
    headline: 'Ready for your\nnext sunny moment?',
    find:     'See Next Locations',
    book:     'Book SUNBITE',
    follow:   'Follow on Instagram',
  },

  footer: {
    slogan:  'Made for Sunny Days.',
    contact: 'info.sunbite@gmail.com',
    rights:  'All rights reserved.',
    builtBy: 'Site by Real Vision',
  },
}

const de: typeof en = {
  nav: {
    about:   'Über SUNBITE',
    gallery: 'Galerie',
    findUs:  'Finde uns',
    book:    'Eröffnung',
    bookCTA: 'SUNBITE buchen',
    bookPrompt: 'Schreib uns für deine Buchung:',
    copy:    'Kopieren',
    copied:  'Kopiert!',
  },

  hero: {
    headline:     'Der Geschmack des Sommers.',
    openingLead:  'SUNBITE eröffnet am 18. Juli.',
    subheadline:  'Feiere mit uns den ersten SUNBITE-Abend mit frischen Erdbeeren, Schweizer Schokolade und Sommerstimmung an der Aare.',
    eventMeta:    '18. Juli · ab 19:30 · Aarau',
    primaryCTA:   'Einladung ansehen',
    secondaryCTA: 'SUNBITE buchen',
  },

  product: {
    eyebrow:   'Erdbeeren & Schokolade',
    headline:  'Eine Idee.\nPerfekt umgesetzt.',
    body:      'Wir bieten keine grosse Speisekarte. Wir konzentrieren uns auf ein einziges Produkt – und bereiten jeden Becher mit der Sorgfalt zu, die er verdient. Frische Erdbeeren. Schweizer Premium-Schokolade. Frisch zubereitet für jeden einzelnen Gast.',
    pullQuote: 'Das sind keine gewöhnlichen Schoko-Erdbeeren.',
  },

  ingredients: {
    eyebrow:  'Was in jedem Becher steckt',
    headline: 'Jede Zutat ist eine Entscheidung.',
    blocks: [
      {
        title: 'Schweizer Premium-Schokolade',
        body:  'Nicht irgendeine Schokolade. Schweizer Qualität setzt den Massstab – und genau diesen verwenden wir.',
      },
      {
        title: 'Frische Erdbeeren',
        body:  'Wenn möglich regional. Immer saisonal. Nie tiefgekühlt.',
      },
      {
        title: 'Frisch zubereitet',
        body:  'Jeder Becher wird erst nach deiner Bestellung zubereitet. Nie im Voraus.',
      },
    ],
    closing: 'Alles, was ein guter Moment braucht.',
  },

  romana: {
    eyebrow:  'Das bin ich',
    headline: 'Salü, ich bin Romana.\nSchön dass du da bist.',
    body:     'Ich glaube, dass die schönsten Erinnerungen selten geplant sind. Sie entstehen an warmen Sommertagen, beim Lachen mit Freunden oder in den kleinen Momenten dazwischen.\n\nGenau aus diesem Gedanken ist SUNBITE entstanden. Ein Ort für frische Erdbeeren, gute Gespräche und das schöne Gefühl, den Sommer für einen Moment anzuhalten.\n\nWenn du mit einem Lächeln weitergehst, dann habe ich genau das erreicht, was ich mir für SUNBITE wünsche.',
    photoAlt: 'Romana, Gründerin von SUNBITE',
  },

  findUs: {
    eyebrow:    'Finde Sunbite',
    headline:   'Wir sind unterwegs.\nSo findest du uns.',
    leftTitle:  'Nächste Standorte',
    noEvents:   'Neue Termine folgen bald. Folge uns auf Instagram und erfahre dort als Erste oder Erster, wo wir als Nächstes sind.',
    rightTitle: 'Immer aktuell',
    rightBody:  'Alle neuen Standorte veröffentlichen wir zuerst auf Instagram.',
    cta:        '@sunbite.ch folgen',
  },

  book: {
    eyebrow:    'Sunbite für besondere Momente',
    headline:   'Jeder Anlass wird ein bisschen süsser.',
    body:       'Ob Hochzeit, Geburtstag oder Firmenanlass – unser Foodbike bringt frische Erdbeeren und Schweizer Schokolade direkt zu deinem Event.',
    categories: [
      { label: 'Hochzeiten',       tagline: 'Macht deinen schönsten Tag noch süsser.' },
      { label: 'Geburtstage',      tagline: 'Ein weiteres Jahr, das gefeiert werden darf.' },
      { label: 'Firmenanlässe',    tagline: 'Etwas Handgemachtes für dein Team.' },
      { label: 'Festivals',        tagline: 'Sonnenwarme Erdbeeren, mitten im Geschehen.' },
      { label: 'Private Feiern',   tagline: 'Auch kleine Momente verdienen etwas Besonderes.' },
      { label: 'Märkte',           tagline: 'Folge dem Duft, finde das Bike.' },
    ],
    cta:   'Event anfragen',
    trust: 'Antwort innerhalb von 24 Stunden.',
  },

  gallery: {
    eyebrow:  'Momente mit Sunbite',
    headline: 'So schmeckt ein sonniger Tag.',
    cta:      '@sunbite.ch auf Instagram folgen',
  },

  faq: {
    eyebrow:  'Fragen',
    headline: 'Gute Fragen.\nEhrliche Antworten.',
    items: [
      {
        q: 'Kann ich SUNBITE für private Anlässe buchen?',
        a: 'Ja. SUNBITE kann für Geburtstage, Hochzeiten, Firmenanlässe, Festivals und private Feiern gebucht werden. Nutze einfach das Buchungsformular – wir melden uns innerhalb von 24 Stunden bei dir.',
      },
      {
        q: 'Wo finde ich SUNBITE als Nächstes?',
        a: 'Schau im Abschnitt „Finde Sunbite” weiter oben nach den nächsten Terminen. Für aktuelle Updates und spontane Standorte folge uns auf Instagram @sunbite.ch.',
      },
      {
        q: 'Welche Schokolade verwendet ihr?',
        a: 'Schweizer Premium-Schokolade. Wir setzen auf erstklassige Schweizer Qualität – denn wenn das Produkt so einfach ist, muss jede Zutat aussergewöhnlich sein.',
      },
      {
        q: 'Werden die Becher frisch zubereitet?',
        a: 'Immer. Jeder Strawberry Chocolate Cup wird frisch für die Person zubereitet, die vor uns steht. Nie im Voraus.',
      },
      {
        q: 'Wie früh sollte ich buchen?',
        a: 'Wir empfehlen, dich mindestens 4–6 Wochen vor deinem Anlass zu melden, um die Verfügbarkeit zu sichern. Für die Hochsaison und Hochzeiten gilt: je früher, desto besser.',
      },
      {
        q: 'Kommt ihr auch ausserhalb von Aarau?',
        a: 'Ja. Wir sind an Events und Märkten in der ganzen Region unterwegs. Schreib uns die Details zu deinem Anlass, und wir bestätigen dir Verfügbarkeit und allfällige Anfahrtsdetails.',
      },
    ],
  },

  finalCTA: {
    headline: 'Lust auf SUNBITE?',
    find:     'Finde uns',
    book:     'SUNBITE buchen',
    follow:   'Instagram folgen',
  },

  footer: {
    slogan:  'Made for Sunny Days.',
    contact: 'info.sunbite@gmail.com',
    rights:  'Alle Rechte vorbehalten.',
    builtBy: 'Website von Real Vision',
  },
}

export const content: Record<Lang, typeof en> = { en, de }
