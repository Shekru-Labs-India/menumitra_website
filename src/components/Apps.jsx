import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";
import menumitra from "../assets/images/MenuMitra.png";
import '../assets/css/apps.css';

const Apps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-100">
        <section className="py-5 py-xl-8 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center gy-5">
              <div className="col-12 col-lg-5">
                <div className="video-container mb-4 mb-lg-0">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                      title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded-3 shadow-lg border-0"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <h2 className="display-5 fw-bold mb-4">
                  India's Best Contactless Restaurant Management Software
                </h2>
                <p className="lead text-dark mb-4">
                  Billing &amp; KOT, manage inventory &amp; central kitchen,
                  handle online orders, menu management, tables, captain app,
                  collect customer data, discount &amp; offers, accounts,
                  reports and do lot more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 py-xl-8 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">Our Restaurant Management Apps</h2>
              <p className="text-dark fs-5">Complete ecosystem for your restaurant operations</p>
            </div>
            
            <div className="apps-grid">
              {/* Owner App */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      
                        <img src={menumitra} alt="Owner App" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                      
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">Owner App</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Android 6.0 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/owner_app.apk"  
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Android
                  </a>
                </div>
              </div>

              {/* POS System */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                     
                        <img src={menumitra} alt="POS System" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                      
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">POS System</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Windows 7 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/menumitra_pos_system.exe"  
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Windows
                  </a>
                </div>
              </div>

              {/* Captain App */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                   
                        <img src={menumitra} alt="Captain App" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                     
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">Captain App</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Android 6.0 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/captain_app.apk"  
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Android
                  </a>
                </div>
              </div>

              {/* Waiter App */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      
                        <img src={menumitra} alt="Waiter App" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                     
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">Waiter App</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Android 6.0 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/waiter_app.apk"  
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Android
                  </a>
                </div>
              </div>

              {/* Partner App */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      
                        <img src={menumitra} alt="Waiter App" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                     
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">Partner App</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v1.3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <ul className="list-unstyled mb-4">
                   
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Android 6.0 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/partner_app.apk"  
                    rel="noopener noreferrer" 
                    className="btn btn-success"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Android
                  </a>
                </div>
              </div>
              
            </div>

            <hr />
            
            <div className="apps-grid">
              {/* Owner App */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      
                        <img src={menumitra} alt="Owner App" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                      
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">Owner App</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Android 6.0 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/owner_app.apk"  
                    rel="noopener noreferrer" 
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Android
                  </a>
                </div>
              </div>

              {/* POS System */}
              <div className="app-card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                     
                        <img src={menumitra} alt="POS System" className="img-fluid" style={{ width: '40px', height: '40px' }} />
                      
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="row align-items-center">
                        <div className="col">
                          <h3 className="card-title h5 mb-0">POS System</h3>
                        </div>
                        <div className="col-auto">
                          <span className="">v2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="list-unstyled mb-4">
                    
                    <li>
                      <i className="fa-solid fa-circle-check text-success me-2"></i>
                      <span className="small">Windows 7 and above</span>
                    </li>
                  </ul>
                  <a 
                    href="https://menusmitra.xyz/website/menumitra_pos_system.exe"  
                    rel="noopener noreferrer" 
                    className="btn btn-info"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download for Windows
                  </a>
                </div>
              </div>

             
              
            </div>

          </div>
        </section>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Apps;
