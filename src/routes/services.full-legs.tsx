import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/full-legs')({
  head: () => ({
    meta: [
      { title: `${services['full-legs'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['full-legs'].metaDescription },
      { property: 'og:title', content: `${services['full-legs'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UfullUlegsPage,
})

function UfullUlegsPage() {
  return <ServicePage service={services['full-legs']} />
}
