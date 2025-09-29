import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Cloud Kitchen Management - MenuMitra Multi-Brand Operations | Delivery Integration & Kitchen Optimization",
  description: "Optimize your cloud kitchen operations with MenuMitra's specialized management system. Handle multiple brands, delivery platforms, and kitchen workflows efficiently. Multi-brand support, delivery integration, and kitchen optimization to maximize efficiency and profitability.",
  keywords: [
    "cloud kitchen management",
    "multi-brand operations",
    "delivery integration",
    "kitchen optimization",
    "cloud kitchen system",
    "virtual restaurant management",
    "delivery platform integration",
    "kitchen workflow optimization",
    "capacity management",
    "performance analytics",
    "profitability tracking",
    "delivery-focused kitchen",
    "multi-brand support",
    "order aggregation",
    "kitchen efficiency",
    "delivery operations",
    "cloud kitchen software",
    "virtual restaurants",
    "delivery management",
    "kitchen automation"
  ],
  
  openGraph: {
    title: "Cloud Kitchen Management - MenuMitra Multi-Brand Operations",
    description: "Optimize your cloud kitchen operations with MenuMitra's specialized management system. Handle multiple brands, delivery platforms, and kitchen workflows efficiently.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Cloud Kitchen Management - Multi-Brand Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Cloud Kitchen Management - MenuMitra Multi-Brand Operations",
    description: "Optimize your cloud kitchen operations with specialized management system. Handle multiple brands, delivery platforms, and kitchen workflows efficiently.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'cloud_kitchen_management',
    'outlet:type': 'multi_brand_operations',
    'outlet:target_users': 'cloud_kitchen_owners, delivery_operators, multi_brand_managers',
    'outlet:capabilities': 'multi_brand_management, delivery_integration, kitchen_optimization, performance_analytics',
    'outlet:benefits': 'maximize_efficiency, reduce_costs, increase_profitability, optimize_operations',
    'outlet:features': 'virtual_restaurant_management, order_aggregation, capacity_management, profitability_tracking',
    'outlet:scalability': 'single_brand_to_multiple_virtual_restaurants',
    'outlet:specialization': 'delivery_focused_operations, multi_brand_support, kitchen_workflow_optimization',
    'outlet:operations': 'multi_brand_management, delivery_platform_integration, kitchen_optimization, performance_tracking',
    'outlet:quality': 'exceptional_food_delivery, efficient_operations, complex_operations_management',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CloudKitchensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
