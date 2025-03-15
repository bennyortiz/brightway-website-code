import React from 'react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';
import { Carousel } from '@/app/@components/ui/carousel';

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[];
  cardStyle?: 'standard' | 'transparent';
}

/**
 * TestimonialsCarousel Component
 *
 * A specialized carousel for testimonials that uses the reusable Carousel component
 */
const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  cardStyle = 'standard',
}) => {
  // If no testimonials are provided, render placeholder
  if (!testimonials || testimonials.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">No testimonials available at this time.</p>
      </div>
    );
  }

  // Render a single testimonial card
  const renderTestimonial = (testimonial: TestimonialItem, _index: number) => {
    return (
      <TestimonialCard
        quote={testimonial.quote}
        author={testimonial.author}
        position={testimonial.position}
        company={testimonial.company}
        transparent={cardStyle === 'transparent'}
      />
    );
  };

  return (
    <div className="w-full">
      <Carousel
        items={testimonials}
        renderItem={renderTestimonial}
        itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
        autoPlay={false}
        showControls={true}
        showIndicators={true}
      />
    </div>
  );
};

export default TestimonialsCarousel;
