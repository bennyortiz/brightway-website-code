import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import ContactForm from '@/app/@components/sections/Contact/ContactForm';
import ContactInfo from '@/app/@components/sections/Contact/ContactInfo';
import { MapPin, PhoneCall, Clock, HelpCircle, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardBody, CardTitle } from '@/app/@components/ui/cards';
import { ButtonLink } from '@/app/@components/ui/buttons';
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
      description="Ready to experience the Brightway difference? Get in touch for a free quote or to learn more about our services. We're here to help keep your business looking its best."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Page Navigation */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="md">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            <a
              href="#contact-form"
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
            >
              Contact Form
            </a>
            <a
              href="#service-area"
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
            >
              Service Area
            </a>
            <a
              href="#faq"
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
            >
              FAQs
            </a>
            <a
              href="#emergency"
              className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
            >
              Emergency Service
            </a>
          </div>
        </div>
      </PageSection>

      {/* Contact Form and Info Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg" id="contact-form">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you have questions about our services, need a quote, or are ready to schedule your first cleaning, 
              we're here to help. Fill out the form below or use our contact information to reach us directly.
            </p>
          </div>
          
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
        </div>
      </PageSection>

      {/* Why Choose Us Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
              <CheckCircle2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Why Choose Brightway</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              When you contact us, you're not just getting a cleaning service - you're getting a partner committed to making your space shine.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Card className="bg-white/10 border-0">
              <CardBody className="p-6 text-center">
                <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Fast Response</h3>
                <p className="text-white/80">
                  We respond to all inquiries within 24 hours and can often provide same-day quotes for urgent needs.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white/10 border-0">
              <CardBody className="p-6 text-center">
                <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
                  <HelpCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Expert Consultation</h3>
                <p className="text-white/80">
                  Our team provides personalized recommendations based on your specific facility needs and budget.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-white/10 border-0">
              <CardBody className="p-6 text-center">
                <div className="inline-block p-3 rounded-full bg-white/20 mb-4">
                  <PhoneCall className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Dedicated Support</h3>
                <p className="text-white/80">
                  You'll always have a dedicated point of contact to ensure consistent communication and service.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </PageSection>

      {/* Service Area Map */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg" id="service-area">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Service Area</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Based in Bedford, Texas, we proudly serve commercial clients throughout the entire Dallas-Fort Worth metroplex.
            </p>
          </div>
          
          <Card variant="default">
            <CardBody className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row items-center justify-center mb-4 text-center gap-2">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                <p className="text-base md:text-lg text-gray-600">
                  Based in {siteConfig.contact.address.city} — Proudly serving the entire DFW metroplex
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
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 rounded text-center">
                  <p className="font-medium">Dallas</p>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <p className="font-medium">Fort Worth</p>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <p className="font-medium">Arlington</p>
                </div>
                <div className="p-3 bg-gray-50 rounded text-center">
                  <p className="font-medium">Irving & Beyond</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </PageSection>

      {/* FAQ Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="lg" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our commercial cleaning services? Find quick answers to common questions below.
            </p>
          </div>
          
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
            
            <Card>
              <CardBody className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                  What types of businesses do you serve?
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We serve a wide range of commercial clients including offices, medical facilities, schools, 
                  retail spaces, restaurants, and industrial properties throughout the DFW area.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary">
                  Can you accommodate special requests?
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Absolutely! We customize our cleaning services to meet your specific needs. Let us know your requirements, 
                  and we'll work with you to create a tailored cleaning plan.
                </p>
              </CardBody>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <ButtonLink href="/services" variant="outline" size="lg">
              View All Our Services
            </ButtonLink>
          </div>
        </div>
      </PageSection>

      {/* Emergency Cleaning */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="lg" id="emergency">
        <div className="max-w-7xl mx-auto">
          <Card variant="default" className="bg-transparent border-none">
            <CardBody className="p-6 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
                <PhoneCall className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Need Emergency Cleaning?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                We offer 24/7 emergency cleaning services for unexpected situations like water damage, 
                biohazard cleanup, or pre-event rush jobs. Call our emergency line for immediate assistance.
              </p>
              <ButtonLink
                href={`tel:${siteConfig.contact.phone.raw}`}
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall size={18} />}
                className="md:text-lg bg-white text-primary hover:bg-white/90"
              >
                Emergency Cleaning: {siteConfig.contact.phone.display}
              </ButtonLink>
            </CardBody>
          </Card>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
