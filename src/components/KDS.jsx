import React, { useEffect, useState } from "react";
import Header from './Header'
import scan from "../assets/images/scan.jpg"
import Footer from './Footer'
import Form from "./Form";
import { Link } from 'react-router-dom';

const KDS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
   <>
   <>
  <Header/>

  <div className="main-container p-0">
    <section id="why-us" className="xl bg-gradient-body">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src={scan}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">Kitchen Display System</h2>
            <p className="mb-30">
              Allow your chef to focus on flavour rather than chasing orders.
              Keep your kitchen running smoothly. Automate the entire
              ticket-keeping process with Ciferon's KDS. This will help you
              serve customers quickly.​
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
    <div id="features" className="mt-80">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-50">
            Discover what KDS can do for your outlet
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Display Orders directly on the kitchen screen</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's KDS allows you to display both online and dine-in orders immediately on your kitchen screen, avoiding confusion.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book-open feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Eliminate paper KOT</h5>
                <p style={{ color: '#666' }} className="feature-description">It's time to digitize and remove the paper KOT procedure.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-book feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Works on Android and Windows</h5>
                <p style={{ color: '#666' }} className="feature-description">Ciferon's KDS works flawlessly on both Android and Windows, allowing you to use whichever platform best suits you and your brand.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-file-invoice feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Display individual KOT and aggregated item list</h5>
                <p style={{ color: '#666' }} className="feature-description">Your central kitchen will find the procedure easier with the ability to view all KOTs and aggregated item lists of the orders from different tables.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-qrcode feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Mark food ready from the kitchen display</h5>
                <p style={{ color: '#666' }} className="feature-description">No more shouting from the kitchen when the order is ready; instead, you can change the order status directly from the KDS.</p>
            </div>
            <div className="col-md-4 mb-4">
                <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-mobile-alt feature-icon"></i>
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Increase kitchen productivity</h5>
                <p style={{ color: '#666' }} className="feature-description">Your kitchen productivity will undoubtedly rise when every minor and major detail is shown on a single kitchen display screen, allowing you to make quick decisions and run your kitchen effortlessly.</p>
            </div>
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>
    {/* / features */}
    
  </div>
  {/* / main-container */}
<Form/>
  <Footer/>
</>

   </>

  )
}

export default KDS