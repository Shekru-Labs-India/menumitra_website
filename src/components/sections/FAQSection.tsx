'use client';

import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is a business agency?",
      answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. \"It's not Latin."
    },
    {
      question: "What services does a business agency provide?",
      answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. \"It's not Latin."
    },
    {
      question: "How often should I update my website?",
      answer: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. \"It's not Latin."
    }
  ];

  return (
    <section className="relative py-150 max-md:overflow-hidden">
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
          <div className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
            <div className="faq-header flex items-center py-3 px-5 bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark  cursor-pointer">
              <h3 className="text-xl font-semibold">
                Q. What is a business agency?
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
                  className=" minus"
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
            <div className="faq-body close">
              <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. “It's not Latin.
              </div>
            </div>
          </div>
          <div className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
            <div className="faq-header flex items-center py-3 px-5 bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer">
              <h3 className="text-xl font-semibold">
                Q. What services does a business agency provide?
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
                  className=" minus"
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
            <div className="faq-body close ">
              <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. “It's not Latin.
              </div>
            </div>
          </div>
          <div className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
            <div className="faq-header flex items-center py-3 px-5 bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer">
              <h3 className="text-xl font-semibold">
                Q. How often should I update my website?
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
                  className=" minus"
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
            <div className="faq-body close ">
              <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. “It's not Latin.
              </div>
            </div>
          </div>
          <div className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
            <div className="faq-header py-3 px-5 flex items-center bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer">
              <h3 className="text-xl font-semibold">
                Q. How do subscriptions work?
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
                  className=" minus"
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
            <div className="faq-body close ">
              <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. “It's not Latin.
              </div>
            </div>
          </div>
          <div className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
            <div className="faq-header flex items-center py-3 px-5  bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer">
              <h3 className="text-xl font-semibold ">
                Q. What other services are you compatible with?
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
                  className=" minus"
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
            <div className="faq-body close ">
              <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                Until recently, the prevailing view assumed lorem ipsum was born
                as a nonsense text. “It's not Latin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  );
};

export default FAQSection;
