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


const OnlineOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Online order feature cards data
  const onlineOrderCards = [
    {
      icon: "fas fa-plug",
      title: "Online Order Integration",
      description: "Integrate easily with any food aggregator with MenuMitra, and manage your order from single dashboard, accept, mark food ready, deliver. As simple as that!"
    },
    {
      icon: "fas fa-edit",
      title: "Menu Updates & Changes",
      description: "Manage online menu directly from MenuMitra POS, add, update, modify whenever you want! Customize menu timing, add images and more."
    },
    {
      icon: "fas fa-toggle-on",
      title: "Toggle Your Items & Outlet On/Off",
      description: "Running out of stock? Manage your menu online status from MenuMitra POS. Turn item or category on/off as per your availability."
    },
    {
      icon: "fas fa-plus-circle",
      title: "Customizable Charges & Add-Ons",
      description: "Add customized charges such as packaging charge, container charge, discounts or offers from MenuMitra admin panel. No more juggling between here or there."
    },
    {
      icon: "fas fa-chart-line",
      title: "Real-Time Order Analytics",
      description: "Track your online order performance with detailed analytics. Monitor peak hours, popular items, customer preferences, and optimize your menu for better sales."
    },
    {
      icon: "fas fa-bell",
      title: "Smart Order Notifications",
      description: "Get instant notifications for new orders, order modifications, and delivery updates. Never miss an order with MenuMitra's smart notification system."
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
              src={brand1}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            One screen to manage all your online orders
            </h2>
            <p className="mb-30">
            Accept online orders, maintain your digital menu, and show when food is ready. You can also accept payments and keep track of sales all from one location. 
            This saves you from having to flip between screens.
            </p>
            <Link to="/book_demo" className="btn btn-primary pill mr-5">
              <i className="fas fa-shopping-cart mr-5" />{" "}
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
      title="Discover what MenuMitra can do for your online order management"
      cards={onlineOrderCards}
      colorTheme="orange"
    />
    <FeatureSection />
  
  </div>
    <Form/>
   <Footer/>

    </>

  )
}

export default OnlineOrder