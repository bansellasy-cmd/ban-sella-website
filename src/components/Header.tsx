import { useState, useEffect } from 'react'

// Menu sourced from first design (layout, colors, animations, hover, mobile menu).
// Order/labels updated as required:
//   1. الرئيسية   2. النكهات   3. لحظاتك   4. معرضنا   5. من نحن   6. تواصل معنا
const navLinks = [
  { label: 'الرئيسية',     href: '#hero' },
  { label: 'النكهات',      href: '#flavors' },
  { label: 'لحظاتك',       href: '#moments' },
  { label: 'معرضنا',       href: '#gallery' },
  { label: 'من نحن',       href: '#about' },
  { label: 'تواصل معنا',   href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-orange-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <img
            src="/assets/logo.png"
            alt="Ban Sella Drink"
            className="h-16 w-16 object-contain drop-shadow-md"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className={`nav-link text-base font-semibold font-arabic transition-colors ${
                scrolled ? 'text-gray-800 hover:text-orange-500' : 'text-white hover:text-yellow-200'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:inline-flex items-center gap-2 btn-shimmer text-white font-bold py-2 px-6 rounded-full text-sm shadow-lg hover:shadow-orange-400/40 hover:scale-105 transition-transform duration-300"
          >
            تواصل معنا
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden flex flex-col gap-[5px] p-2 rounded-xl transition-colors ${
              scrolled ? 'text-gray-800' : 'text-white'
            }`}
            aria-label="فتح القائمة"
          >
            <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all duration-300 bg-current ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu (kept identical to first design behavior) */}
      {menuOpen && (
        <div className="md:hidden mobile-menu-enter bg-white border-t border-orange-100 shadow-xl">
          <nav className="flex flex-col py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="px-6 py-3 text-lg font-semibold font-arabic text-gray-800 hover:text-orange-500 hover:bg-orange-50 transition-colors border-b border-gray-50 last:border-0"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 pt-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="block text-center btn-shimmer text-white font-bold py-3 px-6 rounded-full text-base shadow-lg"
              >
                تواصل معنا
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
