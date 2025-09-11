import React, { useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const LargeChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Large chain feature cards data
  const largeChainCards = [
    {
      icon: "fas fa-tachometer-alt",
      iconColor: "#007bff",
      title: "Centralize Monitoring",
      titleColor: "text-primary",
      description: "Monitor sales, orders, stock, reports, performance, royalty, and everything of all outlets from your head office"
    },
    {
      icon: "fas fa-home",
      iconColor: "#28a745",
      title: "Central Kitchen & Raw Material",
      titleColor: "text-success",
      description: "Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise"
    },
    {
      icon: "fas fa-shopping-cart",
      iconColor: "#fd7e14",
      title: "Purchase Order Management",
      titleColor: "text-warning",
      description: "track all purchase orders submitted by outlets, define rates, add quantity, assign GRN, purchase invoice and e way bills"
    },
    {
      icon: "fas fa-plug",
      iconColor: "#6f42c1",
      title: "ERP Integration",
      titleColor: "text-info",
      description: "Different accounting software? no worries, take the all files from MenuMitra dashboard and upload it on ERP, it's tat simple"
    },
    {
      icon: "fas fa-utensils",
      iconColor: "#dc3545",
      title: "Centralized Aggregator Menu Management",
      titleColor: "text-danger",
      description: "Tak the control of all own & franchise outlets in your hand, add, edit or delete items globally or locally from head office"
    },
    {
      icon: "fas fa-chart-line",
      iconColor: "#20c997",
      title: "MenuMitra Analytical Dashboard​",
      titleColor: "text-success",
      description: "Use data visualisations & cross functional reports to customisation it to your specifications, make data-driven decisions to improve brand"
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
            One unified POS solution to oversee all your chain outlets
            </h2>
            <p className="mb-30">
            Track all the activities of all outets from centralised dashboard central kitchen & raw material, purchase orders, ERP integration, centralized menu management, e-invoicing and much more
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
      subtitle="Large chain restaurant management features"
      cards={largeChainCards}
      ctaTitle="Ready to Scale Your Restaurant Chain?"
      ctaDescription="Take control of your entire restaurant chain with MenuMitra's unified POS solution. Book a free demo and see how we can help you manage multiple outlets efficiently."
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

export default LargeChain