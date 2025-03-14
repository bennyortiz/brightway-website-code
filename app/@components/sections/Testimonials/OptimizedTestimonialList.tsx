'use client';

import React from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';
import Slider from 'react-slick';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 * 
 * A carousel implementation for testimonials that shows:
 * - 3 cards per slide on desktop
 * - 1 card per slide on mobile devices
 * 
 * Uses react-slick for the carousel functionality with custom styling and navigation.
 * Styles are loaded from globals.css to ensure compatibility with NextJS build.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  // Configure slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ],
    className: "testimonial-carousel"
  };

  return (
    <div className="testimonials-carousel-wrapper py-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="h-full">
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OptimizedTestimonialList; 