/**
 * API endpoints configuration
 * 
 * This file centralizes all API endpoint definitions for easier management and consistency.
 */

/**
 * Base URLs for different environments
 */
export const API_BASE_URL = {
  development: '/api',
  test: '/api',
  production: '/api',
};

/**
 * Get the base URL based on the current environment
 */
export function getBaseUrl(): string {
  const env = process.env.NODE_ENV || 'development';
  return API_BASE_URL[env as keyof typeof API_BASE_URL];
}

/**
 * API endpoint paths
 */
export const ENDPOINTS = {
  // Contact form endpoints
  contact: {
    submit: '/contact',
  },
  
  // Testimonials endpoints
  testimonials: {
    list: '/testimonials',
    single: (id: string) => `/testimonials/${id}`,
  },
  
  // Services endpoints
  services: {
    list: '/services',
    single: (slug: string) => `/services/${slug}`,
  },
};

/**
 * Get a fully qualified API URL
 * 
 * @param endpoint - The endpoint path
 * @returns Full API URL
 * 
 * @example
 * getApiUrl(ENDPOINTS.contact.submit); // '/api/contact'
 */
export function getApiUrl(endpoint: string): string {
  return `${getBaseUrl()}${endpoint}`;
} 