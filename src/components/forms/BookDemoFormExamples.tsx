'use client';

import React from 'react';
import BookDemoForm, { FormField } from './BookDemoForm';
import BookDemoFormSection from './BookDemoFormSection';

// Example 1: Basic usage with default configuration
export const BasicBookDemoForm = () => {
  return <BookDemoFormSection />;
};

// Example 2: Custom form with different fields
export const CustomBookDemoForm = () => {
  const customFields: FormField[] = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true,
      colSpan: 'full'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'your.email@example.com',
      required: true,
      colSpan: 'half'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      placeholder: '+1 (555) 123-4567',
      required: true,
      colSpan: 'half'
    },
    {
      name: 'company',
      label: 'Company Name',
      type: 'text',
      placeholder: 'Your company name',
      required: false,
      colSpan: 'full'
    }
  ];

  return (
    <BookDemoFormSection
      title="Get Started Today"
      description="Join thousands of restaurants already using MenuMitra to streamline their operations."
      submitButtonText="Start Free Trial"
      fields={customFields}
      onSuccess={(data) => {
        console.log('Custom success handler:', data);
        // Custom success logic here
      }}
      onError={(error) => {
        console.log('Custom error handler:', error);
        // Custom error logic here
      }}
    />
  );
};

// Example 3: Minimal form without section wrapper
export const MinimalBookDemoForm = () => {
  const minimalFields: FormField[] = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Your name',
      required: true,
      colSpan: 'half'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      colSpan: 'half'
    }
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
      <BookDemoForm
        fields={minimalFields}
        submitButtonText="Send Message"
        showBackground={false}
        containerClassName="bg-gray-50 rounded-lg p-4"
        formClassName="bg-transparent border-none p-0"
        onSuccess={(data) => {
          alert('Message sent successfully!');
        }}
      />
    </div>
  );
};

// Example 4: Form with custom API endpoint
export const CustomAPIBookDemoForm = () => {
  return (
    <BookDemoFormSection
      title="Contact Sales Team"
      description="Get in touch with our sales team for enterprise solutions."
      submitButtonText="Contact Sales"
      apiEndpoint="https://api.example.com/contact-sales"
      apiHeaders={{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer your-token-here'
      }}
      onSuccess={(data) => {
        // Custom success handling for sales team
        console.log('Sales inquiry submitted:', data);
      }}
    />
  );
};

// Example 5: Form with custom styling
export const StyledBookDemoForm = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 p-8 rounded-2xl">
      <BookDemoForm
        title="Join Our Beta Program"
        description="Be among the first to experience our new features."
        submitButtonText="Join Beta"
        showBackground={false}
        containerClassName="bg-white rounded-xl p-6 shadow-xl"
        formClassName="bg-transparent border-2 border-dashed border-blue-200 rounded-lg p-8"
        fieldClassName="block w-full text-sm rounded-lg border-2 border-blue-200 py-3 px-4 text-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 outline-none bg-white focus:border-blue-500 dark:focus:border-blue-400 duration-300 transition-all"
        buttonClassName="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        onSuccess={(data) => {
          console.log('Beta signup successful:', data);
        }}
      />
    </div>
  );
};

// Example 6: Form with custom validation and callbacks
export const AdvancedBookDemoForm = () => {
  const handleSubmit = (formData: any) => {
    console.log('Form submitted with data:', formData);
    // Custom validation or processing before API call
  };

  const handleSuccess = (data: any) => {
    console.log('Success:', data);
    // Custom success handling
    // Maybe redirect to a thank you page
    // window.location.href = '/thank-you';
  };

  const handleError = (error: any) => {
    console.log('Error:', error);
    // Custom error handling
    // Maybe show a custom modal or notification
  };

  return (
    <BookDemoFormSection
      title="Advanced Demo Request"
      description="Request a personalized demo with our team."
      submitButtonText="Request Demo"
      onSubmit={handleSubmit}
      onSuccess={handleSuccess}
      onError={handleError}
      showErrorDisplay={true}
    />
  );
};

// Export all examples for easy importing
export const BookDemoFormExamples = {
  Basic: BasicBookDemoForm,
  Custom: CustomBookDemoForm,
  Minimal: MinimalBookDemoForm,
  CustomAPI: CustomAPIBookDemoForm,
  Styled: StyledBookDemoForm,
  Advanced: AdvancedBookDemoForm
};
