'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import SocialIcon from '@/components/atoms/SocialIcon';
import { email, phone, getEmailLink, getPhoneLink, social } from '@/config/contact';

interface ContactHeaderProps {
  className?: string;
}

const ContactHeader: React.FC<ContactHeaderProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white py-6 ${className}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center gap-3">
            <Image 
              src="/images/mm/mm.png" 
              alt="MenuMitra logo" 
              width={40} 
              height={40} 
              className="w-auto h-auto"
            />
            <span className="text-2xl font-bold text-gray-900">MenuMitra</span>
          </div>

          {/* Center Section - Contact Information */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <a 
                href={getPhoneLink()} 
                className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <a 
                href={getEmailLink()} 
                className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                {email}
              </a>
            </div>
<div className="flex items-center gap-2">
            {/* Social Media Icons */}
            <ul className="flex items-center max-lg:justify-center social-link gap-4">
              <SocialIcon platform="google" href="https://www.google.com/search?q=MenuMitra" target="_blank" />
              <SocialIcon platform="facebook" href="https://www.facebook.com/share/x5wymXr6w7W49vaQ/?mibextid=qi2Omg" target="_blank" />
              <SocialIcon platform="youtube" href={`https://www.youtube.com/${social.youtube}`} target="_blank" />
              <SocialIcon platform="instagram" href={`https://www.instagram.com/${social.instagram}/`} target="_blank" />
            </ul>
            </div>
          </div>

          {/* Right Section - Social Icons and CTA */}
          <div className="flex items-center gap-4">

            {/* Book a Demo Button */}
            <Link 
              href="/book-demo" 
              className="btn btn-nav btn-sm whitespace-nowrap font-bold"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Mobile Contact Info */}
        <div className="md:hidden mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <a 
                href={getPhoneLink()} 
                className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <a 
                href={getEmailLink()} 
                className="text-sm text-gray-700 hover:text-primary-600 transition-colors"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
