import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";

export const metadata: Metadata = {
  title: "Privacy Policy | MenuMitra",
  description:
    "MenuMitra's Privacy Policy: Learn how we protect your restaurant data, handle personal information, and maintain security for our POS and management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | MenuMitra",
    description:
      "MenuMitra's Privacy Policy: Learn how we protect your restaurant data, handle personal information, and maintain security for our POS and management services.",
    url: "https://menumitra.com/privacy-and-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MenuMitra",
    description:
      "MenuMitra's Privacy Policy: Learn how we protect your restaurant data, handle personal information, and maintain security for our POS and management services.",
  },
  alternates: {
    canonical: "https://menumitra.com/privacy-and-policy",
  },
};

export default function PrivacyPolicyPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "January 15, 2025";
  const lastUpdatedDate = "September 25, 2025";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description:
      "MenuMitra's Privacy Policy explaining data collection, usage, and protection practices for restaurant management software services.",
    url: "https://menumitra.com/privacy-and-policy",
    about: {
      "@type": "PrivacyPolicy",
      name: "MenuMitra Privacy Policy",
      description:
        "Privacy policy for MenuMitra restaurant management software and POS services",
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
          
          <main className="prose prose-gray max-w-4xl mx-auto px-6 py-12 leading-relaxed">
            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            
            <div className="singlePage pb-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-center">
        Privacy Policy
              </h1>
    </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
    <div className="singlePage">
              <p className="mb-4">
                MenuMitra ("we", "our", "us") provides restaurant management software and services (POS, staff apps, customer apps, analytics, integrations) to restaurants, cafes, cloud kitchens and food businesses. Protecting your privacy and keeping your data secure is a core priority. This Privacy Policy explains what information we collect, how we use it, with whom we share it, and the choices you have.
              </p>
              <p className="mb-6">
                By using MenuMitra services or visiting menumitra.com you agree to the practices described in this Policy.
              </p>

              {/* Table of Contents */}
              <nav aria-label="Table of Contents" className="mb-8 border-l-4 border-primary-500 pl-4 text-sm space-y-1">
                <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
                <a href="#definitions" className="block hover:text-primary-600">1. Key Definitions</a>
                <a href="#info" className="block hover:text-primary-600">2. Information We Collect</a>
                <a href="#usage" className="block hover:text-primary-600">3. How We Use Your Information</a>
                <a href="#legal" className="block hover:text-primary-600">4. Legal Bases for Processing</a>
                <a href="#sharing" className="block hover:text-primary-600">5. Data Sharing & Third Parties</a>
                <a href="#security" className="block hover:text-primary-600">6. Data Security</a>
                <a href="#retention" className="block hover:text-primary-600">7. Data Retention</a>
                <a href="#transfers" className="block hover:text-primary-600">8. International Transfers</a>
                <a href="#rights" className="block hover:text-primary-600">9. Your Rights and Choices</a>
                <a href="#children" className="block hover:text-primary-600">10. Children's Privacy</a>
                <a href="#cookies" className="block hover:text-primary-600">11. Cookies & Similar Technologies</a>
                <a href="#links" className="block hover:text-primary-600">12. Links to Other Websites</a>
                <a href="#changes" className="block hover:text-primary-600">13. Changes to This Policy</a>
                <a href="#contact" className="block hover:text-primary-600">14. Contact & Data Protection Officer</a>
                <a href="#appstores" className="block hover:text-primary-600">15. Additional Information for App Stores</a>
                <a href="#summary" className="block hover:text-primary-600">16. Minimal Disclosure Summary</a>
              </nav>

              <section id="definitions" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">1. Key Definitions</h2>
                <ul className="mb-4">
                  <li><strong>Personal Data / Personal Information:</strong> Any information that can identify an individual or be linked to an identifiable person (e.g., name, email, phone).</li>
                  <li><strong>Business Data:</strong> Restaurant-specific operational data (e.g., menu items, pricing, inventory, orders).</li>
                  <li><strong>User / Account Holder:</strong> Any person or business that registers for or uses MenuMitra services.</li>
                </ul>
              </section>

              <section id="info" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mt-8 mb-3">2.1 Information You Provide</h3>
                <ul className="mb-4">
                  <li><strong>Account & Contact:</strong> Name, business name, email address, phone number, billing address.</li>
                  <li><strong>Payments & Billing:</strong> Payment instrument details processed via third-party payment gateways (we do not store full card numbers).</li>
                  <li><strong>Business Data:</strong> Menu items, pricing, inventory, staff records, order history, receipts.</li>
                  <li><strong>Support & Communications:</strong> Messages you send to our support or sales teams.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">2.2 Automatically Collected Information</h3>
                <ul className="mb-4">
                  <li><strong>Usage Data:</strong> App and website logs, features used, timestamps, crash reports, performance metrics.</li>
                  <li><strong>Device & Network Data:</strong> Device identifiers, operating system, app version, IP address, anonymized location for BLE functionality.</li>
                  <li><strong>Cookies & Similar Technologies:</strong> See Section 11.</li>
                </ul>

                <h3 className="text-xl font-semibold mt-8 mb-3">2.3 Permissions Requested by Our Mobile Apps</h3>
                <p className="mb-3">We request only the permissions necessary for core functionality:</p>
                <ul className="mb-4">
                  <li><strong>Bluetooth / BLE</strong> and <strong>Location (Android)</strong> — to enable staff device sync and BLE communication.</li>
                  <li><strong>Notifications</strong> — to deliver order alerts, updates, and critical system messages.</li>
                  <li><strong>Storage / Media</strong> — to cache assets, save receipts and support offline operation.</li>
                  <li><strong>Background Services / Boot Completed</strong> — to resume POS/background tasks after device restarts.</li>
                </ul>
              </section>

              <section id="usage" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">3. How We Use Your Information</h2>
                <p className="mb-3">We use data to:</p>
                <ul className="mb-4">
                  <li>Provide, operate and maintain MenuMitra services and apps.</li>
                  <li>Process orders, billing, and payments.</li>
                  <li>Enable real-time staff communication (BLE / notifications).</li>
                  <li>Improve product functionality, perform analytics and debug issues.</li>
                  <li>Provide customer support and respond to requests.</li>
                  <li>Send service-related notices and (with consent) marketing communications.</li>
                  <li>Comply with legal obligations and protect our rights.</li>
                </ul>
                <p className="mb-4"><strong>We do not sell personal data to third parties.</strong></p>
              </section>

              <section id="legal" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">4. Legal Bases for Processing (where applicable)</h2>
                <p className="mb-3">For users in jurisdictions with data protection laws (e.g., GDPR), our legal bases include:</p>
                <ul className="mb-4">
                  <li><strong>Contractual necessity</strong> — to provide services you requested.</li>
                  <li><strong>Consent</strong> — where you opt in to marketing or optional features.</li>
                  <li><strong>Legal compliance</strong> — to comply with legal obligations.</li>
                  <li><strong>Legitimate interests</strong> — for fraud prevention, analytics, and service improvement (balanced against user rights).</li>
                </ul>
              </section>

              <section id="sharing" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">5. Data Sharing & Third Parties</h2>
                <p className="mb-3">We share data only for legitimate purposes:</p>
                <ul className="mb-4">
                  <li><strong>Service Providers:</strong> Cloud hosting, payment processors, notification services (e.g., Expo Notifications), analytics providers, and other vendors who process data on our behalf under contract.</li>
                  <li><strong>Business Partners:</strong> Integrations or promotions only with your explicit consent.</li>
                  <li><strong>Legal Obligations:</strong> To respond to lawful requests, investigations, or to protect safety, property or rights.</li>
                </ul>
                <p className="mb-4">All third parties are contractually required to protect data and use it only for specified purposes.</p>
              </section>

              <section id="security" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">6. Data Security</h2>
                <p className="mb-3">We apply industry best practices to protect your data:</p>
                <ul className="mb-4">
                  <li><strong>Encryption:</strong> TLS 1.2+ for data in transit; AES-256 or equivalent for data at rest.</li>
                  <li><strong>Access Control:</strong> Role-based access (Owner, Manager, Waiter, Captain, Partner) and least privilege principles.</li>
                  <li><strong>Authentication:</strong> Secure password storage and support for multi-factor authentication on sensitive operations.</li>
                  <li><strong>Local Encryption:</strong> Encrypted local storage for offline mode and secure sync when connectivity restores.</li>
                  <li><strong>Operational Security:</strong> Regular backups, vulnerability testing, logging and monitoring, and periodic security audits.</li>
                </ul>
                <p className="mb-4">While we take strong measures, no system is perfectly secure. If we learn of a breach that creates a risk to users, we will notify affected users and regulators as required by law.</p>
              </section>

              <section id="retention" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">7. Data Retention</h2>
                <ul className="mb-4">
                  <li>We keep data only as long as necessary to provide services.</li>
                  <li><strong>Account & operational records</strong> necessary for business, taxation, or legal reasons may be retained up to <strong>7 years</strong> after account closure.</li>
                  <li><strong>Non-essential data</strong> (e.g., anonymized usage logs) will be deleted or anonymized within <strong>90 days</strong> of account termination unless otherwise required.</li>
                </ul>
              </section>

              <section id="transfers" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">8. International Transfers</h2>
                <p className="mb-4">MenuMitra may store and process data in India and in other countries where our service providers operate. When transferring data internationally, we use appropriate safeguards (e.g., hosting in regions with adequate protections, Standard Contractual Clauses, or equivalent measures) to protect your information.</p>
              </section>

              <section id="rights" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">9. Your Rights and Choices</h2>
                <p className="mb-3">Subject to local law, you may have rights including:</p>
                <ul className="mb-4">
                  <li><strong>Access:</strong> Request a copy of your personal data.</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate data.</li>
                  <li><strong>Deletion:</strong> Request deletion of personal data (with exceptions for legal compliance).</li>
                  <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
                  <li><strong>Restriction / Objection:</strong> Restrict processing or object to certain uses (e.g., direct marketing).</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw any consent you gave (this will not affect processing already completed).</li>
                </ul>
                <p className="mb-4">To exercise rights, contact us at <strong><a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a></strong>. We may need to verify your identity before responding.</p>
              </section>

              <section id="children" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">10. Children's Privacy</h2>
                <p className="mb-4">Our services are intended for businesses and adults. We do not knowingly collect personal data from children under <strong>18</strong>. If you believe we have collected such data, please contact us. We will delete it promptly when identified.</p>
              </section>

              <section id="cookies" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">11. Cookies & Similar Technologies</h2>
                <p className="mb-3">We use cookies and similar technologies to:</p>
                <ul className="mb-4">
                  <li>Remember preferences and login sessions.</li>
                  <li>Analyze usage and performance.</li>
                  <li>Enable some features and provide better UX.</li>
                </ul>
                <p className="mb-4">You can manage cookie preferences through your browser settings or in-app settings where provided. Blocking cookies may affect functionality.</p>
              </section>

              <section id="links" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">12. Links to Other Websites</h2>
                <p className="mb-4">Our website or apps may contain links to third-party sites. We are not responsible for their privacy practices. Review their policies before sharing personal information.</p>
              </section>

              <section id="changes" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">13. Changes to This Policy</h2>
                <p className="mb-4">We may update this Privacy Policy to reflect changes in practices, legal requirements, or product updates. For material changes we will provide notice (via email or in-app) and update the <strong>Last Updated</strong> date on this page.</p>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">14. Contact & Data Protection Officer</h2>
                <p className="mb-3">For questions, requests or complaints, contact:</p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a><br />
                  <strong>Phone:</strong> <a href="tel:+919317818283" className="text-primary-600 hover:text-primary-800">+91 93178 18283</a>
                </p>
                <p className="mb-4">If you remain unsatisfied after contacting us, you may have the right to lodge a complaint with a supervisory authority in your jurisdiction.</p>
              </section>

              <section id="appstores" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">15. Additional Information for App Stores</h2>
                <ul className="mb-4">
                  <li>This Privacy Policy covers data processed by our mobile applications (Android/iOS).</li>
                  <li>App permissions used include BLE/Bluetooth, Location (Android), Notifications, Storage, and background services — only to support core POS and staff coordination features.</li>
                  <li>We declare and maintain a Data Safety section in app stores that reflects the data types and processing described here.</li>
                </ul>
              </section>

              <section id="summary" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">16. Minimal Disclosure Summary (Quick Read)</h2>
                <ul className="mb-4">
                  <li>We collect <strong>account, payment, business operations, usage, and device data</strong>.</li>
                  <li>We <strong>do not sell</strong> your personal data.</li>
                  <li>Data is <strong>encrypted</strong>, access is <strong>role-based</strong>, and offline storage is <strong>encrypted</strong>.</li>
                  <li>Contact <strong><a href="mailto:info@menumitra.com" className="text-primary-600 hover:text-primary-800">info@menumitra.com</a></strong> to exercise data rights.</li>
      </ul>
              </section>

              <p className="mb-4"><strong>Thank you</strong> for trusting MenuMitra with your restaurant operations. We build our product so your business runs smoothly — and your data stays secure.</p>
    </div>
          </main>
  </div>
</section>

      <FooterSection />
    </>
  );
}
