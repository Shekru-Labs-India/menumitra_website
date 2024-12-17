import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'

const Bakeries = () => {
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
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/9-1.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            The Powerful Bakery POS Software for Happy Baking
            </h2>
            <p className="mb-30">
            Boost Your Bakery's Business Growth Effortlessly: Let Ciferon POS Software Manage All Your Operations While You Focus on Baking Magic!
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

    <section id="features" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">
          You've done everything to build your bakery.
          We help you take the next big step.
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Advance-Ordering-2.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Advance Ordering​</h5>
                <p style={{ color: '#666' }} className="feature-description">Birthday Cake? cookies? take advance orders by punching guest details, location, amount, delivery time-date, also you can upload the reference images</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="		https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/QR-Code-Based-Ordering-4.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Scan & Order</h5>
                <p style={{ color: '#666' }} className="feature-description">Customer can see offers, place order, make payment! you can also add his plugin to your website for more orders with Ciferon Bakery POS Software</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Aggregator-Integrations-7.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Ordering Integrations</h5>
                <p style={{ color: '#666' }} className="feature-description">Accept orders, mark food ready, control menu status, and everything from Ciferon Bakery POS Software</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Central-Kitchen-Module-10.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Central Kitchen</h5>
                <p style={{ color: '#666' }} className="feature-description">Centralise recipes, items controls, purchase order, indent, material transfer, and do lot more with Ciferon Bakery POS Software</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Inventory-Management-6.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Waiter-Performance-Reporting-3.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Waiter Reporting</h5>
                <p style={{ color: '#666' }} className="feature-description">Waiters performance are important so that their tips! Assign waiter to every table, and see the reports, download for free anytime.</p>
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