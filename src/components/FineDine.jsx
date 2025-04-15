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
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Untitled-design-4-1400x1400.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Stress free POS for redefining your fine dine experience
            </h2>
            <p className="mb-30">
            Step up to a platform designed for the nuances of fine dining so you can deliver an exceptional dining service from first course to last
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
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Table-Management.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Table Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Create multiple areas, add tables, delete, merge, split as per your requirements</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Inventory-Management.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Manage raw materials, recipes, purchase, wastages, audit, reports, stock transfer and more</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Single-Dashboard-Monitoring.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Single Dashboard Tracking</h5>
                <p style={{ color: '#666' }} className="feature-description">Track sales, discounts, online sales, taxes, chain outlet sales expense, order wise report and more from master dashboard</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Spilt-Bills.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Spilt Bills</h5>
                <p style={{ color: '#666' }} className="feature-description">Split issues? with Ciferon split your bills easily by item, amount or discount</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Employee-Reporting.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Employee Reporting</h5>
                <p style={{ color: '#666' }} className="feature-description">Track every activity, such as sales, cash, card, online payment, create and manage shifts.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Waiter-Performance-Reporting.png" alt="" />
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

export default FineDine