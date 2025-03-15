/**
 * DOM-related utility functions
 * These functions interact with the browser DOM or handle browser-specific functionality
 */

/**
 * Scroll to an element smoothly by its ID
 * 
 * @param elementId - ID of the element to scroll to
 * 
 * @example
 * scrollToElement('contact-section');
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
} 