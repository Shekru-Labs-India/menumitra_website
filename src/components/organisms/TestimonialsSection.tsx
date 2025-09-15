import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  companyLogo: string;
  companyLogoDark: string;
  quote: string;
  rating: number;
  avatar: string;
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
    {
      id: 1,
      companyLogo: '/images/testimonial/bodygroup.svg',
      companyLogoDark: '/images/testimonial/bodygroup-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      avatar: '/images/testimonial/avatar1.png',
      name: 'Robert Frost',
      position: 'Lead Designer'
    },
    {
      id: 2,
      companyLogo: '/images/testimonial/caudile.svg',
      companyLogoDark: '/images/testimonial/caudile-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      avatar: '/images/testimonial/avatar2.png',
      name: 'Guy Hawkins',
      position: 'Developer'
    },
    {
      id: 3,
      companyLogo: '/images/testimonial/axeptio.svg',
      companyLogoDark: '/images/testimonial/axeptio-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      avatar: '/images/testimonial/avatar3.png',
      name: 'Cody Fisher',
      position: 'UI Designer'
    },
    {
      id: 4,
      companyLogo: '/images/testimonial/infinity.svg',
      companyLogoDark: '/images/testimonial/infinity-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      avatar: '/images/testimonial/avatar4.png',
      name: 'Albert Flores',
      position: 'Junior Designer'
    },
    {
      id: 5,
      companyLogo: '/images/testimonial/mfinity.svg',
      companyLogoDark: '/images/testimonial/mfinity-dark.svg',
      quote: "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like it, and it actually says nothing.",
      rating: 4,
      avatar: '/images/testimonial/avatar5.png',
      name: 'Floyed Miles',
      position: 'Designer'
    }
  ]
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${
          index < rating 
            ? 'text-paragraph dark:text-white' 
            : 'text-[#A7A7B4] dark:text-[#646463]'
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
