import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kitchen Display System - MenuMitra Smart Kitchen Operations | Real-time Order Management & Workflow Optimization",
  description: "Optimize your kitchen operations with MenuMitra's advanced kitchen display system. Streamline order processing, improve communication, and enhance kitchen efficiency with real-time order visibility, automated notifications, and workflow optimization.",
  keywords: [
    "kitchen display system",
    "kitchen operations optimization",
    "real-time order management",
    "kitchen workflow optimization",
    "order processing system",
    "kitchen communication system",
    "kitchen efficiency management",
    "order prioritization system",
    "kitchen station coordination",
    "kitchen performance analytics",
    "kitchen display technology",
    "order tracking system",
    "kitchen automation",
    "kitchen workflow management",
    "kitchen staff coordination",
    "order preparation optimization",
    "kitchen operations management",
    "kitchen display software",
    "kitchen efficiency monitoring",
    "kitchen order management"
  ],
  
  openGraph: {
    title: "Kitchen Display System - MenuMitra Smart Kitchen Operations",
    description: "Optimize your kitchen operations with MenuMitra's advanced kitchen display system. Streamline order processing, improve communication, and enhance kitchen efficiency with real-time order visibility.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Kitchen Display System - Smart Kitchen Operations',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Kitchen Display System - MenuMitra Smart Kitchen Operations",
    description: "Optimize your kitchen operations with advanced kitchen display system. Streamline order processing, improve communication, and enhance kitchen efficiency.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'kitchen_management',
    'addon:type': 'kitchen_display_system',
    'addon:target_users': 'kitchen_staff, chefs, kitchen_managers',
    'addon:capabilities': 'real_time_order_display, automated_prioritization, workflow_optimization, performance_analytics',
    'addon:benefits': 'reduce_preparation_time, minimize_errors, optimize_workflow, enhance_communication',
    'addon:features': 'order_tracking, status_monitoring, station_coordination, efficiency_monitoring',
    'addon:adaptability': 'fast_food_to_fine_dining',
    'addon:optimization': 'kitchen_workflow, order_prioritization, staff_coordination',
    'addon:analytics': 'performance_monitoring, efficiency_tracking, workflow_insights',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function KitchenDisplaySystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
