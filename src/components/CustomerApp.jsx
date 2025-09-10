import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand4 from "../assets/images/mm_brand/04.png";
import varunImage from "../assets/images/Varun.jpg";

const CustomerApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Customer App data for ManagementPageLayout
  const customerAppData = {
    title: "Customer App",
    description: "Customer-Facing Mobile Application",
    keywords: "Customer App, Restaurant Customer App, Menu Mitra, Customer Experience, Mobile Ordering",
    
    // Hero Section
    heroImage: brand4,
    heroTitle: "Customer-Facing Mobile Application",
    heroDescription: "Enhance your customers' dining experience with our dedicated customer app. Enable mobile ordering, table reservations, loyalty programs, and seamless payment options to increase customer satisfaction and engagement.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Customer App Features",
    featuresSubtitle: "Comprehensive tools to enhance your customers' dining experience",
    features: [
      {
        icon: "fas fa-user-group",
        title: "Mobile Ordering",
        description: "Allow customers to browse menus, place orders, and customize items directly from their mobile devices.",
        color: "#007bff"
      },
      {
        icon: "fas fa-calendar-check",
        title: "Table Reservations",
        description: "Enable customers to book tables, select preferred times, and receive confirmation notifications.",
        color: "#28a745"
      },
      {
        icon: "fas fa-star",
        title: "Loyalty Program",
        description: "Reward loyal customers with points, discounts, and exclusive offers through integrated loyalty system.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-qrcode",
        title: "QR Code Ordering",
        description: "Enable contactless ordering with QR codes placed on tables for a safe dining experience.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-credit-card",
        title: "Digital Payments",
        description: "Accept various payment methods including cards, digital wallets, and mobile payments.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-comments",
        title: "Feedback System",
        description: "Collect customer feedback, ratings, and reviews to improve service quality and customer satisfaction.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Customer Operations",
    operationsSubtitle: "Streamline customer experience with intelligent automation",
    operations: [
      {
        icon: "fas fa-bell",
        title: "Push Notifications",
        description: "Send personalized notifications about offers, order status, and restaurant updates.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-gift",
        title: "Reward Management",
        description: "Automatically track and manage customer rewards, points, and redemption programs.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-map-marker-alt",
        title: "Location Services",
        description: "Use GPS for delivery tracking, location-based offers, and restaurant finder.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-share-alt",
        title: "Social Sharing",
        description: "Enable customers to share their dining experience and reviews on social media.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Customer Analytics",
    intelligenceDescription: "Understand customer behavior and preferences with comprehensive analytics and insights.",
    intelligenceImage: brand4,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Customer Insights",
        description: "Analyze customer behavior and preferences",
        color: "text-primary"
      },
      {
        icon: "fas fa-heart",
        title: "Satisfaction Tracking",
        description: "Track customer satisfaction and loyalty",
        color: "text-success"
      },
      {
        icon: "fas fa-shopping-cart",
        title: "Order Patterns",
        description: "Identify popular items and ordering patterns",
        color: "text-info"
      },
      {
        icon: "fas fa-star",
        title: "Review Analytics",
        description: "Monitor reviews and ratings trends",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Customer Integration",
    integrationSubtitle: "Connect customer app with restaurant systems for unified experience",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "POS Integration",
        description: "Integrate customer orders directly with your POS system for seamless processing."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Leverage cloud infrastructure for scalable customer app performance and reliability."
      },
      {
        icon: "fas fa-sync",
        title: "Real-Time Sync",
        description: "Synchronize customer data and orders across all systems in real-time."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are enhancing customer experience with MenuMitra customer app",
    successStories: [
      {
        name: "The Customer Cafe",
        location: "Mumbai",
        testimonial: "MenuMitra's customer app increased our customer engagement by 70% and improved order accuracy significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Experience",
        location: "Delhi",
        testimonial: "The loyalty program and mobile ordering features helped us retain customers and increase repeat visits.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Customer",
        location: "Bangalore",
        testimonial: "MenuMitra's customer app enabled us to offer contactless dining and improve customer satisfaction ratings.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Enhance Customer Experience?",
    ctaDescription: "Join restaurants already using MenuMitra customer app to boost customer satisfaction and engagement.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "customer-app"
  };

  return (
    <>
      <Helmet>
        <title>Customer App - MenuMitra</title>
        <meta name="description" content="Customer-facing mobile application for restaurants" />
        <meta name="keywords" content={customerAppData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...customerAppData} />
    </>
  );
};

export default CustomerApp;
