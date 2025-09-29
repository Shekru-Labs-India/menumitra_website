import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bakery Management - MenuMitra Fresh Bakery Operations | Production Planning & Freshness Tracking",
  description: "Streamline your bakery operations with MenuMitra's specialized management system. Manage fresh baked goods, track inventory, and optimize production schedules for maximum freshness. Production planning, freshness tracking, and customer ordering systems to minimize waste and maximize profitability.",
  keywords: [
    "bakery management",
    "bakery operations",
    "bakery management system",
    "bakery management software",
    "bakery management platform",
    "bakery management solution",
    "bakery management tools",
    "bakery management services",
    "bakery management technology",
    "bakery management system",
    "bakery management software",
    "bakery management platform",
    "bakery management solution",
    "bakery management tools",
    "bakery management services",
    "bakery management technology",
    "bakery management system",
    "bakery management software",
    "bakery management platform",
    "bakery management solution"
  ],
  
  openGraph: {
    title: "Bakery Management - MenuMitra Fresh Bakery Operations",
    description: "Streamline your bakery operations with MenuMitra's specialized management system. Manage fresh baked goods, track inventory, and optimize production schedules for maximum freshness.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Bakery Management - Fresh Bakery Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Bakery Management - MenuMitra Fresh Bakery Operations",
    description: "Streamline your bakery operations with specialized management system. Manage fresh baked goods, track inventory, and optimize production schedules for maximum freshness.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'bakery_management',
    'outlet:type': 'fresh_bakery_operations',
    'outlet:target_users': 'bakery_owners, pastry_chefs, bakery_managers',
    'outlet:capabilities': 'production_planning, freshness_tracking, inventory_management, customer_ordering',
    'outlet:benefits': 'maintain_freshness, reduce_waste, optimize_production, enhance_customer_service',
    'outlet:features': 'batch_scheduling, expiration_management, recipe_management, pre_order_capabilities',
    'outlet:scalability': 'small_artisan_bakery_to_large_commercial_operation',
    'outlet:specialization': 'fresh_baked_goods, pastry_operations, ingredient_management, quality_standards',
    'outlet:operations': 'production_planning, freshness_tracking, waste_minimization, profitability_optimization',
    'outlet:quality': 'product_freshness, quality_standards, efficient_production_processes',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function BakeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
