# Getting Started

This guide will help you set up the Brightway website project for local development.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or later
- **npm** or **yarn**: For package management
- **Git**: For version control

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bennyortiz/brightway-website-code.git
cd brightway-website-code
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Copy the example environment file and update it with your values:

```bash
cp .env.example .env.local
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the Next.js development server at [http://localhost:3000](http://localhost:3000).

## Build

To build the project for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Available Scripts

- **dev**: Starts the development server
- **build**: Builds the application for production
- **start**: Starts the production server
- **lint**: Runs ESLint to check for code issues
- **lint:fix**: Runs ESLint and automatically fixes issues
- **format**: Runs Prettier to format code
- **format:check**: Checks if code is properly formatted

## Development Standards

- **TypeScript**: Use TypeScript for all components and functions
- **Path Aliases**: Use the `@` prefix for imports (`@/app/@components/...`)
- **Component Structure**: Group related components in directories
- **Documentation**: Document functions and components with JSDoc comments

For more information on path aliases, see the [Path Aliases Guide](./guides/path-aliases.md).
