'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  companyLogo: string;
  companyLogoDark: string;
  quote: string;
  rating: number;
  name: string;
  position: string;
  avatar: string;
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
      companyLogo: '/images/testimonial/bodygroup.svg',
      companyLogoDark: '/images/testimonial/bodygroup-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      name: 'Robert Frost',
      position: 'Lead Designer',
      avatar: '/images/testimonial/avatar1.png'
    },
    {
      id: 2,
      companyLogo: '/images/testimonial/caudile.svg',
      companyLogoDark: '/images/testimonial/caudile-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      name: 'Guy Hawkins',
      position: 'Developer',
      avatar: '/images/testimonial/avatar2.png'
    },
    {
      id: 3,
      companyLogo: '/images/testimonial/axeptio.svg',
      companyLogoDark: '/images/testimonial/axeptio-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      name: 'Cody Fisher',
      position: 'UI Designer',
      avatar: '/images/testimonial/avatar3.png'
    },
    {
      id: 4,
      companyLogo: '/images/testimonial/infinity.svg',
      companyLogoDark: '/images/testimonial/infinity-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      name: 'Albert Flores',
      position: 'Officer',
      avatar: '/images/testimonial/avatar4.png'
    },
    {
      id: 5,
      companyLogo: '/images/testimonial/mfinity.svg',
      companyLogoDark: '/images/testimonial/mfinity-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      name: 'Floyed Miles',
      position: 'Junior Designer',
      avatar: '/images/testimonial/avatar5.png'
    }
  ]
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${
          index < rating 
            ? 'text-paragraph dark:text-rating' 
            : 'text-[#A7A7B4] dark:text-[#646463]'
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
                  <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
                    <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-7">
                      <Image
                        src={testimonial.companyLogo}
                        alt="company logo"
                        width={100}
                        height={40}
                        className="inline-block dark:hidden mb-6"
                      />
                      <Image
                        src={testimonial.companyLogoDark}
                        alt="company logo"
                        width={100}
                        height={40}
                        className="hidden dark:inline-block mb-6"
                      />
                      <blockquote className="text-paragraph dark:text-white italic mb-5 leading-[1.75]">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mb-7">
                        {renderStars(testimonial.rating)}
                      </div>

                      <div className="pt-7 flex items-center border-t border-dashed border-gray-100 dark:border-borderColour-dark">
                        <Image
                          src={testimonial.avatar}
                          alt="avatar"
                          width={48}
                          height={48}
                          className="mr-4 rounded-full"
                        />
                        <div className="block">
                          <h3 className="text-base font-semibold">{testimonial.name}</h3>
                          <p className="text-paragraph-light dark:text-[#A1A49D] font-jakarta_sans text-sm font-medium">
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
