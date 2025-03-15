# Brightway Website Library

This directory contains all utility functions, constants, hooks, and other non-component code used throughout the Brightway website. These utilities provide consistent behavior, reduce code duplication, and improve maintainability.

## Directory Structure

- **`utils/`** - Utility functions for common operations
  - **`formatting.ts`** - Data and string formatting utilities
  - **`dom.ts`** - Browser DOM manipulation utilities
  - **`validation.ts`** - Data validation utilities
  - **`helpers.ts`** - General helper functions
  - **`metadata.ts`** - Metadata generation utilities
  - **`seo.ts`** - SEO-related utilities
  - **`components.ts`** - Component-related utilities
  - **`index.ts`** - Barrel exports for utilities

- **`constants/`** - Application-wide constants and configuration
  - **`siteConfig.ts`** - Site configuration and business information
  - **`routes.ts`** - Route definitions and navigation structure
  - **`theme.ts`** - Theme constants (colors, typography, etc.)
  - **`services.ts`** - Service definitions and categories

- **`hooks/`** - Custom React hooks
  - **`useMediaQuery.ts`** - Responsive design media queries
  - **`useScroll.ts`** - Scroll behavior and tracking
  - **`useLocalStorage.ts`** - Local storage management
  - **`useSiteConfig.ts`** - Access to site configuration

- **`api/`** - API-related utilities and services
  - **`endpoints.ts`** - API endpoint definitions
  - **`client.ts`** - API client configuration
  - **`contactService.ts`** - Contact form submission service
  - **`analytics.ts`** - Analytics tracking services

- **`types/`** - TypeScript type definitions
  - **`common.ts`** - Shared types across the application
  - **`api.ts`** - API request and response types
  - **`business.ts`** - Business domain types
  - **`theme.ts`** - Theme-related types

- **`animations/`** - Animation configurations and utilities
  - **`transitions.ts`** - Common transition configurations
  - **`variants.ts`** - Framer Motion animation variants
  - **`scroll.ts`** - Scroll-based animation utilities

- **`page-utils/`** - Page-specific utilities
  - **`home.ts`** - Home page related utilities
  - **`services.ts`** - Service page utilities
  - **`contact.ts`** - Contact page utilities

## Usage Patterns

### Importing Utilities

```tsx
// Import from the main utils barrel file
import { formatDate, truncateText, isValidEmail } from '@/app/@lib/utils';

// Import from specific utility files
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { scrollToElement } from '@/app/@lib/utils/dom';

// Import constants
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { ROUTES } from '@/app/@lib/constants/routes';

// Import hooks
import { useMediaQuery } from '@/app/@lib/hooks/useMediaQuery';
import { useLocalStorage } from '@/app/@lib/hooks/useLocalStorage';
```

### Using Utility Functions

Utility functions are designed for consistent behavior across the application:

```tsx
// Format a date
const formattedDate = formatDate('2023-01-15', { includeTime: true });

// Validate an email
if (isValidEmail(email)) {
  // Proceed with form submission
}

// Generate metadata for a page
export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description: 'Get in touch with our cleaning experts',
});
```

### Using Custom Hooks

Custom hooks encapsulate reusable stateful logic:

```tsx
// Use media query for responsive design
const isMobile = useMediaQuery('(max-width: 768px)');

// Use scroll position
const { scrollY, scrollDirection } = useScroll();

// Use local storage with type safety
const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
```

## Creating New Utilities

When creating new utilities:

1. **Categorize Appropriately**: Place in the correct directory based on functionality
2. **Single Responsibility**: Each utility should do one specific thing well
3. **Type Safety**: Use TypeScript for type definitions and parameter validation
4. **Documentation**: Include JSDoc comments with descriptions and examples
5. **Testing**: Ensure utilities have appropriate unit tests
6. **Exporting**: Add exports to the appropriate barrel files

### Utility Function Pattern

```typescript
/**
 * Formats a phone number to a consistent format
 * 
 * @param phone - The phone number to format (can contain formatting)
 * @returns Phone number formatted as (XXX) XXX-XXXX
 * 
 * @example
 * formatPhoneNumber('1234567890'); // Returns: "(123) 456-7890"
 * formatPhoneNumber('123-456-7890'); // Returns: "(123) 456-7890"
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
```

## Best Practices

1. **Pure Functions**: Keep utility functions pure when possible
2. **Consistent Naming**: Use consistent naming conventions
   - Functions: camelCase verb + noun (e.g., `formatDate`, `validateEmail`)
   - Constants: UPPER_CASE or PascalCase (e.g., `PRIMARY_COLOR`, `Routes`)
   - Hooks: camelCase with `use` prefix (e.g., `useMediaQuery`)
3. **Error Handling**: Include proper error handling in utility functions
4. **Default Values**: Provide sensible defaults for optional parameters
5. **Documentation**: Document all parameters, return values, and examples
6. **Avoid Side Effects**: Keep utilities free of unexpected side effects

For more detailed guidelines, see the [Documentation Standards](../../docs/documentation-standards.md). 