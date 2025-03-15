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
  toTitleCase,
} from './utils/formatting';

// Re-export utilities from helpers
export { generateId, debounce } from './utils/helpers';

// Re-export DOM utilities
export { scrollToElement } from './utils/dom';

// Re-export validation utilities
export { isValidEmail } from './utils/validation';

// Re-export the cn utility from utils/index.ts
export { cn } from './utils/index';

// Re-export icon utilities
export {
  Icon,
  getServiceIcon,
  getFeatureIcon,
  type IconName,
} from './utils/icons';
