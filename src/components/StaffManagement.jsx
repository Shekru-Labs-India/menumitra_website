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

const StaffManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Staff Management - MenuMitra</title>
        <meta name="description" content="Comprehensive staff management system for restaurants" />
        <meta name="keywords" content="Staff Management, Restaurant Staff, Menu Mitra, HR Management, Employee Management" />
      </Helmet>
      <Header />
      
      <div className="main-container p-0">
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand5}
                  alt="Staff Management System"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Complete Staff Management System
                </h2>
                <p className="mb-30">
                  Streamline your restaurant's human resources with our comprehensive staff management system. 
                  Handle scheduling, payroll, performance tracking, training, and employee communication 
                  all from one integrated platform.
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
                Staff Management Features
              </h2>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-user-tie feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Employee Profiles</h5>
                  <p style={{ color: '#666' }} className="feature-description">Maintain comprehensive employee profiles with personal information, roles, skills, and performance history.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-calendar-alt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Shift Scheduling</h5>
                  <p style={{ color: '#666' }} className="feature-description">Create and manage staff schedules with automated shift planning and conflict resolution.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-clock feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Time Tracking</h5>
                  <p style={{ color: '#666' }} className="feature-description">Track employee work hours, overtime, and attendance with automated time clock integration.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-money-bill-wave feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Payroll Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Calculate salaries, bonuses, deductions, and generate payroll reports automatically.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-chart-bar feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Performance Analytics</h5>
                  <p style={{ color: '#666' }} className="feature-description">Monitor employee performance, productivity metrics, and generate detailed analytics reports.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-graduation-cap feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Training Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Organize training programs, track certifications, and manage skill development for your staff.</p>
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

export default StaffManagement;
