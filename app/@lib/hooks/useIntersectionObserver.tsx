import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
  once?: boolean;
}

/**
 * Hook to detect when an element enters the viewport using IntersectionObserver
 * 
 * @param options - Configuration options for the intersection observer
 * @returns [ref, isIntersecting] - Tuple with ref to attach to element and boolean indicating visibility
 * 
 * @example
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
 * 
 * return (
 *   <div 
 *     ref={ref}
 *     className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
 *   >
 *     Content that will fade in when visible
 *   </div>
 * );
 */
export function useIntersectionObserver<T extends Element = Element>({
  threshold = 0.1,
  rootMargin = '0px',
  root = null,
  once = true,
}: IntersectionObserverOptions = {}): [RefObject<T>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // If once is true, unobserve after it becomes visible
        if (entry.isIntersecting && once) {
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin, root }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, once]);

  return [ref, isIntersecting];
}

/**
 * Hook to create staggered animation effects for multiple elements
 * 
 * @param count - Number of items to animate
 * @param options - Configuration options for the intersection observer
 * @returns [ref, visibleItems] - Tuple with ref to attach to container and array of visible items
 * 
 * @example
 * const items = ['Item 1', 'Item 2', 'Item 3'];
 * const [containerRef, visibleItems] = useStaggeredAnimation(items.length);
 * 
 * return (
 *   <div ref={containerRef}>
 *     {items.map((item, index) => (
 *       <div 
 *         key={item}
 *         className={`transition-all duration-700 ${
 *           visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
 *         }`}
 *         style={{ transitionDelay: `${index * 100}ms` }}
 *       >
 *         {item}
 *       </div>
 *     ))}
 *   </div>
 * );
 */
export function useStaggeredAnimation<T extends Element = Element>(
  count: number,
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean[]] {
  const [ref, isVisible] = useIntersectionObserver<T>(options);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));

  useEffect(() => {
    if (isVisible && visibleItems.some(visible => !visible)) {
      // Stagger the animations by updating the array over time
      const timeout = setTimeout(() => {
        setVisibleItems(prev => {
          // Create a new array with one more item visible
          const newVisible = [...prev];
          const nextIndex = prev.findIndex(visible => !visible);
          if (nextIndex >= 0) {
            newVisible[nextIndex] = true;
          }
          return newVisible;
        });
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [isVisible, visibleItems, count]);

  // When first visible, start animating the first item
  useEffect(() => {
    if (isVisible && visibleItems.every(visible => !visible)) {
      setVisibleItems(prev => {
        const newVisible = [...prev];
        newVisible[0] = true;
        return newVisible;
      });
    }
  }, [isVisible, visibleItems]);

  return [ref, visibleItems];
} 