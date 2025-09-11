import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import BannerSection from './BannerSection'
import FeatureCards from './FeatureCards'


const Devices = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  // Devices feature cards data
  const deviceCards = [
    {
      icon: "fas fa-store",
      iconColor: "#007bff",
      title: "Sell better",
      titleColor: "text-primary",
      description: "Sell beyond your physical store with a powerful mobile app that allows customers to order even when your store is not open"
    },
    {
      icon: "fas fa-cogs",
      iconColor: "#28a745",
      title: "Manage your entire business",
      titleColor: "text-success",
      description: "Inventory, sales and billing, customers, suppliers, credit payments, and more, all on one platform"
    },
    {
      icon: "fas fa-share-alt",
      iconColor: "#fd7e14",
      title: "Join the digital revolution",
      titleColor: "text-warning",
      description: "Menumitra helps your business transform digitally and go where your customers are"
    }
  ];

    return (
        <>
      <Header/>

      <div className="container-fluid bg-dark text-white d-flex flex-column justify-content-center min-vh-100 mt-5 pt-5">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 pt-5 mt-5">
              <h1 className="display-5 fw-bold mb-4 text-white">
                Beyond sales. <br /> 
                Beyond walls. In <br /> 
                one hour or less.
              </h1>
              <p className="lead mb-0 text-white">
                Running a retail business is easier with Menumitra. We help you sell better, manage your entire business, and join the digital revolution in one hour or less. Welcome to the Modern Retail POS.
              </p>
            </div>

            {/* Right Side Form */}
            <div className="col-lg-5 col-md-8 col-11 ms-auto">
              <div className="bg-dark p-4 rounded-3">
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-transparent text-white border border-secondary"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      className="form-control form-control-lg bg-transparent text-white border border-secondary"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control form-control-lg bg-transparent text-white border border-secondary"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      className="form-control form-control-lg bg-transparent text-white border border-secondary"
                      placeholder="Mobile"
                      required
                    />
                  </div>
                  <div className="form-check mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="terms"
                      required
                    />
                    <label className="form-check-label text-secondary" htmlFor="terms">
                      I agree to the{" "}
                      <a href="#" className="text-warning text-decoration-none">Terms of Service</a>{" "}
                      and{" "}
                      <a href="#" className="text-warning text-decoration-none">Privacy Policy</a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-warning w-100 mb-3 text-uppercase fw-bold">
                    Sign up for free
                  </button>
                  <p className="text-center text-secondary mb-0">
                    or sign in using{" "}
                    <a href="#" className="text-warning text-decoration-none">Google</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid bg-dark  py-4'>

        <div className='container p-5 text-center' style={{ backgroundColor: '#583e29',borderRadius: '20px' }}>
          <img src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_banner_2x.webp" alt=""  />
        <BannerSection/>
        </div>
     
      </div>
       

       

            <div className="container-fluid bg-dark text-white  py-5">
                <div className='container'>
                    <FeatureCards 
                      title="You've done everything to build your business. We help you take the next big step."
                      subtitle="Modern retail POS features for business growth"
                      cards={deviceCards}
                      ctaTitle="Ready to Transform Your Retail Business?"
                      ctaDescription="Join thousands of businesses using MenuMitra's modern retail POS solution. Book a free demo and discover how we can help your business grow."
                      ctaButtonText="Book Free Demo"
                      ctaButtonLink="/book_demo"
                      ctaButtonIcon="fas fa-calendar-alt"
                      showCta={true}
                      className="bg-dark text-white"
                    />
                    </div>
                </div>
                
                <div className="container my-5">
          <div className="row align-items-center">
            <h2 className='text-center'  >Discover what Menumitra can do <br /> for your store</h2>
            {/* Left Side - Text Content */}
            <div className="col-md-6 text-center text-md-start">
              <h6  style={{ color: '#e57627' }}>Inventory Management</h6>
              <h2 className="fw-bold">Never run out of <br /> stock again</h2>
              <p className="text-secondary">
                Gone are the days of being out-of-stock. Have <br /> the right stock at the
                right time with Menumitra. <br /> Reorder items exactly when they're needed by <br />
                setting reorder and alert points for your inventory.
              </p>
            </div>
            
            {/* Right Side - Image */}
            <div className="col-md-6 text-center   ">
              <img
                src="	https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_out_of_stock.svg"
                alt="Inventory Management"
                className="img-fluid  border border-4 border-dark"
                style={{ width: '100%', height: 'auto',borderRadius: '30px',marginTop: '30px' }}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid mt-4">
      {/* Text above the row */}
      <div className="text-center mb-4">
        <h3 className="subtitle" style={{ color: '#e57627' }}>Mobile sales</h3>
        <h1 className="title">Set up your own mobile <br /> store in minutes</h1>
        <p className="para">
          Take your business to your customers' phones. With a completely custom-branded mobile app,<br /> customers can buy from you from anywhere. Extend the reach of your business in minutes.
        </p>
      </div>

      <div className="row">
        {/* Image 1 */}
        <div className="col-lg-3 col-md-6 col-12 p-2">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_app2.svg"
            alt="Image 1"
            className="img-fluid  border border-5 border-dark"
            style={{ width: '100%', height: 'auto',borderRadius: '30px' }}
          />
        </div>

        {/* Image 2 */}
        <div className="col-lg-3 col-md-6 col-12 p-2">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_app3.svg"
            alt="Image 2"
            className="img-fluid  border border-5 border-dark"
            style={{ width: '100%', height: 'auto', borderRadius: '30px' }}
          />
        </div>

        {/* Image 3 */}
        <div className="col-lg-3 col-md-6 col-12 p-2">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_app4.svg"
            alt="Image 3"
            className="img-fluid  border border-5 border-dark"
            style={{ width: '100%', height: 'auto', borderRadius: '30px' }}
          />
        </div>

        {/* Image 4 */}
        <div className="col-lg-3 col-md-6 col-12 p-2">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_app5.svg"
            alt="Image 4"
            className="img-fluid  border border-5 border-dark"
            style={{ width: '100%', height: 'auto', borderRadius: '30px' }}
          />
        </div>
      </div>
    </div>

    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_out_of_stock.svg"
            alt="Inventory Management"
            className="img-fluid border border-4 border-dark"
            style={{ width: '100%', height: 'auto', borderRadius: '30px', marginTop: '30px' }}
          />
        </div>

        {/* Right Side - Text Content (Vertically Centered) */}
        <div className="col-md-6" style={{ paddingLeft: '100px' }}>
          <div className="text-center text-md-start w-100">
            <h6 style={{ color: '#e57627' }}>Vendor Management</h6>
            <h2 className="fw-bold">Manage vendors <br /> the easy way</h2>
            <p className="text-secondary">
              We make managing your vendors and <br /> suppliers as easy as possible. 
              Maintain a <br /> complete record of your vendors, pay them <br /> directly, 
              raise purchase orders, check prices <br /> and availability, and track 
              every order—all from <br /> one screen.
            </p>
          </div>
        </div>
      </div>
    </div>



    <div className="container-fluid p-0 overflow-hidden">
      <div className="row g-0 min-vh-100">
        {/* Left side (Text) */}
        <div
          className="col-lg-6 col-md-12 d-flex flex-column justify-content-center p-4 p-lg-5"
          style={{ backgroundColor: '#FF4D00' }}
        >
          <div className="text-center text-lg-start">
            <h6 className="subtitle text-white mb-3">QUICK CHECKOUTS</h6>
            <h1 className="title text-white mb-4">Complete sales <br /> management</h1>
            <p className="para text-white mb-4">
              Bill your customers and keep tabs on every sale. Whether it's cash or credit, it's all on one system.
              Menumitra allows you to scan item barcodes via your mobile device's camera and helps you bill your customers on the go
              (with Menumitra counter app, available for mobile).
            </p>
          </div>

          {/* Image placed below text in mobile view */}
          <div className="text-center mt-4">
            <img
              src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh-home-zakya-check-out-3.svg"
              alt="Quick Checkout"
              className="img-fluid border border-3 border-dark"
              style={{
                maxWidth: '293px',
                borderRadius: '20px',
              }}
            />
          </div>
        </div>

        {/* Right side (Image) - Hidden on mobile */}
        <div className="col-lg-6 col-md-12 p-0 d-none d-lg-block position-relative">
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_scan_bg_2x.webp"
            alt="Quick Checkout"
            className="position-absolute w-100 h-100"
            style={{ objectFit: 'cover', top: 0, left: 0 }}
          />
        </div>
      </div>
    </div>


       <div className="container-fluid bg-dark " style={{ paddingTop: "30px" }}>
      <div className="container">
        {/* Subtitle */}
        <h6 className="text-center" style={{ color: "#e57627" }}>Ecommerce</h6>

        {/* Title */}
        <h3 className="display-4 text-center text-white">
          Start your ecommerce journey effortlessly
        </h3>

        {/* Paragraph */}
        <p className="lead text-center text-white">
        Menumitra empowers your business to get started with ecommerce and reach a wider audience. No tech <br /> expertise needed, because we make it simple for you.
        </p>

        {/* Image and text block */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-8 d-flex justify-content-center align-items-center text-center">
            {/* Text and Image in center */}
            <img 
              src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_online_store_1x.webp" 
              alt="Ecommerce" 
              className="rounded"
              style={{
                width: "100%", 
                maxWidth: "1600px", // Adjusted max-width
                height: "auto", 
                borderRadius: "20px",
                marginBottom: "10px"
              }} 
            />
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid" style={{ paddingTop: "40px", marginBottom: '30px' }}>
      <div className="row">
        {/* Left side (Text and images) */}
        <div className="col-lg-7 col-md-12 p-5" style={{ position: "relative" }}>
          <div className="text-center text-md-start" style={{ paddingLeft: "0px" }}>
            <h3 className="subtitle" style={{ color: "#e57627" }}>Powerful Reports</h3>
            <h1 className="title">Know what's going on <br /> with your store</h1>
            <p className="para">
            Menumitra helps you know what's happening at every stage <br /> of your business through reports on sales, inventory, <br /> receivables, payments, purchases, and more.
            </p>
          </div>

          {/* Images */}
          <div className="row w-100 pb-5">
            {/* First image */}
            <div className="col-12 mb-4">
              <img
                src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_reports_1.svg"
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                alt="Report 1"
              />
            </div>

            {/* Second image */}
            <div className="col-12 mb-4">
              <img
                src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_reports_2.svg"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px"
                }}
                alt="Report 2"
              />
            </div>
          </div>

          {/* Third image */}
          <div className="w-100 mt-5 pt-5 rounded-3" style={{ position: "relative", marginTop: "80px" }}>
            <img
              src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_reports_4.svg"
              style={{
                marginTop: "20px",
                width: "100%",
                height: "auto",
                borderRadius: "10px"
              }}
              alt="Report 3"
            />
          </div>
        </div>

        {/* Right side (Background image) - Hidden on mobile */}
        <div className="col-lg-5 col-md-12 p-0 d-none d-lg-block" style={{ position: "relative" }}>
          <img
            src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_reports_bg_2x.webp"
            alt="Quick Checkout"
            className="img-fluid"
            style={{
              objectFit: "cover",
              height: "100%",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>
    </div>









    <div className="container py-5 bg-white mb-3" style={{ borderRadius: '30px' }}>
      <div className="row align-items-center">
        {/* Left Side: Video */}
        <div className="col-md-6 mb-4 mb-md-0 rounded-3">
          <div className="video-container mb-4 mb-lg-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/j2e2stCcICo?loop=1&playlist=j2e2stCcICo"
                title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-3 shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="col-md-6">
          <h2>What makes Menumitra the favorite retail POS for businesses?</h2>
          <p>
            Witness how Menumitra streamlines business operations, enhances customer service, and drives profitability.
            Hear the firsthand experiences of our customers and discover how Menumitra can transform your business, too.
          </p>

          {/* Explore More Stories Button */}
          <div className="d-flex justify-content-start justify-content-md-center mt-3">
            <button className="btn btn-primary">Explore More Stories</button>
          </div>
        </div>
      </div>
    </div>


       
       



        <Footer/>
        </>
    );
};

export default Devices;
