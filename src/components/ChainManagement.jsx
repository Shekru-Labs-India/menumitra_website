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

const ChainManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Chain Management - MenuMitra</title>
        <meta name="description" content="Multi-location chain management solutions for restaurants" />
        <meta name="keywords" content="Chain Management, Multi-location, Restaurant Chain, Menu Mitra, Franchise Management" />
      </Helmet>
      <Header />
      
      <div className="main-container p-0">
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand6}
                  alt="Chain Management System"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Multi-Location Chain Management Solution
                </h2>
                <p className="mb-30">
                  Scale your restaurant business across multiple locations with our comprehensive chain management system. 
                  Centralize operations, maintain brand consistency, and optimize performance across all your outlets 
                  from a single command center.
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
                Chain Management Features
              </h2>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-link feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Centralized Control</h5>
                  <p style={{ color: '#666' }} className="feature-description">Manage all your restaurant locations from a single dashboard with real-time monitoring and control.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-chart-network feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Performance Comparison</h5>
                  <p style={{ color: '#666' }} className="feature-description">Compare performance metrics across locations to identify best practices and improvement opportunities.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-sync feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Menu Synchronization</h5>
                  <p style={{ color: '#666' }} className="feature-description">Sync menus, pricing, and promotions across all locations while allowing local customization.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-users-cog feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Staff Coordination</h5>
                  <p style={{ color: '#666' }} className="feature-description">Coordinate staff across locations, manage transfers, and maintain consistent training standards.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-warehouse feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Inventory Distribution</h5>
                  <p style={{ color: '#666' }} className="feature-description">Optimize inventory distribution across locations and manage centralized purchasing.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-shield-alt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Brand Compliance</h5>
                  <p style={{ color: '#666' }} className="feature-description">Ensure brand consistency and compliance with standard operating procedures across all locations.</p>
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

export default ChainManagement;
