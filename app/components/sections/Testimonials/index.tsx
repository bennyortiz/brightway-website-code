'use client';

import React, { Suspense, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';
import { testimonials as staticTestimonials } from './testimonialsData';

// Lazy-load the TestimonialList (server component)
const TestimonialList = dynamic(() => import('./TestimonialList'), {
  loading: () => <TestimonialsSkeleton />
});

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
    <section id="testimonials" className="w-full py-16 md:py-28 bg-gray-50 relative z-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Primary: Use Suspense with TestimonialList */}
          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialList />
          </Suspense>

          {/* Fallback: If dynamic loading fails completely, show static testimonials after 5 seconds */}
          <div id="testimonial-fallback" className="hidden">
            <DirectTestimonials testimonials={staticTestimonials} />
          </div>
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
