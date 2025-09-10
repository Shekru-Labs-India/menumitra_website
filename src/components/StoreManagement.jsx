import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Form from "./Form";
import FeatureSection from "./FeatureSection";
import { Link } from "react-router-dom";
import "./StoreManagement.css";
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
      
      <div className="main-container p-0 store-management-page">
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

        {/* Core Store Management Features */}
        <div id="features" className="mt-80">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-50">
                Comprehensive Store Management Features
              </h2>
              <p className="lead text-muted mb-5">
                Everything you need to manage your restaurant operations efficiently
              </p>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#007bff', marginBottom: '15px' }} className="fas fa-store feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">Multi-Store Management</h5>
                    <p style={{ color: '#666' }} className="feature-description">Manage multiple restaurant locations from a single dashboard. Monitor performance, inventory, and operations across all your stores with centralized control.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#28a745', marginBottom: '15px' }} className="fas fa-chart-line feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">Real-time Analytics</h5>
                    <p style={{ color: '#666' }} className="feature-description">Get instant insights into your store performance with real-time analytics, sales reports, and business intelligence dashboards.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#ffc107', marginBottom: '15px' }} className="fas fa-cogs feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">Automated Operations</h5>
                    <p style={{ color: '#666' }} className="feature-description">Automate routine tasks, inventory alerts, staff scheduling, and operational workflows to improve efficiency and reduce manual errors.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#17a2b8', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">Mobile Management</h5>
                    <p style={{ color: '#666' }} className="feature-description">Access your store management tools anywhere with our mobile app. Monitor operations, approve orders, and manage staff on the go.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#dc3545', marginBottom: '15px' }} className="fas fa-shield-alt feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">Security & Compliance</h5>
                    <p style={{ color: '#666' }} className="feature-description">Ensure data security and compliance with industry standards. Secure access controls, audit trails, and data encryption.</p>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="feature-card p-4 h-100 border-0 shadow-sm rounded-4">
                    <i style={{ fontSize: '48px', color: '#6f42c1', marginBottom: '15px' }} className="fas fa-headset feature-icon"></i>
                    <h5 style={{ fontWeight: 600, marginBottom: '10px', color: '#333' }} className="feature-title">24/7 Support</h5>
                    <p style={{ color: '#666' }} className="feature-description">Get round-the-clock support for your store management needs. Our dedicated team is always ready to help you succeed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Store Operations */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title mb-3">
                Advanced Store Operations
              </h2>
              <p className="lead text-muted">
                Streamline complex operations with intelligent automation
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-start operation-card">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center operation-icon" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-cash-register fa-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Smart POS Integration</h5>
                    <p className="text-muted mb-0">Seamlessly integrate with multiple POS terminals across all stores. Centralized billing, payment processing, and transaction management.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-start operation-card">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center operation-icon" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-boxes fa-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Centralized Inventory</h5>
                    <p className="text-muted mb-0">Manage inventory across all locations with automated stock transfers, low-stock alerts, and centralized procurement.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-start operation-card">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center operation-icon" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-users fa-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Staff Management</h5>
                    <p className="text-muted mb-0">Manage staff across multiple locations with role-based access, attendance tracking, and performance monitoring.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-start operation-card">
                  <div className="flex-shrink-0 me-3">
                    <div className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center operation-icon" style={{ width: '60px', height: '60px' }}>
                      <i className="fas fa-shopping-cart fa-lg"></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="mb-2">Order Management</h5>
                    <p className="text-muted mb-0">Handle online orders, delivery management, and customer service across all stores from a unified platform.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Intelligence Section */}
        <section className="py-5 business-intelligence-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img
                  src={brand2}
                  alt="Business Intelligence Dashboard"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="mb-4 text-gradient">Powerful Business Intelligence</h2>
                <p className="lead mb-4">
                  Make data-driven decisions with comprehensive analytics and reporting tools designed for multi-store operations.
                </p>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center bi-card">
                      <i className="fas fa-chart-bar text-primary me-3 fa-lg"></i>
                      <div>
                        <h6 className="mb-1">Sales Analytics</h6>
                        <small className="text-muted">Track performance across all stores</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center bi-card">
                      <i className="fas fa-trending-up text-success me-3 fa-lg"></i>
                      <div>
                        <h6 className="mb-1">Growth Metrics</h6>
                        <small className="text-muted">Monitor business growth patterns</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center bi-card">
                      <i className="fas fa-clock text-warning me-3 fa-lg"></i>
                      <div>
                        <h6 className="mb-1">Peak Hours</h6>
                        <small className="text-muted">Identify busy periods and trends</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center bi-card">
                      <i className="fas fa-star text-info me-3 fa-lg"></i>
                      <div>
                        <h6 className="mb-1">Customer Insights</h6>
                        <small className="text-muted">Understand customer behavior</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/book_demo" className="btn btn-primary btn-lg">
                    <i className="fas fa-chart-line me-2"></i>
                    View Analytics Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration & Scalability */}
        <section className="py-5 bg-gradient-primary text-white">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="text-white mb-3">Seamless Integration & Scalability</h2>
              <p className="lead text-white-50">
                Connect with your existing tools and scale as you grow
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-plug fa-2x"></i>
                  </div>
                  <h5 className="text-white mb-3">Third-Party Integrations</h5>
                  <p className="text-white-50">Connect with 100+ apps including Zomato, Swiggy, payment gateways, and accounting software.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-expand-arrows-alt fa-2x"></i>
                  </div>
                  <h5 className="text-white mb-3">Unlimited Scalability</h5>
                  <p className="text-white-50">Scale from single outlet to enterprise-level operations with flexible pricing and feature packages.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-cloud fa-2x"></i>
                  </div>
                  <h5 className="text-white mb-3">Cloud Infrastructure</h5>
                  <p className="text-white-50">Reliable cloud-based infrastructure ensures 99.9% uptime and automatic backups.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="section-title mb-3">Success Stories</h2>
              <p className="lead text-muted">
                See how restaurants are transforming their operations with MenuMitra
              </p>
            </div>
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100 success-story-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src={brand3} alt="Restaurant" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                      <div>
                        <h6 className="mb-0">Fine Dining Chain</h6>
                        <small className="text-muted">15+ Locations</small>
                      </div>
                    </div>
                    <p className="text-muted">"MenuMitra helped us reduce operational costs by 30% and improve customer satisfaction across all our locations."</p>
                    <div className="d-flex align-items-center">
                      <div className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <small className="text-muted">5.0 Rating</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100 success-story-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src={brand4} alt="Restaurant" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                      <div>
                        <h6 className="mb-0">QSR Franchise</h6>
                        <small className="text-muted">50+ Outlets</small>
                      </div>
                    </div>
                    <p className="text-muted">"Centralized management across all outlets has improved our efficiency and reduced training time for new staff."</p>
                    <div className="d-flex align-items-center">
                      <div className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <small className="text-muted">4.9 Rating</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm h-100 success-story-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img src={brand5} alt="Restaurant" className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
                      <div>
                        <h6 className="mb-0">Cafe Chain</h6>
                        <small className="text-muted">25+ Locations</small>
                      </div>
                    </div>
                    <p className="text-muted">"Real-time analytics and inventory management have helped us reduce waste and increase profitability significantly."</p>
                    <div className="d-flex align-items-center">
                      <div className="text-warning me-2">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <small className="text-muted">4.8 Rating</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-5 bg-primary text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-3">Ready to Transform Your Store Management?</h2>
                <p className="lead text-white-50 mb-0">
                  Join thousands of restaurants already using MenuMitra to streamline their operations and boost profitability.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="/book_demo" className="btn btn-light btn-lg me-3 mb-2">
                  <i className="fas fa-calendar-alt me-2"></i>
                  Book Free Demo
                </Link>
                <Link to="/pricing" className="btn btn-outline-light btn-lg mb-2">
                  <i className="fas fa-tags me-2"></i>
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Form />
      <Footer />
    </>
  );
};

export default StoreManagement;
