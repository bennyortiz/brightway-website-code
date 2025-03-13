import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';

/**
 * ContactInfo Component
 *
 * Displays contact information including phone, email and address.
 * Uses Lucide icons for visual enhancement.
 */
const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Call Us</h3>
          <p className="text-gray-600 mb-1">Available Monday-Friday</p>
          <a href={`tel:${siteConfig.contact.phone.raw}`} className="text-primary hover:underline">
            {siteConfig.contact.phone.display}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Email Us</h3>
          <p className="text-gray-600 mb-1">We'll respond within 24 hours</p>
          <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:underline">
            {siteConfig.contact.email}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="bg-primary/10 p-3 rounded-full">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Service Area</h3>
          <p className="text-gray-600 mb-1">Serving the DFW Metroplex</p>
          <address className="not-italic text-primary">
            Based in {siteConfig.contact.address.full}
          </address>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
