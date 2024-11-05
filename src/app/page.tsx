import { Badge } from "@/components/ui/badge";
import ServiceSection from "./components/services/ServiceSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import TestimoniSection from "./components/testimoni/TestimoniSection";

export default function Home() {
  const testimonyCompanyLogos = [
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
    '/img/Png 2.png',
  ]
  
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <section id="hero-banner" className="flex flex-col gap-10 items-center md:items-start lg:flex-row lg:justify-between w-full">
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
      <section id="testimony" className="flex flex-col items-center my-16">
        <h3 className="text-heading-md text-gray-700">Telah dipercaya oleh:</h3>
        <section className="overflow-hidden whitespace-nowrap max-w-full">
          <section className="animate-scroll flex items-center justify-center gap-14">
            {
              testimonyCompanyLogos.concat(testimonyCompanyLogos).map((logo, key) => {
                const logoSplit = logo.split("/")
                const companyName = logoSplit[logoSplit.length-1].split(".")[0]
                return (
                  <Image 
                    key={key}
                    src={logo}
                    alt={companyName}
                    width={100}
                    height={100}
                  />
                )
              })
            }
          </section>
        </section>
      </section>
      <ServiceSection />
      <TestimoniSection />
      <section id="cta" className="-mx-4 md:-mx-6 xl:-mx-12 bg-brand-25 space-y-8 md:space-y-10 xl:space-y-14 py-12 md:py-14 xl:py-[120px] px-4 md:px-6 xl:px-12 text-center">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Memerlukan Layanan Hukum?</h2>
          <p>Konsultasikan kebutuhan legal kamu sekarang -Hubungi kami melalui whatsapp</p>
        </div>
        <Button className="max-md:w-full py-6 md:py-8 md:px-16 rounded-full xl:text-lg">Hubungi melalui whatsapp</Button>
      </section>
    </main>
  );
}
