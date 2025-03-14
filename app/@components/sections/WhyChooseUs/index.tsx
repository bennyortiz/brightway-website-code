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
      className="text-center relative"
      variants={countUpVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl -z-10 blur-xl" />
      <motion.p 
        className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {typeof targetValue === 'string' ? targetValue : `${targetValue}+`}
      </motion.p>
      <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">{label}</p>
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
    <section id="why-choose-us" className="relative w-full py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <FadeInUp>
          <SectionHeader
            subtitle="Why Choose Us"
            title="What Sets Us Apart"
            description="We take pride in our exceptional cleaning services and our commitment to customer satisfaction throughout the DFW metroplex."
            centered
          />
        </FadeInUp>

        <div className="mt-20">
          {/* Statistics Bar */}
          <FadeIn>
            <motion.div 
              className="relative mb-24"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-12 shadow-xl">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <MotionCounter targetValue={siteConfig.business.clientsServed} label="Clients Served" />
                  <MotionCounter targetValue={yearsInBusiness()} label="Years Experience" />
                  <MotionCounter targetValue={siteConfig.business.servicesCount} label="Service Options" />
                  <MotionCounter targetValue={siteConfig.business.satisfaction} label="Satisfaction Rate" />
                </StaggerContainer>
              </div>
            </motion.div>
          </FadeIn>

          {/* Benefits Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
          <ScaleIn className="mt-24">
            <motion.div 
              className="relative text-center max-w-4xl mx-auto"
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl" />
              
              <div className="relative bg-white/80 backdrop-blur-sm border border-primary/10 rounded-2xl p-12 shadow-xl">
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-6">Our Promise</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">The Brightway Difference</h3>
                <p className="text-lg text-gray-600 mb-8">
                  When you choose Brightway Cleaning, you're not just getting a cleaning service -
                  you're getting a committed partner in maintaining the cleanliness, health, and
                  professional appearance of your business environment.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-medium text-white rounded-xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary shadow-lg shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get a Free Quote
                </motion.a>
              </div>
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
