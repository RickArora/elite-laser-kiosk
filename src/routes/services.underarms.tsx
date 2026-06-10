import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/underarms')({
  head: () => ({
    meta: [
      { title: `${services['underarms'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['underarms'].metaDescription },
      { property: 'og:title', content: `${services['underarms'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UunderarmsPage,
})

function UunderarmsPage() {
  return <ServicePage service={services['underarms']} />
}
