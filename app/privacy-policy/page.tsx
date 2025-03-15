import { Metadata } from 'next';
import MainLayout from '@/app/@components/ui/layout/MainLayout';
import { generatePageMetadata } from '@/app/@lib/utils/metadata';

/**
 * Page Metadata
 *
 * Privacy Policy pages should be indexed by search engines for transparency
 * and to comply with various privacy regulations that require policies to be
 * easily accessible.
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Privacy Policy | Brightway Cleaning',
  description:
    'Learn about how Brightway Cleaning collects, uses, and protects your personal information.',
  canonicalPath: '/privacy-policy',
  seo: {
    maxSnippet: 0, // Prevent showing snippets of legal text in search results
  },
});

export default function PrivacyPolicy() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Brightway Cleaning&apos;s (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) Privacy Policy. We are committed to protecting your personal information.
            </p>

            <p>
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>

            <h2>Introduction</h2>
            <p>
              Brightway Cleaning (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to
              protecting your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website or use our
              services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out forms on our website</li>
              <li>Request a quote for our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p>The types of information we may collect include:</p>
            <ul>
              <li>Name, email address, phone number, and mailing address</li>
              <li>Business information, if applicable</li>
              <li>Service preferences and requirements</li>
              <li>Payment information (processed securely through our payment processors)</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul>
              <li>Providing and improving our services</li>
              <li>Processing transactions and sending service confirmations</li>
              <li>Communicating with you about services, offers, and promotions</li>
              <li>Responding to your inquiries and service requests</li>
              <li>Analyzing website usage to improve user experience</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share
              information with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our business</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Business partners with your consent</li>
            </ul>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience,
              analyze site traffic, and personalize content. You can set your browser to refuse
              cookies, but this may limit functionality of our website.
            </p>

            <h2>Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have rights regarding your personal information,
              including:
            </p>
            <ul>
              <li>Accessing your personal information</li>
              <li>Correcting inaccurate information</li>
              <li>Deleting your information</li>
              <li>Restricting or objecting to processing</li>
              <li>Data portability</li>
            </ul>
            <p>To exercise these rights, please contact us using the information provided below.</p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from
              unauthorized access, alteration, disclosure, or destruction. However, no data
              transmission over the internet is completely secure.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The date at the top of this page
              indicates when it was last revised. We encourage you to review this policy
              periodically.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our privacy practices,
              please contact us at:
              <br />
              Email: info@brightwaycleaning.com
              <br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
