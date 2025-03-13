import React from 'react';
import { CheckCircle, Shield, ThumbsUp, Award } from 'lucide-react';
import { BenefitItemProps } from './BenefitItem';

/**
 * Benefits Data
 *
 * Contains the data for the benefits displayed in the About section.
 * Each benefit has an icon, title, and description.
 */
export const benefitsData: BenefitItemProps[] = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Certified Staff',
    description:
      'All our cleaning professionals are fully trained and certified for commercial cleaning.',
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Eco-Friendly',
    description:
      'We use environmentally friendly products that are effective without harming the planet.',
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Satisfaction Guarantee',
    description:
      "If you're not completely satisfied, we'll re-clean the area at no additional cost.",
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in commercial cleaning services in the region.',
  },
];
