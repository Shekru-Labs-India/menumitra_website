'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, Mail, HelpCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { getWhatsAppLink } from '@/config/contact';

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon?: React.ReactNode | string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'whatsapp';
  size?: 'small' | 'medium' | 'large';
  animate?: boolean; // New prop to control animation
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon = 'message',
  label = "Contact Us",
  variant = 'primary',
  size = 'medium',
  animate = true // Default to true for animation
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show FAB after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Function to render icon based on string name or React node
  const renderIcon = () => {
    if (typeof icon === 'string') {
      const iconSizeClasses = {
        small: 'w-5 h-5',
        medium: 'w-6 h-6',
        large: 'w-8 h-8'
      };

      const iconProps = { className: iconSizeClasses[size] };

      switch (icon) {
        case 'message':
          return <MessageCircle {...iconProps} />;
        case 'phone':
          return <Phone {...iconProps} />;
        case 'arrow-up':
          return <ArrowUp {...iconProps} />;
        case 'mail':
          return <Mail {...iconProps} />;
        case 'help':
          return <HelpCircle {...iconProps} />;
        case 'whatsapp':
          return <WhatsAppIcon className={iconSizeClasses[size]} />;
        default:
          return <MessageCircle {...iconProps} />;
      }
    }
    return icon;
  };

  const handleClick = () => {
    // WhatsApp variant: open WhatsApp chat
    if (variant === 'whatsapp') {
      const whatsappUrl = getWhatsAppLink();
      window.open(whatsappUrl, '_blank');
      return;
    }

    // Default action: scroll to contact section or top
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20'
  };

  const iconSizeClasses = {
    small: 'w-5 h-5',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg shadow-gray-600/25',
    accent: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-600/25',
    whatsapp: 'fab-whatsapp'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          ${animate && variant === 'whatsapp' ? 'fab-whatsapp-animate' : ''}
          rounded-full
          flex
          items-center
          justify-center
          transition-opacity
          duration-500
          ease-out
          focus:outline-none
          relative
        `}
        aria-label={label}
        title={label}
      >
        {/* Icon */}
        <div className={`${iconSizeClasses[size]} relative z-10`}>
          {renderIcon()}
        </div>
      </button>

      {/* Tooltip */}
      <div className={`
        absolute
        right-full
        mr-3
        top-1/2
        -translate-y-1/2
        bg-gray-900
        text-white
        text-sm
        px-3
        py-2
        rounded-lg
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        whitespace-nowrap
        pointer-events-none
        ${isVisible ? 'translate-x-0' : 'translate-x-2'}
      `}>
        {label}
        <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
      </div>
    </div>
  );
};

export default FloatingActionButton;
