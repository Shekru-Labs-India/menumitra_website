import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Customer Management - MenuMitra Restaurant CRM System | Loyalty Programs & Customer Analytics",
  description: "Build lasting relationships with your customers using MenuMitra's comprehensive customer management system. Track preferences, manage loyalty programs, provide personalized experiences, and create targeted marketing campaigns to increase retention.",
  keywords: [
    "customer management system",
    "restaurant CRM",
    "customer relationship management",
    "loyalty programs",
    "customer preference tracking",
    "restaurant customer analytics",
    "customer retention system",
    "personalized customer experiences",
    "targeted marketing campaigns",
    "customer behavior analytics",
    "order history tracking",
    "customer satisfaction management",
    "restaurant customer insights",
    "customer lifetime value",
    "automated marketing tools",
    "customer feedback tracking",
    "restaurant customer database",
    "customer segmentation",
    "promotional campaigns",
    "restaurant customer engagement"
  ],
  
  openGraph: {
    title: "Customer Management - MenuMitra Restaurant CRM System",
    description: "Build lasting relationships with your customers using comprehensive customer management system. Track preferences, manage loyalty programs, and create personalized experiences to increase retention.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Customer Management - Customer Relationship Hub for All Interactions',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Customer Management - MenuMitra Restaurant CRM System",
    description: "Build lasting relationships with your customers using comprehensive customer management system. Track preferences, manage loyalty programs, and increase retention.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'customer_management',
    'feature:type': 'restaurant_crm_system',
    'feature:capabilities': 'preference_tracking, loyalty_programs, behavior_analytics, marketing_campaigns',
    'feature:benefits': 'increase_retention, boost_loyalty, drive_repeat_business, personalize_experiences',
    'feature:management': 'customer_profiles, order_history, satisfaction_tracking',
    'feature:analytics': 'behavior_analytics, customer_insights, lifetime_value_tracking',
    'feature:marketing': 'targeted_campaigns, automated_promotions, personalized_marketing',
    'feature:loyalty': 'reward_tracking, loyalty_programs, customer_engagement',
    'feature:scalability': 'small_cafe_to_large_chain',
    'feature:automation': 'marketing_automation, campaign_management, feedback_tracking',
    'feature:insights': 'customer_preferences, behavior_patterns, satisfaction_metrics',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function CustomerManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
