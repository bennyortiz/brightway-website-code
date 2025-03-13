# Brightway Website Component Library

This directory contains all the components used throughout the Brightway website, organized in a structured and maintainable way.

## Directory Structure

- **`@components/`** - Root components directory
  - **`ui/`** - Reusable UI components
    - **`buttons/`** - Button components
    - **`cards/`** - Card components
    - **`forms/`** - Form input components
    - **`layout/`** - Layout components
    - **`index.ts`** - Central export for all UI components
  - **`sections/`** - Page-specific sections
    - **`Hero/`** - Hero sections
    - **`Contact/`** - Contact sections
    - **`FAQ/`** - FAQ sections
    - **`...`** - Other section components
  - **`shared/`** - Shared components used across multiple pages
  - **`icons/`** - Custom icon components

## Usage Guidelines

### Importing Components

For better maintainability and cleaner imports, we use the following import patterns:

```tsx
// Import from specific category
import { Input, Textarea } from '@/app/@components/ui/forms';

// Import from UI index for multiple component types
import { Button, Card } from '@/app/@components/ui';

// Import sections
import { HeroSection } from '@/app/@components/sections';
```

### Creating New Components

When creating new components:

1. Place them in the appropriate directory based on their function
2. Export them through the relevant index files
3. Include appropriate TypeScript interfaces
4. Add JSDoc comments for better developer experience
5. Consider reusability and composition

### UI Component Structure

UI components should follow these principles:

- **Composable**: Components should be designed to work well together
- **Flexible**: Use props to enable customization
- **Accessible**: Follow WCAG guidelines for accessibility
- **Consistent**: Maintain consistent styling and behavior

## Form Components

The form components provide a comprehensive set of inputs with consistent styling and behavior. Features include:

- Labels, helper text, and error messages
- Accessibility attributes
- Consistent styling
- Various states (disabled, error, etc.)

Example usage:

```tsx
import { FormGroup, Input, Textarea, Checkbox } from '@/app/@components/ui/forms';

<FormGroup label="Message" required>
  <Textarea placeholder="Type your message here..." />
</FormGroup>
```

## Button Components

Button components provide consistent action elements throughout the site:

- Multiple variants (primary, secondary, outline, ghost, etc.)
- Size options
- Loading states
- Icon support

Example usage:

```tsx
import { Button, ButtonLink } from '@/app/@components/ui/buttons';

<Button variant="primary" size="lg">Submit</Button>
<ButtonLink href="/contact" variant="outline">Contact Us</ButtonLink>
```

## Card Components

Card components provide consistent content containers:

- Various visual styles
- Composable parts (header, body, footer)
- Interactive options (hoverable, clickable)

Example usage:

```tsx
import { Card, CardHeader, CardBody, CardFooter, CardTitle } from '@/app/@components/ui/cards';

<Card variant="elevated" hoverable>
  <CardHeader>
    <CardTitle>Service Title</CardTitle>
  </CardHeader>
  <CardBody>
    Service description and details...
  </CardBody>
  <CardFooter>
    <Button fullWidth>Learn More</Button>
  </CardFooter>
</Card>
```

## Best Practices

- Prefer composition over inheritance
- Keep components focused on a single responsibility
- Maintain comprehensive documentation
- Use TypeScript for type safety
- Follow consistent naming conventions 