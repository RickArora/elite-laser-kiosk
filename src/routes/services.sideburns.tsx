import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/sideburns')({
  head: () => ({
    meta: [
      { title: `${services['sideburns'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['sideburns'].metaDescription },
      { property: 'og:title', content: `${services['sideburns'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UsideburnsPage,
})

function UsideburnsPage() {
  return <ServicePage service={services['sideburns']} />
}
