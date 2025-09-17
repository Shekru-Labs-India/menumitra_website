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
  // Set last updated to current date
  const lastUpdatedDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
      <section className="relative pb-150 pt-[250px] max-md:pt-150 overflow-hidden">
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
    <div className="singlePage">
      <h2 className="mb-3 font-semibold leading-[1.33] max-w-[650px]">
        Privacy Policy
      </h2>
    </div>
    <div className="singlePage">
      <p>
        At Aplio, we take your privacy seriously. This privacy policy explains
        how we collect, use, and protect your personal information.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We collect personal information that you provide to us such as your
        name, email address, and phone number when you submit a contact form or
        sign up for our newsletter. We also collect information about your visit
        to our website, including your IP address, browser type, and the pages
        you visit.
      </p>
      <h3>Use of Information</h3>
      <p>
        We use the information we collect to provide you with our services,
        respond to your inquiries, and send you marketing communications. We may
        also use your information to improve our website and to comply with
        legal obligations.
      </p>
      <ul>
        <li>Manage your time so you’ll get more done in less time</li>
        <li className="flex items-center gap-x-2 ">
          Cut expenses without sacrificing quality
        </li>
        <li className="flex items-center gap-x-2 ">
          Attract and retain quality, high-paying customers
        </li>
      </ul>
      <h3>Protection of Information</h3>
      <p>
        We take appropriate measures to protect your personal information from
        unauthorized access, disclosure, alteration, or destruction. We use
        industry-standard security measures such as SSL encryption to protect
        your data during transmission.
      </p>
      <h3>Disclosure of Information</h3>
      <p>
        We do not share your personal information with third parties except as
        required by law or as necessary to provide our services. We may share
        your information with our trusted partners who assist us in operating
        our website or providing our services.
      </p>
      <h3>Cookies</h3>
      <p>
        We use cookies and other similar technologies to collect information
        about your visit to our website. You may disable cookies in your browser
        settings, but please note that some features of our website may not
        function properly without cookies.
      </p>
      <h3>Your Rights</h3>
      <p>
        You have the right to access, update, and delete your personal
        information. You may also object to our use of your personal information
        for marketing purposes. If you wish to exercise any of these rights,
        please contact us using the information below.
      </p>
      <h3>Updates to Privacy Policy</h3>
      <p>
        We may update this privacy policy from time to time. We will notify you
        of any changes by posting the new privacy policy on our website. You are
        advised to review this privacy policy periodically for any changes.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about this privacy policy or our
        use of your personal information, please contact us at hello@aplio.com.
      </p>
    </div>
  </div>
</section>


      <FooterSection />
    </>
  );
}
