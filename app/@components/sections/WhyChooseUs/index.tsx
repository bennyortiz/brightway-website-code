'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '../../ui/section-header';
import SafeImage from '../../ui/safe-image';
import BenefitItem from './BenefitItem';
import { benefitsData } from '@/app/@lib/data/benefits';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  FadeInUp, 
  ScaleIn, 
  StaggerContainer 
} from '../../ui/animations/motion-components';
import { Grid, Column, Section, Container } from '../../ui/layout';

// Animation variants
const countUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const MotionCounter = ({ targetValue, label }: { targetValue: string | number, label: string }) => {
  return (
    <motion.div 
      className="text-center"
      variants={countUpVariants}
      whileHover={{ scale: 1.05 }}
    >
      <motion.p 
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {typeof targetValue === 'string' ? targetValue : `${targetValue}+`}
      </motion.p>
      <p className="text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};

/**
 * Why Choose Us Section Component
 *
 * Highlights the company's competitive advantages and unique selling points.
 * Displays benefits with icons in a visually appealing grid layout.
 * Enhanced with animations for a more engaging experience.
 * Uses Grid and Column components for responsive layout.
 */
const WhyChooseUs = () => {
  return (
    <div id="why-choose-us">
      <Section className="bg-gray-50">
        <FadeInUp>
          <SectionHeader
            subtitle="Why Choose Us"
            title="What Sets Us Apart"
            description="We take pride in our exceptional cleaning services and our commitment to customer satisfaction throughout the DFW metroplex."
          />
        </FadeInUp>

        <div className="mt-16">
          {/* Statistics Bar */}
          <FadeIn>
            <motion.div 
              className="bg-primary text-white rounded-xl p-8 mb-16 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <StaggerContainer>
                <Grid columns={{ default: 1, md: 4 }} gap={8}>
                  <Column>
                    <MotionCounter targetValue={siteConfig.business.clientsServed} label="Clients Served" />
                  </Column>
                  <Column>
                    <MotionCounter targetValue={yearsInBusiness()} label="Years Experience" />
                  </Column>
                  <Column>
                    <MotionCounter targetValue={siteConfig.business.servicesCount} label="Service Options" />
                  </Column>
                  <Column>
                    <MotionCounter targetValue={siteConfig.business.satisfaction} label="Satisfaction Rate" />
                  </Column>
                </Grid>
              </StaggerContainer>
            </motion.div>
          </FadeIn>

          {/* Benefits Grid */}
          <StaggerContainer>
            <Grid columns={{ default: 1, md: 2, lg: 4 }} gap={6}>
              {benefitsData.slice(0, 8).map((benefit, index) => (
                <Column key={index}>
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.5, delay: index * 0.1 }
                      }
                    }}
                  >
                    <BenefitItem 
                      title={benefit.title}
                      description={benefit.description}
                      icon={benefit.icon}
                    />
                  </motion.div>
                </Column>
              ))}
            </Grid>
          </StaggerContainer>
        </div>

        {/* Additional Content - Trust points */}
        <div className="mt-16">
          <Grid columns={{ default: 1, md: 2 }} gap={10} className="items-center">
            <Column>
              <FadeInUp>
                <div className="p-4">
                  <h3 className="text-2xl font-bold mb-6">Why Our Clients Trust Us</h3>
                  <div className="space-y-4">
                    {trustPoints.map((point, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            </Column>
            
            <Column>
              <ScaleIn>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg h-full">
                  <SafeImage
                    src="/images/team-cleaning.jpg"
                    alt="Professional cleaning team"
                    fallbackText="Our professional team at work"
                    priority={false}
                    placement="mid-page"
                    quality={80}
                    className="object-cover"
                    containerHeight={true}
                  />
                </div>
              </ScaleIn>
            </Column>
          </Grid>
        </div>
      </Section>
    </div>
  );
};

// Calculate years in business
const yearsInBusiness = () => {
  const startYear = siteConfig.business.startYear;
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Trust points data
const trustPoints = [
  "Fully licensed, insured, and bonded for your peace of mind",
  "Rigorous staff training and background checks for security",
  "Eco-friendly cleaning solutions that are safe for your space",
  "Consistent quality with regular supervision and inspections",
  "Flexible scheduling to accommodate your business hours",
];

export default WhyChooseUs;
