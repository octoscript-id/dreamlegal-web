"use client"

import { Button } from "@/components/ui/button";
import ServiceCardHeader from "./ServiceCardHeader";

export default function HomeServiceCard() {
    return (
        <div className="border border-brand-100 rounded-xl shrink-0 basis-2/3 xl:basis-1/3">
            <div className="p-5 border-b border-brand-100">
              <ServiceCardHeader />
            </div>
            <div className="p-5">
              <Button variant="secondary" className="w-full">Lihat detail</Button>
            </div>
        </div>
    );
}
