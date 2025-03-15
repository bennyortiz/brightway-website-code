import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Card, CardHeader, CardBody, CardTitle } from '@/app/@components/ui/cards';

// Contact info item component for better organization and reusability
interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, subtitle, children }: ContactInfoItemProps) => (
  <div className="flex flex-col sm:flex-row items-start gap-4">
    <div className="bg-primary/10 p-3 rounded-full shrink-0 mb-2 sm:mb-0">{icon}</div>
    <div className="w-full overflow-hidden">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 mb-1 break-words">{subtitle}</p>
      <div className="break-words overflow-wrap-anywhere">{children}</div>
    </div>
  </div>
);

/**
 * ContactInfo Component
 *
 * Displays contact information including phone, email and address.
 * Uses Lucide icons for visual enhancement.
 * Optimized for mobile and responsive layouts.
 */
const ContactInfo = () => {
  return (
    <Card variant="elevated" className="h-full">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <p className="text-gray-600 mt-2">Get in touch with our friendly team</p>
      </CardHeader>

      <CardBody className="space-y-6 sm:space-y-8">
        <ContactInfoItem
          icon={<Phone className="h-6 w-6 text-primary" />}
          title="Call Us"
          subtitle="Available Monday-Friday"
        >
          <a
            href={`tel:${siteConfig.contact.phone.raw}`}
            className="text-primary hover:underline font-medium break-words"
          >
            {siteConfig.contact.phone.display}
          </a>
        </ContactInfoItem>

        <ContactInfoItem
          icon={<Mail className="h-6 w-6 text-primary" />}
          title="Email Us"
          subtitle="We'll respond within 24 hours"
        >
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary hover:underline font-medium break-words"
          >
            {siteConfig.contact.email}
          </a>
        </ContactInfoItem>

        <ContactInfoItem
          icon={<MapPin className="h-6 w-6 text-primary" />}
          title="Service Area"
          subtitle="Serving the DFW Metroplex"
        >
          <address className="not-italic text-primary font-medium break-words">
            Based in {siteConfig.contact.address.full}
          </address>
        </ContactInfoItem>

        <ContactInfoItem
          icon={<Clock className="h-6 w-6 text-primary" />}
          title="Business Hours"
          subtitle="When you can reach us"
        >
          <ul className="text-gray-700 space-y-1">
            <li>Monday-Friday: 8am - 6pm</li>
            <li>Saturday: 9am - 3pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </ContactInfoItem>
      </CardBody>
    </Card>
  );
};

export default ContactInfo;
