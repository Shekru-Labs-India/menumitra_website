"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AlertTriangle } from "lucide-react";
import { API_ENDPOINTS } from "@/config/api";

export default function DataRemovalForm() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  // Mobile number validation: starts with 6-9 and exactly 10 digits
  const isValidMobileNumber = (mobile: string) => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const isFormValid = isValidMobileNumber(mobileNumber);

  // Handle OTP input change
  const handleOtpChange = (index: number, value: string) => {
    // Only allow numeric input
    const numericValue = value.replace(/[^0-9]/g, '');
    if (numericValue.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = numericValue;
    setOtp(newOtp);

    // Auto-focus next input
    if (numericValue && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  // Handle OTP backspace and prevent non-numeric input
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent non-numeric characters from being typed
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
      e.preventDefault();
      return;
    }

    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

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
      const response = await axios.post(API_ENDPOINTS.REQUEST_DATA_REMOVAL, {
        mobile: mobileNumber
      });

      if (response.status === 200) {
        setSubmitStatus("success");
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      
      // Handle different types of errors with specific messages
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        if (status === 400) {
          toast.error("Invalid mobile number. Please check and try again.");
        } else if (status === 429) {
          toast.error("Too many requests. Please wait a moment and try again.");
        } else if (status >= 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Failed to send OTP. Please try again.");
        }
      } else if (error.request) {
        // Network error
        toast.error("Network error. Please check your connection and try again.");
      } else {
        // Other error
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOTPVerification = async () => {
    const otpString = otp.join("");
    
    if (otpString.length !== 4) {
      toast.error("Please enter a valid 4-digit OTP.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post(API_ENDPOINTS.VERIFY_DATA_REMOVAL_OTP, {
        mobile: mobileNumber,
        otp: otpString
      });

      if (response.status === 200) {
        toast.success(response.data.detail || "User data removed successfully");
        // Reset form after successful verification
        setShowOTP(false);
        setMobileNumber("");
        setOtp(["", "", "", ""]);
      }
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          toast.error(error.response.data.detail || "Invalid OTP. Please try again.");
        } else if (status === 429) {
          toast.error("Too many requests. Please wait a moment and try again.");
        } else if (status >= 500) {
          toast.error("Server error. Please try again later.");
        } else {
          toast.error("Failed to verify OTP. Please try again.");
        }
      } else if (error.request) {
        toast.error("Network error. Please check your connection and try again.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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
    <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 hidden md:block -z-10" />
    <div>
      <div className="grid grid-cols-12 grid-y-10 items-start">
       
        <div className="max-md:col-span-full col-span-12 max-md:mt-5 ">


          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6 ">
              {!showOTP ? (
                <>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    maxLength={10}
                    className="bg-transparent placeholder:text-dark text-black text-light focus:outline-none  leading-[1.5] border rounded-[60px] bg-white border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary  duration-300 transition-all outline-none"
                  />
                  <button 
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`btn max-lg:col-span-full lg:col-span-4 ${(!isFormValid || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </>
              ) : (
                <>
                  <div className="max-lg:col-span-full lg:col-span-8">
                    <div className="text-center mb-4">
                      <p className="text-sm text-gray-600 mb-2">OTP sent to</p>
                      <p className="text-lg font-semibold text-gray-800">+91 {mobileNumber}</p>
                    </div>
                    <div className="flex justify-center space-x-3 gap-x-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          id={`otp-${index}`}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleOtpChange(index, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(index, e)}
                          className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 bg-white rounded-lg focus:border dark:focus:border-primary transition-colors"
                        />
                      ))}
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={handleOTPVerification}
                    disabled={otp.some(digit => !digit) || isSubmitting}
                    className={`btn max-lg:col-span-full lg:col-span-4 ${(otp.some(digit => !digit) || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? "Verifying..." : "Verify OTP"}
                  </button>
                </>
              )}
            </div>
          </form>
          <ul className=" flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6 ">
            
          </ul>

          <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-red-800 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-red-800 mb-1">Important Notice</h3>
                <p className="text-sm text-red-700">
                  Data removal is irreversible. Once deleted, we cannot recover your data or restore your account.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</section>

  );
}
