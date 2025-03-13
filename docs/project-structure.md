# Project Structure

This document outlines the organization of the Brightway website codebase.

## Directory Structure

The project follows a well-organized directory structure:

```
brightway-website-code/
├── app/                      # Next.js App Router
│   ├── @components/          # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── sections/         # Page sections
│   │   └── shared/           # Shared components
│   ├── @lib/                 # Utilities and non-component code
│   │   ├── constants/        # Constants and configuration
│   │   ├── utils/            # Utility functions
│   │   ├── hooks/            # Custom React hooks
│   │   ├── api/              # API-related utilities
│   │   └── types/            # TypeScript type definitions
│   ├── about-us/             # About page route
│   ├── contact/              # Contact page route
│   ├── services/             # Services page route
│   ├── privacy-policy/       # Privacy policy page route
│   ├── terms-of-service/     # Terms page route
│   ├── cookie-policy/        # Cookie policy page route
│   ├── page.tsx              # Home page
│   └── layout.tsx            # Root layout
├── public/                   # Static assets
├── docs/                     # Documentation
├── types/                    # Global TypeScript types
└── scripts/                  # Build and utility scripts
```

## Key Directories

### App Directory

The `app` directory uses Next.js App Router for routing and organization. Each subdirectory represents a route in the application.

### Components

Components are organized in the `app/@components` directory:

- **ui/**: Reusable UI components like buttons, forms, cards
- **sections/**: Larger page sections like hero areas, feature sections
- **shared/**: Components shared across multiple pages

See [Component Library](./components.md) for more details.

### Library

The `app/@lib` directory contains utilities and non-component code:

- **constants/**: Application-wide constants
- **utils/**: Utility functions
- **hooks/**: Custom React hooks
- **api/**: API-related utilities
- **types/**: TypeScript type definitions

See [Utility Libraries](./libraries.md) for more details.

### Public Directory

The `public` directory contains static assets like images, fonts, and other files that are served directly.

### Documentation

The `docs` directory contains project documentation, including guides, API references, and more. 