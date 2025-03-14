'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeader from '../../ui/section-header';
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
      className="relative z-10"
      variants={countUpVariants}
      whileHover={{ scale: 1.05 }}
    >
      <motion.p 
        className="text-4xl md:text-5xl font-bold mb-2 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {typeof targetValue === 'string' ? targetValue : `${targetValue}+`}
      </motion.p>
      <p className="text-sm uppercase tracking-wider text-white/90">{label}</p>
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
    <section id="why-choose-us" className="w-full py-20 md:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-primary/3 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeInUp>
          <SectionHeader
            subtitle="Why Choose Us"
            title="Our Commitment to Excellence"
            description="Discover the Brightway difference and why businesses throughout the DFW metroplex trust us with their commercial cleaning needs."
            centered={true}
          />
        </FadeInUp>

        <div className="mt-16">
          {/* Statistics Banner */}
          <FadeIn>
            <motion.div 
              className="relative rounded-2xl overflow-hidden mb-20 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark z-0"></div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
              </div>
              
              <div className="relative z-10 p-10 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Impact by the Numbers</h3>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                  <MotionCounter targetValue={siteConfig.business.clientsServed} label="Clients Served" />
                  <MotionCounter targetValue={yearsInBusiness()} label="Years Experience" />
                  <MotionCounter targetValue={siteConfig.business.servicesCount} label="Service Options" />
                  <MotionCounter targetValue={siteConfig.business.satisfaction} label="Satisfaction Rate" />
                </StaggerContainer>
              </div>
            </motion.div>
          </FadeIn>

          {/* Feature Cards */}
          <div className="relative mb-20">
            <div className="max-w-6xl mx-auto">
              <FadeInUp className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">What Makes Us Different</h3>
                <p className="text-gray-600 max-w-3xl mx-auto text-center">
                  Our comprehensive approach to commercial cleaning combines professional expertise, advanced equipment, and a genuine commitment to your satisfaction.
                </p>
              </FadeInUp>
              
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefitsData.slice(0, 8).map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.5, delay: index * 0.1 }
                      }
                    }}
                  >
                    <div className="h-full flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary/0 group-hover:border-primary">
                      <div className="p-6 flex flex-col h-full">
                        <div className="p-3 bg-primary/10 rounded-full mb-5 w-fit group-hover:bg-primary/20 transition-all duration-300">
                          {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                        <p className="text-gray-600 mb-6 flex-grow">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </div>

          {/* Client Promise */}
          <ScaleIn>
            <motion.div 
              className="relative rounded-2xl overflow-hidden bg-white shadow-xl max-w-5xl mx-auto"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Side accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
              
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-3 p-10 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Client Promise</h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    When you choose Brightway Cleaning, you're partnering with a team that's dedicated to maintaining the cleanliness, health, and professional image of your business environment.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Experience the Brightway difference with our industry-leading {siteConfig.business.satisfaction} satisfaction rate and personalized approach to commercial cleaning.
                  </p>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-primary rounded-lg shadow-md hover:bg-primary-dark transition-colors group"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
                <div className="hidden md:block md:col-span-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark">
                    <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat opacity-10"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-8">
                      <div className="mb-4">
                        <CheckCircle className="h-16 w-16 mx-auto text-white opacity-90" />
                      </div>
                      <h4 className="text-2xl font-bold mb-2">100% Satisfaction</h4>
                      <p className="text-white/90">
                        Our commitment to excellence is backed by our satisfaction guarantee
                      </p>
                    </div>
                  </div>
                </div>
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
