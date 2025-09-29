import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Display System - MenuMitra Interactive Digital Displays | Menu Presentations & Order Tracking",
  description: "Enhance your customer experience with MenuMitra's interactive customer display system. Showcase your menu, promotions, and order status with engaging digital displays. Dynamic menu presentations, real-time order updates, and promotional content to engage customers and improve their dining experience.",
  keywords: [
    "customer display system",
    "interactive digital displays",
    "restaurant display system",
    "digital menu displays",
    "customer engagement displays",
    "order tracking displays",
    "restaurant digital signage",
    "menu presentation system",
    "promotional displays",
    "customer experience displays",
    "restaurant visual displays",
    "digital customer displays",
    "order status displays",
    "restaurant branding displays",
    "customer communication system",
    "restaurant display technology",
    "interactive restaurant displays",
    "customer engagement technology",
    "restaurant visual communication",
    "digital restaurant displays"
  ],
  
  openGraph: {
    title: "Customer Display System - MenuMitra Interactive Digital Displays",
    description: "Enhance your customer experience with MenuMitra's interactive customer display system. Showcase your menu, promotions, and order status with engaging digital displays.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customer Display System - Interactive Digital Displays',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customer Display System - MenuMitra Interactive Digital Displays",
    description: "Enhance your customer experience with interactive customer display system. Showcase your menu, promotions, and order status with engaging digital displays.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'display_system',
    'addon:type': 'interactive_customer_displays',
    'addon:target_users': 'restaurant_customers, diners',
    'addon:capabilities': 'dynamic_menu_displays, real_time_order_updates, promotional_content, customizable_layouts',
    'addon:benefits': 'increase_sales, improve_satisfaction, reduce_wait_times, enhance_brand_image',
    'addon:features': 'menu_presentations, order_tracking, promotional_displays, branding_options',
    'addon:adaptability': 'qsr_to_casual_dining',
    'addon:engagement': 'interactive_displays, customer_communication, visual_engagement',
    'addon:technology': 'digital_signage, high_quality_images, real_time_updates',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CustomerDisplaySystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
