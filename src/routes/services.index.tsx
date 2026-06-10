import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { allServices, servicesByCategory } from '../lib/services'
import CTABand from '../components/site/CTABand'
import heroServices from '../assets/hero-services.svg'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      { title: 'All Treatments | Elite Laser Kiosk' },
      { name: 'description', content: 'Browse all laser hair removal treatments at Elite Laser Kiosk Toronto. Face and body treatments from $25. Permanent results with 808nm diode laser.' },
      { property: 'og:title', content: 'Treatments | Elite Laser Kiosk' },
    ],
  }),
  component: ServicesPage,
})

const categoryLabel: Record<string, string> = {
  face: 'Face Treatment',
  body: 'Body Treatment',
}

function ServiceCard({ service }: { service: (typeof allServices)[0] }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Link
        to={`/services/${service.slug}`}
        className="group flex items-center justify-between py-5 border-b border-border hover:border-primary transition-colors"
      >
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-sm shrink-0" style={{ background: service.heroGradient }} />
          <div>
            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">{service.name}</h3>
            <p className="text-sm text-muted-foreground">{service.tagline}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 shrink-0 ml-4">
          <span className="font-display text-xl text-foreground hidden sm:block">{service.price}</span>
          <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>
    </motion.div>
  )
}

function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-20 lg:pt-48 lg:pb-28 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.16 0.07 240) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <img src={heroServices} alt="" aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full object-contain object-right pointer-events-none select-none opacity-50" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">What We Offer</p>
          <h1 className="font-display text-5xl lg:text-7xl text-ivory leading-tight mb-6 max-w-2xl">
            All Treatments
          </h1>
          <p className="text-ivory/60 max-w-lg text-lg">
            Face and body laser hair removal. Every treatment uses 808nm diode technology — permanent results, all skin tones.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Consult', body: 'Your first visit includes a free skin assessment and treatment plan. We calibrate settings to your skin tone and hair type.' },
              { step: '02', title: 'Treat', body: 'Sessions are quick — 10 to 60 minutes depending on the zone. Active cooling throughout keeps every session comfortable.' },
              { step: '03', title: 'Clear', body: 'Hair sheds over 2–3 weeks post-session. After 6–8 sessions, most clients achieve 85–95% permanent reduction.' },
            ].map(item => (
              <div key={item.step} className="flex gap-5">
                <span className="text-xs font-semibold text-primary/50 tracking-widest mt-1">{item.step}</span>
                <div>
                  <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Face */}
      <section id="face" className="bg-muted py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Laser Treatments</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Face</h2>
            </div>
            <span className="text-sm text-muted-foreground">{servicesByCategory.face.length} treatments</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-8">
            Upper lip, chin, full face, brow define, sideburns, jawline and neck. Precision facial hair removal with clinical-grade diode laser.
          </p>
          <div className="bg-background rounded-sm px-6">
            {servicesByCategory.face.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section id="body" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Laser Treatments</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Body</h2>
            </div>
            <span className="text-sm text-muted-foreground">{servicesByCategory.body.length} treatments</span>
          </div>
          <p className="text-muted-foreground max-w-xl mb-8">
            Underarms, bikini, Brazilian, legs, arms, back, chest, and full body. Permanent hair reduction across every body zone.
          </p>
          <div className="rounded-sm px-6 border border-border">
            {servicesByCategory.body.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Find your treatment." sub="Not sure where to start? Book a free consultation and we'll build your plan." />
    </main>
  )
}
