import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Demo - MenuMitra Digital Menu Platform',
  description: 'Schedule a personalized demo of MenuMitra\'s AI-powered digital menu platform. See how our QR code menus, order management, and analytics can boost your restaurant sales by 30%. Free consultation available.',
  keywords: [
    'restaurant demo',
    'digital menu demo',
    'QR code menu demo',
    'restaurant software demo',
    'menu management demo',
    'restaurant technology consultation',
    'AI menu platform demo'
  ],
  openGraph: {
    title: 'Book a Demo - MenuMitra Digital Menu Platform',
    description: 'Schedule a personalized demo of MenuMitra\'s AI-powered digital menu platform. See how our QR code menus can boost your restaurant sales by 30%.',
    url: 'https://menumitra.com/book-demo',
  },
  twitter: {
    title: 'Book a Demo - MenuMitra Digital Menu Platform',
    description: 'Schedule a personalized demo of MenuMitra\'s AI-powered digital menu platform. Free consultation available.',
  },
  alternates: {
    canonical: 'https://menumitra.com/book-demo',
  },
};

export default function BookDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
