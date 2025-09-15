import React from 'react';
import Image from 'next/image';
import SocialIcon from '@/components/atoms/SocialIcon';

interface FooterSectionProps {
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`bg-white dark:bg-dark-300 overflow-hidden relative pt-20 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={120}
              height={40}
              className="inline-block dark:hidden mb-10"
            />
            <Image
              src="/images/logo-light-1.svg"
              alt="logo dark version"
              width={120}
              height={40}
              className="hidden dark:inline-block mb-10"
            />
            <p className="max-w-[350px] max-lg:mx-auto">
              Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Explore</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <a href="/about" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Services
                </a>
              </li>
              <li>
                <a href="/career" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Career
                </a>
              </li>
              <li>
                <a href="/payment" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Payment
                </a>
              </li>
              <li>
                <a href="/price" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/faq" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Faq's
                </a>
              </li>
              <li>
                <a href="/testimonial" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Resources</h3>
            <ul className="[&>*:not(:last-child)]:mb-3">
              <li>
                <a href="/banking" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Banking
                </a>
              </li>
              <li>
                <a href="/team" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Team
                </a>
              </li>
              <li>
                <a href="/integration" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Integration
                </a>
              </li>
              <li>
                <a href="/blog" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="/login" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Log In
                </a>
              </li>
              <li>
                <a href="/signup" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/404" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  404
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-2 max-lg:text-center">
            <h3 className="mb-8 font-medium text-lg">Get In touch</h3>
            <p className="mb-3">Need Support?</p>
            <p className="mb-3">
              <a href="mailto:hallo@example.com" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                Hallo@example.com
              </a>
            </p>

            <p className="mb-3">
              <a href="tel:+391(0)355684593" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                +391 (0)35 2568 4593
              </a>
            </p>
            <ul className="flex items-center max-lg:justify-center social-link gap-4">
              <SocialIcon platform="facebook" href="#" />
              <SocialIcon platform="twitter" href="#" />
              <SocialIcon platform="linkedin" href="#" />
              <SocialIcon platform="instagram" href="#" />
              <SocialIcon platform="youtube" href="#" />
            </ul>
          </div>
        </div>

        <div className="seperator">
          <Image
            src="/images/footer-seperator.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className="dark:hidden w-full object-cover"
          />
          <Image
            src="/images/footer-seperator-dark.svg"
            alt="footer-seperator"
            width={1200}
            height={50}
            className="hidden dark:block w-full object-cover"
          />
        </div>

        <div className="py-10 max-lg:text-center">
          <div className="flex max-lg:flex-col lg:items-center">
            <p className="max-lg:mb-10">@ {currentYear} Aplio. All Rights Reserved</p>
            <ul className="lg:ml-auto flex items-center gap-15 max-lg:justify-center">
              <li>
                <a href="/privacy" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
