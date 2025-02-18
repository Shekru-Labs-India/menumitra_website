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
          content="https://menumitra.com/assets/menu_mitra_image.jpg"
        />
        <meta
          property="og:image:url"
          content="https://menumitra.com/assets/menu_mitra_image.jpg"
        />
        <meta
          property="og:image:secure"
          content="https://menumitra.com/assets/menu_mitra_image.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://menumitra.com/assets/menu_mitra_image.jpg"
        />
        <meta property="og:image:alt" content="Menu Mitra Image" />
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
          content="https://menumitra.com/assets/menu_mitra_image.jpg"
        />
      </Helmet>
      <>
        <Header />

        <div className="main-container p-0">
          <section id="about" className="xl">
            <div className="container mt-80">
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
            <div className="row d-flex justify-content-evenly mb-80">
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

              <div className="row g-4 justify-content-center">
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/zomato-3.png"
                      className="rounded-5"
                      alt="Zomato"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/swiggy-2.png"
                      className="rounded-5"
                      alt="Swiggy"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/thrive-2.png"
                      className="rounded-5"
                      alt="Thrive"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/ondc-2.png"
                      className="rounded-5"
                      alt="ONDC"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Dunzo-2.png"
                      className="rounded-5"
                      alt="Dunzo"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/upi-2.png"
                      className="rounded-5"
                      alt="UPI"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Phonepe-1.png"
                      className="rounded-5"
                      alt="PhonePe"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Paytm-2.png"
                      className="rounded-5"
                      alt="Paytm"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/Pine-labs-1.png"
                      className="rounded-5"
                      alt="Pine Labs"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/razorpay-1.png"
                      className="rounded-5"
                      alt="Razorpay"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/shadowfax-2.png"
                      className="rounded-5"
                      alt="Shadowfax"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="integrate-logo">
                    <img
                      src="	https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/porter-2.png"
                      className="rounded-5"
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

            {/* First Row (Top 5 Cards) */}
            <div className="row row-cols-2 row-cols-md-5 g-3">
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#fce4ec", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-utensils fs-1 mb-3"
                      style={{ color: "#d81b60", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Fine Dine</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#e3f2fd", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-store fs-1 mb-3"
                      style={{ color: "#0288d1", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5 text-nowrap">Food Court</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#fff9c4", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-coffee fs-1 mb-3"
                      style={{ color: "#fbc02d", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Cafe</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#ede7f6", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-concierge-bell fs-1 mb-3"
                      style={{ color: "#8e24aa", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">QSR</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#e0f7fa", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-beer fs-1 mb-3"
                      style={{ color: "#388e3c", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Bar & Brewery</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-2 row-cols-md-5 g-3 pt-0">
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#ede7f6", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-bread-slice mb-3"
                      style={{ color: "#8e24aa", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Bakery</p>
                  </div>
                </div>
              </div>

              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#e3f2fd", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-pizza-slice mb-3"
                      style={{ color: "#0288d1", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Pizzeria</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#fce4ec", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-cloud mb-3"
                      style={{ color: "#d81b60", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Cloud Kitchen</p>
                  </div>
                </div>
              </div>
              <div className="col mb-2">
                <div
                  className="card text-center border-0"
                  style={{ backgroundColor: "#fff9c4", borderRadius: 10 }}
                >
                  <div className="card-body">
                    <i
                      className="fas fa-store mb-3"
                      style={{ color: "#fbc02d", fontSize: "3rem" }}
                    ></i>
                    <p className="fw-bold fs-5">Large Chain</p>
                  </div>
                </div>
              </div>
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