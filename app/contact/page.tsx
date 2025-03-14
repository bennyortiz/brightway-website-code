import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import ContactForm from '@/app/@components/sections/Contact/ContactForm';
import { Grid, Column, Section, Container } from '@/app/@components/ui/layout';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Contact Us | Brightway Cleaning',
  description: 'Get in touch with Brightway Cleaning for all your commercial cleaning needs in DFW. Contact us for a free quote or to learn more about our services.',
  canonicalPath: '/contact',
});

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-primary to-primary-dark">
        <Container className="py-16 lg:py-24">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have questions or ready to get started? Reach out to our team for personalized assistance with your commercial cleaning needs.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-16 md:py-24">
        <Grid columns={{ default: 1, md: 2 }} gap={12}>
          {/* Contact Information */}
          <Column>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 h-full">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to answer any questions you have about our services. Reach out to us through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-gray-600">
                      1234 Main Street<br />
                      Bedford, TX 76021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+18175551234" className="hover:text-primary">(817) 555-1234</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@brightwaycleaning.com" className="hover:text-primary">info@brightwaycleaning.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-3">
                  We proudly serve the entire Dallas-Fort Worth metroplex, including:
                </p>
                <Grid columns={{ default: 2 }} gap={4}>
                  <Column>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Bedford</li>
                      <li>• Euless</li>
                      <li>• Arlington</li>
                      <li>• Hurst</li>
                    </ul>
                  </Column>
                  <Column>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Fort Worth</li>
                      <li>• Dallas</li>
                      <li>• Irving</li>
                      <li>• Grapevine</li>
                    </ul>
                  </Column>
                </Grid>
              </div>
            </div>
          </Column>
          
          {/* Contact Form */}
          <Column>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below, and one of our team members will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </Column>
        </Grid>
      </Container>
      
      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in Bedford, with easy access to the entire DFW metroplex.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107439.00075296759!2d-97.14309222161913!3d32.850595820217856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7ef78ca1147d%3A0xb934b5d8b18a886!2sBedford%2C%20TX!5e0!3m2!1sen!2sus!4v1647372890772!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Brightway Cleaning Location Map"
            ></iframe>
          </div>
        </Container>
      </div>
      
      {/* FAQ Section */}
      <Container className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about our commercial cleaning services.
          </p>
        </div>
        
        <Grid columns={{ default: 1, md: 2 }} gap={8} className="max-w-5xl mx-auto">
          <Column>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-3">How do I get a quote?</h3>
              <p className="text-gray-600">
                You can request a quote by filling out our contact form, calling our office, or sending us an email. We'll schedule a walkthrough of your facility to provide an accurate estimate.
              </p>
            </div>
          </Column>
          
          <Column>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-3">Are you insured and bonded?</h3>
              <p className="text-gray-600">
                Yes, Brightway Cleaning is fully insured and bonded. We carry comprehensive liability insurance and workers' compensation coverage for all our employees.
              </p>
            </div>
          </Column>
          
          <Column>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-3">What cleaning products do you use?</h3>
              <p className="text-gray-600">
                We use a combination of industry-leading, eco-friendly cleaning products that are effective yet safe for the environment and your employees.
              </p>
            </div>
          </Column>
          
          <Column>
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-semibold mb-3">Do you offer recurring cleaning services?</h3>
              <p className="text-gray-600">
                Yes, we offer daily, weekly, bi-weekly, and monthly recurring cleaning services tailored to your business needs and schedule.
              </p>
            </div>
          </Column>
        </Grid>
      </Container>
    </MainLayout>
  );
} 