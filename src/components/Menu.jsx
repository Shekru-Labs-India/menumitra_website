import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Form from "./Form";
import { Link } from 'react-router-dom';
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";


const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
    <section id="why-us" className="xl bg-gradient-body">
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
    <div className="container mt-80">
      <h2 className="text-center mb-50">
        Discover what MenuMitra can do for your menu management
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">
                Item, Category, Variations &amp; Add-Ons
              </h6>
              <p className="card-text">
                Use MenuMitra to your creative advantage! Your menu items can be
                easily arranged and customized with distinct prices for
                variations and add-ons. For a large pizza, charge extra for
                those extra toppings. Keep it flavorful and lively!
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Aggregator Menu Management</h6>
              <p className="card-text">
                Are you sick of waiting around for Zomato and Swiggy's menu
                updates? Here you can use MenuMitra to amend your menu, adjust
                prices, and turn items on and off directly from the POS. Avoid
                the line and effortlessly maintain your menu current and fresh!
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Short-Codes For Quick Billing</h6>
              <p className="card-text">
                Are you still using outdated shortcodes for menu items? Enjoy
                the comfort of familiarity with MenuMitra! Give Pav Bhaji Butter
                simple codes like PBB to increase software adoption and expedite
                checkout. Keep things quick and easy!
              </p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Multiple Menus</h6>
              <p className="card-text">
                Customize your products to fit niche markets! Using MenuMitra,
                manage your menu and prices for online orders differently than
                in-house eating. Set your prices for services and commissions
                across all channels to maintain control and increase revenue!​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 5 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Configurable Special Notes</h6>
              <p className="card-text">
                "Extra spicy, please!" And "No tomatoes, please!" These are
                regular requests from customers. You can save servers time and
                advise clients about customization options by creating prepared
                instructions with MenuMitra's special notes.
              </p>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Customizable Menu Timing</h6>
              <p className="card-text">
                No breakfast after 11:00 a.m. or Chef de pastry begins at 4:00
                p.m. You can manage the availability of particular menu items
                using MenuMitra, whether they are for dine-in or on aggregator
                platforms. Choose the ideal time for a flawless eating
                experience!​
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="features" className="mt-80">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-50">
            MenuMitra is more than just a menu management software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Online Orders</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Billing & Kot</h5>
                <p style={{ color: '#666' }} className="feature-description">MenuMitra's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Smartly manage your inventory with instant low-stock alerts, item-wise auto-deduct, create daily closing reports and much more</p>
            </div>
            
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Reports & Analytics</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive instant reports on your owner’s app & WhatsApp for day-end sales, inventory, staff activities, and other vital business insights.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customer Engagement</h5>
                <p style={{ color: '#666' }} className="feature-description">MenuMitra's CRM enables you to monitor, handle, and reward loyal customers, ensuring that your brand forms a unique connection with each customer.</p>
            </div>
           
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
    
  </div>
  {/* / main-container */}
<Form/>
  <Footer/>
</>

  </>

  )
}

export default Menu