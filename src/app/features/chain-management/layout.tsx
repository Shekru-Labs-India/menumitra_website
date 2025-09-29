import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chain Management - MenuMitra Restaurant Chain Operations | Multi-Location Control & Brand Consistency",
  description: "Manage your restaurant chain operations with MenuMitra's comprehensive chain management system. Coordinate multiple locations, maintain brand consistency, and optimize performance across all outlets with centralized control over operations, inventory, staff, and customer data.",
  keywords: [
    "chain management",
    "restaurant chain operations",
    "multi-location restaurant management",
    "franchise management system",
    "restaurant chain control",
    "brand consistency management",
    "chain restaurant operations",
    "multi-location coordination",
    "restaurant franchise system",
    "chain performance optimization",
    "centralized chain management",
    "restaurant chain analytics",
    "chain location management",
    "franchise operations",
    "restaurant chain scaling",
    "multi-outlet management",
    "chain standardization",
    "restaurant chain benchmarking",
    "chain operational control",
    "restaurant chain efficiency"
  ],
  
  openGraph: {
    title: "Chain Management - MenuMitra Restaurant Chain Operations",
    description: "Manage your restaurant chain operations with MenuMitra's comprehensive chain management system. Coordinate multiple locations, maintain brand consistency, and optimize performance across all outlets.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Chain Management - Multi-Location Control System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Chain Management - MenuMitra Restaurant Chain Operations",
    description: "Manage your restaurant chain operations with comprehensive chain management. Coordinate multiple locations, maintain brand consistency, and optimize performance across all outlets.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'chain_management',
    'feature:type': 'restaurant_chain_operations_system',
    'feature:capabilities': 'centralized_control, brand_consistency, performance_optimization, multi_location_coordination',
    'feature:benefits': 'maintain_consistency, reduce_costs, improve_performance, scale_operations',
    'feature:scalability': 'small_chain_to_large_franchise_network',
    'feature:flexibility': 'centralized_control_with_local_autonomy',
    'feature:standardization': 'operations_quality_control, benchmarking',
    'feature:monitoring': 'performance_tracking, location_benchmarking, operational_insights',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function ChainManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
