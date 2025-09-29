import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Recipe Management - MenuMitra Digital Recipe Library | Standardize Kitchen Operations & Food Cost Control",
  description: "Standardize your kitchen operations with MenuMitra's comprehensive recipe management system. Create, store, and share recipes with detailed instructions, ingredients, and nutritional information. Maintain consistency across all locations and calculate accurate food costs.",
  keywords: [
    "recipe management",
    "digital recipe library",
    "kitchen operations standardization",
    "restaurant recipe system",
    "food cost calculation",
    "ingredient tracking",
    "nutritional information management",
    "allergen management",
    "recipe version control",
    "kitchen consistency",
    "restaurant recipe database",
    "food preparation standardization",
    "recipe cost tracking",
    "kitchen efficiency",
    "restaurant quality control",
    "recipe sharing system",
    "food waste reduction",
    "portion control",
    "staff training recipes",
    "restaurant operations optimization"
  ],
  
  openGraph: {
    title: "Recipe Management - MenuMitra Digital Recipe Library",
    description: "Standardize your kitchen operations with MenuMitra's comprehensive recipe management system. Create, store, and share recipes with detailed instructions, ingredients, and nutritional information.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Recipe Management - Digital Recipe Library System',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Recipe Management - MenuMitra Digital Recipe Library",
    description: "Standardize your kitchen operations with comprehensive recipe management. Create, store, and share recipes with detailed instructions, ingredients, and nutritional information.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
  
  other: {
    'feature:category': 'recipe_management',
    'feature:type': 'digital_recipe_library_system',
    'feature:capabilities': 'recipe_creation, ingredient_tracking, cost_calculation, nutritional_info, version_control',
    'feature:benefits': 'maintain_consistency, reduce_waste, improve_efficiency, optimize_food_costs',
    'feature:standardization': 'kitchen_operations, food_quality, portion_control',
    'feature:training': 'staff_instructions, detailed_guidelines',
    'feature:cost_control': 'accurate_food_costs, ingredient_tracking, waste_reduction',
    'feature:compliance': 'nutritional_info, allergen_management',
    'cta:primary': 'Book Demo Now',
    'cta:secondary': 'Get Started',
  },
};

export default function RecipeManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
