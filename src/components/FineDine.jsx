import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import  Form  from './Form'
import Rated from './Rated'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const FineDine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fine dining feature cards data
  const fineDineCards = [
    {
      icon: "fas fa-table",
      iconColor: "#fd7e14",
      title: "Table Management",
      titleColor: "text-warning",
      description: "Create multiple areas, add tables, delete, merge, split as per your requirements"
    },
    {
      icon: "fas fa-boxes",
      iconColor: "#28a745",
      title: "Inventory Management",
      titleColor: "text-success",
      description: "Manage raw materials, recipes, purchase, wastages, audit, reports, stock transfer and more"
    },
    {
      icon: "fas fa-chart-line",
      iconColor: "#007bff",
      title: "Single Dashboard Tracking",
      titleColor: "text-primary",
      description: "Track sales, discounts, online sales, taxes, chain outlet sales expense, order wise report and more from master dashboard"
    },
    {
      icon: "fas fa-receipt",
      iconColor: "#6f42c1",
      title: "Split Bills",
      titleColor: "text-info",
      description: "Split issues? with MenuMitra split your bills easily by item, amount or discount"
    },
    {
      icon: "fas fa-users",
      iconColor: "#dc3545",
      title: "Employee Reporting",
      titleColor: "text-danger",
      description: "Track every activity, such as sales, cash, card, online payment, create and manage shifts"
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
            Stress free POS for redefining your fine dine experience
            </h2>
            <p className="mb-30">
            Step up to a platform designed for the nuances of fine dining so you can deliver an exceptional dining service from first course to last
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
      subtitle="Fine dining features tailored for exceptional service"
      cards={fineDineCards}
      ctaTitle="Ready to Elevate Your Fine Dining Experience?"
      ctaDescription="Transform your fine dining restaurant with MenuMitra's sophisticated POS solution. Book a free demo and discover how we can enhance your service excellence."
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

export default FineDine