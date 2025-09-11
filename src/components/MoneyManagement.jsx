import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ManagementPageLayout from './ManagementPageLayout';
import brand3 from "../assets/images/mm_brand/03.webp";
import varunImage from "../assets/images/Varun.webp";

const MoneyManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Money Management data for ManagementPageLayout
  const moneyManagementData = {
    title: "Money Management",
    description: "Comprehensive Money Management Solution",
    keywords: "Money Management, Restaurant Finance, Menu Mitra, Financial Management, Cash Flow",
    
    // Hero Section
    heroImage: brand3,
    heroTitle: "Comprehensive Money Management Solution",
    heroDescription: "Take control of your restaurant's finances with our advanced money management system. Track cash flow, manage expenses, monitor profitability, and make informed financial decisions with real-time insights and analytics.",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Money Management Features",
    featuresSubtitle: "Comprehensive tools to manage your restaurant's financial operations",
    features: [
      {
        icon: "fas fa-coins",
        title: "Cash Flow Tracking",
        description: "Monitor daily cash flow, track income and expenses, and maintain accurate financial records.",
        color: "#007bff"
      },
      {
        icon: "fas fa-chart-pie",
        title: "Profit Analysis",
        description: "Analyze profit margins, identify profitable items, and optimize pricing strategies.",
        color: "#28a745"
      },
      {
        icon: "fas fa-receipt",
        title: "Expense Management",
        description: "Track and categorize expenses, manage vendor payments, and control operational costs.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-calculator",
        title: "Financial Reporting",
        description: "Generate comprehensive financial reports, P&L statements, and tax-ready documentation.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-piggy-bank",
        title: "Budget Planning",
        description: "Create budgets, set financial goals, and track progress towards your business objectives.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-credit-card",
        title: "Payment Processing",
        description: "Integrate with payment gateways for seamless transaction processing and reconciliation.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Advanced Financial Operations",
    operationsSubtitle: "Streamline complex financial processes with intelligent automation",
    operations: [
      {
        icon: "fas fa-chart-line",
        title: "Financial Forecasting",
        description: "Predict future cash flow and revenue trends with advanced forecasting algorithms.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-file-invoice-dollar",
        title: "Invoice Management",
        description: "Automate invoice generation, tracking, and payment processing for vendors and suppliers.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-percentage",
        title: "Tax Management",
        description: "Calculate taxes, generate tax reports, and ensure compliance with financial regulations.",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-hand-holding-usd",
        title: "Investment Tracking",
        description: "Track investments, equipment purchases, and ROI analysis for business growth.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Financial Analytics",
    intelligenceDescription: "Make data-driven financial decisions with comprehensive analytics and insights.",
    intelligenceImage: brand3,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Financial Reports",
        description: "Generate detailed financial reports and analytics",
        color: "text-primary"
      },
      {
        icon: "fas fa-trending-up",
        title: "Profit Trends",
        description: "Track profit trends and growth patterns",
        color: "text-success"
      },
      {
        icon: "fas fa-dollar-sign",
        title: "Cost Analysis",
        description: "Analyze costs and identify savings opportunities",
        color: "text-info"
      },
      {
        icon: "fas fa-chart-pie",
        title: "Revenue Breakdown",
        description: "Break down revenue by category and source",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Financial Integration",
    integrationSubtitle: "Connect with banking and accounting systems for unified financial management",
    integrationFeatures: [
      {
        icon: "fas fa-university",
        title: "Banking Integration",
        description: "Connect with banks for automatic transaction import and reconciliation."
      },
      {
        icon: "fas fa-calculator",
        title: "Accounting Software",
        description: "Integrate with popular accounting software for seamless financial data flow."
      },
      {
        icon: "fas fa-shield-alt",
        title: "Secure Transactions",
        description: "Ensure secure financial transactions with encryption and compliance standards."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their financial management with MenuMitra",
    successStories: [
      {
        name: "The Financial Kitchen",
        location: "Mumbai",
        testimonial: "MenuMitra's money management system helped us reduce financial errors by 80% and improve cash flow visibility significantly.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Cafe Finance",
        location: "Delhi",
        testimonial: "The automated expense tracking and reporting features saved us hours of manual work and improved our financial accuracy.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Pizza Profits",
        location: "Bangalore",
        testimonial: "MenuMitra's profit analysis helped us identify our most profitable items and optimize our pricing strategy.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Take Control of Your Finances?",
    ctaDescription: "Join restaurants already using MenuMitra to streamline their financial management and boost profitability.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "money-management"
  };

  return (
    <>
      <Helmet>
        <title>Money Management - MenuMitra</title>
        <meta name="description" content="Comprehensive money management solutions for restaurants" />
        <meta name="keywords" content={moneyManagementData.keywords} />
      </Helmet>
      
      <ManagementPageLayout {...moneyManagementData} />
    </>
  );
};

export default MoneyManagement;
