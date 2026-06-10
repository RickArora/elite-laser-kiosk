import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/chin')({
  head: () => ({
    meta: [
      { title: `${services['chin'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['chin'].metaDescription },
      { property: 'og:title', content: `${services['chin'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UchinPage,
})

function UchinPage() {
  return <ServicePage service={services['chin']} />
}
