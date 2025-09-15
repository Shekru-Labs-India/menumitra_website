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
  title: "MenuMitra - Transform Your Restaurant with Smart Menus",
  description: "Stop losing customers to outdated menus. MenuMitra's AI-powered platform helps you create stunning digital menus, manage orders seamlessly, and boost sales by 30%. Start your free trial today and see results in 24 hours.",
  icons: {
    icon: '/images/favicons/favicon-32x32.png',
    apple: '/images/favicons/apple-icon-180x180.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
