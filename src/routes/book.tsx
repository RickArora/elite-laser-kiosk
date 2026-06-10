import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Phone, Clock, CheckCircle } from 'lucide-react'
import { BUSINESS } from '../lib/constants'
import { allServices } from '../lib/services'

export const Route = createFileRoute('/book')({
  validateSearch: (search: Record<string, unknown>) => ({
    service: typeof search.service === 'string' ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: 'Book | Elite Laser Kiosk' },
      { name: 'description', content: 'Book your laser hair removal session at Elite Laser Kiosk Toronto. Free consultation on your first visit.' },
      { property: 'og:title', content: 'Book | Elite Laser Kiosk' },
    ],
  }),
  component: BookPage,
})

function BookPage() {
  const { service: preselected } = Route.useSearch()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselected ?? '',
    sessionType: 'single',
    preferred: '',
    notes: '',
    skinTone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen pt-32 pb-24 lg:pt-48 flex items-start">
        <div className="max-w-lg mx-auto px-6 text-center">
          <CheckCircle size={48} className="text-primary mx-auto mb-6" />
          <h1 className="font-display text-4xl text-foreground mb-4">Request Received</h1>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We will call or text you within 24 hours to confirm your appointment. If you need an immediate slot, call us directly at{' '}
            <a href={`tel:${BUSINESS.phone}`} className="text-primary hover:underline">{BUSINESS.phone}</a>.
          </p>
          <p className="text-sm text-muted-foreground">
            Remember: please shave the treatment area 24 hours before your session.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-16 lg:pt-48 lg:pb-20 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.16 0.07 240) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">Get Started</p>
          <h1 className="font-display text-5xl lg:text-6xl text-ivory leading-tight mb-4 max-w-xl">
            Book Your Session
          </h1>
          <p className="text-ivory/60 max-w-md">
            First visit is a free consultation — we assess your skin, explain the process, and build your treatment plan.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="647-000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Treatment *</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => setForm({ ...form, service: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a treatment</option>
                    <optgroup label="Face Treatments">
                      {allServices.filter(s => s.category === 'face').map(s => (
                        <option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Body Treatments">
                      {allServices.filter(s => s.category === 'body').map(s => (
                        <option key={s.slug} value={s.slug}>{s.name} — {s.price}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Session Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'consultation', label: 'Free Consultation', desc: 'First visit — skin assessment + treatment plan' },
                      { value: 'single', label: 'Single Session', desc: 'Book one session at per-session price' },
                      { value: 'package', label: '6-Session Package', desc: 'Best value — ask for package pricing' },
                      { value: 'unsure', label: 'Not Sure', desc: 'We\'ll help you decide on the call' },
                    ].map(opt => (
                      <label
                        key={opt.value}
                        className={`cursor-pointer border rounded-sm p-4 transition-colors ${
                          form.sessionType === opt.value ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={opt.value}
                          checked={form.sessionType === opt.value}
                          onChange={e => setForm({ ...form, sessionType: e.target.value })}
                          className="sr-only"
                        />
                        <p className="text-sm font-medium text-foreground mb-1">{opt.label}</p>
                        <p className="text-xs text-muted-foreground">{opt.desc}</p>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Skin Tone</label>
                  <select
                    value={form.skinTone}
                    onChange={e => setForm({ ...form, skinTone: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select (helps us prepare)</option>
                    <option value="I">Type I — Very fair, always burns</option>
                    <option value="II">Type II — Fair, usually burns</option>
                    <option value="III">Type III — Medium, sometimes burns</option>
                    <option value="IV">Type IV — Olive, rarely burns</option>
                    <option value="V">Type V — Brown, very rarely burns</option>
                    <option value="VI">Type VI — Dark brown or black, never burns</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Preferred Day / Time</label>
                  <input
                    type="text"
                    value={form.preferred}
                    onChange={e => setForm({ ...form, preferred: e.target.value })}
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="e.g. Weekday mornings, Saturday afternoon"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">Anything Else?</label>
                  <textarea
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    rows={3}
                    className="w-full border border-border rounded-sm px-4 py-3 text-sm bg-background text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Questions, current skin medications, previous laser experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-primary-foreground text-sm tracking-wider uppercase font-medium hover:bg-primary-dark transition-colors rounded-sm"
                >
                  Request Appointment
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-muted rounded-sm p-7">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Call or Text</p>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <Phone size={20} className="text-primary shrink-0" />
                  <span className="font-display text-2xl">{BUSINESS.phone}</span>
                </a>
                <p className="text-sm text-muted-foreground mt-3">Fastest way to book — we respond same day.</p>
              </div>

              <div className="bg-muted rounded-sm p-7">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-5 flex items-center gap-2">
                  <Clock size={14} />
                  Hours
                </p>
                <div className="space-y-2">
                  {BUSINESS.hours.map(h => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="text-foreground">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted rounded-sm p-7">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-5">Before Your Session</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">—</span>
                    Shave the treatment area 24 hours before
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">—</span>
                    No waxing or threading for 3 weeks prior
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">—</span>
                    Avoid sun exposure for 2 weeks before
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">—</span>
                    Arrive with clean skin (no self-tan or heavy moisturiser)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">—</span>
                    Disclose any medications at booking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
