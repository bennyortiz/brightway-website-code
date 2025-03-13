import React, { useState, useEffect, useRef } from 'react';

interface VirtualListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  itemHeight?: number;
  windowSize?: number;
  className?: string;
}

/**
 * VirtualList Component
 * 
 * Renders only the items that are visible in the viewport plus a buffer,
 * which significantly reduces DOM size and improves performance for long lists.
 * 
 * @param items - Array of data items to render
 * @param renderItem - Function to render each item
 * @param itemHeight - Approximate height of each item in pixels
 * @param windowSize - Number of extra items to render above and below viewport
 * @param className - Additional CSS classes
 */
export default function VirtualList<T>({
  items,
  renderItem,
  itemHeight = 120,
  windowSize = 5,
  className = '',
}: VirtualListProps<T>) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 20 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateVisibleRange = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const viewportHeight = container.clientHeight;
      
      // Calculate which items should be visible
      const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - windowSize);
      const endIndex = Math.min(
        items.length - 1,
        Math.ceil((scrollTop + viewportHeight) / itemHeight) + windowSize
      );
      
      setVisibleRange({ start: startIndex, end: endIndex });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', updateVisibleRange);
      window.addEventListener('resize', updateVisibleRange);
      updateVisibleRange();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateVisibleRange);
        window.removeEventListener('resize', updateVisibleRange);
      }
    };
  }, [items.length, itemHeight, windowSize]);

  // Calculate total list height
  const totalHeight = items.length * itemHeight;
  
  // Calculate spacer heights
  const topSpacerHeight = visibleRange.start * itemHeight;
  const bottomSpacerHeight = (items.length - visibleRange.end - 1) * itemHeight;

  return (
    <div 
      ref={containerRef}
      className={`virtual-list-container overflow-auto relative ${className}`}
      style={{ height: '100%' }}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {topSpacerHeight > 0 && (
          <div style={{ height: topSpacerHeight }} />
        )}
        
        <div className="virtual-list-items">
          {items
            .slice(visibleRange.start, visibleRange.end + 1)
            .map((item, localIndex) => (
              <div 
                key={visibleRange.start + localIndex} 
                className="virtual-list-item"
              >
                {renderItem(item, visibleRange.start + localIndex)}
              </div>
            ))}
        </div>
        
        {bottomSpacerHeight > 0 && (
          <div style={{ height: bottomSpacerHeight }} />
        )}
      </div>
    </div>
  );
} 