import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/chest-stomach')({
  head: () => ({
    meta: [
      { title: `${services['chest-stomach'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['chest-stomach'].metaDescription },
      { property: 'og:title', content: `${services['chest-stomach'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UchestUstomachPage,
})

function UchestUstomachPage() {
  return <ServicePage service={services['chest-stomach']} />
}
