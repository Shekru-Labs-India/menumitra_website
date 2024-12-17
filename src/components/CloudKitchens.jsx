import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'

const CloudKitchens = () => {
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
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1-2.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            A powerful Cloud POS Software for your Cloud Kitchen
            </h2>
            <p className="mb-30">
            Effortlessly handle your Cloud Kitchen's online food orders, deliveries, menu, and prices with Ciferon POS.
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
          You've done everything to build your cloud kitchen.
          We help you take the next big step.
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Online-Order-Integration-11.png"  alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Online Order Integrations</h5>
                <p style={{ color: '#666' }} className="feature-description">Accept orders, mark food ready, control menu status, and everything from Ciferon POS directly.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Virtual-Brands-1.png" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Virtual Brands</h5>
                <p style={{ color: '#666' }} className="feature-description">Multiple brands? manage every brand fro one Ciferon POS, by managing menus, prices, integrations, brand wise reports and everything</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Item-Variations-Addons-5.png	" alt="" />
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Item Variations & Addons
                </h5>
                <p style={{ color: '#666' }} className="feature-description">No milk? Want hazelnut syrup? Handle every customization effortlessly by creating variations and adding extras with ease.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Raw-Material-Management-4.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Raw Material Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Add raw materials, make recipes, add purchases, set minimum level alerts of materials, manage operation stressfree!</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Inventory-Management-6.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Inventory Management</h5>
                <p style={{ color: '#666' }} className="feature-description">Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything.</p>
            </div>
            <div className="col-md-4 mb-4">
                <img src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/Central-Kitchen-Module-2-1.png" alt="" />
                
                <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title mt-2">Central Kitchen</h5>
                <p style={{ color: '#666' }} className="feature-description">Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise.</p>
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

export default CloudKitchens