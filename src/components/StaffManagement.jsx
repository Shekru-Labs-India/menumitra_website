import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand5 from "../assets/images/mm_brand/05.png";
import varunImage from "../assets/images/Varun.jpg";

const StaffManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Staff management data for ManagementPageLayout
  const staffManagementData = {
    title: "Staff Management",
    description: "Complete Staff Management System",
    keywords: "Staff Management, Restaurant Staff, Menu Mitra, HR Management, Employee Management",
    
    // Hero Section
    heroImage: brand5,
    heroTitle: "Complete Staff Management System",
    heroDescription: "Streamline your restaurant's human resources with our comprehensive staff management system. Handle scheduling, payroll, performance tracking, training, and employee communication all from one integrated platform.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Staff Management Features",
    featuresSubtitle: "Comprehensive tools to manage your restaurant's most valuable asset - your people",
    features: [
      {
        icon: "fas fa-user-tie",
        title: "Employee Profiles",
        description: "Maintain comprehensive employee profiles with personal information, roles, skills, and performance history.",
        color: "#007bff"
      },
      {
        icon: "fas fa-calendar-alt",
        title: "Shift Scheduling",
        description: "Create and manage staff schedules with automated shift planning and conflict resolution.",
        color: "#28a745"
      },
      {
        icon: "fas fa-clock",
        title: "Time Tracking",
        description: "Track employee work hours, overtime, and attendance with automated time clock integration.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-money-bill-wave",
        title: "Payroll Management",
        description: "Calculate salaries, bonuses, deductions, and generate payroll reports automatically.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-chart-bar",
        title: "Performance Analytics",
        description: "Monitor employee performance, productivity metrics, and generate detailed analytics reports.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Training Management",
        description: "Organize training programs, track certifications, and manage skill development for your staff.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced HR Operations",
    operationsSubtitle: "Streamline complex HR processes with intelligent automation",
    operations: [
      {
        icon: "fas fa-users-cog",
        title: "Role Management",
        description: "Define roles, permissions, and access levels for different staff members with granular control.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-clipboard-check",
        title: "Performance Reviews",
        description: "Conduct regular performance evaluations with structured review processes and goal tracking.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-bell",
        title: "Notifications & Alerts",
        description: "Automated notifications for shift changes, payroll processing, training deadlines, and more.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-file-alt",
        title: "Document Management",
        description: "Store and manage employee documents, contracts, certifications, and compliance records.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart HR Analytics",
    intelligenceDescription: "Make data-driven decisions about your workforce with comprehensive analytics and insights.",
    intelligenceImage: brand5,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-line",
        title: "Productivity Metrics",
        description: "Track individual and team productivity",
        color: "text-primary"
      },
      {
        icon: "fas fa-user-clock",
        title: "Attendance Patterns",
        description: "Analyze attendance trends and patterns",
        color: "text-success"
      },
      {
        icon: "fas fa-dollar-sign",
        title: "Labor Cost Analysis",
        description: "Monitor labor costs and efficiency",
        color: "text-info"
      },
      {
        icon: "fas fa-trophy",
        title: "Performance Trends",
        description: "Identify top performers and areas for improvement",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless HR Integration",
    integrationSubtitle: "Connect with existing systems and scale your HR operations",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "System Integration",
        description: "Integrate with existing HR systems, payroll software, and time tracking devices."
      },
      {
        icon: "fas fa-mobile-alt",
        title: "Mobile Access",
        description: "Staff can access schedules, submit requests, and view information from their mobile devices."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud-Based",
        description: "Access employee data securely from anywhere with cloud-based storage and backup."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their HR management",
    successStories: [
      {
        name: "The Grand Restaurant",
        location: "Mumbai",
        testimonial: "MenuMitra's staff management system reduced our scheduling time by 60% and improved employee satisfaction significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Central",
        location: "Delhi",
        testimonial: "The performance tracking features helped us identify top performers and provide targeted training to improve overall efficiency.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Corner",
        location: "Bangalore",
        testimonial: "Automated payroll processing and time tracking eliminated errors and saved us hours of administrative work every month.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Streamline Your Staff Management?",
    ctaDescription: "Join restaurants already using MenuMitra to optimize their workforce management and boost employee productivity.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "staff-management"
  };

  return (
    <>
      <Helmet>
        <title>Staff Management - MenuMitra</title>
        <meta name="description" content="Comprehensive staff management system for restaurants" />
        <meta name="keywords" content={staffManagementData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...staffManagementData} />
    </>
  );
};

export default StaffManagement;
