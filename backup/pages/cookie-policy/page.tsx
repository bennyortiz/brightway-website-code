import { Metadata } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { generatePageMetadata } from '../utils/metadata';

/**
 * Page Metadata
 */
export const metadata: Metadata = generatePageMetadata({
  pageType: 'custom',
  title: 'Cookie Policy | Brightway Cleaning',
  description: 'Learn how Brightway Cleaning uses cookies and similar technologies on our website.',
  slug: 'cookie-policy',
});

export default function CookiePolicy() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the website owners. 
              Cookies help provide a better browsing experience by remembering your preferences and enabling certain functionality.
            </p>
            
            <h2>How We Use Cookies</h2>
            <p>Brightway Cleaning uses cookies for several purposes, including:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be turned off in our systems. They are usually set in response to actions you take such as setting your privacy preferences, logging in, or filling in forms.</li>
              <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</li>
              <li><strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
            </ul>
            
            <h2>Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
              of the website and deliver advertisements on and through the website. These may include:
            </p>
            <ul>
              <li>Google Analytics (performance)</li>
              <li>Google Ads (targeting)</li>
              <li>Facebook Pixel (targeting)</li>
              <li>HubSpot (functional)</li>
            </ul>
            
            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow some control of most cookies through the browser settings. To find out more about 
              cookies, including how to see what cookies have been set and how to manage and delete them, visit 
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer"> www.allaboutcookies.org</a>.
            </p>
            <p>To opt out of being tracked by Google Analytics across all websites, visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">http://tools.google.com/dlpage/gaoptout</a>.</p>
            
            <h2>Cookie Consent</h2>
            <p>
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline 
              non-essential cookies. You can change your preferences at any time by clicking on the "Cookie Settings" link in 
              the footer of our website.
            </p>
            
            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
              Any changes will become effective when we post the revised policy on this page. We encourage you to periodically review 
              this page for the latest information on our cookie practices.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:<br />
              Email: info@brightwaycleaning.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 