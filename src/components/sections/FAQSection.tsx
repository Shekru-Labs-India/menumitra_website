'use client';

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [collapsingItems, setCollapsingItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      // Closing item - add to collapsing first
      setCollapsingItems(prev => [...prev, index]);
      // Remove from open after a short delay to allow collapsing animation
      setTimeout(() => {
        setOpenItems(prev => prev.filter(item => item !== index));
        setCollapsingItems(prev => prev.filter(item => item !== index));
      }, 300); // Match the CSS transition duration
    } else {
      // Opening item - add directly to open
      setOpenItems(prev => [...prev, index]);
    }
  };

  const faqData = [
    {
      question: "What is MenuMitra and how does it help my restaurant?",
      answer: "MenuMitra is a comprehensive restaurant management system that helps you manage your entire restaurant operations from menu management to customer orders, kitchen display, and analytics. It streamlines your workflow, reduces errors, and improves customer satisfaction."
    },
    {
      question: "What are the main features of MenuMitra?",
      answer: "MenuMitra offers multiple modules including Point of Sale (POS), Kitchen Display System (KDS), Customer Display System (CDS), Customer App, Waiter App, Captain App, and comprehensive analytics dashboard. Each module is designed to work seamlessly together."
    },
    {
      question: "How do I get started with MenuMitra?",
      answer: "Getting started is easy! Contact our team to schedule a personalized demo where we'll show you how MenuMitra can benefit your specific restaurant. We'll help you choose the right modules and provide full setup support."
    }
  ];

  return (
    <section className="relative py-150 max-md:overflow-hidden bg-[url('/images/hero-gradient.png')] bg-cover bg-no-repeat bg-center">
    <div className="container relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
      </div>
      <div className="absolute left-1/2 top-150 p-[350px] -translate-x-1/2 bg-cover w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10" />
      <div className=" max-w-[830px] mx-auto">
        <div className=" text-center">
          <p className="section-tagline mb-3">Faq’s</p>
          <h2 className="mb-12">
            Frequently Asked <br />
            Question
          </h2>
        </div>
        <div className="[&>*:not(:last-child)]:mb-5">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
              <div 
                className={`faq-header flex items-center py-3 px-5 bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer ${openItems.includes(index) ? 'open' : ''}`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold">
                  Q. {faq.question}
                </h3>
                <span className="shrink-0 ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    className="plus"
                  >
                    <path
                      d="M6.25 10H13.75M10 6.25V13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="stroke-paragraph dark:stroke-primary"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    className="minus"
                  >
                    <path
                      d="M6.25 10H13.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="stroke-paragraph dark:stroke-primary"
                    />
                  </svg>
                </span>
              </div>
              <div className={`faq-body ${
                openItems.includes(index) 
                  ? 'open' 
                  : collapsingItems.includes(index) 
                    ? 'collapsing' 
                    : 'close'
              }`}>
                <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default FAQSection;
