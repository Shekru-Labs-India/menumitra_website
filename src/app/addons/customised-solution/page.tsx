import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

export default function CustomisedSolutionPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            Customised Solution Services
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tailored restaurant management solutions designed specifically for your unique 
            business requirements and operational needs.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
