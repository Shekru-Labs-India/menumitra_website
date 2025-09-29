import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Store Management - MenuMitra Multi-Location Restaurant Control | Centralized Operations & Inventory Management",
  description: "Streamline your restaurant operations with MenuMitra's comprehensive store management system. Manage multiple locations, coordinate staff, and maintain consistent operations across all outlets with centralized control over inventory, staff scheduling, and operational procedures.",
  keywords: [
    "store management",
    "multi-location restaurant management",
    "restaurant chain management",
    "centralized operations",
    "multi-location inventory",
    "restaurant location control",
    "store operations management",
    "restaurant chain operations",
    "centralized staff scheduling",
    "multi-outlet management",
    "restaurant standardization",
    "operational procedures",
    "restaurant scaling",
    "location performance monitoring",
    "restaurant chain control",
    "multi-location coordination",
    "restaurant operations optimization",
    "chain restaurant management",
    "restaurant location analytics",
    "centralized restaurant control"
  ],
  
  openGraph: {
    title: "Store Management - MenuMitra Multi-Location Restaurant Control",
    description: "Streamline your restaurant operations with MenuMitra's comprehensive store management system. Manage multiple locations, coordinate staff, and maintain consistent operations across all outlets.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Store Management - Multi-Location Control System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Store Management - MenuMitra Multi-Location Restaurant Control",
    description: "Streamline your restaurant operations with comprehensive store management. Manage multiple locations, coordinate staff, and maintain consistent operations across all outlets.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'store_management',
    'feature:type': 'multi_location_control_system',
    'feature:capabilities': 'multi_location_management, centralized_control, inventory_coordination, staff_scheduling',
    'feature:benefits': 'maintain_consistency, reduce_costs, improve_efficiency, scale_operations',
    'feature:scalability': 'single_location_to_restaurant_chain',
    'feature:standardization': 'operational_procedures, training_consistency, quality_control',
    'feature:monitoring': 'performance_tracking, location_analytics, operational_insights',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function StoreManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
