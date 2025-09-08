import React, { useEffect, useState } from "react";
import Header from './Header'
import { Link } from "react-router-dom";
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import hero from "../assets/images/Hero-img.jpg"
import Form from "./Form";


import arjunCoffeeHouse from "../assets/images/outlets/arjun_coffee_house.jpg";
import balajiBhojnalay from "../assets/images/outlets/balaji_bhojnalay.jpeg";
import cafeDelicia from "../assets/images/outlets/cafe_delicia.jpeg";
import hotelJagdamba from "../assets/images/outlets/hotel_jagdamba.png";
import klingPakoda from "../assets/images/outlets/kling_pakoda_express.png";
import mrPakodi from "../assets/images/outlets/mr_pakodi.jpeg";
import cafeGoodluck from "../assets/images/outlets/cafe_goodluck.jpg";
import hotelAathvan from "../assets/images/outlets/hotel_aathvan.jpg";
import gavranChaha from "../assets/images/outlets/gavran_chaha.jpg";


// menumitra brand images
import brand1 from "../assets/images/mm_brand/01.png";
import brand2 from "../assets/images/mm_brand/02.png";
import brand3 from "../assets/images/mm_brand/03.png";
import brand4 from "../assets/images/mm_brand/04.png";
import brand5 from "../assets/images/mm_brand/05.png";
import brand6 from "../assets/images/mm_brand/06.png";

// integration logos
import zomatoLogo from "../assets/images/integrations/zomato.png";
import swiggyLogo from "../assets/images/integrations/swiggy.png";
import thriveLogo from "../assets/images/integrations/thrive.png";
import ondcLogo from "../assets/images/integrations/ondc.png";
import dunzoLogo from "../assets/images/integrations/dunzo.png";
import upiLogo from "../assets/images/integrations/upi.png";
import phonepeLogo from "../assets/images/integrations/phonepe.png";
import paytmLogo from "../assets/images/integrations/paytm.png";
import pinelabsLogo from "../assets/images/integrations/pinelabs.png";
import razorpayLogo from "../assets/images/integrations/razorpay.png";
import shadowfaxLogo from "../assets/images/integrations/shadowfax.png";
import porterLogo from "../assets/images/integrations/porter.png";




