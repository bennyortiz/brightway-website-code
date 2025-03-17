# SEO Guide for Brightway Website

This guide explains how to control SEO settings across the Brightway website, including how to properly handle page indexing and other search engine directives.

## Basic SEO Controls

The website uses a centralized metadata system that makes it easy to control SEO settings for any page.

### Setting Page Metadata

For any page in the Next.js App Router, you can set metadata using the `generatePageMetadata` function:

```tsx
import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom', // 'home', 'about', 'contact', or 'custom'
  title: 'Page Title',
  description: 'Page description for search engines and social sharing.',
  canonicalPath: '/page-path',
});
```

### Preventing Page Indexing

To prevent a page from being indexed by search engines, use the `seo` option with `noIndex` set to `true`:

```tsx
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Private Page',
  description: 'This page should not be indexed by search engines.',
  canonicalPath: '/private-page',
  seo: {
    noIndex: true, // Prevents indexing
  },
});
```

### Client-Side No-Index Control

For client components where you can't use the metadata API directly (like error boundaries), add meta tags in the parent layout or use direct meta tags in custom HTML documents:

```tsx
// For custom HTML documents (like in global-error.tsx)
<head>
  <meta name="robots" content="noindex, nofollow" />
  <meta name="googlebot" content="noindex, nofollow" />
  <title>Error Page</title>
</head>
```

## Advanced SEO Controls

The SEO system supports many advanced directives:

```tsx
export const metadata: Metadata = generatePageMetadata({
  // Basic metadata
  pageType: 'custom',
  title: 'Advanced SEO Example',
  description: 'Example with advanced SEO controls',

  // Advanced SEO controls
  seo: {
    noIndex: true, // Don't index this page
    noFollow: false, // Still follow links on this page
    noCache: true, // Don't cache this page
    noArchive: true, // Don't show cached version in search results
    noSnippet: false, // Allow snippets
    maxSnippet: 150, // Max snippet length
    maxImagePreview: 'large', // Image preview size ('none', 'standard', 'large')
    maxVideoPreview: 0, // Don't show video previews
    unavailableAfter: '2023-12-31', // Remove from index after this date
  },
});
```

## Pages That Should Not Be Indexed

The following pages should generally not be indexed:

1. **Error Pages**: All error pages (404, 500, etc.)
2. **Admin Pages**: Any admin or dashboard pages
3. **Duplicate Content**: Pages with content that duplicates other pages
4. **Utility Pages**: Pages that serve a utility function but aren't meant for direct user navigation
5. **Thank You Pages**: Post-form submission pages
6. **Preview Pages**: Content preview pages

## Best Practices

1. **Always set canonical URLs**: Prevent duplicate content issues
2. **Use descriptive titles and descriptions**: Unique for each page
3. **Control indexing appropriately**: Don't index pages that shouldn't be in search results
4. **Test with search console**: Verify your settings work as expected
5. **Update the sitemap**: When adding new pages that should be indexed
