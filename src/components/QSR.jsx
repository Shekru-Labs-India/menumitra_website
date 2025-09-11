import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const QSR = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // QSR feature cards data
  const qsrCards = [
    {
      icon: "fas fa-bolt",
      iconColor: "#007bff",
      title: "Quick Billing to serve orders faster",
      titleColor: "text-primary",
      description: "Punch bills in 5 seconds, it is that quick, create shortcodes, see favourite items, and make bills"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#28a745",
      title: "Online Order Integrations",
      titleColor: "text-success",
      description: "Accept orders, mark food ready, control menu status, and everything from MenuMitra POS directly"
    },
    {
      icon: "fas fa-list-alt",
      iconColor: "#fd7e14",
      title: "Category-wise KOT with KDS",
      titleColor: "text-warning",
      description: "Multiple categories? no worries! create stations, assign items & process orders from KDS and it's all sorted"
    },
    {
      icon: "fas fa-calculator",
      iconColor: "#6f42c1",
      title: "Food Costing, wastage check",
      titleColor: "text-info",
      description: "Create recipes, add vendors, purchase entry, wastage report, stock status, low stock alerts & everything"
    },
    {
      icon: "fas fa-layer-group",
      iconColor: "#dc3545",
      title: "Item Combos & Variations",
      titleColor: "text-danger",
      description: "Small meal, medium, large and so on. every customisation can be handle easily by creating variations and assigning addons"
    },
    {
      icon: "fas fa-home",
      iconColor: "#20c997",
      title: "Central Kitchen",
      titleColor: "text-success",
      description: "Centralise recipes, items controls, purchase order, indent, material transfer, and do lot more"
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
            Superfast POS so you should not slow down to manage your QSR
            </h2>
            <p className="mb-30">
            Stay out of the weeds with a system that's designed for quick service. Now you can serve more guests faster without hiring extra hands.
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
      subtitle="Quick Service Restaurant management features"
      cards={qsrCards}
      ctaTitle="Ready to Speed Up Your QSR Operations?"
      ctaDescription="Serve customers faster and more efficiently with MenuMitra's superfast POS solution designed for quick service restaurants. Book a free demo today!"
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

export default QSR