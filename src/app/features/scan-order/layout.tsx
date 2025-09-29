import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Scan & Order System - MenuMitra Contactless QR Code Ordering | Safe Dining Experience",
  description: "Revolutionize your dining experience with MenuMitra's contactless scan and order system. Customers can browse menus, place orders, and pay seamlessly using QR codes. Reduce wait times, improve order accuracy, and enhance safety.",
  keywords: [
    "scan and order system",
    "contactless ordering",
    "QR code ordering",
    "restaurant QR code menu",
    "contactless dining",
    "mobile ordering system",
    "QR code restaurant menu",
    "safe dining experience",
    "contactless payment",
    "restaurant QR ordering",
    "mobile menu browsing",
    "table management system",
    "order accuracy improvement",
    "wait time reduction",
    "staff efficiency optimization",
    "modern restaurant technology",
    "contactless food ordering",
    "QR code table service",
    "restaurant safety measures",
    "digital dining experience"
  ],
  
  openGraph: {
    title: "Scan & Order System - MenuMitra Contactless QR Code Ordering",
    description: "Revolutionize your dining experience with contactless scan and order system. Customers can browse menus, place orders, and pay seamlessly using QR codes for a safer dining experience.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Scan & Order System - Contactless Ordering with Safe QR Code-Based System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Scan & Order System - MenuMitra Contactless QR Code Ordering",
    description: "Revolutionize your dining experience with contactless scan and order system. Safe, convenient QR code-based ordering for modern restaurants.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'contactless_ordering',
    'feature:type': 'scan_order_system',
    'feature:capabilities': 'qr_code_generation, mobile_ordering, secure_payment, real_time_tracking',
    'feature:benefits': 'improve_safety, reduce_wait_times, increase_accuracy, optimize_efficiency',
    'feature:technology': 'QR_codes, mobile_optimized, contactless_payment',
    'feature:integration': 'kitchen_display, table_management, order_processing',
    'feature:safety': 'contactless_dining, physical_contact_reduction',
    'feature:experience': 'modern_technology, convenient_ordering, enhanced_dining',
    'feature:automation': 'order_processing, payment_confirmation, kitchen_integration',
    'feature:scalability': 'quick_service_to_fine_dining',
    'feature:optimization': 'staff_efficiency, manual_work_reduction, customer_service',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function ScanOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
