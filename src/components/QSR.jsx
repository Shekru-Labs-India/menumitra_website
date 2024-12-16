import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'

const QSR = () => {
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

export default QSR