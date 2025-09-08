  import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import Form from "./Form";
import { Link } from 'react-router-dom';
const CustomerManagement = () => {
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
   <Header/>

   <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Know everything about your customers in just one click!
            </h2>
            <p className="mb-30">
            In-built Customer Management Software that helps your earn customer loyalty, Regulate customer retention, Synced customer information, Track customer behaviour and many more
            </p>
          </div>
          {/* / column */}
          <div className="col-lg-7">
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
    <div className="container mt-80">
      <h2 className="text-center mb-50">
      Discover what MenuMitra can do for your customers
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">
              Track customer behaviour
              </h6>
              <p className="card-text">
              The customer wants to place an order, but you are clueless about what they often get. Here MenuMitra's order tracking module comes in handy, On the billing tab, you can quickly review the order history of your customer.
               Give your biller additional information for a customized experience that will increase client satisfaction.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Synced customer information</h6>
              <p className="card-text">
              Flawless customer understanding! Information captured on the POS is immediately linked to the cloud. Get information instantly, including address, email, birthdays, anniversaries, and more, in addition to names and numbers. Gain a thorough grasp of your clients with ease!
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Regulate customer retention</h6>
              <p className="card-text">
              Use customized SMS to increase customer interaction directly from the MenuMitra Dashboard! Customize messages according to birthdays, anniversaries, purchasing history, and other factors. To entice your devoted consumers to return, send them exclusive deals or discount codes.
              </p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <div className="card-body p-4">
              <h6 className="card-title">Customer Feedbacks</h6>
              <p className="card-text">
              With MenuMitra's Feedback Management System, you can find out what customers truly think about your restaurant and services! Gather frank feedback about your staff, food, and service by using a tablet or smartphone app, QR codes, or SMS links.
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
          Much more than just
          a CRM software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            
        <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
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
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
            </div>
           
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
    {/* / features */}

    
  </div>
  <Form/>

   <Footer/>
   </>

  )
}

export default CustomerManagement