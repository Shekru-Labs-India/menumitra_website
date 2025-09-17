import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";

export const metadata: Metadata = {
  title: "Cookie Policy | MenuMitra",
  description:
    "MenuMitra's Cookie Policy: Learn how we use cookies and similar technologies to enhance your browsing experience and provide personalized restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookie Policy | MenuMitra",
    description:
      "MenuMitra's Cookie Policy: Learn how we use cookies and similar technologies to enhance your browsing experience and provide personalized restaurant management services.",
    url: "https://menumitra.com/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | MenuMitra",
    description:
      "MenuMitra's Cookie Policy: Learn how we use cookies and similar technologies to enhance your browsing experience and provide personalized restaurant management services.",
  },
  alternates: {
    canonical: "https://menumitra.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "September 25, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cookie Policy",
    description:
      "MenuMitra's Cookie Policy explaining how cookies and similar technologies are used to enhance user experience and provide personalized services.",
    url: "https://menumitra.com/cookie-policy",
    about: {
      "@type": "CookiePolicy",
      name: "MenuMitra Cookie Policy",
      description:
        "Cookie policy for MenuMitra restaurant management software and website services",
    },
    publisher: {
      "@type": "Organization",
      name: "MenuMitra",
      url: "https://menumitra.com",
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@menumitra.com",
        telephone: "+91 93178 18283",
        contactType: "customer service",
      },
    },
    dateModified: lastUpdatedDate,
    inLanguage: "en",
  };

  return (
    <>
      <section className="relative pt-[160px] max-md:pt-150 overflow-hidden">
        <div className="absolute left-0 right-0 -top-[800px] bg-core-gradient bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1000px] md:hidden" />
        <div
          className="container relative !max-w-[800px]"
          data-aos="fade-up"
          data-aos-offset={200}
          data-aos-duration={1000}
          data-aos-once="true"
        >
          <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]" />
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]" />
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]" />
          </div>
          
          <main className="max-w-4xl mx-auto px-6 py-12 leading-relaxed text-gray-700">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="singlePage pb-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
            Cookie Policy
          </h1>
            </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
            <div className="singlePage">
              <p className="mb-4">
                This Cookie Policy explains how MenuMitra ("we", "our", "us") uses cookies and similar technologies when you visit our website at www.menumitra.com (the "Site") or use our restaurant management applications. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>

              {/* Table of Contents */}
              <nav aria-label="Table of Contents" className="mb-8 border-l-4 border-primary-500 pl-4 text-sm space-y-1">
                <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
                <a href="#what-are-cookies" className="block hover:text-primary-600">1. What Are Cookies?</a>
                <a href="#how-we-use" className="block hover:text-primary-600">2. How We Use Cookies</a>
                <a href="#types-of-cookies" className="block hover:text-primary-600">3. Types of Cookies We Use</a>
                <a href="#third-party" className="block hover:text-primary-600">4. Third-Party Cookies</a>
                <a href="#mobile-apps" className="block hover:text-primary-600">5. Mobile Applications</a>
                <a href="#your-choices" className="block hover:text-primary-600">6. Your Choices and Controls</a>
                <a href="#updates" className="block hover:text-primary-600">7. Updates to This Policy</a>
                <a href="#contact" className="block hover:text-primary-600">8. Contact Information</a>
              </nav>

              <section id="what-are-cookies" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. What Are Cookies?</h2>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Cookies</strong> are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</li>
                  <li><strong>Local Storage</strong> is a technology that allows websites to store data locally on your device, similar to cookies but with more storage capacity.</li>
                  <li><strong>Session Storage</strong> is similar to local storage but data is only stored for the duration of your browser session.</li>
                  <li><strong>Web Beacons</strong> are small graphic images that may be included in our website or emails to help us understand how you interact with our content.</li>
                </ul>
              </section>

              <section id="how-we-use" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">2. How We Use Cookies</h2>
                <p className="mb-4">We use cookies and similar technologies for several purposes:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Essential Functionality:</strong> To enable core website features and ensure the site works properly</li>
                  <li><strong>Authentication:</strong> To remember your login status and keep you signed in</li>
                  <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                  <li><strong>Analytics:</strong> To understand how visitors use our website and improve our services</li>
                  <li><strong>Performance:</strong> To optimize website performance and loading times</li>
                  <li><strong>Marketing:</strong> To provide relevant content and advertisements (with your consent)</li>
                </ul>
              </section>

              <section id="types-of-cookies" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">3.1 Strictly Necessary Cookies</h3>
                <p className="mb-3">These cookies are essential for the website to function properly. They cannot be disabled:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Session management cookies</li>
                  <li>Security cookies</li>
                  <li>Load balancing cookies</li>
                  <li>User interface customization cookies</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">3.2 Performance and Analytics Cookies</h3>
                <p className="mb-3">These cookies help us understand how visitors interact with our website:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Google Analytics cookies (anonymized data)</li>
                  <li>Page view tracking</li>
                  <li>User journey analysis</li>
                  <li>Error reporting and debugging</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">3.3 Functional Cookies</h3>
                <p className="mb-3">These cookies enable enhanced functionality and personalization:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Language preferences</li>
                  <li>Theme selection (light/dark mode)</li>
                  <li>Form data retention</li>
                  <li>User interface preferences</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">3.4 Marketing and Advertising Cookies</h3>
                <p className="mb-3">These cookies are used to deliver relevant advertisements and marketing content (with your consent):</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Social media integration cookies</li>
                  <li>Advertising network cookies</li>
                  <li>Retargeting cookies</li>
                  <li>Campaign tracking cookies</li>
                </ul>
              </section>

              <section id="third-party" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Third-Party Cookies</h2>
                <p className="mb-4">We may use third-party services that set their own cookies:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Google Maps:</strong> For location services and map functionality</li>
                  <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing</li>
                  <li><strong>Customer Support:</strong> For live chat and support functionality</li>
                </ul>
                <p className="mb-4">These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for more information.</p>
              </section>

              <section id="mobile-apps" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Mobile Applications</h2>
                <p className="mb-4">Our mobile applications may use similar technologies:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Local Storage:</strong> To store app preferences and offline data</li>
                  <li><strong>Device Identifiers:</strong> For app functionality and analytics</li>
                  <li><strong>Push Notifications:</strong> To send important updates and alerts</li>
                  <li><strong>Crash Reporting:</strong> To improve app stability and performance</li>
                </ul>
                <p className="mb-4">Mobile app data usage is covered in our Privacy Policy and is subject to your device's privacy settings.</p>
              </section>

              <section id="your-choices" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Your Choices and Controls</h2>
                
                <h3 className="text-xl font-semibold mt-8 mb-3">6.1 Browser Settings</h3>
                <p className="mb-3">You can control cookies through your browser settings:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Block all cookies</li>
                  <li>Block third-party cookies only</li>
                  <li>Delete existing cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">6.2 Cookie Consent</h3>
                <p className="mb-3">When you first visit our website, you can:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Accept all cookies</li>
                  <li>Reject non-essential cookies</li>
                  <li>Customize your cookie preferences</li>
                  <li>Change your preferences at any time</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">6.3 Opt-Out Options</h3>
                <p className="mb-3">You can opt out of specific tracking:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary-600 hover:text-primary-800" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Advertising:</strong> <a href="http://www.aboutads.info/choices/" className="text-primary-600 hover:text-primary-800" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance Opt-out</a></li>
                  <li><strong>Mobile Apps:</strong> Through your device's privacy settings</li>
                </ul>

                <p className="mb-4"><strong>Note:</strong> Disabling cookies may affect the functionality of our website and your user experience.</p>
              </section>

              <section id="updates" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Updates to This Policy</h2>
                <p className="mb-4">We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by:</p>
                <ul className="mb-4 list-disc list-inside space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date at the top of this policy</li>
                  <li>Sending you an email notification (if you have provided your email address)</li>
                  <li>Displaying a notice on our website</li>
                </ul>
                <p className="mb-4">We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.</p>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">8. Contact Information</h2>
                <p className="mb-3">If you have any questions about this Cookie Policy or our use of cookies, please contact us:</p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a><br />
                  <strong>Website:</strong> www.menumitra.com
                </p>
                <p className="mb-4"><strong>Thank you</strong> for trusting MenuMitra. We are committed to transparency and giving you control over your data and privacy preferences.</p>
              </section>
            </div>
          </main>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
