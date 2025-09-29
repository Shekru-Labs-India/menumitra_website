import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Waiter App - MenuMitra Service Excellence Tools | Order Taking & Table Management",
  description: "Empower your waitstaff with MenuMitra's comprehensive waiter mobile application. Streamline order taking, table management, and customer service with intuitive tools. Real-time order processing, table status updates, and customer communication tools to improve service efficiency.",
  keywords: [
    "waiter app",
    "restaurant waiter app",
    "waitstaff mobile app",
    "order taking app",
    "table management app",
    "restaurant service app",
    "waiter mobile application",
    "restaurant staff app",
    "order processing app",
    "customer service app",
    "restaurant waiter software",
    "table status tracking",
    "restaurant order management",
    "waiter efficiency app",
    "restaurant service tools",
    "mobile waiter app",
    "restaurant staff management",
    "order accuracy app",
    "restaurant service optimization",
    "waiter productivity app"
  ],
  
  openGraph: {
    title: "Waiter App - MenuMitra Service Excellence Tools",
    description: "Empower your waitstaff with MenuMitra's comprehensive waiter mobile application. Streamline order taking, table management, and customer service with intuitive tools.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Waiter App - Service Excellence Tools',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Waiter App - MenuMitra Service Excellence Tools",
    description: "Empower your waitstaff with comprehensive waiter mobile application. Streamline order taking, table management, and customer service with intuitive tools.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'mobile_application',
    'addon:type': 'waiter_service_app',
    'addon:target_users': 'restaurant_waitstaff, servers, service_staff',
    'addon:capabilities': 'order_taking, table_management, customer_communication, payment_processing',
    'addon:benefits': 'reduce_errors, increase_efficiency, enhance_satisfaction, streamline_payments',
    'addon:features': 'quick_order_taking, real_time_tracking, customer_communication, bill_management',
    'addon:adaptability': 'small_restaurant_to_large_dining_establishment',
    'addon:service': 'service_excellence, customer_satisfaction, operational_efficiency',
    'addon:tools': 'intuitive_interface, real_time_updates, customer_communication_tools',
    'addon:optimization': 'service_efficiency, table_turnover, order_accuracy',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function WaiterAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
