"use client"

import { Service } from "@/types/Service";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ServiceCard from "./ServiceCard";

interface ServicesCarouselProps {
    services: Service[]
}

export default function ServicesCarousel({services}: ServicesCarouselProps) {
    return (
        <Carousel
            opts={{
                loop: true,
                active: false,
                breakpoints: {
                    '(min-width: 768px)': { 
                        active: true,
                        align: "start",
                    }
                }
            }}
            className="relative"
        >
            <CarouselContent className="max-md:flex-col max-md:gap-6"> 
                {
                    services.map((service) => {
                        return (
                            <CarouselItem key={service.id} className="md:basis-2/3 xl:basis-5/12">
                                <ServiceCard service={service} />
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <div className="max-md:hidden relative mt-10 flex justify-between">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
}
