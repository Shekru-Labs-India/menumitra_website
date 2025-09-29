import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Large Chain Management - MenuMitra Enterprise Chain Operations | Centralized Control & Multi-Location Management",
  description: "Scale your restaurant chain operations with MenuMitra's enterprise-grade management system. Coordinate multiple locations, maintain consistency, and optimize performance across your entire network. Centralized control, standardized operations, and comprehensive analytics.",
  keywords: [
    "large chain management",
    "enterprise chain operations",
    "centralized control",
    "multi-location management",
    "restaurant chain system",
    "franchise management",
    "standardized operations",
    "quality control",
    "comprehensive analytics",
    "performance benchmarking",
    "chain operations",
    "restaurant network",
    "operational excellence",
    "consistent growth",
    "centralized management",
    "multi-location coordination",
    "chain scalability",
    "franchise support",
    "enterprise restaurant software",
    "chain optimization"
  ],
  
  openGraph: {
    title: "Large Chain Management - MenuMitra Enterprise Chain Operations",
    description: "Scale your restaurant chain operations with MenuMitra's enterprise-grade management system. Coordinate multiple locations, maintain consistency, and optimize performance across your entire network.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Large Chain Management - Enterprise Chain Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Large Chain Management - MenuMitra Enterprise Chain Operations",
    description: "Scale your restaurant chain operations with enterprise-grade management system. Coordinate multiple locations, maintain consistency, and optimize performance across your entire network.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'large_chain_management',
    'outlet:type': 'enterprise_chain_operations',
    'outlet:target_users': 'chain_operators, franchise_managers, enterprise_restaurant_owners',
    'outlet:capabilities': 'centralized_control, multi_location_management, standardized_operations, comprehensive_analytics',
    'outlet:benefits': 'maintain_consistency, optimize_performance, reduce_costs, scale_operations',
    'outlet:features': 'quality_control, performance_benchmarking, franchise_support, operational_excellence',
    'outlet:scalability': 'regional_chain_to_national_franchise_network',
    'outlet:specialization': 'enterprise_operations, centralized_management, multi_location_coordination',
    'outlet:operations': 'centralized_control, standardized_procedures, performance_optimization, franchise_management',
    'outlet:quality': 'consistent_quality, service_standards, operational_excellence, consistent_growth',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function LargeChainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
