/**
 * Barrel file for section components
 * This allows for cleaner imports when using multiple section components
 * 
 * Example usage:
 * import { ContactForm, ContactInfo } from '@/app/@components/sections';
 */

// Contact section components
export * from './Contact/ContactForm';
export * from './Contact/ContactInfo';

// Services section components - now imported from lib
export { serviceItems } from '@/app/@lib/data/services'; 