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


const Inventory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add custom styles for inventory cards
  const cardStyles = `
    <style>
      .inventory-card {
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border: 2px solid #e9ecef;
        border-radius: 28px;
        padding: 2.5rem 2rem;
        height: 100%;
        transition: all 0.3s ease;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08), 0 3px 10px rgba(0, 0, 0, 0.05);
        position: relative;
        overflow: hidden;
        margin-bottom: 1rem;
      }
      
      .inventory-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #28a745, #20c997);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .inventory-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 8px 20px rgba(0, 0, 0, 0.1);
        border: 2px solid #28a745;
        border-radius: 32px;
      }
      
      // .inventory-card:hover::before {
      //   opacity: 1;
      // }
      
      .card-icon {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #28a745, #20c997);
        border-radius: 22px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
      }
      
      .card-icon i {
        font-size: 28px;
        color: white;
      }
      
      .inventory-card:hover .card-icon {
        transform: scale(1.15);
        box-shadow: 0 8px 20px rgba(40, 167, 69, 0.4);
      }
      
      .card-content {
        text-align: left;
        padding: 1rem;
      }
      
      .card-title {
        font-size: 1.2rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 1.2rem;
        line-height: 1.4;
      }
      
      .card-text {
        color: #6c757d;
        font-size: 1rem;
        line-height: 1.7;
        margin: 0;
        padding-right: 0.5rem;
      }
      
      @media (max-width: 768px) {
        .inventory-card {
          padding: 2rem 1.5rem;
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          margin-bottom: 1.5rem;
        }
        
        .card-icon i {
          font-size: 24px;
        }
        
        .card-title {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .card-text {
          font-size: 0.95rem;
        }
      }
    </style>
  `;

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
        <style>{cardStyles}</style>
      </Helmet>
      <>
        <Header />

        <div className="main-container p-0">
          <section id="why-us" className="xl bg-gradient-body">
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
          <div className="container mt-80">
            <h2 className="text-center mb-50">
              Discover what MenuMitra can do for your inventory
            </h2>
            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-boxes"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Raw Material Management</h6>
                    <p className="card-text">
                      Create material list, assign vendors to them, check the
                      real-time stock status, get the alerts of low stock and
                      reports
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">
                      Multi-Stage Recipe Management
                    </h6>
                    <p className="card-text">
                      Something partially cooked? No worries, prepare recipes
                      for that then add those recipe to the menu item, it will
                      automatically handle the entire inventory
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-building"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Central Kitchen Module</h6>
                    <p className="card-text">
                      Centralise recipes, items controls, vendors lists,
                      accounting & balances, purchase order, indent,
                      material transfer, good receipt notes (GRN) and do lot
                      more
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-file-invoice"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Purchase Order</h6>
                    <p className="card-text">
                      You can create the purchase orders, send to the vendors or
                      central kitchen, track & control their status, convert
                      to invoice and process
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* Card 5 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Minimum Stock Alerts</h6>
                    <p className="card-text">
                      Running out of stock? We can save you from this, set the
                      minimum level of each material, so whenever it hits the
                      level, assigned person or owner will get an instant alert
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 6 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Live Food Costing Reports</h6>
                    <p className="card-text">
                      The potato cost is not fixed, it changes every week! So
                      that your recipe cost will affect. MenuMitra gives you a
                      clear knowledge about the food cost, so you can increase
                      your profits
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 7 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-recycle"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Waste Management & Tracking</h6>
                    <p className="card-text">
                      Track food waste, expired items, and spoilage to minimize
                      losses. Get detailed reports on waste patterns and optimize
                      your inventory ordering to reduce unnecessary costs
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 8 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="inventory-card">
                  <div className="card-icon">
                    <i className="fas fa-sync-alt"></i>
                  </div>
                  <div className="card-content">
                    <h6 className="card-title">Automated Reorder System</h6>
                    <p className="card-text">
                      Never run out of essential ingredients again! Set up
                      automatic reorder points and let MenuMitra generate purchase
                      orders automatically when stock levels reach predefined
                      thresholds
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
                  MenuMitra is more than just a inventory software
                </h2>
              </div>
              {/* / text-center */}
              <div className="container py-5">
                <div className="row text-center">
                  <div className="col-md-4 mb-4">
                    <i
                      style={{
                        fontSize: "48px",
                        color: "#333",
                        marginBottom: "15px",
                      }}
                      className="fas fa-book feature-icon"
                    ></i>
                    <h5
                      style={{ fontWeight: 600, marginBottom: "10px" }}
                      className="feature-title"
                    >
                      Online Orders
                    </h5>
                    <p
                      style={{ color: "#666" }}
                      className="feature-description"
                    >
                      Receive online orders, handle your digital menu, indicate
                      when food is ready, process payments, and track
                      revenue—all in one place without switching between
                      multiple screens.
                    </p>
                  </div>

                  <div className="col-md-4 mb-4">
                    <i
                      style={{
                        fontSize: "48px",
                        color: "#333",
                        marginBottom: "15px",
                      }}
                      className="fas fa-book feature-icon"
                    ></i>
                    <h5
                      style={{ fontWeight: 600, marginBottom: "10px" }}
                      className="feature-title"
                    >
                      Billing & Kot
                    </h5>
                    <p
                      style={{ color: "#666" }}
                      className="feature-description"
                    >
                      MenuMitra's restaurant POS makes it easy to take orders,
                      create bills, and generate KOT. You can accept payments,
                      split bills, merge tables, and apply discounts and coupons
                      effortlessly.
                    </p>
                  </div>

                  <div className="col-md-4 mb-4">
                    <i
                      style={{
                        fontSize: "48px",
                        color: "#333",
                        marginBottom: "15px",
                      }}
                      className="fas fa-book-open feature-icon"
                    ></i>
                    <h5
                      style={{ fontWeight: 600, marginBottom: "10px" }}
                      className="feature-title"
                    >
                      Menu Management
                    </h5>
                    <p
                      style={{ color: "#666" }}
                      className="feature-description"
                    >
                      Personalize your restaurant menu to make it better for
                      customers. Add exciting extras, special offers, unique
                      menus, and dynamic pricing options.
                    </p>
                  </div>

                  <div className="col-md-4 mb-4">
                    <i
                      style={{
                        fontSize: "48px",
                        color: "#333",
                        marginBottom: "15px",
                      }}
                      className="fas fa-file-invoice feature-icon"
                    ></i>
                    <h5
                      style={{ fontWeight: 600, marginBottom: "10px" }}
                      className="feature-title"
                    >
                      Reports & Analytics
                    </h5>
                    <p
                      style={{ color: "#666" }}
                      className="feature-description"
                    >
                      Receive instant reports on your owner’s app & WhatsApp for
                      day-end sales, inventory, staff activities, and other
                      vital business insights.
                    </p>
                  </div>
                  <div className="col-md-4 mb-4">
                    <i
                      style={{
                        fontSize: "48px",
                        color: "#333",
                        marginBottom: "15px",
                      }}
                      className="fas fa-qrcode feature-icon"
                    ></i>
                    <h5
                      style={{ fontWeight: 600, marginBottom: "10px" }}
                      className="feature-title"
                    >
                      Customer Engagement
                    </h5>
                    <p
                      style={{ color: "#666" }}
                      className="feature-description"
                    >
                      MenuMitra's CRM enables you to monitor, handle, and reward
                      loyal customers, ensuring that your brand forms a unique
                      connection with each customer.
                    </p>
                  </div>
                </div>
              </div>
              {/* / row */}
            </div>
            {/* / container */}
          </div>
        </div>
        {/* / main-container */}
        <Form />
        <Footer />
      </>
    </>
  );
}

export default Inventory