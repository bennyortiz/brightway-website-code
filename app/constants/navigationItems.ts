import { siteConfig } from './siteConfig';

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Service Areas', href: '#service-areas' },
  { name: 'About', href: '#about' },
  { name: 'Why Choose Us', href: '#why-choose-us' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const footerNavigation = {
  services: [
    { name: 'Office Cleaning', href: '#services' },
    { name: 'Commercial Spaces', href: '#services' },
    { name: 'Industrial Cleaning', href: '#services' },
    { name: 'Sanitization Services', href: '#services' },
    { name: 'Waste Management', href: '#services' },
  ],
  locations: [
    { name: 'Dallas', href: '#service-areas' },
    { name: 'Fort Worth', href: '#service-areas' },
    { name: 'Plano', href: '#service-areas' },
    { name: 'Irving', href: '#service-areas' },
    { name: 'Arlington', href: '#service-areas' },
    { name: 'Frisco', href: '#service-areas' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#about' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: siteConfig.social.facebook,
      icon: 'facebook',
    },
    {
      name: 'Twitter',
      href: siteConfig.social.twitter,
      icon: 'twitter',
    },
    {
      name: 'Instagram',
      href: siteConfig.social.instagram,
      icon: 'instagram',
    },
    {
      name: 'LinkedIn',
      href: siteConfig.social.linkedin,
      icon: 'linkedin',
    },
  ],
};
