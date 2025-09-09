import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const MoneyManagement = () => {
  return (
    <>
      <Helmet>
        <title>Money Management - MenuMitra</title>
        <meta name="description" content="Comprehensive money management solutions for restaurants" />
      </Helmet>
      <Header />
      
      {/* Content will be added later */}
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Money Management</h1>
            <p>Content coming soon...</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MoneyManagement;
