import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quick Service Restaurant Management - MenuMitra High-Speed Operations | Rapid Order Processing & Efficiency Optimization",
  description: "Optimize your quick service restaurant operations with MenuMitra's high-speed management system. Serve customers faster, reduce wait times, and maximize efficiency in your fast-paced environment. Rapid order processing, streamlined kitchen operations, and efficient customer flow.",
  keywords: [
    "quick service restaurant management",
    "QSR management",
    "high-speed operations",
    "rapid order processing",
    "efficiency optimization",
    "fast-paced environment",
    "streamlined kitchen operations",
    "efficient customer flow",
    "drive-through optimization",
    "counter service optimization",
    "performance monitoring",
    "analytics",
    "burger joint management",
    "pizza place management",
    "sandwich shop management",
    "fast food operations",
    "quick service",
    "customer wait times",
    "order throughput",
    "staff efficiency"
  ],
  
  openGraph: {
    title: "Quick Service Restaurant Management - MenuMitra High-Speed Operations",
    description: "Optimize your quick service restaurant operations with MenuMitra's high-speed management system. Serve customers faster, reduce wait times, and maximize efficiency in your fast-paced environment.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Quick Service Restaurant Management - High-Speed Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Quick Service Restaurant Management - MenuMitra High-Speed Operations",
    description: "Optimize your quick service restaurant operations with high-speed management system. Serve customers faster, reduce wait times, and maximize efficiency in your fast-paced environment.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'qsr_management',
    'outlet:type': 'high_speed_operations',
    'outlet:target_users': 'qsr_owners, fast_food_managers, quick_service_operators',
    'outlet:capabilities': 'rapid_order_processing, streamlined_operations, drive_through_optimization, performance_monitoring',
    'outlet:benefits': 'reduce_wait_times, increase_throughput, minimize_errors, optimize_efficiency',
    'outlet:features': 'payment_handling, kitchen_workflow, counter_service, real_time_analytics',
    'outlet:scalability': 'burger_joint_to_pizza_place_to_sandwich_shop',
    'outlet:specialization': 'fast_paced_operations, speed_efficiency, quick_service, high_throughput',
    'outlet:operations': 'rapid_processing, streamlined_workflow, drive_through_optimization, performance_monitoring',
    'outlet:quality': 'quick_quality_service, customer_satisfaction, operational_efficiency, profitability',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function QSRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
