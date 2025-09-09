import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Form from "./Form";
import { Link } from "react-router-dom";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";

const PointOfSale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Point of Sale System - MenuMitra</title>
        <meta name="description" content="Advanced Point of Sale system for restaurants" />
        <meta name="keywords" content="Point of Sale, POS System, Restaurant POS, Menu Mitra, Payment Processing" />
      </Helmet>
      <Header />
      
      <div className="main-container p-0">
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand1}
                  alt="Point of Sale System"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Advanced Point of Sale System
                </h2>
                <p className="mb-30">
                  Streamline your restaurant operations with our comprehensive Point of Sale system. 
                  Process orders, handle payments, manage tables, and generate reports with our 
                  user-friendly and feature-rich POS solution.
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
                Point of Sale Features
              </h2>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-cash-register feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Quick Order Processing</h5>
                  <p style={{ color: '#666' }} className="feature-description">Process orders quickly with intuitive interface, customizable layouts, and fast menu navigation.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-credit-card feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Multiple Payment Options</h5>
                  <p style={{ color: '#666' }} className="feature-description">Accept cash, cards, digital wallets, and mobile payments with integrated payment processing.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-table feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Table Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Manage table assignments, split bills, merge tables, and track table status in real-time.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-percentage feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Discounts & Coupons</h5>
                  <p style={{ color: '#666' }} className="feature-description">Apply discounts, promotional offers, and coupon codes with flexible pricing rules.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-receipt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Receipt Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Generate professional receipts, email invoices, and maintain transaction history.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-chart-line feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Sales Analytics</h5>
                  <p style={{ color: '#666' }} className="feature-description">Track sales performance, popular items, and revenue trends with detailed analytics.</p>
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

export default PointOfSale;
