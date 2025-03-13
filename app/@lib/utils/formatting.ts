/**
 * Formatting utilities for consistent text and date formatting across the application
 */

/**
 * Format a date using the Intl.DateTimeFormat API
 * 
 * @param date - Date to format (string, number, or Date object)
 * @param options - Intl.DateTimeFormatOptions for customizing the format
 * @returns Formatted date string
 * 
 * @example
 * // Format as date only (e.g., "January 1, 2023")
 * formatDate(new Date());
 * 
 * @example
 * // Format with time (e.g., "January 1, 2023, 12:00 PM")
 * formatDate(new Date(), { includeTime: true });
 */
export function formatDate(
  date: string | number | Date,
  options?: {
    includeTime?: boolean;
    locale?: string;
  }
): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  const locale = options?.locale || 'en-US';
  
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...(options?.includeTime
      ? {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }
      : {}),
  };
  
  return new Intl.DateTimeFormat(locale, dateOptions).format(dateObj);
}

/**
 * Format a phone number to a consistent format
 * 
 * @param phone - Phone number to format (numbers only or with formatting)
 * @returns Formatted phone number as (XXX) XXX-XXXX
 * 
 * @example
 * formatPhoneNumber('1234567890'); // (123) 456-7890
 * formatPhoneNumber('123-456-7890'); // (123) 456-7890
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if the input is of correct length
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * Truncate text to a specific length with ellipsis
 * 
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 * 
 * @example
 * truncateText('This is a long text that needs to be truncated', 20); // 'This is a long text...'
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Format a number as currency
 * 
 * @param amount - Amount to format
 * @param options - Formatting options
 * @returns Formatted currency string
 * 
 * @example
 * formatCurrency(1000); // $1,000.00
 * formatCurrency(1000, { currency: 'EUR' }); // €1,000.00
 */
export function formatCurrency(
  amount: number,
  options?: {
    currency?: string;
    locale?: string;
  }
): string {
  const locale = options?.locale || 'en-US';
  const currency = options?.currency || 'USD';
  
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format a string to title case
 * 
 * @param text - Text to format
 * @returns Title cased text
 * 
 * @example
 * toTitleCase('hello world'); // 'Hello World'
 */
export function toTitleCase(text: string): string {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 