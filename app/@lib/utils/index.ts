/**
 * Barrel file for utility functions
 * This allows for cleaner imports when using multiple utilities
 *
 * Example usage:
 * import { generatePageMetadata, formatDate, getServiceIcon } from '@/app/@lib/utils';
 */

// Re-export utility functions
export * from './metadata';
export * from './formatting';
export * from './seo';
export * from './dom';
export * from './validation';
export * from './helpers';
export * from './components';
export * from './icons';
export * from './accessibility';

// Re-export from other lib directories for convenience
export * from '../constants';

// Export the cn utility directly from the implementation
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
