import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/half-legs')({
  head: () => ({
    meta: [
      { title: `${services['half-legs'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['half-legs'].metaDescription },
      { property: 'og:title', content: `${services['half-legs'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UhalfUlegsPage,
})

function UhalfUlegsPage() {
  return <ServicePage service={services['half-legs']} />
}
