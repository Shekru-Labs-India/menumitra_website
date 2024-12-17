import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
import { Helmet } from 'react-helmet'
import Form from "./Form";
const OnlineOrder = () => {
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
        <meta property="og:image" itemprop="image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure_url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:alt" content="Menu Mitra Image" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="602" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta name="twitter:description" content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services." />
        <meta name="twitter:image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
      </Helmet>
    <Header/>

     <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/6-1.png"
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
            <a href="#x" className="btn btn-primary pill mr-5">
              <i className="fas fa-shopping-cart mr-5" />{" "}
              <span>Book a free demo</span>
            </a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
    <div className="container mt-80">
      <h2 className="text-center mb-50">
      Discover what Ciferon can do for your online order management
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Online-Order-Integration2-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">
              Online Order Integration
              </h6>
              <p className="card-text">
              Integrate easily with any food aggregator with Ciferon, and manage your order from single dashboard, accept, mark food ready, deliver. as simple it that
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Menu-Updations-Changes-2.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Menu Updations & Changes</h6>
              <p className="card-text">
              Manage online menu directly from Ciferon POS, add, update, modify whenever you want! customise menu timing, add images and more
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/2-4.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Toggle Your Items & Outlet On/Off</h6>
              <p className="card-text">
              Running out of stock? manage your menu online status from Ciferon POS. Turn item or category on/off as per your availability
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Customisable-Charges-Add-Ons-4.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Customisable Charges & Add-Ons</h6>
              <p className="card-text">
              Add customised charges such as packaging charge, container charge, discounts or offer from Ciferon admin panel. No more juggling between here or there
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
          Ciferon is more than just
          a online order management software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Billing & Kot</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.</p>
            </div>

            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
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
                <p style={{ color: '#666' }} className="feature-description">Ciferon's CRM enables you to monitor, handle, and reward loyal customers, ensuring that your brand forms a unique connection with each customer.</p>
            </div>
           
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
  
  </div>
    <Form/>
   <Footer/>

    </>

  )
}

export default OnlineOrder