import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronDown, Check, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { type ServiceData, allServices } from '../../lib/services'
import CTABand from './CTABand'
import illustFace from '../../assets/illus-face.svg'
import illustBody from '../../assets/illus-body.svg'

const categoryIllus: Record<string, string> = {
  face: illustFace,
  body: illustBody,
}

const categoryLabel: Record<string, string> = {
  face: 'Face Treatment',
  body: 'Body Treatment',
}

interface ServicePageProps {
  service: ServiceData
}

export default function ServicePage({ service }: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const relatedServices = service.related
    .map(slug => allServices.find(s => s.slug === slug))
    .filter(Boolean) as ServiceData[]

  return (
    <main>
      {/* Hero */}
      <section
        className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain overflow-hidden"
        style={{ background: service.heroGradient }}
      >
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <img
          src={categoryIllus[service.category]}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-[50vw] object-contain object-right pointer-events-none select-none opacity-55 lg:opacity-65"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="flex items-center gap-2 text-xs tracking-wider uppercase text-ivory/50 mb-6">
              <Link to="/services" className="hover:text-ivory transition-colors">Services</Link>
              <span>/</span>
              <span className="text-primary">{categoryLabel[service.category]}</span>
            </nav>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">
              {categoryLabel[service.category]}
            </p>
            <h1 className="font-display text-5xl lg:text-7xl text-ivory mb-4 leading-tight max-w-3xl">
              {service.name}
            </h1>
            <p className="text-ivory/70 text-lg lg:text-xl max-w-xl mb-3 font-display italic">
              {service.tagline}
            </p>
            <p className="text-3xl font-display text-primary mb-10">{service.price}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/book?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
              >
                Book This Treatment
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-ivory/30 text-ivory text-sm tracking-wider uppercase hover:border-ivory hover:text-ivory transition-colors rounded-sm"
              >
                All Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Overview</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground mb-8 leading-tight">
                What to Expect
              </h2>
              <div className="space-y-5">
                {service.description.map((para, i) => (
                  <p key={i} className="text-foreground/70 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-muted p-8 rounded-sm">
                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">What's Included</p>
                <ul className="space-y-3">
                  {service.included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 text-primary shrink-0" />
                      <span className="text-sm text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price</p>
                    <p className="text-2xl font-display text-foreground">{service.price}</p>
                    {service.priceNote && (
                      <p className="text-xs text-muted-foreground mt-1">{service.priceNote}</p>
                    )}
                  </div>
                  <Link
                    to={`/book?service=${service.slug}`}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs tracking-wider uppercase rounded-sm hover:bg-primary-dark transition-colors"
                  >
                    Book Now
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Step by Step</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground leading-tight">
              The Session
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.experience.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-background p-7 rounded-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary tracking-widest">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Why It Works</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground">Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <div key={i} className="border border-border p-7 rounded-sm hover:border-primary transition-colors">
                <div className="w-8 h-px bg-primary mb-5" />
                <h3 className="font-display text-xl text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="bg-muted py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Right for You?</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground">Who It's For</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-background p-7 rounded-sm">
              <h3 className="font-display text-xl text-foreground mb-5 flex items-center gap-2">
                <Check size={18} className="text-primary" />
                Great for
              </h3>
              <ul className="space-y-3">
                {service.forWho.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-primary mt-1">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-7 rounded-sm">
              <h3 className="font-display text-xl text-foreground mb-5 flex items-center gap-2">
                <X size={18} className="text-muted-foreground" />
                Not ideal for
              </h3>
              <ul className="space-y-3">
                {service.notForWho.map((item, i) => (
                  <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                    <span className="text-muted-foreground mt-1">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Questions</p>
            <h2 className="font-display text-3xl lg:text-4xl text-foreground">FAQ</h2>
          </div>
          <div className="space-y-2">
            {service.faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted transition-colors"
                >
                  <span className="font-display text-lg text-foreground pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedServices.length > 0 && (
        <section className="bg-muted py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Explore More</p>
              <h2 className="font-display text-3xl lg:text-4xl text-foreground">Related Treatments</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map(related => (
                <Link
                  key={related.slug}
                  to={`/services/${related.slug}`}
                  className="group bg-background p-7 rounded-sm border border-border hover:border-primary transition-colors"
                >
                  <div className="h-2 w-full rounded-sm mb-6 opacity-60" style={{ background: related.heroGradient }} />
                  <p className="text-xs tracking-wider uppercase text-primary mb-2">
                    {categoryLabel[related.category]}
                  </p>
                  <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{related.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-display text-foreground">{related.price}</span>
                    <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand serviceSlug={service.slug} />
    </main>
  )
}
