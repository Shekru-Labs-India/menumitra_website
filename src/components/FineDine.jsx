import React from 'react'
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'
import Rated from './Rated'

const FineDine = () => {
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
    </section>

    <div className="container">
      <div className="row v-center">
        <div className="col-lg-5">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1652030916333.jpeg"
            alt=""
            className="rounded rellax text-center "
            data-rellax-speed={2}
            data-rellax-percentage="0.5"
            style={{ width: 313, height: 313 }}
          />
        </div>
        {/* / column */}
        <div className="col-lg-7 tablet-lg-top-30">
          <p className="mb-30 mt-3">
            "I've been a Ciferon user for two years, and it has transformed how
            we manage all our Kamat Restaurants locations, automating operations
            from top to bottom. The comprehensive integrations and the dedicated
            support team have been game-changers. I highly recommend Ciferon to
            any restaurant looking to upgrade their operations."​
          </p>
          <h3 className="">Dr. Vikram Kamat </h3>
          <h3>Founder &amp; Chairman, VITS Kamat Group</h3>
        </div>
        {/* / column */}
      </div>
      {/* / row */}
    </div>

    <Rated/>

   <Form/>

   <Footer/>
   </>

  )
}

export default FineDine