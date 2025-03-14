import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';
import { siteConfig } from '@/app/@lib/constants/siteConfig';
import { Grid, Column } from '@/app/@components/ui/layout';
import { StandardPage } from '@/app/@components/ui/page';
import SafeImage from '@/app/@components/ui/safe-image';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'about',
  title: 'About Us | Brightway Cleaning',
  description: 'Learn more about Brightway Cleaning, our mission, values, and the team behind our exceptional commercial cleaning services in DFW.',
  canonicalPath: '/about-us',
});

/**
 * About Us Page
 * 
 * This page uses our StandardPage component for a consistent layout
 * and focuses on the content specific to the About Us page.
 */
export default function AboutUs() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - siteConfig.business.startYear;

  return (
    <StandardPage
      title="About Brightway Cleaning"
      description="Based in Bedford, TX, and serving the entire DFW metroplex, Brightway Cleaning provides reliable, high-quality commercial cleaning services that keep your business looking its best."
      eyebrow="Our Company"
      heroImage={{
        src: "/images/brightway-commercial-cleaning-team.jpg",
        alt: "Brightway Cleaning Team"
      }}
    >
      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto">
        <Grid columns={{ default: 1, lg: 12 }} gap={12} className="mb-16">
          <Column span={{ default: 'full', lg: 5 }} className="mx-auto">
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
              <SafeImage
                src="/images/brightway-commercial-cleaning-wiping.jpg"
                alt="Brightway Professional Cleaning Team"
                className="object-cover object-center"
                containerHeight={true}
              />
            </div>
          </Column>
          
          <Column span={{ default: 'full', lg: 7 }} className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center lg:text-left">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Brightway Cleaning was founded in {siteConfig.business.startYear} with a simple mission: 
              to provide exceptional commercial cleaning services to businesses in the Dallas-Fort Worth area. 
              For over {yearsInBusiness} years, we've been helping local businesses maintain clean, healthy, 
              and professional environments for their employees and customers.
            </p>
            <p className="text-gray-600">
              What began as a small team with a handful of clients has grown into one of the most trusted
              commercial cleaning companies in the metroplex. Our growth has been built on referrals from 
              satisfied clients who appreciate our attention to detail, reliability, and commitment to excellence.
            </p>
          </Column>
        </Grid>

        {/* Additional content from the original page would go here */}
        {/* This is just a simplified example to demonstrate the StandardPage usage */}
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
          <Grid columns={{ default: 1, md: 3 }} gap={8}>
            <Column>
              <div className="bg-primary/5 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold mb-4 text-primary">Reliability</h3>
                <p className="text-gray-600">
                  We show up when we say we will and consistently deliver on our promises.
                </p>
              </div>
            </Column>
            <Column>
              <div className="bg-primary/5 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold mb-4 text-primary">Quality</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in every aspect of our service.
                </p>
              </div>
            </Column>
            <Column>
              <div className="bg-primary/5 p-8 rounded-xl h-full">
                <h3 className="text-xl font-bold mb-4 text-primary">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency and honesty in all our business dealings.
                </p>
              </div>
            </Column>
          </Grid>
        </div>
      </div>
    </StandardPage>
  );
} 