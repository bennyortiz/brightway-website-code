import { Metadata } from 'next'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import MainLayout from './components/layout/MainLayout'
import SEO from './components/shared/SEO'
import { generatePageMetadata } from './utils/metadata'

export const metadata: Metadata = generatePageMetadata({
  pageType: 'home',
})

export default function Home() {
  return (
    <MainLayout>
      <SEO type="all" />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </MainLayout>
  )
} 