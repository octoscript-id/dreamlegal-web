"use client"

import { cn } from "@/lib/utils";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceDialog from "./ServiceDialog";

interface HomeServiceCardProps {
  is_highlighted?: boolean
}

export default function HomeServiceCard({
  is_highlighted
}: HomeServiceCardProps) {
    return (
        <div className={cn("border rounded-xl", (is_highlighted ? "border-brand-500" : "border-brand-100"))}>
            <div className={cn("p-5 border-b", (is_highlighted ? "border-brand-500" : "border-brand-100"))}>
              <ServiceCardHeader />
            </div>
            <div className="p-5">
              <ServiceDialog is_highlighted={is_highlighted} />
            </div>
        </div>
    );
}
