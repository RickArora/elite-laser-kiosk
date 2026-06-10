import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/upper-lip')({
  head: () => ({
    meta: [
      { title: `${services['upper-lip'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['upper-lip'].metaDescription },
      { property: 'og:title', content: `${services['upper-lip'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UupperUlipPage,
})

function UupperUlipPage() {
  return <ServicePage service={services['upper-lip']} />
}
