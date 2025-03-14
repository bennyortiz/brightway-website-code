'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '../../ui/section-header';
import { benefitsData } from '@/app/@lib/data/benefits';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { motion } from 'framer-motion';
import { 
  FadeIn, 
  FadeInUp,
  StaggerContainer 
} from '../../ui/animations/motion-components';

// Essential statistics for a cleaner display
const keyStats = [
  { value: () => yearsInBusiness(), label: 'Years of Excellence' },
  { value: () => siteConfig.business.satisfaction, label: 'Client Satisfaction' }
];

/**
 * Why Choose Us Section Component
 *
 * A clean, minimalist approach to showcasing our competitive advantages.
 * Focuses on the most important benefits with a design that values simplicity.
 */
const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="w-full py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <FadeInUp>
          <SectionHeader
            subtitle="Why Brightway"
            title="Commercial Cleaning Excellence"
            description="We deliver superior commercial cleaning services tailored to your business needs, with unmatched attention to detail and customer satisfaction."
            centered={true}
          />
        </FadeInUp>

        <div className="mt-16 max-w-6xl mx-auto">
          {/* Clean Statistics Row */}
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 mb-20">
              {keyStats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <motion.p 
                    className="text-5xl md:text-6xl font-bold text-primary mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    {typeof stat.value === 'function' ? stat.value() : stat.value}
                    {typeof stat.value() === 'string' ? '' : '+'}
                  </motion.p>
                  <p className="text-lg text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Core Benefits - Reduced to 3 focused cards */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {benefitsData.slice(0, 3).map((benefit, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
              >
                <div className="flex flex-col p-8 border border-gray-100 rounded-lg hover:border-primary/30 transition-colors duration-300 h-full bg-white">
                  <div className="mb-6 text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Clean Promise Statement */}
          <FadeIn>
            <div className="bg-gray-50 p-10 md:p-12 rounded-lg max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">Our Commitment to You</h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                When you choose Brightway Cleaning, you're selecting a partner dedicated to creating cleaner, healthier workspaces that enhance your professional environment and employee wellbeing.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-white bg-primary rounded-md font-medium transition-all hover:bg-primary-dark"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Request a Free Quote
              </motion.a>
            </div>
          </FadeIn>
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
