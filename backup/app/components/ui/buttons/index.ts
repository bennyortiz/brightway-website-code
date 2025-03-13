/**
 * Button Components
 *
 * This file exports all button components used throughout the application.
 * It serves as a single point of import for all button-related components.
 */

// Export the base Button component
export { Button } from './Button';

// Export LinkButton and its variants with aliases for backward compatibility
export {
  LinkButton,
  PrimaryLinkButton as PrimaryButton,
  OutlineLinkButton as OutlineButton,
  SecondaryLinkButton as SecondaryButton,
} from './LinkButton';

// Re-export types
export type { ButtonProps } from './Button';
export type { LinkButtonProps } from './LinkButton'; 