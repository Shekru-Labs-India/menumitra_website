import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Restaurant Reports & Analytics - MenuMitra Business Intelligence Dashboard | Real-time Insights & Performance Metrics",
  description: "Make data-driven decisions with MenuMitra's comprehensive restaurant reporting and analytics system. Track performance, identify trends, and optimize operations with real-time dashboards, customizable reports, and predictive insights.",
  keywords: [
    "restaurant reports",
    "restaurant analytics",
    "business intelligence dashboard",
    "restaurant performance metrics",
    "sales analytics",
    "revenue tracking",
    "customer behavior analysis",
    "staff performance metrics",
    "inventory analytics",
    "restaurant data insights",
    "real-time reporting",
    "customizable reports",
    "predictive analytics",
    "restaurant business intelligence",
    "performance optimization",
    "restaurant trends analysis",
    "operational insights",
    "restaurant profitability",
    "data-driven decisions",
    "restaurant KPI tracking"
  ],
  
  openGraph: {
    title: "Restaurant Reports & Analytics - MenuMitra Business Intelligence Dashboard",
    description: "Make data-driven decisions with MenuMitra's comprehensive restaurant reporting and analytics system. Track performance, identify trends, and optimize operations with real-time insights.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Restaurant Reports & Analytics - Advanced Business Intelligence Dashboard',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Restaurant Reports & Analytics - MenuMitra Business Intelligence Dashboard",
    description: "Make data-driven decisions with comprehensive restaurant reporting and analytics. Track performance, identify trends, and optimize operations with real-time insights.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'analytics_reporting',
    'feature:type': 'business_intelligence_system',
    'feature:capabilities': 'real_time_analytics, customizable_reports, predictive_insights, performance_tracking',
    'feature:benefits': 'data_driven_decisions, optimize_operations, increase_profitability, identify_opportunities',
    'feature:analytics': 'sales_revenue, customer_behavior, staff_performance, inventory_usage',
    'feature:reporting': 'real_time_dashboards, customizable_reports, trend_analysis',
    'feature:insights': 'predictive_analytics, performance_metrics, business_intelligence',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function RestaurantReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
