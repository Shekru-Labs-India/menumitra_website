import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from "./ManagementPageLayout";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.webp";
import brand2 from "../assets/images/mm_brand/02.webp";
import brand3 from "../assets/images/mm_brand/03.webp";
import brand4 from "../assets/images/mm_brand/04.webp";
import brand5 from "../assets/images/mm_brand/05.webp";

const UtilityManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const utilityData = {
    title: "Utility Management",
    description: "Utility management solutions for restaurants",
    keywords: "Utility Management, Restaurant Utilities, Menu Mitra, Energy Management, Cost Control",
    heroImage: brand4,
    heroTitle: "Comprehensive Utility Management Solution",
    heroDescription: "Optimize your restaurant's utility consumption and reduce operational costs with our advanced utility management system. Monitor electricity, water, gas usage, and implement smart energy-saving strategies.",
    featuresTitle: "Advanced Utility Management Features",
    featuresSubtitle: "Complete control over your restaurant's utility consumption and costs",
    features: [
      {
        icon: "fas fa-bolt",
        color: "#ffc107",
        title: "Energy Monitoring",
        description: "Track electricity consumption in real-time with smart meters and identify areas for energy optimization and cost reduction."
      },
      {
        icon: "fas fa-tint",
        color: "#17a2b8",
        title: "Water Management",
        description: "Monitor water usage patterns, detect leaks, and implement conservation strategies to reduce utility bills and environmental impact."
      },
      {
        icon: "fas fa-fire",
        color: "#dc3545",
        title: "Gas Usage Tracking",
        description: "Monitor gas consumption for cooking equipment and heating systems to optimize usage and ensure safety compliance."
      },
      {
        icon: "fas fa-chart-line",
        color: "#28a745",
        title: "Cost Analytics",
        description: "Analyze utility costs and trends with detailed reports to make informed decisions about energy efficiency investments."
      },
      {
        icon: "fas fa-bell",
        color: "#6f42c1",
        title: "Smart Alerts",
        description: "Receive real-time alerts for unusual consumption patterns, equipment malfunctions, and maintenance needs."
      },
      {
        icon: "fas fa-leaf",
        color: "#20c997",
        title: "Sustainability Reporting",
        description: "Generate comprehensive sustainability reports to track your restaurant's environmental impact and carbon footprint."
      }
    ],
    operationsTitle: "Advanced Utility Operations",
    operationsSubtitle: "Streamline utility management with intelligent automation and monitoring",
    operations: [
      {
        icon: "fas fa-thermometer-half",
        bgColor: "bg-primary",
        title: "Smart HVAC Control",
        description: "Automatically adjust heating, ventilation, and air conditioning based on occupancy and weather conditions to optimize energy usage."
      },
      {
        icon: "fas fa-lightbulb",
        bgColor: "bg-success",
        title: "Lighting Automation",
        description: "Control lighting systems with motion sensors, timers, and daylight harvesting to reduce electricity consumption."
      },
      {
        icon: "fas fa-cogs",
        bgColor: "bg-warning",
        title: "Equipment Optimization",
        description: "Monitor and optimize kitchen equipment performance to ensure maximum efficiency and minimal energy waste."
      },
      {
        icon: "fas fa-shield-alt",
        bgColor: "bg-secondary",
        title: "Predictive Maintenance",
        description: "Use AI-powered analytics to predict equipment failures and schedule maintenance before costly breakdowns occur."
      }
    ],
    intelligenceTitle: "Utility Intelligence Dashboard",
    intelligenceDescription: "Make data-driven decisions with comprehensive utility analytics and performance insights designed for restaurant cost optimization.",
    intelligenceImage: brand5,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-pie",
        color: "text-primary",
        title: "Usage Analytics",
        description: "Detailed breakdown of utility consumption patterns"
      },
      {
        icon: "fas fa-dollar-sign",
        color: "text-success",
        title: "Cost Optimization",
        description: "Identify opportunities for cost reduction"
      },
      {
        icon: "fas fa-clock",
        color: "text-warning",
        title: "Peak Usage Management",
        description: "Optimize usage during peak and off-peak hours"
      },
      {
        icon: "fas fa-trophy",
        color: "text-info",
        title: "Efficiency Benchmarking",
        description: "Compare performance against industry standards"
      }
    ],
    integrationTitle: "Seamless Utility Integration & Scalability",
    integrationSubtitle: "Connect with existing systems and scale across multiple locations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Smart Meter Integration",
        description: "Connect with smart meters, IoT sensors, and building management systems for comprehensive utility monitoring."
      },
      {
        icon: "fas fa-expand-arrows-alt",
        title: "Multi-Location Management",
        description: "Monitor and manage utilities across multiple restaurant locations with centralized control and reporting."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud-Based Analytics",
        description: "Access utility data anywhere with secure cloud storage, real-time monitoring, and automated reporting."
      }
    ],
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are reducing costs and improving efficiency with MenuMitra",
    successStories: [
      {
        image: brand1,
        name: "Fine Dining Restaurant",
        location: "Metropolitan Area",
        testimonial: "MenuMitra's utility management helped us reduce electricity costs by 35% and water usage by 28% through smart monitoring and automation.",
        rating: "5.0"
      },
      {
        image: brand2,
        name: "Restaurant Chain",
        location: "12+ Locations",
        testimonial: "Centralized utility monitoring across all locations has saved us over $50,000 annually in utility costs and improved our sustainability metrics.",
        rating: "4.9"
      },
      {
        image: brand3,
        name: "QSR Franchise",
        location: "30+ Outlets",
        testimonial: "Predictive maintenance alerts have prevented costly equipment failures and reduced downtime by 60% across our franchise network.",
        rating: "4.8"
      }
    ],
    ctaTitle: "Ready to Optimize Your Utility Costs?",
    ctaDescription: "Join thousands of restaurants already using MenuMitra to reduce utility costs, improve efficiency, and enhance sustainability.",
    pageClassName: "utility-management-page"
  };

  return (
    <>
      <Helmet>
        <title>Utility Management - MenuMitra</title>
        <meta name="description" content={utilityData.description} />
        <meta name="keywords" content={utilityData.keywords} />
      </Helmet>
      <ManagementPageLayout {...utilityData} />
    </>
  );
};

export default UtilityManagement;
