import React, { useEffect, useState } from "react";
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Form from "./Form";

const DeleteUser = () => {
  const [mobile, setMobile] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // Function to handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only digits and limit to 10 characters
    if (/^\d*$/.test(value) && value.length <= 10) {
      setMobile(value);
      // Enable the button if the mobile number is exactly 10 digits
      setIsButtonEnabled(value.length === 10);
    }
  };

  // Function to open the modal
  const openModal = () => {
    if (isButtonEnabled) {
      setShowModal(true);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle delete action
  const handleDelete = async () => {
    try {
      // Sending a DELETE request to the API
      const response = await axios.post(`https://men4u.xyz/user_api/user_delete`, {
        mobile: mobile,
      });

      // Handle the response
      if (response.status === 200) {
       
      } else {
        
      }
    } catch (error) {
      console.error('Error deleting user:', error);
     
    } finally {
      // Clear the input field and close the modal
      setMobile('');
      setIsButtonEnabled(false);
      closeModal();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <section id="pricing-plans" className="xl">
   

      <div className="container bg-light ">
      
        <h2 className="text-center mb-50">Request Data Removal</h2>
        <p className="text-center ">
          Please enter the mobile number associated with the account you wish to delete. Once confirmed, this action will permanently remove the user’s data from our system. This process is irreversible, so proceed with caution.
        </p>

        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control my-3 bg-white w-50"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-center">
          <button
            className="btn btn-danger"
            onClick={openModal}
            disabled={!isButtonEnabled}
          >
            Delete User
          </button>
        </div>

        {/* Confirmation Modal using Normal Bootstrap */}
        {showModal && (
          <div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-between">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeModal}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete the user with mobile number: <strong>{mobile}</strong>?
                </div>
                <div className="modal-footer d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </section>
      <Form/>
      <Footer />
    </>
  );
};

export default DeleteUser;
