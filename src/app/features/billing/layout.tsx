import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Billing Management - MenuMitra Restaurant Billing System | Automated Invoice & Payment Processing",
  description: "Streamline your restaurant's billing operations with MenuMitra's intelligent billing management system. Automated invoice generation, split billing, integrated payment processing, and real-time sales tracking. Perfect for restaurants, cafes, food trucks, and catering businesses.",
  keywords: [
    "restaurant billing system",
    "smart billing management",
    "automated invoice generation",
    "split billing restaurant",
    "restaurant payment processing",
    "POS billing system",
    "restaurant invoice management",
    "table billing system",
    "restaurant financial tracking",
    "payment gateway integration",
    "restaurant tax calculation",
    "discount management system",
    "professional invoice generation",
    "real-time sales tracking",
    "restaurant daily reports",
    "multiple payment methods",
    "PCI compliant payments",
    "restaurant billing software",
    "food service billing",
    "restaurant financial management"
  ],
  
  openGraph: {
    title: "Smart Billing Management - MenuMitra Restaurant Billing System",
    description: "Streamline your restaurant's billing operations with automated invoice generation, split billing, and integrated payment processing. Real-time sales tracking and professional invoicing.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Restaurant Billing Dashboard - Complete Billing Control from Order to Payment',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Smart Billing Management - MenuMitra Restaurant Billing System",
    description: "Streamline your restaurant's billing operations with automated invoice generation, split billing, and integrated payment processing.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'billing_management',
    'feature:type': 'smart_billing_system',
    'feature:capabilities': 'automated_invoicing, split_billing, payment_processing, tax_calculation',
    'feature:benefits': 'reduce_errors, faster_payments, professional_invoices, financial_tracking',
    'feature:integration': 'POS_system, kitchen_display, customer_database',
    'feature:payment_methods': 'cash, card, digital_wallets',
    'feature:compliance': 'PCI_compliant',
    'feature:reporting': 'real_time_sales, daily_reports, performance_insights',
    'feature:scalability': 'food_trucks_to_fine_dining',
    'feature:support': '24_7_technical_support, training_onboarding',
    'feature:mobile': 'manager_mobile_app',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function BillingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
