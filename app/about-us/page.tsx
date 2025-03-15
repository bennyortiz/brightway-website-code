import { Metadata } from 'next';
import { Calendar, Users, Award, ChevronRight, Heart, MapPin, Shield, CheckCircle2 } from 'lucide-react';
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

// Define the sections for quick navigation
const sections = [
  { id: 'our-story', title: 'Our Story' },
  { id: 'mission', title: 'Mission' },
  { id: 'values', title: 'Core Values' },
  { id: 'team', title: 'Our Team' },
  { id: 'history', title: 'Company History' },
  { id: 'community', title: 'Community Involvement' },
];

export default function AboutUs() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <PageTemplate
      title="About Brightway Cleaning"
      description="Based in Bedford, TX, and serving the entire DFW metroplex, Brightway Cleaning provides reliable, high-quality commercial cleaning services that keep your business looking its best."
      headerOptions={{ fullWidth: true, centered: true }}
    >
      {/* Quick Navigation */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="md">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
            Quick Navigation
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sections.map(section => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary transition-colors text-sm md:text-base"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Main Content with Image */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="primary-light" spacingY="lg" id="our-story">
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
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium">Based in Bedford, TX • Serving All DFW</span>
            </div>
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

            <div className="flex flex-wrap items-center gap-6 mt-8">
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
      </PageSection>

      {/* Mission Statement Banner */}
      <PageSection contentWidth="full" maxWidth="full" bgColor="primary-light" spacingY="md" id="mission">
        <div className="relative z-10 p-10 md:p-16 text-white max-w-4xl mx-auto text-center">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl">
            Our mission is to create cleaner, healthier, and more productive work environments
            for businesses throughout the DFW metroplex through professional cleaning services
            that exceed expectations and enhance workplace wellbeing.
          </p>
        </div>
      </PageSection>

      {/* Core Values Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg" id="values">
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
      </PageSection>

      {/* Team Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="lg" id="team">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </PageSection>

      {/* Company History Timeline */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg" id="history">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30 md:left-1/2 md:-ml-0.5"></div>
          
          <div className="space-y-12">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex md:w-1/2 md:justify-end md:pr-8 md:text-right order-2 md:order-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                  <p className="text-gray-600">
                    Brightway Cleaning was established in Bedford, TX, with a mission to provide
                    high-quality commercial cleaning services to local businesses.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-8 h-8 transform -translate-x-1/2 bg-primary rounded-full order-1 md:order-2 z-10">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <div className="md:w-1/2 pl-12 md:pl-8 order-3">
                <div className="inline-block bg-primary text-white rounded-lg py-2 px-4 font-bold text-lg">
                  {siteConfig.business.startYear}
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 pr-8 text-right order-3">
                <div className="inline-block bg-primary text-white rounded-lg py-2 px-4 font-bold text-lg">
                  {siteConfig.business.startYear + 5}
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-8 h-8 transform -translate-x-1/2 bg-primary rounded-full order-1 z-10">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <div className="flex md:w-1/2 pl-12 md:pl-8 order-2">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expansion Throughout DFW</h3>
                  <p className="text-gray-600">
                    After five successful years, we expanded our services to cover the entire DFW
                    metroplex, growing our team and client base significantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="flex md:w-1/2 md:justify-end md:pr-8 md:text-right order-2 md:order-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Introduction of Specialized Services</h3>
                  <p className="text-gray-600">
                    We introduced specialized cleaning services for various industries, including
                    healthcare, educational institutions, and industrial facilities.
                  </p>
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-8 h-8 transform -translate-x-1/2 bg-primary rounded-full order-1 md:order-2 z-10">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <div className="md:w-1/2 pl-12 md:pl-8 order-3">
                <div className="inline-block bg-primary text-white rounded-lg py-2 px-4 font-bold text-lg">
                  {siteConfig.business.startYear + 10}
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/2 pr-8 text-right order-3">
                <div className="inline-block bg-primary text-white rounded-lg py-2 px-4 font-bold text-lg">
                  Today
                </div>
              </div>
              <div className="absolute left-0 md:left-1/2 flex items-center justify-center w-8 h-8 transform -translate-x-1/2 bg-primary rounded-full order-1 z-10">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <div className="flex md:w-1/2 pl-12 md:pl-8 order-2">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Leading Commercial Cleaning Provider</h3>
                  <p className="text-gray-600">
                    Today, Brightway Cleaning stands as one of the most trusted commercial cleaning
                    companies in the DFW metroplex, serving hundreds of businesses with a commitment
                    to excellence and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Community Involvement */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="gray-50" spacingY="lg" id="community">
        <div className="text-center mb-8">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-center">Community Involvement</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 text-center">
            As a locally owned business, we&apos;re committed to giving back to the DFW community. We
            regularly participate in local charity events, sponsor youth sports teams, and offer
            special cleaning services to non-profit organizations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Local Charities</h3>
            <p className="text-gray-600">
              We donate a portion of our profits to local charities that support education and
              housing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Youth Programs</h3>
            <p className="text-gray-600">
              We sponsor local youth sports teams and educational programs throughout DFW.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Environmental Initiatives</h3>
            <p className="text-gray-600">
              We participate in local environmental cleanup events and practice eco-friendly
              cleaning.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold mb-2">Non-Profit Support</h3>
            <p className="text-gray-600">
              We offer discounted services to non-profit organizations throughout the metroplex.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="primary-light" spacingY="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the Brightway Difference?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our services or to request a free quote for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink 
              href="/contact" 
              variant="primary" 
              size="lg"
              rightIcon={<ChevronRight className="ml-1 h-4 w-4" />}
            >
              Get a Free Quote
            </ButtonLink>
            <ButtonLink 
              href="/services" 
              variant="outline" 
              size="lg"
            >
              Explore Our Services
            </ButtonLink>
          </div>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