const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        {/* Meta Tags for SEO */}
        <meta
          name="keywords"
          content="Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management"
        />
        <meta
          name="description"
          content="Menu Mitra - Simplifying restaurant management with smart POS features. Manage orders, inventory, CRM, and reports all in one place."
        />

        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta http-equiv="expires" content="never" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="author" content="Menu Mitra" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="web" />
        <meta name="rating" content="general" />
        <meta name="robots" content="index, follow" />
        <meta name="apple-mobile-web-app-capable" content="YES" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="identifier-url" content="https://menumitra.com" />
        <meta name="geo.placename" content="India" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <link rel="canonical" href="https://menumitra.com" />
        <link rel="shortlink" href="https://menumitra.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Menu Mitra | Restaurant POS and Management"
        />
        <meta
          property="og:description"
          content="Menu Mitra offers smart restaurant POS features to manage orders, inventory, and customer relations, empowering restaurant owners."
        />
        <meta property="og:url" content="https://menumitra.com" />
        <meta property="og:site_name" content="Menu Mitra" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/menumitra"
        />
        <meta property="article:updated_time" content="2024-12-13" />
        <meta property="og:image" itemprop="image" content="%PUBLIC_URL%/logo192.png" />
      <meta property="og:image:url" content="%PUBLIC_URL%/logo192.png" />
      <meta property="og:image:secure" content="%PUBLIC_URL%/logo192.png "/>
      <meta property= "og:image:secure_url" content="%PUBLIC_URL%/logo192.png" />
      <meta property="og:image:alt" content="Menu Mitra Logo" />
      <meta property="og:image:width" content="720" />
      <meta property="og:image:height" content="602" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Menu Mitra | Restaurant POS and Management"
        />
        <meta
          name="twitter:description"
          content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services."
        />
        <meta
          name="twitter:image"
          content="%PUBLIC_URL%/logo192.png"
        />
      </Helmet>
      <>
        <Header />

        <div className="main-container p-0">
          <section id="about" className="xl">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-5 tablet-lg-top-30">
                  <h4 className="mb-30">
                    India's Best Contactless Restaurant Management Software
                  </h4>
                  <p className="mb-4">
                    Billing &amp; KOT, manage inventory &amp; central kitchen,
                    handle online orders, menu management, tables, captain app,
                    collect customer data, discount &amp; offers, accounts,
                    reports and do lot more.
                  </p>
                  <div className="video-container mb-4 mb-lg-0">
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                        title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="rounded-3 shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-end justify-content-end">
                  <img
                    src={hero}
                    alt="MenuMitra Hero"
                    className="img-fluid rounded w-100"
                    style={{ marginBottom: "-2rem" }}
                  />
                </div>
              </div>
            </div>
          </section>
          {/* / about */}
          <div className="container mt-80  ">
            <div className="text-center">
              <h2 className="mt-6">Trusted by 50+ outlets as</h2>
              <h2 className="mb-80">
                Best Low Cost Restaurant Management Software
              </h2>
            </div>
            {/* / text-center */}
            {/* First Row */}
            <div className="row d-flex justify-content-evenly mb-4">
              <div className="col-4 col-md-4 col-lg-1 mb-2 ">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={arjunCoffeeHouse}
                    alt="Brand 1"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={balajiBhojnalay}
                    alt="Brand 2"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={cafeDelicia}
                    alt="Brand 3"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={hotelJagdamba}
                    alt="Brand 4"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={klingPakoda}
                    alt="Brand 5"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={mrPakodi}
                    alt="Brand 6"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={cafeGoodluck}
                    alt="Brand 7"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={hotelAathvan}
                    alt="Brand 8"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={gavranChaha}
                    alt="Brand 9"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
            </div>

            {/* Second Row - Copies */}
            <div className="row d-flex justify-content-evenly mb-80">
              <div className="col-4 col-md-4 col-lg-1 mb-2 ">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={arjunCoffeeHouse}
                    alt="Brand 1 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={balajiBhojnalay}
                    alt="Brand 2 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={cafeDelicia}
                    alt="Brand 3 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={hotelJagdamba}
                    alt="Brand 4 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={klingPakoda}
                    alt="Brand 5 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={mrPakodi}
                    alt="Brand 6 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={cafeGoodluck}
                    alt="Brand 7 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={hotelAathvan}
                    alt="Brand 8 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
              <div className="col-4 col-md-4 col-lg-1 mb-2">
                <div
                  className="card border"
                  style={{ width: "120px", height: "120px" }}
                >
                  <img
                    src={gavranChaha}
                    alt="Brand 9 Copy"
                    className="card-img-top img-fluid img-thumbnail rounded-4 object-fit-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* / container */}
          <div className="container mt-5">
            <div className="row text-center align-items-center">
              <div className="col-lg-5">
                <img
                  src={brand3}
                  alt="Restaurant billing software"
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              {/* / column */}
              <div className="col-lg-7 tablet-lg-top-30 d-flex flex-column justify-content-center">
                <h2 className="mb-30">
                  Effortless 3-Step Restaurant Billing Solution
                </h2>
                <p className="mb-30">
                  Streamline your restaurant operations with features like bill
                  and KOT generation, payment processing, bill splitting, table
                  merging, discount and coupon application, tax configuration,
                  multi-terminal support, and more—all in just a few clicks.
                </p>
              </div>

              {/* / column */}
            </div>

            {/* / row */}
          </div>

          {/* / container */}
          <div className="container ">
            <div className="row v-center">
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Centralized Management for All Your Online Orders
                </h2>
                <p className="mb-30">
                  Seamlessly manage online orders, update your digital menu, and
                  notify customers when food is ready. Handle payments, track
                  sales, and streamline operations—all from a single, intuitive
                  interface. Say goodbye to juggling multiple screens.​
                </p>
              </div>

              {/* / column */}
              <div className="col-lg-5">
                <img
                  src={brand1}
                  alt=""
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              {/* / column */}
            </div>
            {/* / row */}
          </div>
          {/* / container */}
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand6}
                  alt=""
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Intelligent Inventory Management for Restaurants
                </h2>
                <p className="mb-30">
                  Effortlessly manage your inventory with automated item-by-item
                  deductions, real-time low-stock alerts, comprehensive daily
                  closing reports, and streamlined restocking of raw materials.
                  Stay in control with precision and efficiency.​
                </p>
              </div>

              {/* / column */}
            </div>
            {/* / row */}
          </div>
          {/* / container */}
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Your Menu: The Ultimate Business Card for Your Restaurant
                </h2>
                <p className="mb-30">
                  Transform your menu into a powerful branding tool. Customize
                  it to delight your customers with exclusive offers, unique
                  deals, signature dishes, and flexible pricing options that
                  leave a lasting impression.​
                </p>
              </div>

              {/* / column */}
              <div className="col-lg-5">
                <img
                  src={brand2}
                  alt=""
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              {/* / column */}
            </div>
            {/* / row */}
          </div>
          {/* / container */}
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-5">
                <img
                  src={brand5}
                  alt=""
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              {/* / column */}
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">Stay Informed with Real-Time Insights</h2>
                <p className="mb-30">
                  Access real-time updates on daily sales, inventory levels,
                  staff activities, and other key business metrics. Stay
                  connected and in control through your owner's app and instant
                  WhatsApp notifications.​
                </p>
              </div>

              {/* / column */}
            </div>
            {/* / row */}
          </div>
          {/* / container */}
          <div className="container">
            <div className="row v-center">
              <div className="col-lg-7 tablet-lg-top-30">
                <h2 className="mb-30">
                  Gain Deep Insights into Your Customers
                </h2>
                <p className="mb-30">
                  Leverage MenuMitra's CRM to manage and monitor your loyal
                  customers effectively. Strengthen relationships by rewarding
                  their loyalty and creating personalized connections that
                  elevate your brand experience.​
                </p>
              </div>

              {/* / column */}
              <div className="col-lg-5">
                <img
                  src={brand4}
                  alt=""
                  className="rounded rellax"
                  data-rellax-speed={2}
                  data-rellax-percentage="0.5"
                />
              </div>
              {/* / column */}
            </div>
            {/* / row */}
          </div>
          {/* / container */}

          <>
            <div
              className="container rounded-5"
              style={{
                backgroundColor: "#1a1a1a",
                color: "white",
                textAlign: "center",
                padding: "50px 20px",
              }}
            >
              <h2 className="text-white">
                Seamless Integration with Your Favorite Apps
              </h2>
              <p className="text-white mb-4">
                MenuMitra POS connects effortlessly with over 100 leading
                business applications. Simplify operations by enabling your POS
                system to communicate seamlessly with the tools you rely on
                every day.​
              </p>

              <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3 justify-content-center">
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={zomatoLogo}
                      className="img-fluid rounded-4"
                      alt="Zomato"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={swiggyLogo}
                      className="img-fluid rounded-4"
                      alt="Swiggy"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={thriveLogo}
                      className="img-fluid rounded-4"
                      alt="Thrive"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={ondcLogo}
                      className="img-fluid rounded-4"
                      alt="ONDC"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={dunzoLogo}
                      className="img-fluid rounded-4"
                      alt="Dunzo"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={upiLogo}
                      className="img-fluid rounded-4"
                      alt="UPI"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={phonepeLogo}
                      className="img-fluid rounded-4"
                      alt="PhonePe"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={paytmLogo}
                      className="img-fluid rounded-4"
                      alt="Paytm"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={pinelabsLogo}
                      className="img-fluid rounded-4"
                      alt="Pine Labs"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={razorpayLogo}
                      className="img-fluid rounded-4"
                      alt="Razorpay"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={shadowfaxLogo}
                      className="img-fluid rounded-4"
                      alt="Shadowfax"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="integrate-logo p-2">
                    <img
                      src={porterLogo}
                      className="img-fluid rounded-4"
                      alt="Porter"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* / container */}
          </>

          {/* / container */}
          <div className="container pt-5">
            <h2 className="text-center mb-80 mt-80 ">
              Built for all types of{" "}
              <span className="text-primary ">Food Business</span>
            </h2>

            {/* All Cards in a single container */}
            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 g-md-4">
              {[
                {
                  icon: "fas fa-utensils",
                  text: "Fine Dine",
                  bg: "#fce4ec",
                  color: "#d81b60"
                },
                {
                  icon: "fas fa-store",
                  text: "Food Court",
                  bg: "#e3f2fd", 
                  color: "#0288d1"
                },
                {
                  icon: "fas fa-coffee",
                  text: "Cafe",
                  bg: "#fff9c4",
                  color: "#fbc02d"
                },
                {
                  icon: "fas fa-concierge-bell",
                  text: "QSR",
                  bg: "#ede7f6",
                  color: "#8e24aa"
                },
                {
                  icon: "fas fa-beer",
                  text: "Bar & Brewery",
                  bg: "#e0f7fa",
                  color: "#388e3c"
                },
                {
                  icon: "fas fa-bread-slice",
                  text: "Bakery",
                  bg: "#ede7f6",
                  color: "#8e24aa"
                },
                {
                  icon: "fas fa-pizza-slice",
                  text: "Pizzeria",
                  bg: "#e3f2fd",
                  color: "#0288d1"
                },
                {
                  icon: "fas fa-cloud",
                  text: "Cloud Kitchen",
                  bg: "#fce4ec",
                  color: "#d81b60"
                },
                {
                  icon: "fas fa-store",
                  text: "Large Chain",
                  bg: "#fff9c4",
                  color: "#fbc02d"
                }
              ].map((item, index) => (
                <div className="col px-2 mb-3" key={index}>
                  <div 
                    className="card text-center border-0 h-100 mx-auto shadow-sm"
                    style={{ 
                      backgroundColor: item.bg, 
                      borderRadius: 15,
                      aspectRatio: "1/1",
                      width: "100%",
                      minHeight: "150px"
                    }}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-2 p-md-3">
                      <i
                        className={`${item.icon} mb-2`}
                        style={{ 
                          color: item.color, 
                          fontSize: "calc(1.5rem + 1vw)"
                        }}
                      ></i>
                      <p 
                        className="fw-bold mb-0 text-break"
                        style={{
                          fontSize: "calc(0.9rem + 0.3vw)",
                          lineHeight: 1.2
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* / container */}
        </div>
        {/* / main-container */}
        <Form />
        <Footer />
      </>
    </>
  );
}

export default Home