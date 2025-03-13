import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { generatePageMetadata } from '../utils/metadata';
import { serviceItems } from '../components/sections/Services/serviceData';
import { BriefcaseIcon, CheckCircle2, ClockIcon, MessageSquareIcon, ShieldIcon, SparklesIcon } from 'lucide-react';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Our Services | Brightway Cleaning',
  description: 'Explore Brightway Cleaning\'s comprehensive commercial cleaning services for offices, retail spaces, medical facilities, and more.',
  slug: 'services',
});

/**
 * Map of service icons by title
 */
const serviceIcons: Record<string, React.ReactNode> = {
  'Office Cleaning': <BriefcaseIcon className="w-10 h-10 text-primary" />,
  'Commercial Spaces': <ShieldIcon className="w-10 h-10 text-primary" />,
  'Industrial Cleaning': <SparklesIcon className="w-10 h-10 text-primary" />,
  'Sanitization Services': <ShieldIcon className="w-10 h-10 text-primary" />,
  'Waste Management': <SparklesIcon className="w-10 h-10 text-primary" />,
  'Scheduled Maintenance': <ClockIcon className="w-10 h-10 text-primary" />,
};

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Comprehensive commercial cleaning solutions tailored to meet the unique needs of your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition duration-300"
              >
                Get a Free Quote
              </Link>
              <a
                href="#service-list"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition duration-300"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="service-list" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Service Offerings</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              We provide a wide range of professional cleaning services to meet the unique needs of businesses across various industries.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {serviceItems.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 border border-gray-100 hover:border-primary/20 flex flex-col h-full group"
                >
                  <div className="mb-5 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors duration-300">
                    {serviceIcons[service.title] || <SparklesIcon className="w-10 h-10 text-primary" />}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Cleaning Process</h2>
            <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              We follow a systematic approach to deliver consistent, high-quality cleaning services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Initial Assessment",
                  description: "We conduct a thorough assessment of your facility to understand your specific cleaning needs.",
                  icon: <span className="text-white text-2xl font-bold">1</span>,
                },
                {
                  title: "Customized Plan",
                  description: "Based on the assessment, we develop a customized cleaning plan tailored to your business.",
                  icon: <span className="text-white text-2xl font-bold">2</span>,
                },
                {
                  title: "Implementation",
                  description: "Our trained professionals execute the cleaning plan with precision and care.",
                  icon: <span className="text-white text-2xl font-bold">3</span>,
                },
                {
                  title: "Quality Assurance",
                  description: "We regularly assess our work to ensure it meets our high standards and your expectations.",
                  icon: <span className="text-white text-2xl font-bold">4</span>,
                }
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    {step.icon}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-primary/30" />
                  )}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="hidden lg:block lg:col-span-2 relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/cleaning-professional.jpg')" }}></div>
              </div>
              <div className="p-8 md:p-12 lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Space?</h2>
                <p className="text-white/90 mb-8 text-lg">
                  Contact us today to discuss your cleaning needs and receive a customized quote for your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-gray-100 transition duration-300">
                    Get a Free Quote
                  </Link>
                  <a href="tel:+12146362323" className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white/10 transition duration-300">
                    <MessageSquareIcon className="mr-2 h-5 w-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 