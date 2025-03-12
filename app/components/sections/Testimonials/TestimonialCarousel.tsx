'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next
      goToNext();
    }
    
    if (touchEnd - touchStart > 50) {
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
        className="overflow-hidden w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Simpler animation approach */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 min-h-[250px]"
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <div key={`${testimonial.author}-${idx}`} className="w-full h-full">
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
        </motion.div>
      </div>

      {/* Navigation Controls - Only show if we have enough testimonials to navigate */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          {/* Indicators */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial page ${idx + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={goToNext}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel; 