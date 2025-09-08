import React, { useEffect, useState } from "react";
import Header from './Header'
import Footer from './Footer'
import Rated from './Rated'
import  Form from './Form'
import { Link } from 'react-router-dom';

const LargeChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   
    <>
    <Header/>

    <section id="why-us" className="xl ">
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

    <div id="features" className="mt-80">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title mb-50">
          Access benefits designed just for you
          </h2>
        </div>
        {/* / text-center */}
        <div className="container py-5">
        <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Centralize Monitoring (HO Dashboard)</h6>
                        <p className="card-text">Monitor sales, orders, stock, reports, performance, royalty, and everything of all outlets from your head office.</p>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Central Kitchen & Raw Material</h6>
                        <p className="card-text">Process purchase orders, create GRN, see outlet inventory, manage stock by vendors & category wise.</p>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Purchase Order Management</h6>
                        <p className="card-text">track all purchase orders submitted by outlets, define rates, add quantity, assign GRN, purchase invoice and e way bills.</p>
                    </div>
                </div>
            </div>
            {/* Card 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">ERP Integration</h6>
                        <p className="card-text">Different accounting software? no worries, take the all files from MenuMitra dashboard and upload it on ERP, it's tat simple.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            {/* Card 5 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">Centralized Aggregator Menu Management</h6>
                        <p className="card-text">Tak the control of all own & franchise outlets in your hand, add, edit or delete items globally or locally from head office</p>
                    </div>
                </div>
            </div>
            {/* Card 6 */}
            <div className="col-md-6 col-lg-3 mb-4">
                <div className="card" style={{ backgroundColor: "#faf2eb" }}>
                    <div className="card-body p-4">
                        <h6 className="card-title">MenuMitra Analytical Dashboard​</h6>
                        <p className="card-text">Use data visualisations & cross functional reports to customisation it to your specifications, make data-driven decisions to improve brand</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        {/* / row */}
      </div>
      {/* / container */}
    </div>

   

    <Rated/>

    <Form/>

    <Footer/>
    </>


  )
}

export default LargeChain