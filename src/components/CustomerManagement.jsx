import React, { useEffect } from "react";
import { Helmet } from 'react-helmet'
import ManagementPageLayout from './ManagementPageLayout';
import heroImage from '../assets/images/Hero-img.jpg';
import varunImage from '../assets/images/Varun.jpg';

const CustomerManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Customer management data for ManagementPageLayout
  const customerManagementData = {
    title: "Customer Management",
    description: "Know everything about your customers in just one click!",
    keywords: "Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management",
    
    // Hero Section
    heroImage: heroImage,
    heroTitle: "Know everything about your customers in just one click!",
    heroDescription: "In-built Customer Management Software that helps your earn customer loyalty, Regulate customer retention, Synced customer information, Track customer behaviour and many more",
    heroButtonText: "Book a free demo",
    heroButtonIcon: "fas fa-shopping-cart",
    heroButtonLink: "/book_demo",
    
    // Core Features
    featuresTitle: "Discover what MenuMitra can do for your customers",
    featuresSubtitle: "Comprehensive customer management tools to boost loyalty and retention",
    features: [
      {
        icon: "fas fa-chart-line",
        title: "Track Customer Behavior",
        description: "The customer wants to place an order, but you are clueless about what they often get. Here MenuMitra's order tracking module comes in handy, On the billing tab, you can quickly review the order history of your customer. Give your biller additional information for a customized experience that will increase client satisfaction.",
        color: "#28a745"
      },
      {
        icon: "fas fa-sync-alt",
        title: "Synced Customer Information",
        description: "Flawless customer understanding! Information captured on the POS is immediately linked to the cloud. Get information instantly, including address, email, birthdays, anniversaries, and more, in addition to names and numbers. Gain a thorough grasp of your clients with ease!",
        color: "#007bff"
      },
      {
        icon: "fas fa-heart",
        title: "Regulate Customer Retention",
        description: "Use customized SMS to increase customer interaction directly from the MenuMitra Dashboard! Customize messages according to birthdays, anniversaries, purchasing history, and other factors. To entice your devoted consumers to return, send them exclusive deals or discount codes.",
        color: "#dc3545"
      },
      {
        icon: "fas fa-comment-dots",
        title: "Customer Feedbacks",
        description: "With MenuMitra's Feedback Management System, you can find out what customers truly think about your restaurant and services! Gather frank feedback about your staff, food, and service by using a tablet or smartphone app, QR codes, or SMS links.",
        color: "#ffc107"
      },
      {
        icon: "fas fa-users",
        title: "Customer Segmentation & Targeting",
        description: "Segment your customers based on their spending patterns, visit frequency, and preferences. Create targeted marketing campaigns for different customer groups to maximize engagement and increase repeat visits.",
        color: "#6f42c1"
      },
      {
        icon: "fas fa-gift",
        title: "Loyalty Programs & Rewards",
        description: "Build customer loyalty with automated reward systems. Set up points-based programs, tier memberships, and special privileges for your most valuable customers. Keep them coming back with personalized offers and exclusive benefits.",
        color: "#fd7e14"
      }
    ],
    
    // Advanced Operations
    operationsTitle: "Much more than just a CRM software",
    operationsSubtitle: "Complete restaurant management solution with customer insights",
    operations: [
      {
        icon: "fas fa-qrcode",
        title: "Online Orders",
        description: "Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.",
        bgColor: "bg-primary"
      },
      {
        icon: "fas fa-book",
        title: "Billing & Kot",
        description: "MenuMitra's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.",
        bgColor: "bg-success"
      },
      {
        icon: "fas fa-book-open",
        title: "Inventory Management",
        description: "Smartly manage your inventory with instant low-stock alerts, item-wise auto-deduct, create daily closing reports and much more",
        bgColor: "bg-info"
      },
      {
        icon: "fas fa-file-invoice",
        title: "Reports & Analytics",
        description: "Receive instant reports on your owner's app & WhatsApp for day-end sales, inventory, staff activities, and other vital business insights.",
        bgColor: "bg-warning"
      }
    ],
    
    // Intelligence Section
    intelligenceTitle: "Smart Customer Analytics",
    intelligenceDescription: "Get deep insights into customer behavior and preferences to make data-driven decisions that boost your restaurant's success.",
    intelligenceImage: heroImage,
    intelligenceFeatures: [
      {
        icon: "fas fa-chart-bar",
        title: "Customer Analytics",
        description: "Track spending patterns and preferences",
        color: "text-primary"
      },
      {
        icon: "fas fa-bell",
        title: "Smart Notifications",
        description: "Automated alerts for customer events",
        color: "text-success"
      },
      {
        icon: "fas fa-target",
        title: "Targeted Marketing",
        description: "Personalized campaigns for each segment",
        color: "text-info"
      },
      {
        icon: "fas fa-star",
        title: "Loyalty Tracking",
        description: "Monitor customer retention metrics",
        color: "text-warning"
      }
    ],
    
    // Integration Features
    integrationTitle: "Seamless Integration & Scalability",
    integrationSubtitle: "Connect with your existing systems and scale as you grow",
    integrationFeatures: [
      {
        icon: "fas fa-plug",
        title: "Easy Integration",
        description: "Connect with existing POS systems and third-party applications seamlessly."
      },
      {
        icon: "fas fa-expand-arrows-alt",
        title: "Scalable Solution",
        description: "Grows with your business from single outlet to multi-location chains."
      },
      {
        icon: "fas fa-cloud",
        title: "Cloud-Based",
        description: "Access your customer data from anywhere, anytime with cloud technology."
      }
    ],
    
    // Success Stories
    successStoriesTitle: "Success Stories",
    successStoriesSubtitle: "See how restaurants are transforming their customer experience",
    successStories: [
      {
        name: "Spice Garden Restaurant",
        location: "Mumbai",
        testimonial: "MenuMitra's customer management helped us increase repeat customers by 40% through personalized offers and loyalty programs.",
        rating: "4.8",
        image: varunImage
      },
      {
        name: "Cafe Delight",
        location: "Delhi",
        testimonial: "The customer feedback system has been a game-changer. We can now address issues immediately and improve our service quality.",
        rating: "4.9",
        image: varunImage
      },
      {
        name: "Pizza Palace",
        location: "Bangalore",
        testimonial: "Customer segmentation features helped us create targeted marketing campaigns that increased our average order value by 25%.",
        rating: "4.7",
        image: varunImage
      }
    ],
    
    // Call to Action
    ctaTitle: "Ready to Transform Your Customer Experience?",
    ctaDescription: "Join thousands of restaurants already using MenuMitra to build stronger customer relationships and boost loyalty.",
    ctaButtonText: "Book Free Demo",
    ctaButtonIcon: "fas fa-calendar-alt",
    ctaButtonLink: "/book_demo",
    
    pageClassName: "customer-management"
  };

  return (
    <>
      <Helmet>
        {/* Meta Tags for SEO */}
        <meta name="keywords" content={customerManagementData.keywords} />
        <meta name="description" content="Menu Mitra - Simplifying restaurant management with smart POS features. Manage orders, inventory, CRM, and reports all in one place." />

        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="never" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="author" content="Menu Mitra" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="YES" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="identifier-url" content="https://menumitra.com" />
        <meta name="geo.placename" content="India" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <link rel="canonical" href="https://menumitra.com" />
        <link rel="shortlink" href="https://menumitra.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta property="og:description" content="Menu Mitra offers smart restaurant POS features to manage orders, inventory, and customer relations, empowering restaurant owners." />
        <meta property="og:url" content="https://menumitra.com" />
        <meta property="og:site_name" content="Menu Mitra" />
        <meta property="article:publisher" content="https://www.facebook.com/menumitra" />
        <meta property="article:updated_time" content="2024-12-13" />
        <meta property="og:image" itemprop="image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:url" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:secure" content="%PUBLIC_URL%/logo192.png "/>
        <meta property= "og:image:secure_url" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:alt" content="Menu Mitra Logo" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="602" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta name="twitter:description" content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services." />
        <meta name="twitter:image" content="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      
      <ManagementPageLayout {...customerManagementData} />
    </>
  )
}

export default CustomerManagement