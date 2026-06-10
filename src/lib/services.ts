export interface ServiceData {
  slug: string
  name: string
  tagline: string
  price: string
  priceNote?: string
  category: 'face' | 'body'
  heroGradient: string
  metaDescription: string
  description: string[]
  included: string[]
  experience: { title: string; description: string }[]
  benefits: { title: string; description: string }[]
  forWho: string[]
  notForWho: string[]
  faqs: { question: string; answer: string }[]
  related: string[]
}

export const services: Record<string, ServiceData> = {
  'upper-lip': {
    slug: 'upper-lip',
    name: 'Upper Lip Laser',
    tagline: 'Fast, precise, and permanent — the most popular laser treatment.',
    price: '$25 / session',
    priceNote: 'Package of 6 sessions: $135',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Upper lip laser hair removal in Toronto. Quick 10-minute sessions, permanent results. $25 per session at Elite Laser Kiosk.',
    description: [
      'The upper lip is the most requested laser treatment — and for good reason. Hair in this area regrows quickly with traditional methods, causes irritation with waxing, and is highly visible. Laser permanently reduces the follicle, not just the hair.',
      'Using our 808nm diode laser, we target melanin in the follicle directly. Each session takes under 10 minutes. With 6–8 sessions spaced 4 weeks apart, most clients achieve 85–95% permanent hair reduction.',
      'The cooling tip built into our handpiece makes each pulse comfortable — most clients describe it as a light snap. No downtime, no redness that lasts more than an hour.',
    ],
    included: [
      'Skin tone and hair type assessment',
      'Cooling gel application',
      'Full upper lip treatment (single pass)',
      'Post-treatment soothing balm',
      'Session tracking card',
    ],
    experience: [
      { title: 'Skin Assessment', description: 'We evaluate your skin tone and hair colour to calibrate the laser settings precisely for your Fitzpatrick type.' },
      { title: 'Cleanse & Cool', description: 'The area is cleansed and cooling gel applied. The handpiece tip actively cools skin during each pulse.' },
      { title: 'Treatment', description: 'The laser moves across the upper lip in a grid pattern — typically 2–3 minutes of active treatment time.' },
      { title: 'Soothe', description: 'A calming post-laser balm is applied. Light redness fades within 30–60 minutes for most clients.' },
    ],
    benefits: [
      { title: 'Permanent reduction', description: 'Each session destroys follicles in the active growth phase. Results accumulate across sessions for lasting clearance.' },
      { title: 'No ingrowns', description: 'Unlike waxing or threading, laser eliminates the follicle — no regrowth means no ingrown hairs.' },
      { title: 'Zero downtime', description: 'Treatment takes under 10 minutes with no recovery period. Return to normal activity immediately.' },
      { title: 'Skin-safe cooling', description: 'Our diode laser uses a contact cooling handpiece to protect the skin surface while targeting the follicle.' },
      { title: 'Cost-effective long term', description: 'After completing your sessions, maintenance is rare. Compare to a lifetime of waxing or threading costs.' },
      { title: 'No irritation', description: 'Waxing the upper lip causes redness, bumps, and sometimes hyperpigmentation. Laser does none of that.' },
    ],
    forWho: [
      'All skin tones (Fitzpatrick I–VI)',
      'Clients with dark, coarse upper lip hair',
      'Anyone frustrated by fast upper lip regrowth',
      'Clients who react to waxing or threading',
    ],
    notForWho: [
      'Pregnant or breastfeeding clients',
      'Clients on photosensitizing medications (Accutane, some antibiotics)',
      'Active skin infections or open wounds in the area',
      'Very light blond or white hair (minimal melanin to target)',
    ],
    faqs: [
      { question: 'How many sessions do I need?', answer: 'Most clients see 85–95% permanent reduction in 6–8 sessions spaced 4 weeks apart. Hair grows in cycles — only actively growing follicles are destroyed per session, which is why multiple sessions are needed.' },
      { question: 'Does it hurt?', answer: 'The upper lip is one of the more sensitive areas, but the cooling tip makes it very manageable. Most clients rate it 2–3 out of 10. Much more comfortable than waxing.' },
      { question: 'Can I wax between sessions?', answer: 'No — waxing removes the follicle temporarily and the laser needs hair present in the follicle to target. Shaving between sessions is fine and recommended.' },
      { question: 'How soon will I see results?', answer: 'After your first session, treated hairs shed over 2–3 weeks. By session 3, most clients notice significant patchiness in regrowth. Full results are visible after completing the course.' },
    ],
    related: ['chin', 'full-face', 'brow-define'],
  },

  'chin': {
    slug: 'chin',
    name: 'Chin Laser',
    tagline: 'Target chin and jawline hair with clinical precision.',
    price: '$30 / session',
    priceNote: 'Package of 6 sessions: $162',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Chin laser hair removal in Toronto. Permanent results for coarse chin hair. $30 per session at Elite Laser Kiosk.',
    description: [
      'Chin hair — particularly coarse, dark strands — is one of the most confidence-affecting hair concerns our clients bring to us. It regrows quickly and is difficult to manage with temporary methods.',
      'Our diode laser targets the melanin in each follicle, delivering precise energy that disables growth at the root. Unlike threading or waxing, which pull hair from the surface, laser addresses the follicle itself.',
      'A typical chin session takes 10–15 minutes. After a full course of 6–8 sessions, most clients achieve near-complete clearance.',
    ],
    included: [
      'Skin tone and hair type assessment',
      'Full chin and sub-chin area treatment',
      'Active cooling during each pulse',
      'Post-treatment calming balm',
      'Session progress tracking',
    ],
    experience: [
      { title: 'Consultation', description: 'We assess hair density, coarseness, and skin tone to dial in the right energy settings.' },
      { title: 'Prep', description: 'Area is cleansed and cooled. You will wear protective eyewear.' },
      { title: 'Treatment', description: 'Systematic passes across the chin and any sub-chin area included, with real-time cooling.' },
      { title: 'Aftercare', description: 'Calming balm applied. Mild redness typically clears within the hour.' },
    ],
    benefits: [
      { title: 'Targets coarse hair', description: 'Diode laser is especially effective on coarse, dark hair — exactly what most chin hair is.' },
      { title: 'No stubble', description: 'Between sessions, hair that has been treated sheds on its own. No stubble regrowth cycle.' },
      { title: 'Quick sessions', description: 'Chin is a small area. Sessions run 10–15 minutes including setup.' },
      { title: 'Long-term clearance', description: 'After a completed course, most clients need one maintenance session per year at most.' },
      { title: 'Safe for all tones', description: 'Our 808nm diode handles all Fitzpatrick skin types safely when properly calibrated.' },
      { title: 'No post-treatment marks', description: 'Waxing and threading can cause hyperpigmentation on the chin. Laser does not.' },
    ],
    forWho: [
      'Clients with dark chin or sub-chin hair',
      'Those experiencing hormonal chin hair growth',
      'Clients who get ingrowns from threading',
      'Anyone wanting long-term clearance vs. repeat appointments',
    ],
    notForWho: [
      'Pregnant or nursing clients',
      'Clients on isotretinoin (Accutane)',
      'Light blond, grey, or white hair',
      'Active breakouts or skin irritation in treatment area',
    ],
    faqs: [
      { question: 'Will laser work on hormonal chin hair?', answer: 'Yes — laser destroys the follicle regardless of why the hair grows. However, if the hormonal cause is ongoing (e.g. PCOS), new follicles can sometimes be activated. Maintenance sessions handle this.' },
      { question: 'How spaced apart are sessions?', answer: 'Every 4 weeks for the face. This aligns with the hair growth cycle to ensure we treat follicles in their active phase each time.' },
      { question: 'What aftercare is needed?', answer: 'Avoid sun exposure for 48 hours, no exfoliants for 24 hours, and keep the area clean. SPF daily is recommended throughout your treatment course.' },
    ],
    related: ['upper-lip', 'jawline-neck', 'full-face'],
  },

  'sideburns': {
    slug: 'sideburns',
    name: 'Sideburns Laser',
    tagline: 'Clean up side face hair for a defined, refined look.',
    price: '$45 / session',
    priceNote: 'Package of 6 sessions: $243',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Sideburns laser hair removal Toronto. Permanently reduce sideburn hair for a clean face. Elite Laser Kiosk.',
    description: [
      'Sideburn hair affects the way the face frames — heavy or low-set sideburns can alter the overall appearance of your face. Laser lets you reshape this area permanently rather than managing it every few weeks.',
      'We work with you to define the exact line you want and treat only within that area. Precision matters here — this is not a blanket treatment but a carefully mapped session.',
    ],
    included: [
      'Pre-treatment line mapping consultation',
      'Full bilateral sideburn treatment',
      'Precision edge work',
      'Cooling and post-care balm',
    ],
    experience: [
      { title: 'Shape Mapping', description: 'We discuss exactly where you want the sideburn line to sit and mark the treatment boundary.' },
      { title: 'Treatment', description: 'Both sides treated with consistent settings for symmetrical results.' },
      { title: 'Edge Refine', description: 'The border between treated and untreated hair is handled with precision on each visit.' },
      { title: 'Aftercare', description: 'Soothing balm applied. Area may be slightly pink for 30–60 minutes.' },
    ],
    benefits: [
      { title: 'Permanent shaping', description: 'Unlike razor or thread, laser permanently sets the sideburn line where you want it.' },
      { title: 'Symmetry', description: 'Both sides are mapped and treated identically for balanced results.' },
      { title: 'No razor shadow', description: 'Shaved sideburns leave dark roots visible. Laser removes the follicle entirely.' },
      { title: 'Reshapes the face', description: 'Removing or reducing sideburns opens the face and changes how makeup and hair read.' },
    ],
    forWho: [
      'Clients with prominent or low sideburn hair',
      'Those who want to permanently define the face frame',
      'Clients who shave but dislike the stubble effect',
    ],
    notForWho: [
      'Clients who prefer natural sideburn hair',
      'Very light or grey hair',
      'Pregnant or nursing clients',
    ],
    faqs: [
      { question: 'Can I choose exactly where my sideburn line goes?', answer: 'Yes — we map the treatment boundary with you before every session. The line stays consistent across all visits.' },
      { question: 'Will it affect the hair above the mapped line?', answer: 'No. We treat only within the mapped area. Hair above or outside it is not affected.' },
    ],
    related: ['full-face', 'jawline-neck', 'chin'],
  },

  'full-face': {
    slug: 'full-face',
    name: 'Full Face Laser',
    tagline: 'Complete facial hair clearance — every zone, one session.',
    price: '$90 / session',
    priceNote: 'Package of 6 sessions: $486',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Full face laser hair removal Toronto. Treat all facial zones in one session. $90/session at Elite Laser Kiosk.',
    description: [
      'The full face treatment covers every zone — upper lip, chin, cheeks, sideburns, forehead, and below the jaw — in a single, systematically executed session.',
      'Rather than booking and paying for multiple individual areas, the full face package treats everything in one 30–40 minute visit at a significantly lower combined cost.',
      'Ideal for clients with widespread facial hair or those who want a completely clean canvas across the full face. After a completed course, most clients do not need any hair management at all.',
    ],
    included: [
      'Full face mapping consultation',
      'Upper lip, chin, cheeks, sideburns, forehead',
      'Jawline and sub-chin',
      'Consistent calibration across all zones',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Full Face Map', description: 'We map all treatment zones and discuss any areas you want excluded.' },
      { title: 'Zone-by-Zone', description: 'Treatment proceeds systematically — upper face first, then lower. Each zone gets full coverage.' },
      { title: 'Cooling Throughout', description: 'The handpiece cools continuously across all zones. Treatment is 30–40 minutes total.' },
      { title: 'Aftercare', description: 'Full face calming protocol applied. Some zones may be slightly pink for an hour or two.' },
    ],
    benefits: [
      { title: 'Complete clearance', description: 'Every zone of the face treated in one visit — no patchy results from treating areas piecemeal.' },
      { title: 'Better value', description: 'Full face is significantly cheaper than booking each zone individually.' },
      { title: 'One appointment', description: 'Instead of multiple short sessions, one full appointment covers everything.' },
      { title: 'Even results', description: 'Consistent calibration across all zones ensures uniform hair reduction across the face.' },
      { title: 'Removes the routine', description: 'After completion, the daily or weekly facial hair management routine is gone entirely.' },
    ],
    forWho: [
      'Clients with hair across multiple facial zones',
      'Those who want comprehensive facial clearance',
      'Clients managing PCOS or hormonal facial hair',
      'Anyone tired of threading, waxing, and shaving multiple areas',
    ],
    notForWho: [
      'Clients only needing one or two small zones (individual treatments more economical)',
      'Pregnant or nursing clients',
      'Active facial skin conditions (acne, rosacea flare-ups)',
      'Light blond, grey, or white hair',
    ],
    faqs: [
      { question: 'How long does the full face session take?', answer: 'Typically 30–40 minutes including setup, mapping, treatment, and post-care.' },
      { question: 'Are the settings the same for every area?', answer: 'No — we calibrate zone by zone. The forehead and cheeks often tolerate different energy levels than the upper lip.' },
      { question: 'Do I need to shave my face before the session?', answer: 'Yes. Please shave all treatment areas 24 hours before your session. Do not wax or thread for 2 weeks prior.' },
    ],
    related: ['upper-lip', 'chin', 'jawline-neck'],
  },

  'brow-define': {
    slug: 'brow-define',
    name: 'Brow Define Laser',
    tagline: 'Set your perfect brow shape permanently with laser precision.',
    price: '$40 / session',
    priceNote: 'Package of 6 sessions: $216',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Laser brow shaping Toronto. Permanently define your brow shape with diode laser. Elite Laser Kiosk.',
    description: [
      'Brow Define uses laser to permanently remove the stray hairs outside your preferred brow shape — the hairs between the brows, below the arch, and at the tail.',
      'Unlike threading or waxing, which you re-book every 2–4 weeks, laser removes the follicle. After a full course, your brow stays shaped with minimal maintenance.',
      'We work from your natural brow or a reference shape to map exactly where the laser treats. This is precise, deliberate work — not a general clearing of the area.',
    ],
    included: [
      'Brow shape consultation and mapping',
      'Between-brow clearing',
      'Below-arch and tail definition',
      'Symmetry check at every session',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Shape Consultation', description: 'We discuss your ideal brow and map the treatment boundary precisely.' },
      { title: 'Symmetry Mapping', description: 'Both brows are mapped for balance before treatment begins.' },
      { title: 'Precise Treatment', description: 'Laser is applied only to areas outside the mapped brow boundary.' },
      { title: 'Review', description: 'We review symmetry after treatment and note any refinements for next session.' },
    ],
    benefits: [
      { title: 'Permanent shape', description: 'Once sessions are complete, the brow holds its shape without constant maintenance.' },
      { title: 'No over-threading risk', description: 'Laser only treats exactly what you mark — no risk of accidentally removing too much brow.' },
      { title: 'Saves ongoing cost', description: 'Threading every 2–3 weeks adds up fast. Laser pays for itself within the first year for most clients.' },
      { title: 'Precision', description: 'Individual follicles can be targeted — more precise than any threading or waxing approach.' },
    ],
    forWho: [
      'Clients with a set brow shape they want to maintain permanently',
      'Heavy between-brow (monobrow) hair',
      'Those frustrated by fast-growing brow strays',
    ],
    notForWho: [
      'Clients still experimenting with brow shape (results are permanent)',
      'Very light or grey eyebrow hair',
      'Clients on photosensitizing medications',
    ],
    faqs: [
      { question: 'Will laser affect my main brow hair?', answer: 'Only if we treat within the brow boundary — which we never do without explicit agreement. The laser treats only the mapped area outside your brow.' },
      { question: 'Can I change the shape later?', answer: 'You can always add more clearance. You cannot grow hair back in an area once permanently cleared — so we are always conservative and go from the outer edge inward.' },
    ],
    related: ['upper-lip', 'full-face', 'sideburns'],
  },

  'jawline-neck': {
    slug: 'jawline-neck',
    name: 'Jawline & Neck Laser',
    tagline: 'Define the jawline. Clear the neck. Look sharper every day.',
    price: '$65 / session',
    priceNote: 'Package of 6 sessions: $351',
    category: 'face',
    heroGradient: 'linear-gradient(135deg, oklch(0.11 0.05 218) 0%, oklch(0.19 0.09 220) 100%)',
    metaDescription: 'Jawline and neck laser hair removal Toronto. Define your jawline with permanent laser. Elite Laser Kiosk.',
    description: [
      'The jawline and neck area is a key frame of the face — hair in this zone blurs the jawline definition and creates a rough appearance. Laser permanently removes it.',
      'This treatment covers the underside of the jaw, the neck, and any transitional hair between the chin and collarbone. It is popular with all genders for the clean, defined effect.',
    ],
    included: [
      'Jawline mapping and boundary consultation',
      'Full bilateral jaw underside',
      'Full neck to collarbone',
      'Active cooling throughout',
      'Post-treatment aftercare',
    ],
    experience: [
      { title: 'Mapping', description: 'Jawline boundary defined — we treat below the jaw and down the neck.' },
      { title: 'Jaw Treatment', description: 'Systematic passes under the jaw, keeping the line clean.' },
      { title: 'Neck Treatment', description: 'Full neck treated with consistent settings.' },
      { title: 'Soothe', description: 'Calming gel applied. Mild redness clears within the hour for most clients.' },
    ],
    benefits: [
      { title: 'Defines the jawline', description: 'Removing neck and jaw hair visually sharpens the jaw contour.' },
      { title: 'Eliminates razor burn', description: 'The neck is prone to razor burn and ingrowns. Laser removes the need to shave entirely.' },
      { title: 'Covers a large zone efficiently', description: 'Jaw and neck together in one session — faster than booking them separately.' },
      { title: 'All skin tones', description: '808nm diode handles Fitzpatrick I–VI when properly calibrated.' },
    ],
    forWho: [
      'Clients who shave their neck frequently',
      'Anyone with visible jaw or neck hair',
      'Clients who get ingrowns from shaving the neck',
    ],
    notForWho: [
      'Clients who want to keep their neck or beard hair',
      'Active acne or folliculitis in the area',
      'Pregnant or nursing clients',
    ],
    faqs: [
      { question: 'Can I keep my beard and just clear the neck?', answer: 'Absolutely. We treat only the area you define. If you want the neckline set at a specific height, we map it and treat only below that line.' },
      { question: 'How many sessions for the neck specifically?', answer: 'Neck hair is usually coarse and responds well — 6–8 sessions for most clients. Maintenance once a year after that for new growth.' },
    ],
    related: ['chin', 'full-face', 'sideburns'],
  },

  'underarms': {
    slug: 'underarms',
    name: 'Underarms Laser',
    tagline: 'The most popular body laser — smooth underarms, permanently.',
    price: '$65 / session',
    priceNote: 'Package of 6 sessions: $351',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Underarms laser hair removal Toronto. Permanent smooth underarms. $65/session at Elite Laser Kiosk.',
    description: [
      'Underarm laser is the single most popular body laser treatment — and it is easy to see why. The underarm area requires frequent shaving or waxing and is prone to irritation, ingrowns, and hyperpigmentation.',
      'Each session takes 15–20 minutes. After a full course, the vast majority of clients never need to shave or wax their underarms again.',
      'The 808nm diode laser targets hair at the follicle level. The active cooling system makes the underarm — an area with thinner, more sensitive skin — comfortable throughout.',
    ],
    included: [
      'Both underarms treated per session',
      'Skin tone and hair calibration',
      'Active contact cooling during treatment',
      'Post-treatment soothing application',
    ],
    experience: [
      { title: 'Prepare', description: 'Underarms are cleansed. Please shave 24 hours before your session.' },
      { title: 'Calibrate', description: 'Settings adjusted for your skin tone and hair density.' },
      { title: 'Treat Both Sides', description: 'Each underarm treated with full coverage passes. Takes 15–20 minutes total.' },
      { title: 'Soothe', description: 'Calming gel applied. Minor redness or follicular bumping resolves within a few hours.' },
    ],
    benefits: [
      { title: 'Never shave again', description: 'After a completed course, most clients achieve 90%+ hair reduction — no more daily shaving.' },
      { title: 'No more ingrowns', description: 'Shaving and waxing cause persistent underarm ingrowns. Laser eliminates the follicle.' },
      { title: 'Reduces hyperpigmentation', description: 'Friction and shaving can darken underarm skin. With no more irritation, skin tone often evens out post-treatment.' },
      { title: 'Quick sessions', description: 'Both underarms done in 15–20 minutes — fits into any schedule.' },
      { title: 'Deodorant works better', description: 'Without hair, deodorant makes full contact with skin — more effective and longer lasting.' },
      { title: 'Comfortable in all clothing', description: 'No stubble, no regrowth anxiety, no razor schedule to manage.' },
    ],
    forWho: [
      'Anyone who shaves or waxes their underarms regularly',
      'Clients with underarm ingrowns or irritation',
      'Those with hyperpigmented underarm skin from shaving',
      'Athletes or anyone who wants zero-maintenance underarms',
    ],
    notForWho: [
      'Pregnant or breastfeeding clients',
      'Active underarm infections or folliculitis',
      'Clients who have used deodorant with metal components (must be removed before treatment)',
      'Light blond or white underarm hair',
    ],
    faqs: [
      { question: 'Can I still use deodorant?', answer: 'Not directly before the session — arrive with clean, deodorant-free underarms. Post-session, wait 24 hours before applying deodorant.' },
      { question: 'Does it help with underarm odour?', answer: 'Reducing hair reduces the surface area bacteria clings to, which many clients find improves odour. It is a common secondary benefit.' },
      { question: 'How soon after the session can I exercise?', answer: 'Wait 24–48 hours before heavy exercise that causes sweating in the underarm area, to avoid irritating the treated follicles.' },
    ],
    related: ['bikini-line', 'full-arms', 'brazilian'],
  },

  'bikini-line': {
    slug: 'bikini-line',
    name: 'Bikini Line Laser',
    tagline: 'Permanent definition along the bikini line — no more ingrowns.',
    price: '$80 / session',
    priceNote: 'Package of 6 sessions: $432',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Bikini line laser hair removal Toronto. Permanent bikini line — no ingrowns. $80/session at Elite Laser Kiosk.',
    description: [
      'Bikini line laser clears the area that extends beyond swimwear or underwear — the classic bikini line. This is a targeted treatment, not a full Brazilian.',
      'The bikini line is one of the most ingrown-prone areas on the body due to tight clothing, friction, and shaving. Laser permanently removes the follicle — eliminating the ingrown cycle entirely.',
    ],
    included: [
      'Full bilateral bikini line to defined boundary',
      'Ingrown treatment around the line',
      'Cooling contact handpiece',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Boundary Setting', description: 'We confirm exactly where you want the bikini line to sit before each session.' },
      { title: 'Treatment', description: 'Full bikini line treated with systematic coverage and active cooling.' },
      { title: 'Aftercare', description: 'Soothing application post-treatment. Avoid tight clothing for 24 hours.' },
    ],
    benefits: [
      { title: 'Eliminates ingrowns', description: 'The bikini line is the most ingrown-prone body area. Laser ends this problem permanently.' },
      { title: 'Clean swimwear line', description: 'No more emergency shaving before the beach or pool. The line is always clean.' },
      { title: 'Reduces hyperpigmentation', description: 'Shaving friction darkens this skin over time. Without shaving, skin tone can improve significantly.' },
      { title: 'Less sensitive than Brazilian', description: 'The bikini line is a lower-sensitivity area than the full Brazilian — comfortable for most clients.' },
    ],
    forWho: [
      'Clients who shave or wax the bikini line regularly',
      'Anyone with persistent bikini line ingrowns',
      'Clients wanting a clean line without ongoing maintenance',
    ],
    notForWho: [
      'Pregnant or nursing clients',
      'Active folliculitis or skin infections in the area',
      'Very light or white hair',
    ],
    faqs: [
      { question: 'What is the difference between bikini line and Brazilian?', answer: 'Bikini line clears the area visible outside underwear or swimwear. Brazilian is a full removal of all pubic hair including the front, sides, and between.' },
      { question: 'Do I need to shave before the appointment?', answer: 'Yes, shave 24 hours before. Do not wax or depilate for 3 weeks before your session.' },
    ],
    related: ['brazilian', 'underarms', 'half-legs'],
  },

  'brazilian': {
    slug: 'brazilian',
    name: 'Brazilian Laser',
    tagline: 'Complete pubic hair removal — the gold standard in permanent laser.',
    price: '$120 / session',
    priceNote: 'Package of 6 sessions: $648',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Brazilian laser hair removal Toronto. Permanent full pubic hair clearance. $120/session at Elite Laser Kiosk.',
    description: [
      'The Brazilian laser treatment permanently removes all pubic hair — front, sides, and between. It is the most requested full-clearance laser body treatment.',
      'After completing a course of 6–8 sessions, clients achieve near-total permanent hair reduction with no more waxing, shaving, or ingrowns to manage.',
      'We treat all skin tones and approach every session with complete professionalism. The active cooling handpiece keeps the treatment comfortable throughout.',
    ],
    included: [
      'Full front, sides, and between treatment',
      'Customizable — full clearance or leave a landing strip',
      'Calibrated diode laser settings',
      'Active cooling contact handpiece',
      'Post-treatment soothing care',
    ],
    experience: [
      { title: 'Preference Consultation', description: 'We confirm your preferred result — full clearance or a defined shape.' },
      { title: 'Positioning', description: 'You are covered and repositioned between each zone for comprehensive coverage.' },
      { title: 'Treatment', description: 'Front and sides, then between. Session takes 20–30 minutes with active cooling throughout.' },
      { title: 'Aftercare', description: 'Post-care applied. Avoid hot baths and tight clothing for 24 hours.' },
    ],
    benefits: [
      { title: 'Permanent clearance', description: 'After a full course, the vast majority of clients achieve 90–95% permanent hair reduction.' },
      { title: 'No more Brazilian waxes', description: 'Waxing this area every 4–6 weeks is both painful and expensive. Laser ends that cycle.' },
      { title: 'Zero ingrowns', description: 'Brazilian waxing creates severe ingrowns. Laser removes the follicle — no regrowth, no ingrowns.' },
      { title: 'Hygienic and low-maintenance', description: 'Many clients find hygiene and comfort significantly improve after completing treatment.' },
      { title: 'Confidence year-round', description: 'No planning around waxing appointments, no regrowth windows, no razor bumps.' },
    ],
    forWho: [
      'Clients who wax or shave regularly',
      'Anyone with persistent ingrown hair issues',
      'Clients who want permanent, low-maintenance clearance',
      'All skin tones (Fitzpatrick I–VI)',
    ],
    notForWho: [
      'Pregnant or nursing clients',
      'Clients on blood thinners or photosensitizing medication',
      'Active skin infections or irritation in the area',
      'Very light blond or white hair',
    ],
    faqs: [
      { question: 'Is it painful?', answer: 'The contact cooling on our handpiece significantly reduces discomfort. Most clients rate it 3–4 out of 10 — much less painful than waxing.' },
      { question: 'How many sessions until I am completely clear?', answer: 'Most clients see 80–90% reduction after 6 sessions. Sessions 7 and 8 address remaining fine or sparse regrowth. Maintenance once a year after that.' },
      { question: 'Can I leave some hair?', answer: 'Yes — we can shape a landing strip or any defined area you want to keep. Discuss at consultation.' },
    ],
    related: ['bikini-line', 'underarms', 'half-legs'],
  },

  'half-legs': {
    slug: 'half-legs',
    name: 'Half Legs Laser',
    tagline: 'Smooth from knee to ankle — or hip to knee. Your choice.',
    price: '$125 / session',
    priceNote: 'Package of 6 sessions: $675',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Half legs laser hair removal Toronto. Upper or lower half legs. $125/session at Elite Laser Kiosk.',
    description: [
      'Half legs covers either the lower leg (knee to ankle) or the upper leg (knee to hip). Lower legs are the most popular — the area most visible and most frequently shaved.',
      'Each session takes 30–40 minutes. Leg hair is typically coarse and dense, which actually makes it highly responsive to diode laser. Most clients see significant thinning after the first 2–3 sessions.',
    ],
    included: [
      'Choice of upper or lower half (confirm at booking)',
      'Full bilateral coverage',
      'Systematic overlapping passes for complete coverage',
      'Post-treatment aftercare',
    ],
    experience: [
      { title: 'Calibrate', description: 'Laser settings adjusted for the typically coarser leg hair.' },
      { title: 'Treat', description: 'Both legs treated systematically — front and back of each leg with overlapping passes.' },
      { title: 'Cool', description: 'Active cooling throughout keeps larger surface areas comfortable.' },
      { title: 'Aftercare', description: 'Soothing lotion applied. Avoid sun exposure and hot showers for 24 hours.' },
    ],
    benefits: [
      { title: 'Significantly reduces shaving', description: 'After 6–8 sessions, most clients never need to shave again in the treated zone.' },
      { title: 'Great on coarse hair', description: 'Dark, coarse leg hair is ideal for laser — responds quickly and dramatically.' },
      { title: 'Covers the most-visible zone', description: 'Lower leg is what people see most. Get the high-impact zone done first.' },
      { title: 'No more razor bumps', description: 'Shaving legs causes nicks, bumps, and irritation. Laser removes the need entirely.' },
    ],
    forWho: [
      'Clients who shave their legs regularly',
      'Those who want to start with a targeted zone before committing to full legs',
      'Clients with dark, coarse leg hair',
    ],
    notForWho: [
      'Light blond or white leg hair',
      'Pregnant or nursing clients',
      'Tanned skin or recent sun exposure (requires rescheduling)',
    ],
    faqs: [
      { question: 'Which half is more popular?', answer: 'Lower legs are the most requested. Most visible, most frequently shaved, and slightly less sensitive than the upper leg.' },
      { question: 'Can I upgrade to full legs later?', answer: 'Yes — many clients do the lower half first, then add the upper half. Just book full legs for the next session.' },
    ],
    related: ['full-legs', 'bikini-line', 'brazilian'],
  },

  'full-legs': {
    slug: 'full-legs',
    name: 'Full Legs Laser',
    tagline: 'Complete leg smoothness — knee to hip, ankle to hip, done forever.',
    price: '$210 / session',
    priceNote: 'Package of 6 sessions: $1,134',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Full legs laser hair removal Toronto. Permanent smooth legs from ankle to hip. $210/session at Elite Laser Kiosk.',
    description: [
      'Full legs is the complete treatment — ankle to hip, front and back, on both legs. It is a significant session (50–70 minutes) but the most comprehensive result available.',
      'Leg hair is typically very responsive to laser because it tends to be dark and coarse. After a full course of 6–8 sessions, most clients achieve near-complete permanent hair reduction and retire their razor entirely.',
    ],
    included: [
      'Complete bilateral leg treatment ankle to hip',
      'Front, back, and inner leg',
      'Calibrated diode settings for each zone',
      'Post-treatment full leg care',
    ],
    experience: [
      { title: 'Full Mapping', description: 'We confirm zones and discuss if any areas need special attention (e.g. knee, ankle, inner thigh).' },
      { title: 'Systematic Treatment', description: 'Front of both legs, then back — in sections from ankle to hip.' },
      { title: 'Edge Detail', description: 'Ankle and knee areas get careful edge work to ensure full coverage.' },
      { title: 'Cool & Soothe', description: 'Full leg soothing lotion applied post-treatment. Warmth in the treated area fades within a few hours.' },
    ],
    benefits: [
      { title: 'Complete result', description: 'No patchy regrowth from missing a zone — the full leg is done in one session.' },
      { title: 'Better value per session', description: 'Full legs costs less than booking upper and lower legs separately.' },
      { title: 'Dark hair responds fast', description: 'Most clients see visible thinning after just 2–3 sessions.' },
      { title: 'Never shave again', description: 'After a full course, leg shaving becomes a thing of the past.' },
    ],
    forWho: [
      'Anyone who shaves or waxes their full legs',
      'Athletes who find leg hair management inconvenient',
      'Clients with dark, coarse leg hair who want maximum permanent results',
    ],
    notForWho: [
      'Very light or white leg hair',
      'Pregnant or nursing clients',
      'Recent significant sun exposure or self-tan in the area',
    ],
    faqs: [
      { question: 'How long does a full legs session take?', answer: 'Typically 50–70 minutes including setup and post-care.' },
      { question: 'What should I do before the appointment?', answer: 'Shave both legs 24 hours before. No waxing or depilatory creams for 3 weeks prior. Avoid sun exposure for 2 weeks before.' },
    ],
    related: ['half-legs', 'bikini-line', 'full-arms'],
  },

  'half-arms': {
    slug: 'half-arms',
    name: 'Half Arms Laser',
    tagline: 'Smooth forearms or upper arms — your choice, permanent result.',
    price: '$105 / session',
    priceNote: 'Package of 6 sessions: $567',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Half arms laser hair removal Toronto. Forearms or upper arms, permanent hair reduction. Elite Laser Kiosk.',
    description: [
      'Half arms covers either the forearm (wrist to elbow) or the upper arm (elbow to shoulder). Forearms are the more popular choice — most visible and most commonly managed.',
      'Arm hair is typically finer than leg hair, which can mean slightly more sessions needed. However, most clients see progressive thinning and lighter regrowth from session 2 onward.',
    ],
    included: [
      'Choice of upper or lower half arms (confirm at booking)',
      'Full bilateral coverage',
      'Front and back of each arm',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Half Selection', description: 'Confirm upper or lower arms at booking. We calibrate for the typical finer texture of arm hair.' },
      { title: 'Treatment', description: 'Both arms treated — inner and outer. Session takes 25–35 minutes.' },
      { title: 'Aftercare', description: 'Soothing lotion applied. Avoid tight sleeves and sun exposure for 24 hours.' },
    ],
    benefits: [
      { title: 'Covers the visible zone', description: 'Forearms are what you see in sleeveless clothing and short sleeves — the high-impact zone.' },
      { title: 'Progressive results', description: 'Even finer arm hair responds to repeated sessions — clients typically see 80%+ reduction at completion.' },
      { title: 'No more shaving or waxing', description: 'Arms are tedious to maintain with temporary methods. Laser ends the cycle.' },
    ],
    forWho: [
      'Clients with visibly dark forearm hair',
      'Those self-conscious about arm hair in short-sleeved clothing',
      'Athletes or clients who prefer minimal body hair',
    ],
    notForWho: [
      'Very fine, light blond or vellus arm hair',
      'Pregnant or nursing clients',
      'Active sun tans in the area',
    ],
    faqs: [
      { question: 'Does arm hair need more sessions than leg hair?', answer: 'Sometimes. Finer hair has less melanin so the laser has slightly less to target. You may need 7–9 sessions vs 6–8 for legs. We assess this at your first appointment.' },
    ],
    related: ['full-arms', 'underarms', 'full-legs'],
  },

  'full-arms': {
    slug: 'full-arms',
    name: 'Full Arms Laser',
    tagline: 'Wrist to shoulder — complete permanent arm smoothness.',
    price: '$170 / session',
    priceNote: 'Package of 6 sessions: $918',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Full arms laser hair removal Toronto. Permanent hair reduction wrist to shoulder. $170/session at Elite Laser Kiosk.',
    description: [
      'Full arms is the complete treatment from wrist to shoulder — front, back, inner, and outer — on both arms. For clients who want comprehensive arm clearance, this is the most efficient approach.',
      'The full arm session takes 40–50 minutes and is more economical than booking upper and lower arms separately.',
    ],
    included: [
      'Complete bilateral arm treatment wrist to shoulder',
      'Front, back, inner, and outer zones',
      'Calibrated diode settings',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Calibrate', description: 'Settings adjusted for arm hair texture — typically finer than leg hair.' },
      { title: 'Systematic Coverage', description: 'Both arms done in sections. Inner arm zones are handled with care.' },
      { title: 'Finish', description: 'Post-treatment soothing lotion applied. Session 40–50 minutes total.' },
    ],
    benefits: [
      { title: 'Complete arm result', description: 'No patchy regrowth — full coverage from wrist to shoulder.' },
      { title: 'Better value', description: 'Full arms is cheaper than half arms × 2.' },
      { title: 'Wear what you want', description: 'Sleeveless, short-sleeved — no more hiding or managing arm hair.' },
    ],
    forWho: [
      'Clients with dark hair across both upper and lower arms',
      'Those wanting complete arm clearance',
    ],
    notForWho: [
      'Light or very fine arm hair',
      'Pregnant or nursing',
      'Active sun exposure',
    ],
    faqs: [
      { question: 'How long is a full arms session?', answer: '40–50 minutes including setup and aftercare.' },
    ],
    related: ['half-arms', 'underarms', 'full-legs'],
  },

  'back': {
    slug: 'back',
    name: 'Back Laser',
    tagline: 'Clear the back permanently — full coverage in one session.',
    price: '$160 / session',
    priceNote: 'Package of 6 sessions: $864',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Back laser hair removal Toronto. Permanent full back hair removal. $160/session at Elite Laser Kiosk.',
    description: [
      'Back laser is one of the most transformative treatments for clients who deal with heavy back hair — an area impossible to manage independently with temporary methods.',
      'The full back is treated in a single session of 40–55 minutes. Back hair is typically coarse and dark, which makes it highly responsive to 808nm diode laser.',
    ],
    included: [
      'Full back from neck to waistband',
      'Both sides, spine zone, and lower back',
      'Systematic overlapping passes',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Setup', description: 'Client lies face-down. Treatment proceeds from shoulders to waistband.' },
      { title: 'Systematic Zones', description: 'Upper back, mid-back, and lower back each done in full before moving on.' },
      { title: 'Spine Care', description: 'The spine zone receives careful coverage with adjusted settings.' },
      { title: 'Finish', description: 'Full-back soothing lotion. Mild warmth in treated areas fades within hours.' },
    ],
    benefits: [
      { title: 'Solves an unmanageable area', description: 'The back is impossible to shave or wax without assistance. Laser ends the problem permanently.' },
      { title: 'Coarse hair responds quickly', description: 'Heavy back hair is ideal for laser — significant visible reduction after just 2–3 sessions.' },
      { title: 'Full coverage', description: 'Shoulders to waistband, side to side — complete clearance.' },
      { title: 'Comfortable', description: 'The back has thicker skin — most clients find back treatments among the more comfortable large-area sessions.' },
    ],
    forWho: [
      'Clients with heavy or dark back hair',
      'Anyone frustrated with the inaccessibility of back hair management',
      'Clients preparing for summer or events',
    ],
    notForWho: [
      'Light or fine back hair',
      'Pregnant or nursing clients',
      'Active skin conditions (folliculitis, severe acne) on the back',
    ],
    faqs: [
      { question: 'Can I treat shoulders as well?', answer: 'Yes — shoulders are included in the back treatment zone. If you want the chest as well, book Chest & Stomach separately or ask about a combined quote.' },
      { question: 'Do I need someone to shave my back before the session?', answer: 'Yes — the treatment area should be shaved 24 hours prior. If that is not possible, we can shave it for you at the clinic for a small additional fee.' },
    ],
    related: ['chest-stomach', 'full-arms', 'full-body'],
  },

  'chest-stomach': {
    slug: 'chest-stomach',
    name: 'Chest & Stomach Laser',
    tagline: 'Front torso cleared — chest, abs, and everything between.',
    price: '$150 / session',
    priceNote: 'Package of 6 sessions: $810',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.10 0.04 248) 0%, oklch(0.17 0.07 240) 100%)',
    metaDescription: 'Chest and stomach laser hair removal Toronto. Permanent front torso clearance. $150/session at Elite Laser Kiosk.',
    description: [
      'Chest and stomach laser covers the full front torso — from the collarbone down to the waistband, including the sternum, pectoral areas, and stomach.',
      'This is a popular treatment for all genders. The session takes 35–45 minutes and the results are visible quickly — chest and stomach hair is typically coarse and responds well to the 808nm diode.',
    ],
    included: [
      'Full chest from collarbone to lower rib',
      'Stomach from lower rib to waistband',
      'Central sternum zone',
      'Calibrated settings throughout',
      'Post-treatment care',
    ],
    experience: [
      { title: 'Setup', description: 'Client lies face-up. Zones marked and calibration set.' },
      { title: 'Chest Treatment', description: 'Upper chest, pectoral zones, and sternum treated.' },
      { title: 'Stomach Treatment', description: 'Upper and lower abdomen — including any navel line hair.' },
      { title: 'Aftercare', description: 'Soothing lotion applied. Avoid tight clothing and gym for 24 hours.' },
    ],
    benefits: [
      { title: 'Visible results fast', description: 'Coarse chest and stomach hair is highly responsive — clients typically see major thinning after 3 sessions.' },
      { title: 'Complete front torso', description: 'Chest and stomach done together in one session — efficient and comprehensive.' },
      { title: 'Confidence at the beach', description: 'The front torso is what you see in a mirror and what others see poolside. Clearance here makes a visible difference.' },
    ],
    forWho: [
      'Clients with dark chest or stomach hair',
      'Those who shave or wax this area regularly',
      'Athletes wanting minimal body hair',
    ],
    notForWho: [
      'Very light or fine chest/stomach hair',
      'Pregnant or nursing',
      'Active chest acne or skin conditions',
    ],
    faqs: [
      { question: 'Can I just do the chest or just the stomach?', answer: 'Yes — chest only and stomach only can be booked as separate treatments at a lower price. Ask at booking.' },
    ],
    related: ['back', 'full-arms', 'full-body'],
  },

  'full-body': {
    slug: 'full-body',
    name: 'Full Body Package',
    tagline: 'Every zone. Every session. The most complete laser treatment available.',
    price: 'From $499 / session',
    priceNote: 'Custom packages available — ask for your full-body quote',
    category: 'body',
    heroGradient: 'linear-gradient(135deg, oklch(0.09 0.05 258) 0%, oklch(0.16 0.08 245) 100%)',
    metaDescription: 'Full body laser hair removal Toronto. Complete permanent body hair removal packages at Elite Laser Kiosk.',
    description: [
      'The full body package covers every treatment zone in a single scheduled session — face, underarms, arms, chest, stomach, back, bikini, and legs. It is the most comprehensive laser option we offer.',
      'Full body sessions are typically 2–2.5 hours. We price full body packages on a per-client basis depending on exact zones included and current hair density. Ask us for a quote.',
      'For clients committed to permanent body hair reduction across every zone, the full body package offers the best per-zone value and the most efficient path to complete clearance.',
    ],
    included: [
      'Consultation to define all treatment zones',
      'All body and face zones treated per session',
      'Consistent calibration across every zone',
      'Post-treatment full body care',
      'Custom session schedule and tracking',
    ],
    experience: [
      { title: 'Full Zone Consultation', description: 'We map every zone to be treated and build a session order that works efficiently.' },
      { title: 'Session Order', description: 'Face and sensitive zones first, then arms, then torso, then legs — in a logical progression.' },
      { title: 'Full Coverage', description: '2–2.5 hours of systematic treatment with cooling throughout.' },
      { title: 'Recovery Plan', description: 'Full aftercare plan given. Post-body session protocol covers all treated areas.' },
    ],
    benefits: [
      { title: 'Best per-zone value', description: 'Full body packages offer the most savings versus booking each zone individually.' },
      { title: 'One appointment', description: 'Instead of managing 8–10 separate bookings per cycle, one full body session covers everything.' },
      { title: 'Coordinated results', description: 'All zones progress together — the completion timeline is the same across the whole body.' },
      { title: 'Complete transformation', description: 'After a full course, clients typically retire all hair removal products and tools permanently.' },
    ],
    forWho: [
      'Clients wanting comprehensive whole-body clearance',
      'Those who currently spend significant time and money on body hair management',
      'Clients who prefer efficiency over piecemeal appointments',
    ],
    notForWho: [
      'Pregnant or nursing clients',
      'Clients with active widespread skin conditions',
      'Those only needing 1–2 zones (individual treatments more suitable)',
    ],
    faqs: [
      { question: 'How do you price a full body package?', answer: 'We quote based on the specific zones included, hair density, and whether a 6 or 8 session package makes more sense for your hair type. Contact us for a custom quote.' },
      { question: 'How long is each session?', answer: 'Full body sessions run 2–2.5 hours depending on the zones included.' },
      { question: 'Can I add or remove zones from my package?', answer: 'Yes — we adjust at any session. If you want to add a zone partway through, we add it to the remaining sessions.' },
    ],
    related: ['back', 'chest-stomach', 'full-legs'],
  },
}

export const allServices = Object.values(services)

export const servicesByCategory = {
  face: allServices.filter(s => s.category === 'face'),
  body: allServices.filter(s => s.category === 'body'),
}

export const featuredServices = [
  services['underarms'],
  services['full-legs'],
  services['full-face'],
]
