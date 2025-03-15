/**
 * Centralized utilities index file
 * Re-exports utility functions from specialized files
 * This approach maintains backward compatibility while providing better organization
 */

// Re-export utilities from formatting 
export { 
  formatPhoneNumber,
  formatDate,
  truncateText,
  formatCurrency,
  toTitleCase
} from './utils/formatting';

// Re-export utilities from helpers
export {
  generateId,
  debounce
} from './utils/helpers';

// Re-export DOM utilities
export {
  scrollToElement
} from './utils/dom';

// Re-export validation utilities
export {
  isValidEmail
} from './utils/validation';

// Export the cn utility directly (keeping for backward compatibility)
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merges class names with tailwind-merge and clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
