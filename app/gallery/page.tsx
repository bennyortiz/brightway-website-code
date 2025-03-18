import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import Gallery from '@/app/@components/sections/Gallery';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Our Work Gallery | Brightway Cleaning',
  description:
    'Browse through our gallery of completed commercial cleaning projects to see the quality of our services in action.',
  canonicalPath: '/gallery',
});

export default function GalleryPage() {
  return (
    <PageTemplate
      title="Our Work Gallery"
      description="Browse through our portfolio of commercial cleaning projects to see the quality and thoroughness of our services in action."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Gallery Section with Filter */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg">
        <Gallery />
      </PageSection>
    </PageTemplate>
  );
}
