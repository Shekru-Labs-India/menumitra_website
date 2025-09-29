import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fine Dining Management - MenuMitra Premium Dining Experience | Advanced Reservations & Wine Pairing",
  description: "Elevate your fine dining restaurant operations with MenuMitra's sophisticated management system. Deliver exceptional dining experiences with premium service and elegant presentation. Advanced reservation systems, wine pairing recommendations, and detailed service protocols.",
  keywords: [
    "fine dining management",
    "premium dining experience",
    "advanced reservations",
    "wine pairing",
    "fine dining system",
    "upscale restaurant management",
    "michelin star restaurant",
    "sophisticated service",
    "elegant presentation",
    "guest preference tracking",
    "personalized service",
    "service protocols",
    "staff training",
    "sommelier recommendations",
    "table management",
    "culinary excellence",
    "dining experience",
    "restaurant standards",
    "guest satisfaction",
    "fine dining software"
  ],
  
  openGraph: {
    title: "Fine Dining Management - MenuMitra Premium Dining Experience",
    description: "Elevate your fine dining restaurant operations with MenuMitra's sophisticated management system. Deliver exceptional dining experiences with premium service and elegant presentation.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Fine Dining Management - Premium Dining Experience',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Fine Dining Management - MenuMitra Premium Dining Experience",
    description: "Elevate your fine dining restaurant operations with sophisticated management system. Deliver exceptional dining experiences with premium service and elegant presentation.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'fine_dining_management',
    'outlet:type': 'premium_dining_experience',
    'outlet:target_users': 'fine_dining_owners, upscale_restaurant_managers, michelin_chefs',
    'outlet:capabilities': 'advanced_reservations, wine_pairing, service_protocols, guest_tracking',
    'outlet:benefits': 'deliver_exceptional_service, maintain_high_standards, build_loyal_clientele, optimize_operations',
    'outlet:features': 'table_management, sommelier_recommendations, staff_training, personalized_service',
    'outlet:scalability': 'upscale_establishment_to_michelin_starred_restaurant',
    'outlet:specialization': 'premium_service, elegant_presentation, culinary_excellence, guest_satisfaction',
    'outlet:operations': 'reservation_management, wine_pairing, service_protocols, guest_preference_tracking',
    'outlet:quality': 'exceptional_dining_experiences, memorable_guest_experiences, highest_service_standards',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function FineDineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
