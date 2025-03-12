'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';

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
 * Testimonials Section Component
 *
 * Displays client testimonials in a responsive carousel.
 * Desktop: Displays 3 testimonials side by side
 * Mobile: Displays 1 testimonial with swipe functionality
 */
const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Use Suspense with TestimonialList (which now returns the carousel) */}
          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialList />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
