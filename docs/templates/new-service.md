# Adding a New Service

This guide explains how to add a new service to the Brightway Cleaning website.

## Step 1: Add the service to services.ts

Open the file `app/@lib/data/services.ts` and add a new entry to the `serviceItems` array:

```typescript
{
  title: 'Service Name',
  description: 'Comprehensive description of the service that explains its benefits.',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
    'Feature 4',
  ],
}
```

Example:

```typescript
{
  title: 'Window Cleaning',
  description: 'Professional window cleaning services for commercial buildings, ensuring crystal-clear views and improved natural lighting.',
  features: [
    'High-rise capabilities',
    'Eco-friendly solutions',
    'Streak-free results',
    'Scheduled maintenance plans',
  ],
}
```

## Step 2: Add Service Icon (Optional)

If you want to add a custom icon for the service:

1. Update the `getServiceIcon` function in `app/@lib/constants/index.ts`
2. Add the appropriate icon import and mapping

Example:

```typescript
import { ..., Droplets } from 'lucide-react';

export function getServiceIcon(serviceName: string): ReactNode {
  const icons: Record<string, ReactNode> = {
    // ... existing icons
    'Window Cleaning': <Droplets size={iconSize} />,
  };

  return icons[serviceName] || <Building size={iconSize} />;
}
```

## Step 3: Verify the New Service Pages

After adding a new service:

1. The system will automatically generate service pages for each city at `/services/city-name/service-name`

2. Rebuild the site to generate the new pages:
   ```
   npm run build
   ```

3. Test a few new URLs for different cities:
   - `/services/los-angeles/window-cleaning`
   - `/services/san-diego/window-cleaning`

4. Verify that the sitemap includes the new service pages.

## Step 4: SEO Optimization for the New Service

For better SEO performance:

1. Make sure the service description is detailed and includes relevant keywords
2. Consider adding specific benefits for different industries
3. If possible, include testimonials or case studies related to this service
4. Add FAQ items about this service in `app/@lib/data/faq.ts`

Example FAQ item:

```typescript
{
  question: 'How often should I schedule professional window cleaning?',
  answer: 'For commercial buildings, we recommend professional window cleaning quarterly to maintain a professional appearance and extend the life of your windows. However, buildings in areas with high pollution or near construction sites may require more frequent cleaning.',
  category: 'services',
},
```

## Questions?

If you have any questions about adding new services, contact the development team. 