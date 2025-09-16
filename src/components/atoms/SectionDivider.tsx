import React from 'react';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <svg 
        width="100%" 
        height="2" 
        viewBox="0 0 1288 2" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-0.5"
      >
        <path 
          d="M0 1H1288" 
          stroke="url(#paint0_linear_1320_15428)" 
          strokeDasharray="5 3"
        />
        <defs>
          <linearGradient 
            id="paint0_linear_1320_15428" 
            x1="0" 
            y1="1" 
            x2="1288" 
            y2="0.999993" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DCE0D3" stopOpacity="0"/>
            <stop offset="0.500779" stopColor="#DCE0D3"/>
            <stop offset="1" stopColor="#DCE0D3" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SectionDivider;
