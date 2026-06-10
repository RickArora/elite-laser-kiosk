import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Shield, Users } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import CTABand from '../components/site/CTABand'
import heroAbout from '../assets/hero-about.svg'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About | Elite Laser Kiosk' },
      { name: 'description', content: 'About Elite Laser Kiosk — our technology, philosophy, and commitment to permanent results for every client.' },
      { property: 'og:title', content: 'About Elite Laser Kiosk' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.92 0.025 218) 0%, oklch(0.96 0.01 225) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <img src={heroAbout} alt="" aria-hidden="true"
          className="absolute right-0 top-0 h-full w-auto max-w-[50vw] object-contain object-right pointer-events-none select-none opacity-45" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Our Story</p>
          <h1 className="font-display text-5xl lg:text-7xl text-foreground leading-tight mb-6 max-w-2xl">
            Elite Laser<br />Kiosk
          </h1>
          <p className="text-foreground/70 max-w-xl text-lg font-display italic">
            Built on science. Committed to results.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">How It Started</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                Built on one principle: permanent results, honestly delivered.
              </h2>
              <div className="space-y-5 text-foreground/70 leading-relaxed">
                <p>
                  Elite Laser Kiosk was founded on a simple observation: too many laser clinics over-promise on timelines and under-deliver on results. Clients finish a 6-session course and still have significant regrowth — and no clear explanation of why or what to do next.
                </p>
                <p>
                  We built Elite Laser Kiosk differently. We calibrate settings individually for every client, explain exactly how many sessions are realistic for their skin tone and hair type, and track progress across every visit. No vague promises — just clear expectations and measurable outcomes.
                </p>
                <p>
                  We use 808nm diode technology — the clinical standard for permanent hair reduction, effective across all Fitzpatrick skin types when properly calibrated. We stay current with best practices in laser safety, and our equipment is maintained to clinical standards.
                </p>
                <p>
                  We have grown through referrals — clients who get the results they were promised and tell their friends. That is the only growth we want.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div
                className="aspect-square rounded-sm relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.18 0.08 238) 100%)' }}
              >
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-ivory">
                    <div className="text-8xl font-display text-primary/30 mb-4">EL</div>
                    <p className="font-display text-2xl italic text-ivory/40">Est. {BUSINESS.founded}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground leading-tight">Our philosophy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Calibrated, not guessed',
                body: 'Every client gets individualized laser settings based on their Fitzpatrick skin type, hair colour, and density. We never apply a template — we assess and calibrate every session.',
              },
              {
                icon: Shield,
                title: 'Honest about results',
                body: 'We tell you how many sessions are realistic for your hair type. We will not sell you more sessions than you need, and we will tell you when laser is not the right solution.',
              },
              {
                icon: Users,
                title: 'Every skin tone',
                body: '808nm diode is safe across Fitzpatrick I–VI when the operator knows how to calibrate for darker tones. We have trained for this specifically.',
              },
            ].map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-sm"
              >
                <val.icon size={24} className="text-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground mb-4">{val.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{val.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Equipment</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">The Technology</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: '808nm Diode Laser', body: 'The 808nm wavelength is absorbed by melanin in the hair follicle — deep enough to reach the bulge and bulb, shallow enough to spare surrounding tissue. It is the most clinically validated wavelength for permanent hair reduction.' },
              { title: 'Active Contact Cooling', body: 'The handpiece tip actively cools skin before and during each pulse. This protects the epidermis while the laser energy targets the follicle below — making treatment comfortable and safe even in sensitive areas.' },
              { title: 'Fitzpatrick Calibration', body: 'We calibrate fluence and pulse width for each client\'s skin type. Higher Fitzpatrick types (IV–VI) require adjusted settings to prevent epidermal damage — we are trained specifically in this calibration.' },
              { title: 'Cycle-Based Protocol', body: 'Hair grows in three phases: anagen (active), catagen (transition), and telogen (resting). Laser only destroys follicles in the anagen phase. Our 4–6 week session spacing is designed to catch each follicle during its active cycle.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border p-8 rounded-sm hover:border-primary transition-colors"
              >
                <div className="w-8 h-px bg-primary mb-5" />
                <h3 className="font-display text-2xl text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-muted py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Journey</p>
            <h2 className="font-display text-4xl lg:text-5xl text-foreground">Milestones</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {[
              { year: '2022', event: 'Elite Laser Kiosk opens at Scarborough Town Centre with full face and body 808nm diode laser services.' },
              { year: '2023', event: 'Expanded body treatment menu — Brazilian, full legs, back, and chest added. Introduced 6-session packages.' },
              { year: '2024', event: 'Full Body Package launched. Over 300 five-star reviews. Named a top-rated laser kiosk in Toronto.' },
              { year: '2025', event: 'Extended hours to meet demand. Brow Define Laser treatment introduced — precision follicle-level brow shaping.' },
            ].map((m, i) => (
              <div key={m.year} className="flex gap-8 mb-10 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                  {i < 3 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-2">
                  <p className="text-xs tracking-widest uppercase text-primary mb-1">{m.year}</p>
                  <p className="text-foreground/70 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-24 lg:py-32 hero-grain"
        style={{ background: 'linear-gradient(135deg, oklch(0.92 0.025 218) 0%, oklch(0.95 0.015 222) 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Your Specialist</p>
              <h2 className="font-display text-4xl lg:text-5xl text-foreground mb-7 leading-tight">
                Trained hands.<br />Calibrated precision.
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-5">
                Every treatment at Elite Laser Kiosk is performed by a trained laser technician with specific expertise in diode laser calibration across all skin tones.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                We stay current with laser safety standards and hair removal science — bringing clinical knowledge to a fast, accessible kiosk setting. You are getting expertise, not just equipment.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-primary hover:gap-3 transition-all"
              >
                Book Your First Session <ArrowRight size={14} />
              </Link>
            </div>
            <div
              className="aspect-[4/5] rounded-sm relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.18 0.08 238) 100%)' }}
            >
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-ivory">
                  <div className="w-24 h-24 rounded-sm border-2 border-primary mx-auto mb-4 flex items-center justify-center">
                    <span className="font-display text-3xl text-primary">EL</span>
                  </div>
                  <p className="font-display text-2xl text-ivory mb-1">Your Specialist</p>
                  <p className="text-xs tracking-widest uppercase text-primary">Elite Laser Kiosk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand heading="Ready to start?" sub="Book your free consultation and walk out with a clear treatment plan." />
    </main>
  )
}
