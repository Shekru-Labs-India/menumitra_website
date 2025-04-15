import React, { useEffect, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

const ResellerProgram = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Header/>
      <section className="reseller-section">
        <div className="reseller-content">
          <span className="tag">RESELLER</span>
          <h1>MenuMitra POS<br />Reseller Program</h1>
          <p>Become our reseller partner to sustain our goal of<br />being the ideal billing solution for every restaurant.</p>
          <button className="register-btn">Register now</button>
        </div>
        <div className="reseller-image">
          <img src="https://d28ewddc5mocr5.cloudfront.net/images/Reseller-Program_md.webp" alt="Illustration showing Reseller Program for Petpooja POS" />
        </div>
      </section>

      <div className="partner-section mt-80">
        <h2 className="partner-title mb-50">Become our partner</h2>
        <div className="partner-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Register</h3>
            <p>All you have to do is register as our reseller using your required documents. Once the screening is sorted, you are good to go!</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Refer</h3>
            <p>Now you have become MenuMitra's representative. Your task is simple: refer MenuMitra POS and earn 15% of assured revenue!</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Earn</h3>
            <p>Refer more to make the most returns. No hidden charges. Straight commission with every conversion.</p>
          </div>
        </div>
        <button className="register-reseller-btn">Register as reseller</button>
      </div>
      <Form/>
      <Footer/>
    </div>
  );
};

export default ResellerProgram;
