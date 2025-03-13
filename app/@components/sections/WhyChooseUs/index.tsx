'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '../../ui/section-header';
import SafeImage from '../../ui/safe-image';
import BenefitItem from './BenefitItem';
import { benefitsData } from './benefitsData';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  FadeInUp, 
  ScaleIn, 
  StaggerContainer 
} from '../../ui/animations/motion-components';

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
 */
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
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
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <MotionCounter targetValue={siteConfig.business.clientsServed} label="Clients Served" />
                <MotionCounter targetValue={yearsInBusiness()} label="Years Experience" />
                <MotionCounter targetValue={siteConfig.business.servicesCount} label="Service Options" />
                <MotionCounter targetValue={siteConfig.business.satisfaction} label="Satisfaction Rate" />
              </StaggerContainer>
            </motion.div>
          </FadeIn>

          {/* Benefits Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsData.slice(0, 8).map((benefit, index) => (
              <motion.div 
                key={index}
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
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Client Promise */}
          <ScaleIn className="mt-16">
            <motion.div 
              className="text-center bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto"
              whileHover={{ 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Client Promise</h3>
              <p className="text-lg text-gray-600 mb-6">
                When you choose Brightway Cleaning, you're not just getting a cleaning service -
                you're getting a committed partner in maintaining the cleanliness, health, and
                professional appearance of your business environment.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Experience the Brightway difference for yourself. Our{' '}
                {siteConfig.business.satisfaction} satisfaction rate speaks volumes about our
                dedication to excellence.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Free Quote
              </motion.a>
            </motion.div>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
};

// Helper function to calculate years in business
const yearsInBusiness = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - siteConfig.business.startYear;
};

export default WhyChooseUs;
