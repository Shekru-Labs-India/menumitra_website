import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  slug: string;
}

interface BlogSectionProps {
  className?: string;
  blogPosts?: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  className = '',
  blogPosts = [
    {
      id: 1,
      image: '/images/blog/blog1.png',
      category: 'Marketing',
      title: 'A digital prescription for the banking industry',
      author: 'Natalia Port',
      date: 'Aug 30, 2023',
      excerpt: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
      slug: 'digital-prescription-banking-industry'
    },
    {
      id: 2,
      image: '/images/blog/blog2.png',
      category: 'Banking',
      title: 'Manage your online banking & get rewarded',
      author: 'Justin Langard',
      date: 'Aug 30, 2023',
      excerpt: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
      slug: 'manage-online-banking-rewarded'
    },
    {
      id: 3,
      image: '/images/blog/blog3.png',
      category: 'Payment',
      title: 'We\'ve been perfecting the art of running',
      author: 'Kristin Watson',
      date: 'Aug 30, 2023',
      excerpt: 'Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.',
      slug: 'perfecting-art-of-running'
    }
  ]
}) => {
  return (
    <section className={`bg-white pt-150 pb-150 relative max-md:pb-20 ${className}`}>
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[url('/images/service-bg.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden"></div>
      <div className="container relative">
        <div className="text-center max-w-[550px] mx-auto mb-16">
          <p className="section-tagline">Financial blog tips and tricks</p>
          <h2>Our recent news & insights</h2>
        </div>
        <div className="relative z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-lg:flex-col -z-10 max-md:hidden">
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20"></div>
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/25 lg:-ml-[170px]"></div>
            <div className="w-[350px] h-[350px] lg:w-[442px] lg:h-[442px] blur-[80px] lg:blur-[145px] rounded-full bg-primary-200/20 lg:-ml-[170px]"></div>
          </div>

          <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-6 max-md:p-4">
                  <Image
                    src={post.image}
                    alt="blog image"
                    width={400}
                    height={250}
                    className="mb-6 w-full rounded-md"
                  />
                  <div>
                    <a href={`/blog/${post.slug}`} className="badge">
                      {post.category}
                    </a>
                    <a href={`/blog/${post.slug}`} className="block">
                      <h3 className="mb-3 font-semibold leading-[1.33]">{post.title}</h3>
                    </a>
                    <div className="flex gap-x-2 items-center mb-4">
                      <p>{post.author}</p>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="6" viewBox="0 0 5 6" fill="none">
                          <circle cx="2.5" cy="3" r="2.5" fill="" className="fill-[#D8DBD0] dark:fill-[#3B3C39]"></circle>
                        </svg>
                      </span>
                      <p>{post.date}</p>
                    </div>
                    <p>{post.excerpt}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
