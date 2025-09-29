import React from 'react';
import FooterSection from '@/components/organisms/FooterSection';
import BookDemoForm from '@/components/forms/BookDemoForm';
import { Mail, MapPin, Clock, Users, Code, BarChart3, Smartphone, Shield, Heart, Zap } from 'lucide-react';
import { email, getEmailLink } from '@/config/contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers at MenuMitra - Join Our Restaurant Technology Team",
  description: "Join MenuMitra's innovative team and help revolutionize the restaurant industry. Explore exciting career opportunities in software development, sales, customer success, and more. Be part of the future of restaurant management technology.",
  keywords: [
    "careers",
    "jobs at MenuMitra",
    "restaurant technology jobs",
    "software development careers",
    "tech jobs Pune",
    "restaurant software careers",
    "digital menu jobs",
    "food tech careers",
    "startup jobs",
    "restaurant management software careers",
    "QR code technology jobs",
    "restaurant automation careers"
  ],
  
  openGraph: {
    title: "Careers at MenuMitra - Join Our Restaurant Technology Team",
    description: "Join MenuMitra's innovative team and help revolutionize the restaurant industry. Explore exciting career opportunities in software development, sales, customer success, and more.",
    type: 'website',
    images: [
      {
        url: '/images/hero/menumitra-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MenuMitra Careers - Restaurant Technology Jobs',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Careers at MenuMitra - Join Our Restaurant Technology Team",
    description: "Join MenuMitra's innovative team and help revolutionize the restaurant industry. Explore exciting career opportunities in software development, sales, customer success, and more.",
    images: ['/images/hero/menumitra-og-image.jpg'],
  },
};

const CareersPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
        <div className="container">
          <div className="max-w-[948px] mx-auto text-center">
            <p className="mb-4 font-medium uppercase">Career Page</p>
            <h1 className="max-lg:mb-10 mb-10">
              Become a part of <br /> the MenuMitra team
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              At MenuMitra, we're passionate about transforming the restaurant industry through innovative technology. 
              Join our team of talented individuals who are building solutions that help restaurants thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative">
        <div className="absolute left-1/2 -top-[300px] w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container">
          <div className="bg-white shadow-box rounded-medium p-2.5 mb-12 max-md:h-[400px]">
            <img
              src="/images/about/career.png"
              alt="career banner"
              className="w-full rounded max-md:w-auto max-md:object-cover max-md:object-center max-md:h-full"
            />
          </div>
          <div className="max-w-[850px] mx-auto">
            <h2 className="max-w-[700px] mb-9">
              Join a committed community driven by shared enthusiasm
            </h2>
            <p>
              At MenuMitra, we believe in creating a workplace where passion meets purpose. Our team is united by a shared vision of revolutionizing the restaurant industry through innovative technology solutions.
              <br />
              <br />
              We're looking for individuals who are excited about building the future of restaurant management. Whether you're a developer crafting elegant code, a designer creating intuitive interfaces, or a sales professional helping restaurants grow, there's a place for you in our mission.
              <br />
              <br />
              Join us in creating solutions that help restaurants streamline operations, enhance customer experiences, and thrive in an increasingly digital world. Together, we're not just building software – we're transforming an entire industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative max-md:overflow-hidden max-md:py-25 py-150">
        <div className="absolute left-0 right-0 top-25 bg-[url('/images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1000px] md:hidden"></div>
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Our Value</p>
            <h2>Our business is steered by our core values</h2>
          </div>
          <div className="relative z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 max-lg:p-5 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-2.5">Our Passion</h3>
                  <p>
                    We're passionate about transforming the restaurant industry through innovative technology solutions that make a real difference.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 max-lg:p-5 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-2.5">Transparency</h3>
                  <p>
                    We believe in open communication, honest feedback, and transparent processes that build trust within our team and with our customers.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-box rounded-medium p-2.5">
                <div className="border border-dashed rounded border-gray-100 p-10 max-lg:p-5 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="mb-2.5">Our Mission</h3>
                  <p>
                    To revolutionize restaurant operations by providing cutting-edge technology solutions that help restaurants thrive in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-150 relative max-md:overflow-hidden">
        <div className="absolute left-0 right-0 top-0 bg-[url('/images/core-gradient.png')] bg-cover bg-no-repeat bg-center opacity-70 w-full h-full md:hidden"></div>
        <div className="container relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="text-center mb-14">
            <p className="section-tagline">Open Positions</p>
            <h2>Become part of the dream team</h2>
          </div>
          <div className="[&>*:not(:last-child)]:mb-10">
            {/* Software Developer */}
            <div className="bg-white rounded-medium p-2.5 max-w-[1050px] mx-auto shadow-box">
              <div className="bg-white border border-dashed rounded border-gray-100 py-6 px-5 xl:px-8">
                <div className="grid grid-cols-12 max-md:gap-y-5 items-center">
                  <div className="col-span-full lg:col-span-4">
                    <h3 className="text-xl">Software Developer</h3>
                  </div>
                  <div className="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                    <p className="text-gray-600">
                      Join our development team to build scalable restaurant management solutions using modern technologies.
                    </p>
                  </div>
                  <div className="col-span-full sm:col-span-9 md:col-span-4 lg:col-span-3 flex items-center gap-2">
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Pune
                    </span>
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Full-Time
                    </span>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2">
                    <button className="btn-outline btn-sm w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Executive */}
            <div className="bg-white rounded-medium p-2.5 max-w-[1050px] mx-auto shadow-box">
              <div className="bg-white border border-dashed rounded border-gray-100 py-6 px-5 xl:px-8">
                <div className="grid grid-cols-12 max-md:gap-y-5 items-center">
                  <div className="col-span-full lg:col-span-4">
                    <h3 className="text-xl">Sales Executive</h3>
                  </div>
                  <div className="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                    <p className="text-gray-600">
                      Help restaurants discover MenuMitra's solutions and grow our customer base across India.
                    </p>
                  </div>
                  <div className="col-span-full sm:col-span-9 md:col-span-4 lg:col-span-3 flex items-center gap-2">
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Remote
                    </span>
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Full-Time
                    </span>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2">
                    <button className="btn-outline btn-sm w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Success Manager */}
            <div className="bg-white rounded-medium p-2.5 max-w-[1050px] mx-auto shadow-box">
              <div className="bg-white border border-dashed rounded border-gray-100 py-6 px-5 xl:px-8">
                <div className="grid grid-cols-12 max-md:gap-y-5 items-center">
                  <div className="col-span-full lg:col-span-4">
                    <h3 className="text-xl">Customer Success Manager</h3>
                  </div>
                  <div className="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                    <p className="text-gray-600">
                      Ensure our customers get maximum value from MenuMitra and help them achieve their business goals.
                    </p>
                  </div>
                  <div className="col-span-full sm:col-span-9 md:col-span-4 lg:col-span-3 flex items-center gap-2">
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Pune
                    </span>
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Full-Time
                    </span>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2">
                    <button className="btn-outline btn-sm w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile App Developer */}
            <div className="bg-white rounded-medium p-2.5 max-w-[1050px] mx-auto shadow-box">
              <div className="bg-white border border-dashed rounded border-gray-100 py-6 px-5 xl:px-8">
                <div className="grid grid-cols-12 max-md:gap-y-5 items-center">
                  <div className="col-span-full lg:col-span-4">
                    <h3 className="text-xl">Mobile App Developer</h3>
                  </div>
                  <div className="col-span-full sm:col-span-full md:col-span-5 lg:col-span-3">
                    <p className="text-gray-600">
                      Develop mobile applications for our restaurant management platform using React Native and modern mobile technologies.
                    </p>
                  </div>
                  <div className="col-span-full sm:col-span-9 md:col-span-4 lg:col-span-3 flex items-center gap-2">
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Pune
                    </span>
                    <span className="bg-primary py-1 px-4 rounded-medium border text-white border-primary text-sm font-medium">
                      Full-Time
                    </span>
                  </div>
                  <div className="col-span-full sm:col-span-3 lg:col-span-2">
                    <button className="btn-outline btn-sm w-full">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Start Today Section */}
      <section className="relative pb-25 max-md:overflow-hidden">
        <div className="container relative max-md:text-center">
          <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2 flex max-md:flex-col -z-10 max-md:hidden">
            <div className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
          </div>
          <div className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
          <div>
            <div>
              <p className="section-tagline">Start Today</p>
            </div>
            <div className="grid grid-cols-12 grid-y-10 items-start">
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-6">
                <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold">
                  Ready to join our team?
                </h2>
                <p>
                  Don't see a role that matches your skills? We're always looking for talented individuals to join our mission of revolutionizing the restaurant industry.
                </p>
              </div>
              <div className="max-md:col-span-full md:col-span-6 lg:col-span-6 max-md:mt-5">
                <BookDemoForm />
                <ul className="flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6">
                  <li className="flex items-center">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                        stroke=""
                        className="stroke-paragraph dark:stroke-primary"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>No Commitment Required</p>
                  </li>
                  <li className="flex items-center">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3"
                    >
                      <path
                        d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                        stroke=""
                        className="stroke-paragraph dark:stroke-primary"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Quick Response Time</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default CareersPage;