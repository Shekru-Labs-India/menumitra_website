import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand6 from "../assets/images/mm_brand/06.png";
import varunImage from "../assets/images/Varun.jpg";

const ChainManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Chain management data for ManagementPageLayout
  const chainManagementData = {
    title: "Chain Management",
    description: "Multi-Location Chain Management Solution",
    keywords: "Chain Management, Multi-location, Restaurant Chain, Menu Mitra, Franchise Management",
    
    // Hero Section
    heroImage: brand6,
    heroTitle: "Multi-Location Chain Management Solution",
    heroDescription: "Scale your restaurant business across multiple locations with our comprehensive chain management system. Centralize operations, maintain brand consistency, and optimize performance across all your outlets from a single command center.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Chain Management Features",
    featuresSubtitle: "Comprehensive tools to manage and scale your restaurant chain operations",
    features: [
      {
        icon: "fas fa-link",
        title: "Centralized Control",
        description: "Manage all your restaurant locations from a single dashboard with real-time monitoring and control.",
        color: "#007bff"
      },
      {
        icon: "fas fa-project-diagram",
        title: "Performance Comparison",
        description: "Compare performance metrics across locations to identify best practices and improvement opportunities.",
        color: "#28a745"
      },
      {
        icon: "fas fa-sync",
        title: "Menu Synchronization",
        description: "Sync menus, pricing, and promotions across all locations while allowing local customization.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-users-cog",
        title: "Staff Coordination",
        description: "Coordinate staff across locations, manage transfers, and maintain consistent training standards.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-warehouse",
        title: "Inventory Distribution",
        description: "Optimize inventory distribution across locations and manage centralized purchasing.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-shield-alt",
        title: "Brand Compliance",
        description: "Ensure brand consistency and compliance with standard operating procedures across all locations.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Chain Operations",
    operationsSubtitle: "Streamline complex multi-location operations with intelligent automation",
    operations: [
      {
        icon: "fas fa-building",
        title: "Location Management",
        description: "Add, configure, and manage new locations with automated setup and standardized processes.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-chart-line",
        title: "Analytics Dashboard",
        description: "Comprehensive analytics comparing performance, sales, and operational metrics across all locations.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-cogs",
        title: "Automated Workflows",
        description: "Set up automated workflows for inventory transfers, staff scheduling, and reporting across locations.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-handshake",
        title: "Franchise Support",
        description: "Support franchise operations with standardized processes, training materials, and compliance monitoring.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Chain Analytics",
    intelligenceDescription: "Make data-driven decisions across your entire restaurant chain with comprehensive analytics and insights.",
    intelligenceImage: brand6,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Multi-Location Reports",
        description: "Generate comprehensive reports across all locations",
        color: "text-primary"
      },
      {
        icon: "fas fa-balance-scale",
        title: "Performance Benchmarking",
        description: "Compare and benchmark location performance",
        color: "text-success"
      },
      {
        icon: "fas fa-trending-up",
        title: "Growth Analytics",
        description: "Track growth patterns and expansion opportunities",
        color: "text-info"
      },
      {
        icon: "fas fa-target",
        title: "KPI Monitoring",
        description: "Monitor key performance indicators across the chain",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Chain Integration",
    integrationSubtitle: "Connect all locations and systems for unified chain management",
    integrationFeatures: [
      {
        icon: "fas fa-network-wired",
        title: "Multi-Location Sync",
        description: "Synchronize data, menus, and operations across all restaurant locations in real-time."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Scalable cloud infrastructure that grows with your chain expansion needs."
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Mobile Management",
        description: "Manage your entire chain from mobile devices with full functionality and real-time updates."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurant chains are scaling with MenuMitra",
    successStories: [
      {
        name: "Spice Garden Chain",
        location: "Mumbai, Delhi, Bangalore",
        testimonial: "MenuMitra helped us scale from 3 to 15 locations while maintaining consistent quality and operations across all outlets.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Central Group",
        location: "Multiple Cities",
        testimonial: "The centralized management system reduced our operational overhead by 40% and improved consistency across all locations.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Palace Franchise",
        location: "Pan India",
        testimonial: "MenuMitra's chain management features enabled us to maintain brand standards while supporting franchise growth across 25+ locations.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Scale Your Restaurant Chain?",
    ctaDescription: "Join successful restaurant chains already using MenuMitra to streamline operations and accelerate growth across multiple locations.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "chain-management"
  };

  return (
    <>
      <Helmet>
        <title>Chain Management - MenuMitra</title>
        <meta name="description" content="Multi-location chain management solutions for restaurants" />
        <meta name="keywords" content={chainManagementData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...chainManagementData} />
    </>
  );
};

export default ChainManagement;
