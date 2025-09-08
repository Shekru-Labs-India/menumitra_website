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
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Best Cafe POS Software to brew success with every click
            </h2>
            <p className="mb-30">
            Elevate your customers' morning coffee experience with MenuMitra Cafe POS Software, your all-in-one solution for seamless café management.
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
          You've done everything to build your cafe,
          We help you take the next big step.
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Quick Billing</h6>
                        <p className="card-text">Quickly process bills in 5 seconds, create shortcuts, and view favorites easily with our fast cafe POS software.</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Station wise KOT</h6>
                        <p className="card-text">No stress with separate food & drink stations! Just create, assign with MenuMitra cafe POS Software, and relax as everything falls into place.</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Item Variations & Addons</h6>
                        <p className="card-text">No milk? Want hazelnut syrup? Handle every customization effortlessly by creating variations and adding extras with ease.</p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Online Order Integrations</h6>
                        <p className="card-text">Accept orders, mark food ready, control menu status, and everything from MenuMitra Cafe POS Software directly.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            {/* Card 5 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Inventory Management</h6>
                        <p className="card-text">Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything.</p>
                    </div>
                </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Waiter Reporting</h6>
                        <p className="card-text">Waiters performance are important so that their tips! Assign waiter to every table, and see the reports, download for free anytime.</p>
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

export default Cafe