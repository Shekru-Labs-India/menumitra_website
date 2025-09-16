import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

export default function BakeriesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            Bakery Management Solutions
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Bakery management system with inventory tracking for fresh ingredients, 
            production scheduling, and retail operations for bakeries and pastry shops.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
