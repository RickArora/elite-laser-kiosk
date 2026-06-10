import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import CTABand from '../components/site/CTABand'

export const Route = createFileRoute('/reviews')({
  head: () => ({
    meta: [
      { title: 'Reviews | Elite Laser Kiosk' },
      { name: 'description', content: 'See what clients say about Elite Laser Kiosk. Five-star laser hair removal results in Toronto.' },
      { property: 'og:title', content: 'Client Reviews | Elite Laser Kiosk' },
    ],
  }),
  component: ReviewsPage,
})

const testimonials = [
  { name: 'Natalie R.', treatment: 'Full Legs Laser', rating: 5, text: "After 7 sessions my legs are completely smooth. I haven't touched a razor in four months. The results are exactly what they promised — and they told me upfront it would take 7 not 6 because of my hair type. Honest, professional, and the results speak for themselves." },
  { name: 'Aisha M.', treatment: 'Brazilian Laser', rating: 5, text: "I was skeptical about laser on my skin tone (I'm a Fitzpatrick V) but they walked me through exactly how they calibrate for darker skin. No burning, no hyperpigmentation, and after 6 sessions I'm almost completely clear. Best decision I've made." },
  { name: 'Jennifer K.', treatment: 'Underarms Laser', rating: 5, text: "I used to shave every single day. After session 4 I dropped to once a week. After session 7 I genuinely cannot remember the last time I shaved my underarms. The dark shadow I always had is completely gone too." },
  { name: 'Priya S.', treatment: 'Upper Lip Laser', rating: 5, text: "I had the upper lip done after years of threading. The difference is unreal — no more booking every 2 weeks, no more irritation after. By session 5 the regrowth was barely visible. Session 8 was my last and I've had zero regrowth since." },
  { name: 'Marcus T.', treatment: 'Back Laser', rating: 5, text: "The back was what I needed most. Impossible to manage on your own. They did the full back in about 45 minutes, super comfortable with the cooling system. By session 4 the reduction was dramatic. Finished the course last month — completely clear." },
  { name: 'Divya L.', treatment: 'Full Face Laser', rating: 5, text: "Full face for my PCOS hair. They warned me upfront that hormonal hair can sometimes need a maintenance session or two — which is exactly what happened. Totally transparent, no surprise charges. My face looks clearer than it has in years." },
  { name: 'Caitlin H.', treatment: 'Half Legs Laser', rating: 5, text: "Started with just the lower legs and the results were so good I added the upper legs mid-course. The technician was totally knowledgeable and answered every question I had. Skin is smooth and the price was very fair." },
  { name: 'Sofia A.', treatment: 'Bikini Line Laser', rating: 5, text: "No more ingrowns. That alone was worth it. But on top of that the line is always clean — no planning around appointments before the beach. I did 7 sessions and the line has held perfectly for over 6 months." },
  { name: 'Ryan B.', treatment: 'Chest & Stomach Laser', rating: 5, text: "I was nervous being a guy booking at a laser kiosk but the experience was completely professional. Chest and stomach took about 40 minutes per session. Results started showing clearly by session 3. Really happy with it." },
]

const stars = (n: number) => Array(n).fill(0).map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)

function ReviewsPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="pt-32 pb-24 lg:pt-48 lg:pb-32 hero-grain relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, oklch(0.10 0.05 248) 0%, oklch(0.16 0.07 240) 100%)' }}
      >
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-5">What Clients Say</p>
          <h1 className="font-display text-5xl lg:text-7xl text-ivory leading-tight mb-6 max-w-2xl">Reviews</h1>
          <p className="text-ivory/60 max-w-xl text-lg">
            We grow through word of mouth. Every review is from a real client who completed treatment and got the results they came for.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Average Rating', value: '5.0', sub: 'out of 5 stars' },
              { label: 'Total Reviews', value: '300+', sub: 'across platforms' },
              { label: 'Completion Rate', value: '92%', sub: 'finish their course' },
              { label: 'Referrals', value: '70%', sub: 'of new bookings' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="flex justify-center gap-0.5 mb-3">
                  {stars(5)}
                </div>
                <p className="font-display text-3xl text-foreground mb-1">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="break-inside-avoid bg-muted p-7 rounded-sm"
              >
                <div className="flex gap-0.5 mb-4">{stars(t.rating)}</div>
                <p className="text-foreground/80 leading-relaxed mb-5 text-sm">"{t.text}"</p>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-primary tracking-wider uppercase mt-0.5">{t.treatment}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand heading="Join hundreds of happy clients." sub="Book your first session and start your treatment plan today." />
    </main>
  )
}
