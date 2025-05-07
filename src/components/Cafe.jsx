import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import { Link } from 'react-router-dom';

const Cafe = () => {
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
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Untitled-design-3-1400x1400.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Best Cafe POS Software to brew success with every click
            </h2>
            <p className="mb-30">
            Elevate your customers' morning coffee experience with MenuMitra Cafe POS Software, your all-in-one solution for seamless café management.
            </p>
            <Link to="/book_demo" className="btn btn-primary pill mr-5">
             
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
          You've done everything to build your cafe,
          We help you take the next big step.
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Quick-Billing-6.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Quick Billing</h5>
                <p style={{ color: '#666' }} className="feature-description">Quickly process bills in 5 seconds, create shortcuts, and view favorites easily with our fast cafe POS software.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Station-wise-KOT-3.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Station wise KOT</h5>
                <p style={{ color: '#666' }} className="feature-description">No stress with separate food & drink stations! Just create, assign with MenuMitra cafe POS Software, and relax as everything falls into place.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Item-Variations-Addons-5.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Item Variations & Addons</h5>
                <p style={{ color: '#666' }} className="feature-description">Waiters performance are important so that their tips! Assign waiter to every table, and see the reports, download for free anytime.No milk? Want hazelnut syrup? Handle every customization effortlessly by creating variations and adding extras with ease.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Aggregator-Integrations-4.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Order Integrations</h5>
                <p style={{ color: '#666' }} className="feature-description">Accept orders, mark food ready, control menu status, and everything from MenuMitra Cafe POS Softwaredirectly.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Inventory-Management-6.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Waiter-Performance-Reporting-3.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Waiter Reporting</h5>
                <p style={{ color: '#666' }} className="feature-description">Waiters performance are important so that their tips! Assign waiter to every table, and see the reports, download for free anytime.</p>
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

export default Cafe