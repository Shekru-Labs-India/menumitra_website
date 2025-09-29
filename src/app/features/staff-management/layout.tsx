import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Staff Management - MenuMitra Restaurant Workforce Optimization | Scheduling, Payroll & Performance Tracking",
  description: "Streamline your restaurant's workforce management with MenuMitra's comprehensive staff management system. Handle scheduling, payroll, performance tracking, and employee development in one centralized platform. Optimize labor costs and improve employee satisfaction.",
  keywords: [
    "staff management",
    "restaurant workforce management",
    "employee scheduling",
    "payroll management",
    "performance tracking",
    "staff scheduling system",
    "restaurant staff management",
    "workforce optimization",
    "employee development",
    "time tracking",
    "attendance monitoring",
    "labor cost optimization",
    "restaurant HR management",
    "staff performance evaluation",
    "employee feedback systems",
    "restaurant scheduling software",
    "workforce analytics",
    "staff retention",
    "restaurant operations management",
    "employee satisfaction"
  ],
  
  openGraph: {
    title: "Staff Management - MenuMitra Restaurant Workforce Optimization",
    description: "Streamline your restaurant's workforce management with MenuMitra's comprehensive staff management system. Handle scheduling, payroll, performance tracking, and employee development.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Staff Management - Workforce Optimization Platform',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Staff Management - MenuMitra Restaurant Workforce Optimization",
    description: "Streamline your restaurant's workforce management with scheduling, payroll, performance tracking, and employee development in one platform.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'staff_management',
    'feature:type': 'workforce_optimization_system',
    'feature:capabilities': 'scheduling, payroll, performance_tracking, time_attendance, employee_development',
    'feature:benefits': 'optimize_labor_costs, improve_employee_satisfaction, maintain_service_quality, streamline_payroll',
    'feature:scalability': 'small_team_to_large_workforce',
    'feature:automation': 'automated_scheduling, shift_management, performance_evaluation',
    'feature:compliance': 'payroll_compliance, labor_regulations',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function StaffManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
