import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const POS = () => {
  return (
    <>
      <Helmet>
        <title>Point of Sale System - MenuMitra</title>
        <meta name="description" content="Advanced Point of Sale system for restaurants" />
      </Helmet>
      <Header />
      
      {/* Content will be added later */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>POS - Point of Sale System</h1>
            <p>Content coming soon...</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default POS;
