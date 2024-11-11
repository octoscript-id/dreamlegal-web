"use client"

import { Service } from "@/types/Service";
import { cn } from "@/lib/utils";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceDialog from "./ServiceDialog";

interface HomeServiceCardProps {
  service: Service
}

export default function HomeServiceCard({service}: HomeServiceCardProps) {
    return (
        <div className={cn("border rounded-xl flex flex-col h-full", (service.is_highlighted ? "border-brand-500" : "border-brand-100"))}>
            <div className={cn("p-5 border-b grow", (service.is_highlighted ? "border-brand-500" : "border-brand-100"))}>
              <ServiceCardHeader startFrom={service.options[0].price} title={service.title} options={service.options.flatMap((option) => option.package)} />
            </div>
            <div className="p-5">
              <ServiceDialog service={service} />
            </div>
        </div>
    );
}
