import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import ContactForm from '@/app/@components/sections/Contact/ContactForm';
import ContactInfo from '@/app/@components/sections/Contact/ContactInfo';
import { MapPin, PhoneCall } from 'lucide-react';
import { Card, CardHeader, CardBody, CardTitle } from '@/app/@components/ui/cards';
import { ButtonLink } from '@/app/@components/ui/buttons';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';

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
      description="Ready to experience the Brightway difference? Get in touch for a free quote or to learn more about our services. We're here to help keep your business looking its best."
      headerOptions={{ fullWidth: true }}
    >
      {/* Contact Form and Info Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Contact Information - Will display on top for mobile, left side for desktop */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <ContactInfo />
          </div>

          {/* Contact Form - Will display below contact info for mobile, right side for desktop */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </PageSection>

      {/* Service Area Map */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="md">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-900">
          Our Service Area
        </h2>
        <Card variant="default">
          <CardBody className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-center justify-center mb-4 text-center gap-2">
              <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              <p className="text-base md:text-lg text-gray-600">
                Based in Bedford, TX — Proudly serving the entire DFW metroplex
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
      </PageSection>

      {/* FAQ Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="md">
        <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Card>
            <CardBody className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                How quickly can you start service?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                In most cases, we can begin service within 24-48 hours of finalizing your
                contract. For specialized cleaning needs, we may require additional time to
                prepare.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                Do you provide free estimates?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes! We provide free, no-obligation estimates for all our commercial cleaning
                services. Contact us to schedule a consultation.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                Are your employees insured?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes, all our employees are fully insured and bonded. We also carry comprehensive
                liability insurance for your peace of mind.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                Do you bring your own supplies?
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Yes, we provide all cleaning supplies and equipment. We use high-quality,
                eco-friendly products unless you have specific preferences.
              </p>
            </CardBody>
          </Card>
        </div>
      </PageSection>

      {/* Emergency Cleaning */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="primary-light" spacingY="md">
        <Card variant="default" className="bg-transparent border-none">
          <CardBody className="p-4 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Need Emergency Cleaning?
            </h2>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              We offer emergency cleaning services for unexpected situations. Call our emergency
              line for immediate assistance.
            </p>
            <ButtonLink
              href="tel:+1-555-123-4567"
              variant="primary"
              size="lg"
              leftIcon={<PhoneCall size={18} />}
              className="w-full md:w-auto break-words text-sm md:text-base px-3 py-2 md:px-4 md:py-3"
            >
              Emergency Cleaning: (555) 123-4567
            </ButtonLink>
          </CardBody>
        </Card>
      </PageSection>
    </PageTemplate>
  );
}
