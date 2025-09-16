import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

export default function QSRPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            QSR Management Solutions
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quick Service Restaurant management system optimized for fast-paced operations, 
            drive-through efficiency, and rapid order processing.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
