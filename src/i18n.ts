// ============================================
// SUNBITE — Bilingual content (EN / DE)
// Swiss German note: use "ss" not "ß" (Strasse, not Straße)
// ============================================

export type Lang = 'en' | 'de'

export const LANGS: Lang[] = ['en', 'de']

export type MenuItem = { name: string; desc: string; tag: string }

export type Content = {
  nav: { menu: string; story: string; findUs: string; instagram: string }
  hero: {
    slogan: string
    title: string
    subtitle: string
    cta: string
    ctaSub: string
  }
  menu: { eyebrow: string; title: string; subtitle: string; items: MenuItem[] }
  story: { eyebrow: string; title: string; body: string }
  findUs: { eyebrow: string; title: string; body: string; cta: string }
  footer: { tagline: string; rights: string; builtBy: string }
}

export const content: Record<Lang, Content> = {
  en: {
    nav: {
      menu: 'Menu',
      story: 'Story',
      findUs: 'Find Us',
      instagram: 'Instagram',
    },
    hero: {
      slogan: 'Made for Sunny Days',
      title: 'Strawberry Chocolate Cups',
      subtitle:
        'Fresh strawberries, melted chocolate and a little bit of summer — served on two wheels across Switzerland.',
      cta: 'Follow us on Instagram',
      ctaSub: 'See where the bike is today',
    },
    menu: {
      eyebrow: 'Our Menu',
      title: 'Small menu. Done right.',
      subtitle:
        'No shortcuts, no fuss — just real fruit, real chocolate and ice-cold lemonade.',
      items: [
        {
          name: 'Strawberry Chocolate Cups',
          desc: 'Juicy strawberries, rich melted chocolate and a crunch of nuts. Our signature cup — the one everyone comes back for.',
          tag: 'Signature',
        },
        {
          name: 'Fresh Lemonade',
          desc: 'Ice-cold and freshly squeezed. The perfect sidekick for a sunny afternoon.',
          tag: 'Refreshing',
        },
      ],
    },
    story: {
      eyebrow: 'Our Story',
      title: 'A premium street dessert on two wheels.',
      body: 'Sunbite parks where the sun shines and people gather — bringing freshly made Strawberry Chocolate Cups and homemade lemonade to the streets of Switzerland. No shortcuts, ever. Just real fruit, real chocolate, and the kind of treat that makes an ordinary day feel a little brighter.',
    },
    findUs: {
      eyebrow: 'Find Us',
      title: 'We move with the sun.',
      body: 'The Sunbite bike is always on the move. Follow us on Instagram to find out where we are parked today.',
      cta: 'Find us on Instagram',
    },
    footer: {
      tagline: 'Made for sunny days.',
      rights: 'All rights reserved.',
      builtBy: 'Site by Real Vision',
    },
  },
  de: {
    nav: {
      menu: 'Menü',
      story: 'Story',
      findUs: 'Finde uns',
      instagram: 'Instagram',
    },
    hero: {
      slogan: 'Made for Sunny Days',
      title: 'Strawberry Chocolate Cups',
      subtitle:
        'Frische Erdbeeren, geschmolzene Schokolade und ein Stück Sommer — serviert auf zwei Rädern in der ganzen Schweiz.',
      cta: 'Folge uns auf Instagram',
      ctaSub: 'Sieh, wo der Bike heute steht',
    },
    menu: {
      eyebrow: 'Unser Menü',
      title: 'Kleines Menü. Richtig gemacht.',
      subtitle:
        'Keine Abkürzungen, kein Schnickschnack — nur echte Früchte, echte Schokolade und eiskalte Limonade.',
      items: [
        {
          name: 'Strawberry Chocolate Cups',
          desc: 'Saftige Erdbeeren, cremige geschmolzene Schokolade und knusprige Nüsse. Unser Signature-Becher — der, für den alle wiederkommen.',
          tag: 'Signature',
        },
        {
          name: 'Fresh Lemonade',
          desc: 'Eiskalt und frisch gepresst. Der perfekte Begleiter für einen sonnigen Nachmittag.',
          tag: 'Erfrischend',
        },
      ],
    },
    story: {
      eyebrow: 'Unsere Story',
      title: 'Ein Premium-Street-Dessert auf zwei Rädern.',
      body: 'Sunbite steht dort, wo die Sonne scheint und Menschen zusammenkommen — mit frisch zubereiteten Strawberry Chocolate Cups und hausgemachter Limonade auf den Strassen der Schweiz. Keine Abkürzungen. Nur echte Früchte, echte Schokolade und ein Genuss, der den Tag ein bisschen heller macht.',
    },
    findUs: {
      eyebrow: 'Finde uns',
      title: 'Wir ziehen mit der Sonne.',
      body: 'Der Sunbite-Bike ist ständig unterwegs. Folge uns auf Instagram und finde heraus, wo wir heute stehen.',
      cta: 'Auf Instagram finden',
    },
    footer: {
      tagline: 'Made for sunny days.',
      rights: 'Alle Rechte vorbehalten.',
      builtBy: 'Website von Real Vision',
    },
  },
}

// Single source of truth for external links (update when confirmed)
export const links = {
  instagram: 'https://instagram.com/sunbite.ch', // TODO: confirm handle with Romana
}
