import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const Cafe = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cafe feature cards data
  const cafeCards = [
    {
      icon: "fas fa-bolt",
      iconColor: "#007bff",
      title: "Quick Billing",
      titleColor: "text-primary",
      description: "Quickly process bills in 5 seconds, create shortcuts, and view favorites easily with our fast cafe POS software"
    },
    {
      icon: "fas fa-list-alt",
      iconColor: "#28a745",
      title: "Station wise KOT",
      titleColor: "text-success",
      description: "No stress with separate food & drink stations! Just create, assign with MenuMitra cafe POS Software, and relax as everything falls into place"
    },
    {
      icon: "fas fa-plus-circle",
      iconColor: "#fd7e14",
      title: "Item Variations & Addons",
      titleColor: "text-warning",
      description: "No milk? Want hazelnut syrup? Handle every customization effortlessly by creating variations and adding extras with ease"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#6f42c1",
      title: "Online Order Integrations",
      titleColor: "text-info",
      description: "Accept orders, mark food ready, control menu status, and everything from MenuMitra Cafe POS Software directly"
    },
    {
      icon: "fas fa-warehouse",
      iconColor: "#dc3545",
      title: "Inventory Management",
      titleColor: "text-danger",
      description: "Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything"
    },
    {
      icon: "fas fa-user-tie",
      iconColor: "#20c997",
      title: "Waiter Reporting",
      titleColor: "text-success",
      description: "Waiters performance are important so that their tips! Assign waiter to every table, and see the reports, download for free anytime"
    }
  ];
  return (
   
    <>
    <Header/>
  
    <section id="why-us" className="xl ">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Best Cafe POS Software to brew success with every click
            </h2>
            <p className="mb-30">
            Elevate your customers' morning coffee experience with MenuMitra Cafe POS Software, your all-in-one solution for seamless café management.
            </p>
          </div>
          {/* / column */}
          <div className="col-lg-7">
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

    <FeatureCards 
      title="You've done everything to build your cafe, We help you take the next big step."
      subtitle="Cafe management features for brewing success"
      cards={cafeCards}
      ctaTitle="Ready to Brew Success in Your Cafe?"
      ctaDescription="Elevate your cafe experience with MenuMitra's specialized POS solution. Book a free demo and discover how we can help your cafe business flourish."
      ctaButtonText="Book Free Demo"
      ctaButtonLink="/book_demo"
      ctaButtonIcon="fas fa-calendar-alt"
      showCta={true}
    />

    <Rated/>

    <Form/>

    <Footer/>
    </>
  )
}

export default Cafe