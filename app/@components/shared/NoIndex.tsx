/**
 * NoIndex Component
 *
 * A simple component to mark pages as non-indexable by search engines.
 * This component adds appropriate meta tags to prevent indexing.
 *
 * Usage in App Router:
 * 1. Import generatePageMetadata from '@/app/@lib/utils/metadata'
 * 2. Use it in your page.tsx metadata export:
 *    export const metadata = generatePageMetadata({
 *      pageType: 'custom',
 *      title: 'Your Title',
 *      seo: { noIndex: true }
 *    });
 */

import { Metadata } from 'next';

/**
 * Creates metadata that prevents indexing by search engines
 * 
 * @param title The page title
 * @param description The page description
 * @param noFollow Whether to also prevent following links
 * @returns Metadata object with noindex directives
 */
export function createNoIndexMetadata(
  title: string,
  description: string,
  noFollow: boolean = false
): Metadata {
  const robotContent = noFollow ? 'noindex, nofollow' : 'noindex, follow';
  
  return {
    title,
    description,
    robots: {
      index: false,
      follow: !noFollow,
      googleBot: {
        index: false,
        follow: !noFollow,
      }
    }
  };
}

export default createNoIndexMetadata;
