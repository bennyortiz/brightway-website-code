/**
 * Home Page Component
 * 
 * This is the main landing page of the Brightway Cleaning website.
 * It serves as the entry point for users and showcases the company's services,
 * about information, testimonials, and contact details.
 * 
 * The page follows Next.js 13+ App Router pattern where page.tsx represents
 * the main content rendered at the root route (/).
 */

import { Metadata } from 'next'
import { Hero, Services, About, Testimonials, Contact } from './components/sections'
import { MainLayout } from './components/layout'
import { SEO } from './components/shared'
import { generatePageMetadata } from './utils'

/**
 * Page Metadata
 * 
 * Defines metadata for the home page using Next.js Metadata API
 * This includes SEO elements like title, description, and Open Graph data
 * The metadata is generated using a utility function for consistency
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'home',
})

/**
 * Home Component
 * 
 * The main page component that assembles all sections of the landing page
 * Sections are rendered in a specific order to create a cohesive user experience:
 * 1. Hero - Main banner with headline and call to action
 * 2. Services - Overview of cleaning services offered
 * 3. About - Company information and values
 * 4. Testimonials - Customer reviews and feedback
 * 5. Contact - Contact form and information
 */
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