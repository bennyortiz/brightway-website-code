'use client';

import React, { Suspense, useEffect } from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';
import { testimonials as staticTestimonials } from './testimonialsData';
import dynamic from 'next/dynamic';

/**
 * Skeleton loader component for testimonials while they're loading
 */
const TestimonialsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {[1, 2, 3].map((index) => (
        <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 animate-pulse">
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
      ))}
    </div>
  );
};

// Use dynamic import instead of lazyLoad for the TestimonialList component
const TestimonialList = dynamic(() => import('./TestimonialList'), {
  loading: () => <TestimonialsSkeleton />,
  ssr: false
});

/**
 * Fallback testimonials component - a direct rendering of testimonials without the carousel
 * This is used as a last resort if the dynamic loading fails
 */
const DirectTestimonials = ({ testimonials }: { testimonials: TestimonialItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="min-h-[300px]">
          <TestimonialCard
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
          />
        </div>
      ))}
    </div>
  );
};

/**
 * Testimonials Section Component
 *
 * Displays client testimonials in a responsive carousel.
 * Desktop: Displays 3 testimonials side by side
 * Mobile: Displays 1 testimonial with swipe functionality
 */
const Testimonials = () => {
  // Client-side detection for debugging
  useEffect(() => {
    console.log('Testimonials section mounted');
  }, []);

  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative z-0 overflow-hidden">
      {/* Decorative background - simplified, removed circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-primary/5">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with visual accent */}
        <div className="text-center mb-16 relative">
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1 rounded-full mb-3">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped businesses keep their spaces clean and their clients impressed.
          </p>
          <div className="absolute w-16 h-1 bg-primary rounded-full left-1/2 transform -translate-x-1/2 bottom-0 mt-4"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Use dynamic import instead of Suspense with TestimonialList */}
          <TestimonialList />

          {/* Fallback: If dynamic loading fails completely, show static testimonials after 5 seconds */}
          <div id="testimonial-fallback" className="hidden">
            <DirectTestimonials testimonials={staticTestimonials} />
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">Join our satisfied customers today.</p>
          <a href="#contact" className="inline-flex items-center justify-center py-3 px-8 font-semibold text-white bg-primary rounded-full hover:bg-primary-dark hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Script to reveal fallback testimonials if needed */}
      <script dangerouslySetInnerHTML={{
        __html: `
          setTimeout(() => {
            // Check if any testimonial cards are visible
            const visibleCards = document.querySelectorAll('.testimonial-carousel-item');
            if (visibleCards.length === 0) {
              console.log('No visible testimonial cards detected, showing fallback');
              document.getElementById('testimonial-fallback').classList.remove('hidden');
            }
          }, 5000);
        `
      }} />
    </section>
  );
};

export default Testimonials;
