import { MetadataRoute } from 'next';
import { serviceAreas } from '@/app/@lib/data/service-areas';
import { serviceItems } from '@/app/@lib/data/services';
import { posts, categories, tags } from '@/app/@lib/data/blog';
import { 
  createSlug, 
  getAllCityPaths, 
  getAllCityServicePaths 
} from '@/app/@lib/utils/slugs';
import routes from './routes';

/**
 * Generate sitemap for search engines
 * This ensures all city-service pages are indexed properly
 */

// Base URL for the site
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://brightwaycleaning.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapEntries: MetadataRoute.Sitemap = [];
  
  // Add main pages
  const mainPages = [
    { url: routes.home, priority: 1.0 },
    { url: routes.aboutUs, priority: 0.8 },
    { url: routes.services, priority: 0.9 },
    { url: routes.contact, priority: 0.8 },
    { url: routes.gallery, priority: 0.7 },
    { url: routes.termsOfService, priority: 0.3 },
    { url: routes.privacyPolicy, priority: 0.3 },
    { url: routes.cookiePolicy, priority: 0.3 },
    { url: routes.blog.root, priority: 0.9 }, // Add blog main page
  ];
  
  for (const page of mainPages) {
    siteMapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: page.priority,
    });
  }
  
  // Add all city service pages
  const cityPaths = getAllCityPaths();
  
  for (const { city } of cityPaths) {
    // City services page
    siteMapEntries.push({
      url: `${baseUrl}/services/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
    
    // Individual service pages for this city
    for (const service of serviceItems) {
      const serviceSlug = createSlug(service.title);
      siteMapEntries.push({
        url: `${baseUrl}/services/${city}/${serviceSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }
  
  // Add blog pages
  
  // Add blog posts
  for (const post of posts) {
    siteMapEntries.push({
      url: `${baseUrl}${routes.blog.post(post.slug)}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }
  
  // Add blog category pages
  for (const category of categories) {
    siteMapEntries.push({
      url: `${baseUrl}${routes.blog.category(category.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }
  
  // Add blog tag pages
  for (const tag of tags) {
    siteMapEntries.push({
      url: `${baseUrl}${routes.blog.tag(tag.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    });
  }
  
  return siteMapEntries;
} 