import React, { useEffect } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import FeatureCards from './FeatureCards'
import { Link } from 'react-router-dom';

const Bakeries = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Bakery feature cards data
  const bakeryCards = [
    {
      icon: "fas fa-calendar-check",
      iconColor: "#007bff",
      title: "Advance Ordering",
      titleColor: "text-primary",
      description: "Birthday Cake? cookies? take advance orders by punching guest details, location, amount, delivery time-date, also you can upload the reference images"
    },
    {
      icon: "fas fa-qrcode",
      iconColor: "#28a745",
      title: "Scan & Order",
      titleColor: "text-success",
      description: "Customer can see offers, place order, make payment! you can also add his plugin to your website for more orders with MenuMitra Bakery POS Software"
    },
    {
      icon: "fas fa-mobile-alt",
      iconColor: "#fd7e14",
      title: "Online Ordering Integrations",
      titleColor: "text-warning",
      description: "Accept orders, mark food ready, control menu status, and everything from MenuMitra Bakery POS Software"
    },
    {
      icon: "fas fa-home",
      iconColor: "#6f42c1",
      title: "Central Kitchen",
      titleColor: "text-info",
      description: "Centralise recipes, items controls, purchase order, indent, material transfer, and do lot more with MenuMitra Bakery POS Software"
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

    <section id="why-us" className="bg-white xl mt-50">
      <div className="container">
        <div className="row v-center pb-30">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
            The Powerful Bakery POS Software for Happy Baking
            </h2>
            <p className="mb-30">
            Boost Your Bakery's Business Growth Effortlessly: Let MenuMitra POS Software Manage All Your Operations While You Focus on Baking Magic!
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
      title="You've done everything to build your bakery. We help you take the next big step."
      subtitle="Bakery management features for sweet success"
      cards={bakeryCards}
      ctaTitle="Ready to Bake Your Way to Success?"
      ctaDescription="Transform your bakery business with MenuMitra's specialized POS solution. Book a free demo and discover how we can help your bakery thrive."
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

export default Bakeries