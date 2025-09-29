import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Point of Sale System - MenuMitra Complete POS Solution | Order Processing & Payment Management",
  description: "Streamline your restaurant's sales operations with MenuMitra's comprehensive point of sale system. Process orders, handle payments, and manage transactions with ease and efficiency. Intuitive order processing, multiple payment options, and real-time sales tracking.",
  keywords: [
    "point of sale system",
    "restaurant POS system",
    "POS software",
    "order processing system",
    "payment management",
    "restaurant sales operations",
    "transaction management",
    "POS terminal",
    "restaurant billing system",
    "sales tracking system",
    "payment processing",
    "restaurant checkout system",
    "POS integration",
    "restaurant transaction processing",
    "sales management system",
    "restaurant payment solutions",
    "POS reporting",
    "restaurant sales analytics",
    "order management system",
    "restaurant POS software"
  ],
  
  openGraph: {
    title: "Point of Sale System - MenuMitra Complete POS Solution",
    description: "Streamline your restaurant's sales operations with MenuMitra's comprehensive point of sale system. Process orders, handle payments, and manage transactions with ease and efficiency.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Point of Sale System - Complete POS Solution',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Point of Sale System - MenuMitra Complete POS Solution",
    description: "Streamline your restaurant's sales operations with comprehensive point of sale system. Process orders, handle payments, and manage transactions with ease and efficiency.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'pos_system',
    'addon:type': 'point_of_sale_system',
    'addon:target_users': 'restaurant_staff, cashiers, managers',
    'addon:capabilities': 'order_processing, payment_handling, sales_tracking, inventory_integration',
    'addon:benefits': 'increase_sales_efficiency, minimize_errors, enhance_customer_experience, gain_insights',
    'addon:features': 'menu_management, multiple_payment_options, real_time_tracking, automatic_updates',
    'addon:adaptability': 'small_cafe_to_large_restaurant',
    'addon:processing': 'intuitive_order_processing, secure_payment_processing, transaction_management',
    'addon:insights': 'sales_patterns, performance_analytics, real_time_reporting',
    'addon:integration': 'inventory_integration, automatic_updates, system_connectivity',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function PointOfSaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
