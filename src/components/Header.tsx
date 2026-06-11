import { useEffect, useState } from 'react'
import { InstagramIcon } from './Icons'
import { links } from '../links'

export function Header() {
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-18">

        {/* Logo */}
        <a
          href="#top"
          className={`font-script text-2xl transition-colors ${onDark ? 'text-cream' : 'text-brand'}`}
        >
          Sunbite
        </a>

        {/* Nav links — desktop */}
        <nav className={`hidden items-center gap-8 text-sm font-semibold md:flex ${onDark ? 'text-cream/85' : 'text-ink/70'}`}>
          <a href="#about"   className="transition-colors hover:text-brand">About</a>
          <a href="#gallery" className="transition-colors hover:text-brand">Gallery</a>
          <a href="#find-us" className="transition-colors hover:text-brand">Find Us</a>
          <a href="#book"    className="transition-colors hover:text-brand">Book</a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language — DE is placeholder */}
          <div className={`hidden items-center rounded-full border p-0.5 text-xs font-bold uppercase sm:flex ${onDark ? 'border-cream/30' : 'border-brand/25'}`}>
            <span className={`rounded-full px-2.5 py-1 ${onDark ? 'bg-cream text-brand' : 'bg-brand text-cream'}`}>
              EN
            </span>
            <span className={`cursor-not-allowed px-2.5 py-1 opacity-35 ${onDark ? 'text-cream' : 'text-ink'}`} title="German version coming soon">
              DE
            </span>
          </div>

          {/* Book CTA */}
          <a
            href="#book"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-cream shadow-md transition-transform hover:scale-[1.03] active:scale-95"
          >
            Book SUNBITE
          </a>
        </div>
      </div>
    </header>
  )
}
