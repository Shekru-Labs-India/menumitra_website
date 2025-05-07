import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Form from './Form'

const Aboutus = () => {
  return (
    <div>
<Header/>
<section id="pricing-plans bg-light" className="xl">

<div className='container'>


<div className="mb-50 text-center d-flex flex-column align-items-center">
<h2 className="fw-bold mb-4">About us</h2>
  <h3 className=" fs-3">Hey! We’re MenuMitra and we help restaurant</h3>
  We deliver products that ensure revenue growth and the best customer experience for all types of restaurant partners
  
  <div className="position-relative mt-50">
    <img src='https://t3.ftcdn.net/jpg/06/48/40/66/360_F_648406683_fpR6PUMcTBFtOGK0qnbDvI65EwY2i4sR.jpg' className='rounded-10'></img>
  </div>
</div>


<section className='lg'>
<div className="row ">
            {/* First Column (text and image) */}
            <div className="col-sm-12 col-md-6 mb-4 ">
              <div className="d-flex flex-column align-items-center">
                <h5>
                From a small-scale B2B food delivery platform to <span className='text-danger'>India’s no. 1 restaurant billing software provider,</span>
                </h5>
                <div className="w-75 mt-4">
                  <img 
                    src="https://d28ewddc5mocr5.cloudfront.net/images/about/B2B-food-delivery.webp" 
                    className="img-fluid rounded-10" 
                    alt="About us"
                  />
                </div>
              </div>
            </div>

            {/* Second Column (text only) */}
            <div className="col-sm-12 col-md-6 mb-4">
              <p>
              When MenuMitra’s first avatar came into being in 2011, it was a simple B2B food delivery model that took bulk food orders from the corporates & passed them forward to the restaurants. But soon, our founders realised that the restaurants they worked with were not living up to their potential and were shutting down forever. Primarily it was due to a lack of coherent technology that could support their daily operations. Their billing machines were as bulky, tedious and old as time. Due to this, the restaurants never had an actual estimate of their profit margins & expenses. Back then, restaurants were suffering more than growing.

This was when our founders decided to build a robust, user-friendly & cost-effective billing software for SMB restaurants that will automate everyday operations and push businesses towards sustainability.

And now, a decade into the industry, we have realized our dream of becoming the ideal restaurant billing solution provider to all & every kind of food service business in India.
              </p>
            </div>
          </div>
          </section>

          <section className='lg'>
            <div className='text-center'>
            <h2 className="fw-bold mb-2">Empowering restaurant ecosystem</h2>
            Streamline unorganized sector of the food industry
            </div>
            <div className="text-center">
 

  <div className="row align-items-center">
    {/* Text on the left */}
    <div className="col-sm-12 col-md-8 mb-4 text-start">
    <h4 className="fw-bold mb-2">Innovation</h4>
      <p>The major force behind our success has always been constant research & innovation.The major force behind our success has always been constant research & innovation.</p>

    </div>

    {/* Image on the right */}
    <div className="col-sm-12 col-md-4 mb-4">
      <img 
        src="https://d28ewddc5mocr5.cloudfront.net/images/about/Innovation.webp" 
        className="img-fluid" 
        alt="Innovation"
      />
    </div>
  </div>
</div>

          </section>
        </div>
      </section>

      <Form />
      <Footer />
    </div>
  );
}

export default Aboutus;