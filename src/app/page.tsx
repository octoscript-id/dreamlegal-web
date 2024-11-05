import ServiceHeader from "./components/services/ServiceHeader";
import HomeServiceCard from "./components/services/HomeServiceCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 md:p-6 xl:p-12 relative">
      <section id="services" className="space-y-8 xl:space-y-10 relative">
        <ServiceHeader/>
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
          className="relative"
        >
          <CarouselContent className="max-md:flex-col max-md:gap-6">
            <CarouselItem className="md:basis-2/3 xl:basis-1/3">
              <HomeServiceCard/>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 xl:basis-1/3">
              <HomeServiceCard/>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 xl:basis-1/3">
              <HomeServiceCard/>
            </CarouselItem>
            <CarouselItem className="md:basis-2/3 xl:basis-1/3">
              <HomeServiceCard/>
            </CarouselItem>
          </CarouselContent>
          <div className="max-md:hidden relative mt-10 flex justify-between">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <Button variant="secondary" className="w-full md:hidden">Lihat semua layanan</Button>
      </section>
    </main>
  );
}
