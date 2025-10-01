'use client';

import Image from 'next/image';
import React from 'react';

interface MobileDeviceOverlayProps {
  className?: string;
  position?: 'bottom-left' | 'bottom-center' | 'bottom-right';
  size?: 'sm' | 'md' | 'lg';
  showMainImage?: boolean;
}

const MobileDeviceOverlay: React.FC<MobileDeviceOverlayProps> = ({
  className = '',
  position = 'bottom-right',
  size = 'md',
  showMainImage = true
}) => {
  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-left':
        return 'left-4';
      case 'bottom-center':
        return 'left-1/2 -translate-x-1/2';
      case 'bottom-right':
        return 'left-12';
      default:
        return 'left-12';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'max-md:w-[200px] max-lg:w-3/5 lg:w-[200px]';
      case 'md':
        return 'max-md:w-[285px] max-lg:w-4/5 lg:w-[285px]';
      case 'lg':
        return 'max-md:w-[350px] max-lg:w-full lg:w-[350px]';
      default:
        return 'max-md:w-[285px] max-lg:w-4/5 lg:w-[285px]';
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Phone device overlay - positioned first */}
      <div className={`absolute ${getPositionClasses()} bottom-2.5 ${getSizeClasses()} lg:aspect-video z-10 ${className}`}>
        <Image 
          src="/images/payment/payment-hero-device1.png" 
          alt="MenuMitra mobile app interface" 
          width={285} 
          height={160} 
          className="inline-block rounded-t-medium w-full shadow-lg" 
        />
      </div>
      
      {/* Main dashboard image - positioned below phone */}
      {showMainImage && (
        <div className="absolute bottom-0 left-0 w-full">
          <Image 
            src="/images/payment/payment-hero.png" 
            alt="MenuMitra QR menu dashboard" 
            width={600} 
            height={450} 
            className="inline-block w-full rounded-medium shadow-nav" 
          />
        </div>
      )}
    </div>
  );
};

export default MobileDeviceOverlay;
