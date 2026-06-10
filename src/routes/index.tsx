import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MapPin, Clock, Star, Zap } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import { featuredServices, servicesByCategory } from '../lib/services'
import CTABand from '../components/site/CTABand'
import heroHome from '../assets/hero-home.svg'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Elite Laser Kiosk | Laser Hair Removal Toronto' },
      { name: 'description', content: 'Professional laser hair removal in Toronto. Permanent results on face and body using 808nm diode laser. Book at Elite Laser Kiosk — call 647-721-9300.' },
      { property: 'og:title', content: 'Elite Laser Kiosk | Laser Hair Removal Toronto' },
      { property: 'og:description', content: 'Precision laser hair removal. Permanent results. Toronto.' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center hero-grain overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.14 0.06 235) 50%, oklch(0.11 0.04 255) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <img
          src={heroHome}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-[55vw] object-contain object-right pointer-events-none select-none opacity-80"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center lg:justify-start justify-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm border-2 border-primary flex items-center justify-center text-sm font-semibold tracking-wider text-primary font-display">
                {BUSINESS.monogram}
              </div>
            </div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5 text-center lg:text-left">Laser Hair Removal · {BUSINESS.technologyUsed}</p>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-ivory mb-6 leading-[0.9] tracking-tight text-center lg:text-left">
              Elite<br />
              <span className="text-primary">Laser</span><br />
              Kiosk
            </h1>
            <p className="font-display text-xl lg:text-2xl text-ivory/60 italic mb-12 max-w-lg text-center lg:text-left">
              {BUSINESS.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <Link
                to="/book"
                className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
              >
                Book Free Consult <ArrowRight size={14} />
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 px-8 py-4 border border-ivory/20 text-ivory text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors rounded-sm"
              >
                All Treatments
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-primary/50" />
          </motion.div>
        </div>
      </section>

      {/* Technology strip */}
      <section className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '808nm', label: 'Diode Laser' },
              { value: '6–8', label: 'Sessions to Clear' },
              { value: '95%', label: 'Permanent Reduction' },
              { value: 'All', label: 'Skin Tones' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-primary mb-1">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Laser */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Why Laser</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-7 leading-tight">
                Permanent.<br />Not just temporary.
              </h2>
              <p className="text-foreground/65 leading-relaxed mb-5 max-w-md">
                Shaving, waxing, and threading remove hair from the surface. Laser targets the follicle itself — destroying the root so hair cannot grow back.
              </p>
              <p className="text-foreground/65 leading-relaxed mb-8 max-w-md">
                Our 808nm diode laser is the clinical standard for permanent hair reduction. Safe across all skin tones, comfortable with active cooling, and backed by decades of dermatological research.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
                How It Works <ArrowRight size={14} />
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, title: 'Diode 808nm', body: 'Gold standard wavelength — penetrates to the follicle across all skin tones without surface damage.' },
                  { icon: Zap, title: 'Active Cooling', body: 'Contact cooling tip protects skin at every pulse — comfortable even in sensitive areas.' },
                  { icon: Zap, title: '6–8 Sessions', body: 'Hair grows in cycles. Multiple sessions ensure every follicle in the active phase is destroyed.' },
                  { icon: Zap, title: 'All Skin Tones', body: 'Fitzpatrick I–VI safely treated when settings are calibrated — we assess every client individually.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-muted p-6 rounded-sm"
                  >
                    <item.icon size={18} className="text-primary mb-3" />
                    <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Treatments */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Most Popular</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">Top Treatments</h2>
            </div>
            <Link to="/services" className="hidden sm:flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
              All Treatments <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block bg-background rounded-sm overflow-hidden border border-border hover:border-primary transition-colors"
                >
                  <div className="h-48 relative" style={{ background: service.heroGradient }}>
                    <div className="absolute inset-0 dot-pattern opacity-30" />
                    <div className="absolute bottom-4 left-5">
                      <span className="text-xs tracking-widest uppercase text-primary/80 bg-foreground/40 px-2 py-1 backdrop-blur-sm">
                        {service.category === 'face' ? 'Face' : 'Body'}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{service.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-display text-foreground">{service.price}</span>
                      <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight size={12} /></span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Treat</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">Face & Body</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: 'Face Treatments', sub: 'Upper lip, chin, full face, brow shaping, jawline — all facial zones with clinical precision.', count: servicesByCategory.face.length, gradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.20 0.09 222) 100%)', anchor: '#face' },
              { title: 'Body Treatments', sub: 'Underarms, legs, arms, back, Brazilian, full body — permanent clearance for every zone.', count: servicesByCategory.body.length, gradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.18 0.08 240) 100%)', anchor: '#body' },
            ].map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to="/services" className="group block relative overflow-hidden rounded-sm" style={{ background: cat.gradient }}>
                  <div className="absolute inset-0 dot-pattern opacity-20" />
                  <div className="relative p-10 min-h-[300px] flex flex-col justify-between">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-primary mb-4">{cat.count} treatments</p>
                      <h3 className="font-display text-4xl text-ivory mb-4 leading-tight">{cat.title}</h3>
                      <p className="text-ivory/60 text-sm leading-relaxed">{cat.sub}</p>
                    </div>
                    <div className="flex items-center gap-2 text-primary text-xs tracking-wider uppercase mt-8 group-hover:gap-3 transition-all">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 lg:py-32 hero-grain" style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.14 0.06 235) 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}
          </div>
          <blockquote className="font-display text-3xl lg:text-4xl text-ivory italic leading-snug mb-8">
            "After 7 sessions my legs are completely smooth. I haven't touched a razor in four months. The results are exactly what they promised."
          </blockquote>
          <cite className="text-primary text-sm tracking-wider not-italic uppercase">— Natalie R., Toronto</cite>
        </div>
      </section>

      {/* Visit */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Find Us</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8 leading-tight">Come see us.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{BUSINESS.address.full}</p>
                    <p className="text-sm text-muted-foreground mt-1">{BUSINESS.address.neighborhood}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={18} className="text-primary mt-1 shrink-0" />
                  <a href={`tel:${BUSINESS.phone}`} className="font-medium text-foreground hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-primary mt-1 shrink-0" />
                  <div className="space-y-1.5">
                    {BUSINESS.hours.map(h => (
                      <div key={h.day} className="flex gap-6 text-sm">
                        <span className="w-24 text-muted-foreground">{h.day}</span>
                        <span className="text-foreground">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link to="/location" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all">
                  Directions & Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden aspect-square lg:min-h-[400px] relative" style={{ background: 'linear-gradient(135deg, oklch(0.93 0.01 218) 0%, oklch(0.89 0.02 215) 100%)' }}>
              <div className="absolute inset-0 dot-pattern opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={40} className="text-primary mx-auto mb-4" />
                  <p className="font-display text-2xl text-foreground mb-1">Scarborough Town Centre</p>
                  <p className="text-sm text-muted-foreground">Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  )
}
