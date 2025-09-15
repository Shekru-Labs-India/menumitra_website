'use client';

import React from 'react';
import Image from 'next/image';

interface GraphBackgroundProps {
  className?: string;
  opacity?: number;
  priority?: boolean;
  rotation?: '0deg' | '90deg' | '180deg' | '270deg';
  position?: 'left' | 'right' | 'top' | 'bottom' | 'center';
}

const GraphBackground: React.FC<GraphBackgroundProps> = ({ 
  className = '', 
  opacity = 0.3,
  priority = false,
  rotation = '0deg',
  position = 'center'
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'left-0 top-0 h-full w-auto';
      case 'right':
        return 'right-0 top-0 h-full w-auto';
      case 'top':
        return 'top-0 left-0 w-full h-auto';
      case 'bottom':
        return 'bottom-0 left-0 w-full h-auto';
      default:
        return 'top-0 left-0 w-full h-auto';
    }
  };

  return (
    <>
      {/* Desktop Graph Background */}
      <div className={`absolute ${getPositionClasses()} max-lg:hidden ${className}`}>
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="Graph background" 
          width={1920} 
          height={444} 
          className="w-full h-auto"
          style={{ 
            opacity,
            transform: `rotate(${rotation})`
          }}
          priority={priority}
        />
      </div>
      
      {/* Mobile Graph Background */}
      <div className={`absolute ${getPositionClasses()} lg:hidden ${className}`}>
        <Image 
          src="/images/hero/hero-graph-bottom.svg" 
          alt="Graph background mobile" 
          width={375} 
          height={444} 
          className="w-full h-auto"
          style={{ 
            opacity,
            transform: `rotate(${rotation})`
          }}
          priority={priority}
        />
      </div>
    </>
  );
};

export default GraphBackground;
