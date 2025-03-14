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

/**
 * Footer Component
 * 
 * The main site footer with company information, navigation, contact details,
 * and legal information.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = siteConfig.business.startYear;
  const copyrightYears = startYear === currentYear ? currentYear : `${startYear}-${currentYear}`;

  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <Logo className="text-white h-10" />
            <p className="text-gray-400 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex space-x-5">
              {footerNavigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(item.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">{siteConfig.contact.address.full}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.raw}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.phone.display}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{siteConfig.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {copyrightYears} {siteConfig.business.legalName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
