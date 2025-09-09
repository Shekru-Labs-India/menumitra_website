import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'
import Form from "./Form";
import FeatureSection from "./FeatureSection";
import { Link } from 'react-router-dom';
import FeatureCards from './FeatureCards';
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";


const RestaurantReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Restaurant reports feature cards data
  const reportsCards = [
    {
      icon: "fas fa-tachometer-alt",
      title: "Single Dashboard Monitoring",
      description: "No more juggling between dashboards. By consolidating all of your sales data from dine-in, QR codes, Zomato/Swiggy, and your website onto a single dashboard, MenuMitra makes your life easier. Without any difficulty, get a complete, real-time view of your restaurant!"
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Comprehensive Tax Reports",
      description: "Your tax-related difficulties are over! With just one click, you can access detailed tax reports for all of your outlets with MenuMitra. Put an end to gathering information from multiple sources and concentrate only on efficiently filing your taxes!"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Web & App",
      description: "MenuMitra makes it easy to keep track of your restaurant! You can view our dashboard as an iOS or Android app, or as a webpage on your computer. Keep easy control over your restaurant's operations from anywhere, using any device."
    },
    {
      icon: "fas fa-building",
      title: "Head Office Module with Clusters",
      description: "Are you feeling overburdened by running several outlets? Monitor sales across all locations on a single screen with MenuMitra's Head Office module, which is part of the subscription. Establish zones according to cities, regions, or channels to have the information you require at your fingertips."
    },
    {
      icon: "fas fa-user-shield",
      title: "User Rights Management",
      description: "MenuMitra allows you to take control! By giving particular roles and rights to the admin panel and the billing app, you can customize what your employees see. You have complete control over your outlet's operations, which are all centralized for your convenience."
    },
    {
      icon: "fas fa-comments",
      title: "Set Automated WhatsApp Reports",
      description: "Did you miss today's reports? We've got you covered, no worries! You can select which reports to receive in your WhatsApp and when with MenuMitra WhatsApp Reports. Easily stay up to date!"
    }
  ];

  return (
    
  <>

<Helmet>
        {/* Meta Tags for SEO */}
        <meta name="keywords" content="Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management" />
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
   <Header/>

   <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src={brand5}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Stay connected with your outlet, wherever you are.
            </h2>
            <p className="mb-30">
            The best restaurant reports software to manage your restaurant reports and analytics of daily sales, monthly sales, profits, taxes, online orders, and GST in real-time.
            </p>
            <Link to="/book_demo" className="btn btn-primary pill mr-5">
              
              <span>Book a free demo</span>
            </Link>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    <FeatureCards
      title="Discover what MenuMitra can do for your reports"
      cards={reportsCards}
      colorTheme="yellow"
    />
    <FeatureSection />
   </div>
<Form/>
  <Footer/>
  </>

  )
}

export default RestaurantReports