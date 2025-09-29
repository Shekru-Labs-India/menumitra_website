import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Captain App - MenuMitra Restaurant Management Mobile App | Real-time Order Tracking & Staff Coordination",
  description: "Empower your restaurant captains with MenuMitra's comprehensive mobile application designed specifically for restaurant management. The Captain App provides real-time insights, order management, and staff coordination tools with intuitive interface for table status monitoring and customer service.",
  keywords: [
    "captain app",
    "restaurant management app",
    "mobile restaurant app",
    "restaurant captain software",
    "order tracking app",
    "table management app",
    "restaurant staff coordination",
    "mobile restaurant management",
    "restaurant operations app",
    "captain mobile application",
    "restaurant workflow app",
    "staff communication app",
    "restaurant efficiency app",
    "customer service app",
    "restaurant analytics app",
    "real-time order management",
    "table status monitoring",
    "restaurant coordination tools",
    "mobile restaurant software",
    "restaurant management solution"
  ],
  
  openGraph: {
    title: "Captain App - MenuMitra Restaurant Management Mobile App",
    description: "Empower your restaurant captains with MenuMitra's comprehensive mobile application designed specifically for restaurant management. The Captain App provides real-time insights, order management, and staff coordination tools.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Captain App - Mobile Restaurant Management Application',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Captain App - MenuMitra Restaurant Management Mobile App",
    description: "Empower your restaurant captains with comprehensive mobile application for restaurant management. Real-time insights, order management, and staff coordination tools.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'mobile_application',
    'addon:type': 'restaurant_management_app',
    'addon:target_users': 'restaurant_captains, managers',
    'addon:capabilities': 'real_time_tracking, order_management, staff_coordination, table_monitoring',
    'addon:benefits': 'improved_efficiency, enhanced_customer_service, real_time_insights, seamless_integration',
    'addon:features': 'order_tracking, table_status, staff_communication, customer_feedback',
    'addon:integration': 'pos_systems, existing_restaurant_systems',
    'addon:scalability': 'single_location_to_multiple_outlets',
    'addon:analytics': 'performance_tracking, reporting_capabilities',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CaptainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
