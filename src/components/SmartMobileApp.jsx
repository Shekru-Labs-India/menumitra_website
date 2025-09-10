import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand2 from "../assets/images/mm_brand/02.png";
import varunImage from "../assets/images/Varun.jpg";

const SmartMobileApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smart Mobile App data for ManagementPageLayout
  const smartMobileAppData = {
    title: "Smart Mobile App",
    description: "Smart Mobile App for Restaurants",
    keywords: "Smart Mobile App, Restaurant Mobile App, Menu Mitra, Mobile Management",
    
    // Hero Section
    heroImage: brand2,
    heroTitle: "Smart Mobile App for Restaurants",
    heroDescription: "Take control of your restaurant operations anywhere with our intelligent mobile application. Manage orders, monitor sales, track inventory, and communicate with your team all from your smartphone or tablet.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Smart Mobile App Features",
    featuresSubtitle: "Comprehensive mobile tools to manage your restaurant operations on the go",
    features: [
      {
        icon: "fas fa-mobile-screen-button",
        title: "Mobile Order Management",
        description: "Process orders, manage tables, and handle payments directly from your mobile device.",
        color: "#007bff"
      },
      {
        icon: "fas fa-chart-line",
        title: "Real-time Analytics",
        description: "Access live sales data, performance metrics, and business insights on the go.",
        color: "#28a745"
      },
      {
        icon: "fas fa-bell",
        title: "Smart Notifications",
        description: "Receive instant alerts for low inventory, new orders, and important updates.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-users",
        title: "Staff Communication",
        description: "Communicate with your team, share updates, and coordinate operations seamlessly.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Synchronization",
        description: "Sync data across all devices and locations with real-time cloud updates.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-shield-alt",
        title: "Secure Access",
        description: "Secure login with biometric authentication and role-based access control.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Mobile Operations",
    operationsSubtitle: "Streamline complex mobile operations with intelligent automation",
    operations: [
      {
        icon: "fas fa-qrcode",
        title: "QR Code Integration",
        description: "Generate and scan QR codes for quick table service and contactless ordering.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-camera",
        title: "Photo Management",
        description: "Capture and manage photos of dishes, receipts, and inventory items.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-map-marker-alt",
        title: "Location Services",
        description: "Use GPS for delivery tracking, location-based offers, and staff management.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-sync-alt",
        title: "Offline Mode",
        description: "Continue operations even without internet connection with offline data sync.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Mobile Analytics",
    intelligenceDescription: "Make data-driven decisions about your restaurant's mobile operations with comprehensive analytics and insights.",
    intelligenceImage: brand2,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Mobile Performance",
        description: "Track mobile app usage and performance",
        color: "text-primary"
      },
      {
        icon: "fas fa-clock",
        title: "Response Time",
        description: "Monitor response times and efficiency",
        color: "text-success"
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Device Analytics",
        description: "Analyze device usage patterns",
        color: "text-info"
      },
      {
        icon: "fas fa-wifi",
        title: "Connectivity Insights",
        description: "Track connectivity and sync performance",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Mobile Integration",
    integrationSubtitle: "Connect mobile app with existing systems for unified operations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "System Integration",
        description: "Integrate mobile app with POS systems, kitchen displays, and inventory management."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Leverage cloud infrastructure for scalable mobile operations and data storage."
      },
      {
        icon: "fas fa-sync",
        title: "Real-Time Sync",
        description: "Synchronize data across mobile devices and desktop systems in real-time."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming operations with MenuMitra mobile app",
    successStories: [
      {
        name: "The Mobile Kitchen",
        location: "Mumbai",
        testimonial: "MenuMitra's mobile app increased our operational efficiency by 60% and improved staff coordination significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Mobile",
        location: "Delhi",
        testimonial: "The real-time analytics and notifications helped us respond faster to customer needs and optimize our operations.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Mobile",
        location: "Bangalore",
        testimonial: "MenuMitra's mobile solution enabled us to manage multiple locations efficiently from a single device.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Go Mobile?",
    ctaDescription: "Join restaurants already using MenuMitra mobile app to streamline operations and boost efficiency on the go.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "smart-mobile-app"
  };

  return (
    <>
      <Helmet>
        <title>Smart Mobile App - MenuMitra</title>
        <meta name="description" content="Smart mobile application for restaurant management" />
        <meta name="keywords" content={smartMobileAppData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...smartMobileAppData} />
    </>
  );
};

export default SmartMobileApp;
