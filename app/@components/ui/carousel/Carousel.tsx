import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemsPerView?: {
    mobile: number;
    tablet?: number;
    desktop: number;
  };
  gap?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
  containerClassName?: string;
}

/**
 * Reusable Carousel Component
 *
 * A flexible carousel that can display any type of content with responsive behavior
 */
export function Carousel<T>({
  items,
  renderItem,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  gap = 'gap-4 md:gap-6 lg:gap-8',
  autoPlay = false,
  autoPlayInterval = 5000,
  showControls = true,
  showIndicators = true,
  className = '',
  containerClassName = '',
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Determine items per view based on screen size
  const getItemsPerView = () => {
    if (windowWidth < 640) {
      return itemsPerView.mobile;
    } else if (windowWidth < 1024) {
      return itemsPerView.tablet || itemsPerView.mobile;
    } else {
      return itemsPerView.desktop;
    }
  };

  const currentItemsPerView = getItemsPerView();

  // Total number of "pages" in the carousel
  const totalPages = Math.ceil(items.length / currentItemsPerView);

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    // Swipe detection
    if (touchStart - touchEnd > 30) {
      // Swipe left, go to next
      goToNext();
    }

    if (touchEnd - touchStart > 30) {
      // Swipe right, go to previous
      goToPrevious();
    }
  };

  // Get current items to display
  const getCurrentItems = () => {
    const startIdx = currentIndex * currentItemsPerView;
    return items.slice(startIdx, Math.min(startIdx + currentItemsPerView, items.length));
  };

  // Get currently visible items
  const visibleItems = getCurrentItems();

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className={`w-full ${className}`}>
      {/* Main Carousel */}
      <div
        className={`w-full ${containerClassName}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-${Math.min(
            itemsPerView.tablet || 2,
            items.length
          )} lg:grid-cols-${Math.min(itemsPerView.desktop, items.length)} ${gap}`}
        >
          {visibleItems.map((item, idx) => (
            <div key={idx} className="carousel-item w-full h-full">
              {renderItem(item, idx)}
            </div>
          ))}

          {/* Fill in empty slots if needed */}
          {windowWidth >= 640 &&
            visibleItems.length < currentItemsPerView &&
            Array.from({ length: currentItemsPerView - visibleItems.length }).map((_, idx) => (
              <div key={`empty-${idx}`} className="w-full h-full"></div>
            ))}
        </div>
      </div>

      {/* Navigation Controls - Only show if we have enough items to navigate */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 md:mt-12 gap-4">
          {/* Previous Button */}
          {showControls && (
            <button
              onClick={goToPrevious}
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-200"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5 text-primary" />
            </button>
          )}

          {/* Indicators */}
          {showIndicators && (
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Next Button */}
          {showControls && (
            <button
              onClick={goToNext}
              className="p-3 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors 
                       focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-200"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5 text-primary" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
