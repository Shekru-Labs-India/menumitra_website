'use client';

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function BookDemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    outlet_name: '',
    outlet_type: '',
    city: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await axios.post('https://men4u.xyz/v2/website_api/create_booking', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.data && response.data.detail) {
        const bookingData = response.data.detail;
        toast.success(`Demo request submitted successfully! Booking ID: ${bookingData.booking_id}. Our team will contact you within 24 hours.`, {
          duration: 6000,
        });
        
        // Reset form
        setFormData({
          name: '',
          mobile: '',
          outlet_name: '',
          outlet_type: '',
          city: '',
          email: ''
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (err: any) {
      console.error('Booking submission error:', err);
      let errorMessage = 'Failed to submit booking. Please try again.';
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
        setError(err.response.data.message);
      } else if (err.response?.data?.error) {
        errorMessage = err.response.data.error;
        setError(err.response.data.error);
      } else if (err.message) {
        errorMessage = err.message;
        setError(err.message);
      }
      
      toast.error(errorMessage, {
        duration: 6000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-[200px] max-md:pt-150 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
      <div className="container relative" data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000" data-aos-once="true">
        <div className="mb-12 text-center max-w-[600px] mx-auto">
      
          <h2>Book A Demo</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
            Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.
          </p>
        </div>
        <div className="relative z-10 max-w-[850px] mx-auto">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"></div>
            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
          </div>
          <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
            <div className="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-12 max-md:p-5">
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="name" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> Full name
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Full Name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    />
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="mobile" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      name="mobile" 
                      id="mobile" 
                      placeholder="Mobile Number" 
                      required
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    />
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="outlet_name" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> Outlet Name
                    </label>
                    <input 
                      type="text" 
                      name="outlet_name" 
                      id="outlet_name" 
                      placeholder="Outlet Name" 
                      required
                      value={formData.outlet_name}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    />
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="outlet_type" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> Outlet Type
                    </label>
                    <select
                      name="outlet_type"
                      id="outlet_type"
                      required
                      value={formData.outlet_type}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    >
                      <option value="">* Outlet Type</option>
                      <option value="bakery">Bakery</option>
                      <option value="cafe">Cafe</option>
                      <option value="cake_shop">Cake Shop</option>
                      <option value="canteen">Canteen</option>
                      <option value="hotel">Hotel</option>
                      <option value="mess">Mess</option>
                      <option value="outlet">Outlet</option>
                    </select>
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="city" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> City
                    </label>
                    <input 
                      type="text" 
                      name="city" 
                      id="city" 
                      placeholder="City" 
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    />
                  </div>
                  <div className="max-md:col-span-full md:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                      <span className="text-red-500">*</span> Your Email
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email" 
                      placeholder="Email Address" 
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                    />
                  </div>
                  <div className="mx-auto col-span-full text-center">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Book Now'
                      )}
                    </button>
                    
                    {/* Test buttons - commented out for production */}
                    {/* 
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
                      <button 
                        type="button"
                        onClick={() => {
                          toast.success('Demo request submitted successfully! Booking ID: TEST123. Our team will contact you within 24 hours.', {
                            duration: 6000,
                          });
                        }}
                        className="btn-secondary"
                      >
                        Test Success Toast
                      </button>
                      
                      <button 
                        type="button"
                        onClick={() => {
                          toast.error('Failed to submit booking. Please try again.', {
                            duration: 6000,
                          });
                        }}
                        className="btn-outline"
                      >
                        Test Error Toast
                      </button>
                    </div>
                    */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
