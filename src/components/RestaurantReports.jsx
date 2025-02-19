import React, { useEffect, useState } from "react";
import Footer from './Footer'
import Header from './Header'
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


const RestaurantReports = () => {
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
    <div className="container mt-80">
      <h2 className="text-center mb-50">
      Discover what Ciferon can do for your reports
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card " style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Single-Dashboard-Monitoring-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">
              Single Dashboard Monitoring
              </h6>
              <p className="card-text">
              No more juggling between dashboards. By consolidating all of your sales data from dine-in, QR codes, Zomato/Swiggy, and your website onto a single dashboard, Ciferon makes your life easier. Without any difficulty, get a complete, real-time view of your restaurant!
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Compressive-Tax-Reports22-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Compressive Tax Reports</h6>
              <p className="card-text">
              Your tax-related difficulties are over! With just one click, you can access detailed tax reports for all of your outlets with Ciferon.
               Put an end to gathering information from multiple sources and concentrate only on efficiently filing your taxes!
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
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/placeholder-56.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Web & App</h6>
              <p className="card-text">
              Ciferon makes it easy to keep track of your restaurant! You can view our dashboard as an iOS or Android app, or as a webpage on your computer. Keep easy control over your restaurant's operations from anywhere, using any device.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Head-Office-Module-with-Clusters-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Head Office Module with Clusters</h6>
              <p className="card-text">
              Are you feeling overburdened by running several outlets? Monitor sales across all locations on a single screen with Ciferon's Head Office module, which is part of the subscription. Establish zones according to cities, regions, or channels to have the information you require at your fingertips (e.g., Zomato sales for the Western Region). Use Ciferon to streamline supervision!
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
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/User-rights-management-1.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">User rights management</h6>
              <p className="card-text">
              Ciferon allows you to take control! By giving particular roles and rights to the admin panel and the billing app, you can customize what your employees see. You have complete control over your outlet's operations, which are all centralized for your convenience, from changing bills to seeing reports and operating the cash drawer.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#faf2eb" }}>
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Set-Automate-WhatsApp-Report-2.png"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="card-body">
              <h6 className="card-title">Set Automate WhatsApp Report</h6>
              <p className="card-text">
              Did you miss today's reports? We've got you covered, no worries! You can select which reports to receive in your WhatsApp and when with Ciferon WhatsApp Reports. Easily stay up to date!
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
          a reporting software
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            

        <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Online Orders</h5>
                <p style={{ color: '#666' }} className="feature-description">Receive online orders, handle your digital menu, indicate when food is ready, process payments, and track revenue—all in one place without switching between multiple screens.</p>
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
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Billing & Kot</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's restaurant POS makes it easy to take orders, create bills, and generate KOT. You can accept payments, split bills, merge tables, and apply discounts and coupons effortlessly.</p>
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
    {/* / features */}
   </div>
<Form/>
  <Footer/>
  </>

  )
}

export default RestaurantReports