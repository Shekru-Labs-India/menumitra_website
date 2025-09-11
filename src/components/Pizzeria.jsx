import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form from './Form'
import Rated from './Rated'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const Pizzeria = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pizzeria feature cards data
  const pizzeriaCards = [
    {
      icon: "fas fa-bolt",
      iconColor: "#007bff",
      title: "Quick Billing with Customizations",
      titleColor: "text-primary",
      description: "Such the bills in 5 secs, with toppings, addons, offers, and more. Just the way you like it!"
    },
    {
      icon: "fas fa-tags",
      iconColor: "#28a745",
      title: "Combos. Offers & Discounts",
      titleColor: "text-success",
      description: "Apply offers, create combos, customise discount options, MenuMitra will handle everything easily"
    },
    {
      icon: "fas fa-building",
      iconColor: "#fd7e14",
      title: "Multiple Outlet Monitoring",
      titleColor: "text-warning",
      description: "1, 2, 3, 4...500! no worries, track & manage all outlets from your head office from admin panel and owners app"
    },
    {
      icon: "fas fa-search",
      iconColor: "#6f42c1",
      title: "Raw Material Tracking",
      titleColor: "text-info",
      description: "Track all raw materials, such as tomatoes, onions, sauces. mark purchase entries, and see stock status. it's that easy!"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#dc3545",
      title: "Online Order Integrations",
      titleColor: "text-danger",
      description: "Accept orders, mark food ready, control menu status, and everything from MenuMitra POS directly"
    },
    {
      icon: "fas fa-users",
      iconColor: "#20c997",
      title: "Employee Reporting",
      titleColor: "text-success",
      description: "Create shifts, assign caisher, track cash, and online payment before handover. no more pains!"
    }
  ];
  return (
    
   <>
   <Header/>

   <section id="why-us" className="bg-white xl mt-50">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            MenuMitra POS for pizza shop to make every topping right
            </h2>
            <p className="mb-30">
            With MenuMitra POS, manage all your operations from a single dashboard for Pizzeria or Pizza shop
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
      title="Access benefits designed just for you"
      subtitle="Pizzeria management features for pizza shops"
      cards={pizzeriaCards}
      ctaTitle="Ready to Perfect Your Pizza Business?"
      ctaDescription="Make every pizza order perfect with MenuMitra's specialized POS solution for pizzerias. Book a free demo and see how we can help your pizza shop succeed."
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

export default Pizzeria