import { createFileRoute } from '@tanstack/react-router'
import { services } from '../lib/services'
import ServicePage from '../components/site/ServicePage'

export const Route = createFileRoute('/services/full-body')({
  head: () => ({
    meta: [
      { title: `${services['full-body'].name} | Elite Laser Kiosk` },
      { name: 'description', content: services['full-body'].metaDescription },
      { property: 'og:title', content: `${services['full-body'].name} | Elite Laser Kiosk` },
    ],
  }),
  component: UfullUbodyPage,
})

function UfullUbodyPage() {
  return <ServicePage service={services['full-body']} />
}
