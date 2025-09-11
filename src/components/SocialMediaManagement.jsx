import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from "./ManagementPageLayout";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.webp";
import brand3 from "../assets/images/mm_brand/03.webp";
import brand4 from "../assets/images/mm_brand/04.webp";
import brand5 from "../assets/images/mm_brand/05.webp";
import brand6 from "../assets/images/mm_brand/06.webp";

const SocialMediaManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialMediaData = {
    title: "Social Media Management",
    description: "Social media management tools for restaurants",
    keywords: "Social Media Management, Restaurant Marketing, Menu Mitra, Digital Marketing",
    heroImage: brand3,
    heroTitle: "Social Media Management for Restaurants",
    heroDescription: "Boost your restaurant's online presence with our comprehensive social media management tools. Schedule posts, engage with customers, track performance, and grow your brand across all major social platforms.",
    featuresTitle: "Comprehensive Social Media Management Features",
    featuresSubtitle: "Everything you need to manage your restaurant's social media presence efficiently",
    features: [
      {
        icon: "fas fa-share-nodes",
        color: "#007bff",
        title: "Multi-Platform Posting",
        description: "Schedule and publish content across Facebook, Instagram, Twitter, LinkedIn, and other social platforms from one centralized dashboard."
      },
      {
        icon: "fas fa-calendar-alt",
        color: "#28a745",
        title: "Content Scheduling",
        description: "Plan and schedule your social media content in advance to maintain consistent posting and optimal engagement timing."
      },
      {
        icon: "fas fa-comments",
        color: "#ffc107",
        title: "Customer Engagement",
        description: "Monitor and respond to customer comments, messages, and reviews across all platforms with unified inbox management."
      },
      {
        icon: "fas fa-chart-bar",
        color: "#17a2b8",
        title: "Analytics & Insights",
        description: "Track engagement metrics, reach, impressions, and performance analytics to optimize your social media strategy."
      },
      {
        icon: "fas fa-hashtag",
        color: "#dc3545",
        title: "Hashtag Management",
        description: "Research trending hashtags, manage hashtag libraries, and optimize hashtag usage to increase content visibility."
      },
      {
        icon: "fas fa-users",
        color: "#6f42c1",
        title: "Audience Building",
        description: "Grow your social media following with targeted content strategies, influencer partnerships, and community management tools."
      }
    ],
    operationsTitle: "Advanced Social Media Operations",
    operationsSubtitle: "Streamline complex social media operations with intelligent automation",
    operations: [
      {
        icon: "fas fa-robot",
        bgColor: "bg-primary",
        title: "AI Content Generation",
        description: "Generate engaging social media content using AI-powered tools, including captions, hashtags, and post suggestions."
      },
      {
        icon: "fas fa-bullhorn",
        bgColor: "bg-success",
        title: "Campaign Management",
        description: "Create and manage social media campaigns, track performance, and optimize ad spend across multiple platforms."
      },
      {
        icon: "fas fa-heart",
        bgColor: "bg-warning",
        title: "Brand Monitoring",
        description: "Monitor brand mentions, sentiment analysis, and online reputation across all social media platforms."
      },
      {
        icon: "fas fa-mobile-alt",
        bgColor: "bg-secondary",
        title: "Mobile Management",
        description: "Manage your social media presence on-the-go with our mobile app for posting, engagement, and monitoring."
      }
    ],
    intelligenceTitle: "Social Media Intelligence",
    intelligenceDescription: "Make data-driven decisions with comprehensive social media analytics and performance insights designed for restaurant marketing success.",
    intelligenceImage: brand4,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-line",
        color: "text-primary",
        title: "Performance Analytics",
        description: "Track engagement rates and reach metrics"
      },
      {
        icon: "fas fa-eye",
        color: "text-success",
        title: "Audience Insights",
        description: "Understand your audience demographics and behavior"
      },
      {
        icon: "fas fa-clock",
        color: "text-warning",
        title: "Optimal Timing",
        description: "Identify best posting times for maximum engagement"
      },
      {
        icon: "fas fa-trophy",
        color: "text-info",
        title: "Competitor Analysis",
        description: "Monitor competitor performance and strategies"
      }
    ],
    integrationTitle: "Seamless Social Media Integration & Scalability",
    integrationSubtitle: "Connect with your existing marketing tools and scale as you grow",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Platform Integrations",
        description: "Connect with Facebook, Instagram, Twitter, LinkedIn, TikTok, and other major social platforms for unified management."
      },
      {
        icon: "fas fa-expand-arrows-alt",
        title: "Multi-Location Support",
        description: "Manage social media for multiple restaurant locations with centralized control and location-specific content."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud-Based Management",
        description: "Access your social media tools anywhere with secure cloud storage, automatic backups, and 99.9% uptime."
      }
    ],
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their social media presence with MenuMitra",
    successStories: [
      {
        image: brand5,
        name: "Fine Dining Restaurant",
        location: "Downtown Location",
        testimonial: "MenuMitra's social media management helped us increase our Instagram followers by 300% and boost online reservations by 45%.",
        rating: "5.0"
      },
      {
        image: brand6,
        name: "Cafe Chain",
        location: "15+ Locations",
        testimonial: "Automated posting and engagement tools have helped us maintain consistent social presence across all our locations.",
        rating: "4.9"
      },
      {
        image: brand1,
        name: "QSR Franchise",
        location: "25+ Outlets",
        testimonial: "Social media analytics and campaign management features have increased our brand awareness and customer engagement significantly.",
        rating: "4.8"
      }
    ],
    ctaTitle: "Ready to Transform Your Social Media Presence?",
    ctaDescription: "Join thousands of restaurants already using MenuMitra to boost their social media engagement and grow their online presence.",
    pageClassName: "social-media-management-page"
  };

  return (
    <>
      <Helmet>
        <title>Social Media Management - MenuMitra</title>
        <meta name="description" content={socialMediaData.description} />
        <meta name="keywords" content={socialMediaData.keywords} />
      </Helmet>
      <ManagementPageLayout {...socialMediaData} />
    </>
  );
};

export default SocialMediaManagement;
