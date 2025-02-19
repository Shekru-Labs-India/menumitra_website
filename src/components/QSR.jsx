import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import { Link } from 'react-router-dom';

const QSR = () => {
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
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/2-3.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Superfast POS so you should not slow down to manage your QSR
            </h2>
            <p className="mb-30">
            Stay out of the weeds with a system that’s designed for quick service. Now you can serve more guests faster without hiring extra hands.
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
          Access benefits designed just for you
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Quick-Billing-6.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Quick Billing to serve orders faster</h5>
                <p style={{ color: '#666' }} className="feature-description">faster
                Punch bills in 5 seconds, it is that quick, create shortcodes, see favourite items, and make bills.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Aggregator-Integrations-4.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Order Integrations</h5>
                <p style={{ color: '#666' }} className="feature-description">Accept orders, mark food ready, control menu status, and everything from Ciferon POS directly.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Station-wise-KOT-4.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Category-wise KOT with KDS</h5>
                <p style={{ color: '#666' }} className="feature-description">Multiple categories? no worries! create stations, assign items & process orders from KDS and it's all sorted.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Food-Costing-wastage-check-1.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Food Costing, wastage check</h5>
                <p style={{ color: '#666' }} className="feature-description">Create recipes, add vendors, purchase entry, wastage report, stock status, low stock alerts & everything</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Item-Variations-Addons-6.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Item Combos & Variations</h5>
                <p style={{ color: '#666' }} className="feature-description">Small meal, medium, large and so on. every customisation can be handle easily by creating variations and assigning addons</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Central-Kitchen-Module-9.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Central Kitchen</h5>
                <p style={{ color: '#666' }} className="feature-description">Centralise recipes, items controls, purchase order, indent, material transfer, and do lot more</p>
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

export default QSR