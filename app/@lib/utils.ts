/**
 * Centralized utilities index file
 * Re-exports utility functions from specialized files
 * This approach maintains backward compatibility while providing better organization
 */

// Re-export utilities from formatting 
export { 
  formatPhoneNumber,
  formatDate,
  truncateText,
  formatCurrency,
  toTitleCase
} from './utils/formatting';

// Export the cn utility directly (keeping for backward compatibility)
import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Merges class names with tailwind-merge and clsx
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Other utility functions
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
