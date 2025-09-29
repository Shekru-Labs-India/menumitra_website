import ClientSection from "@/components/organisms/ClientSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import StatsSection from "@/components/organisms/StatsSection";
import DataIntegrationsSection from "@/components/organisms/DataIntegrationsSection";
import SolutionSection from "@/components/organisms/SolutionSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import BlogSection from "@/components/organisms/BlogSection";
import FooterSection from "@/components/organisms/FooterSection";
import HeroSection from "@/components/organisms/HeroSection";
import CoreFeaturesSection from "@/components/organisms/CoreFeaturesSection";
import FAQSection from '@/components/sections/FAQSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MenuMitra - Boost Sales with Smart QR Menus & Real-time Insights",
  description: "Join 15,000+ restaurants using MenuMitra's AI-powered QR code menu platform. Create contactless digital menus, automate order management, and boost revenue with real-time analytics. Start your free trial today!",
  keywords: [
    "QR code menu",
    "digital menu platform",
    "restaurant management",
    "contactless dining",
    "AI-powered menu",
    "restaurant analytics",
    "order management",
    "restaurant technology",
    "menu management system",
    "restaurant POS",
    "online ordering",
    "restaurant software",
    "smart menu",
    "digital restaurant",
    "menu QR code",
    "restaurant automation",
    "restaurant insights",
    "food ordering system",
    "restaurant digital transformation",
    "multi-location restaurant",
    "kitchen display system",
    "restaurant dashboard"
  ],
  
  // Open Graph / Facebook
  openGraph: {
    title: "MenuMitra - Boost Sales with Smart QR Menus & Real-time Insights",
    description: "Join 15,000+ restaurants using MenuMitra's AI-powered QR code menu platform. Create contactless digital menus, automate order management, and boost revenue with real-time analytics.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra QR Code Menu Platform - Boost Restaurant Sales with AI-Powered Digital Menus',
      },
    ],
  },
  
  // X (Twitter) Meta Tags
  twitter: {
    card: 'summary_large_image',
    title: "MenuMitra - Boost Sales with Smart QR Menus & Real-time Insights",
    description: "Join 15,000+ restaurants using MenuMitra's AI-powered QR code menu platform. Create contactless digital menus and boost revenue with real-time analytics.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  // Additional Meta Tags
  other: {
    // Business Information
    'business:contact_data:phone_number': '+91 93178 18283',
    'business:contact_data:email': 'menumitra.info@gmail.com',
    
    // Restaurant Industry Specific
    'business:category': 'Restaurant Technology',
    'business:service': 'QR Code Menu Platform',
    'business:target_audience': 'Restaurants, Cafes, Food Courts, QSR',
    
    // Performance Metrics
    'business:metrics:restaurants_served': '15000+',
    'business:metrics:revenue_growth': '30%',
    'business:metrics:customer_rating': '4.8/5',
    
    // Features Highlight
    'product:features': 'QR Code Menus, Real-time Analytics, Order Management, Multi-location Management, 24/7 Support',
    'product:benefits': 'Contactless Dining, Increased Revenue, Streamlined Operations, Better Customer Experience',
    
    // Call to Action
    'cta:primary': 'Start Free Trial',
    'cta:secondary': 'Book Demo',
    
    // Industry Keywords
    'industry:keywords': 'restaurant technology, digital menu, QR code ordering, restaurant automation, food service technology',
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <StatsSection />
      <DataIntegrationsSection />
      <SolutionSection />
      <CoreFeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
