import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/brow-define')({
  head: () => ({
    meta: [
      { title: `${services['brow-define'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['brow-define'].metaDescription },
      { property: 'og:title', content: `${services['brow-define'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UbrowUdefinePage,
})

function UbrowUdefinePage() {
  return <ServicePage service={services['brow-define']} />
}
