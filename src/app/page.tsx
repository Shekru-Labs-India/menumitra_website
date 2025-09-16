import ClientSection from "@/components/organisms/ClientSection";
import ServicesSection from "@/components/organisms/ServicesSection";
import StatsSection from "@/components/organisms/StatsSection";
import DataIntegrationsSection from "@/components/organisms/DataIntegrationsSection";
import SolutionSection from "@/components/organisms/SolutionSection";
import TestimonialsSection from "@/components/organisms/TestimonialsSection";
import BlogSection from "@/components/organisms/BlogSection";
import FooterSection from "@/components/organisms/FooterSection";
import HeroSection from "@/components/organisms/HeroSection";
import CoreFeaturesSection from "@/components/organisms/CoreFeaturesSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <StatsSection />
      <DataIntegrationsSection />
      <SolutionSection />
      <CoreFeaturesSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
}
