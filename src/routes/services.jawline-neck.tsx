import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/jawline-neck')({
  head: () => ({
    meta: [
      { title: `${services['jawline-neck'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['jawline-neck'].metaDescription },
      { property: 'og:title', content: `${services['jawline-neck'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UjawlineUneckPage,
})

function UjawlineUneckPage() {
  return <ServicePage service={services['jawline-neck']} />
}
