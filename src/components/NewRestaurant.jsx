import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'

const NewRestaurant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   
  <>
  <Header/>

  <section id="about" className="bg-white xl">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
          <p>
            Opening New Outlet
            </p>
            <h2 className="mb-30">
            Restaurant Billing Software for your new outlet starts from 4,999*
            </h2>
          </div>
          {/* / column */}
          <div className="col-lg-7">

            
           
<a href="#products" className="btn btn-primary pill mr-5">
  
  <span>Book a Free Demo</span>
</a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
  
  <div id="why-us" className="mt-80">
  <div className="container ">
      <h2 className="text-center mb-50">
      Discover what MenuMitra can do for your online order management
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card " style={{ backgroundColor: "#f2fbff" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                MenuMitra Billing POS
              </p>
              <h6 className="card-title text-center">
                Punch your bills in,
                less than 5 Seconds
              </h6>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#f6faf6" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                Inventory Management Software
              </p>
              <h6 className="card-title text-center">Track your Inventory in
              less than 15 minutes</h6>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#fffcfc" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                Online Order Management
              </p>
              <h6 className="card-title text-center">Online Order System to
              manage all your orders</h6>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#fcfcf9" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                Customer Relationship Management
              </p>
              <h6 className="card-title text-center">Know everything about your customers in just one click</h6>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row justify-content-center">
        {/* Card 5 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#fff8f1" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                Reports & Analytics
              </p>
              <h6 className="card-title text-center">Stay connected with your outlet, Wherever you are.
              </h6>
            </div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card" style={{ backgroundColor: "#fefbf9" }}>
            <div className="card-body p-4">
              <p className="card-text text-center">
                Menu Management
              </p>
              <h6 className="card-title text-center">Transform your restaurant menu into a digital format.</h6>
            </div>
          </div>
        </div>
      </div>
      

    </div>
    </div>

   <Form/>

  <Footer/>
  </>

  )
}

export default NewRestaurant