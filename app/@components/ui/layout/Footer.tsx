import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
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
      {/* Pre-footer CTA */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
            <p className="text-white/90 mt-2 max-w-xl">
              Contact us today for a free consultation and quote for your commercial cleaning needs.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium shadow-md transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Company Information - Wider column */}
          <div className="md:col-span-4 space-y-6">
            <Logo className="text-white h-10" />
            <p className="text-gray-400 max-w-xs leading-relaxed">{siteConfig.description}</p>
            
            <div className="pt-2">
              <h4 className="text-white text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="bg-gray-800 hover:bg-primary p-2 rounded-full text-white transition-colors"
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(item.icon)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Company</h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-primary transition-colors group flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 text-primary mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">Contact Us</h3>
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
        </div>
      </div>

      {/* Bottom divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-800 my-2"></div>
      </div>

      {/* Legal Footer */}
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
    </footer>
  );
};

export default Footer;
