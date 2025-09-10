import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand5 from "../assets/images/mm_brand/05.png";
import varunImage from "../assets/images/Varun.jpg";

const CustomisedSolution = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Customised Solution data for ManagementPageLayout
  const customisedSolutionData = {
    title: "Customised Solution",
    description: "Tailored Customised Solutions",
    keywords: "Customised Solution, Tailored Solutions, Restaurant Customization, Menu Mitra, Bespoke Solutions",
    
    // Hero Section
    heroImage: brand5,
    heroTitle: "Tailored Customised Solutions",
    heroDescription: "Get a restaurant management solution that's perfectly tailored to your unique business needs. Our customised solutions are designed to fit your specific requirements, workflows, and operational preferences for maximum efficiency and growth.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Customised Solution Features",
    featuresSubtitle: "Comprehensive tools to create the perfect solution for your restaurant",
    features: [
      {
        icon: "fas fa-cogs",
        title: "Bespoke Development",
        description: "Custom-built features and modules designed specifically for your restaurant's unique requirements.",
        color: "#007bff"
      },
      {
        icon: "fas fa-puzzle-piece",
        title: "Modular Integration",
        description: "Seamlessly integrate with your existing systems and third-party applications.",
        color: "#28a745"
      },
      {
        icon: "fas fa-palette",
        title: "Brand Customization",
        description: "Customize the interface, colors, and branding to match your restaurant's identity.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-tools",
        title: "Workflow Optimization",
        description: "Optimize workflows and processes to match your specific operational needs.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-headset",
        title: "Dedicated Support",
        description: "Get dedicated support and maintenance for your customised solution.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-rocket",
        title: "Scalable Architecture",
        description: "Build on a scalable platform that grows with your business needs.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Customization Operations",
    operationsSubtitle: "Streamline complex customization processes with intelligent automation",
    operations: [
      {
        icon: "fas fa-code",
        title: "Custom Development",
        description: "Develop custom features, integrations, and modules tailored to your specific needs.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-database",
        title: "Data Migration",
        description: "Seamlessly migrate data from existing systems with minimal downtime and data loss.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-cog",
        title: "API Integration",
        description: "Create custom API integrations with third-party services and existing software.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Training & Support",
        description: "Provide comprehensive training and ongoing support for your customised solution.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Customization Analytics",
    intelligenceDescription: "Monitor and optimize your customised solution with comprehensive analytics and insights.",
    intelligenceImage: brand5,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Performance Metrics",
        description: "Track system performance and efficiency",
        color: "text-primary"
      },
      {
        icon: "fas fa-users",
        title: "User Adoption",
        description: "Monitor user adoption and engagement",
        color: "text-success"
      },
      {
        icon: "fas fa-cogs",
        title: "Custom Features",
        description: "Analyze usage of custom features",
        color: "text-info"
      },
      {
        icon: "fas fa-trending-up",
        title: "ROI Tracking",
        description: "Track return on investment for customizations",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Custom Integration",
    integrationSubtitle: "Connect customised solutions with existing systems for unified operations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "System Integration",
        description: "Integrate with existing POS, accounting, and management systems seamlessly."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud Infrastructure",
        description: "Leverage cloud infrastructure for scalable customised solutions and data storage."
      },
      {
        icon: "fas fa-sync",
        title: "Real-Time Sync",
        description: "Synchronize data across customised modules and existing systems in real-time."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming operations with MenuMitra customised solutions",
    successStories: [
      {
        name: "The Custom Kitchen",
        location: "Mumbai",
        testimonial: "MenuMitra's customised solution perfectly matched our unique workflow and increased our efficiency by 65%.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Custom",
        location: "Delhi",
        testimonial: "The tailored features and integrations helped us streamline operations and reduce manual work significantly.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Custom",
        location: "Bangalore",
        testimonial: "MenuMitra's customised solution enabled us to maintain our unique brand identity while improving operations.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready for a Customised Solution?",
    ctaDescription: "Join restaurants already using MenuMitra customised solutions to create the perfect system for your business.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "customised-solution"
  };

  return (
    <>
      <Helmet>
        <title>Customised Solution - MenuMitra</title>
        <meta name="description" content="Tailored customised solutions for restaurants" />
        <meta name="keywords" content={customisedSolutionData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...customisedSolutionData} />
    </>
  );
};

export default CustomisedSolution;
