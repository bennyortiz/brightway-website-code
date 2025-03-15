# Path Aliases in the Project

This project uses TypeScript path aliases to make imports more consistent and readable. Below are the available path aliases and how to use them.

## Available Path Aliases

### 1. `@components`

Use this alias to import components from the `app/@components` directory:

```tsx
// Instead of this:
import MainLayout from '../../../@components/ui/layout/MainLayout';

// Use this:
import MainLayout from '@/app/@components/ui/layout/MainLayout';
```

### 2. `@lib`

Use this alias to import utilities, constants, hooks, and other non-component code from the `app/@lib` directory:

```tsx
// Instead of this:
import { siteConfig } from '../../../@lib/constants/siteConfig';

// Use this:
import { siteConfig } from '@/app/@lib/constants/siteConfig';
```

## Configuration

These aliases are configured in the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

The aliases work with the `@` prefix which maps to the root directory, allowing for absolute imports from anywhere in the project.

## Best Practices

1. Always use path aliases for imports that cross directory boundaries
2. For imports within the same directory or adjacent files, relative imports are acceptable
3. Be consistent with import patterns throughout the codebase
4. Use barrel files (index.ts) when appropriate to simplify imports further
