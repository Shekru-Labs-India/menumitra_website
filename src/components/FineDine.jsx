import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'
import Rated from './Rated'
import { Link } from 'react-router-dom';

const FineDine = () => {
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
            Stress free POS for redefining your fine dine experience
            </h2>
            <p className="mb-30">
            Step up to a platform designed for the nuances of fine dining so you can deliver an exceptional dining service from first course to last
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
                        <h6 className="card-title">Table Management</h6>
                        <p className="card-text">Create multiple areas, add tables, delete, merge, split as per your requirements</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Inventory Management</h6>
                        <p className="card-text">Manage raw materials, recipes, purchase, wastages, audit, reports, stock transfer and more</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Single Dashboard Tracking</h6>
                        <p className="card-text">Track sales, discounts, online sales, taxes, chain outlet sales expense, order wise report and more from master dashboard</p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Spilt Bills</h6>
                        <p className="card-text">Split issues? with MenuMitra split your bills easily by item, amount or discount</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            {/* Card 5 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Employee Reporting</h6>
                        <p className="card-text">Track every activity, such as sales, cash, card, online payment, create and manage shifts.</p>
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

export default FineDine