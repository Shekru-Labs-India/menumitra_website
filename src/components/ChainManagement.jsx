import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const ChainManagement = () => {
  return (
    <>
      <Helmet>
        <title>Chain Management - MenuMitra</title>
        <meta name="description" content="Multi-location chain management solutions for restaurants" />
      </Helmet>
      <Header />
      
      {/* Content will be added later */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Chain Management</h1>
            <p>Content coming soon...</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChainManagement;
