import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Form from "./Form";
import BlurText from "./BlurText";


// New outlet images for second row
import hotelGaneshShakaahari from "../assets/images/outlets/hotel_ganesh_shakaahari.png";
import cafeDurga from "../assets/images/outlets/cafe_durga.png";
import friendsCafe from "../assets/images/outlets/friends_cafe.png";
import creamyNutsCafe from "../assets/images/outlets/creamy_nuts_cafe.jpg";
import garvaOrder from "../assets/images/outlets/garva_order.jpg";
import hotelAudumbar from "../assets/images/outlets/hotel_audumbar.png";
import hotelBorulAtitthi from "../assets/images/outlets/hotel_borul_atitthi.png";
import hotelDongarmath from "../assets/images/outlets/hotel_dongarmath.png";
import hotelNewJagdamba from "../assets/images/outlets/hotel_new_jagdamba.png";
import sudasMisalHouse from "../assets/images/outlets/sudamas_misal_house.png";
import aaiTuljaBhavani from "../assets/images/outlets/aai_tulja_bhavani.jpg";
import hotelRasika from "../assets/images/outlets/hotel_rasika.jpg";
import newJagdambaVegNonveg from "../assets/images/outlets/new_jagdamba_veg_nonveg.jpg";
// New outlet images
import hotelNandiniPureVeg from "../assets/images/outlets/hotel_nandini_pure_veg.png";
import hotelSanskrutiPureVeg from "../assets/images/outlets/hotel_sanskruti_pure_veg.png";
import hotelPpPatil from "../assets/images/outlets/hotel_pp_patil.png";
import npsChineseHub from "../assets/images/outlets/nps_chinese_hub.png";
import shreePureVeg from "../assets/images/outlets/shree_pure_veg.png";
import houseOfSchezwam from "../assets/images/outlets/house_of_schezwam.png";
import hotelPpPatil2 from "../assets/images/outlets/hotel_pp_patil_2.png";
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
import thriveLogo from "../assets/images/integrations/thrive-2.png";
import ondcLogo from "../assets/images/integrations/ondc-2.png";
import dunzoLogo from "../assets/images/integrations/dunzo-2.png";
import upiLogo from "../assets/images/integrations/upi-2.png";
import phonepeLogo from "../assets/images/integrations/phonepe-1.png";
import paytmLogo from "../assets/images/integrations/paytm.png";
import pinelabsLogo from "../assets/images/integrations/pine-labs-1.png";
import razorpayLogo from "../assets/images/integrations/razorpay-1.png";
import shadowfaxLogo from "../assets/images/integrations/shadowfax-2.png";
import porterLogo from "../assets/images/integrations/porter-2.png";


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
        <meta
          property="og:image"
          itemprop="image"
          content="%PUBLIC_URL%/logo192.png"
        />
        <meta property="og:image:url" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:secure" content="%PUBLIC_URL%/logo192.png " />
        <meta
          property="og:image:secure_url"
          content="%PUBLIC_URL%/logo192.png"
        />
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
        <meta name="twitter:image" content="%PUBLIC_URL%/logo192.png" />
      </Helmet>
      <>
        <Header />

        <div className="main-container p-0">
          {/*================== Hero Area Section Start ==================*/}
          <section className="hero-area section border border-bottom ">
            <div className="container">
              <div className="row align-items-start">
                <div className="col-lg-6">
                  <div className="hero-content">
                    <h1 className="hero-title mb-4">
                      <BlurText
                        text="India's Leading Restaurant Management & POS Solution"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        stepDuration={0.4}
                        className="hero-text fs-1 fw-bolder text-black"
                      />
                    </h1>
                    <p className="hero-description mb-5">
                      Streamline your restaurant operations with our cloud-based
                      POS system. Manage billing, inventory, online orders,
                      customer relationships, and analytics from anywhere,
                      anytime. Built for modern restaurants that demand
                      efficiency and growth.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="hero-image-wrapper">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                      title="MenuMitra Restaurant Management Software"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="hero-main-video"
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        aspectRatio: "16/9",
                        borderRadius: "20px",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease",
                        position: "relative",
                        zIndex: 2,
                      }}
                    ></iframe>
                    <div className="hero-shapes">
                      <span className="shape shape-1"></span>
                      <span className="shape shape-2"></span>
                      <span className="shape shape-3"></span>
                      <span className="shape shape-4"></span>
                    </div>
                  </div>
                  
                  {/* Feature Tags */}
                  <div className="feature-tags-container mt-4 d-flex flex-nowrap justify-content-center gap-3 gap-md-4 gap-lg-5">
                    <div className="feature-tag inventory-tag">
                      <div className="tag-icon">
                        <i className="fas fa-boxes" style={{ fontSize: "20px", color: "#4CAF50" }}></i>
                      </div>
                      <span className="tag-text ms-1">Inventory</span>
                    </div>
                    <div className="feature-tag ai-tag">
                      <div className="tag-icon">
                        <i className="fas fa-robot" style={{ fontSize: "20px", color: "#2196F3" }}></i>
                      </div>
                      <span className="tag-text ms-1">AI</span>
                    </div>
                    <div className="feature-tag integration-tag">
                      <div className="tag-icon">
                        <i className="fas fa-plug" style={{ fontSize: "20px", color: "#FF9800" }}></i>
                      </div>
                      <span className="tag-text text-nowrap ms-1">3rd Party Integrations</span>
                    </div>
                  </div>
                </div>
              </div>

            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3 gap-md-4 mt-4">
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelGaneshShakaahari}
                    alt="Hotel Ganesh Shakaahari"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={cafeDurga}
                    alt="Cafe Durga"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={friendsCafe}
                    alt="Friends Cafe"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={creamyNutsCafe}
                    alt="Creamy Nuts Cafe"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={garvaOrder}
                    alt="Garva Order"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelAudumbar}
                    alt="Hotel Audumbar"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelBorulAtitthi}
                    alt="Hotel Borul Atitthi"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelDongarmath}
                    alt="Hotel Dongarmath"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelNewJagdamba}
                    alt="Hotel New Jagdamba"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={sudasMisalHouse}
                    alt="Sudamas Misal House"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={aaiTuljaBhavani}
                    alt="Aai Tulja Bhavani"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelRasika}
                    alt="Hotel Rasika"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={newJagdambaVegNonveg}
                    alt="New Jagdamba Veg Non Veg"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelNandiniPureVeg}
                    alt="Hotel Nandini Pure Veg"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelSanskrutiPureVeg}
                    alt="Hotel Sanskruti Pure Veg"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelPpPatil}
                    alt="Hotel PP Patil"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={npsChineseHub}
                    alt="NPS Chinese Hub"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={shreePureVeg}
                    alt="Shree Pure Veg"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={houseOfSchezwam}
                    alt="House of Schezwam"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
              <div className="client-card">
                <div
                  className="card border d-flex align-items-center justify-content-center"
                  style={{ width: "140px", height: "110px", borderRadius: "15px" }}
                >
                  <img
                    src={hotelPpPatil2}
                    alt="Hotel PP Patil 2"
                    className="img-fluid rounded-4 object-fit-contain"
                    style={{ maxWidth: "90%", maxHeight: "90%" }}
                  />
                </div>
              </div>
            </div>
            </div>
            <div className="has-circle">
              <span className="circle circle-1"></span>
              <span className="circle circle-2"></span>
              <span className="circle circle-3"></span>
              <span className="circle circle-4"></span>
              <span className="circle circle-5"></span>
              <span className="circle circle-6"></span>
              <span className="circle circle-7"></span>
            </div>
          </section>
          {/*================== Hero Area Section End ==================*/}
          

          {/* / container */}
          <div className="container mt-5 ">
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
                  color: "#d81b60",
                },
                {
                  icon: "fas fa-store",
                  text: "Food Court",
                  bg: "#e3f2fd",
                  color: "#0288d1",
                },
                {
                  icon: "fas fa-coffee",
                  text: "Cafe",
                  bg: "#fff9c4",
                  color: "#fbc02d",
                },
                // {
                //   icon: "fas fa-concierge-bell",
                //   text: "QSR",
                //   bg: "#ede7f6",
                //   color: "#8e24aa",
                // },
                {
                  icon: "fas fa-beer",
                  text: "Bar & Brewery",
                  bg: "#e0f7fa",
                  color: "#388e3c",
                },
                {
                  icon: "fas fa-bread-slice",
                  text: "Bakery",
                  bg: "#ede7f6",
                  color: "#8e24aa",
                },
                {
                  icon: "fas fa-pizza-slice",
                  text: "Pizzeria",
                  bg: "#e3f2fd",
                  color: "#0288d1",
                },
                {
                  icon: "fas fa-cloud",
                  text: "Cloud Kitchen",
                  bg: "#fce4ec",
                  color: "#d81b60",
                },
                {
                  icon: "fas fa-store",
                  text: "Large Chain",
                  bg: "#fff9c4",
                  color: "#fbc02d",
                },
              ].map((item, index) => (
                <div className="col px-2 mb-3" key={index}>
                  <div
                    className="card text-center border-0 h-100 mx-auto shadow-sm"
                    style={{
                      backgroundColor: item.bg,
                      borderRadius: 15,
                      aspectRatio: "1/1",
                      width: "100%",
                      minHeight: "150px",
                    }}
                  >
                    <div className="card-body d-flex flex-column justify-content-center align-items-center p-2 p-md-3">
                      <i
                        className={`${item.icon} mb-2`}
                        style={{
                          color: item.color,
                          fontSize: "calc(1.5rem + 1vw)",
                        }}
                      ></i>
                      <p
                        className="fw-bold mb-0 text-break"
                        style={{
                          fontSize: "calc(0.9rem + 0.3vw)",
                          lineHeight: 1.2,
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
};

export default Home;
