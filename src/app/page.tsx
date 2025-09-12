import ClientSection from "@/components/organisms/ClientSection";
import ServicesSection from "@/components/organisms/ServicesSection";

export default function Home() {
  return (
    <div>
      {/* HeroSection is already included in layout.tsx */}
      <ClientSection />
      <ServicesSection />
    </div>
  );
}
