import React,{useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import BannerSection from './BannerSection'


const Devices = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
      <Header/>

      <div className="container-fluid bg-dark text-white d-flex flex-column justify-content-center align-items-center vh-100">
  <div className="container">
    <div className="row w-100 align-items-center mt-5" >
      {/* Left Side Text */}
      <div className="col-lg-6 col-md-12 text-center text-md-start">
        {/* <img
          src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/zakya-logo-black.svg"
          style={{ width: "100px", height: "48px" }}
          alt=""
        /> */}
        <h6 className="mb-3" style={{ color: "#e57627" }}>
          Introducing Menumitra: The modern retail POS
        </h6>
        <h1 className="mb-3 text-white">
          Beyond sales. <br /> Beyond walls. In <br /> one hour or less.
        </h1>
        <p className="mb-4 text-white">
          Running a retail business is easier with Menumitra. We help you sell
          better, manage your entire business, and join the digital
          revolution in one hour or less. Welcome to the Modern Retail POS.
        </p>
      </div>

      {/* Right Side Form */}
      <div className="col-lg-4 col-md-8 col-12 mx-auto">
        <div className="p-3 p-md-4 rounded text-dark shadow-lg">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control custom-input"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control custom-input"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control custom-input"
                placeholder="Mobile"
                required
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                required
              />
              <label className="form-check-label" htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="text-warning">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-warning">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button type="submit" className="btn btn-warning w-100">
              SIGN UP FOR FREE
            </button>
            <p className="text-center mt-3">
              or sign in using{" "}
              <a href="#" className="text-warning">
                Google
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* Custom CSS */}
  <style>{`
    .custom-input {
      background-color: #3e3837;
      border: 2px solid transparent;
      color: white;
    }

    .custom-input:focus {
      border: 2px solid #ffc107 !important;
      outline: none;
      box-shadow: 0 0 8px rgba(255, 193, 7, 0.6);
    }

    @media (max-width: 576px) {
      .vh-100 {
        height: auto !important;
        padding: 20px 0;
      }
    }
  `}</style>   
</div>

  <div className='container-fluid bg-dark  py-4'>

    <div className='container p-5 text-center' style={{ backgroundColor: '#583e29',borderRadius: '20px' }}>
      <img src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_banner_2x.webp" alt=""  />
    <BannerSection/>
    </div>
 
  </div>
   

   

        <div className="container-fluid bg-dark text-white  py-5">
            <div className='container'>
                <h1 className="mb-4 text-white text-center">You've done everything to build your <br /> business. We help you take the next big step.</h1>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card  text-white" style={{ backgroundColor: '#242424' }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <i className="fas fa-store fa-3x"></i>
                                </div>
                                <h5 className="card-title text-white">Sell better</h5>
                                <p className="card-text text-white">Sell beyond your physical store <br /> with a powerful mobile app that <br /> allows customers to order even <br /> when your store is not open.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card  text-white" style={{ backgroundColor: '#242424' }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <i className="fas fa-cogs fa-3x"></i>
                                </div>
                                <h5 className="card-title text-white">Manage your entire business</h5>
                                <p className="card-text text-white">Inventory, sales and billing,<br /> customers, suppliers, credit <br /> payments, and more, all on one <br />
                                 platform.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card  text-white" style={{ backgroundColor: '#242424' }}>
                            <div className="card-body">
                                <div className="mb-3">
                                    <i className="fas fa-share-alt fa-3x"></i>
                                </div>
                                <h5 className="card-title text-white">Join the digital revolution</h5>
                                <p className="card-text text-white">Menumitra helps your business <br /> transform digitally and go where <br /> your customers are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
               

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



<div className="container-fluid p-0">
  <div className="row">
    {/* Left side (Text) */}
    <div
      className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center p-5 position-relative"
      style={{ backgroundColor: '#FF4D00' }}
    >
      <div className="text-center me-5">
        <h6 className="subtitle text-white">QUICK CHECKOUTS</h6>
        <h1 className="title text-white">Complete sales <br /> management</h1>
        <p className="para text-white">
          Bill your customers and keep tabs on every <br /> sale. Whether it's cash or credit, it's all on one <br /> system.
          Menumitra allows you to scan item <br /> barcodes via your mobile device's camera and <br /> helps you bill your customers on the go
          (with <br /> Menumitra counter app, available for mobile).
        </p>
      </div>

      {/* Image placed below text in mobile view */}
      <img
        src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh-home-zakya-check-out-3.svg"
        alt="Quick Checkout"
        className="border border-5 border-dark mb-4 mb-md-0"
        style={{
          width: '293px',
          height: '626px',
          borderRadius: '20px',
          zIndex: 2,
        }}
      />
    </div>

    {/* Right side (Image) - Hidden on mobile */}
    <div className="col-lg-6 col-md-12 p-0 d-none d-lg-block">
      <img
        src="https://oweb.zohowebstatic.com/sites/oweb/images/zakya/images/zh_home_zakya_mobile_scan_bg_2x.webp" // Replace with your actual image URL
        alt="Quick Checkout"
        className="img-fluid"
        style={{ objectFit: 'cover', height: '100%' }}
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
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          src="https://player.vimeo.com/video/916717252?autopause=1&amp;dnt=1&amp;autoplay=1&amp;quality=1080p&amp;texttrack=en"
          title="Video"
          allowFullScreen
        ></iframe>
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
