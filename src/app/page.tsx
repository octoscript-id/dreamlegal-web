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
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 md:p-6 xl:p-12">
      <section id="services" className="space-y-8">
        <ServiceHeader/>
        <div className="max-md:space-y-6 md:flex gap-8 overflow-scroll">
          <HomeServiceCard/>
          <HomeServiceCard/>
          <HomeServiceCard/>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <Button>Primary Button</Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <Button variant="secondary">Secondary Button</Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex gap-4 items-center flex-col sm:flex-row">
                  <Button variant="link">Link Button</Button>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <Button variant="secondary" className="w-full md:hidden">Lihat semua layanan</Button>
      </section>
    </main>
  );
}
