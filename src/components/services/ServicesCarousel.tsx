"use client"

import { Service } from "@/types/Service";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";

interface ServicesCarouselProps {
    services: Service[]
    hasHighlightedService: boolean
}

export default function ServicesCarousel({services, hasHighlightedService}: ServicesCarouselProps) {
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
                                <div className="flex flex-col h-full">
                                    {
                                        hasHighlightedService && (
                                            <div className={
                                                cn("text-center px-8 py-5 rounded-t-xl bg-brand-500 text-label-lg",
                                                    (!service.is_highlighted ? "max-md:hidden md:invisible" : "text-white")
                                                )
                                            }>
                                                PALING LARIS!
                                            </div>
                                        )
                                    }
                                    <ServiceCard service={service}/>
                                </div>
                            </CarouselItem>
                        )
                    })
                }
            </CarouselContent>
            <div className="max-md:hidden relative mt-10 flex justify-end gap-2">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
}
