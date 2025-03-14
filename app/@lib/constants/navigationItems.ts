import { siteConfig } from './siteConfig';

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  services: [
    { name: 'Office Cleaning', href: '/services#service-list' },
    { name: 'Commercial Spaces', href: '/services#service-list' },
    { name: 'Industrial Cleaning', href: '/services#service-list' },
    { name: 'Sanitization Services', href: '/services#service-list' },
    { name: 'Waste Management', href: '/services#service-list' },
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
    { name: 'About Us', href: '/about-us' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
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
