import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand1 from "../assets/images/mm_brand/01.webp";
import varunImage from "../assets/images/Varun.webp";

const PointOfSale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Point of Sale data for ManagementPageLayout
  const pointOfSaleData = {
    title: "Point of Sale",
    description: "Advanced Point of Sale System",
    keywords: "Point of Sale, POS System, Restaurant POS, Menu Mitra, Payment Processing",
    
    // Hero Section
    heroImage: brand1,
    heroTitle: "Advanced Point of Sale System",
    heroDescription: "Streamline your restaurant operations with our comprehensive Point of Sale system. Process orders, handle payments, manage tables, and generate reports with our user-friendly and feature-rich POS solution.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Point of Sale Features",
    featuresSubtitle: "Comprehensive tools to streamline your restaurant's point of sale operations",
    features: [
      {
        icon: "fas fa-cash-register",
        title: "Quick Order Processing",
        description: "Process orders quickly with intuitive interface, customizable layouts, and fast menu navigation.",
        color: "#007bff"
      },
      {
        icon: "fas fa-credit-card",
        title: "Multiple Payment Options",
        description: "Accept cash, cards, digital wallets, and mobile payments with integrated payment processing.",
        color: "#28a745"
      },
      {
        icon: "fas fa-table",
        title: "Table Management",
        description: "Manage table assignments, split bills, merge tables, and track table status in real-time.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-percentage",
        title: "Discounts & Coupons",
        description: "Apply discounts, promotional offers, and coupon codes with flexible pricing rules.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-receipt",
        title: "Receipt Management",
        description: "Generate professional receipts, email invoices, and maintain transaction history.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-chart-line",
        title: "Sales Analytics",
        description: "Track sales performance, popular items, and revenue trends with detailed analytics.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced POS Operations",
    operationsSubtitle: "Streamline complex point of sale processes with intelligent automation",
    operations: [
      {
        icon: "fas fa-mobile-alt",
        title: "Mobile POS",
        description: "Take orders and process payments anywhere in your restaurant with mobile POS capabilities.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-print",
        title: "Kitchen Integration",
        description: "Seamlessly integrate with kitchen display systems for efficient order management and preparation.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-barcode",
        title: "Inventory Integration",
        description: "Automatically update inventory levels with each sale and track stock movements in real-time.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-user-friends",
        title: "Multi-User Support",
        description: "Support multiple cashiers with individual login credentials and role-based access control.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart POS Analytics",
    intelligenceDescription: "Make data-driven decisions about your restaurant's sales performance with comprehensive analytics and insights.",
    intelligenceImage: brand1,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Sales Reports",
        description: "Generate detailed sales reports and analytics",
        color: "text-primary"
      },
      {
        icon: "fas fa-clock",
        title: "Peak Hour Analysis",
        description: "Identify peak hours and optimize staffing",
        color: "text-success"
      },
      {
        icon: "fas fa-star",
        title: "Popular Items",
        description: "Track best-selling items and trends",
        color: "text-info"
      },
      {
        icon: "fas fa-dollar-sign",
        title: "Revenue Tracking",
        description: "Monitor daily, weekly, and monthly revenue",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless POS Integration",
    integrationSubtitle: "Connect with existing systems and payment processors for unified operations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Payment Gateway Integration",
        description: "Integrate with multiple payment gateways and processors for secure transaction handling."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud-Based System",
        description: "Access your POS system from anywhere with cloud-based infrastructure and automatic backups."
      },
      {
        icon: "fas fa-sync",
        title: "Real-Time Sync",
        description: "Synchronize data across multiple terminals and locations in real-time for consistent operations."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their operations with MenuMitra POS",
    successStories: [
      {
        name: "The Spice Kitchen",
        location: "Mumbai",
        testimonial: "MenuMitra's POS system reduced our order processing time by 50% and improved customer satisfaction significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Central",
        location: "Delhi",
        testimonial: "The table management and payment integration features have streamlined our operations and reduced errors by 80%.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Corner",
        location: "Bangalore",
        testimonial: "MenuMitra's analytics helped us identify our best-selling items and optimize our menu for better profitability.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Upgrade Your POS System?",
    ctaDescription: "Join restaurants already using MenuMitra to streamline their point of sale operations and boost efficiency.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "point-of-sale"
  };

  return (
    <>
      <Helmet>
        <title>Point of Sale System - MenuMitra</title>
        <meta name="description" content="Advanced Point of Sale system for restaurants" />
        <meta name="keywords" content={pointOfSaleData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...pointOfSaleData} />
    </>
  );
};

export default PointOfSale;
