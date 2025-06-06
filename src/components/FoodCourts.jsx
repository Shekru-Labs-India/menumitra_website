import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import Form from './Form'
import { Link } from 'react-router-dom';

const FoodCourts = () => {
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
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/3-1.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Centralise POS
            is all you need for multiple counters
            </h2>
            <p className="mb-30">
            Effortlessly handle your Chat, Chinese, Rajasthani, and 20 other food counters using just one billing software.
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
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Customer-Account-Top-up-Redemption-1.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Customer Account Top-up & Redemption</h5>
                <p style={{ color: '#666' }} className="feature-description">MenuMitra offers a smooth credit flow! Easy to load, order, and pay. Use the remaining funds now or later.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/QR-Code-Based-Ordering-3.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">QR-Code Based Ordering</h5>
                <p style={{ color: '#666' }} className="feature-description">No more food counter hopping after shopping! With MenuMitra's QR-code, your customers can order & pay from their table.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Royalty-Management-2.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Royalty Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Track sales of individual counters, pre define royalties, download reports. no more hassle</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Order-Integration-10.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Order Integration</h5>
                <p style={{ color: '#666' }} className="feature-description">Manage online aggregators separately by their counters, under a single umbrella</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Counter-wise-Report-3.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Counter wise Report</h5>
                <p style={{ color: '#666' }} className="feature-description">Track orders & sales of individual counters, separate app for counter owners to track their business at free of cost</p>
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
    </div>

  

   <Rated/>

   <Form/>

  <Footer/>
  </>

  )
}

export default FoodCourts