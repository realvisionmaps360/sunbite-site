import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'
import { InstagramIcon } from './Icons'
import galleryCupHand    from '../assets/gallery-cup-hand.png'
import galleryBikeLeaves  from '../assets/gallery-bike-leaves.jpg'
import galleryBike        from '../assets/gallery-bike.jpg'
import galleryCupTray     from '../assets/gallery-cup-tray.jpg'
import galleryIngredients from '../assets/gallery-ingredients.jpg'
import galleryCounter     from '../assets/gallery-counter.jpg'
import galleryStickers    from '../assets/gallery-stickers.jpg'

const photos = [
  { src: galleryCupHand,    alt: 'Sunbite Erdbeer-Schoko-Becher' },
  { src: galleryBikeLeaves, alt: 'Das Sunbite.ch Foodbike im Park' },
  { src: galleryBike,       alt: 'Das Sunbite.ch Foodbike' },
  { src: galleryCupTray,    alt: 'Sunbite Erdbeer-Schoko-Becher auf Tablett' },
  { src: galleryIngredients, alt: 'Frische Zutaten – Erdbeeren & Schokolade' },
  { src: galleryCounter,    alt: 'Die Sunbite Werkstation' },
  { src: galleryStickers,   alt: 'Sunbite Erdbeeren-Sticker' },
]

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
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl md:rounded-3xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
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
