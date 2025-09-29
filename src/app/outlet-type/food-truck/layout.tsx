import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Food Truck Management - MenuMitra Mobile Food Operations | Location Tracking & Route Optimization",
  description: "Optimize your food truck operations with MenuMitra's mobile-friendly management system. Manage locations, track inventory, and serve customers efficiently wherever you go. Location tracking, inventory management, and customer engagement tools to maximize sales and build a loyal customer base.",
  keywords: [
    "food truck management",
    "mobile food operations",
    "location tracking",
    "route optimization",
    "food truck system",
    "mobile inventory management",
    "supply management",
    "customer engagement",
    "social media integration",
    "sales tracking",
    "performance analytics",
    "mobile food business",
    "food truck fleet",
    "location planning",
    "customer loyalty",
    "mobile-friendly tools",
    "location-based features",
    "food truck operations",
    "mobile restaurant",
    "food truck software"
  ],
  
  openGraph: {
    title: "Food Truck Management - MenuMitra Mobile Food Operations",
    description: "Optimize your food truck operations with MenuMitra's mobile-friendly management system. Manage locations, track inventory, and serve customers efficiently wherever you go.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Food Truck Management - Mobile Food Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Food Truck Management - MenuMitra Mobile Food Operations",
    description: "Optimize your food truck operations with mobile-friendly management system. Manage locations, track inventory, and serve customers efficiently wherever you go.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'food_truck_management',
    'outlet:type': 'mobile_food_operations',
    'outlet:target_users': 'food_truck_owners, mobile_food_operators, fleet_managers',
    'outlet:capabilities': 'location_tracking, inventory_management, customer_engagement, sales_analytics',
    'outlet:benefits': 'increase_sales, build_customer_loyalty, optimize_operations, grow_business',
    'outlet:features': 'route_optimization, mobile_inventory, social_media_integration, performance_tracking',
    'outlet:scalability': 'single_food_truck_to_fleet_operations',
    'outlet:specialization': 'mobile_operations, location_based_features, customer_engagement, route_optimization',
    'outlet:operations': 'location_management, inventory_tracking, customer_engagement, sales_optimization',
    'outlet:quality': 'efficient_mobile_operations, loyal_customer_base, strategic_location_planning',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function FoodTruckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
