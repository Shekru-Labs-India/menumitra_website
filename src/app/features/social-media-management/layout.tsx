import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Management - MenuMitra Multi-Platform Marketing | Content Scheduling & Engagement Analytics",
  description: "Build your restaurant's online presence with MenuMitra's comprehensive social media management system. Create, schedule, and manage content across multiple platforms to engage with customers. Showcase your food, promote special offers, and build a community of loyal customers through engaging content and strategic marketing campaigns.",
  keywords: [
    "social media management",
    "restaurant social media marketing",
    "multi-platform content scheduling",
    "social media analytics",
    "restaurant content marketing",
    "social media engagement",
    "restaurant brand awareness",
    "social media automation",
    "restaurant marketing campaigns",
    "social media performance tracking",
    "restaurant online presence",
    "social media content creation",
    "restaurant community building",
    "social media optimization",
    "restaurant digital marketing",
    "social media scheduling",
    "restaurant customer engagement",
    "social media branding",
    "restaurant marketing automation",
    "social media ROI tracking"
  ],
  
  openGraph: {
    title: "Social Media Management - MenuMitra Multi-Platform Marketing",
    description: "Build your restaurant's online presence with MenuMitra's comprehensive social media management system. Create, schedule, and manage content across multiple platforms to engage with customers.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Social Media Management - Multi-Platform Marketing System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Social Media Management - MenuMitra Multi-Platform Marketing",
    description: "Build your restaurant's online presence with comprehensive social media management. Create, schedule, and manage content across multiple platforms to engage with customers.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'social_media_management',
    'feature:type': 'multi_platform_marketing_system',
    'feature:capabilities': 'content_scheduling, engagement_tracking, campaign_management, analytics_monitoring',
    'feature:benefits': 'increase_brand_visibility, drive_traffic, build_community, optimize_marketing',
    'feature:platforms': 'multi_platform_support',
    'feature:automation': 'content_scheduling, campaign_automation',
    'feature:analytics': 'performance_monitoring, engagement_tracking, ROI_analysis',
    'feature:branding': 'consistent_branding, multi_location_support',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function SocialMediaManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
