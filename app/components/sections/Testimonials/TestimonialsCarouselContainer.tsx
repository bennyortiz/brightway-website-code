'use client';

import React, { useEffect } from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCarousel from './TestimonialCarousel';

interface TestimonialsCarouselContainerProps {
  testimonials: TestimonialItem[];
}

/**
 * Client component that receives testimonials data from server component
 * and renders the carousel
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
    return <div className="text-center p-8">No testimonials available at this time.</div>;
  }

  return (
    <div className="w-full relative z-10 overflow-visible">
      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsCarouselContainer; 