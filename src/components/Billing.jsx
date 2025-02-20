import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'; // Import Helmet
import Form from "./Form";
import { Link } from 'react-router-dom';
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";


const Billing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
  <>
      <Helmet>
        {/* Meta Tags for SEO */}
        <title>Menu Mitra | Restaurant POS and Management</title>
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
  <>

 <Header/>


  <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src={brand3}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
              Simple 3-click Restaurant billing Software
            </h2>
            <p className="mb-30">
              Create bills &amp; KOT, receive payments, split bills, merge
              tables, apply discounts &amp; coupons, configure taxes, use
              multiple terminals, and do a lot more.​
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
    <div className="container- mt-80">
      <h2 className="text-center mb-50">
        Discover what Ciferon can do for your billing
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-5 mb-4 ">
          <div className="card p-4 " style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Customizable-bill-format2-3.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className=" ">
              <h6 className="card-title">Customizable bill format</h6>
              <p className="card-text">
                Creates professional, personalized bills that easily represent
                business identity and leave a lasting impression on customers.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-5 mb-4 ">
          <div className="card p-4" style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Station-wise-KOT-printing2-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="">
              <h6 className="card-title">Section-wise KOT printing</h6>
              <p className="card-text">
                Assign items to every sections, then take orders and
                automatically KOT will go to their sections. Easy operations,
                happy kitchen.​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-5 mb-4">
          <div className="card p-4" style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Multi-terminal-billing2-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="">
              <h6 className="card-title">Customizable bill format</h6>
              <p className="card-text">
                Creates professional, personalized bills that easily represent
                business identity and leave a lasting impression on customers.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-5 mb-4">
          <div className="card p-4" style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Table-and-area-management3-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="">
              <h6 className="card-title">Section-wise KOT printing</h6>
              <p className="card-text">
                Assign items to every sections, then take orders and
                automatically KOT will go to their sections. Easy operations,
                happy kitchen.​
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-5 mb-4">
          <div className="card p-4" style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Configure-taxes-amp-discounts2-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="">
              <h6 className="card-title">Configure taxes &amp; discounts</h6>
              <p className="card-text">
                Take control of the price plan—Customise taxes and reductions
                according to the needs of the business.
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-5 mb-4">
          <div className="card p-4 " style={{ backgroundColor: "#f2fbff" }}>
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Works-online-amp-offline-both-2-1.png.webp"
              alt="Card Image"
              className="card-img-top"
            />
            <div className="">
              <h6 className="card-title">Works online &amp; offline both</h6>
              <p className="card-text">
                If your internet is down, Ciferon continues to function without
                a hitch. It works offline and syncs data to the cloud once
                you're reconnected.​
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
            Ciferon is more than just a billing software
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
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Personalize your restaurant menu to make it better for customers. Add exciting extras, special offers, unique menus, and dynamic pricing options.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
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
  {/* / main-container */}
<Form/>
  <Footer/>
</>

  </>

  )
}

export default Billing