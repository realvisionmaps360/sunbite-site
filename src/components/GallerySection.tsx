import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'
import { InstagramIcon } from './Icons'

/*
 * Galerie-Fotos: einfach Bilddateien in  src/assets/gallery/  ablegen.
 * Alle .jpg/.jpeg/.png/.webp aus diesem Ordner werden automatisch geladen –
 * KEINE Import-Zeile und KEINE Liste mehr pflegen. Keine feste Obergrenze
 * (weit über 20 Fotos möglich). Die Reihenfolge folgt dem Dateinamen, darum
 * die Nummern-Präfixe 01-, 02-, … voranstellen (03-, 04- … für neue Fotos).
 */
const modules = import.meta.glob<{ default: string }>(
  '../assets/gallery/*.{jpg,jpeg,png,webp}',
  { eager: true },
)

// Passende Alt-Texte für die bekannten Fotos; neue Fotos bekommen einen
// sinnvollen Standard-Alt-Text (nach dem Datei-Basisnamen ohne Nummern-Präfix).
const altByName: Record<string, string> = {
  'cup-hand':          'Sunbite Erdbeer-Schoko-Becher',
  'bike':              'Das Sunbite.ch Foodbike',
  'crochet-deco':      'Gehäkelte Erdbeer-Deko am Sunbite Foodbike',
  'strawberries-bowl': 'Schale mit frischen Erdbeeren',
  'ingredients':       'Frische Zutaten – Erdbeeren & Schokolade',
  'chocolate-pour':    'Fliessende Schweizer Schokolade über frischen Erdbeeren',
  'counter':           'Die Sunbite Werkstation',
  'strawberry-field':  'Frisch gepflückte Erdbeere im Feld',
  'strawberry-boxes':  'Frische Erdbeeren in Schälchen',
  'stickers':          'Sunbite Erdbeeren-Sticker',
}

const photos = Object.keys(modules)
  .sort()
  .map((path) => {
    const file = path.split('/').pop() ?? ''
    const base = file.replace(/\.[^.]+$/, '').replace(/^\d+[-_]?/, '')
    return { src: modules[path].default, alt: altByName[base] ?? 'Sunbite.ch – Erdbeer-Schoko-Becher' }
  })

export function GallerySection() {
  const { t } = useLanguage()
  return (
    <section id="gallery" className="bg-cream-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-body text-xs font-bold uppercase tracking-[0.2em] text-brand/60">
            {t.gallery.eyebrow}
          </p>
          <h2 className="font-display text-4xl font-bold italic text-ink md:text-5xl">
            {t.gallery.headline}
          </h2>
        </motion.div>

        {/* 3-column editorial grid */}
        <div className="mb-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: Math.min((i % 3) * 0.05, 0.1) }}
              className="overflow-hidden rounded-2xl md:rounded-3xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand px-7 py-3.5 font-body text-sm font-bold text-brand transition-all hover:bg-brand hover:text-cream"
          >
            <InstagramIcon className="h-4 w-4" />
            {t.gallery.cta}
          </a>
        </motion.div>

      </div>
    </section>
  )
}
