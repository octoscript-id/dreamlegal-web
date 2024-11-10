import CtaSection from "@/components/cta/CtaSection";
import BenefitSection from "@/components/benefit/BenefitSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ServiceSection from "@/components/services/ServiceSection";
import TestimoniSection from "@/components/testimoni/TestimoniesSection";
import data from "../data/data.json"
import { Service } from "@/types/Service";
import ProcedureSection from "@/components/procedure/ProcedureSection";

export default function Home() {
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <section id="hero-banner" className="pt-6 xl:pt-12 pb-12 md:pb-14 xl:pb-[72px] flex flex-col gap-10 items-center md:items-start lg:flex-row lg:justify-between w-full">
        <section className="flex flex-col justify-between max-w-md">
          <section className="flex flex-col items-center md:items-start gap-4">
            <Badge variant="blue" className="w-fit">
              Dream Legal
            </Badge>
            <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-center md:text-left">
              <span className="text-brand-700">Legal Partner</span> For Your Business
            </h1>
            <p className="text-body-xl text-center md:text-left">
              Start your business with Dream Legal -- Penyedia jasa legal online untuk membantu Anda memulai bisnis di Indonesia.
            </p>
            <Button className="w-fit hidden md:block">
              Konsultasi sekarang
            </Button>
          </section>
        </section>
        <section className="grid grid-rows-2 grid-flow-col gap-3">
          <Image 
            src="/img/unsplash/image_1.png"
            alt="Unsplash Image 1"
            width={325}
            height={325}
            className=""
          />
          <Image 
            src="/img/unsplash/image_2.png"
            alt="Unsplash Image 2"
            width={325}
            height={325}
            className=""
          />
          <Image 
            src="/img/unsplash/image_3.png"
            alt="Unsplash Image 3"
            width={325}
            height={560}
            className="row-span-2"
          />
        </section>
        <Button className="md:hidden w-full">
          Konsultasi sekarang
        </Button>
      </section>
      <section id="testimony" className="-mx-4 md:-mx-6 xl:-mx-12 px-4 md:px-6 xl:px-12 bg-brand-25 text-center py-12 xl:py-[72px] space-y-4 md:space-y-6 xl:space-y-8">
        <h3 className="text-heading-md text-gray-700">Telah dipercaya oleh:</h3>
        <section className="overflow-hidden whitespace-nowrap w-full">
          <section className="animate-scroll flex items-center justify-center gap-14 h-8 md:h-10 xl:h-14">
            {
              data.companyLogos.map((logo) => {
                return (
                  <Image 
                    key={logo.id}
                    src={`/img/companies/${logo.logoUrl}`}
                    alt={logo.altText}
                    style={{
                      width: 'auto',
                      height: '100%',
                    }}
                    width={logo.width}
                    height={logo.height}
                  />
                )
              })
            }
          </section>
        </section>
      </section>
      <BenefitSection benefits={data.benefits} />
      <ServiceSection services={data.services.flatMap((service) => service.services as Service[])}/>
      <ProcedureSection steps={data.steps}/>
      <TestimoniSection testimonies={data.testimonies}/>
      <CtaSection />
    </main>
  );
}
