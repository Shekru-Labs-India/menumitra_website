import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'

import waiter from '../assets/images/waiter-calling-device-hero_lg.jpg'
import button3 from '../assets/images/3-buttons.jpg'
import meter20 from '../assets/images/20-meters.jpg'
import durable from '../assets/images/Durable-and-sturdy.jpg'
import integrated from '../assets/images/Integrated-with-Petpooja.jpg'
import recharge from '../assets/images/Rechargeable.jpg'
import labourcost from '../assets/images/Reduce-labour-costs.jpg'
import varun from '../assets/images/Varun.jpg'
import scheduale from '../assets/images/scheduale-form_md.jpg'
import Form from "./Form";



const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
  <>
  <Header/>

  <section id="about" className=" xl">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Hi! We are here to help Support
            </h2>
            <p>
            Get relevant and instant solutions for your Petpooja POS-related troubles!            </p>
            <a href="#products" className="btn btn-danger pill mr-5">
              
              <span>Connect With Us</span>
            </a>
          </div>
          {/* / column */}
          <div className="col-lg-7">
            <img
              src="https://d28ewddc5mocr5.cloudfront.net/images/support/support-hero_lg.webp" style={{ width: '566px', height: '454px' }}
              alt=""
              className="rounded rellax"
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
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
          Key features for butter smooth customer service
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src={button3} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">24/7 Online support</h5>


            </div>
            <div className="col-md-4 mb-4">
                <img src={meter20} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">20m line of sight range</h5>
                
            </div>
            <div className="col-md-4 mb-4">
                <img src={durable} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">Durable and sturdy device</h5>
              
            </div>
            <div className="col-md-4 mb-4">
                <img src={recharge} alt=""  style={{ width: '140px', height: '140px' }}/>
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">Rechargeable transmitter with 15 days battery life</h5>
               
            </div>
            <div className="col-md-4 mb-4">
               <img src={integrated} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">Integrated with Petpooja POS and Captain app</h5>
                
            </div>
            <div className="col-md-4 mb-4">
                <img src={labourcost} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">Reduce labour costs and save staff time</h5>
                
            </div>
        </div>
    </div>

        {/* / row */}
      </div>
      {/* / container */}
    </div>

   




    

<Form/>

  <Footer/>
  </>

  )
}

export default Support