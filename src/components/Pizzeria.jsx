import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form from './Form'
import Rated from './Rated'
import { Link } from 'react-router-dom';

const Pizzeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
   <>
   <Header/>

   <section id="why-us" className="xl ">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            MenuMitra POS for pizza shop to make every topping right
            </h2>
            <p className="mb-30">
            With MenuMitra POS, manage all your operations from a single dashboard for Pizzeria or Pizza shop
            </p>
          </div>
          {/* / column */}
          <div className="col-lg-7">
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
        <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Quick Billing with Customizations</h6>
                        <p className="card-text">Such the bills in 5 secs, with toppings, addons, offers, and more. Just the way you like it!</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Combos. Offers & Discounts</h6>
                        <p className="card-text">Apply offers, create combos, customise discount options, MenuMitra will handle everything easily.</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Multiple Outlet Monitoring</h6>
                        <p className="card-text">1, 2, 3, 4...500! no worries, track & manage all outlets from your head office from admin panel and owners app.</p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Raw Material Tracking</h6>
                        <p className="card-text">Track all raw materials, such as tomatoes, onions, sauces. mark purchase entries, and see stock status. it's that easy!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            {/* Card 5 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Online Order Integrations</h6>
                        <p className="card-text">Accept orders, mark food ready, control menu status, and everything from MenuMitra POS directly.</p>
                    </div>
                </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Employee Reporting</h6>
                        <p className="card-text">Create shifts, assign caisher, track cash, and online payment before handover. no more pains!</p>
                    </div>
                </div>
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