import { createFileRoute, Link } from '@tanstack/react-router'
import { Phone, MapPin, Clock, Instagram, ArrowRight } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/location')({
  head: () => ({
    meta: [
      { title: 'Location & Hours | Elite Laser Kiosk' },
      { name: 'description', content: `Find Elite Laser Kiosk in Toronto. Hours, directions, and contact. Call ${BUSINESS.phone}.` },
      { property: 'og:title', content: 'Location | Elite Laser Kiosk' },
    ],
  }),
  component: LocationPage,
})

function LocationPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.92 0.025 218) 0%, oklch(0.96 0.01 225) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Find Us</p>
          <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 max-w-2xl">
            Location &<br />Hours
          </h1>
          <p className="text-foreground/65 max-w-lg text-lg">
            Walk-ins welcome — but booking ahead guarantees your spot.
          </p>
        </div>
      </section>

      {/* Contact + Hours */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Contact</p>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{BUSINESS.address.full}</p>
                    <p className="text-sm text-muted-foreground">{BUSINESS.address.neighborhood}</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <a href={`tel:${BUSINESS.phone}`} className="font-medium text-foreground hover:text-primary transition-colors">
                      {BUSINESS.phone}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Call or text to book</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-primary" />
                  </div>
                  <div>
                    <a href={BUSINESS.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                      @{BUSINESS.instagram}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">DM us on Instagram</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
                >
                  Book Now <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">Hours</p>
              <div className="space-y-3">
                {BUSINESS.hours.map(h => (
                  <div key={h.day} className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-foreground/70 text-sm">{h.day}</span>
                    <span className="font-medium text-foreground text-sm">{h.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-muted rounded-sm p-6">
                <p className="text-xs tracking-wider uppercase text-primary mb-3">Good to Know</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>— Walk-ins welcome when a slot is available</li>
                  <li>— Booking ahead guarantees your preferred time</li>
                  <li>— Please shave 24h before your session</li>
                  <li>— Arrive with clean, product-free skin in the treatment area</li>
                  <li>— First visit includes a free skin assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div
            className="rounded-sm relative overflow-hidden h-64 lg:h-80"
            style={{ background: 'linear-gradient(135deg, oklch(0.93 0.01 218) 0%, oklch(0.90 0.02 215) 100%)' }}
          >
            <div className="absolute inset-0 dot-pattern opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin size={40} className="text-primary mx-auto mb-4" />
                <p className="font-display text-2xl text-foreground mb-1">{BUSINESS.address.neighborhood}</p>
                <p className="text-sm text-muted-foreground">{BUSINESS.address.street}, {BUSINESS.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand heading="We're open 7 days." sub="Drop in or book ahead — we'll get you started on your treatment plan." />
    </main>
  )
}
