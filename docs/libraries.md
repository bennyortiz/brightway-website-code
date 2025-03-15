# Utility Libraries

This document provides an overview of the utility libraries and non-component code used throughout the Brightway website.

## Directory Structure

- **constants/**: Application-wide constants and configuration

  - `siteConfig.ts`: Main site configuration (company info, contact details, etc.)
  - `routes.ts`: Route definitions and navigation structure
  - `theme.ts`: Theme configuration and styling constants

- **utils/**: Utility functions for common operations

  - `metadata.ts`: Functions for generating page metadata
  - `formatting.ts`: String and data formatting utilities
  - etc.

- **hooks/**: Custom React hooks

  - `useMediaQuery.ts`: Hook for responsive design media queries
  - `useScroll.ts`: Hook for scroll-related functionality
  - etc.

- **api/**: API-related utilities and service functions

  - `endpoints.ts`: API endpoint definitions
  - `client.ts`: API client configuration
  - etc.

- **types/**: TypeScript type definitions
  - `common.ts`: Shared types used across the application
  - `api.ts`: Types for API requests and responses
  - etc.

## Usage

Import utilities using the `@lib` path alias:

```tsx
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { formatDate } from '@/app/@lib/utils/formatting';
import { useMediaQuery } from '@/app/@lib/hooks/useMediaQuery';
```

## Best Practices

1. Keep utility functions pure and focused on a single responsibility
2. Document complex functions with JSDoc comments
3. Use TypeScript for type safety
4. Create index.ts barrel files for easier imports
