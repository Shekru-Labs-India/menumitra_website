import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Restaurant Management - MenuMitra Complete Restaurant Solution | Table Management & Kitchen Coordination",
  description: "Transform your restaurant operations with MenuMitra's comprehensive management system designed specifically for restaurants. From table management to kitchen coordination, we handle every aspect of your business with real-time insights, automated workflows, and enhanced customer service capabilities.",
  keywords: [
    "restaurant management",
    "restaurant operations",
    "table management system",
    "restaurant reservation system",
    "kitchen coordination",
    "restaurant management platform",
    "restaurant management software",
    "restaurant operations management",
    "restaurant management system",
    "restaurant management solution",
    "restaurant management tools",
    "restaurant management platform",
    "restaurant management services",
    "restaurant management technology",
    "restaurant management software",
    "restaurant management system",
    "restaurant management platform",
    "restaurant management solution",
    "restaurant management tools",
    "restaurant management services"
  ],
  
  openGraph: {
    title: "Restaurant Management - MenuMitra Complete Restaurant Solution",
    description: "Transform your restaurant operations with MenuMitra's comprehensive management system designed specifically for restaurants. From table management to kitchen coordination, we handle every aspect of your business.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Restaurant Management - Complete Restaurant Solution',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Restaurant Management - MenuMitra Complete Restaurant Solution",
    description: "Transform your restaurant operations with comprehensive management system designed specifically for restaurants. From table management to kitchen coordination.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'restaurant_management',
    'outlet:type': 'complete_restaurant_solution',
    'outlet:target_users': 'restaurant_owners, managers, operators',
    'outlet:capabilities': 'table_management, kitchen_coordination, staff_scheduling, customer_management',
    'outlet:benefits': 'increase_efficiency, improve_satisfaction, boost_profitability, enhance_experience',
    'outlet:features': 'reservation_system, order_management, performance_tracking, feedback_management',
    'outlet:scalability': 'casual_dining_to_fine_dining',
    'outlet:integration': 'seamless_system_integration, existing_systems_compatibility',
    'outlet:operations': 'front_of_house, back_of_house, comprehensive_management',
    'outlet:analytics': 'real_time_insights, automated_workflows, performance_analytics',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
