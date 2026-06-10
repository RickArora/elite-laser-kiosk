import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/bikini-line')({
  head: () => ({
    meta: [
      { title: `${services['bikini-line'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['bikini-line'].metaDescription },
      { property: 'og:title', content: `${services['bikini-line'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UbikiniUlinePage,
})

function UbikiniUlinePage() {
  return <ServicePage service={services['bikini-line']} />
}
