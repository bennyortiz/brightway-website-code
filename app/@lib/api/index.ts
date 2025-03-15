/**
 * API Exports
 *
 * This file serves as a central export point for all API functions.
 * It allows importing API functionality from a single location for better maintainability.
 *
 * Example usage:
 * import { getTestimonials } from '@/app/@lib/api';
 */

// Re-export all services
export * from './services';

// Export API configuration constants
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  version: 'v1',
  timeout: 10000, // 10 seconds
};
