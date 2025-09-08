import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import { Link } from 'react-router-dom';

const Bakeries = () => {
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
            The Powerful Bakery POS Software for Happy Baking
            </h2>
            <p className="mb-30">
            Boost Your Bakery's Business Growth Effortlessly: Let MenuMitra POS Software Manage All Your Operations While You Focus on Baking Magic!
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

    <section id="features" className="lg">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title ">
          You've done everything to build your bakery.
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
                        <h6 className="card-title">Advance Ordering​</h6>
                        <p className="card-text">Birthday Cake? cookies? take advance orders by punching guest details, location, amount, delivery time-date, also you can upload the reference images</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Scan & Order</h6>
                        <p className="card-text">Customer can see offers, place order, make payment! you can also add his plugin to your website for more orders with MenuMitra Bakery POS Software</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Online Ordering Integrations</h6>
                        <p className="card-text">Accept orders, mark food ready, control menu status, and everything from MenuMitra Bakery POS Software</p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Central Kitchen</h6>
                        <p className="card-text">Centralise recipes, items controls, purchase order, indent, material transfer, and do lot more with MenuMitra Bakery POS Software</p>
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
    </section>



    <Rated/>

    <Form/>

    <Footer/>

    </>

  )
}

export default Bakeries