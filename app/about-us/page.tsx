import { Metadata } from 'next';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import SafeImage from '@/app/@components/ui/safe-image';
import { PageTemplate, PageSection } from '@/app/@lib/page-utils';

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
      headerOptions={{ fullWidth: true }}
    >
      {/* Main Content with Image */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
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
          </div>
        </div>
      </PageSection>

      {/* Mission Statement Banner */}
      <PageSection contentWidth="full" bgColor="primary-light" spacingY="md">
        <div className="relative z-10 p-10 md:p-16 text-white max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl">
            Our mission is to create cleaner, healthier, and more productive work environments
            for businesses throughout the DFW metroplex through professional cleaning services
            that exceed expectations and enhance workplace wellbeing.
          </p>
        </div>
      </PageSection>

      {/* Core Values Section */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">
              Excellence
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              We strive for excellence in every cleaning task, no matter how small, because we
              believe that details matter and quality is non-negotiable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-primary text-center md:text-left">
              Integrity
            </h3>
            <p className="text-gray-600 text-center md:text-left">
              We operate with complete transparency, honesty, and accountability in all our
              business relationships and cleaning practices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
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
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
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
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="space-y-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="bg-primary text-white rounded-lg p-4 md:mr-4 inline-block">
                <span className="text-xl font-bold">{siteConfig.business.startYear}</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
              <p className="text-gray-600">
                Brightway Cleaning was established in Bedford, TX, with a mission to provide
                high-quality commercial cleaning services to local businesses.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="bg-primary text-white rounded-lg p-4 md:mr-4 inline-block">
                <span className="text-xl font-bold">{siteConfig.business.startYear + 5}</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">Expansion Throughout DFW</h3>
              <p className="text-gray-600">
                After five successful years, we expanded our services to cover the entire DFW
                metroplex, growing our team and client base significantly.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="bg-primary text-white rounded-lg p-4 md:mr-4 inline-block">
                <span className="text-xl font-bold">{siteConfig.business.startYear + 10}</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">
                Introduction of Specialized Services
              </h3>
              <p className="text-gray-600">
                We introduced specialized cleaning services for various industries, including
                healthcare, educational institutions, and industrial facilities.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <div className="bg-primary text-white rounded-lg p-4 md:mr-4 inline-block">
                <span className="text-xl font-bold">Today</span>
              </div>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold mb-2">
                Leading Commercial Cleaning Provider
              </h3>
              <p className="text-gray-600">
                Today, Brightway Cleaning stands as one of the most trusted commercial cleaning
                companies in the DFW metroplex, serving hundreds of businesses with a commitment
                to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Community Involvement */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Community Involvement</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 text-center">
          As a locally owned business, we&apos;re committed to giving back to the DFW community. We
          regularly participate in local charity events, sponsor youth sports teams, and offer
          special cleaning services to non-profit organizations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">Local Charities</h3>
            <p className="text-gray-600">
              We donate a portion of our profits to local charities that support education and
              housing.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">Youth Programs</h3>
            <p className="text-gray-600">
              We sponsor local youth sports teams and educational programs throughout DFW.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">Environmental Initiatives</h3>
            <p className="text-gray-600">
              We participate in local environmental cleanup events and practice eco-friendly
              cleaning.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-2">Non-Profit Support</h3>
            <p className="text-gray-600">
              We offer discounted services to non-profit organizations throughout the metroplex.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Call to Action */}
      <PageSection contentWidth="container" maxWidth="xl" bgColor="white" spacingY="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience the Brightway Difference?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our services or to request a free quote for your
            business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 font-medium bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </PageSection>
    </PageTemplate>
  );
}
