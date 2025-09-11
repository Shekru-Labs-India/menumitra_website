import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Form from "./Form";
import FeatureSection from "./FeatureSection";
import { Link } from 'react-router-dom';
import FeatureCards from './FeatureCards';
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.webp";
import brand2 from "../assets/images/mm_brand/02.webp";
import brand3 from "../assets/images/mm_brand/03.webp";
import brand4 from "../assets/images/mm_brand/04.webp";
import brand5 from "../assets/images/mm_brand/05.webp";
import brand6 from "../assets/images/mm_brand/06.webp";


const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Menu feature cards data
  const menuCards = [
    {
      icon: "fas fa-list-alt",
      title: "Item, Category, Variations & Add-Ons",
      description: "Use MenuMitra to your creative advantage! Your menu items can be easily arranged and customized with distinct prices for variations and add-ons. For a large pizza, charge extra for those extra toppings. Keep it flavorful and lively!"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Aggregator Menu Management",
      description: "Are you sick of waiting around for Zomato and Swiggy's menu updates? Here you can use MenuMitra to amend your menu, adjust prices, and turn items on and off directly from the POS. Avoid the line and effortlessly maintain your menu current and fresh!"
    },
    {
      icon: "fas fa-keyboard",
      title: "Short-Codes For Quick Billing",
      description: "Are you still using outdated shortcodes for menu items? Enjoy the comfort of familiarity with MenuMitra! Give Pav Bhaji Butter simple codes like PBB to increase software adoption and expedite checkout. Keep things quick and easy!"
    },
    {
      icon: "fas fa-layer-group",
      title: "Multiple Menus",
      description: "Customize your products to fit niche markets! Using MenuMitra, manage your menu and prices for online orders differently than in-house eating. Set your prices for services and commissions across all channels to maintain control and increase revenue!"
    },
    {
      icon: "fas fa-sticky-note",
      title: "Configurable Special Notes",
      description: "\"Extra spicy, please!\" And \"No tomatoes, please!\" These are regular requests from customers. You can save servers time and advise clients about customization options by creating prepared instructions with MenuMitra's special notes."
    },
    {
      icon: "fas fa-clock",
      title: "Customizable Menu Timing",
      description: "No breakfast after 11:00 a.m. or Chef de pastry begins at 4:00 p.m. You can manage the availability of particular menu items using MenuMitra, whether they are for dine-in or on aggregator platforms. Choose the ideal time for a flawless eating experience!"
    },
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
  <>

  <Header/>

  <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body border-bottom">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src={brand2}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
              Your restaurant's menu serves as your business card.
            </h2>
            <p className="mb-30">
              Discover the best restaurant menu management software to manage
              your restaurant menu, manage your online delivery food menu,
              change prices, add or delete items.​
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
      title="Discover what MenuMitra can do for your menu management"
      cards={menuCards}
      colorTheme="orange"
    />
    <FeatureSection />
    
  </div>
  {/* / main-container */}
<Form/>
  <Footer/>
</>

  </>

  )
}

export default Menu