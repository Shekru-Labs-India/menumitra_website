import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import "./custom.css";
// import "./theme.css";
import "./theme-1.css";
import Header from "@/components/organisms/Header";
import { Toaster } from "react-hot-toast";
import { website, social } from "@/config/contact";
import AOSProvider from "@/components/providers/AOSProvider";
import FloatingActionButton from "@/components/atoms/FloatingActionButton";

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
    url: website.base,
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
    creator: social.twitter,
  },
  icons: {
    icon: [
      { url: '/images/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicons/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/images/favicons/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/images/favicons/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/images/favicons/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/images/favicons/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/images/favicons/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/images/favicons/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/images/favicons/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/images/favicons/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/favicon.ico' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: website.base,
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
    "url": website.base,
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
      "url": website.base
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Favicon Links */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/images/favicons/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/favicons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/favicons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/favicons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/favicons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/favicons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/favicons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/favicons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-icon-180x180.png" />
        <link rel="stylesheet"
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
              function initAOS() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 300,
                    once: true,
                    offset: 50,
                    easing: 'ease-out',
                    delay: 0
                  });
                }
              }
              
              // Initialize AOS when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initAOS);
              } else {
                initAOS();
              }
              
              // Re-initialize AOS on navigation (for Next.js)
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    if (typeof AOS !== 'undefined') {
                      AOS.refresh();
                    }
                  }, 100);
                });
                
                // Additional refresh for client-side navigation
                window.addEventListener('pageshow', function() {
                  setTimeout(function() {
                    if (typeof AOS !== 'undefined') {
                      AOS.refresh();
                    }
                  }, 200);
                });
              }
            `
          }}
        />
      </head>
      <body
        className={`${lato.variable} antialiased`}
      >
        <Header />
        <AOSProvider>
          {children}
        </AOSProvider>
        
        {/* Floating Action Button */}
        <FloatingActionButton
          icon="whatsapp"
          label="WhatsApp Us"
          variant="whatsapp"
          size="medium"
          animate={false}
        />
        
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
