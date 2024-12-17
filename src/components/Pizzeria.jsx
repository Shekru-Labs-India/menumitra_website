import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form from './Form'
import Rated from './Rated'

const Pizzeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
   <>
   <Header/>

   <section id="why-us" className="xl ">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/6-2.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Ciferon POS for pizza shop to make every topping right
            </h2>
            <p className="mb-30">
            With Ciferon POS, manage all your operations from a single dashboard for Pizzeria or Pizza shop
            </p>
            <a href="#x" className="btn btn-primary pill mr-5">
             
              <span>Book a free demo</span>
            </a>
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
          Access benefits designed just for you
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Quick-Billing-with-Customizations-3.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Quick Billing with Customizations</h5>
                <p style={{ color: '#666' }} className="feature-description">Such the bills in 5 secs, with toppings, addons, offers, and more. Just the way you like it!</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/QR-Code-Based-Ordering-3.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Combos. Offers & Discounts</h5>
                <p style={{ color: '#666' }} className="feature-description">Apply offers, create combos, customise discount options, Ciferon will handle everything easily.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Multiple-Outlet-Monitoring-2.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Multiple Outlet Monitoring</h5>
                <p style={{ color: '#666' }} className="feature-description">1, 2, 3, 4...500! no worries, track & manage all outlets from your head office from admin panel and owners app.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Raw-Material-Tracking-4.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Raw Material Tracking</h5>
                <p style={{ color: '#666' }} className="feature-description">Track all raw materials, such as tomatoes, onions, sauces. mark purchase entries, and see stock status. it's that easy!</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Aggregator-Integrations-4.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Order Integrations</h5>
                <p style={{ color: '#666' }} className="feature-description">Accept orders, mark food ready, control menu status, and everything from Ciferon POS directly.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Employee-Reporting-4.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Employee Reporting</h5>
                <p style={{ color: '#666' }} className="feature-description">Create shifts, assign caisher, track cash, and online payment before handover. no more pains!</p>
            </div>
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>

    

    <Rated/>

    <Form/>

    

   <Footer/>
   </>

  )
}

export default Pizzeria