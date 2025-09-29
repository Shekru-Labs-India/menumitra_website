import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer App - MenuMitra Mobile Dining Experience | Seamless Ordering & Loyalty Programs",
  description: "Enhance your customers' dining experience with MenuMitra's comprehensive customer mobile application. Provide seamless ordering, loyalty programs, and personalized recommendations with intuitive navigation, secure payment processing, and real-time order tracking.",
  keywords: [
    "customer app",
    "restaurant mobile app",
    "customer dining app",
    "restaurant ordering app",
    "loyalty program app",
    "customer mobile application",
    "restaurant customer experience",
    "mobile ordering system",
    "customer loyalty app",
    "restaurant rewards app",
    "personalized recommendations",
    "secure payment processing",
    "order tracking app",
    "customer feedback app",
    "restaurant customer engagement",
    "mobile dining experience",
    "customer satisfaction app",
    "restaurant customer retention",
    "mobile restaurant ordering",
    "customer experience optimization"
  ],
  
  openGraph: {
    title: "Customer App - MenuMitra Mobile Dining Experience",
    description: "Enhance your customers' dining experience with MenuMitra's comprehensive customer mobile application. Provide seamless ordering, loyalty programs, and personalized recommendations.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customer App - Mobile Dining Experience Application',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customer App - MenuMitra Mobile Dining Experience",
    description: "Enhance your customers' dining experience with comprehensive customer mobile application. Seamless ordering, loyalty programs, and personalized recommendations.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'mobile_application',
    'addon:type': 'customer_dining_app',
    'addon:target_users': 'restaurant_customers, diners',
    'addon:capabilities': 'seamless_ordering, loyalty_programs, personalized_recommendations, secure_payments',
    'addon:benefits': 'faster_ordering, personalized_experience, exclusive_rewards, easy_feedback',
    'addon:features': 'menu_browsing, order_tracking, payment_processing, loyalty_rewards',
    'addon:adaptability': 'qsr_to_fine_dining',
    'addon:experience': 'intuitive_navigation, real_time_tracking, order_customization',
    'addon:engagement': 'loyalty_programs, personalized_offers, feedback_system',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CustomerAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
