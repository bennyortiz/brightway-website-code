/**
 * Button Components Library
 *
 * A collection of reusable button components with consistent styling and features
 * for use throughout the application.
 *
 * Usage:
 * ```tsx
 * import { Button, ButtonLink } from '@/app/@components/ui/buttons';
 *
 * // Basic button
 * <Button>Click Me</Button>
 *
 * // Button with variant and size
 * <Button variant="secondary" size="lg">Large Secondary Button</Button>
 *
 * // Link styled as a button
 * <ButtonLink href="/contact">Contact Us</ButtonLink>
 *
 * // Button with loading state
 * <Button loading>Processing...</Button>
 *
 * // Button with icons
 * <Button
 *   leftIcon={<IconMail />}
 *   variant="outline"
 * >
 *   Email Us
 * </Button>
 * ```
 */

export * from './Button';

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
