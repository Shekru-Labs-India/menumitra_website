import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/img/MenuMitra.png';

const Sidebar = () => {
  const location = useLocation(); // Hook to get the current location

  useEffect(() => {
    // Close the modal and remove the backdrop when the location changes
    const modal = document.getElementById('myModal2');
    if (modal) {
      const bootstrapModal = window.bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }
    }

    // Manually remove the modal backdrop if it exists
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.remove();
    }

    // Remove the 'modal-open' class and reset body styles to allow scrolling
    document.body.classList.remove('modal-open');
    document.body.style.overflow = ''; // Reset any overflow style
    document.body.style.paddingRight = ''; // Reset padding if applied for scrollbar width
  }, [location]); // Effect triggered when location changes

  return (
    <>
      {/* Start Sidebar Modal */}
      <div className="sidebar-modal">
        <div
          className="modal right fade"
          id="myModal2"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel2"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="fa fa-times" />
                  </span>
                </button>
                <h2 className="modal-title" id="myModalLabel2">
                  <Link to="/">
                    <img src={logo} alt="Logo" width="50" height="50" />
                  </Link>
                  <Link className="ms-3" to="/">
                    <h4>Menumitra</h4>
                  </Link>
                </h2>
              </div>
              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/features">Features</Link>
                    </li>
                    <li>
                      <Link to="/">Clients</Link>
                    </li>
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>
                  <ul className="contact-info">
                    <li>
                      <i className="fa fa-map-marker" />
                      Address
                      <span>123, Western Road, Melbourne Australia</span>
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      Email
                      <a href="mailto:example@example.com">
                        [email&nbsp;protected]
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      Phone
                      <a href="tel:123456124">+123(456)124</a>
                      <a href="tel:123456123">+123(456)123</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-modal-widget">
                  <h3 className="title">Instagram</h3>
                  <ul className="instagram">
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/1.jpg" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/2.jpg" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/3.jpg" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/4.jpg" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/5.jpg" alt="Instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="index.html#">
                        <img src="assets/img/instagram/6.jpg" alt="Instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Sidebar;
