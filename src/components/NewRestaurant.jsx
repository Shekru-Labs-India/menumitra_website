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
        <div className="row v-center">
          <div className="col-lg-5 tablet-lg-top-30">
          <p>
            Opening New Outlet
            </p>
            <h2 className="mb-30">
            Restaurant Billing Software for your new outlet starts from 4,999*
            </h2>

            
           
            <a href="#products" className="btn btn-primary pill mr-5">
              
              <span>Book a Free Demo</span>
            </a>
          </div>
          {/* / column */}
          <div className="col-lg-7">
            <img
              src='https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/New-Restaurant-2-1400x1146.png' style={{ width: '630px', height: '516px' }}
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
  
  <div id="why-us" className="mt-80">
  <div className="container ">
      <h2 className="text-center mb-50">
      Discover what Ciferon can do for your online order management
      </h2>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card " style={{ backgroundColor: "#f2fbff" }}>

          <div className="card-body">

          <p className="card-text text-center">
              Ciferon Billing POS
              </p>

              <h6 className="card-title text-center">
              Punch your bills in,
less than 5 Seconds
              </h6>
              
            </div>

            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/placeholder-2-16.png"
              alt="Card Image"
              className="card-img-top"
            />
            
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#f6faf6" }}>


          <div className="card-body">

          <p className="card-text text-center">
              Inventory Management Software
              </p>

              <h6 className="card-title text-center">Track your Inventory in
              less than 15 minutes</h6>
             
            </div>

            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/placeholder-2-14.png"
              alt="Card Image"
              className="card-img-top"
            />
            
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#fffcfc" }}>

          <div className="card-body">

          <p className="card-text text-center">
              Online Order Management
              </p>

              <h6 className="card-title text-center">Online Order System to
              manage all your orders</h6>
              
            </div>

            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/placeholder-2-15.png"
              alt="Card Image"
              className="card-img-top"
            />
            
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#fcfcf9" }}>

          <div className="card-body">

          <p className="card-text text-center">
          Customer Relationship Management
              </p>
              <h6 className="card-title text-center">Know everything about your customers in just one click</h6>
              
            </div>

            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/1-13.png"
              alt="Card Image"
              className="card-img-top"
            />
           
          </div>
        </div>
      </div>
      

      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#fff8f1" }}>

          <div className="card-body">

          <p className="card-text text-center">
          Reports & Analytics
              </p>

              <h6 className="card-title text-center">Stay connected with your outlet, Wherever you are.
              </h6>
              
            </div>

            <img
              src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/placeholder-2-18.png"
              alt="Card Image"
              className="card-img-top"
            />
            
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card" style={{ backgroundColor: "#fefbf9" }}>

          <div className="card-body">

          <p className="card-text text-center">
          Menu Management
              </p>
              <h6 className="card-title text-center">Transform your restaurant menu into a digital format.</h6>
              
            </div>

            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/1-17.png"
              alt="Card Image"
              className="card-img-top"
            />
           
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