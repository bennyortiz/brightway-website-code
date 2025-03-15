/**
 * Validation utilities for form validation and data checking
 */

/**
 * Validate if a string is a properly formatted email address
 *
 * @param email - Email string to validate
 * @returns Boolean indicating whether the email format is valid
 *
 * @example
 * isValidEmail('user@example.com') // true
 * isValidEmail('invalid-email') // false
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
