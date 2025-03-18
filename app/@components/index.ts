/**
 * Re-export components for easier imports
 * 
 * This file serves as a central export point for commonly used components,
 * making it easier to import them from a single location.
 * 
 * Example usage:
 * import { Button, Logo, Hero, Contact } from '@/app/@components';
 */

// UI Components
export { default as Logo } from './ui/Logo';
export { Button } from './ui/buttons/Button';
export {
  LinkButton,
  PrimaryLinkButton,
  OutlineLinkButton,
  SecondaryLinkButton,
} from './ui/buttons/LinkButton';
export { default as SafeImage } from './ui/safe-image';
export { default as SectionHeader } from './ui/section-header';
export { default as PrintButton } from './ui/print-button';
export { default as DocumentInfoSection } from './ui/document-info-section';
export { default as PageHeader } from './ui/page/PageHeader';
export { Carousel } from './ui/carousel/Carousel';
export { default as Card } from './ui/cards/Card';

// Layout Components
export { default as MainLayout } from './ui/layout/MainLayout';
export { default as Footer } from './ui/layout/Footer';
export { default as Navigation } from './ui/layout/Navigation';
export { default as ScrollToTop } from './ui/layout/ScrollToTop';

// Section Components
export { 
  Hero, 
  Contact, 
  CTABanner, 
  About, 
  ServiceAreas, 
  Testimonials, 
  WhyChooseUs,
  Services,
  ServiceList,
  ServiceCard,
  ServiceDetails,
  ServiceDetailsList,
  FAQ
} from './sections';

// Shared Components
export { default as NoIndex } from './shared/NoIndex';
export { default as PolyfillScript } from './shared/PolyfillScript';
export { default as SEO } from './shared/SEO';
export { default as WebVitals } from './shared/WebVitals';
