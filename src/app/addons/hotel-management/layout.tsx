import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hotel Management - MenuMitra Integrated Hotel Operations | Multi-Outlet Dining & Guest Service Management",
  description: "Streamline your hotel's restaurant and food service operations with MenuMitra's comprehensive hotel management system. Manage multiple dining outlets, room service, and catering operations from one centralized platform with integrated restaurant operations and guest service management.",
  keywords: [
    "hotel management",
    "hotel restaurant management",
    "multi-outlet dining management",
    "room service management",
    "hotel catering operations",
    "guest service management",
    "hotel food service",
    "banquet management system",
    "hotel dining coordination",
    "in-room dining management",
    "hotel restaurant operations",
    "guest preference tracking",
    "hotel service integration",
    "boutique hotel management",
    "resort restaurant management",
    "hotel operational efficiency",
    "guest experience management",
    "hotel revenue optimization",
    "integrated hotel operations",
    "hotel service delivery"
  ],
  
  openGraph: {
    title: "Hotel Management - MenuMitra Integrated Hotel Operations",
    description: "Streamline your hotel's restaurant and food service operations with MenuMitra's comprehensive hotel management system. Manage multiple dining outlets, room service, and catering operations from one centralized platform.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Hotel Management - Integrated Hotel Operations System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Hotel Management - MenuMitra Integrated Hotel Operations",
    description: "Streamline your hotel's restaurant and food service operations with comprehensive hotel management system. Manage multiple dining outlets, room service, and catering operations.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'hotel_management',
    'addon:type': 'integrated_hotel_operations_system',
    'addon:target_users': 'hotels, resorts, boutique_hotels',
    'addon:capabilities': 'multi_outlet_management, room_service, catering_operations, guest_service_integration',
    'addon:benefits': 'deliver_consistent_quality, enhance_guest_experience, optimize_operations, increase_revenue',
    'addon:features': 'dining_management, room_service_coordination, banquet_management, guest_preference_tracking',
    'addon:scalability': 'boutique_hotel_to_large_resort',
    'addon:integration': 'restaurant_operations, guest_service_management, multi_outlet_coordination',
    'addon:service': 'personalized_service, guest_experience_management, operational_efficiency',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function HotelManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
