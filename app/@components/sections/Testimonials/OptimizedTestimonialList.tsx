import React from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';
import { Grid, Column } from '../../ui/layout';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 * 
 * A more performant version of the testimonial list that reduces DOM size
 * by limiting animations and using optimal rendering patterns.
 * 
 * Uses Grid and Column components for responsive layout.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  return (
    <Grid columns={{ default: 1, md: 2, lg: 3 }} gap={{ default: 6, md: 8 }}>
      {testimonials.map((testimonial, index) => (
        <Column key={index}>
          <div 
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
        </Column>
      ))}
    </Grid>
  );
};

export default OptimizedTestimonialList; 