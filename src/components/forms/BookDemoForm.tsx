'use client';

import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { API_ENDPOINTS } from '@/config/api';

// Types for form configuration
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'select';
  placeholder: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  colSpan?: 'full' | 'half';
}

export interface BookDemoFormProps {
  // Form configuration
  title?: string;
  description?: string;
  submitButtonText?: string;
  fields?: FormField[];
  
  // API configuration
  apiEndpoint?: string;
  apiHeaders?: Record<string, string>;
  
  // Styling and layout
  className?: string;
  showBackground?: boolean;
  showErrorDisplay?: boolean;
  
  // Callbacks
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onSubmit?: (formData: any) => void;
  
  // Custom styling
  containerClassName?: string;
  formClassName?: string;
  fieldClassName?: string;
  buttonClassName?: string;
}

// Default form fields configuration
const defaultFields: FormField[] = [
  {
    name: 'name',
    label: 'Full name',
    type: 'text',
    placeholder: 'Full Name',
    required: true,
    colSpan: 'half'
  },
  {
    name: 'mobile',
    label: 'Mobile Number',
    type: 'tel',
    placeholder: 'Mobile Number',
    required: true,
    colSpan: 'half'
  },
  {
    name: 'outlet_name',
    label: 'Outlet Name',
    type: 'text',
    placeholder: 'Outlet Name',
    required: true,
    colSpan: 'half'
  },
  {
    name: 'outlet_type',
    label: 'Outlet Type',
    type: 'select',
    placeholder: 'Outlet Type',
    required: true,
    colSpan: 'half',
    options: [
      { value: 'bakery', label: 'Bakery' },
      { value: 'cafe', label: 'Cafe' },
      { value: 'cake_shop', label: 'Cake Shop' },
      { value: 'canteen', label: 'Canteen' },
      { value: 'hotel', label: 'Hotel' },
      { value: 'mess', label: 'Mess' },
      { value: 'outlet', label: 'Outlet' }
    ]
  },
  {
    name: 'city',
    label: 'City',
    type: 'text',
    placeholder: 'City',
    required: true,
    colSpan: 'half'
  },
  {
    name: 'email',
    label: 'Your Email',
    type: 'email',
    placeholder: 'Email Address',
    required: true,
    colSpan: 'half'
  }
];

const BookDemoForm: React.FC<BookDemoFormProps> = ({
  title = "Book A Demo",
  description = "Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.",
  submitButtonText = "Book Now",
  fields = defaultFields,
  apiEndpoint = API_ENDPOINTS.CREATE_WEBSITE_BOOKING,
  apiHeaders = { 'Content-Type': 'application/json' },
  className = "",
  showBackground = true,
  showErrorDisplay = true,
  onSuccess,
  onError,
  onSubmit,
  containerClassName = "bg-white rounded-medium p-2.5 shadow-nav",
  formClassName = "bg-white border border-dashed rounded border-gray-100 p-12 max-md:p-5",
  fieldClassName = "block w-full text-sm rounded-[48px] border border-borderColour py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white focus:border-primary dark:focus:border-primary duration-300 transition-all",
  buttonClassName = "btn disabled:opacity-50 disabled:cursor-not-allowed"
}) => {
  // Initialize form data based on fields
  const initialFormData = fields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);
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
    
    // Call custom onSubmit if provided
    if (onSubmit) {
      onSubmit(formData);
    }
    
    try {
      const response = await axios.post(apiEndpoint, formData, {
        headers: apiHeaders,
      });
      
      if (response.data && response.data.detail) {
        const bookingData = response.data.detail;
        const successMessage = `Demo request submitted successfully! Our team will contact you within 24 hours.`;
        
        toast.success(successMessage, {
          duration: 6000,
        });
        
        // Call custom onSuccess if provided
        if (onSuccess) {
          onSuccess(bookingData);
        }
        
        // Reset form
        setFormData(initialFormData);
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
      
      // Call custom onError if provided
      if (onError) {
        onError(err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const colSpanClass = field.colSpan === 'full' ? 'col-span-full' : 'max-md:col-span-full md:col-span-6';
    
    return (
      <div key={field.name} className={colSpanClass}>
        <label htmlFor={field.name} className="block text-sm font-medium font-jakarta_sans text-paragraph mb-2">
          {field.required && <span className="text-red-500">*</span>} {field.label}
        </label>
        
        {field.type === 'select' ? (
          <select
            name={field.name}
            id={field.name}
            required={field.required}
            value={formData[field.name]}
            onChange={handleInputChange}
            className={fieldClassName}
          >
            <option value="">* {field.placeholder}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input 
            type={field.type}
            name={field.name}
            id={field.name}
            placeholder={field.placeholder}
            required={field.required}
            value={formData[field.name]}
            onChange={handleInputChange}
            className={fieldClassName}
          />
        )}
      </div>
    );
  };

  return (
    <div className={`relative z-10 max-w-[850px] mx-auto ${className}`}>
      {showBackground && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
          <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
          <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"></div>
          <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
        </div>
      )}
      
      <div className={containerClassName}>
        <div className={formClassName}>
          {showErrorDisplay && error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
              {fields.map(renderField)}
              
              <div className="mx-auto col-span-full text-center">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={buttonClassName}
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
                    submitButtonText
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDemoForm;
