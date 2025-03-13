import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Card, CardHeader, CardBody, CardTitle } from '@/app/@components/ui/cards';

/**
 * ContactInfo Component
 *
 * Displays contact information including phone, email and address.
 * Uses Lucide icons for visual enhancement.
 */
const ContactInfo = () => {
  return (
    <Card variant="elevated" className="h-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <p className="text-gray-600 mt-2">
          Get in touch with our friendly team
        </p>
      </CardHeader>
      
      <CardBody className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Call Us</h3>
            <p className="text-gray-600 mb-1">Available Monday-Friday</p>
            <a 
              href={`tel:${siteConfig.contact.phone.raw}`} 
              className="text-primary hover:underline font-medium"
            >
              {siteConfig.contact.phone.display}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Email Us</h3>
            <p className="text-gray-600 mb-1">We'll respond within 24 hours</p>
            <a 
              href={`mailto:${siteConfig.contact.email}`} 
              className="text-primary hover:underline font-medium"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Service Area</h3>
            <p className="text-gray-600 mb-1">Serving the DFW Metroplex</p>
            <address className="not-italic text-primary font-medium">
              Based in {siteConfig.contact.address.full}
            </address>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
            <p className="text-gray-600 mb-1">When you can reach us</p>
            <ul className="text-gray-700">
              <li>Monday-Friday: 8am - 6pm</li>
              <li>Saturday: 9am - 3pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContactInfo;
