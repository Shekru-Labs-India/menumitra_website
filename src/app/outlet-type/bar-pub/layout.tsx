import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bar & Pub Management - MenuMitra Bar Operations Excellence | Beverage Management & Entertainment Coordination",
  description: "Optimize your bar and pub operations with MenuMitra's specialized management system. Manage drinks, food service, and entertainment to create the perfect atmosphere for your customers. Beverage management, food service coordination, and entertainment scheduling to maximize profitability.",
  keywords: [
    "bar management",
    "pub management",
    "bar operations",
    "pub operations",
    "bar management system",
    "pub management system",
    "bar management software",
    "pub management software",
    "bar management platform",
    "pub management platform",
    "bar management solution",
    "pub management solution",
    "bar management tools",
    "pub management tools",
    "bar management services",
    "pub management services",
    "bar management technology",
    "pub management technology",
    "beverage management",
    "entertainment coordination"
  ],
  
  openGraph: {
    title: "Bar & Pub Management - MenuMitra Bar Operations Excellence",
    description: "Optimize your bar and pub operations with MenuMitra's specialized management system. Manage drinks, food service, and entertainment to create the perfect atmosphere for your customers.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Bar & Pub Management - Bar Operations Excellence',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Bar & Pub Management - MenuMitra Bar Operations Excellence",
    description: "Optimize your bar and pub operations with specialized management system. Manage drinks, food service, and entertainment to create the perfect atmosphere for your customers.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'bar_pub_management',
    'outlet:type': 'bar_operations_excellence',
    'outlet:target_users': 'bar_owners, pub_managers, beverage_managers',
    'outlet:capabilities': 'beverage_management, food_service_coordination, entertainment_scheduling, customer_loyalty',
    'outlet:benefits': 'increase_sales, improve_customer_experience, optimize_operations, maximize_profitability',
    'outlet:features': 'beverage_inventory, bar_management, food_service, entertainment_management',
    'outlet:scalability': 'neighborhood_pub_to_trendy_bar',
    'outlet:specialization': 'drinks_management, food_service, entertainment_coordination, customer_atmosphere',
    'outlet:operations': 'beverage_management, food_service_coordination, entertainment_scheduling, customer_loyalty_programs',
    'outlet:quality': 'exceptional_experiences, perfect_atmosphere, efficient_establishment_management',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function BarPubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
