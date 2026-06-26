import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import { links } from '../links'
import { InstagramIcon } from './Icons'
import cup    from '../assets/strawberry-cup.png'
import emblem from '../assets/emblem.jpg'
import sunny  from '../assets/made-for-sunny.jpg'
import cupsTitle from '../assets/cups-title.jpg'

const photos = [
  { src: cup,       alt: 'Strawberry Chocolate Cup', tall: true },
  { src: cupsTitle, alt: 'Strawberry Chocolate Cups',tall: false },
  { src: emblem,    alt: 'Sunbite menu board',        tall: false },
  { src: sunny,     alt: 'Made for Sunny Days',       tall: true },
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

        {/* Asymmetric 2-column grid */}
        <div className="mb-14 grid grid-cols-2 gap-4 md:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`overflow-hidden rounded-3xl ${photo.tall ? 'row-span-2' : ''}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                style={{ minHeight: photo.tall ? '400px' : '180px' }}
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
