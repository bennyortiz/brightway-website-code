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

'use client';

import Hero from '@/app/@components/sections/Hero';
import Services from '@/app/@components/sections/Services';
import ServiceAreas from '@/app/@components/sections/ServiceAreas';
import WhyChooseUs from '@/app/@components/sections/WhyChooseUs';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import SEO from '@/app/@components/shared/SEO';
import CTABanner from '@/app/@components/sections/CTABanner';
import { Suspense, lazy } from 'react';

// Dynamic imports for below-fold components
const About = lazy(() => import('@/app/@components/sections/About'));
const Testimonials = lazy(() => import('@/app/@components/sections/Testimonials'));
const Contact = lazy(() => import('@/app/@components/sections/Contact'));
const FAQ = lazy(() => import('@/app/@components/sections/FAQ'));

/**
 * Home Page Component
 *
 * The main page component that assembles all sections of the landing page
 * Sections are rendered in a specific order to create a cohesive user experience:
 * 1. Hero - Main banner with headline and call to action
 * 2. Services - Overview of cleaning services offered
 * 3. About - Company information and values
 * 4. Why Choose Us - Competitive advantages and benefits
 * 5. Service Areas - Locations where we provide services
 * 6. Testimonials - Customer reviews and feedback
 * 7. FAQ - Frequently asked questions
 * 8. Contact - Contact form and information
 */
export default function HomePage() {
  return (
    <MainLayout>
      <SEO type="all" />
      <Hero />
      <Services />
      <CTABanner />
      
      {/* Below-fold content loaded after initial render */}
      <Suspense fallback={<div className="min-h-[30rem] bg-gray-50" />}>
        <div className="below-fold-content">
          <WhyChooseUs />
          <ServiceAreas />
          <About />
          <Testimonials />
          <Contact />
          <FAQ />
        </div>
      </Suspense>
    </MainLayout>
  );
}
