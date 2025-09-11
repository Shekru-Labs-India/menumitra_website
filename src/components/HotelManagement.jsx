import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand6 from "../assets/images/mm_brand/06.webp";
import varunImage from "../assets/images/Varun.webp";

const HotelManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Hotel Management data for ManagementPageLayout
  const hotelManagementData = {
    title: "Hotel Management",
    description: "Comprehensive Hotel Management Solution",
    keywords: "Hotel Management, Hotel POS, Menu Mitra, Hospitality Management, Hotel Operations",
    
    // Hero Section
    heroImage: brand6,
    heroTitle: "Comprehensive Hotel Management Solution",
    heroDescription: "Streamline your hotel operations with our all-in-one management system designed specifically for the hospitality industry. Manage rooms, reservations, restaurant operations, and guest services from a single integrated platform.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Hotel Management Features",
    featuresSubtitle: "Comprehensive tools to manage your hotel's operations and guest services",
    features: [
      {
        icon: "fas fa-building-columns",
        title: "Room Management",
        description: "Manage room inventory, availability, pricing, and maintenance schedules efficiently.",
        color: "#007bff"
      },
      {
        icon: "fas fa-calendar-check",
        title: "Reservation System",
        description: "Handle bookings, check-ins, check-outs, and guest management seamlessly.",
        color: "#28a745"
      },
      {
        icon: "fas fa-utensils",
        title: "Restaurant Integration",
        description: "Integrate hotel restaurant operations with room service and dining management.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-users",
        title: "Guest Services",
        description: "Manage guest requests, housekeeping, concierge services, and guest communication.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-chart-line",
        title: "Revenue Management",
        description: "Track revenue from rooms, restaurants, and services with comprehensive analytics.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-bell",
        title: "Operational Alerts",
        description: "Receive alerts for maintenance needs, guest requests, and operational issues.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Hotel Operations",
    operationsSubtitle: "Streamline complex hotel operations with intelligent automation",
    operations: [
      {
        icon: "fas fa-bed",
        title: "Housekeeping Management",
        description: "Schedule and track housekeeping tasks, room cleaning, and maintenance activities.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-concierge-bell",
        title: "Concierge Services",
        description: "Manage guest requests, local recommendations, and personalized service delivery.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-car",
        title: "Transportation Services",
        description: "Coordinate airport transfers, local transportation, and guest pickup services.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-gift",
        title: "Event Management",
        description: "Plan and manage hotel events, conferences, and special guest services.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Hotel Analytics",
    intelligenceDescription: "Make data-driven decisions about your hotel's operations with comprehensive analytics and insights.",
    intelligenceImage: brand6,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Occupancy Reports",
        description: "Track room occupancy and revenue",
        color: "text-primary"
      },
      {
        icon: "fas fa-star",
        title: "Guest Satisfaction",
        description: "Monitor guest satisfaction and reviews",
        color: "text-success"
      },
      {
        icon: "fas fa-dollar-sign",
        title: "Revenue Analytics",
        description: "Analyze revenue streams and profitability",
        color: "text-info"
      },
      {
        icon: "fas fa-users",
        title: "Guest Analytics",
        description: "Understand guest behavior and preferences",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Hotel Integration",
    integrationSubtitle: "Connect hotel systems with external services for unified operations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Channel Management",
        description: "Integrate with booking channels, OTAs, and distribution systems for seamless reservations."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Leverage cloud infrastructure for scalable hotel operations and data management."
      },
      {
        icon: "fas fa-sync",
        title: "Real-Time Sync",
        description: "Synchronize data across hotel departments and external systems in real-time."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how hotels are transforming operations with MenuMitra hotel management",
    successStories: [
      {
        name: "The Grand Hotel",
        location: "Mumbai",
        testimonial: "MenuMitra's hotel management system improved our operational efficiency by 55% and enhanced guest satisfaction significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Hotel",
        location: "Delhi",
        testimonial: "The integrated restaurant and room service features helped us streamline operations and improve guest experience.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Hotel",
        location: "Bangalore",
        testimonial: "MenuMitra's hotel solution enabled us to manage multiple properties efficiently and maintain consistent service quality.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Transform Your Hotel Operations?",
    ctaDescription: "Join hotels already using MenuMitra to streamline operations and enhance guest experience.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "hotel-management"
  };

  return (
    <>
      <Helmet>
        <title>Hotel Management - MenuMitra</title>
        <meta name="description" content="Comprehensive hotel management solutions" />
        <meta name="keywords" content={hotelManagementData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...hotelManagementData} />
    </>
  );
};

export default HotelManagement;
