import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cafe Management - MenuMitra Cafe-Focused Solutions | Coffee Shop Operations & Customer Loyalty",
  description: "Streamline your cafe operations with MenuMitra's specialized management system designed for coffee shops and cafes. From order management to customer loyalty, we provide everything you need to run a successful cafe with quick order processing, inventory tracking, and customer relationship tools.",
  keywords: [
    "cafe management",
    "coffee shop management",
    "cafe operations",
    "coffee shop operations",
    "cafe management system",
    "coffee shop management system",
    "cafe management software",
    "coffee shop management software",
    "cafe management platform",
    "coffee shop management platform",
    "cafe management solution",
    "coffee shop management solution",
    "cafe management tools",
    "coffee shop management tools",
    "cafe management services",
    "coffee shop management services",
    "cafe management technology",
    "coffee shop management technology",
    "cafe management system",
    "coffee shop management system"
  ],
  
  openGraph: {
    title: "Cafe Management - MenuMitra Cafe-Focused Solutions",
    description: "Streamline your cafe operations with MenuMitra's specialized management system designed for coffee shops and cafes. From order management to customer loyalty, we provide everything you need to run a successful cafe.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Cafe Management - Cafe-Focused Solutions',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Cafe Management - MenuMitra Cafe-Focused Solutions",
    description: "Streamline your cafe operations with specialized management system designed for coffee shops and cafes. From order management to customer loyalty programs.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'cafe_management',
    'outlet:type': 'cafe_focused_solutions',
    'outlet:target_users': 'cafe_owners, coffee_shop_operators, cafe_managers',
    'outlet:capabilities': 'quick_order_processing, inventory_management, loyalty_programs, staff_scheduling',
    'outlet:benefits': 'faster_service, reduce_waste, build_loyalty, optimize_scheduling',
    'outlet:features': 'order_customization, beverage_management, rewards_programs, peak_hour_management',
    'outlet:scalability': 'small_neighborhood_cafe_to_busy_downtown_coffee_shop',
    'outlet:specialization': 'coffee_beans, pastries, beverage_customization, cafe_specific_features',
    'outlet:operations': 'quick_service, peak_hour_management, customer_relationship_management',
    'outlet:loyalty': 'customer_rewards, loyalty_programs, customer_retention',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
