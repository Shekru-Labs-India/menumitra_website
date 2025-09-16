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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="pt-20">
     
      </main>

      <FooterSection />
    </>
  );
}
