import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import '../styles.css'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
