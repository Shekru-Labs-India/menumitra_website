"use client";

import { useState } from "react";

export default function DataRemovalForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Mobile number validation: starts with 6-9 and exactly 10 digits
  const isValidMobileNumber = (mobile: string) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const isFormValid = isValidMobileNumber(mobileNumber);

  // Handle input change - only allow numeric input and validate first digit
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Remove any non-numeric characters
    let numericValue = value.replace(/[^0-9]/g, '');
    
    // If first digit is 1-5, remove it
    if (numericValue.length > 0 && /^[1-5]/.test(numericValue)) {
      numericValue = numericValue.substring(1);
    }
    
    setMobileNumber(numericValue);
  };

  // Prevent non-numeric characters and invalid first digits from being typed
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const char = String.fromCharCode(e.which);
    
    // Prevent non-numeric characters
    if (!/[0-9]/.test(char)) {
      e.preventDefault();
      return;
    }
    
    // If this is the first character and it's 1-5, prevent it
    if (mobileNumber.length === 0 && /[1-5]/.test(char)) {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent submission if mobile number is invalid
    if (!isFormValid) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch("/api/data-removal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobileNumber }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setMobileNumber("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pb-25  max-md:overflow-hidden">
  <div className="container relative max-md:text-center">
    <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2  flex max-md:flex-col -z-10 max-md:hidden">
      <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
      <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
    </div>
    <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full  bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10" />
    <div>
      <div className="grid grid-cols-12 grid-y-10 items-start">
       
        <div className="max-md:col-span-full col-span-12 max-md:mt-5 ">
          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-green-800 font-medium">Request submitted successfully!</p>
              </div>
              <p className="text-green-700 text-sm mt-1">We will respond within 72 hours.</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-red-800 font-medium">Error submitting request</p>
              </div>
              <p className="text-red-700 text-sm mt-1">Please try again or contact us directly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6 ">
              <input
                type="text"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                maxLength={10}
                className="bg-transparent placeholder:text-dark text-black text-light focus:outline-none  leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary  duration-300 transition-all outline-none"
              />
              <button 
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`btn max-lg:col-span-full lg:col-span-4 ${(!isFormValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
          <ul className=" flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6 ">
            
          </ul>

          Important: Data removal is irreversible. Once deleted, we cannot recover your data or restore your account.


        </div>
      </div>
    </div>
  </div>
</section>

  );
}
