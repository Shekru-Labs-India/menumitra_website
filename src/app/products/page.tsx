import React from 'react';
import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

const ProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      
      {/* Main Content */}
      <section className="pb-150 relative pt-[230px] ">
  <div className="container">
    <div className="text-center max-w-[620px] mx-auto mb-25">
      <p className="section-tagline">Top Integration</p>
      <h2 className="mb-8">Make productivity easier with 50+ Integrations</h2>
      <p>
        Until recently, the prevailing view assumed lorem ipsum was born as a
        nonsense text. It's not Latin though it looks like nothing.
      </p>
    </div>
    <div
      className=" grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2 gap-8 relative z-10"
      data-aos="fade-up"
      data-aos-offset={200}
      data-aos-duration={1000}
      data-aos-delay={200}
      data-aos-once="true"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10">
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]" />
        <div className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]" />
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center ">
          <img
            src="images/figma.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Figma</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
          <img
            src="images/dropbox.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Dropbox</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
          <img
            src="images/twitter.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Twitter/X</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center">
          <img
            src="images/slack.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Slack</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 max-lg:p-5 h-full text-center">
          <img
            src="images/google-drive.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Google Drive</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
        <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5  text-center">
          <img
            src="images/asana.svg"
            alt="value image"
            className="inline-block mb-8"
          />
          <h3 className="mb-2.5">Asana</h3>
          <p>
            The prevailing view asumed lorem ipsum was born as nonsense text.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      
      <FooterSection />
    </>
  );
};

export default ProductsPage;
