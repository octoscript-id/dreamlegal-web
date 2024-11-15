"use client";

import { Service } from "@/types/Service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import ServiceCard from "./ServiceCard";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ServicesCarouselProps {
  services: Service[];
  hasHighlightedService: boolean;
}

export default function ServicesCarousel({
  services,
  hasHighlightedService,
}: ServicesCarouselProps) {
  const [, setHoveredIndex] = useState<number | null>(null);

  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.01,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Carousel
      opts={{
        loop: true,
        active: false,
        breakpoints: {
          "(min-width: 768px)": {
            active: true,
            align: "start",
          },
        },
      }}
      className="relative"
    >
      <CarouselContent className="max-md:flex-col max-md:gap-6">
        {services.map((service, index) => (
          <CarouselItem key={service.id} className="md:basis-2/3 xl:basis-5/12">
            <motion.div
              className="flex flex-col h-full"
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {hasHighlightedService && (
                <div
                  className={cn(
                    "text-center px-8 py-5 rounded-t-xl bg-brand-500 text-label-lg",
                    !service.is_highlighted
                      ? "max-md:hidden md:invisible"
                      : "text-white"
                  )}
                >
                  PALING LARIS!
                </div>
              )}
              <ServiceCard service={service} />
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <motion.div className="max-md:hidden relative mt-10 flex justify-end gap-2">
        <CarouselPrevious className="hover:bg-brand-500 hover:text-white transition-all duration-300" />
        <CarouselNext className="hover:bg-brand-500 hover:text-white transition-all duration-300" />
      </motion.div>
    </Carousel>
  );
}
