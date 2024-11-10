"use client"

import { Service } from "@/types/Service";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceDialog from "./ServiceDialog";

interface HomeServiceCardProps {
  service: Service
}

export default function HomeServiceCard({service}: HomeServiceCardProps) {
    return (
        <div className="border border-brand-100 rounded-xl flex flex-col h-full">
            <div className="p-5 border-b border-brand-100 grow">
              <ServiceCardHeader startFrom={service.options[0].price} title={service.title} options={service.options.flatMap((option) => option.package)} />
            </div>
            <div className="p-5">
              <ServiceDialog />
            </div>
        </div>
    );
}
