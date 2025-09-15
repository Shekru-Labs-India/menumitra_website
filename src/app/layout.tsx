import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MenuMitra - Revolutionize Your Restaurant Operations",
  description: "From digital menus to order management, MenuMitra empowers restaurants to deliver exceptional dining experiences. Boost efficiency, reduce costs, and increase customer satisfaction with our all-in-one platform.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
