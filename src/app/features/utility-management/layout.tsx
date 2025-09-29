import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Utility Management - MenuMitra Smart Utility Monitoring | Energy & Water Consumption Optimization",
  description: "Optimize your restaurant's utility consumption and reduce operational costs with MenuMitra's comprehensive utility management system. Monitor energy usage, water consumption, and other utilities with real-time monitoring, automated alerts, and detailed analytics for cost savings and environmental sustainability.",
  keywords: [
    "utility management",
    "restaurant energy monitoring",
    "water consumption tracking",
    "utility cost optimization",
    "energy efficiency management",
    "restaurant sustainability",
    "utility consumption analytics",
    "energy monitoring system",
    "water usage tracking",
    "utility cost reduction",
    "restaurant environmental impact",
    "utility budget management",
    "energy consumption alerts",
    "sustainability reporting",
    "restaurant utility optimization",
    "utility monitoring dashboard",
    "energy efficiency tracking",
    "water conservation management",
    "restaurant cost savings",
    "utility consumption insights"
  ],
  
  openGraph: {
    title: "Utility Management - MenuMitra Smart Utility Monitoring",
    description: "Optimize your restaurant's utility consumption and reduce operational costs with MenuMitra's comprehensive utility management system. Monitor energy usage, water consumption, and other utilities with real-time monitoring.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Utility Management - Smart Utility Monitoring System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Utility Management - MenuMitra Smart Utility Monitoring",
    description: "Optimize your restaurant's utility consumption and reduce operational costs with comprehensive utility management. Monitor energy usage, water consumption, and other utilities with real-time monitoring.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'utility_management',
    'feature:type': 'smart_utility_monitoring_system',
    'feature:capabilities': 'real_time_monitoring, automated_alerts, cost_tracking, sustainability_reporting',
    'feature:benefits': 'reduce_costs, improve_efficiency, environmental_sustainability, optimize_consumption',
    'feature:monitoring': 'energy_water_consumption, unusual_patterns, equipment_efficiency',
    'feature:analytics': 'cost_analysis, budget_management, consumption_insights',
    'feature:sustainability': 'environmental_impact_tracking, conservation_goals',
    'feature:optimization': 'multi_location_consumption, cost_savings_opportunities',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function UtilityManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
