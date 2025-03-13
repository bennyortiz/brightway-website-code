import { Metadata } from 'next';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import ContactForm from '@/app/@components/sections/Contact/ContactForm';
import ContactInfo from '@/app/@components/sections/Contact/ContactInfo';
import { MapPin, PhoneCall } from 'lucide-react';
import { Card, CardHeader, CardBody, CardTitle } from '@/app/@components/ui/cards';
import { ButtonLink } from '@/app/@components/ui/buttons';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'contact',
  title: 'Contact Us | Brightway Cleaning',
  description: 'Get in touch with Brightway Cleaning for reliable commercial cleaning services in the DFW metroplex. Request a quote or learn more about our services.',
  slug: 'contact',
});

export default function Contact() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none mb-12 text-center">
            <p className="text-xl text-gray-600">
              Ready to experience the Brightway difference? Get in touch for a free quote or to learn
              more about our services. We're here to help keep your business looking its best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
          
          {/* Service Area Map */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Our Service Area</h2>
            <Card variant="elevated">
              <CardBody className="p-6">
                <div className="flex items-center justify-center mb-4 text-center">
                  <MapPin className="h-6 w-6 text-primary mr-2" />
                  <p className="text-lg text-gray-600">
                    Based in Bedford, TX — Proudly serving the entire DFW metroplex
                  </p>
                </div>
                
                <div className="aspect-[16/9] w-full h-auto relative rounded-lg overflow-hidden shadow-md">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214575.70138497924!2d-97.19858782188162!3d32.766764862246895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7decba153b7f%3A0x55625d7141b31a0c!2sBedford%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1654812345678!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-3 text-primary">How quickly can you start service?</h3>
                  <p className="text-gray-600">
                    In most cases, we can begin service within 24-48 hours of finalizing your contract. For specialized cleaning needs, we may require additional time to prepare.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Do you provide free estimates?</h3>
                  <p className="text-gray-600">
                    Yes! We provide free, no-obligation estimates for all our commercial cleaning services. Contact us to schedule a consultation.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Are your employees insured?</h3>
                  <p className="text-gray-600">
                    Yes, all our employees are fully insured and bonded. We also carry comprehensive liability insurance for your peace of mind.
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Do you bring your own supplies?</h3>
                  <p className="text-gray-600">
                    Yes, we provide all cleaning supplies and equipment. We use high-quality, eco-friendly products unless you have specific preferences.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
          
          {/* Emergency Cleaning */}
          <Card variant="elevated" className="bg-primary/10 border-primary/20 mb-8">
            <CardBody className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Emergency Cleaning?</h2>
              <p className="text-lg mb-6">
                We offer emergency cleaning services for unexpected situations. Call our emergency line for immediate assistance.
              </p>
              <ButtonLink 
                href="tel:+1-555-123-4567" 
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall size={18} />}
              >
                Emergency Cleaning: (555) 123-4567
              </ButtonLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
} 