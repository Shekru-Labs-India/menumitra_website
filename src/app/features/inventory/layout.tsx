import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Inventory Management - MenuMitra Restaurant Inventory System | Real-Time Stock Tracking",
  description: "Streamline your restaurant's inventory operations with MenuMitra's comprehensive inventory management system. Track stock levels, manage suppliers, optimize food costs with real-time insights, automated alerts, and predictive analytics.",
  keywords: [
    "smart inventory management",
    "restaurant inventory system",
    "real-time stock tracking",
    "inventory management software",
    "stock level monitoring",
    "low stock alerts",
    "supplier management",
    "purchase order management",
    "cost tracking system",
    "waste reduction analytics",
    "restaurant stock control",
    "inventory optimization",
    "food cost management",
    "predictive inventory analytics",
    "automated stock alerts",
    "restaurant supply chain",
    "inventory waste reduction",
    "cash flow optimization",
    "restaurant inventory tracking",
    "multi-location inventory"
  ],
  
  openGraph: {
    title: "Smart Inventory Management - MenuMitra Restaurant Inventory System",
    description: "Streamline your restaurant's inventory operations with real-time stock tracking, automated alerts, and predictive analytics. Reduce waste by up to 30% and optimize food costs.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Smart Inventory Management - Real-Time Stock Tracking and Monitoring',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Smart Inventory Management - MenuMitra Restaurant Inventory System",
    description: "Streamline your restaurant's inventory operations with real-time stock tracking, automated alerts, and predictive analytics for optimal inventory control.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'inventory_management',
    'feature:type': 'smart_inventory_system',
    'feature:capabilities': 'real_time_tracking, automated_alerts, supplier_management, cost_analytics',
    'feature:benefits': 'reduce_waste_30_percent, optimize_costs, improve_cash_flow, streamline_operations',
    'feature:tracking': 'stock_levels, low_stock_alerts, real_time_monitoring',
    'feature:analytics': 'predictive_analytics, cost_tracking, waste_reduction',
    'feature:management': 'supplier_management, purchase_orders, inventory_optimization',
    'feature:automation': 'automated_alerts, stock_monitoring, notification_system',
    'feature:scalability': 'single_location_to_multiple_outlets',
    'feature:optimization': 'food_costs, purchasing_decisions, inventory_control',
    'feature:insights': 'data_driven_decisions, performance_analytics, cost_optimization',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
