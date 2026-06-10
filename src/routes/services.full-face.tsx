import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/full-face')({
  head: () => ({
    meta: [
      { title: `${services['full-face'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['full-face'].metaDescription },
      { property: 'og:title', content: `${services['full-face'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UfullUfacePage,
})

function UfullUfacePage() {
  return <ServicePage service={services['full-face']} />
}
