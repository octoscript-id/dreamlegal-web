"use client"

import { Button } from "@/components/ui/button";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceDialog from "./ServiceDialog";

export default function HomeServiceCard() {
    return (
        <div className="border border-brand-100 rounded-xl">
            <div className="p-5 border-b border-brand-100">
              <ServiceCardHeader />
            </div>
            <div className="p-5">
              <ServiceDialog/>
            </div>
        </div>
    );
}
