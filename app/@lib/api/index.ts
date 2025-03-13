/**
 * Barrel file for API utilities
 * This allows for cleaner imports when using multiple API utilities
 * 
 * Example usage:
 * import { apiClient, ENDPOINTS } from '@/app/@lib/api';
 */

// Re-export API utilities
export * from './endpoints';
export * from './client'; 