'use client';

import React from 'react';
import { CountUp } from '@/components/reactbits';

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
    value: 2500,
    suffix: '+',
    label: 'Restaurants Served'
  },
  {
    value: 25,
    suffix: '%',
    label: 'Average Revenue Growth'
  },
  {
    value: 4.8,
    suffix: '/5',
    label: 'Customer Rating'
  }
];

const StatsSection: React.FC<StatsSectionProps> = ({ 
  stats = defaultStats, 
  className = '' 
}) => {
  return (
    <section className={`relative z-10 ${className}`}>
      <div className="container">
        <div className="bg-white rounded-medium p-2.5 max-w-[850px] mx-auto shadow-nav">
          <div className="bg-white border border-dashed rounded border-gray-100 py-10 grid grid-cols-3 max-md:grid-cols-1 max-md:gap-y-10 items-center [&>*:not(:last-child)]:after:absolute md:[&>*:not(:last-child)]:after:right-0 md:[&>*:not(:last-child)]:after:w-[1px] md:[&>*:not(:last-child)]:after:h-[60px] md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border.svg')] md:[&>*:not(:last-child)]:after:top-1/2 md:[&>*:not(:last-child)]:after:-translate-y-1/2 md:dark:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-dark.svg')] max-md:[&>*:not(:last-child)]:after:h-[1px] max-md:[&>*:not(:last-child)]:after:w-[270px] max-md:[&>*:not(:last-child)]:after:-bottom-5 max-md:[&>*:not(:last-child)]:after:left-1/2 max-md:[&>*:not(:last-child)]:after:-translate-x-1/2 max-md:[&>*:not(:last-child)]:after:content-[url('/images/clients/client-item-border-mobile.svg')]" id="counter">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center relative">
                <h2 className="text-[48px]">
                  <CountUp 
                    to={stat.value} 
                    duration={2}
                    delay={index * 0.2}
                    className="counter"
                  />
                  {stat.suffix}
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
