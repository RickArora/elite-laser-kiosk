import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/back')({
  head: () => ({
    meta: [
      { title: `${services['back'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['back'].metaDescription },
      { property: 'og:title', content: `${services['back'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UbackPage,
})

function UbackPage() {
  return <ServicePage service={services['back']} />
}
