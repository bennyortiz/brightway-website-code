/**
 * Navigation-related type definitions
 */

/**
 * Navigation item
 */
export interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
} 