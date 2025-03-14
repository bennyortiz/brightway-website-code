import React from 'react';
import {
  BadgeCheck,
  Sparkles,
  Users,
} from 'lucide-react';

/**
 * Benefit Item Interface
 */
export interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Benefits Data
 *
 * Contains the data for the core benefits displayed in the Why Choose Us section.
 * Focused on the most important selling points with SEO-optimized descriptions.
 */
export const benefitsData: BenefitItemProps[] = [
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Certified & Insured Professionals',
    description:
      'Our thoroughly vetted cleaning staff are professionally trained, fully insured, and background-checked, guaranteeing safety and reliability for your commercial facility.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Premium Cleaning Standards',
    description:
      'We utilize industry-leading cleaning protocols and eco-friendly products to deliver exceptional results that exceed expectations and promote healthier work environments.',
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Customized Cleaning Solutions',
    description:
      'Every business has unique needs. We develop tailored commercial cleaning programs specific to your industry, schedule, and facility requirements.',
  },
  // Additional benefits kept for reference or future use
  {
    icon: <BadgeCheck className="h-8 w-8" />,
    title: 'Fully Insured & Bonded',
    description:
      'We carry comprehensive insurance coverage including liability and workers compensation for your complete peace of mind.',
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Cutting-Edge Equipment',
    description:
      'We invest in state-of-the-art cleaning equipment and technologies to deliver superior results efficiently and safely.',
  },
]; 