import { Metadata } from 'next';
import { Calendar, Users, Award, ChevronRight, Shield, CheckCircle2 } from 'lucide-react';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import SafeImage from '@/app/@components/ui/safe-image';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';
import { ButtonLink } from '@/app/@components/ui/buttons';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'about',
  title: 'About Us | Brightway Cleaning',
  description:
    'Learn more about Brightway Cleaning, our mission, values, and the team behind our exceptional commercial cleaning services in DFW.',
  canonicalPath: '/about-us',
});

export default function AboutUs() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <PageTemplate
      title="About Brightway Cleaning"
      description="Based in Bedford, TX, and serving the entire DFW metroplex, Brightway Cleaning provides reliable, high-quality commercial cleaning services that keep your business looking its best."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Our Story Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg" id="our-story">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 mx-auto">
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
                <SafeImage
                  src="/images/brightway-commercial-cleaning-wiping.jpg"
                  alt="Brightway Professional Cleaning Team"
                  className="object-cover object-center"
                  width={600}
                  height={700}
                  placement="above-fold"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 text-center lg:text-left">
                <p>
                  For over {yearsInBusiness} years, Brightway Cleaning has been providing
                  exceptional cleaning services to businesses throughout the DFW metroplex. What
                  started as a small family-owned operation has grown into one of the region&apos;s most
                  trusted commercial cleaning companies.
                </p>
                <p>
                  We&apos;ve built our reputation on reliability, attention to detail, and a genuine
                  commitment to customer satisfaction. Our team of{' '}
                  {siteConfig.business.employeeCount} dedicated professionals takes pride in
                  transforming spaces and exceeding expectations with every clean.
                </p>
                <p>
                  From daily office maintenance to specialized industrial cleaning, we approach
                  every job with the same level of care and professionalism that has earned us a{' '}
                  {siteConfig.business.satisfaction} client satisfaction rate.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{yearsInBusiness}+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{siteConfig.business.employeeCount}+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Award className="h-8 w-8 text-primary mr-3" />
                  <div>
                    <div className="text-2xl font-bold">{siteConfig.business.satisfaction}</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Mission Statement Banner */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="lg" id="mission">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 p-10 md:p-16 text-white text-center">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl max-w-4xl mx-auto">
              Our mission is to create cleaner, healthier, and more productive work environments
              for businesses throughout the DFW metroplex through professional cleaning services
              that exceed expectations and enhance workplace wellbeing.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Core Values Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="white" spacingY="lg" id="values">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">
                Excellence
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                We strive for excellence in every cleaning task, no matter how small, because we
                believe that details matter and quality is non-negotiable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">
                Integrity
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                We operate with complete transparency, honesty, and accountability in all our
                business relationships and cleaning practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">
                Reliability
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Our clients can count on us to show up on time, every time, and deliver
                consistent, dependable cleaning services they can trust.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Team Section */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="gray-50" spacingY="lg" id="team">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <SafeImage
                  src="/images/team-placeholder.jpg"
                  alt="John Doe"
                  width={160}
                  height={160}
                  className="object-cover h-full w-full"
                  placement="mid-page"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">John Doe</h3>
              <p className="text-primary font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 20 years of experience in commercial cleaning, John founded Brightway
                Cleaning with a vision to provide exceptional service to businesses throughout
                DFW.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <SafeImage
                  src="/images/team-placeholder.jpg"
                  alt="Jane Smith"
                  width={160}
                  height={160}
                  className="object-cover h-full w-full"
                  placement="mid-page"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Jane Smith</h3>
              <p className="text-primary font-medium mb-3">Operations Director</p>
              <p className="text-gray-600">
                Jane ensures our daily operations run smoothly and efficiently. Her attention to
                detail and commitment to excellence are reflected in every aspect of our service
                delivery.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                <SafeImage
                  src="/images/team-placeholder.jpg"
                  alt="Michael Johnson"
                  width={160}
                  height={160}
                  className="object-cover h-full w-full"
                  placement="mid-page"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Michael Johnson</h3>
              <p className="text-primary font-medium mb-3">Client Relations Manager</p>
              <p className="text-gray-600">
                Michael builds and maintains strong relationships with our clients, ensuring their
                needs are met and expectations are exceeded with every service.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection contentWidth="container" maxWidth="full" bgColor="primary-light" spacingY="lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Experience the Brightway Difference?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Contact us today to learn more about our services or to request a free quote for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink 
                href="/contact" 
                variant="primary"
                className="bg-white text-primary hover:bg-white/90"
                size="lg"
                rightIcon={<ChevronRight className="ml-1 h-4 w-4" />}
              >
                Get a Free Quote
              </ButtonLink>
              <ButtonLink 
                href="/services" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                size="lg"
              >
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
