import Header from '@/components/organisms/Header';
import FooterSection from '@/components/organisms/FooterSection';

export default function MoneyManagementPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center mb-8">
            Money Management Solutions
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive financial management system for tracking revenue, expenses, 
            and profitability with detailed reporting and analytics.
          </p>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
