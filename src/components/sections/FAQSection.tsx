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
    <section className="overflow-hidden relative pb-[250px] max-md:pb-20">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-8 items-center">
          <div className="relative flex max-lg:justify-center justify-end items-center max-lg:mb-25">
            <img 
              src="/images/analytics/analytics-faq.png" 
              alt="analytics faq image" 
              className="dark:hidden max-w-[350px] sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px]" 
              data-aos="fade-up" 
              data-aos-offset="200" 
              data-aos-duration="1000" 
              data-aos-once="true"
            />
            <img 
              src="/images/analytics/analytics-faq-dark.png" 
              alt="analytics faq image" 
              className="hidden dark:inline-block max-w-[350px] sm:max-w-[420px] lg:max-w-[320px] xl:max-w-[420px]" 
              data-aos="fade-up" 
              data-aos-offset="200" 
              data-aos-duration="1000" 
              data-aos-once="true"
            />
            <div 
              className="absolute -right-5 -bottom-20 md:right-15 lg:-right-15 xl:-right-25 left-auto lg:-bottom-25 xl:-bottom-150 top-auto max-w-[250px] xl:max-w-[344px]" 
              data-aos="fade-right" 
              data-aos-offset="200" 
              data-aos-duration="1000" 
              data-aos-once="true"
            >
              <img 
                src="/images/analytics/analytics-faq-shape.png" 
                alt="analytics faq shape" 
                className="dark:hidden"
              />
              <img 
                src="/images/analytics/analytics-faq-shape-dark.png" 
                alt="analytics faq shape" 
                className="hidden dark:inline-block"
              />
            </div>
          </div>

          <div className="lg:pl-15 xl:pl-25">
            <div>
              <p className="section-tagline">Faq's</p>
              <h2 className="mb-8">
                Frequently Asked Question<br />
                From Clients
              </h2>
            </div>
            
            <div className="[&>*:not(:last-child)]:mb-5">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item bg-white dark:bg-dark-200 p-2.5 rounded-medium">
                  <div 
                    className="faq-header flex items-center max-md:gap-x-2.5 py-3 px-5 bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark cursor-pointer"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl font-semibold">Q. {faq.question}</h3>
                    <span className="shrink-0 ml-auto">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        className={`plus transition-opacity duration-300 ${openItems.includes(index) ? 'opacity-0' : 'opacity-100'}`}
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
                        width="20" 
                        height="20" 
                        viewBox="0 0 20 20" 
                        fill="none" 
                        className={`minus transition-opacity duration-300 ${openItems.includes(index) ? 'opacity-100' : 'opacity-0'}`}
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
                  <div className={`faq-body transition-all duration-300 overflow-hidden ${openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="text-paragraph-light pt-6 px-6 pb-3.5 dark:text-[#A1A49D]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
