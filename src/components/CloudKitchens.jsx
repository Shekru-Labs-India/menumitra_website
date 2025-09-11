import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const CloudKitchens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Cloud kitchen feature cards data
  const cloudKitchenCards = [
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#007bff",
      title: "Online Order Integrations",
      titleColor: "text-primary",
      description: "Accept orders, mark food ready, control menu status, and everything from MenuMitra POS directly"
    },
    {
      icon: "fas fa-store",
      iconColor: "#28a745",
      title: "Virtual Brands",
      titleColor: "text-success",
      description: "Multiple brands? manage every brand fro one MenuMitra POS, by managing menus, prices, integrations, brand wise reports and everything"
    },
    {
      icon: "fas fa-plus-circle",
      iconColor: "#fd7e14",
      title: "Item Variations & Addons",
      titleColor: "text-warning",
      description: "No milk? Want hazelnut syrup? Handle every customization effortlessly by creating variations and adding extras with ease"
    },
    {
      icon: "fas fa-cube",
      iconColor: "#6f42c1",
      title: "Raw Material Management",
      titleColor: "text-info",
      description: "Add raw materials, make recipes, add purchases, set minimum level alerts of materials, manage operation stressfree!"
    },
    {
      icon: "fas fa-warehouse",
      iconColor: "#dc3545",
      title: "Inventory Management",
      titleColor: "text-danger",
      description: "Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything"
    },
    {
      icon: "fas fa-home",
      iconColor: "#20c997",
      title: "Central Kitchen",
      titleColor: "text-success",
      description: "Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise"
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
            A powerful Cloud POS Software for your Cloud Kitchen
            </h2>
            <p className="mb-30">
            Effortlessly handle your Cloud Kitchen's online food orders, deliveries, menu, and prices with MenuMitra POS.
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
      title="You've done everything to build your cloud kitchen. We help you take the next big step."
      subtitle="Cloud kitchen management features for digital success"
      cards={cloudKitchenCards}
      ctaTitle="Ready to Scale Your Cloud Kitchen?"
      ctaDescription="Streamline your cloud kitchen operations with MenuMitra's powerful POS solution. Book a free demo and see how we can help your digital kitchen thrive."
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

export default CloudKitchens