import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/half-arms')({
  head: () => ({
    meta: [
      { title: `${services['half-arms'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['half-arms'].metaDescription },
      { property: 'og:title', content: `${services['half-arms'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UhalfUarmsPage,
})

function UhalfUarmsPage() {
  return <ServicePage service={services['half-arms']} />
}
