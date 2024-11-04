import AlurSection from "@/components/alur/AlurSection";
import ServiceSection from "../components/services/ServiceSection";
import TestimoniSection from "../components/testimoni/TestimoniSection";
import CtaSection from "@/components/cta/CtaSection";
import BenefitSection from "@/components/benefit/BenefitSection";

export default function Home() {
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <BenefitSection />
      <ServiceSection />
      <AlurSection />
      <TestimoniSection />
      <CtaSection />
    </main>
  );
}
