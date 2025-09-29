import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Mobile App - MenuMitra Mobile Business Management | Real-time Operations & Remote Control",
  description: "Empower your restaurant operations with MenuMitra's comprehensive smart mobile application. Manage your business on-the-go with powerful tools and real-time insights. Complete control over operations, from inventory management to staff scheduling, all accessible from your mobile device.",
  keywords: [
    "smart mobile app",
    "restaurant mobile app",
    "mobile business management",
    "restaurant management app",
    "mobile operations control",
    "real-time monitoring app",
    "restaurant analytics app",
    "mobile inventory management",
    "staff scheduling app",
    "restaurant remote control",
    "mobile business insights",
    "restaurant mobile dashboard",
    "on-the-go management",
    "mobile restaurant operations",
    "restaurant mobile analytics",
    "mobile staff management",
    "restaurant mobile monitoring",
    "business mobile app",
    "restaurant mobile control",
    "mobile operational insights"
  ],
  
  openGraph: {
    title: "Smart Mobile App - MenuMitra Mobile Business Management",
    description: "Empower your restaurant operations with MenuMitra's comprehensive smart mobile application. Manage your business on-the-go with powerful tools and real-time insights.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Smart Mobile App - Mobile Business Management',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Smart Mobile App - MenuMitra Mobile Business Management",
    description: "Empower your restaurant operations with comprehensive smart mobile application. Manage your business on-the-go with powerful tools and real-time insights.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'mobile_application',
    'addon:type': 'smart_mobile_app',
    'addon:target_users': 'restaurant_owners, managers, business_operators',
    'addon:capabilities': 'real_time_monitoring, remote_control, mobile_analytics, operational_management',
    'addon:benefits': 'stay_connected_24_7, informed_decisions, quick_response, optimize_operations',
    'addon:features': 'sales_monitoring, inventory_management, staff_scheduling, customer_feedback',
    'addon:flexibility': 'manage_from_anywhere, anytime_access, mobile_convenience',
    'addon:insights': 'real_time_data, mobile_analytics, operational_insights',
    'addon:control': 'complete_operational_control, remote_management, mobile_dashboard',
    'addon:scalability': 'single_location_to_multiple_outlets',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function SmartMobileAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
