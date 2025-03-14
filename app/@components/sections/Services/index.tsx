'use client';

import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ServiceCard from './ServiceCard';
import { serviceItems } from '@/app/@lib/data/services';
import { Building2, Briefcase, Building, Droplets, Trash2, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Service icons mapping
const serviceIcons = [
  <Building2 key="building2" className="h-12 w-12 text-primary" />,
  <Briefcase key="briefcase" className="h-12 w-12 text-primary" />,
  <Building key="building" className="h-12 w-12 text-primary" />,
  <Droplets key="droplets" className="h-12 w-12 text-primary" />,
  <Trash2 key="trash2" className="h-12 w-12 text-primary" />,
  <Clock key="clock" className="h-12 w-12 text-primary" />,
];

// Fallback service data in case the import fails
const fallbackServiceItems = [
  {
    title: 'Office Cleaning',
    description: 'Comprehensive cleaning solutions for offices of all sizes.',
    features: ['Daily sanitization', 'Carpet cleaning', 'Restroom maintenance'],
  },
];

/**
 * Services Section Component
 *
 * Displays a grid of service offerings with animation effects.
 * Uses Swiper for a carousel on mobile views.
 */
const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Use service data if available, otherwise use fallback
  const services = serviceItems || fallbackServiceItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="w-full py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm font-bold tracking-wider text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full mb-4">Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Cleaning Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional commercial cleaning solutions tailored to your business needs,
            maintaining pristine environments that enhance productivity and well-being.
          </p>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} icon={serviceIcons[index % serviceIcons.length]} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden -mx-4 px-4">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} icon={serviceIcons[index % serviceIcons.length]} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link
              href="/services"
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary/20 bg-white px-8 text-base font-medium text-primary shadow-sm transition-colors hover:bg-primary/5"
            >
              View All Services
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-white shadow transition-colors hover:bg-primary/90 group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
