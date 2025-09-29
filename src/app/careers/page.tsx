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
          <div
            className="max-w-[948px] mx-auto text-center"
            data-aos="fade-up"
            data-aos-offset={50}
            data-aos-duration={500}
            data-aos-once="true"
          >
            <p className="mb-4 font-medium uppercase">Join Our Team</p>
            <h1 className="max-lg:mb-10 mb-10">
              Build the future of restaurant technology
            </h1>
            <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
              At MenuMitra, we're passionate about transforming the restaurant industry through innovative technology. 
              Join our team of talented individuals who are building solutions that help restaurants thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pb-150 relative">
        <div className="absolute left-1/2 -top-[250px] w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container">
          <div className="relative z-10">
            <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
              <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
            </div>
            
            <div className="mb-12 text-center max-w-[475px] mx-auto" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
              <p className="section-tagline">Why MenuMitra</p>
              <h2>Why work with us?</h2>
            </div>

            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8">
              {/* Innovation */}
              <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-0">Innovation First</h3>
                </div>
                <p className="text-gray-600">
                  Work on cutting-edge technology that's revolutionizing how restaurants operate. 
                  Be part of building solutions that make a real difference in the food service industry.
                </p>
              </div>

              {/* Growth */}
              <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-0">Growth Opportunities</h3>
                </div>
                <p className="text-gray-600">
                  Fast-growing startup environment with plenty of opportunities to learn, grow, 
                  and take on new challenges. Your career growth is our priority.
                </p>
              </div>

              {/* Culture */}
              <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="200" data-aos-once="true">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-0">Great Culture</h3>
                </div>
                <p className="text-gray-600">
                  Collaborative, inclusive, and supportive work environment. 
                  We believe in work-life balance and creating a space where everyone can thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-150 relative">
        <div className="container">
          <div className="mb-12 text-center max-w-[475px] mx-auto" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
            <p className="section-tagline">Open Positions</p>
            <h2>Current job openings</h2>
          </div>
          
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {/* Software Developer */}
            <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Software Developer</h3>
                  <p className="text-sm text-gray-600">Full-time • Pune</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join our development team to build scalable restaurant management solutions using modern technologies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>2-4 years experience</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Pune, Maharashtra</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full">
                Apply Now
              </button>
            </div>

            {/* Sales Executive */}
            <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Sales Executive</h3>
                  <p className="text-sm text-gray-600">Full-time • Remote</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Help restaurants discover MenuMitra's solutions and grow our customer base across India.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>1-3 years experience</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Remote / Pune</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full">
                Apply Now
              </button>
            </div>

            {/* Customer Success Manager */}
            <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Customer Success Manager</h3>
                  <p className="text-sm text-gray-600">Full-time • Pune</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Ensure our customers get maximum value from MenuMitra and help them achieve their business goals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>2-5 years experience</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Pune, Maharashtra</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full">
                Apply Now
              </button>
            </div>

            {/* Mobile App Developer */}
            <div className="bg-white shadow-box rounded-medium p-8" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-delay="100" data-aos-once="true">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1">Mobile App Developer</h3>
                  <p className="text-sm text-gray-600">Full-time • Pune</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Develop mobile applications for our restaurant management platform using React Native and modern mobile technologies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>1-3 years experience</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Pune, Maharashtra</span>
                </li>
              </ul>
              <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mb-150 relative">
        <div className="absolute left-1/2 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
        <div className="container relative" data-aos="fade-up" data-aos-offset={50} data-aos-duration={500} data-aos-once="true">
          <div className="mb-12 text-center max-w-[475px] mx-auto">
            <p className="section-tagline">Don't see your role?</p>
            <h2>Send us your application</h2>
            <p className="mt-4 text-gray-600">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to MenuMitra's mission.
            </p>
          </div>
          
          <BookDemoForm />
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default CareersPage;
