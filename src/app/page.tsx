import CtaSection from "@/components/cta/CtaSection";
import BenefitSection from "@/components/benefit/BenefitSection";
import ServiceSection from "@/components/services/ServiceSection";
import data from "../data/data.json";
import { Service } from "@/types/Service";
import ProcedureSection from "@/components/procedure/ProcedureSection";
import HeroSection from "@/components/HeroSection";
// import TestimoniesSection from "@/components/testimoni/TestimoniesSection";
// import CompaniesSection from "@/components/CompaniesSection";

export default function Home() {
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <HeroSection />
      {/* <CompaniesSection companies={data.companies} /> */}
      <ServiceSection
        services={data.services.flatMap(
          (service) => service.services as Service[]
        )}
      />
      <BenefitSection benefits={data.benefits} />
      <ProcedureSection steps={data.steps} />
      {/* <TestimoniesSection testimonies={data.testimonies}/> */}
      <CtaSection />
    </main>
  );
}
