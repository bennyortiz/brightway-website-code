# Components Directory Structure

This directory contains all the React components used throughout the application, organized by purpose and reusability.

## Directory Structure

- **ui/**: Reusable UI components that can be used across multiple pages or features
  - `Button.tsx`: Common button component with various styles
  - `Card.tsx`: Card component for displaying content in a box
  - `layout/`: Components related to the overall layout structure
    - `MainLayout.tsx`: Main page layout with header and footer

- **sections/**: Page-specific sections that compose the main content areas
  - `Hero/`: Components for the hero section 
  - `Services/`: Components for the services section
  - `About/`: Components for the about section
  - etc.

- **shared/**: Components shared across multiple pages but not generic enough for UI
  - `SEO.tsx`: Component for managing SEO metadata
  - `Navigation.tsx`: Site navigation components

## Usage

Import components using the `@components` path alias:

```tsx
import Button from '@/app/@components/ui/Button';
import Card from '@/app/@components/ui/Card';
import Hero from '@/app/@components/sections/Hero';
```

## Best Practices

1. Keep components focused on a single responsibility
2. Use TypeScript for all component props
3. Group related components in subdirectories
4. Create index.ts barrel files for easier imports 