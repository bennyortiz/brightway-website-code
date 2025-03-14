'use client';

import { useRef, useEffect } from 'react';

/**
 * Hook to trap focus within a container for accessibility
 * 
 * This hook helps manage keyboard focus within modals, dialogs, and other 
 * interactive components to ensure keyboard users can navigate properly.
 * 
 * @param {boolean} active - Whether the focus trap is active
 * @param {Function} [onEscape] - Optional callback for when Escape key is pressed
 * @returns {React.RefObject<HTMLElement>} - Ref to attach to the container element
 * 
 * @example
 * ```tsx
 * const Modal = ({ isOpen, onClose }) => {
 *   const focusTrapRef = useFocusTrap(isOpen, onClose);
 * 
 *   if (!isOpen) return null;
 * 
 *   return (
 *     <div ref={focusTrapRef} className="modal">
 *       <button>Focusable element</button>
 *       <input type="text" />
 *       <button onClick={onClose}>Close</button>
 *     </div>
 *   );
 * };
 * ```
 */
export function useFocusTrap(active: boolean, onEscape?: () => void) {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (!active) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    // Save the element that had focus before the modal was opened
    const previouslyFocusedElement = document.activeElement as HTMLElement;
    
    // Find all focusable elements within the trap container
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    // Auto-focus the first focusable element when the trap activates
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }
    
    // Handler for Tab key to cycle focus within the container
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      // If shift+tab and first element is focused, move to last element
      if (e.shiftKey && document.activeElement === firstFocusableElement) {
        e.preventDefault();
        lastFocusableElement.focus();
      }
      // If tab and last element is focused, move to first element
      else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
        e.preventDefault();
        firstFocusableElement.focus();
      }
    };
    
    // Handler for Escape key
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onEscape) {
        onEscape();
      }
    };
    
    // Add event listeners
    document.addEventListener('keydown', handleTabKey);
    if (onEscape) {
      document.addEventListener('keydown', handleEscapeKey);
    }
    
    return () => {
      // Remove event listeners
      document.removeEventListener('keydown', handleTabKey);
      if (onEscape) {
        document.removeEventListener('keydown', handleEscapeKey);
      }
      
      // Return focus to the element that had it before the modal was opened
      if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
      }
    };
  }, [active, onEscape]);
  
  return containerRef;
} 