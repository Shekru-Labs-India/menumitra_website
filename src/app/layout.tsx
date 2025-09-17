import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import "./custom.css";
import Header from "@/components/organisms/Header";
import { Toaster } from "react-hot-toast";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "MenuMitra - AI-Powered Digital Menu Solutions for Restaurants",
    template: "%s | MenuMitra - Smart Restaurant Management"
  },
  description: "Transform your restaurant with MenuMitra's AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, boost sales by 30%, and enhance customer experience. Join 15,000+ restaurants. Start free trial today!",
  keywords: [
    "digital menu",
    "QR code menu",
    "restaurant management",
    "AI menu",
    "restaurant technology",
    "menu management system",
    "restaurant POS",
    "online ordering",
    "restaurant software",
    "smart menu",
    "digital restaurant",
    "menu QR code",
    "restaurant automation"
  ],
  authors: [{ name: "MenuMitra Team" }],
  creator: "MenuMitra",
  publisher: "MenuMitra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://menumitra.com',
    siteName: 'MenuMitra',
    title: 'MenuMitra - AI-Powered Digital Menu Solutions for Restaurants',
    description: 'Transform your restaurant with MenuMitra\'s AI-powered digital menu platform. Create stunning QR code menus, manage orders seamlessly, and boost sales by 30%.',
    images: [
      {
        url: '/images/hero/hero-circle.png',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Digital Menu Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MenuMitra - AI-Powered Digital Menu Solutions for Restaurants',
    description: 'Transform your restaurant with AI-powered digital menus. Boost sales by 30% with QR code menus and seamless order management.',
    images: ['/images/hero/hero-circle.png'],
    creator: '@menumitra',
  },
  icons: {
    icon: '/images/favicons/favicon-32x32.png',
    apple: '/images/favicons/apple-icon-180x180.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://menumitra.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MenuMitra",
    "description": "AI-powered digital menu platform for restaurants",
    "url": "https://menumitra.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free trial available"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000"
    },
    "provider": {
      "@type": "Organization",
      "name": "MenuMitra",
      "url": "https://menumitra.com"
    }
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                AOS.init({
                  duration: 500,
                  once: true,
                  offset: 50,
                  easing: 'ease-out',
                  delay: 0
                });
              });
            `
          }}
        />
      </head>
      <body
        className={`${lato.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{
            top: '100px',
          }}
          toastOptions={{
            duration: 5000,
            style: {
              background: '#fff',
              color: '#363636',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            },
            success: {
              duration: 5000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
