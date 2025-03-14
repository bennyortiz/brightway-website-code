import { Metadata } from 'next';
import Image from 'next/image';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Grid, Column, Section, Container } from '@/app/@components/ui/layout';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'about',
  title: 'About Us | Brightway Cleaning',
  description: 'Learn more about Brightway Cleaning, our mission, values, and the team behind our exceptional commercial cleaning services in DFW.',
  canonicalPath: '/about-us',
});

export default function AboutUs() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <MainLayout>
      <Container className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Brightway Cleaning</h1>
          
          {/* Company Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-xl text-center text-gray-600 mb-8">
              Based in Bedford, TX, and serving the entire DFW metroplex, Brightway Cleaning provides reliable, 
              high-quality commercial cleaning services that keep your business looking its best.
            </p>
            
            {/* Main Content with Image */}
            <Grid columns={{ default: 1, lg: 12 }} gap={12} className="mb-16">
              <Column span={{ default: 'full', lg: 5 }} className="mx-auto">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/brightway-commercial-cleaning-wiping.jpg"
                    alt="Brightway Professional Cleaning Team"
                    className="object-cover object-center"
                    width={600}
                    height={700}
                  />
                </div>
              </Column>
              
              <Column span={{ default: 'full', lg: 7 }} className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Our Story</h2>
                <div className="prose prose-lg max-w-none text-gray-600 text-center lg:text-left">
                  <p>
                    For over {yearsInBusiness} years, Brightway Cleaning has been providing exceptional
                    cleaning services to businesses throughout the DFW metroplex. What started as a small
                    family-owned operation has grown into one of the region's most trusted commercial
                    cleaning companies.
                  </p>
                  <p>
                    We've built our reputation on reliability, attention to detail, and a genuine
                    commitment to customer satisfaction. Our team of {siteConfig.business.employeeCount}{' '}
                    dedicated professionals takes pride in transforming spaces and exceeding expectations
                    with every clean.
                  </p>
                  <p>
                    From daily office maintenance to specialized industrial cleaning, we approach every
                    job with the same level of care and professionalism that has earned us a{' '}
                    {siteConfig.business.satisfaction} client satisfaction rate.
                  </p>
                </div>
              </Column>
            </Grid>
            
            {/* Mission Statement Banner */}
            <div className="relative w-full bg-primary rounded-xl overflow-hidden mb-16">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-white to-transparent"></div>
              <div className="relative z-10 p-10 md:p-16 text-white max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-xl">
                  Our mission is to create cleaner, healthier, and more productive work environments
                  for businesses throughout the DFW metroplex through professional cleaning services
                  that exceed expectations and enhance workplace wellbeing.
                </p>
              </div>
            </div>
            
            {/* Core Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <Grid columns={{ default: 1, md: 3 }} gap={8}>
                <Column>
                  <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">Excellence</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      We strive for excellence in every cleaning task, no matter how small, because we
                      believe that details matter and quality is non-negotiable.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">Integrity</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      We operate with complete transparency, honesty, and accountability in all our
                      business relationships and cleaning practices.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">Reliability</h3>
                    <p className="text-gray-600 text-center md:text-left">
                      We are committed to consistent, dependable service that our clients can count on,
                      day in and day out, without compromise.
                    </p>
                  </div>
                </Column>
              </Grid>
            </div>
            
            {/* Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Leadership Team</h2>
              <Grid columns={{ default: 1, md: 2, lg: 4 }} gap={8}>
                <Column>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-md">
                      <Image
                        src="/images/team/team-member-1.jpg"
                        alt="John Smith - CEO"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">John Smith</h3>
                    <p className="text-primary font-medium">CEO & Founder</p>
                    <p className="text-gray-600 text-center mt-2">
                      Leading our company vision since {siteConfig.business.startYear}.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-md">
                      <Image
                        src="/images/team/team-member-2.jpg"
                        alt="Sarah Johnson - Operations Director"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                    <p className="text-primary font-medium">Operations Director</p>
                    <p className="text-gray-600 text-center mt-2">
                      Ensuring seamless service delivery to all clients.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-md">
                      <Image
                        src="/images/team/team-member-3.jpg"
                        alt="Michael Rodriguez - Quality Control Manager"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
                    <p className="text-primary font-medium">Quality Control Manager</p>
                    <p className="text-gray-600 text-center mt-2">
                      Maintaining our high standards across all services.
                    </p>
                  </div>
                </Column>
                <Column>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 rounded-full overflow-hidden mb-4 shadow-md">
                      <Image
                        src="/images/team/team-member-4.jpg"
                        alt="Jennifer Lee - Client Relations"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">Jennifer Lee</h3>
                    <p className="text-primary font-medium">Client Relations</p>
                    <p className="text-gray-600 text-center mt-2">
                      Building strong relationships with our valued clients.
                    </p>
                  </div>
                </Column>
              </Grid>
            </div>
            
            {/* Why Choose Us Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Brightway Cleaning?</h2>
              <Grid columns={{ default: 1, md: 2 }} gap={10}>
                <Column>
                  <div className="bg-white p-8 rounded-xl shadow-md h-full">
                    <h3 className="text-xl font-semibold mb-4">We're Committed to Quality</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Rigorous training programs for all cleaning technicians
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Regular quality inspections and performance reviews
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Continuous improvement based on client feedback
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        State-of-the-art equipment and premium cleaning products
                      </li>
                    </ul>
                  </div>
                </Column>
                <Column>
                  <div className="bg-white p-8 rounded-xl shadow-md h-full">
                    <h3 className="text-xl font-semibold mb-4">We're Client-Focused</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Customized cleaning plans tailored to your specific needs
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Flexible scheduling to accommodate your business hours
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Responsive customer service and 24/7 support
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Satisfaction guarantee on all our services
                      </li>
                    </ul>
                  </div>
                </Column>
              </Grid>
            </div>
            
            {/* Certifications and Achievements */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Certifications & Achievements</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
                  <Image
                    src="/images/certifications/green-certified.svg"
                    alt="Green Cleaning Certified"
                    width={120}
                    height={120}
                    className="mx-auto mb-3"
                  />
                  <p className="font-medium">Green Cleaning Certified</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
                  <Image
                    src="/images/certifications/issa-member.svg"
                    alt="ISSA Member"
                    width={120}
                    height={120}
                    className="mx-auto mb-3"
                  />
                  <p className="font-medium">ISSA Member</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
                  <Image
                    src="/images/certifications/5-star-rated.svg"
                    alt="5-Star Rated Service"
                    width={120}
                    height={120}
                    className="mx-auto mb-3"
                  />
                  <p className="font-medium">5-Star Rated Service</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md w-full text-center">
                  <Image
                    src="/images/certifications/bbb-a-rated.svg"
                    alt="BBB A+ Rated"
                    width={120}
                    height={120}
                    className="mx-auto mb-3"
                  />
                  <p className="font-medium">BBB A+ Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
} 