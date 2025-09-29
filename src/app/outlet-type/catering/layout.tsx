import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Catering Management - MenuMitra Event Catering Excellence | Event Planning & Delivery Coordination",
  description: "Streamline your catering operations with MenuMitra's comprehensive management system. Manage events, coordinate deliveries, and ensure exceptional service for all your catering clients. Event planning, menu customization, and delivery coordination to build lasting client relationships.",
  keywords: [
    "catering management",
    "event catering",
    "catering operations",
    "catering management system",
    "catering management software",
    "catering management platform",
    "catering management solution",
    "catering management tools",
    "catering management services",
    "catering management technology",
    "event planning",
    "menu customization",
    "delivery coordination",
    "client management",
    "catering logistics",
    "staff scheduling",
    "on-site service",
    "corporate events",
    "private parties",
    "catering business"
  ],
  
  openGraph: {
    title: "Catering Management - MenuMitra Event Catering Excellence",
    description: "Streamline your catering operations with MenuMitra's comprehensive management system. Manage events, coordinate deliveries, and ensure exceptional service for all your catering clients.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Catering Management - Event Catering Excellence',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Catering Management - MenuMitra Event Catering Excellence",
    description: "Streamline your catering operations with comprehensive management system. Manage events, coordinate deliveries, and ensure exceptional service for all your catering clients.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'catering_management',
    'outlet:type': 'event_catering_excellence',
    'outlet:target_users': 'catering_owners, event_planners, catering_managers',
    'outlet:capabilities': 'event_planning, menu_customization, delivery_coordination, staff_scheduling',
    'outlet:benefits': 'deliver_exceptional_events, build_client_relationships, streamline_operations, scale_business',
    'outlet:features': 'client_management, dietary_requirements, logistics_management, on_site_service',
    'outlet:scalability': 'small_events_to_large_corporate_functions',
    'outlet:specialization': 'event_planning, menu_customization, delivery_coordination, client_relationships',
    'outlet:operations': 'event_planning, menu_customization, delivery_coordination, staff_scheduling',
    'outlet:quality': 'memorable_experiences, exceptional_service, lasting_client_relationships',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CateringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
