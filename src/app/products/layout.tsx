import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MenuMitra Products - Complete Restaurant Management Suite | Download Apps & Web Solutions",
  description: "Transform your restaurant with MenuMitra's complete suite of applications. Download Owner App, POS System, Captain App, Waiter App, and access web-based solutions including KDS, CDS, and Analytics Dashboard. Available for Android and Windows.",
  keywords: [
    "MenuMitra products",
    "restaurant management apps",
    "POS system download",
    "restaurant owner app",
    "captain app",
    "waiter app",
    "kitchen display system",
    "customer display system",
    "restaurant analytics dashboard",
    "restaurant management software",
    "restaurant apps download",
    "restaurant technology solutions",
    "restaurant management suite",
    "restaurant automation tools",
    "restaurant web applications",
    "restaurant cloud solutions",
    "restaurant mobile apps",
    "restaurant desktop software",
    "restaurant management platform",
    "restaurant business tools"
  ],
  
  openGraph: {
    title: "MenuMitra Products - Complete Restaurant Management Suite",
    description: "Transform your restaurant with MenuMitra's complete suite of applications. Download Owner App, POS System, Captain App, Waiter App, and access web-based solutions.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Restaurant Management Suite - Complete Product Portfolio',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "MenuMitra Products - Complete Restaurant Management Suite",
    description: "Transform your restaurant with MenuMitra's complete suite of applications. Download apps and access web-based solutions.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'product:category': 'restaurant_management_suite',
    'product:versions': 'v1.3, v2.0',
    'product:platforms': 'android, windows, web',
    'product:apps': 'owner_app, pos_system, captain_app, waiter_app, partner_app',
    'product:web_apps': 'kds, cds, statistics_dashboard, user_application',
    'product:features': 'offline_first, cloud_sync, real_time_analytics, order_management',
    'product:compatibility': 'android_6.0_plus, windows_7_plus',
    'product:release_dates': 'v2_owner_app_july_28_2025, v2_pos_july_31_2025',
    'product:environments': 'production, testing',
    'product:download_links': 'available',
    'product:web_access': 'available',
    'cta:primary': 'Download',
    'cta:secondary': 'Visit',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
