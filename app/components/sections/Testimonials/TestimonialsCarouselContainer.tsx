'use client';

import React, { useEffect } from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialsCarouselContainerProps {
  testimonials: TestimonialItem[];
}

/**
 * Client component that receives testimonials data from server component
 * and renders the carousel with enhanced visual styling
 */
const TestimonialsCarouselContainer: React.FC<TestimonialsCarouselContainerProps> = ({ 
  testimonials 
}) => {
  useEffect(() => {
    // Log testimonials on client-side for debugging
    console.log('TestimonialsCarouselContainer mounted with', testimonials.length, 'testimonials');
  }, [testimonials]);

  // If no testimonials are provided, render placeholder
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">No testimonials available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full relative z-10">
      {/* Visual enhancement for carousel container */}
      <div className="absolute inset-0 bg-primary/5 -z-10 rounded-3xl transform -rotate-1 scale-105 opacity-70"></div>
      
      {/* Carousel content */}
      <div className="relative py-4">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
      
      {/* Decorative dots pattern */}
      <div className="absolute top-12 left-8 grid grid-cols-3 gap-2 opacity-10 -z-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-primary"></div>
        ))}
      </div>
      
      {/* Additional decorative element */}
      <div className="absolute bottom-12 right-8 w-24 h-24 rounded-full border-4 border-dashed border-primary/10 -z-10"></div>
    </div>
  );
};

export default TestimonialsCarouselContainer; 