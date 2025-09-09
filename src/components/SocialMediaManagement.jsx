import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Form from "./Form";
import { Link } from "react-router-dom";
// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";

const SocialMediaManagement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Social Media Management - MenuMitra</title>
        <meta name="description" content="Social media management tools for restaurants" />
        <meta name="keywords" content="Social Media Management, Restaurant Marketing, Menu Mitra, Digital Marketing" />
      </Helmet>
      <Header />
      
      <div className="main-container p-0">
        <section id="why-us" className="xl bg-gradient-body">
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand3}
                  alt="Social Media Management"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Social Media Management for Restaurants
                </h2>
                <p className="mb-30">
                  Boost your restaurant's online presence with our comprehensive social media management tools. 
                  Schedule posts, engage with customers, track performance, and grow your brand across 
                  all major social platforms.
                </p>
                <Link to="/book_demo" className="btn btn-primary pill mr-5">
                  <i className="fas fa-shopping-cart mr-5" />
                  <span>Book a free demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div id="features" className="mt-80">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title mb-50">
                Social Media Management Features
              </h2>
            </div>
            <div className="container py-5">
              <div className="row text-center">
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-share-nodes feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Multi-Platform Posting</h5>
                  <p style={{ color: '#666' }} className="feature-description">Schedule and publish content across Facebook, Instagram, Twitter, and other social platforms from one dashboard.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-calendar-alt feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Content Scheduling</h5>
                  <p style={{ color: '#666' }} className="feature-description">Plan and schedule your social media content in advance to maintain consistent posting.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-comments feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Customer Engagement</h5>
                  <p style={{ color: '#666' }} className="feature-description">Monitor and respond to customer comments, messages, and reviews across all platforms.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-chart-bar feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Analytics & Insights</h5>
                  <p style={{ color: '#666' }} className="feature-description">Track engagement metrics, reach, and performance analytics to optimize your social strategy.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-hashtag feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Hashtag Management</h5>
                  <p style={{ color: '#666' }} className="feature-description">Research and manage hashtags to increase your content's visibility and reach.</p>
                </div>
                <div className="col-md-4 mb-4">
                  <i style={{ fontSize: '48px', color: '#333', marginBottom: '15px' }} className="fas fa-users feature-icon"></i>
                  <h5 style={{ fontWeight: 600, marginBottom: '10px' }} className="feature-title">Audience Building</h5>
                  <p style={{ color: '#666' }} className="feature-description">Grow your social media following with targeted content and engagement strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Form />
      <Footer />
    </>
  );
};

export default SocialMediaManagement;
