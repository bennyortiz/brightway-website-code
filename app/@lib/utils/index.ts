/**
 * Barrel file for utility functions
 * This allows for cleaner imports when using multiple utilities
 * 
 * Example usage:
 * import { generatePageMetadata, formatDate } from '@/app/@lib/utils';
 */

// Re-export utility functions 
export * from './metadata';
export * from './formatting';
export * from './seo';
export * from '../utils'; // Re-export from root utils for backward compatibility 