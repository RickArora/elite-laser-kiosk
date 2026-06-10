import { Link } from '@tanstack/react-router'
import { Phone } from 'lucide-react'
import { BUSINESS } from '../../lib/constants'

interface CTABandProps {
  heading?: string
  sub?: string
  serviceSlug?: string
}

export default function CTABand({
  heading = 'Ready to Start?',
  sub = 'Book your free consultation. We\'ll build your personal treatment plan.',
  serviceSlug,
}: CTABandProps) {
  const bookHref = serviceSlug ? `/book?service=${serviceSlug}` : '/book'

  return (
    <section className="bg-foreground py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Book a Consultation</p>
        <h2 className="font-display text-4xl lg:text-5xl text-ivory mb-4 leading-tight">
          {heading}
        </h2>
        <p className="text-ivory/60 mb-10 max-w-md mx-auto">{sub}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={bookHref}
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
          >
            Book Now
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center gap-2 px-8 py-3.5 border border-ivory/20 text-ivory text-sm tracking-wider uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
          >
            <Phone size={14} />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
