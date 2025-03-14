# Brightway Cleaning Website

This is the codebase for the Brightway Cleaning website, built with Next.js 15 and TypeScript.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Documentation

Comprehensive documentation is available in the [docs](./docs) directory:

- [Getting Started](./docs/getting-started.md)
- [Project Structure](./docs/project-structure.md)
- [Development Guides](./docs/guides/README.md)
- [Component Library](./docs/components.md)
- [Utility Libraries](./docs/libraries.md)

## Features

- **Modern Stack**: Next.js 15, React 18, TypeScript
- **Performance**: Optimized for Core Web Vitals
- **Responsive**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized metadata and structured data

## Development Standards

- **TypeScript**: Use TypeScript for all components and functions
- **Path Aliases**: Use the `@` prefix for imports (`@/app/@components/...`)
- **Component Structure**: Group related components in directories
- **Documentation**: Document functions and components with JSDoc comments

## Important Notes

### Font Configuration
- The project uses `@fontsource-variable/plus-jakarta-sans` for font loading
- Font is configured in `app/layout.tsx` and imported directly from the package
- Do not use `onLoadingComplete` in Next.js Image components - use `onLoad` instead

### Performance Optimizations
- To fix webpack cache issues: `rm -rf .next/cache`
- When adding images, use the `SafeImage` or `OptimizedImage` components for best practices

### Common Issues
- If you encounter webpack cache errors, clear the `.next/cache` directory
- If images aren't loading properly, check the `onLoad` event handlers and correct paths

## Available Scripts

- **dev**: Starts the development server
- **build**: Builds the application for production
- **start**: Starts the production server
- **lint**: Runs ESLint to check for code issues
- **lint:fix**: Runs ESLint and automatically fixes issues
- **format**: Runs Prettier to format code
- **format:check**: Checks if code is properly formatted

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.
