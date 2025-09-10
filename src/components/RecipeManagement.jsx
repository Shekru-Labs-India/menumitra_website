import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from "./ManagementPageLayout";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";

const RecipeManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const recipeManagementData = {
    title: "Recipe Management",
    description: "Advanced recipe management system for restaurants",
    keywords: "Recipe Management, Restaurant Recipes, Menu Mitra, Food Costing, Inventory",
    heroImage: brand2,
    heroTitle: "Advanced Recipe Management System",
    heroDescription: "Master your kitchen operations with our comprehensive recipe management system. Standardize recipes, calculate food costs, manage portion sizes, and ensure consistent quality across all your dishes.",
    featuresTitle: "Comprehensive Recipe Management Features",
    featuresSubtitle: "Everything you need to manage your kitchen operations efficiently",
    features: [
      {
        icon: "fas fa-book",
        color: "#007bff",
        title: "Recipe Standardization",
        description: "Create standardized recipes with precise ingredients, measurements, and cooking instructions for consistent quality across all dishes."
      },
      {
        icon: "fas fa-calculator",
        color: "#28a745",
        title: "Food Costing",
        description: "Automatically calculate food costs, profit margins, and pricing based on current ingredient prices and market fluctuations."
      },
      {
        icon: "fas fa-balance-scale",
        color: "#ffc107",
        title: "Portion Control",
        description: "Manage portion sizes and yield calculations to minimize waste, maintain consistency, and optimize profitability."
      },
      {
        icon: "fas fa-clipboard-list",
        color: "#17a2b8",
        title: "Ingredient Management",
        description: "Track ingredient usage, nutritional information, allergen data, and supplier details for comprehensive recipe management."
      },
      {
        icon: "fas fa-utensils",
        color: "#dc3545",
        title: "Menu Integration",
        description: "Seamlessly integrate recipes with your menu items, inventory management, and kitchen display systems for streamlined operations."
      },
      {
        icon: "fas fa-chart-pie",
        color: "#6f42c1",
        title: "Analytics & Reports",
        description: "Generate detailed reports on recipe performance, cost analysis, profitability insights, and kitchen efficiency metrics."
      }
    ],
    operationsTitle: "Advanced Recipe Operations",
    operationsSubtitle: "Streamline complex kitchen operations with intelligent recipe management",
    operations: [
      {
        icon: "fas fa-cogs",
        bgColor: "bg-primary",
        title: "Automated Costing",
        description: "Automatically calculate recipe costs based on current ingredient prices, supplier rates, and market fluctuations for accurate pricing."
      },
      {
        icon: "fas fa-leaf",
        bgColor: "bg-success",
        title: "Nutritional Analysis",
        description: "Track nutritional information, calories, allergens, and dietary restrictions for each recipe to meet customer requirements."
      },
      {
        icon: "fas fa-users",
        bgColor: "bg-warning",
        title: "Chef Collaboration",
        description: "Enable chef collaboration with recipe sharing, version control, and approval workflows for consistent quality across locations."
      },
      {
        icon: "fas fa-clock",
        bgColor: "bg-secondary",
        title: "Prep Time Management",
        description: "Optimize kitchen workflow with prep time tracking, cooking schedules, and resource allocation for maximum efficiency."
      }
    ],
    intelligenceTitle: "Intelligent Recipe Analytics",
    intelligenceDescription: "Make data-driven decisions with comprehensive recipe analytics and performance insights designed for culinary excellence.",
    intelligenceImage: brand3,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        color: "text-primary",
        title: "Cost Analysis",
        description: "Track recipe profitability and margins"
      },
      {
        icon: "fas fa-trending-up",
        color: "text-success",
        title: "Popularity Metrics",
        description: "Monitor recipe performance and trends"
      },
      {
        icon: "fas fa-clock",
        color: "text-warning",
        title: "Prep Efficiency",
        description: "Optimize kitchen preparation times"
      },
      {
        icon: "fas fa-star",
        color: "text-info",
        title: "Quality Scores",
        description: "Track recipe consistency and ratings"
      }
    ],
    integrationTitle: "Seamless Recipe Integration & Scalability",
    integrationSubtitle: "Connect with your existing kitchen tools and scale as you grow",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Kitchen Integrations",
        description: "Connect with POS systems, inventory management, kitchen display systems, and supplier platforms for seamless operations."
      },
      {
        icon: "fas fa-expand-arrows-alt",
        title: "Multi-Location Support",
        description: "Scale recipe management across multiple locations with centralized control and location-specific customizations."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Recipe Storage",
        description: "Secure cloud-based recipe storage with automatic backups, version control, and 99.9% uptime guarantee."
      }
    ],
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their kitchen operations with MenuMitra Recipe Management",
    successStories: [
      {
        image: brand4,
        name: "Fine Dining Chain",
        location: "12+ Locations",
        testimonial: "MenuMitra's recipe management helped us standardize our signature dishes across all locations, reducing food costs by 25% and improving consistency.",
        rating: "5.0"
      },
      {
        image: brand5,
        name: "Cafe Franchise",
        location: "30+ Outlets",
        testimonial: "Automated food costing and nutritional tracking have helped us maintain quality standards while optimizing profitability across all our outlets.",
        rating: "4.9"
      },
      {
        image: brand6,
        name: "QSR Chain",
        location: "45+ Locations",
        testimonial: "Recipe standardization and portion control features have helped us reduce waste by 40% and maintain consistent quality across all our locations.",
        rating: "4.8"
      }
    ],
    ctaTitle: "Ready to Transform Your Recipe Management?",
    ctaDescription: "Join thousands of restaurants already using MenuMitra to streamline their kitchen operations and boost profitability.",
    pageClassName: "recipe-management-page"
  };

  return (
    <>
      <Helmet>
        <title>Recipe Management - MenuMitra</title>
        <meta name="description" content={recipeManagementData.description} />
        <meta name="keywords" content={recipeManagementData.keywords} />
      </Helmet>
      <ManagementPageLayout {...recipeManagementData} />
    </>
  );
};

export default RecipeManagement;
