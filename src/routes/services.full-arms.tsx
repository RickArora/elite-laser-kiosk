import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/full-arms')({
  head: () => ({
    meta: [
      { title: `${services['full-arms'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['full-arms'].metaDescription },
      { property: 'og:title', content: `${services['full-arms'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UfullUarmsPage,
})

function UfullUarmsPage() {
  return <ServicePage service={services['full-arms']} />
}
