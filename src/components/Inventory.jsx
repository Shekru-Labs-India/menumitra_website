import React, { useEffect } from "react";
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


const Inventory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Inventory feature cards data
  const inventoryCards = [
    {
      icon: "fas fa-boxes",
      title: "Raw Material Management",
      description: "Create material list, assign vendors to them, check the real-time stock status, get the alerts of low stock and reports"
    },
    {
      icon: "fas fa-utensils",
      title: "Multi-Stage Recipe Management",
      description: "Something partially cooked? No worries, prepare recipes for that then add those recipe to the menu item, it will automatically handle the entire inventory"
    },
    {
      icon: "fas fa-building",
      title: "Central Kitchen Module",
      description: "Centralise recipes, items controls, vendors lists, accounting & balances, purchase order, indent, material transfer, good receipt notes (GRN) and do lot more"
    },
    {
      icon: "fas fa-file-invoice",
      title: "Purchase Order",
      description: "You can create the purchase orders, send to the vendors or central kitchen, track & control their status, convert to invoice and process"
    },
    {
      icon: "fas fa-bell",
      title: "Minimum Stock Alerts",
      description: "Running out of stock? We can save you from this, set the minimum level of each material, so whenever it hits the level, assigned person or owner will get an instant alert"
    },
    {
      icon: "fas fa-chart-line",
      title: "Live Food Costing Reports",
      description: "The potato cost is not fixed, it changes every week! So that your recipe cost will affect. MenuMitra gives you a clear knowledge about the food cost, so you can increase your profits"
    },
  ];

  return (
    <>
      <Helmet>
        {/* Meta Tags for SEO */}
        <meta
          name="keywords"
          content="Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management"
        />
        <meta
          name="description"
          content="Menu Mitra - Simplifying restaurant management with smart POS features. Manage orders, inventory, CRM, and reports all in one place."
        />

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
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <link rel="canonical" href="https://menumitra.com" />
        <link rel="shortlink" href="https://menumitra.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Menu Mitra | Restaurant POS and Management"
        />
        <meta
          property="og:description"
          content="Menu Mitra offers smart restaurant POS features to manage orders, inventory, and customer relations, empowering restaurant owners."
        />
        <meta property="og:url" content="https://menumitra.com" />
        <meta property="og:site_name" content="Menu Mitra" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/menumitra"
        />
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
        <meta
          name="twitter:title"
          content="Menu Mitra | Restaurant POS and Management"
        />
        <meta
          name="twitter:description"
          content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services."
        />
        <meta
          name="twitter:image"
          content="%PUBLIC_URL%/logo192.png"
        />
      </Helmet>
      <>
        <Header />

        <div className="main-container p-0">
          <section id="why-us" className="xl bg-gradient-body border-bottom">
            <div className="container">
              <div className="row v-center">
                <div className="col-lg-5">
                  <img
                    src={brand6}
                    alt=""
                    className="rounded rellax"
                    data-rellax-speed={2}
                    data-rellax-percentage="0.5"
                  />
                </div>
                {/* / column */}
                <div className="col-lg-7 tablet-lg-top-30">
                  <h2 className="mb-30">
                    Most user-friendly Inventory Management Software
                  </h2>
                  <p className="mb-30">
                    Easily keep track of your inventory with item-by-item
                    auto-deduct, fast low-stock warnings, daily closing reports,
                    and restocking raw materials as needed.​
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
            title="Discover what MenuMitra can do for your inventory"
            cards={inventoryCards}
            cardClassName="feature-card"
          />
          <FeatureSection />
        </div>
        {/* / main-container */}
        <Form />
        <Footer />
      </>
    </>
  );
}

export default Inventory