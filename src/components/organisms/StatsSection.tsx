'use client';

import React from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

interface StatsSectionProps {
  stats?: StatItem[];
  className?: string;
}

const defaultStats: StatItem[] = [
  {
    value: 60,
    suffix: '%',
    label: 'Project Completed'
  },
  {
    value: 30,
    suffix: '+',
    label: 'Team Members'
  },
  {
    value: 40,
    suffix: 'K',
    label: 'Satisfied Clients'
  }
];

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats = defaultStats, 
  className = '' 
}) => {
  return (
    <section className={`relative z-10 ${className}`}>
      <div className="container">
        <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 max-w-[850px] mx-auto shadow-nav">
          <div className="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark py-10 grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-10 items-center [&>*:not(:last-child)]:after:absolute md:[&>*:not(:last-child)]:after:right-0 md:[&>*:not(:last-child)]:after:w-[1px] md:[&>*:not(:last-child)]:after:h-[60px] md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border.svg')] md:[&>*:not(:last-child)]:after:top-1/2 md:[&>*:not(:last-child)]:after:-translate-y-1/2 md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-dark.svg')] max-md:[&>*:not(:last-child)]:after:h-[1px] max-md:[&>*:not(:last-child)]:after:w-[270px] max-md:[&>*:not(:last-child)]:after:-bottom-5 max-md:[&>*:not(:last-child)]:after:left-1/2 max-md:[&>*:not(:last-child)]:after:-translate-x-1/2 max-md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile.svg')] max-md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile-dark.svg')]" id="counter">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center relative">
                <h2 className="text-[48px]">
                  <span className="counter" data-value={stat.value}>
                    {stat.value}
                  </span>
                  <span className="percent">{stat.suffix}</span>
                </h2>
                <p className="font-jakarta_sans text-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
