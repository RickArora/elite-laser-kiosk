import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/brazilian')({
  head: () => ({
    meta: [
      { title: `${services['brazilian'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['brazilian'].metaDescription },
      { property: 'og:title', content: `${services['brazilian'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UbrazilianPage,
})

function UbrazilianPage() {
  return <ServicePage service={services['brazilian']} />
}
