import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'
import './NewRestaurant.css'

const NewRestaurant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   
  <>
  <Header/>

  <section id="about" className="bg-white xl">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
          <p>
            Opening New Outlet
            </p>
            <h2 className="mb-30">
            Restaurant Billing Software for your new outlet starts from 4,999*
            </h2>
          </div>
          {/* / column */}
          <div className="col-lg-7">

            
           
<a href="/book_demo" className="btn btn-primary pill mr-5">
  
  <span>Book a Free Demo</span>
</a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
  
  <div id="features" className="mt-80 bg-light new-restaurant-section">
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="section-title mb-3">
          Complete Restaurant Management Solution
        </h2>
        <p className="lead text-muted">
          Everything you need to run your new restaurant efficiently
        </p>
      </div>
      
      <div className="row g-5 mb-5">
        {/* Card 1 - Billing POS */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-cash-register feature-icon" style={{ fontSize: '48px', color: '#007bff' }}></i>
              </div>
              <h5 className="card-title mb-3 text-primary">Billing POS</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Punch your bills in less than 5 seconds
              </h6>
            </div>
          </div>
        </div>

        {/* Card 2 - Inventory Management */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-boxes feature-icon" style={{ fontSize: '48px', color: '#28a745' }}></i>
              </div>
              <h5 className="card-title mb-3 text-success">Inventory Management</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Track your inventory in less than 15 minutes
              </h6>
            </div>
          </div>
        </div>

        {/* Card 3 - Online Orders */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-mobile-alt feature-icon" style={{ fontSize: '48px', color: '#fd7e14' }}></i>
              </div>
              <h5 className="card-title mb-3 text-warning">Online Orders</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Manage all your orders from one dashboard
              </h6>
            </div>
          </div>
        </div>

        {/* Card 4 - Customer Management */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-users feature-icon" style={{ fontSize: '48px', color: '#6f42c1' }}></i>
              </div>
              <h5 className="card-title mb-3 text-info">Customer Management</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Know everything about your customers in one click
              </h6>
            </div>
          </div>
        </div>

        {/* Card 5 - Reports & Analytics */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-chart-line feature-icon" style={{ fontSize: '48px', color: '#dc3545' }}></i>
              </div>
              <h5 className="card-title mb-3 text-danger">Reports & Analytics</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Stay connected with your outlet, wherever you are
              </h6>
            </div>
          </div>
        </div>

        {/* Card 6 - Menu Management */}
        <div className="col-md-6 col-lg-4">
          <div className="card h-100 border-0 shadow-sm feature-card">
            <div className="card-body p-4 text-center">
              <div className="feature-icon-wrapper mb-5">
                <i className="fas fa-book-open feature-icon" style={{ fontSize: '48px', color: '#20c997' }}></i>
              </div>
              <h5 className="card-title mb-3 text-success">Menu Management</h5>
              <h6 className="card-subtitle mb-0 fw-bold">
                Transform your restaurant menu into digital format
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cta-section">
              <h4 className="mb-3">Ready to Start Your Restaurant Journey?</h4>
              <p className="mb-4">
                Get started with MenuMitra's complete restaurant management solution. 
                Book a free demo and see how we can help your new outlet succeed.
              </p>
              <a href="/book_demo" className="btn btn-light btn-lg px-4">
                <i className="fas fa-calendar-alt me-2"></i>
                Book Free Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

   <Form/>

  <Footer/>
  </>

  )
}

export default NewRestaurant