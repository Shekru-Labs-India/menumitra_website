import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Money Management - MenuMitra Financial Control Center | Cash Flow Tracking & Expense Management",
  description: "Streamline your restaurant's financial operations with MenuMitra's comprehensive money management system. Track cash flow, manage expenses, and optimize your financial performance with real-time insights, cash handling, expense tracking, and financial reporting.",
  keywords: [
    "money management",
    "restaurant financial management",
    "cash flow tracking",
    "expense management",
    "financial reporting",
    "restaurant cash handling",
    "budget monitoring",
    "financial analytics",
    "restaurant profitability",
    "expense categorization",
    "financial control center",
    "restaurant financial operations",
    "cash management system",
    "financial performance optimization",
    "restaurant accounting",
    "multi-location financial management",
    "financial insights",
    "restaurant cost tracking",
    "financial decision making",
    "restaurant financial optimization"
  ],
  
  openGraph: {
    title: "Money Management - MenuMitra Financial Control Center",
    description: "Streamline your restaurant's financial operations with MenuMitra's comprehensive money management system. Track cash flow, manage expenses, and optimize your financial performance with real-time insights.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Money Management - Financial Control Center',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Money Management - MenuMitra Financial Control Center",
    description: "Streamline your restaurant's financial operations with comprehensive money management system. Track cash flow, manage expenses, and optimize financial performance.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'addon:category': 'financial_management',
    'addon:type': 'money_management_system',
    'addon:target_users': 'restaurant_owners, managers, accountants',
    'addon:capabilities': 'cash_flow_tracking, expense_management, financial_reporting, budget_monitoring',
    'addon:benefits': 'improve_cash_flow, track_expenses, generate_reports, optimize_profitability',
    'addon:features': 'cash_handling, expense_categorization, financial_analytics, multi_location_consolidation',
    'addon:scalability': 'single_location_to_multiple_outlets',
    'addon:control': 'financial_control, accurate_records, informed_decisions',
    'addon:insights': 'data_driven_insights, cost_saving_opportunities, profitability_optimization',
    'addon:reporting': 'financial_reports, stakeholder_reporting, performance_analytics',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function MoneyManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
