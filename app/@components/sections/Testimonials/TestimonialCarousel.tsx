'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  // Safeguard against empty testimonials
  if (!testimonials || testimonials.length === 0) {
    console.warn('No testimonials provided to carousel');
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Items per view depends on screen size
  // For mobile (< 768px width), show only 1 item per view (carousel mode)
  // For desktop, show 3 items side by side
  const itemsPerView = isMobile ? 1 : 3;
  
  // Total number of "pages" in the carousel
  const totalPages = Math.ceil(testimonials.length / itemsPerView);
  
  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Check visibility after mounting
  useEffect(() => {
    // Give the browser time to render, then check if the testimonials are visible
    setTimeout(() => {
      const testimonialCards = document.querySelectorAll('.testimonial-carousel-item');
    }, 1000);
  }, []);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Touch event handlers for mobile swipe - improved sensitivity
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX); // Reset touchEnd to prevent unintended swipes
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // More sensitive swipe detection for mobile (reduced threshold)
    if (touchStart - touchEnd > 30) {
      // Swipe left, go to next
      goToNext();
    }
    
    if (touchEnd - touchStart > 30) {
      // Swipe right, go to previous
      goToPrevious();
    }
  };

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIdx = currentIndex * itemsPerView;
    // Ensure we don't exceed array bounds
    return testimonials.slice(startIdx, Math.min(startIdx + itemsPerView, testimonials.length));
  };

  // Get currently visible testimonials
  const visibleTestimonials = getCurrentTestimonials();

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div 
        className="w-full bg-transparent"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8"
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <div 
              key={`${testimonial.author}-${idx}`} 
              className="w-full h-full min-h-[300px] testimonial-carousel-item opacity-100 visible"
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
              />
            </div>
          ))}
          
          {/* Fill in empty slots if needed on desktop */}
          {!isMobile && visibleTestimonials.length < itemsPerView && (
            Array.from({ length: itemsPerView - visibleTestimonials.length }).map((_, idx) => (
              <div key={`empty-${idx}`} className="w-full h-full bg-transparent"></div>
            ))
          )}
        </div>
      </div>

      {/* Navigation Controls - Only show if we have enough testimonials to navigate */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 gap-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          {/* Indicators */}
          <div className="flex items-center space-x-3">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial page ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
