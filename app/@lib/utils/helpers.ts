/**
 * General helper utilities for common operations
 */

/**
 * Generate a random ID string
 *
 * @returns Random string ID
 *
 * @example
 * const id = generateId(); // "x7f9y2z"
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Creates a debounced function that delays invoking the provided function
 * until after the specified wait time has elapsed since the last invocation
 *
 * @param func - The function to debounce
 * @param wait - The number of milliseconds to delay
 * @returns Debounced version of the function
 *
 * @example
 * const debouncedSearch = debounce((term) => searchAPI(term), 300);
 */
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
