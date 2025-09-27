'use client';

import React from 'react';
import BookDemoForm from './BookDemoForm';

const BookDemoFormSection: React.FC = () => {
  const title = "Book A Demo";
  const description = "Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.";
  const sectionClassName = "pt-[200px] pb-[100px] max-md:pt-150 relative overflow-hidden";
  const showSectionBackground = true;
  const showSectionTitle = true;
  const showSectionDescription = true;
  const enableAOS = true;
  const aosProps = {
    'data-aos': 'fade-up',
    'data-aos-offset': '200',
    'data-aos-duration': '1000',
    'data-aos-once': 'true'
  };
  return (
    <section className={sectionClassName}>
      {showSectionBackground && (
        <div className="absolute left-1/2 top-0 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
      )}
      
      <div className="container relative" {...(enableAOS ? aosProps : {})}>
        {(showSectionTitle || showSectionDescription) && (
          <div className="mb-12 text-center max-w-[600px] mx-auto">
            {showSectionTitle && <h2>{title}</h2>}
            {showSectionDescription && (
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        
        <BookDemoForm />
      </div>
    </section>
  );
};

export default BookDemoFormSection;
