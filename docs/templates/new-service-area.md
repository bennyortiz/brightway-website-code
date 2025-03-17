# Adding a New Service Area

This guide explains how to add a new service area (city) to the Brightway Cleaning website.

## Step 1: Add the city to service-areas.ts

Open the file `app/@lib/data/service-areas.ts` and add a new entry to the `serviceAreas` array:

```typescript
{
  city: 'City Name',
  description: 'Brief description of services in this city.',
  population: 'Population size',
  keyLocations: ['Major Location 1', 'Major Location 2', 'Major Location 3', 'Major Location 4'],
  isFeatured: true, // Set to true if this should be highlighted
}
```

Example:

```typescript
{
  city: 'Seattle',
  description: 'Professional cleaning services throughout the Seattle metropolitan area.',
  population: '750,000',
  keyLocations: ['Downtown', 'Bellevue', 'Redmond', 'Kirkland'],
  isFeatured: true,
}
```

## Step 2: Customize City Content (Optional)

The website dynamically generates city pages using the data provided in `service-areas.ts`. However, if you need custom content for a specific city:

1. Create a custom component in `app/@components/city-pages/`
2. Update the city service page to include this custom component

Example of creating a custom city component:

```tsx
// app/@components/city-pages/seattle.tsx
import React from 'react';

export default function SeattleContent() {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Seattle's Unique Cleaning Needs</h3>
      <p>
        Seattle's tech companies and modern office spaces require specialized cleaning
        approaches. Our team is familiar with the unique requirements of the Puget Sound region.
      </p>
      {/* Add more custom content here */}
    </div>
  );
}
```

## Step 3: Verify the New City Pages

After adding a new city:

1. The system will automatically generate:
   - A city service page at `/services/city-name`
   - Individual service pages at `/services/city-name/service-name` for each service

2. Rebuild the site to generate the new pages:
   ```
   npm run build
   ```

3. Test the new URLs:
   - `/services/city-name` (e.g., `/services/seattle`)
   - `/services/city-name/office-cleaning` (e.g., `/services/seattle/office-cleaning`)

4. Verify that the sitemap includes the new pages.

## Step 4: SEO Optimization for the New City

For better SEO performance:

1. Consider adding city-specific testimonials or case studies
2. If you have local customers, add their testimonials to the city page
3. Include relevant local landmarks, business districts, or other geographical references
4. Make sure all meta descriptions include the city name

## Questions?

If you have any questions about adding new service areas, contact the development team. 