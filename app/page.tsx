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

// Import critical components directly
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import Hero from '@/app/@components/sections/Hero';
import Services from '@/app/@components/sections/Services';
import CTABanner from '@/app/@components/sections/CTABanner';
import SEO from '@/app/@components/shared/SEO';
import ErrorBoundary from '@/app/@components/ui/ErrorBoundary';

// Dynamically import below-fold components
const WhyChooseUs = dynamic(() => import('@/app/@components/sections/WhyChooseUs'));
const ServiceAreas = dynamic(() => import('@/app/@components/sections/ServiceAreas'));
const About = dynamic(() => import('@/app/@components/sections/About'));
const Testimonials = dynamic(() => import('@/app/@components/sections/Testimonials'));
const Contact = dynamic(() => import('@/app/@components/sections/Contact'));
const FAQ = dynamic(() => import('@/app/@components/sections/FAQ'));

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
 * Sections are rendered in a specific order to create a cohesive user experience
 */
export default function HomePage() {
  return (
    <MainLayout>
      <SEO type="all" />
      
      {/* Critical above-fold content rendered immediately */}
      <div className="critical-content">
        <SectionWrapper name="Hero">
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper name="Services">
          <Services />
        </SectionWrapper>
        
        <SectionWrapper name="CTA Banner">
          <CTABanner />
        </SectionWrapper>
      </div>
      
      {/* Below-fold content loaded after initial render */}
      <Suspense fallback={<div className="min-h-[30rem] bg-gray-50" />}>
        <div className="below-fold-content">
          <SectionWrapper name="Why Choose Us">
            <WhyChooseUs />
          </SectionWrapper>
          
          <SectionWrapper name="Service Areas">
            <ServiceAreas />
          </SectionWrapper>
          
          <SectionWrapper name="About">
            <About />
          </SectionWrapper>
          
          <SectionWrapper name="Testimonials">
            <Testimonials />
          </SectionWrapper>
          
          <SectionWrapper name="Contact">
            <Contact />
          </SectionWrapper>
          
          <SectionWrapper name="FAQ">
            <FAQ />
          </SectionWrapper>
        </div>
      </Suspense>
    </MainLayout>
  );
}
