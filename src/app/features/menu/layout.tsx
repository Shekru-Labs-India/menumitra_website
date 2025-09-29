import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Menu Management - MenuMitra Restaurant Menu System | Drag & Drop Menu Builder",
  description: "Create, manage, and optimize your restaurant's digital menu with MenuMitra's comprehensive menu management system. Drag-and-drop menu builder, real-time updates, nutritional information, and performance analytics. Scale from single restaurant to chain operations.",
  keywords: [
    "digital menu management",
    "restaurant menu system",
    "menu builder",
    "drag and drop menu",
    "digital menu platform",
    "restaurant menu software",
    "menu management system",
    "restaurant menu builder",
    "digital menu creator",
    "menu optimization",
    "restaurant menu analytics",
    "menu performance tracking",
    "nutritional information menu",
    "allergen management",
    "menu pricing updates",
    "restaurant menu templates",
    "multi-location menu management",
    "restaurant menu scaling",
    "menu branding consistency",
    "restaurant menu updates"
  ],
  
  openGraph: {
    title: "Digital Menu Management - MenuMitra Restaurant Menu System",
    description: "Create, manage, and optimize your restaurant's digital menu with MenuMitra's comprehensive menu management system. Drag-and-drop menu builder with real-time updates and analytics.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Digital Menu Management - Dynamic Menu Builder with Drag-and-Drop Simplicity',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Digital Menu Management - MenuMitra Restaurant Menu System",
    description: "Create, manage, and optimize your restaurant's digital menu with drag-and-drop menu builder, real-time updates, and performance analytics.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'menu_management',
    'feature:type': 'digital_menu_system',
    'feature:capabilities': 'drag_drop_builder, real_time_updates, analytics, nutritional_info',
    'feature:benefits': 'increase_sales, reduce_costs, improve_customer_satisfaction, optimize_performance',
    'feature:scalability': 'single_restaurant_to_chain',
    'feature:templates': 'available',
    'feature:analytics': 'performance_tracking, insights',
    'feature:updates': 'real_time_pricing, availability',
    'feature:compliance': 'nutritional_info, allergen_management',
    'feature:branding': 'consistent_across_locations',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
