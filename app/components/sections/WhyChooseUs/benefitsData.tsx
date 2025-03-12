import React from 'react';
import {
  CheckCircle,
  Shield,
  ThumbsUp,
  Award,
  Clock,
  BadgeCheck,
  Building2,
  Sparkles,
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
 * Contains the data for the benefits displayed in the Why Choose Us section.
 * Each benefit has an icon, title, and description.
 */
export const benefitsData: BenefitItemProps[] = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Certified Staff',
    description:
      'Our cleaning professionals undergo rigorous training and certification in commercial cleaning techniques and safety protocols.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Eco-Friendly Products',
    description:
      'We use environmentally friendly, EPA-approved cleaning products that are effective yet safe for your employees and the planet.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Satisfaction Guarantee',
    description:
      "Your satisfaction is our priority. If you're not completely satisfied, we'll re-clean the area at no additional cost to you.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Award-Winning Service',
    description:
      'Our commitment to excellence has earned us recognition and awards for outstanding commercial cleaning services in the DFW area.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Flexible Scheduling',
    description:
      'We work around your business hours with early morning, evening, and weekend cleaning to minimize disruption to your operations.',
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: 'Fully Insured & Bonded',
    description:
      'We carry comprehensive insurance coverage including liability and workers compensation for your complete peace of mind.',
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: 'Industry Expertise',
    description:
      'We specialize in cleaning for various commercial settings including offices, medical facilities, retail spaces, and industrial environments.',
  },
  {
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    title: 'Cutting-Edge Equipment',
    description:
      'We invest in state-of-the-art cleaning equipment and technologies to deliver superior results efficiently and safely.',
  },
];
