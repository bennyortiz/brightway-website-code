# Vercel Configuration Documentation

This document explains the settings used in the `vercel.json` file for this project.

## Overview

The `vercel.json` file configures how Vercel builds and deploys the application. This is critical for ensuring the site deploys correctly and functions as expected.

## Configuration Details

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "npm run build"
}
```

### Properties Explained

- **$schema**: Points to Vercel's OpenAPI schema that provides validation for this configuration file. This helps ensure the file adheres to Vercel's expected format.

- **version**: Specifies the Vercel platform version. Version 2 is the current standard for deployment configuration.

- **framework**: Explicitly tells Vercel this is a Next.js project. This is crucial for proper detection and deployment, ensuring Vercel applies the correct build and runtime settings.

- **buildCommand**: Defines the command used to build the application. Uses the standard `npm run build` which maps to `next build` as defined in the package.json.

## Deployment Behavior

With this configuration, Vercel will:

1. Recognize the project as a Next.js application
2. Apply Next.js-specific optimizations and settings
3. Execute the specified build command
4. Deploy the application with the appropriate runtime configuration

## Troubleshooting

If deployment issues occur, verify:

- The framework is correctly set to "nextjs"
- The buildCommand matches what's defined in package.json
- The Vercel project settings match these configuration values 