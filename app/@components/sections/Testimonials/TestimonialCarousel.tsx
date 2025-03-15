'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialItem } from './testimonialsData';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  transparent?: boolean;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
  transparent = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Handle window resize for responsive behavior
  useEffect(() => {
    // If no testimonials, don't bother with effects
    if (!testimonials || testimonials.length === 0) return;
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [testimonials]);

  // Ensure all cards have the same height
  useEffect(() => {
    // If no testimonials, don't bother with effects
    if (!testimonials || testimonials.length === 0) return;
    
    const calculateMaxHeight = () => {
      // Reset height to auto to get natural heights
      cardsRef.current.forEach((card) => {
        if (card) card.style.height = 'auto';
      });

      // Get the maximum height
      const heights = cardsRef.current.map((card) => card?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);

      // Set all cards to the max height
      if (maxHeight > 0) {
        setCardHeight(maxHeight);
      }
    };

    // Calculate initial heights after a short delay to ensure rendering
    const timer = setTimeout(calculateMaxHeight, 100);

    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);

    // Clean up
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, [testimonials, isMobile, currentIndex]);

  // Safeguard against empty testimonials
  if (!testimonials || testimonials.length === 0) {
    console.warn('No testimonials provided to carousel');
    return null;
  }

  // Items per view depends on screen size
  const itemsPerView = isMobile ? 1 : 3;

  // Total number of "pages" in the carousel
  const totalPages = Math.ceil(testimonials.length / itemsPerView);

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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          style={{
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {visibleTestimonials.map((testimonial, idx) => (
            <div
              key={`${testimonial.author}-${idx}`}
              className="w-full testimonial-carousel-item"
              ref={(el) => (cardsRef.current[idx] = el)}
              style={{ height: cardHeight ? `${cardHeight}px` : 'auto' }}
            >
              <TestimonialCard
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                transparent={transparent}
              />
            </div>
          ))}

          {/* Fill in empty slots if needed on desktop */}
          {!isMobile &&
            visibleTestimonials.length < itemsPerView &&
            Array.from({ length: itemsPerView - visibleTestimonials.length }).map((_, idx) => (
              <div key={`empty-${idx}`} className="w-full h-full bg-transparent"></div>
            ))}
        </div>
      </div>

      {/* Navigation Controls - Only show if we have enough testimonials to navigate */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-4">
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
