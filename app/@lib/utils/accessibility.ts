/**
 * Accessibility Utilities
 * 
 * This file contains utilities and constants related to accessibility
 * to ensure consistent implementation across the application.
 */

/**
 * Minimum touch target size in pixels according to WCAG 2.1 Success Criterion 2.5.5 (AAA)
 * https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
 */
export const MIN_TOUCH_TARGET_SIZE = 44; // pixels

/**
 * Minimum contrast ratios according to WCAG 2.1 Success Criterion 1.4.3 (AA)
 * https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 */
export const CONTRAST_RATIOS = {
  TEXT: {
    NORMAL: 4.5, // Minimum contrast ratio for normal text (AA)
    LARGE: 3,    // Minimum contrast ratio for large text (AA)
    NORMAL_AAA: 7, // Enhanced contrast for normal text (AAA)
    LARGE_AAA: 4.5, // Enhanced contrast for large text (AAA)
  },
  UI: {
    COMPONENTS: 3, // Minimum contrast ratio for UI components (AA)
    GRAPHICAL_OBJECTS: 3, // Minimum contrast ratio for graphical objects (AA)
  },
};

/**
 * Keyboard navigation utilities
 */

/**
 * Handle keyboard navigation for interactive elements
 * @param event - Keyboard event
 * @param callback - Function to call when Enter or Space is pressed
 */
export const handleKeyboardInteraction = (
  event: React.KeyboardEvent,
  callback: () => void
) => {
  // Execute callback on Enter or Space key press
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    callback();
  }
};

/**
 * Focus management utilities
 */

/**
 * Focus first focusable element in a container
 * @param containerRef - Reference to the container element
 */
export const focusFirstElement = (containerRef: React.RefObject<HTMLElement>) => {
  if (!containerRef.current) return;

  const focusableElements = containerRef.current.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );

  if (focusableElements.length > 0) {
    (focusableElements[0] as HTMLElement).focus();
  }
};

/**
 * Accessibility attributes for common components
 */

/**
 * Get ARIA attributes for a carousel
 * @param totalSlides - Total number of slides
 * @param currentSlide - Current slide index (0-based)
 */
export const getCarouselAriaAttributes = (totalSlides: number, currentSlide: number): React.AriaAttributes => {
  return {
    'aria-roledescription': 'carousel',
    'aria-label': 'Image carousel',
    'aria-live': 'polite' as React.AriaAttributes['aria-live'],
    'aria-atomic': true,
    'aria-describedby': `slide-status-${currentSlide}`,
  };
};

/**
 * Get ARIA attributes for a modal dialog
 * @param title - Dialog title
 * @param description - Dialog description
 */
export const getDialogAriaAttributes = (title: string, description?: string): React.AriaAttributes & { role: string } => {
  return {
    role: 'dialog',
    'aria-modal': true,
    'aria-labelledby': title ? 'dialog-title' : undefined,
    'aria-describedby': description ? 'dialog-description' : undefined,
  };
};

/**
 * Screen reader only text class
 * Visually hides text while keeping it accessible to screen readers
 */
export const srOnlyClass = 'sr-only';
