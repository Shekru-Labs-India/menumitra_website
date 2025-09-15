import ClientSection from "@/components/organisms/ClientSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import StatsSection from "@/components/organisms/StatsSection";
import DataIntegrationsSection from "@/components/organisms/DataIntegrationsSection";
import SolutionSection from "@/components/organisms/SolutionSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import BlogSection from "@/components/organisms/BlogSection";
import FooterSection from "@/components/organisms/FooterSection";
import TopIntegrationSection from "@/components/organisms/TopIntegrationSection";

export default function Home() {
  return (
    <div>
      {/* HeroSection is already included in layout.tsx */}
      <ClientSection />
      <ServicesSection />
      <StatsSection />
      <DataIntegrationsSection />
      <SolutionSection />
      <TopIntegrationSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
