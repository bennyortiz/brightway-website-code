'use client';

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

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Import critical above-fold components directly
import Hero from '@/app/@components/sections/Hero';
import Services from '@/app/@components/sections/Services';
import CTABanner from '@/app/@components/sections/CTABanner';
import SEO from '@/app/@components/shared/SEO';

// Dynamically import below-fold components
const MainLayout = dynamic(() => import('@/app/@components/ui/layout/MainLayout'));
const WhyChooseUs = dynamic(() => import('@/app/@components/sections/WhyChooseUs'));
const ServiceAreas = dynamic(() => import('@/app/@components/sections/ServiceAreas'));
const About = dynamic(() => import('@/app/@components/sections/About'));
const Testimonials = dynamic(() => import('@/app/@components/sections/Testimonials'));
const Contact = dynamic(() => import('@/app/@components/sections/Contact'));
const FAQ = dynamic(() => import('@/app/@components/sections/FAQ'));
const CTASecondaryBanner = dynamic(() => import('@/app/@components/sections/CTABanner/CTASecondaryBanner'));

// Import ErrorBoundary
const ErrorBoundary = dynamic(() => import('@/app/@components/ui/ErrorBoundary'));

/**
 * Section Wrapper
 * 
 * A helper component that wraps each section in an ErrorBoundary
 * to prevent errors in one section from crashing the entire page
 */
const SectionWrapper = ({ children, name }: { children: React.ReactNode; name: string }) => (
  <ErrorBoundary
    fallback={(error, reset) => (
      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Unable to load {name} section
          </h2>
          <p className="text-gray-600 mb-6">
            We encountered an error while loading this content.
          </p>
          <button
            onClick={reset}
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    )}
  >
    {children}
  </ErrorBoundary>
);

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
      
      {/* Hero section - First impression */}
      <SectionWrapper name="Hero">
        <Hero />
      </SectionWrapper>
      
      {/* Services section - What we do */}
      <SectionWrapper name="Services">
        <Services />
      </SectionWrapper>
      
      {/* Below-fold content loaded after initial render */}
      <Suspense fallback={<div className="min-h-[30rem] bg-gray-50" />}>
        <div className="below-fold-content">
          {/* About section - Who we are */}
          <SectionWrapper name="About">
            <About />
          </SectionWrapper>
          
          {/* Why Choose Us - Our advantages */}
          <SectionWrapper name="Why Choose Us">
            <WhyChooseUs />
          </SectionWrapper>
          
          {/* Service Areas - Where we operate */}
          <SectionWrapper name="Service Areas">
            <ServiceAreas />
          </SectionWrapper>
          
          {/* First CTA Banner - After establishing who we are and what we do */}
          <SectionWrapper name="CTA Banner">
            <CTABanner />
          </SectionWrapper>
          
          {/* Testimonials - Proof from clients */}
          <SectionWrapper name="Testimonials">
            <Testimonials />
          </SectionWrapper>
          
          {/* FAQ - Answer common questions */}
          <SectionWrapper name="FAQ">
            <FAQ />
          </SectionWrapper>
          
          {/* Second CTA Banner - Before contact form */}
          <SectionWrapper name="Secondary CTA Banner">
            <CTASecondaryBanner />
          </SectionWrapper>
          
          {/* Contact - Final action point */}
          <SectionWrapper name="Contact">
            <Contact />
          </SectionWrapper>
        </div>
      </Suspense>
    </MainLayout>
  );
}
