import { CheckCircle, Shield, ThumbsUp, Award } from 'lucide-react'
import SafeImage from '../ui/safe-image'
import SectionHeader from '../ui/section-header'

const benefits = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Certified Staff',
    description: 'All our cleaning professionals are fully trained and certified for commercial cleaning.'
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: 'Eco-Friendly',
    description: 'We use environmentally friendly products that are effective without harming the planet.'
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: 'Satisfaction Guarantee',
    description: "If you're not completely satisfied, we'll re-clean the area at no additional cost."
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in commercial cleaning services in the region.'
  }
]

const About = () => {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          subtitle="About Us"
          title="Your Trusted Cleaning Partner"
          description="With years of experience in the commercial cleaning industry, we provide reliable, high-quality cleaning services that keep your business looking its best."
        />
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-xl">
              <div className="w-full h-full">
                <SafeImage
                  src="/images/brightway-commercial-cleaning-wiping.jpg"
                  alt="Brightway Professional Cleaning Team"
                  fallbackText="Professional Cleaning Team"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Expert Commercial Cleaning Services</h3>
            <p className="text-gray-600 mb-6">
              At Brightway Cleaning, we understand that a clean environment is essential for productivity and comfort. 
              Our team of dedicated professionals is trained in the latest cleaning techniques and equipped with the best tools and products to deliver exceptional results.
            </p>
            
            <p className="text-gray-600 mb-8">
              We offer a comprehensive range of commercial cleaning services tailored to meet the specific needs of your business, ensuring that your space is always clean, hygienic, and welcoming.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 