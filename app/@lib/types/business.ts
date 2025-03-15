/**
 * Business-related type definitions
 */

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