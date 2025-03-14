/**
 * Common type definitions for the application
 */

/**
 * Metadata for pages
 */
export interface PageMetadata {
  pageType: 'home' | 'about' | 'services' | 'contact' | 'blog' | 'custom';
  title: string;
  description: string;
  slug?: string;
  ogImage?: string;
}

/**
 * Service information
 * Centralized definition for all service-related types
 */
export interface Service {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode | string;
  image?: string;
  slug?: string;
}

/**
 * @deprecated Use Service interface instead
 */
export type ServiceItem = Service;

/**
 * Contact form data
 */
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  serviceType?: string;
  preferredContact?: 'email' | 'phone';
  consent: boolean;
}

/**
 * Navigation item
 */
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

/**
 * Business information
 */
export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    days: string;
    hours: string;
  }[];
} 