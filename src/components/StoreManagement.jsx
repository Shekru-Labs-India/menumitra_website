import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from "./ManagementPageLayout";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.webp";
import brand2 from "../assets/images/mm_brand/02.webp";
import brand3 from "../assets/images/mm_brand/03.webp";
import brand4 from "../assets/images/mm_brand/04.webp";
import brand5 from "../assets/images/mm_brand/05.webp";
import brand6 from "../assets/images/mm_brand/06.webp";

const StoreManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const storeManagementData = {
    title: "Store Management",
    description: "Comprehensive store management solutions for restaurants",
    keywords: "Store Management, Restaurant Management, Menu Mitra, POS, Inventory Management",
    heroImage: brand1,
    heroTitle: "Complete Store Management Solution",
    heroDescription: "Streamline your restaurant operations with our comprehensive store management system. Manage inventory, track sales, monitor staff performance, and optimize your business operations all from one centralized platform.",
    featuresTitle: "Comprehensive Store Management Features",
    featuresSubtitle: "Everything you need to manage your restaurant operations efficiently",
    features: [
      {
        icon: "fas fa-store",
        color: "#007bff",
        title: "Multi-Store Management",
        description: "Manage multiple restaurant locations from a single dashboard. Monitor performance, inventory, and operations across all your stores with centralized control."
      },
      {
        icon: "fas fa-chart-line",
        color: "#28a745",
        title: "Real-time Analytics",
        description: "Get instant insights into your store performance with real-time analytics, sales reports, and business intelligence dashboards."
      },
      {
        icon: "fas fa-cogs",
        color: "#ffc107",
        title: "Automated Operations",
        description: "Automate routine tasks, inventory alerts, staff scheduling, and operational workflows to improve efficiency and reduce manual errors."
      },
      {
        icon: "fas fa-mobile-alt",
        color: "#17a2b8",
        title: "Mobile Management",
        description: "Access your store management tools anywhere with our mobile app. Monitor operations, approve orders, and manage staff on the go."
      },
      {
        icon: "fas fa-shield-alt",
        color: "#dc3545",
        title: "Security & Compliance",
        description: "Ensure data security and compliance with industry standards. Secure access controls, audit trails, and data encryption."
      },
      {
        icon: "fas fa-headset",
        color: "#6f42c1",
        title: "24/7 Support",
        description: "Get round-the-clock support for your store management needs. Our dedicated team is always ready to help you succeed."
      }
    ],
    operationsTitle: "Advanced Store Operations",
    operationsSubtitle: "Streamline complex operations with intelligent automation",
    operations: [
      {
        icon: "fas fa-cash-register",
        bgColor: "bg-primary",
        title: "Smart POS Integration",
        description: "Seamlessly integrate with multiple POS terminals across all stores. Centralized billing, payment processing, and transaction management."
      },
      {
        icon: "fas fa-boxes",
        bgColor: "bg-success",
        title: "Centralized Inventory",
        description: "Real-time inventory tracking across all locations. Automated stock alerts, supplier management, and waste reduction."
      },
      {
        icon: "fas fa-users",
        bgColor: "bg-warning",
        title: "Staff Management",
        description: "Manage staff across multiple locations with role-based access, attendance tracking, and performance monitoring."
      },
      {
        icon: "fas fa-clipboard-list",
        bgColor: "bg-secondary",
        title: "Order Management",
        description: "Efficiently handle dine-in, takeout, and delivery orders. Kitchen display systems (KDS) and order routing."
      }
    ],
    intelligenceTitle: "Powerful Business Intelligence",
    intelligenceDescription: "Make data-driven decisions with comprehensive analytics and reporting tools designed for multi-store operations.",
    intelligenceImage: brand2,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        color: "text-primary",
        title: "Sales Analytics",
        description: "Track performance across all stores"
      },
      {
        icon: "fas fa-trending-up",
        color: "text-success",
        title: "Growth Metrics",
        description: "Monitor business growth patterns"
      },
      {
        icon: "fas fa-clock",
        color: "text-warning",
        title: "Peak Hours",
        description: "Identify busy periods and trends"
      },
      {
        icon: "fas fa-star",
        color: "text-info",
        title: "Customer Insights",
        description: "Understand customer behavior"
      }
    ],
    integrationTitle: "Seamless Integration & Scalability",
    integrationSubtitle: "Connect with your existing tools and scale as you grow",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Third-Party Integrations",
        description: "Connect with 100+ apps including Zomato, Swiggy, payment gateways, and accounting software."
      },
      {
        icon: "fas fa-expand-arrows-alt",
        title: "Unlimited Scalability",
        description: "Scale from single outlet to enterprise-level operations with flexible pricing and feature packages."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Reliable cloud-based infrastructure ensures 99.9% uptime and automatic backups."
      }
    ],
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their operations with MenuMitra",
    successStories: [
      {
        image: brand3,
        name: "Fine Dining Chain",
        location: "15+ Locations",
        testimonial: "MenuMitra helped us reduce operational costs by 30% and improve customer satisfaction across all our locations.",
        rating: "5.0"
      },
      {
        image: brand4,
        name: "QSR Franchise",
        location: "50+ Outlets",
        testimonial: "Centralized management across all outlets has improved our efficiency and reduced training time for new staff.",
        rating: "4.9"
      },
      {
        image: brand5,
        name: "Cafe Chain",
        location: "25+ Locations",
        testimonial: "Real-time analytics and inventory management have helped us reduce waste and increase profitability significantly.",
        rating: "4.8"
      }
    ],
    ctaTitle: "Ready to Transform Your Store Management?",
    ctaDescription: "Join thousands of restaurants already using MenuMitra to streamline their operations and boost profitability.",
    pageClassName: "store-management-page"
  };

  return (
    <>
      <Helmet>
        <title>Store Management - MenuMitra</title>
        <meta name="description" content={storeManagementData.description} />
        <meta name="keywords" content={storeManagementData.keywords} />
      </Helmet>
      <ManagementPageLayout {...storeManagementData} />
    </>
  );
};

export default StoreManagement;
