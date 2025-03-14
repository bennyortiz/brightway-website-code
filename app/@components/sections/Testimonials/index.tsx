'use client';

import React, { Suspense, useEffect, useState, useMemo } from 'react';
import { TestimonialItem, testimonials as staticTestimonials } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { Section } from '../../ui/layout';

/**
 * Skeleton loader component for testimonials while they're loading
 */
const TestimonialsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3].map((index) => (
        <div key={index} className="px-3">
          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 animate-pulse">
            <div className="h-6 bg-gray-200 rounded-full w-12 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Use dynamic import with a smaller, more performant implementation
const TestimonialCarousel = dynamic(
  () => import('./OptimizedTestimonialList'), 
  {
    loading: () => <TestimonialsSkeleton />,
    ssr: false
  }
);

/**
 * Testimonials Section Component
 *
 * Displays client testimonials in a carousel with the following features:
 * - 3 testimonials per slide on desktop
 * - 1 testimonial per slide on mobile
 * - Touch-friendly swiping
 * - Autoplay with pause on hover
 * - Optimized for performance with lazy loading
 */
const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Load testimonials only when in view
  useEffect(() => {
    if (inView && !isLoaded) {
      setIsLoaded(true);
    }
  }, [inView, isLoaded]);
  
  // Make sure we have at least 6 testimonials for the carousel
  const displayedTestimonials = useMemo(() => {
    let items = [...staticTestimonials];
    // If we have fewer than 6 testimonials, duplicate them
    while (items.length < 6) {
      items = [...items, ...staticTestimonials];
    }
    return items.slice(0, 9); // Show up to 9 testimonials for better carousel experience
  }, []);

  return (
    <div id="testimonials" ref={ref}>
      <Section 
        className="bg-gradient-to-b from-white to-gray-50 relative z-0 overflow-hidden"
        spacing="xl"
      >
        {/* Decorative background - simplified */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-primary/5"></div>

        <div className="relative z-10">
          {/* Section header with visual accent */}
          <div className="text-center mb-12 md:mb-16 relative">
            <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how we've helped businesses keep their spaces clean and their clients impressed.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Only load the component when in view */}
            {isLoaded ? (
              <TestimonialCarousel testimonials={displayedTestimonials} />
            ) : (
              <TestimonialsSkeleton />
            )}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center justify-center py-3 px-8 font-semibold text-white bg-primary rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-300">
              Get a Free Quote
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
