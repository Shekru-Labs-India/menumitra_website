import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Form from "./Form";
import FeatureSection from "./FeatureSection";
import { Link } from "react-router-dom";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";

const StoreManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Store Management - MenuMitra</title>
        <meta name="description" content="Comprehensive store management solutions for restaurants" />
        <meta name="keywords" content="Store Management, Restaurant Management, Menu Mitra, POS, Inventory Management" />
      </Helmet>
      <Header />
      
      <div className="main-container p-0">
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand1}
                  alt="Store Management System"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Complete Store Management Solution
                </h2>
                <p className="mb-30">
                  Streamline your restaurant operations with our comprehensive store management system. 
                  Manage inventory, track sales, monitor staff performance, and optimize your business 
                  operations all from one centralized platform.
                </p>
                <Link to="/book_demo" className="btn btn-primary pill mr-5">
                  <i className="fas fa-shopping-cart mr-5" />
                  <span>Book a free demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="features" className="mt-80">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-50">
                Store Management Features
              </h2>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-store feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Multi-Store Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Manage multiple restaurant locations from a single dashboard. Monitor performance, inventory, and operations across all your stores.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-chart-line feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Real-time Analytics</h5>
                  <p style={{ color: '#666' }} className="feature-description">Get instant insights into your store performance with real-time analytics, sales reports, and business intelligence.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-cogs feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Automated Operations</h5>
                  <p style={{ color: '#666' }} className="feature-description">Automate routine tasks, inventory alerts, staff scheduling, and operational workflows to improve efficiency.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Mobile Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Access your store management tools anywhere with our mobile app. Monitor operations on the go.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-shield-alt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Security & Compliance</h5>
                  <p style={{ color: '#666' }} className="feature-description">Ensure data security and compliance with industry standards. Secure access controls and audit trails.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-headset feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">24/7 Support</h5>
                  <p style={{ color: '#666' }} className="feature-description">Get round-the-clock support for your store management needs. Our team is always ready to help.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </>
  );
};

export default StoreManagement;
