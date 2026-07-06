import { useEffect, useState } from 'react'
import { useLanguage } from '../LanguageContext'
import logo from '../assets/logo-wordmark-tight.png'

export function Header() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onDark = !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-soft/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center px-5 py-5 md:py-6">

        {/* Left — logo + nav as one cohesive unit */}
        <div className="flex items-center gap-8 md:gap-14 lg:gap-20">
          {/* Logo sits in a fixed-width slot so growing it extends rightward
              without pushing the nav away from its anchored position */}
          <a href="#top" className="flex w-[110px] shrink-0 items-center sm:w-[160px] md:w-[190px] lg:w-[240px]">
            <div className={`flex shrink-0 items-center rounded-xl transition-colors duration-300 ${onDark ? '' : 'bg-brand px-3.5 py-1'}`}>
              <img
                src={logo}
                alt="Sunbite.ch"
                width={1255}
                height={507}
                className="h-14 w-auto shrink-0 object-contain sm:h-20 lg:h-24"
              />
            </div>
          </a>

          {/* Nav links — desktop */}
          <nav className={`hidden items-center gap-5 whitespace-nowrap text-[15px] font-semibold md:flex lg:gap-8 ${onDark ? 'text-cream/85' : 'text-ink/70'}`}>
            <a href="#about"   className="transition-colors hover:text-brand">{t.nav.about}</a>
            <a href="#gallery" className="transition-colors hover:text-brand">{t.nav.gallery}</a>
            <a href="#find-us" className="transition-colors hover:text-brand">{t.nav.findUs}</a>
            <a href="/eroffnung" className="transition-colors hover:text-brand">{t.nav.book}</a>
          </nav>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-3 pl-4 sm:gap-4 sm:pl-6 lg:gap-5 lg:pl-10">
          {/* Language switch */}
          <div className={`hidden items-center rounded-full border p-0.5 text-xs font-bold uppercase sm:flex ${onDark ? 'border-cream/30' : 'border-brand/25'}`}>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'en'
                  ? onDark ? 'bg-cream text-brand' : 'bg-brand text-cream'
                  : onDark ? 'text-cream/60' : 'text-ink/50'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('de')}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === 'de'
                  ? onDark ? 'bg-cream text-brand' : 'bg-brand text-cream'
                  : onDark ? 'text-cream/60' : 'text-ink/50'
              }`}
            >
              DE
            </button>
          </div>

          {/* Book CTA */}
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-[1.03] active:scale-95"
          >
            {t.nav.bookCTA}
          </a>
        </div>
      </div>
    </header>
  )
}
