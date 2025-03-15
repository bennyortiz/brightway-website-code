# Brightway Website Component Library

This directory contains all the UI components used throughout the Brightway website, organized for maintainability, reusability, and performance.

## Directory Structure

- **`ui/`** - Reusable UI components
  - **`buttons/`** - Button components (Button, LinkButton, IconButton)
  - **`cards/`** - Card components for content display
  - **`forms/`** - Form input components (Input, Select, Checkbox, etc.)
  - **`layout/`** - Layout components (MainLayout, Container, etc.)
  - **`page/`** - Page-level components (SectionWrapper, etc.)
  - **`carousel/`** - Carousel and slider components
  - **`animations/`** - Animation components
  - **`index.ts`** - Barrel exports for all UI components
- **`sections/`** - Page-specific content sections
  - **`Hero/`** - Hero banners and headers
  - **`About/`** - About sections
  - **`Services/`** - Service listings
  - **`Contact/`** - Contact forms and information
  - **`FAQ/`** - Frequently asked questions
  - **`Testimonials/`** - Customer reviews and testimonials
  - **`WhyChooseUs/`** - Value proposition sections
  - **`ServiceAreas/`** - Service areas and locations
- **`shared/`** - Shared components used across multiple pages
  - **`SEO/`** - SEO and metadata components
  - **`Footer/`** - Site footer
  - **`Header/`** - Site header and navigation
  - **`WebVitals/`** - Performance monitoring

## Usage Guidelines

### Importing Components

```tsx
// Import UI components through the barrel file
import { Button, Card, SafeImage } from '@/app/@components/ui';

// Import component categories through their own barrel files
import { Input, Textarea, Select } from '@/app/@components/ui/forms';

// Import page section components
import { Hero } from '@/app/@components/sections';
```

### Component Categories

#### UI Components

Reusable UI components form the building blocks of our interface:

- **Presentational**: Display data and respond to user interactions
- **Container**: Manage data and state, often composing presentational components
- **Layout**: Control positioning and structure of content

#### Section Components

Section components represent larger content areas on specific pages:

- Designed for specific content needs
- May be reused across similar pages
- Often composed of multiple UI components

#### Shared Components

Components used across multiple pages with consistent functionality:

- Headers, footers, navigation
- SEO components
- Analytics and tracking

### Component Structure Patterns

#### Component File Organization

For simple components:

```
Button.tsx        # Component implementation
index.ts          # Re-export
```

For complex components:

```
Button/
  ├── Button.tsx        # Main component
  ├── ButtonGroup.tsx   # Related component
  ├── ButtonIcon.tsx    # Related component
  ├── types.ts          # Type definitions
  ├── utils.ts          # Component-specific utilities
  └── index.ts          # Re-export all components
```

#### Component Implementation Pattern

```tsx
// 1. Imports
import React from 'react';
import { cn } from '@/app/@lib/utils';

// 2. Type definitions
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
}

// 3. Component definition with JSDoc
/**
 * Button Component
 *
 * Primary action element for user interactions
 *
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  // 4. Component logic

  // 5. Component rendering
  return (
    <button
      className={cn(
        'button-base',
        variant === 'primary' && 'button-primary',
        variant === 'secondary' && 'button-secondary',
        variant === 'outline' && 'button-outline',
        size === 'sm' && 'text-sm py-1 px-3',
        size === 'md' && 'text-base py-2 px-4',
        size === 'lg' && 'text-lg py-3 px-6',
        fullWidth && 'w-full',
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <span className="loading-spinner" /> : children}
    </button>
  );
}
```

## Best Practices

1. **Single Responsibility Principle**

   - Each component should do one thing well
   - Break complex components into smaller, focused ones

2. **Composition Over Inheritance**

   - Build complex UI by composing smaller components
   - Use prop drilling or context for data sharing

3. **Consistent Prop Naming**

   - Use consistent prop names across similar components
   - Follow common conventions (e.g., `onClick`, `className`)

4. **Accessibility**

   - Include proper ARIA attributes
   - Ensure keyboard navigation works
   - Test with screen readers

5. **Performance**

   - Memoize expensive computations
   - Use virtualization for long lists
   - Lazy load below-fold components

6. **Documentation**
   - Document props with JSDoc comments
   - Include usage examples
   - Document any non-obvious behavior

For more detailed guidelines, see the [Documentation Standards](../../docs/documentation-standards.md).
