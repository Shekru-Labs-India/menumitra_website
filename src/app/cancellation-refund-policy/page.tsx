import type { Metadata } from "next";
import FooterSection from "@/components/organisms/FooterSection";
import { email, website } from "@/config/contact";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | MenuMitra",
  description:
    "MenuMitra's Cancellation & Refund Policy: Learn about our subscription cancellation terms, refund eligibility, and billing policies for our restaurant management services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cancellation & Refund Policy | MenuMitra",
    description:
      "MenuMitra's Cancellation & Refund Policy: Learn about our subscription cancellation terms, refund eligibility, and billing policies for our restaurant management services.",
    url: "{website.base}/cancellation-refund-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cancellation & Refund Policy | MenuMitra",
    description:
      "MenuMitra's Cancellation & Refund Policy: Learn about our subscription cancellation terms, refund eligibility, and billing policies for our restaurant management services.",
  },
  alternates: {
    canonical: "{website.base}/cancellation-refund-policy",
  },
};

export default function CancellationRefundPolicyPage() {
  // Fixed dates for legal compliance
  const effectiveDate = "June 03, 2021";
  const lastUpdatedDate = "June 03, 2021";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cancellation & Refund Policy",
    description:
      "MenuMitra's Cancellation & Refund Policy explaining subscription cancellation terms, refund eligibility, and billing policies for restaurant management software services.",
    url: "{website.base}/cancellation-refund-policy",
    about: {
      "@type": "WebPage",
      name: "MenuMitra Cancellation & Refund Policy",
      description:
        "Cancellation and refund policy for MenuMitra restaurant management software and POS services",
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
        Cancellation & Refund Policy
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

              <section id="fees" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Fees</h2>
                <p className="mb-4">
                  You are required to pay subscription fee as per the MenuMitra Subscription plan subscribed by you ("Subscription Fee"). The Subscription Fee for MenuMitra Subscription as stated in various subscription plans is non-refundable, no refunds are eligible for Food services from our platform except as expressly set forth in these cancellation and refund terms (hereinafter referred to as "Cancellation & Refund Policy"). Taxes may apply on the subscription fee. Your paid MenuMitra Subscription will be activated only upon successful payment of the Subscription Fee made through the MenuMitra Platforms as per the applicable subscription plan chosen by you.
                </p>
              </section>

              <section id="subscription-cancellation" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Subscription Cancellation & Refund</h2>
                <p className="mb-4">
                  You may cancel your paid MenuMitra Subscription any time by visiting Your Account and adjusting your subscription settings on any of the MenuMitra Platforms. If you cancel the MenuMitra Subscription within 15 business days of signing up for such paid MenuMitra Subscription, we will issue a credit note to you and refund your full Subscription Fee, provided that we may charge you (or withhold from your refund) the value of MenuMitra benefits used by you and your account during this 15 business day period by issuing a partial credit note to you. If you cancel the annual MenuMitra Subscription at any other time, we will raise a credit note and refund your Subscription Fee only to the extent of your usage of the subscription plan of our MenuMitra Platform since the payment of the Subscription Fee.
                </p>
                <p className="mb-4">
                  If you cancel the monthly MenuMitra Subscription, the subscription fee will be refunded only if you have not made any usage or taken advantage any of the MenuMitra benefits since payment of your Subscription Fee. It will take 30 days to process a refund to be credited to the customer's bank account.
                </p>
              </section>

              <section id="revisions" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Revisions</h2>
                <p className="mb-4">
                  We may in our discretion change the Terms of Service as well as this Cancellation & Refund Policy, or any aspect of MenuMitra Subscription, without notice to you. If any change to these terms is found invalid, void, or for any reason unenforceable, that change is severable and does not affect the validity and enforceability of any remaining changes or conditions. YOUR CONTINUED SUBSCRIPTION AFTER WE CHANGE THESE TERMS CONSTITUTES YOUR ACCEPTANCE OF THE CHANGES. IF YOU DO NOT AGREE TO ANY CHANGES, YOU MUST CANCEL YOUR SUBSCRIPTION.
                </p>
              </section>

              <section id="termination" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Termination by Us</h2>
                <p className="mb-4">
                  We may terminate your MenuMitra Subscription at our discretion without notice. If we do so, we will issue a credit note to you and give a prorated refund based on the remaining term of your then subscription term, whether annual or monthly. However, we will not give any refund for termination related to conduct that we determine, in our discretion, violates the Terms of Service or any applicable law, involves fraud or misuse of the MenuMitra Subscription, or is harmful to our interests or another user. Our failure to insist upon or enforce your strict compliance with the Terms of Services or this Cancellation & Refund Policy will not constitute a waiver of any of our rights.
                </p>
              </section>

              <section id="limitation" className="mt-10 mb-6 scroll-mt-24">
                <h2 className="text-2xl font-semibold mt-12 mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  IN ADDITION TO OTHER LIMITATIONS AND EXCLUSIONS IN CONDITIONS OF USE AND SALE, IN NO EVENT WILL WE OR OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS OR OTHER REPRESENTATIVES BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, ARISING OUT OF OR RELATED TO MENUMITRA PLATFORMS. OUR TOTAL LIABILITY, WHETHER IN CONTRACT, WARRANTY, TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, WILL NOT EXCEED THE LAST SUBSCRIPTION FEE YOU PAID. THESE EXCLUSIONS AND LIMITATIONS OF LIABILITY WILL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW AND WILL SURVIVE CANCELLATION OR TERMINATION OF YOUR MENUMITRA SUBSCRIPTION.
                </p>
              </section>
    </div>
          </main>
  </div>
</section>

      <FooterSection />
    </>
  );
}
