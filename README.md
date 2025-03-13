# Brightway Cleaning Website

This is the codebase for the Brightway Cleaning website, built with Next.js 15 and TypeScript.

## Project Structure

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
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To build the project for production:

```bash
npm run build
# or
yarn build
```

## Development Standards

- **TypeScript**: Use TypeScript for all components and functions
- **Path Aliases**: Use the `@` prefix for imports (`@/app/@components/...`)
- **Component Structure**: Group related components in directories
- **Documentation**: Document functions and components with JSDoc comments

See [PATH_ALIASES.md](./PATH_ALIASES.md) for more information on import paths.

## Documentation

- [Components Documentation](./app/@components/README.md)
- [Library Documentation](./app/@lib/README.md)
- [Path Aliases](./PATH_ALIASES.md)
