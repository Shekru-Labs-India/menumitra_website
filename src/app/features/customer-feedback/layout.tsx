import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Feedback Management - MenuMitra Review Analytics & Satisfaction Tracking | Multi-Channel Feedback System",
  description: "Collect, analyze, and act on customer feedback with MenuMitra's comprehensive feedback management system. Improve your restaurant's service quality and customer satisfaction through data-driven insights. Gather reviews, ratings, and suggestions from multiple channels with sentiment analysis and automated response systems.",
  keywords: [
    "customer feedback management",
    "restaurant review analytics",
    "customer satisfaction tracking",
    "feedback collection system",
    "sentiment analysis",
    "review management platform",
    "customer experience analytics",
    "restaurant feedback system",
    "multi-channel feedback",
    "customer satisfaction metrics",
    "online reputation management",
    "feedback automation",
    "customer insights",
    "restaurant improvement analytics",
    "review aggregation",
    "customer retention tracking",
    "service quality monitoring",
    "feedback response automation",
    "restaurant customer analytics",
    "satisfaction trend analysis"
  ],
  
  openGraph: {
    title: "Customer Feedback Management - MenuMitra Review Analytics & Satisfaction Tracking",
    description: "Collect, analyze, and act on customer feedback with MenuMitra's comprehensive feedback management system. Improve your restaurant's service quality and customer satisfaction through data-driven insights.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customer Feedback Management - Feedback Analytics Dashboard',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customer Feedback Management - MenuMitra Review Analytics & Satisfaction Tracking",
    description: "Collect, analyze, and act on customer feedback with comprehensive feedback management. Improve service quality and customer satisfaction through data-driven insights.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'customer_feedback_management',
    'feature:type': 'feedback_analytics_system',
    'feature:capabilities': 'multi_channel_collection, sentiment_analysis, automated_responses, performance_tracking',
    'feature:benefits': 'improve_service_quality, increase_satisfaction, build_reputation, data_driven_decisions',
    'feature:channels': 'digital_receipts, social_media, review_platforms',
    'feature:analytics': 'trend_identification, satisfaction_metrics, improvement_insights',
    'feature:automation': 'response_systems, follow_up_processes',
    'feature:reputation': 'online_review_management, customer_retention',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CustomerFeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
