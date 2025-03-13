import { Metadata } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { generatePageMetadata } from '../utils/metadata';
import ContactForm from '../components/sections/Contact/ContactForm';
import ContactInfo from '../components/sections/Contact/ContactInfo';
import { MapPin } from 'lucide-react';

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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="prose prose-lg max-w-none mb-12 text-center">
            <p className="text-xl text-gray-600">
              Ready to experience the Brightway difference? Get in touch for a free quote or to learn
              more about our services. We're here to help keep your business looking its best.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-lg shadow-md h-full">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <ContactInfo />
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. Fields marked with an asterisk (*) are required.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Service Area Map */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Service Area</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
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
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">How quickly can you start service?</h3>
                <p className="text-gray-600">
                  In most cases, we can begin service within 24-48 hours of finalizing your contract. For specialized cleaning needs, we may require additional time to prepare.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Do you provide free estimates?</h3>
                <p className="text-gray-600">
                  Yes! We provide free, no-obligation estimates for all our commercial cleaning services. Contact us to schedule a consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Are your employees insured?</h3>
                <p className="text-gray-600">
                  Yes, all our employees are fully insured and bonded. We also carry comprehensive liability insurance for your peace of mind.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">Do you bring your own supplies?</h3>
                <p className="text-gray-600">
                  Yes, we provide all cleaning supplies and equipment. We use high-quality, eco-friendly products unless you have specific preferences.
                </p>
              </div>
            </div>
          </div>
          
          {/* Emergency Cleaning */}
          <div className="bg-primary/10 p-8 rounded-xl text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Need Emergency Cleaning?</h2>
            <p className="text-lg mb-6">
              We offer emergency cleaning services for unexpected situations. Call our emergency line for immediate assistance.
            </p>
            <a 
              href="tel:+1-555-123-4567" 
              className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
            >
              Emergency Cleaning: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 