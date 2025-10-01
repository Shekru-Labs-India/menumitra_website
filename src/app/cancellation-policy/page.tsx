import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";
import { email, website } from "@/config/contact";

export const metadata: Metadata = {
  title: "Cancellation Policy | MenuMitra",
  description:
    "MenuMitra's Cancellation Policy: Learn about our subscription cancellation terms, procedures, and policies for our restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cancellation Policy | MenuMitra",
    description:
      "MenuMitra's Cancellation Policy: Learn about our subscription cancellation terms, procedures, and policies for our restaurant management services.",
    url: "{website.base}/cancellation-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation Policy | MenuMitra",
    description:
      "MenuMitra's Cancellation Policy: Learn about our subscription cancellation terms, procedures, and policies for our restaurant management services.",
  },
  alternates: {
    canonical: "{website.base}/cancellation-policy",
  },
};

export default function CancellationPolicyPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "June 03, 2021";
  const lastUpdatedDate = "June 03, 2021";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cancellation Policy",
    description:
      "MenuMitra's Cancellation Policy explaining subscription cancellation terms and procedures for restaurant management software services.",
    url: "{website.base}/cancellation-policy",
    about: {
      "@type": "WebPage",
      name: "MenuMitra Cancellation Policy",
      description:
        "Cancellation policy for MenuMitra restaurant management software and POS services",
    },
    publisher: {
      "@type": "Organization",
      name: "MenuMitra",
      url: "{website.base}",
      contactPoint: {
        "@type": "ContactPoint",
        email: "{email}",
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
        Cancellation Policy
              </h1>
    </div>
            
            {/* Effective Date */}
            <p className="text-sm text-gray-600 mb-6">
              <strong>Effective Date:</strong> {effectiveDate}<br />
              <strong>Last Updated:</strong> {lastUpdatedDate}
            </p>
            
    <div className="singlePage">
              <p className="mb-4">
                <strong>(FOR OUTSIDE INDIA CUSTOMERS)</strong>
              </p>
              <p className="mb-4">
                We, MenuMitra ("We", "Us", "Our", "Company"), is in the business of providing a cloud-based point of sales software application under the brand name "MenuMitra" for restaurants together with optionally integrated services such as mobile or card payments, inventory management, deals and discounts, ordering and delivery apps, table booking apps, suppliers' marketplace, analytics apps, etc. using a programmable API architecture. The Company through such point of sale software application and websites (together referred to as "MenuMitra Platforms") also provides end to end integration of services for restaurant management to various restaurants and food outlets. The Company has created and owns the MenuMitra Platforms and licensed the use of the same by way of various subscription model for a Subscription Fee.
              </p>
              <p className="mb-4">
                The subscription to the MenuMitra POS Platform and other value added services("MenuMitra Subscription") offered by us is subject to our Terms of Services that is agreed by you (or anyone who accesses and uses the MenuMitra Platforms shall be referred to as "You", "Your" or "User" as the context may require) at the time of subscription. You may select a MenuMitra subscription plan of your choice and make payment as per the required payment method(s) available for different MenuMitra subscription plans.
              </p>

              <section id="subscription-cancellation" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Subscription Cancellation</h2>
                <p className="mb-4">
                  You may cancel your paid MenuMitra Subscription any time by visiting Your Account and adjusting your subscription settings on any of the MenuMitra Platforms. The cancellation will take effect at the end of your current billing period, and you will continue to have access to the services until that time.
                </p>
                <p className="mb-4">
                  <strong>Cancellation Process:</strong>
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Log into your MenuMitra account</li>
                  <li>Navigate to Account Settings or Subscription Management</li>
                  <li>Select "Cancel Subscription" option</li>
                  <li>Follow the prompts to confirm cancellation</li>
                  <li>You will receive a confirmation email once cancellation is processed</li>
                </ul>
                <p className="mb-4">
                  <strong>Important Notes:</strong>
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Cancellation must be initiated before your next billing cycle to avoid charges</li>
                  <li>Once cancelled, you will lose access to premium features at the end of your current billing period</li>
                  <li>Data export options may be available upon request before cancellation</li>
                  <li>You can reactivate your subscription at any time by contacting our support team</li>
                </ul>
              </section>

              <section id="termination" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Termination by Us</h2>
                <p className="mb-4">
                  We may terminate your MenuMitra Subscription at our discretion without notice in the following circumstances:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Violation of our Terms of Service</li>
                  <li>Fraudulent or illegal use of our services</li>
                  <li>Non-payment of subscription fees</li>
                  <li>Misuse of the MenuMitra Subscription</li>
                  <li>Conduct harmful to our interests or other users</li>
                </ul>
                <p className="mb-4">
                  If we terminate your subscription for reasons other than violation of terms, we will provide reasonable notice and may offer a prorated refund based on the remaining term of your subscription.
                </p>
              </section>

              <section id="revisions" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Policy Revisions</h2>
                <p className="mb-4">
                  We may in our discretion change this Cancellation Policy, or any aspect of MenuMitra Subscription, without notice to you. If any change to these terms is found invalid, void, or for any reason unenforceable, that change is severable and does not affect the validity and enforceability of any remaining changes or conditions.
                </p>
                <p className="mb-4">
                  <strong>YOUR CONTINUED SUBSCRIPTION AFTER WE CHANGE THESE TERMS CONSTITUTES YOUR ACCEPTANCE OF THE CHANGES. IF YOU DO NOT AGREE TO ANY CHANGES, YOU MUST CANCEL YOUR SUBSCRIPTION.</strong>
                </p>
              </section>

              <section id="contact" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Cancellation Policy or need assistance with cancelling your subscription, please contact us:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                  <li>Email: {email}</li>
                  <li>Phone: +91 93178 18283</li>
                  <li>Through your MenuMitra account dashboard</li>
                </ul>
              </section>
    </div>
          </main>
  </div>
</section>

      <FooterSection />
    </>
  );
}
