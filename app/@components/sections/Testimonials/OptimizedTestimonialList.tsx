import React from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 * 
 * A more performant version of the testimonial list that reduces DOM size
 * by limiting animations and using optimal rendering patterns.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="testimonial-item optimized-rendering"
          // Use content-visibility to avoid rendering testimonials that are off-screen
          style={{ 
            contentVisibility: 'auto',
            containIntrinsicSize: '0 300px',
          }}
        >
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

export default OptimizedTestimonialList; 