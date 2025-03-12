'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import TestimonialCard from './TestimonialCard';

// Import the server component with dynamic to make it compatible with Suspense
const TestimonialList = dynamic(() => import('./TestimonialList'), {
  ssr: true,
  loading: () => <TestimonialsSkeleton />
});

/**
 * Skeleton loader component for testimonials while they're loading
 */
const TestimonialsSkeleton = () => {
  return (
    <div className="space-y-8">
      {[1, 2].map((index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="flex items-center">
            <div className="rounded-full bg-gray-200 h-12 w-12"></div>
            <div className="ml-4">
              <div className="h-3 bg-gray-200 rounded w-24 mb-2"></div>
              <div className="h-2 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/**
 * Testimonials Section Component
 *
 * Displays client testimonials in a clean, focused layout.
 * Uses Suspense and streaming for improved performance
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

        <div className="max-w-4xl mx-auto">
          {/* Wrap the server component with Suspense for streaming */}
          <Suspense fallback={<TestimonialsSkeleton />}>
            <TestimonialList />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
