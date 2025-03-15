import { Metadata } from 'next';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { serviceItems } from '@/app/@lib/data/services';
import { PageHeader } from '@/app/@components/ui/page';
import ServiceDetailsList from '@/app/@components/sections/Services/ServiceDetailsList';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Our Services | Brightway Cleaning',
  description:
    "Explore Brightway Cleaning's comprehensive commercial cleaning services for offices, retail spaces, medical facilities, and more.",
  slug: 'services',
});

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader
        title="Professional Cleaning Services"
        description="Comprehensive commercial cleaning solutions tailored to meet the unique needs of your business."
      />

      <ServiceDetailsList 
        services={serviceItems}
        showNavLinks={true}
      />
    </MainLayout>
  );
}
