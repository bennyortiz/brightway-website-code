import { siteConfig } from './siteConfig'

export const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
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
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Careers', href: '#about' },
    { name: 'Press', href: '#about' },
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
      icon: 'facebook' 
    },
    { 
      name: 'Twitter', 
      href: siteConfig.social.twitter, 
      icon: 'twitter' 
    },
    { 
      name: 'Instagram', 
      href: siteConfig.social.instagram, 
      icon: 'instagram' 
    },
    { 
      name: 'LinkedIn', 
      href: siteConfig.social.linkedin, 
      icon: 'linkedin' 
    },
  ],
}; 