'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, User } from 'lucide-react';
import { useAOS } from '@/hooks/useAOS';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  hotelLogo: string;
  quote: string;
  rating: number;
  name: string;
  position: string;
}

interface TestimonialsSliderProps {
  className?: string;
  testimonials?: Testimonial[];
}

const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ 
  className = '',
  testimonials = [
    {
      id: 1,
      hotelLogo: '/images/clients/friends_cafe.webp',
      quote: "Bhai, MenuMitra ka digital menu system bilkul mast hai! Customers ab phone scan karke menu dekh sakte hain. Waiter ko har time menu leke jaane ki zarurat nahi. Time bachta hai, customers bhi khush!",
      rating: 5,
      name: 'Suresh Deshmukh',
      position: 'Manager, Friends Cafe'
    },
    {
      id: 2,
      hotelLogo: '/images/clients/sudamas_misal_house.webp',
      quote: "MenuMitra ne hamara restaurant modern banaya! QR code scan karke menu dekhna, online ordering, payment integration - sab kuch ek jagah. Customers ko lagta hai ki koi fancy restaurant mein aaye hain!",
      rating: 4,
      name: 'Vikram Jadhav',
      position: 'Chef & Owner, Sudamas Misal House'
    },
    {
      id: 3,
      hotelLogo: '/images/clients/hotel_nandini_pure_veg.webp',
      quote: "Pehle toh menu update karna bahut mushkil tha. Ab MenuMitra se instant update ho jata hai! Naya dish add karna, price change karna - sab online se ho jata hai. Technology ka magic hai ye!",
      rating: 5,
      name: 'Priya Kulkarni',
      position: 'Operations Head, Hotel Nandini Pure Veg'
    },
    {
      id: 4,
      hotelLogo: '/images/clients/garva_order.webp',
      quote: "Arre yaar, MenuMitra ne hamara restaurant ka business hi badal diya! Pehle toh customers ko menu samajh nahi aa raha tha, ab sabko pata chal jata hai ki kya order karna hai. Sales 40% badh gaye hai!",
      rating: 5,
      name: 'Rajesh Patil',
      position: 'Owner, Garva Biryani'
    },
    {
      id: 5,
      hotelLogo: '/images/clients/hotel_rasika.webp',
      quote: "MenuMitra ka QR code system bahut convenient hai! Customers ko menu dekhne ke liye waiter ka intezaar nahi karna padta. Order process fast ho gaya hai!",
      rating: 4,
      name: 'Anita Sharma',
      position: 'Manager, Hotel Rasika'
    },
    {
      id: 6,
      hotelLogo: '/images/clients/hotel_ganesh_shakaahari.webp',
      quote: "Digital menu se hamara restaurant ka image improve hua hai! Customers ko lagta hai ki ye modern restaurant hai. Online ordering se revenue bhi badha hai!",
      rating: 5,
      name: 'Ravi Ganesh',
      position: 'Owner, Hotel Ganesh Shakaahari'
    },
    {
      id: 7,
      hotelLogo: '/images/clients/hotel_new_jagdamba.webp',
      quote: "MenuMitra se hamara restaurant tech-savvy ban gaya! QR code scan karke menu dekhna, online payment - sab kuch seamless hai. Customer satisfaction badh gaya hai!",
      rating: 4,
      name: 'Sunil Jagdamba',
      position: 'Proprietor, Hotel New Jagdamba'
    },
    {
      id: 8,
      hotelLogo: '/images/clients/hotel_pp_patil.webp',
      quote: "Pehle menu update karna time-consuming tha. Ab MenuMitra se instant updates ho jate hain! Naye dishes add karna, prices change karna - sab online!",
      rating: 5,
      name: 'Prakash Patil',
      position: 'Manager, Hotel PP Patil'
    },
    {
      id: 9,
      hotelLogo: '/images/clients/hotel_audumbar.webp',
      quote: "MenuMitra ka digital menu system restaurant ko professional banata hai! Customers ko menu dekhne mein koi problem nahi hoti. Service fast ho gaya hai!",
      rating: 4,
      name: 'Deepak Audumbar',
      position: 'Owner, Hotel Audumbar'
    },
    {
      id: 10,
      hotelLogo: '/images/clients/hotel_dongarmath.webp',
      quote: "QR code menu se hamara restaurant modern lagta hai! Customers ko menu dekhne ke liye waiter ki zarurat nahi. Order process smooth ho gaya hai!",
      rating: 5,
      name: 'Vishal Dongarmath',
      position: 'Manager, Hotel Dongarmath'
    },
    {
      id: 11,
      hotelLogo: '/images/clients/hotel_sanskruti_pure_veg.webp',
      quote: "MenuMitra se hamara restaurant ka digital transformation hua hai! Online ordering, payment integration - sab kuch ek platform pe. Technology ka fayda!",
      rating: 4,
      name: 'Sanskriti Sharma',
      position: 'Owner, Hotel Sanskruti Pure Veg'
    },
    {
      id: 12,
      hotelLogo: '/images/clients/house_of_schezwam.webp',
      quote: "Digital menu system se hamara Chinese restaurant popular hua hai! Customers ko menu dekhne mein convenience hai. Online orders badh gaye hain!",
      rating: 5,
      name: 'Chen Wei',
      position: 'Chef, House of Schezwam'
    },
    {
      id: 13,
      hotelLogo: '/images/clients/nps_chinese_hub.webp',
      quote: "MenuMitra ka QR code system Chinese cuisine ke liye perfect hai! Customers ko menu dekhne mein koi confusion nahi. Order accuracy badh gaya hai!",
      rating: 4,
      name: 'Nitin Chinese',
      position: 'Manager, NPS Chinese Hub'
    },
    {
      id: 14,
      hotelLogo: '/images/clients/new_jagdamba_veg_nonveg.webp',
      quote: "Digital menu se hamara mixed cuisine restaurant successful hua hai! Veg-nonveg options clearly display hote hain. Customer satisfaction high hai!",
      rating: 5,
      name: 'Jagdamba Singh',
      position: 'Owner, New Jagdamba Veg Nonveg'
    },
    {
      id: 15,
      hotelLogo: '/images/clients/shree_pure_veg.webp',
      quote: "MenuMitra se hamara pure veg restaurant ka digital presence strong hua hai! Online ordering se revenue increase hua hai. Technology ka sahi use!",
      rating: 4,
      name: 'Shree Patel',
      position: 'Manager, Shree Pure Veg'
    },
    {
      id: 16,
      hotelLogo: '/images/clients/hotel_borul_atitthi.webp',
      quote: "QR code menu system se hamara restaurant modern ban gaya hai! Customers ko menu dekhne mein convenience hai. Service quality improve hui hai!",
      rating: 5,
      name: 'Borul Atitthi',
      position: 'Proprietor, Hotel Borul Atitthi'
    },
    {
      id: 17,
      hotelLogo: '/images/clients/aai_tulja_bhavani.webp',
      quote: "MenuMitra ka digital menu system restaurant ko professional banata hai! Customers ko menu dekhne mein koi problem nahi. Order process fast hai!",
      rating: 4,
      name: 'Tulja Bhavani',
      position: 'Owner, Aai Tulja Bhavani'
    },
    {
      id: 18,
      hotelLogo: '/images/clients/cafe_durga.webp',
      quote: "Digital menu se hamara cafe popular hua hai! Customers ko menu dekhne mein convenience hai. Online orders badh gaye hain!",
      rating: 5,
      name: 'Durga Cafe',
      position: 'Manager, Cafe Durga'
    },
    {
      id: 19,
      hotelLogo: '/images/clients/creamy_nuts_cafe.webp',
      quote: "MenuMitra ka QR code system cafe ke liye perfect hai! Customers ko menu dekhne mein koi confusion nahi. Order accuracy badh gaya hai!",
      rating: 4,
      name: 'Creamy Nuts',
      position: 'Owner, Creamy Nuts Cafe'
    }
  ]
}) => {
  const { refreshAOS } = useAOS();
  
  useEffect(() => {
    // Refresh AOS when component mounts
    const timer = setTimeout(() => {
      refreshAOS();
    }, 100);
    
    return () => clearTimeout(timer);
  }, [refreshAOS]);
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-paragraph fill-current' 
            : 'text-[#A7A7B4]'
        }`}
      />
    ));
  };

  return (
    <section className={`pb-150 relative max-md:overflow-hidden ${className}`}>
      <div className="container relative">
        <div className="text-center max-w-[550px] mx-auto">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer's say about our company</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="absolute left-1/2 -top-150 p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
          
          <div className="!py-16 !px-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ 
                clickable: true,
                el: '.swiper-pagination'
              }}
              onSwiper={() => {
                // Refresh AOS when Swiper is initialized
                setTimeout(() => {
                  refreshAOS();
                }, 100);
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="bg-white rounded-medium p-2.5 shadow-nav">
                    <div className="border border-dashed rounded border-gray-100 p-7">
                      <Image
                        src={testimonial.hotelLogo}
                        alt="hotel logo"
                        width={100}
                        height={40}
                        className="inline-block  mb-6"
                      />
                      <Image
                        src={testimonial.hotelLogoDark}
                        alt="hotel logo"
                        width={100}
                        height={40}
                        className="hidden mb-6"
                      />
                      <blockquote className="text-paragraph italic mb-5 leading-[1.75]">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="pt-7 flex items-center border-t border-dashed border-gray-100">
                        <div className="mr-4 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-dark" />
                        </div>
                        <div className="block">
                          <h3 className="text-base font-semibold">{testimonial.name}</h3>
                          <p className="text-paragraph-light font-jakarta_sans text-sm font-medium">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
