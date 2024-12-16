import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'

const LargeChain = () => {
  return (
   
    <>
    <Header/>

    <section id="why-us" className="xl ">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Untitled-design-4-1400x1400.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            One unified POS solution to oversee all your chain outlets
            </h2>
            <p className="mb-30">
            Track all the activities of all outets from centralised dashboard central kitchen & raw material, purchase orders, ERP integration, centralized menu management, e-invoicing and much more
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
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Centralize-Monitoring-HO-Dashboard-1.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Centralize Monitoring (HO Dashboard)</h5>
                <p style={{ color: '#666' }} className="feature-description">Monitor sales, orders, stock, reports, performance, royalty, and everything of all outlets from your head office.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Central-Kitchen-Raw-Material-2.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Central Kitchen & Raw Material</h5>
                <p style={{ color: '#666' }} className="feature-description">Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/parches-management-1.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Purchase Order Management</h5>
                <p style={{ color: '#666' }} className="feature-description">track all purchase orders submitted by outlets, define rates, add quantity, assign GRN, purchase invoice and e way bills.
                </p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/ERP-Integration-1.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">ERP Integration</h5>
                <p style={{ color: '#666' }} className="feature-description">Different accounting software? no worries, take the all files from Ciferon dashboard and upload it on ERP, it's tat simple.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2…4/01/Centralized-Aggregator-Menu-Management-2.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Centralized Aggregator Menu Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Tak the control of all own & franchise outlets in your hand, add, edit or delete items globally or locally from head office</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Ciferon-Analytical-Dashboard-2.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Ciferon Analytical Dashboard​</h5>
                <p style={{ color: '#666' }} className="feature-description">Use data visualisations & cross functional reports to customisation it to your specifications, make data-driven decisions to improve brand</p>
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

export default LargeChain