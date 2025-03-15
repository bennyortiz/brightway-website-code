import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import ContactForm from '@/app/@components/sections/Contact/ContactForm';
import ContactInfo from '@/app/@components/sections/Contact/ContactInfo';
import { MapPin } from 'lucide-react';
import { Card, CardBody } from '@/app/@components/ui/cards';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import { siteConfig } from '@/app/@lib/constants/siteConfig';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'contact',
  title: 'Contact Us | Brightway Cleaning',
  description:
    'Get in touch with Brightway Cleaning for reliable commercial cleaning services in the DFW metroplex. Request a quote or learn more about our services.',
  slug: 'contact',
});

export default function Contact() {
  return (
    <PageTemplate
      title="Contact Us"
      description="Ready to experience the Brightway difference? Get in touch for a free quote or to learn more about our services."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Main Contact Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information - Will display on top for mobile, left side for desktop */}
            <div className="lg:col-span-1 order-1 lg:order-1">
              <ContactInfo />
            </div>

            {/* Contact Form - Will display below contact info for mobile, right side for desktop */}
            <div className="lg:col-span-2 order-2 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </PageSection>

      {/* Service Area Map */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Service Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in {siteConfig.contact.address.city}, we proudly serve commercial clients throughout the entire Dallas-Fort Worth metroplex.
            </p>
          </div>
          
          <Card variant="default">
            <CardBody className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-center mb-4 text-center gap-2">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <p className="text-base md:text-lg text-gray-600">
                  Serving all areas of DFW including Dallas, Fort Worth, Arlington, Irving, Plano, and beyond
                </p>
              </div>

              <div className="aspect-[16/9] w-full h-auto relative rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214575.70138497924!2d-97.19858782188162!3d32.766764862246895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7decba153b7f%3A0x55625d7141b31a0c!2sBedford%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1654812345678!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
