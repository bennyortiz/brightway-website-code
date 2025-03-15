# Brightway Cleaning Website

The official website for Brightway Cleaning Services, built with Next.js, TypeScript, and Tailwind CSS.

## 📋 Project Overview

This website serves as the main online presence for Brightway Cleaning Services, showcasing services, providing contact information, and allowing customers to request quotes.

### Key Features

- 🏠 Responsive home page with service overview
- 📱 Mobile-first design approach
- 🔍 SEO-optimized pages and metadata
- 📊 Performance optimization with Next.js
- 📝 Interactive contact and quote forms
- 📍 Service area visualization
- 📸 Optimized image loading strategies
- 👨‍💻 Developer-friendly codebase

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/bennyortiz/brightway-website-code.git
   cd brightway-website-code
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables

   ```bash
   cp .env.example .env.local
   # Then edit .env.local with your configuration
   ```

4. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧰 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API
- **Forms**: React Hook Form
- **Validation**: Zod
- **Animations**: Framer Motion
- **SEO**: Next.js Metadata API
- **Performance Monitoring**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## 📁 Project Structure

```
/
├── app/                  # Next.js App Router
│   ├── @components/      # UI components
│   │   ├── ui/           # Reusable UI components
│   │   ├── sections/     # Page sections
│   │   └── shared/       # Shared components
│   ├── @lib/             # Utilities and helpers
│   │   ├── utils/        # Utility functions
│   │   ├── hooks/        # Custom React hooks
│   │   └── constants/    # Application constants
│   ├── (pages)/          # App routes and pages
│   └── layout.tsx        # Root layout
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── fonts/            # Local fonts
├── docs/                 # Documentation
├── scripts/              # Build and utility scripts
└── [config files]        # Configuration files
```

## 📖 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [Documentation Standards](./docs/documentation-standards.md) - Standards for code documentation
- [Component Guidelines](./app/@components/README.md) - Component organization and usage
- [Utility Guidelines](./app/@lib/README.md) - Utility functions and organization
- [Image Usage Guide](./app/@components/ui/ImageGuide.md) - Image component best practices

## 🧑‍💻 Development Guidelines

### Code Style

This project follows strict linting and formatting rules:

- ESLint for code quality
- Prettier for code formatting
- TypeScript strict mode

Run checks before committing:

```bash
npm run lint      # Run ESLint
npm run format    # Run Prettier
npm run typecheck # Run TypeScript compiler check
```

### Git Workflow

1. Create a feature branch from `main`

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make changes and commit with clear messages

   ```bash
   git commit -m "Feature: Add service area map component"
   ```

3. Push to the repository and create a pull request
   ```bash
   git push -u origin feature/your-feature-name
   ```

### Performance Best Practices

- Use Next.js Image for optimized images
- Implement code splitting with dynamic imports
- Lazy load below-fold content
- Minimize JavaScript bundle size
- Optimize for Core Web Vitals

## 🚀 Deployment

The website is deployed on Vercel:

- Production: [https://www.brightwaycleaning.com](https://www.brightwaycleaning.com)
- Preview: Automatically deployed for each pull request

## 📝 License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is prohibited.

## 🤝 Contributing

For team members and contributors:

1. Follow the [Documentation Standards](./docs/documentation-standards.md)
2. Run the linting tools before committing
3. Ensure all tests pass
4. Keep accessibility in mind for all UI components
5. Optimize for performance and SEO
