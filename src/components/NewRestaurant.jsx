import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'
import FeatureCards from './FeatureCards'

const NewRestaurant = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Feature cards data
  const featureCards = [
    {
      icon: "fas fa-cash-register",
      iconColor: "#007bff",
      title: "Billing POS",
      titleColor: "text-primary",
      description: "Punch your bills in less than 5 seconds"
    },
    {
      icon: "fas fa-boxes",
      iconColor: "#28a745",
      title: "Inventory Management",
      titleColor: "text-success",
      description: "Track your inventory in less than 15 minutes"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#fd7e14",
      title: "Online Orders",
      titleColor: "text-warning",
      description: "Manage all your orders from one dashboard"
    },
    {
      icon: "fas fa-users",
      iconColor: "#6f42c1",
      title: "Customer Management",
      titleColor: "text-info",
      description: "Know everything about your customers in one click"
    },
    {
      icon: "fas fa-chart-line",
      iconColor: "#dc3545",
      title: "Reports & Analytics",
      titleColor: "text-danger",
      description: "Stay connected with your outlet, wherever you are"
    },
    {
      icon: "fas fa-book-open",
      iconColor: "#20c997",
      title: "Menu Management",
      titleColor: "text-success",
      description: "Transform your restaurant menu into digital format"
    }
  ];
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

            
           
<a href="/book_demo" className="btn btn-primary pill mr-5">
  
  <span>Book a Free Demo</span>
</a>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    </section>
  
    <FeatureCards 
      title="Complete Restaurant Management Solution"
      subtitle="Everything you need to run your new restaurant efficiently"
      cards={featureCards}
      ctaTitle="Ready to Start Your Restaurant Journey?"
      ctaDescription="Get started with MenuMitra's complete restaurant management solution. Book a free demo and see how we can help your new outlet succeed."
      ctaButtonText="Book Free Demo"
      ctaButtonLink="/book_demo"
      ctaButtonIcon="fas fa-calendar-alt"
      showCta={true}
    />

   <Form/>

  <Footer/>
  </>

  )
}

export default NewRestaurant