// Override Next.js TypeScript declarations to fix incompatibility issues
import { Metadata } from 'next';

// Fix for the PageProps type that's causing the deployment error
declare module 'next' {
  interface PageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}

// Ensure our ServicePageProps works with Next.js types
declare global {
  interface ServicePageProps {
    params: {
      service: string;
    };
  }
} 