'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Shield, Award } from 'lucide-react';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { 
  FadeIn, 
  FadeInUp, 
  StaggerContainer 
} from '../../ui/animations/motion-components';

// Animation variants
const countUpVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const MotionCounter = ({ targetValue, label }: { targetValue: string | number, label: string }) => {
  return (
    <motion.div 
      className="relative"
      variants={countUpVariants}
    >
      <motion.p 
        className="text-5xl md:text-6xl font-bold mb-2 text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {typeof targetValue === 'string' ? targetValue : `${targetValue}+`}
      </motion.p>
      <p className="text-sm uppercase tracking-wider text-gray-600">{label}</p>
    </motion.div>
  );
};

/**
 * Why Choose Us Section Component
 *
 * Highlights Brightway Cleaning's competitive advantages with a clean, 
 * minimalist design that emphasizes quality and professionalism.
 */
const WhyChooseUs = () => {
  // Calculate years in business
  const yearsInBusiness = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - siteConfig.business.startYear;
  };

  return (
    <section id="why-choose-us" className="w-full py-24 md:py-32 bg-white">
      <FadeInUp>
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Why Brightway</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            Commercial cleaning excellence built on expertise, reliability, and a commitment to creating healthier workspaces throughout DFW.
          </p>
        </div>
      </FadeInUp>
      
      {/* Key Metrics - Full Width */}
      <div className="w-full bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <MotionCounter targetValue={siteConfig.business.clientsServed} label="Businesses Served" />
            <MotionCounter targetValue={yearsInBusiness()} label="Years Experience" />
            <MotionCounter targetValue={siteConfig.business.servicesCount} label="Service Options" />
            <MotionCounter targetValue={siteConfig.business.satisfaction} label="Satisfaction Rate" />
          </StaggerContainer>
        </div>
      </div>
      
      {/* Core Values - Simple Cards */}
      <div className="container mx-auto px-4 mb-24">
        <FadeInUp className="mb-12">
          <h3 className="text-2xl md:text-3xl font-semibold text-center">Our Approach</h3>
        </FadeInUp>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeInUp delay={0.1}>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 h-full">
              <div className="text-primary mb-6">
                <Shield className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-semibold mb-4">Commercial Cleaning Expertise</h4>
              <p className="text-gray-600">
                Specialized in commercial environments with trained professionals who understand the unique cleaning needs of different business types across DFW.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <div className="bg-primary/5 p-8 md:p-10 rounded-xl shadow-sm border border-primary/10 h-full">
              <div className="text-primary mb-6">
                <Award className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-semibold mb-4">Quality-Focused Results</h4>
              <p className="text-gray-600">
                Every cleaning service is performed with meticulous attention to detail, using premium equipment and eco-friendly products to deliver exceptional results.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100 h-full">
              <div className="text-primary mb-6">
                <CheckCircle className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-semibold mb-4">Reliability You Can Trust</h4>
              <p className="text-gray-600">
                Consistent, dependable service with clear communication and scheduling flexibility that works around your business operations.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
      
      {/* Customer Guarantees - Two Cards */}
      <div className="w-full bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <FadeInUp className="mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-center">Our Guarantees</h3>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  100% Satisfaction Guarantee
                </h4>
                <p className="text-gray-600 mb-6">
                  If you're not completely satisfied with our cleaning service, we'll return to re-clean the area at no additional cost within 24 hours of your service.
                </p>
                <div className="text-sm text-gray-500 italic">
                  "Brightway has consistently delivered excellent cleaning services for our office. Their attention to detail makes a real difference." 
                  <span className="block mt-2 font-medium">— Sarah K., Office Manager</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="text-primary mr-2">
                    <Shield className="h-5 w-5" />
                  </span>
                  Fully Insured and Bonded
                </h4>
                <p className="text-gray-600 mb-6">
                  Complete peace of mind with comprehensive insurance coverage including liability and workers' compensation, protecting your business and property.
                </p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center text-primary font-medium group"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  Request verification
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:ml-3 transition-all" />
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
