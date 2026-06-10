import { Link } from '@tanstack/react-router'
import { Phone, Instagram, MapPin, Clock } from 'lucide-react'
import { BUSINESS } from '../../lib/constants'
import { servicesByCategory } from '../../lib/services'

export default function Footer() {
  return (
    <footer className="bg-foreground text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-sm border-2 border-primary flex items-center justify-center text-xs font-semibold tracking-wider text-primary font-display">
                {BUSINESS.monogram}
              </div>
              <span className="text-sm font-semibold tracking-[0.15em] uppercase text-ivory">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-sm text-ivory/60 leading-relaxed mb-6 font-display italic text-base">
              "{BUSINESS.tagline}"
            </p>
            <div className="flex flex-col gap-3 text-sm text-ivory/70">
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
              <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={14} />
                @{BUSINESS.instagram}
              </a>
            </div>
          </div>

          {/* Face services */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Face Treatments</h3>
            <ul className="flex flex-col gap-2.5">
              {servicesByCategory.face.map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Body services */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Body Treatments</h3>
            <ul className="flex flex-col gap-2.5">
              {servicesByCategory.body.slice(0, 8).map(service => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} className="text-sm text-ivory/60 hover:text-ivory transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm text-primary hover:text-ivory transition-colors">
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Visit</h3>
            <div className="flex flex-col gap-4 text-sm text-ivory/70">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>{BUSINESS.address.full}</p>
                  <p className="text-ivory/40 text-xs mt-1">{BUSINESS.address.neighborhood}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 shrink-0 text-primary" />
                <div className="space-y-1">
                  {BUSINESS.hours.map(h => (
                    <div key={h.day} className="flex gap-3">
                      <span className="w-10 text-ivory/40 text-xs">{h.day.slice(0, 3)}</span>
                      <span className="text-xs">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <h4 className="text-xs tracking-[0.2em] uppercase text-primary">Company</h4>
              <Link to="/about" className="text-sm text-ivory/60 hover:text-ivory transition-colors">About</Link>
              <Link to="/reviews" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Reviews</Link>
              <Link to="/location" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Location</Link>
              <Link to="/book" className="text-sm text-ivory/60 hover:text-ivory transition-colors">Book</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/30">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>{BUSINESS.technologyUsed} · {BUSINESS.address.neighborhood}</p>
        </div>
      </div>
    </footer>
  )
}
