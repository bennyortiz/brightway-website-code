/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

// Custom type definitions for this project
// Fix for the PageProps type
declare module 'next' {
  interface PageProps {
    params: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}

// ServicePageProps definition
declare global {
  interface ServicePageProps {
    params: {
      service: string;
    };
  }
}
