import React from 'react';
import Image from 'next/image';
import { Star, User } from 'lucide-react';

interface Testimonial {
  id: number;
  hotelLogo: string;
  hotelLogoDark: string;
  quote: string;
  rating: number;
  name: string;
  position: string;
}

interface TestimonialsSectionProps {
  className?: string;
  testimonials?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ 
  className = '',
  testimonials = [
    // {
    //   id: 1,
    //   hotelLogo: '/images/outlets/garva_order.webp',
    //   hotelLogoDark: '/images/outlets/garva_order.webp',
    //   quote: "Arre yaar, MenuMitra ne hamara restaurant ka business hi badal diya! Pehle toh customers ko menu samajh nahi aa raha tha, ab sabko pata chal jata hai ki kya order karna hai. Sales 40% badh gaye hai!",
    //   rating: 5,
    //   name: 'Rajesh Patil',
    //   position: 'Owner, Garva Biryani'
    // },
    {
      id: 2,
      hotelLogo: '/images/outlets/friends_cafe.webp',
      hotelLogoDark: '/images/outlets/friends_cafe.webp',
      quote: "Bhai, MenuMitra ka digital menu system bilkul mast hai! Customers ab phone scan karke menu dekh sakte hain. Waiter ko har time menu leke jaane ki zarurat nahi. Time bachta hai, customers bhi khush!",
      rating: 5,
      name: 'Suresh Deshmukh',
      position: 'Manager, Friends Cafe'
    },
    {
      id: 3,
      hotelLogo: '/images/outlets/sudamas_misal_house.webp',
      hotelLogoDark: '/images/outlets/sudamas_misal_house.webp',
      quote: "MenuMitra ne hamara restaurant modern banaya! QR code scan karke menu dekhna, online ordering, payment integration - sab kuch ek jagah. Customers ko lagta hai ki koi fancy restaurant mein aaye hain!",
      rating: 4,
      name: 'Vikram Jadhav',
      position: 'Chef & Owner, Sudamas Misal House'
    },
    {
      id: 4,
      hotelLogo: '/images/outlets/hotel_nandini_pure_veg.webp',
      hotelLogoDark: '/images/outlets/hotel_nandini_pure_veg.webp',
      quote: "Pehle toh menu update karna bahut mushkil tha. Ab MenuMitra se instant update ho jata hai! Naya dish add karna, price change karna - sab online se ho jata hai. Technology ka magic hai ye!",
      rating: 5,
      name: 'Priya Kulkarni',
      position: 'Operations Head, Hotel Nandini Pure Veg'
    }
  ]
}) => {
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
    <section className={`bg-white dark:bg-dark-300 max-md:py-20 pt-150 pb-150 relative ${className}`}>
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-no-repeat bg-center opacity-70 w-full h-full md:hidden"></div>
      <div className="container relative">
        <div className="text-center max-w-[550px] mx-auto mb-16">
          <p className="section-tagline">Testimonials</p>
          <h2>What our customer's say about our company</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col max-lg:item-center -z-10 max-md:hidden">
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20"></div>
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"></div>
          </div>

          <div className="flex flex-wrap max-md:flex-col gap-6 gap-y-8 justify-center mb-12">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-dark-200 rounded-medium p-2.5 md:w-[calc(50%_-_20px)] lg:w-[calc(33.33%_-_20px)] shadow-nav">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-7">
                  <Image
                    src={testimonial.hotelLogo}
                    alt="hotel logo"
                    width={100}
                    height={40}
                    className="inline-block dark:hidden mb-6"
                  />
                  <Image
                    src={testimonial.hotelLogoDark}
                    alt="hotel logo"
                    width={100}
                    height={40}
                    className="hidden dark:inline-block mb-6"
                  />
                  <blockquote className="text-paragraph italic mb-5 leading-[1.75]">
                    "{testimonial.quote}"
                  </blockquote>
                  {/* <div className="mb-7">
                    {renderStars(testimonial.rating)}
                  </div> */}

                  <div className="pt-7 flex items-center border-t border-dashed border-gray-100 dark:border-borderColour-dark">
                    <div className="mr-4 w-12 h-12 bg-gray-200 dark:bg-gray-200 rounded-full flex items-center justify-center">
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
            ))}
          </div>

          <div className="flex items-center justify-center">
            <a href="/contact" className="btn">
              Start Your journey
            </a>
          </div>
        </div>
        <div className="w-full h-[450px] absolute bottom-15 left-0 z-10 bg-gradient-to-b from-transparent to-white dark:to-dark-300 to-100%"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
