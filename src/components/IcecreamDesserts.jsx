import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const IcecreamDesserts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Ice cream & desserts feature cards data
  const iceCreamCards = [
    {
      icon: "fas fa-clock",
      iconColor: "#dc3545",
      title: "Item Expiry Monitoring",
      titleColor: "text-danger",
      description: "Add items with expiry dates, track details of every raw material and end products"
    },
    {
      icon: "fas fa-boxes",
      iconColor: "#28a745",
      title: "Material Management with Low Stock Alerts",
      titleColor: "text-success",
      description: "Add raw materials, make recipes, add purchases, set minimum level alerts of materials, manage operation stressfree!"
    },
    {
      icon: "fas fa-plus-circle",
      iconColor: "#007bff",
      title: "Variation & Addons",
      titleColor: "text-primary",
      description: "No milk, add hazelnut syrup and so on. every customisation can be handle easily by creating variations and assigning addons"
    },
    {
      icon: "fas fa-cube",
      iconColor: "#fd7e14",
      title: "Raw Material Management",
      titleColor: "text-warning",
      description: "Add raw materials, make recipes, add purchases, set minimum level alerts of materials, manage operation stressfree!"
    },
    {
      icon: "fas fa-warehouse",
      iconColor: "#6f42c1",
      title: "Inventory Management",
      titleColor: "text-info",
      description: "Keep the track of every beans and raw materials! purchase invoices, recipes, stock status, wastage control, low stock alerts, and everything."
    },
    {
      icon: "fas fa-home",
      iconColor: "#20c997",
      title: "Central Kitchen",
      titleColor: "text-success",
      description: "Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise."
    }
  ];
  return (
    
   <>
   <Header/>

   <section id="why-us" className="xl ">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/8-1.png"
              alt=""
              className="rounded rellax "
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <h2 className="mb-30">
            Turn Your Bills Into Sweet Treats Just Like Your Ice Creams!
            </h2>
            <p className="mb-30">
            Sweet billing interface so that your staff can manage magical operations such as icecream inventory, cone status, reports and much more
            </p>
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
      subtitle="Ice cream & desserts management features"
      cards={iceCreamCards}
      ctaTitle="Ready to Sweeten Your Ice Cream Business?"
      ctaDescription="Turn your ice cream shop into a sweet success with MenuMitra's specialized POS solution. Book a free demo and discover how we can help your dessert business thrive."
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

export default IcecreamDesserts