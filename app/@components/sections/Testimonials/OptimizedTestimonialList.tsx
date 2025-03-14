'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { TestimonialItem } from '@/app/@lib/data/testimonials';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OptimizedTestimonialListProps {
  testimonials: TestimonialItem[];
}

/**
 * OptimizedTestimonialList Component
 * 
 * A custom carousel implementation for testimonials that shows:
 * - 3 cards per slide on desktop
 * - 1 card per slide on mobile devices
 * 
 * Built using only React hooks and CSS, with no external dependencies.
 */
const OptimizedTestimonialList = ({ testimonials }: OptimizedTestimonialListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [autoplay, setAutoplay] = useState(true);
  
  // Function to determine how many items to display based on screen width
  const updateItemsPerSlide = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    }
  }, []);
  
  // Update items per slide when window is resized
  useEffect(() => {
    updateItemsPerSlide();
    
    const handleResize = () => {
      updateItemsPerSlide();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateItemsPerSlide]);
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex, autoplay, testimonials.length, itemsPerSlide]);
  
  // Navigate to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(0, testimonials.length - itemsPerSlide);
      }
      return Math.max(0, prevIndex - itemsPerSlide);
    });
  }, [testimonials.length, itemsPerSlide]);
  
  // Navigate to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxStartIndex = Math.max(0, testimonials.length - itemsPerSlide);
      if (prevIndex >= maxStartIndex) {
        return 0;
      }
      return Math.min(maxStartIndex, prevIndex + itemsPerSlide);
    });
  }, [testimonials.length, itemsPerSlide]);
  
  // Calculate visible testimonials
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  );
  
  // Generate indicators for the pagination dots
  const indicators = [];
  for (let i = 0; i < Math.ceil(testimonials.length / itemsPerSlide); i++) {
    indicators.push(
      <button
        key={i}
        className={`h-2 w-2 rounded-full mx-1 focus:outline-none ${
          i === Math.floor(currentIndex / itemsPerSlide)
            ? 'bg-primary'
            : 'bg-gray-300'
        }`}
        onClick={() => setCurrentIndex(i * itemsPerSlide)}
        aria-label={`Go to slide ${i + 1}`}
      />
    );
  }
  
  return (
    <div 
      className="testimonials-carousel-wrapper py-4 relative"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full shadow-md -ml-4 hidden md:block"
        onClick={prevSlide}
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>
      
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 p-2 rounded-full shadow-md -mr-4 hidden md:block"
        onClick={nextSlide}
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>
      
      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={`${currentIndex}-${index}`} className="opacity-0 animate-fadeIn" style={{animation: `fadeIn 0.5s forwards ${index * 150}ms`}}>
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
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center mt-6">
        {indicators}
      </div>
    </div>
  );
};

export default OptimizedTestimonialList; 