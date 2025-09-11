import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const FoodCourts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Food courts feature cards data
  const foodCourtCards = [
    {
      icon: "fas fa-credit-card",
      iconColor: "#007bff",
      title: "Customer Account Top-up & Redemption",
      titleColor: "text-primary",
      description: "MenuMitra offers a smooth credit flow! Easy to load, order, and pay. Use the remaining funds now or later"
    },
    {
      icon: "fas fa-qrcode",
      iconColor: "#28a745",
      title: "QR-Code Based Ordering",
      titleColor: "text-success",
      description: "No more food counter hopping after shopping! With MenuMitra's QR-code, your customers can order & pay from their table"
    },
    {
      icon: "fas fa-crown",
      iconColor: "#fd7e14",
      title: "Royalty Management",
      titleColor: "text-warning",
      description: "Track sales of individual counters, pre define royalties, download reports. no more hassle"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#6f42c1",
      title: "Online Order Integration",
      titleColor: "text-info",
      description: "Manage online aggregators separately by their counters, under a single umbrella"
    },
    {
      icon: "fas fa-chart-bar",
      iconColor: "#dc3545",
      title: "Counter wise Report",
      titleColor: "text-danger",
      description: "Track orders & sales of individual counters, separate app for counter owners to track their business at free of cost"
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

  <section id="why-us" className="bg-white xl mt-50">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            Centralise POS
            is all you need for multiple counters
            </h2>
            <p className="mb-30">
            Effortlessly handle your Chat, Chinese, Rajasthani, and 20 other food counters using just one billing software.
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
      subtitle="Food court management features for multiple counters"
      cards={foodCourtCards}
      ctaTitle="Ready to Streamline Your Food Court Operations?"
      ctaDescription="Manage multiple counters effortlessly with MenuMitra's centralized POS solution. Book a free demo and see how we can optimize your food court business."
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

export default FoodCourts