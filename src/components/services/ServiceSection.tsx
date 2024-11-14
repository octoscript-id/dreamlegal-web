"use client"

import { Button } from "@/components/ui/button";
import ServicesHeader from "./ServicesHeader";
import { Service } from "@/types/Service";
import { useRouter } from "next/navigation";
import ServicesCarousel from "./ServicesCarousel";

interface ServiceSectionProps {
    services: Service[]
}

export default function ServiceSection({services}: ServiceSectionProps) {
    const router = useRouter()
    const selectedServices = [1, 5, 10, 15, 19]
    const filteredServices = services.filter((service) => selectedServices.includes(service.id));
    const hasHighlightedService = filteredServices.some(service => service.is_highlighted === true);
    
    return (
        <section id="services" className="py-12 md:py-14 xl:py-[96px] space-y-8 xl:space-y-10 relative">
            <ServicesHeader/>
            <ServicesCarousel services={filteredServices} hasHighlightedService={hasHighlightedService}/>
            <Button onClick={() => router.push("/services")} variant="secondary" className="w-full md:hidden">Lihat semua layanan</Button>
        </section>
    );
}
