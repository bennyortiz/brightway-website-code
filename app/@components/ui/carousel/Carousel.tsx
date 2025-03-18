import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  swipeThreshold?: number;
}

/**
 * Reusable Carousel Component
 *
 * A flexible carousel that can display any type of content with responsive behavior
 * and touch-based swipe navigation for mobile devices
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
  swipeThreshold = 50,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    setDragOffset(0);
  }, [totalPages]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    setDragOffset(0);
  }, [totalPages]);

  // Apply visual drag offset to content
  const applyDragStyles = useCallback(() => {
    if (!contentRef.current) return;
    
    if (isDragging) {
      contentRef.current.style.transform = `translateX(${dragOffset}px)`;
      contentRef.current.style.transition = 'none';
    } else {
      contentRef.current.style.transform = 'translateX(0)';
      contentRef.current.style.transition = 'transform 0.3s ease-out';
    }
  }, [isDragging, dragOffset]);

  // Enhanced touch event handlers for mobile swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
    
    // Pause autoplay during interaction
    if (autoPlay && carouselRef.current) {
      carouselRef.current.setAttribute('data-paused', 'true');
    }
  }, [autoPlay]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);
    
    // Calculate drag offset for visual feedback
    const newOffset = currentX - touchStart;
    setDragOffset(newOffset * 0.6); // Dampen the movement slightly
    applyDragStyles();
    
    // Prevent scrolling while swiping horizontally
    if (Math.abs(currentX - touchStart) > 10) {
      e.preventDefault();
    }
  }, [isDragging, touchStart, applyDragStyles]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    
    const swipeDistance = touchStart - touchEnd;
    const isValidSwipe = Math.abs(swipeDistance) > swipeThreshold;
    
    if (isValidSwipe) {
      if (swipeDistance > 0) {
        // Swipe left, go to next
        goToNext();
      } else {
        // Swipe right, go to previous
        goToPrevious();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    
    // Apply transition back to normal position
    if (contentRef.current) {
      contentRef.current.style.transform = 'translateX(0)';
      contentRef.current.style.transition = 'transform 0.3s ease-out';
    }
    
    // Resume autoplay after interaction
    if (autoPlay && carouselRef.current) {
      carouselRef.current.removeAttribute('data-paused');
    }
  }, [touchStart, touchEnd, swipeThreshold, goToNext, goToPrevious, isDragging, autoPlay, applyDragStyles]);

  // Mouse drag handlers for desktop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setTouchEnd(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
    
    // Add document-level event listeners to track cursor movement outside the component
    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    
    // Pause autoplay during interaction
    if (autoPlay && carouselRef.current) {
      carouselRef.current.setAttribute('data-paused', 'true');
    }
    
    // Prevent default browser drag behavior
    e.preventDefault();
  }, [autoPlay]);

  // Handle document-level mouse move
  const handleDocumentMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    setTouchEnd(currentX);
    
    // Calculate drag offset for visual feedback
    const newOffset = currentX - touchStart;
    setDragOffset(newOffset * 0.6); // Dampen the movement slightly
    applyDragStyles();
    
    // Prevent text selection during drag
    e.preventDefault();
  }, [isDragging, touchStart, applyDragStyles]);

  // Handle document-level mouse up
  const handleDocumentMouseUp = useCallback(() => {
    handleMouseUp();
    
    // Remove document-level event listeners
    document.removeEventListener('mousemove', handleDocumentMouseMove);
    document.removeEventListener('mouseup', handleDocumentMouseUp);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    setTouchEnd(currentX);
    
    // Calculate drag offset for visual feedback
    const newOffset = currentX - touchStart;
    setDragOffset(newOffset * 0.6); // Dampen the movement slightly
    applyDragStyles();
    
    e.preventDefault();
  }, [isDragging, touchStart, applyDragStyles]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    
    const swipeDistance = touchStart - touchEnd;
    const isValidSwipe = Math.abs(swipeDistance) > swipeThreshold;
    
    if (isValidSwipe) {
      if (swipeDistance > 0) {
        // Swipe left, go to next
        goToNext();
      } else {
        // Swipe right, go to previous
        goToPrevious();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    
    // Apply transition back to normal position
    if (contentRef.current) {
      contentRef.current.style.transform = 'translateX(0)';
      contentRef.current.style.transition = 'transform 0.3s ease-out';
    }
    
    // Resume autoplay after interaction
    if (autoPlay && carouselRef.current) {
      carouselRef.current.removeAttribute('data-paused');
    }
  }, [touchStart, touchEnd, swipeThreshold, goToNext, goToPrevious, isDragging, autoPlay, applyDragStyles]);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp();
    }
  }, [isDragging, handleMouseUp]);

  // Apply the effect when the component mounts
  useEffect(() => {
    return () => {
      // Clean up document-level event listeners when component unmounts
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [handleDocumentMouseMove, handleDocumentMouseUp]);

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
      const isPaused = carouselRef.current?.getAttribute('data-paused') === 'true';
      if (!isPaused) {
        goToNext();
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className={`w-full ${className}`}>
      {/* Main Carousel */}
      <div
        ref={carouselRef}
        className={`w-full overflow-hidden ${containerClassName}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ 
          touchAction: 'pan-y', 
          cursor: isDragging ? 'grabbing' : 'grab',
          userSelect: 'none' 
        }}
      >
        <div
          ref={contentRef}
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
            <div className="flex items-center space-x-3">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-12 h-12 flex items-center justify-center p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50`}
                  aria-label={`Go to page ${idx + 1}`}
                >
                  <span 
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                      idx === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                </button>
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
