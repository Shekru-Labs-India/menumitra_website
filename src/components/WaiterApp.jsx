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



const WaiterApp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
  <>
  <Header/>

  <section id="about" className="bg-white xl">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Waiter Calling System
            </h2>
            <p>
            Simplify customer management with a small stylish device that allows them to ask for waiter, water or bill whenever they want.
            </p>
            <a href="#products" className="btn btn-primary pill mr-5">
              
              <span>Book a Free Demo</span>
            </a>
          </div>
          {/* / column */}
          <div className="col-lg-7">
            <img
              src={waiter} style={{ width: '566px', height: '454px' }}
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

    <section id="features" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">
          Key features for butter smooth customer service
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <img src={button3} alt="" style={{ width: '140px', height: '140px' }} />
                <h5 style={{ fontWeight: 500, marginBottom: '10px' }} className="feature-title">Three different buttons with three distinct lights for each function</h5>

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
    </section>

    <div class="container my-5">
    <div class="row justify-content-center">
        
        <div class="col-12 col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
            <div class="testimonial-image-container">
                <img src={varun} alt="Varun Tuli" class="testimonial-image img-fluid rounded" style={{ width: '500px', height: '413px' }} />
            </div>
        </div>
        
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
            <p class="testimonial-quote font-italic mb-4">"Everybody in our team loves Petpooja’s Waiter Calling Device!"</p>
            <p class="testimonial-author mb-1">
                <strong>Varun Tuli</strong><br />
                Managing Director
            </p>
            <div class="testimonial-logo mt-2 font-weight-bold">YUM YUM CHA</div>
        </div>
    </div>
</div>




    <section id="faq" className="xl">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-80">Frequently Asked Questions</h2>
        </div>
        {/* / text-center */}
        <div className="row v-center">
          <div className="col-lg-8 tablet-lg-top-30">
            <div
              className="accordion minimal-accordion"
              id="minimal-accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseOne"
                    aria-expanded="true"
                    aria-controls="minimal-collapseOne"
                  >
                   How does WCD help improve my customers' experience?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="minimal-headingOne"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  With the help of WCD, your customers get quick service when they need it without waiting for the staff's attention.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseTwo"
                    aria-expanded="false"
                    aria-controls="minimal-collapseTwo"
                  >
                  Does WCD need an active internet connection?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingTwo"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  WCS operates on rechargeable batteries and does not require an active internet connection.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseThree"
                    aria-expanded="false"
                    aria-controls="minimal-collapseThree"
                  >
                   It is synced with Petpooja's restaurant pos & captain app?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingThree"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  Petpooja's WCD perfectly syncs with the POS and the Captain App.
                   Every time a customer presses any of the buttons, both systems get alerts on their screens.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseFour"
                    aria-expanded="false"
                    aria-controls="minimal-collapseFour"
                  >
                   What is the range of Petpooja WCD?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingFour"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  The device has a connectivity range of 20 meters.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="minimal-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#minimal-collapseFour"
                    aria-expanded="false"
                    aria-controls="minimal-collapseFour"
                  >
                   How can waiters/ servers know about pending WCS tickets?
                    <span>
                      <i className="fas fa-chevron-down" />
                    </span>
                  </button>
                </h2>
                {/* / accordion-header */}
                <div
                  id="minimal-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="minimal-headingFour"
                  data-bs-parent="#minimal-accordionExample"
                >
                  <div className="accordion-body">
                  They can view it on their waiter-calling TV application.
                   The ticket can be closed only using the Captain app or the POS. Until resolved, the ticket stays active.
                  </div>
                  {/* / accordion-body */}
                </div>
                {/* / collapse */}
              </div>
              {/* / accordion-item */}
            </div>
            {/* / accordion */}
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>

    
    <div className="container-fluid my-5 p-3" style={{ backgroundColor: "#faf2eb" }}>
    <h2 className="section-title text-center mb-4">Explore Add-ons that boost your business</h2>
    <p className="text-center mb-5">All-in-one restaurant billing POS system that handles all your operations on a single screen</p>
    
    <div className="row gy-4"> {/* gy-4 adds vertical spacing */}
        <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
            <h5 className="mb-3">Customer service</h5>
            <div className="d-flex justify-content-center gap-3">
                <i className="fa-solid fa-display fa-7x"></i>
                <i className="fa-solid fa-qrcode fa-7x"></i>
            </div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
            <h5 className="mb-3">Analytics</h5>
            <div className="d-flex justify-content-center gap-3">
                <i className="fa-solid fa-repeat fa-7x"></i>
                <i className="fa-solid fa-eye fa-7x"></i>
            </div>
        </div>

        <div className="col-12 col-md-4 d-flex flex-column align-items-center text-center">
            <h5 className="mb-3">CRM</h5>
            <div className="d-flex justify-content-center gap-3">
                <i className="fa-solid fa-wallet fa-7x"></i>
                <i className="fa-solid fa-file-pen fa-7x"></i>
            </div>
        </div>
    </div>
</div>


    

   

    <div className="container mt-5 mb-5">
    <h1 className="text-center">Schedule a free demo</h1>
    <p className="text-center">Get in touch with our team to clarify your queries</p>
    <div className="row justify-content-center">
        
        <div className="col-md-6">
            <div className="form-container">
                <div className="form-section">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name*</label>
                            <input type="text" className="form-control" id="name" required  />
                        </div>
                        
                        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="phone">Phone number*</label>
                                    <input type="tel" className="form-control" id="phone" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" className="form-control" id="email" required />
                                </div>
                            </div>
                        </div>

                      
                        <div className="form-group">
                            <label htmlFor="city">City*</label>
                            <input type="text" className="form-control" id="city" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="restaurant">Restaurant Name*</label>
                            <input type="text" className="form-control" id="restaurant" required />
                        </div>

                    
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        
        <div className="col-md-6">
            <div className="illustration">
                <img src={scheduale} alt="Illustration" className="img-fluid" style={{ width: '500px', height: '450px' }}  />
            </div>
        </div>
    </div>
</div>



  <Footer/>
  </>

  )
}

export default WaiterApp