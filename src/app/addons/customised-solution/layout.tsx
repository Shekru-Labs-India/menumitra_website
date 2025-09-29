import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customised Solution - MenuMitra Tailored Restaurant Management | Flexible Configuration & Specialized Integrations",
  description: "Get a tailored restaurant management solution designed specifically for your unique business needs. MenuMitra's customised solutions adapt to your operations, workflows, and specific requirements with flexible configuration, personalized workflows, and specialized features.",
  keywords: [
    "customised solution",
    "tailored restaurant management",
    "custom restaurant software",
    "flexible configuration",
    "personalized workflows",
    "specialized integrations",
    "custom restaurant solution",
    "bespoke restaurant software",
    "restaurant customization",
    "custom reporting dashboards",
    "third-party integrations",
    "restaurant workflow customization",
    "custom restaurant features",
    "tailored business solutions",
    "restaurant software customization",
    "custom restaurant platform",
    "specialized restaurant features",
    "restaurant solution adaptation",
    "custom restaurant workflows",
    "dedicated restaurant support"
  ],
  
  openGraph: {
    title: "Customised Solution - MenuMitra Tailored Restaurant Management",
    description: "Get a tailored restaurant management solution designed specifically for your unique business needs. MenuMitra's customised solutions adapt to your operations, workflows, and specific requirements.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customised Solution - Tailored Restaurant Management',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customised Solution - MenuMitra Tailored Restaurant Management",
    description: "Get a tailored restaurant management solution designed specifically for your unique business needs. Flexible configuration, personalized workflows, and specialized features.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'custom_solution',
    'addon:type': 'tailored_restaurant_management',
    'addon:target_users': 'restaurants_with_unique_requirements',
    'addon:capabilities': 'flexible_configuration, specialized_integrations, custom_reporting, dedicated_support',
    'addon:benefits': 'address_unique_requirements, integrate_existing_systems, scale_business, dedicated_support',
    'addon:features': 'workflow_customization, third_party_connections, custom_dashboards, ongoing_customization',
    'addon:flexibility': 'adapt_to_operations, personalized_workflows, specialized_features',
    'addon:support': 'dedicated_support, ongoing_customization, specialized_requirements',
    'addon:scalability': 'scale_as_business_grows, adapt_to_changes',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CustomisedSolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
