import { useState, useEffect } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '../../lib/constants'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Location', href: '/location' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled
  const textClass = transparent ? 'text-ivory' : 'text-foreground'
  const accentClass = transparent ? 'text-[oklch(0.72_0.20_215)]' : 'text-primary'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-background/95 backdrop-blur-sm border-b border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`w-9 h-9 rounded-sm border-2 flex items-center justify-center text-xs font-semibold tracking-wider transition-colors font-display ${
                transparent
                  ? 'border-[oklch(0.72_0.20_215)] text-[oklch(0.72_0.20_215)]'
                  : 'border-primary text-primary'
              }`}
            >
              {BUSINESS.monogram}
            </div>
            <span className={`hidden sm:block text-sm font-semibold tracking-[0.15em] uppercase transition-colors ${textClass}`}>
              {BUSINESS.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wider uppercase transition-colors hover:text-primary ${
                  location.pathname.startsWith(link.href) ? accentClass : textClass
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={`flex items-center gap-2 text-sm transition-colors hover:text-primary ${textClass}`}
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
            <Link
              to="/book"
              className="px-5 py-2 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 transition-colors ${textClass}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-wider uppercase text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-3 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium rounded-sm"
            >
              Book Now
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
