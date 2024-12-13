import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import hero from "../assets/images/Hero-img.jpg"
const Home = () => {
  return (
    
   <>
     <Helmet>
        {/* Meta Tags for SEO */}
        <meta name="keywords" content="Restaurant POS, Menu Mitra, Restaurant Management, Online Ordering, CRM, Inventory Management" />
        <meta name="description" content="Menu Mitra - Simplifying restaurant management with smart POS features. Manage orders, inventory, CRM, and reports all in one place." />

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
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <link rel="canonical" href="https://menumitra.com" />
        <link rel="shortlink" href="https://menumitra.com" />

        {/* Open Graph Meta Tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta property="og:description" content="Menu Mitra offers smart restaurant POS features to manage orders, inventory, and customer relations, empowering restaurant owners." />
        <meta property="og:url" content="https://menumitra.com" />
        <meta property="og:site_name" content="Menu Mitra" />
        <meta property="article:publisher" content="https://www.facebook.com/menumitra" />
        <meta property="article:updated_time" content="2024-12-13" />
        <meta property="og:image" itemprop="image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:secure_url" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
        <meta property="og:image:alt" content="Menu Mitra Image" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="602" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu Mitra | Restaurant POS and Management" />
        <meta name="twitter:description" content="Menu Mitra offers restaurant management solutions with POS, CRM, inventory, and order management. Learn more about our services." />
        <meta name="twitter:image" content="https://menumitra.com/assets/menu_mitra_image.jpg" />
      </Helmet>
   <>

   <Header/>

  <div className="main-container p-0">
    <section id="about" className="bg-white lg">
      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5 tablet-lg-top-30">
            <h2 className="mb-30">
              India's Best Restaurant Management Software
            </h2>
            <p>
              Billing &amp; KOT, manage inventory &amp; central kitchen, handle
              online orders, menu management, tables, captain app, collect
              customer data, discount &amp; offers, accounts, reports and do lot
              more.{" "}
            </p>
            <a href="#products" className="btn btn-primary pill mr-5">
              <i className="fas fa-shopping-cart mr-5" />{" "}
              <span>Book a Free Demo</span>
            </a>
          </div>
          {/* / column */}
          <div className="col-lg-7">
            <img
              src={hero}
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
    </section>
    {/* / about */}
    <section className="container ">
  <div className="text-center">
    <h2 className="mt-6">Trusted by 15,000+ outlets as</h2>
    <h2 className="mb-80">Best Restaurant Management Software</h2>
  </div>
  {/* / text-center */}
  <div className="row d-flex justify-content-evenly">
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1.png" 
        alt="Brand 1"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/11.png"  
        alt="Brand 2"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/2.png"  
        alt="Brand 3"
        className="card-img-top"
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img 
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/3.png"   
        alt="Brand 4"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/5.png"  
        alt="Brand 5"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/12.png"   
        alt="Brand 6"
        className="card-img-top"
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/4.png"  
        alt="Brand 7"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/7.png"  
        alt="Brand 8"
        className="card-img-top "
      />
    </div>
  </div>
  <div className="col-6 col-md-4 col-lg-1 mb-2">
    <div className="card" style={{ width: '120px', height: '76px' }}>
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/8.png"   
        alt="Brand 9"
        className="card-img-top "
      />
    </div>
  </div>
</div>




</section>


    {/* / container */}
    <div className="container mt-5">
  <div className="row text-center">
    <div className="col-lg-5">
      <img
        src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/3-3.png"
        alt="Restaurant billing software"
        className="rounded rellax"
        data-rellax-speed={2}
        data-rellax-percentage="0.5"
      />
    </div>
    {/* / column */}
    <div className="col-lg-7 tablet-lg-top-30">
      <h2 className="mb-30">Simple 3-click Restaurant billing Software</h2>
      <p className="mb-30">
        Create bills &amp; KOT, receive payments, split bills, merge tables,
        apply discounts &amp; coupons, configure taxes, use multiple
        terminals, and do a lot more.​
      </p>
    </div>
    {/* / column */}
  </div>
  {/* / row */}
</div>

    {/* / container */}
    <div className="container " >
      <div className="row v-center">
        <div className="col-lg-7 tablet-lg-top-30">
          <h2 className="mb-30">One screen to manage all your online orders</h2>
          <p className="mb-30">
            Accept online orders, maintain your digital menu, and show when food
            is ready. You can also accept payments and keep track of sales all
            from one location. This saves you from having to flip between
            screens.​
          </p>
        </div>
        {/* / column */}
        <div className="col-lg-5">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/6-1.png"
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
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1-1.png"
            alt=""
            className="rounded rellax"
            data-rellax-speed={2}
            data-rellax-percentage="0.5"
          />
        </div>
        {/* / column */}
        <div className="col-lg-7 tablet-lg-top-30">
          <h2 className="mb-30">
            Smart inventory management software for your restaurant
          </h2>
          <p className="mb-30">
            Easily keep track of your inventory with item-by-item auto-deduct,
            fast low-stock warnings, daily closing reports, and restocking raw
            materials as needed.​
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
            Your restaurant's menu serves as your business card.
          </h2>
          <p className="mb-30">
            Make your restaurant's menu more customized for customers.
            Incorporate compelling offers, exclusive deals, distinctive menus,
            and flexible price options.​
          </p>
        </div>
        {/* / column */}
        <div className="col-lg-5">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/4-3-1024x898.png"
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
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/2-2-1024x898.png"
            alt=""
            className="rounded rellax"
            data-rellax-speed={2}
            data-rellax-percentage="0.5"
          />
        </div>
        {/* / column */}
        <div className="col-lg-7 tablet-lg-top-30">
          <h2 className="mb-30">Know what's going on in your outlet</h2>
          <p className="mb-30">
            Get real-time data for day-end sales, inventory, employee actions,
            and other crucial business information on your owner's app and
            WhatsApp.​
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
            Know everything about your customers at just one click
          </h2>
          <p className="mb-30">
            With Ciferon's CRM, you can manage, keep an eye on, and reward your
            most devoted consumers, making sure that each one of them develops a
            special relationship with your brand.​
          </p>
        </div>
        {/* / column */}
        <div className="col-lg-5">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/5-2-1024x898.png"
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
      padding: "50px 20px"
    }}
  >
    <h2 className="text-white">Integrate with your favorite Apps</h2>
    <p className="text-white mb-4">
      Ciferon POS works with products you use every day. Seamlessly integrate
      with more than 100 popular business apps and let POS talk the same
      business language as yours.
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
      <div className="container-fluid py-5">
  <p className="text-center fw-bold">Outlet Types</p>
  <h2 className="text-center mb-4">
    Built for all types of{" "}
    <span className="text-primary">Food Business</span>
  </h2>
  
  {/* First Row (Top 5 Cards) */}
  <div className="row row-cols-2 row-cols-md-5 g-0">
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#fce4ec", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/finedine.svg"
            alt="Fine Dine Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Fine Dine</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#e3f2fd", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/foodcourt.svg"
            alt="Food Court Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Food Court</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#fff9c4", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/cafe.svg"
            alt="Cafe Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Cafe</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#ede7f6", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/qsr.svg"
            alt="QSR Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">QSR</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#e0f7fa", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/bar.svg"
            alt="Bar Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Bar &amp; Brewery</p>
        </div>
      </div>
    </div>
  </div>
  
  {/* Second Row (Bottom 5 Cards) */}
  <div className="row row-cols-2 row-cols-md-5 g-0 pt-0">
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#ede7f6", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/bakery.svg"
            alt="Bakery Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Bakery</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#e8f5e9", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/ice-cream.svg"
            alt="Ice Cream Shop Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Ice Cream Shop</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#fce4ec", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/cloud.svg"
            alt="Cloud Kitchen Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Cloud Kitchen</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#e3f2fd", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/pizzeria.svg"
            alt="Pizzeria Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Pizzeria</p>
        </div>
      </div>
    </div>
    <div className="col mb-2">
      <div
        className="card text-center border-0"
        style={{ backgroundColor: "#fff9c4", borderRadius: 10 }}
      >
        <div className="card-body">
          <img
            src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/large-chain.svg"
            alt="Large Chain Icon"
            className="img-fluid mb-3"
          />
          <p className="fw-bold">Large Chain</p>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="container">
        <div className="row v-center">
          <div className="col-lg-5 text-center">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/02/1652030916333.jpeg"
               className="rounded rellax text-center"
              style={{ width: 313, height: 313 }}
              alt=""
              data-rellax-speed={2}
              data-rellax-percentage="0.5"
            />
          </div>
          {/* / column */}
          <div className="col-lg-7 tablet-lg-top-30">
            <p className="mb-30 mt-3">
              "I've been a Ciferon user for two years, and it has transformed
              how we manage all our Kamat Restaurants locations, automating
              operations from top to bottom. The comprehensive integrations and
              the dedicated support team have been game-changers. I highly
              recommend Ciferon to any restaurant looking to upgrade their
              operations."​
            </p>
            <h3 className="">Dr. Vikram Kamat </h3>
            <h3>Founder &amp; Chairman, VITS Kamat Group</h3>
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
      <div className="container relative mt-5">
        <div className="row v-center">
          <div className="col-lg-6 tablet-lg-top-45">
            <img
              src="https://02adc572.rocketcdn.me/wp-content/uploads/2024/01/leads.png"
              
              style={{ width: 500, height: 520 }}
              alt=""
            />
          </div>
          {/* / column */}
          <div className="col-lg-6">
            <div className="promo-box p-50">
              <h4 className="text-center mb-50">
                Get a personalized free demo by our experts
              </h4>
              <form className="needs-validation" id="form-validation3" noValidate="novalidate">
  <div className="row">
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-name3"
          name="inputName3"
          placeholder="Full Name"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="number"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Mobile Number"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="Email"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-email3"
          name="inputEmail3"
          placeholder="City"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-12">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-subject3"
          name="inputSubject3"
          placeholder="Outlet Name"
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    {/* Outlet Type and Outlet Status in one row */}
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-type"
          name="inputOutletType"
          placeholder="Outlet Type"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <div className="col-md-6">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="contact-outlet-status"
          name="inputOutletStatus"
          placeholder="Outlet Status"
          required=""
        />
      </div>
      {/* / form-group */}
    </div>
    {/* / column */}
    
    <button type="submit" className="btn btn-primary btn-submit">
      Submit
    </button>
  </div>
  {/* / row */}
</form>

              {/* / form-group */}
            </div>
            {/* / promo-box */}
          </div>
          {/* / column */}
        </div>
        {/* / row */}
      </div>
      {/* / container */}
    
  </div>
  {/* / main-container */}

  <Footer/>
</>

   </>

  )
}

export default Home