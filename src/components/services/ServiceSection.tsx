import { Button } from "@/components/ui/button";
import ServicesHeader from "./ServicesHeader";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HomeServiceCard from "./HomeServiceCard";

export default function ServiceSection() {
    return (
        <section id="services" className="py-12 md:py-14 xl:py-[96px] space-y-8 xl:space-y-10 relative">
            <ServicesHeader/>
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
    );
}
