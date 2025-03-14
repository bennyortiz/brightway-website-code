import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { footerNavigation } from '@/app/@lib/constants/navigationItems';
import Logo from '../Logo';

const getSocialIcon = (icon: string) => {
  switch (icon) {
    case 'facebook':
      return <Facebook className="h-5 w-5" />;
    case 'twitter':
      return <Twitter className="h-5 w-5" />;
    case 'instagram':
      return <Instagram className="h-5 w-5" />;
    case 'linkedin':
      return <Linkedin className="h-5 w-5" />;
    default:
      return null;
  }
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = siteConfig.business.startYear;
  const copyrightYears = startYear === currentYear ? currentYear : `${startYear}-${currentYear}`;

  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-400">{siteConfig.description}</p>
            <div className="flex space-x-4">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  {getSocialIcon(item.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact - Moved right after logo column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.raw}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {copyrightYears} {siteConfig.business.legalName}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-primary text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
