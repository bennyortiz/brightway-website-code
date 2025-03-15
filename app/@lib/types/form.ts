/**
 * Form-related type definitions
 */

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