import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Order Management - MenuMitra Restaurant Ordering System | Multi-Channel Order Processing",
  description: "Streamline your online ordering process with MenuMitra's comprehensive order management system. Handle delivery, pickup, and dine-in orders seamlessly from a single platform. Real-time tracking, automated notifications, and delivery partner integration.",
  keywords: [
    "online order management",
    "restaurant ordering system",
    "multi-channel order processing",
    "delivery order management",
    "pickup order system",
    "dine-in order management",
    "real-time order tracking",
    "automated order notifications",
    "delivery partner integration",
    "restaurant order fulfillment",
    "order status updates",
    "customer order confirmations",
    "restaurant order analytics",
    "order processing optimization",
    "restaurant order management software",
    "online food ordering system",
    "restaurant delivery management",
    "order accuracy improvement",
    "restaurant customer satisfaction",
    "order pattern insights"
  ],
  
  openGraph: {
    title: "Online Order Management - MenuMitra Restaurant Ordering System",
    description: "Streamline your online ordering process with multi-channel order management. Handle delivery, pickup, and dine-in orders seamlessly with real-time tracking and automated notifications.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Online Order Management - Seamless Order Processing from One Unified Platform',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Online Order Management - MenuMitra Restaurant Ordering System",
    description: "Streamline your online ordering process with multi-channel order management. Real-time tracking and automated notifications for better customer service.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'order_management',
    'feature:type': 'online_ordering_system',
    'feature:capabilities': 'multi_channel_orders, real_time_tracking, automated_notifications, delivery_integration',
    'feature:benefits': 'increase_sales, reduce_errors, improve_satisfaction, optimize_operations',
    'feature:order_types': 'delivery, pickup, dine_in',
    'feature:integration': 'delivery_partners, payment_gateways, existing_systems',
    'feature:tracking': 'real_time_status, customer_updates, order_confirmations',
    'feature:analytics': 'order_patterns, preferences, performance_insights',
    'feature:scalability': 'single_location_to_multiple_outlets',
    'feature:automation': 'order_processing, notifications, confirmations',
    'feature:optimization': 'delivery_routes, order_accuracy, customer_service',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function OnlineOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
