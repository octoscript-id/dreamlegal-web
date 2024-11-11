"use client"

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TestimonyCard from "./TestimonyCard";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { Testimony } from "@/types/Testimony";

interface TestimoniesSectionProps {
  testimonies: Testimony[]
}

export default function TestimoniesSection({testimonies}: TestimoniesSectionProps) {
    return (
      <section id="testimoni" className="py-12 md:py-16 xl:py-[120px] space-y-8 md:space-y-12">
        <div className="md:space-y-8 xl:flex justify-between items-end">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Apa Kata Mereka Tentang Dream Legal?</h2>
            <p className="text-gray-700">Dream Legal telah dipercaya sebagai legal partner oleh banyak korporasi dan UMKM di Indonesia.</p>
          </div>
          <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} variant="secondary" className="max-md:hidden max-xl:text-sm">Konsultasi sekarang</Button>
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
            {
              testimonies.map((testimony) => {
                return (
                  <CarouselItem key={testimony.id} className="md:basis-1/2 xl:basis-1/3">
                    <TestimonyCard testimony={testimony}/>
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
        </Carousel>
        
        <Button variant="secondary" className="w-full md:hidden">Konsultasi sekarang</Button>
      </section>
    );
}
