import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";

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
      </body>
    </html>
  );
}
