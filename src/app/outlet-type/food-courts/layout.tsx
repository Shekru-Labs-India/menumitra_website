import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Food Court Management - MenuMitra Multi-Vendor Coordination | Centralized Operations & Shared Resource Management",
  description: "Optimize your food court operations with MenuMitra's specialized management system. Coordinate multiple vendors, manage shared spaces, and ensure smooth operations across all food outlets. Vendor coordination, shared resource management, and centralized operations.",
  keywords: [
    "food court management",
    "multi-vendor coordination",
    "centralized operations",
    "shared resource management",
    "food court system",
    "vendor management",
    "mall food court",
    "corporate dining facility",
    "shared spaces management",
    "centralized payment",
    "billing systems",
    "performance monitoring",
    "analytics",
    "operational efficiency",
    "quality standards",
    "vendor performance",
    "food court operations",
    "multi-outlet management",
    "facility coordination",
    "dining experiences"
  ],
  
  openGraph: {
    title: "Food Court Management - MenuMitra Multi-Vendor Coordination",
    description: "Optimize your food court operations with MenuMitra's specialized management system. Coordinate multiple vendors, manage shared spaces, and ensure smooth operations across all food outlets.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Food Court Management - Multi-Vendor Coordination',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Food Court Management - MenuMitra Multi-Vendor Coordination",
    description: "Optimize your food court operations with specialized management system. Coordinate multiple vendors, manage shared spaces, and ensure smooth operations across all food outlets.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'food_court_management',
    'outlet:type': 'multi_vendor_coordination',
    'outlet:target_users': 'food_court_managers, mall_operators, corporate_dining_managers',
    'outlet:capabilities': 'vendor_coordination, shared_resource_management, centralized_operations, performance_monitoring',
    'outlet:benefits': 'streamline_operations, optimize_resources, maintain_quality, increase_profitability',
    'outlet:features': 'multi_vendor_management, shared_facilities, centralized_payment, performance_analytics',
    'outlet:scalability': 'mall_food_court_to_corporate_dining_facility',
    'outlet:specialization': 'vendor_coordination, shared_spaces, centralized_operations, multi_outlet_management',
    'outlet:operations': 'vendor_management, shared_resource_coordination, centralized_billing, performance_monitoring',
    'outlet:quality': 'efficient_operations, consistent_quality, exceptional_dining_experiences',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function FoodCourtsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
