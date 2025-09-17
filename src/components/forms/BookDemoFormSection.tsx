'use client';

import React from 'react';
import BookDemoForm, { BookDemoFormProps } from './BookDemoForm';

export interface BookDemoFormSectionProps extends BookDemoFormProps {
  // Section styling
  sectionClassName?: string;
  showSectionBackground?: boolean;
  showSectionTitle?: boolean;
  showSectionDescription?: boolean;
  
  // AOS animation props
  enableAOS?: boolean;
  aosProps?: {
    'data-aos'?: string;
    'data-aos-offset'?: string | number;
    'data-aos-duration'?: string | number;
    'data-aos-once'?: string | boolean;
  };
}

const BookDemoFormSection: React.FC<BookDemoFormSectionProps> = ({
  title = "Book A Demo",
  description = "Fill out the form below and our team will contact you within 24 hours to schedule your personalized demo.",
  sectionClassName = "pt-[200px] pb-[100px] max-md:pt-150 relative overflow-hidden",
  showSectionBackground = true,
  showSectionTitle = true,
  showSectionDescription = true,
  enableAOS = true,
  aosProps = {
    'data-aos': 'fade-up',
    'data-aos-offset': '200',
    'data-aos-duration': '1000',
    'data-aos-once': 'true'
  },
  ...formProps
}) => {
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
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        
        <BookDemoForm
          title={title}
          description={description}
          {...formProps}
        />
      </div>
    </section>
  );
};

export default BookDemoFormSection;
