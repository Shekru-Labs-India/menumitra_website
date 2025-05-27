import React, { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import Form from "./Form";
import { Link } from 'react-router-dom';
import menumitra from "../assets/images/MenuMitra.png";

const Apps = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-100">
      <section className="py-5 py-xl-8">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-5">
              <div className="video-container position-relative rounded-4 shadow-lg overflow-hidden mb-4 mb-lg-0">
                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
                    title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="position-absolute top-0 start-0 w-100 h-100 border-0"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <h2 className="display-5 fw-bold mb-4">
                India's Best Contactless Restaurant Management Software
              </h2>
              <p className="lead text-secondary mb-4">
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
            <p className="text-secondary fs-5">Complete ecosystem for your restaurant operations</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={menumitra} alt="Owner App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h5 mb-0">Owner App</h3>
                </div>
                <div className="mb-3">
                  <p className="text-secondary mb-2">
                    Take control of your restaurant business with our Owner App. Monitor sales, manage inventory, and track performance in real-time.
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Free Download</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Android 6.0 and above</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a 
                    href="https://menumitra.com/downloads/owner-app.apk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download APK
                  </a>
                </div>
              </div>
            </div>
            

            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={menumitra} alt="Owner App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h5 mb-0">POS System</h3>
                </div>
                <div className="mb-3">
                  <p className="text-secondary mb-2">
                    Take control of your restaurant business with our Owner App. Monitor sales, manage inventory, and track performance in real-time.
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Free Download</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Android 6.0 and above</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a 
                    href="https://menumitra.com/downloads/pos-system.exe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download EXE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={menumitra} alt="Captain App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h5 mb-0">Captain App</h3>
                </div>
                <div className="mb-3">
                  <p className="text-secondary mb-2 ">
                    Download our Android Captain App to take orders, manage tables, and streamline your restaurant operations on the go.
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Free Download</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Android 6.0 and above</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a 
                    href="https://menumitra.com/downloads/captain-app.apk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download APK
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={menumitra} alt="Waiter App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h5 mb-0">Waiter App</h3>
                </div>
                <div className="mb-3">
                  <p className="text-secondary mb-2">
                    Streamline your restaurant service with our Waiter App. Take orders, manage tables, and enhance customer experience efficiently.
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Free Download</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Android 6.0 and above</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a 
                    href="https://menumitra.com/downloads/waiter-app.apk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download APK
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="card bg-white border-0 rounded-4 p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={menumitra} alt="Partner App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  </div>
                  <h3 className="h5 mb-0">Partner App</h3>
                </div>
                <div className="mb-3">
                  <p className="text-secondary mb-2">
                    Manage your restaurant operations with our Partner App. Track orders, manage inventory, and enhance customer satisfaction.
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Free Download</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa-solid fa-circle-check text-success"></i>
                    <span className="small">Android 6.0 and above</span>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <a 
                    href="https://menumitra.com/downloads/partner-app.apk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-100"
                  >
                    <i className="fa-solid fa-download me-2"></i>
                    Download APK
                  </a>
                </div>
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




// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import Form from "./Form";
// import menumitra from "../assets/images/MenuMitra.png";


// const Apps = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <>
//       <Header />
// <div className="mt-100">
//       <section className="py-5 py-xl-8">
//         <div className="container">
//           <div className="row align-items-center gy-5">
//             <div className="col-12 col-lg-5">
//               <div className="video-container position-relative rounded-4 shadow-lg overflow-hidden mb-4 mb-lg-0">
//                 <div className="ratio ratio-16x9">
//                   <iframe
//                     src="https://www.youtube.com/embed/j2e2stCcICo?autoplay=1&mute=1&loop=1&playlist=j2e2stCcICo"
//                     title="MenuMitra Intro Video | Restaurant POS made easy | Shekru Labs India Pvt. Ltd"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                     className="position-absolute top-0 start-0 w-100 h-100 border-0"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 col-lg-7">
//               <h2 className="display-5 fw-bold mb-4">
//                 India's Best Contactless Restaurant Management Software
//               </h2>
//               <p className="lead text-secondary mb-4">
//                 Billing &amp; KOT, manage inventory &amp; central kitchen,
//                 handle online orders, menu management, tables, captain app,
//                 collect customer data, discount &amp; offers, accounts,
//                 reports and do lot more.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-5 py-xl-8 bg-light">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="display-5 fw-bold mb-3">Our Restaurant Management Apps</h2>
//             <p className="text-secondary fs-5">Complete ecosystem for your restaurant operations</p>
//           </div>
          
//           <div className="row g-4">
//             <div className="col-md-6 col-lg-3">
//               <div className="card bg-white border-0 rounded-4 p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <img src={menumitra} alt="MenuMitra" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                   </div>
//                   <h3 className="h5 mb-0">Captain App</h3>
//                 </div>
//                 <div className="mb-3">
//                   <p className="text-secondary mb-2 ">
//                     Download our Android Captain App to take orders, manage tables, and streamline your restaurant operations on the go.
//                   </p>
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Free Download</span>
//                   </div>
//                   <div className="d-flex align-items-center gap-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Android 6.0 and above</span>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <a 
//                     href="https://play.google.com/store/apps/details?id=com.shekrulabs.menumitra" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="btn btn-success"
//                   >
//                     <i className="fa-brands fa-google-play me-2"></i>
//                     Get it on Play Store
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-md-6 col-lg-3">
//               <div className="card bg-white border-0 rounded-4 p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <img src={menumitra} alt="Waiter App" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                   </div>
//                   <h3 className="h5 mb-0">Waiter App</h3>
//                 </div>
//                 <div className="mb-3">
//                   <p className="text-secondary mb-2">
//                     Streamline your restaurant service with our Waiter App. Take orders, manage tables, and enhance customer experience efficiently.
//                   </p>
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Free Download</span>
//                   </div>
//                   <div className="d-flex align-items-center gap-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Android 6.0 and above</span>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <a 
//                     href="https://play.google.com/store/apps/details?id=com.shekrulabs.waiterapp" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="btn btn-success"
//                   >
//                     <i className="fa-brands fa-google-play me-2"></i>
//                     Get it on Play Store
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-md-6 col-lg-3">
//               <div className="card bg-white border-0 rounded-4 p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <img src={menumitra} alt="Kitchen Display" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                   </div>
//                   <h3 className="h5 mb-0">Kitchen Display</h3>
//                 </div>
//                 <div className="mb-3">
//                   <p className="text-secondary mb-2">
//                     Optimize your kitchen operations with our Kitchen Display System. Manage orders, track preparation time, and improve efficiency.
//                   </p>
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Free Download</span>
//                   </div>
//                   <div className="d-flex align-items-center gap-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Android 6.0 and above</span>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <a 
//                     href="https://play.google.com/store/apps/details?id=com.shekrulabs.kds" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="btn btn-success"
//                   >
//                     <i className="fa-brands fa-google-play me-2"></i>
//                     Get it on Play Store
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-md-6 col-lg-3">
//               <div className="card bg-white border-0 rounded-4 p-4">
//                 <div className="d-flex align-items-center mb-3">
//                   <div className="bg-opacity-10 rounded-circle me-3" style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <img src={menumitra} alt="Customer Display" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//                   </div>
//                   <h3 className="h5 mb-0">Customer Display</h3>
//                 </div>
//                 <div className="mb-3">
//                   <p className="text-secondary mb-2">
//                     Enhance customer experience with our Customer Display System. Show order status, estimated time, and improve transparency.
//                   </p>
//                   <div className="d-flex align-items-center gap-2 mb-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Free Download</span>
//                   </div>
//                   <div className="d-flex align-items-center gap-2">
//                     <i className="fa-solid fa-circle-check text-success"></i>
//                     <span className="small">Android 6.0 and above</span>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <a 
//                     href="https://play.google.com/store/apps/details?id=com.shekrulabs.cds" 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="btn btn-success"
//                   >
//                     <i className="fa-brands fa-google-play me-2"></i>
//                     Get it on Play Store
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
//       <Form />
//       <Footer />
//     </>
//   );
// };

// export default Apps;
