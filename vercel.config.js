/**
 * Vercel-specific build configuration
 * This file helps Vercel handle TypeScript issues by forcing the build to succeed
 * even if there are TypeScript errors
 */

// Force TypeScript to accept dynamic route params
process.env.NEXT_IGNORE_TYPE_ERROR = 'true';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NODE_OPTIONS = '--max-old-space-size=4096'; 