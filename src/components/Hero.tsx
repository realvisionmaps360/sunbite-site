import { motion } from 'framer-motion'
import { useLanguage } from '../LanguageContext'
import cup from '../assets/hero-cup-photo.png'

export function Hero() {
  const { t, lang } = useLanguage()
  return (
    <section id="top" className="warm-glow relative min-h-svh overflow-hidden bg-brand">

      {/* Background texture — subtle warm grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
      />

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-8 px-5 pt-24 pb-16 md:grid-cols-2 md:gap-12 md:pt-0">

        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="md:-translate-y-4"
        >
          <h1 className="mb-5 font-display text-4xl font-bold italic leading-tight text-cream md:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>

          <p className="mb-2 max-w-sm text-lg font-semibold leading-snug text-cream md:text-xl">
            {t.hero.openingLead}
          </p>

          <p className="mb-5 max-w-sm text-base leading-relaxed text-cream/75 md:text-lg">
            {t.hero.subheadline}
          </p>

          <p className="mb-10 text-sm font-semibold tracking-wide text-cream/90">
            {t.hero.eventMeta}
          </p>

          <div className="flex">
            <a
              href={lang === 'de' ? '/eroeffnung/' : '/opening/'}
              className="inline-flex items-center justify-center rounded-full bg-cream px-7 py-4 font-body text-base font-bold text-brand shadow-lg transition-transform hover:scale-[1.03] active:scale-95"
            >
              {t.hero.primaryCTA}
            </a>
          </div>
        </motion.div>

        {/* Right — product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center md:justify-end"
        >
          {/* Replace src with food bike photo when available */}
          <img
            src={cup}
            alt="Sunbite Strawberry Chocolate Cups"
            className="w-64 rounded-[2rem] object-cover shadow-2xl ring-4 ring-[#25441f] ring-offset-2 ring-offset-[#25441f]/40 md:w-80 lg:w-96"
          />
        </motion.div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-cream/40">
          <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
