import { StarFilledIcon } from "@radix-ui/react-icons";
import ServiceSection from "./components/services/ServiceSection";
import Image from "next/image";
import TestimoniCard from "./components/testimoni/TestimoniCard";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="p-4 md:p-6 xl:p-12 relative">
      <ServiceSection />
      <section id="testimoni" className="py-12 md:py-16 space-y-8 md:space-y-12">
        <div className="md:space-y-8 xl:flex justify-between items-end">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Apa Kata Mereka Tentang Dream Legal?</h2>
            <p className="text-gray-700">Dream Legal telah dipercaya sebagai legal partner oleh banyak korporasi dan UMKM di Indonesia.</p>
          </div>
          <Button variant="secondary" className="max-xl:text-sm">Konsultasi sekarang</Button>
        </div>
        <Carousel
          opts={{
            loop: true,
            active: false,
            breakpoints: {
              '(min-width: 768px)': { 
                active: true  
              }
            }
          }}
        >
          <CarouselContent className="max-md:flex-col max-md:gap-8">
            <CarouselItem className="md:basis-1/2 xl:basis-1/3">
              <TestimoniCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/3">
              <TestimoniCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/3">
              <TestimoniCard />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 xl:basis-1/3">
              <TestimoniCard />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        
        <Button variant="secondary" className="w-full md:hidden">Konsultasi sekarang</Button>
      </section>
    </main>
  );
}
