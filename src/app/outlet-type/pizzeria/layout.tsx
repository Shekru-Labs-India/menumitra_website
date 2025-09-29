import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pizzeria Management - MenuMitra Pizza Operations Excellence | Order Management & Kitchen Optimization",
  description: "Streamline your pizzeria operations with MenuMitra's specialized management system. Manage pizza orders, track ingredients, and optimize your kitchen workflow for maximum efficiency. Order management, ingredient tracking, and kitchen optimization to serve delicious pizzas quickly and consistently.",
  keywords: [
    "pizzeria management",
    "pizza operations excellence",
    "order management",
    "kitchen optimization",
    "pizzeria system",
    "pizza order management",
    "ingredient tracking",
    "dough management",
    "kitchen workflow",
    "delivery coordination",
    "pickup coordination",
    "pizza customization",
    "pizzeria operations",
    "pizza chain management",
    "traditional pizzeria",
    "modern pizza chain",
    "pizza quality",
    "customer satisfaction",
    "pizza preparation",
    "pizzeria software"
  ],
  
  openGraph: {
    title: "Pizzeria Management - MenuMitra Pizza Operations Excellence",
    description: "Streamline your pizzeria operations with MenuMitra's specialized management system. Manage pizza orders, track ingredients, and optimize your kitchen workflow for maximum efficiency.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Pizzeria Management - Pizza Operations Excellence',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Pizzeria Management - MenuMitra Pizza Operations Excellence",
    description: "Streamline your pizzeria operations with specialized management system. Manage pizza orders, track ingredients, and optimize your kitchen workflow for maximum efficiency.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'outlet:category': 'pizzeria_management',
    'outlet:type': 'pizza_operations_excellence',
    'outlet:target_users': 'pizzeria_owners, pizza_chain_managers, pizza_operators',
    'outlet:capabilities': 'order_management, ingredient_tracking, kitchen_optimization, delivery_coordination',
    'outlet:benefits': 'reduce_preparation_time, maintain_quality, optimize_ingredients, enhance_satisfaction',
    'outlet:features': 'pizza_customization, dough_management, workflow_optimization, pickup_delivery',
    'outlet:scalability': 'traditional_pizzeria_to_modern_pizza_chain',
    'outlet:specialization': 'pizza_operations, ingredient_management, kitchen_workflow, order_processing',
    'outlet:operations': 'order_management, ingredient_tracking, kitchen_optimization, delivery_coordination',
    'outlet:quality': 'consistent_pizza_quality, faster_service, customer_satisfaction, operational_efficiency',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function PizzeriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
