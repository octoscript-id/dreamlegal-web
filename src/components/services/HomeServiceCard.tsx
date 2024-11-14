"use client"

import { Service } from "@/types/Service";
import { cn, getVariant } from "@/lib/utils";
import ServiceDialog from "./ServiceDialog";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

interface HomeServiceCardProps {
  service: Service
}

export default function HomeServiceCard({service}: HomeServiceCardProps) {
    return (
        <div className={cn("border flex flex-col h-full", (service.is_highlighted ? "border-brand-500 rounded-b-xl" : "border-brand-100 rounded-xl"))}>
          <div className={cn("flex flex-col items-start gap-8 p-8 border-b grow", (service.is_highlighted ? "border-brand-500" : "border-brand-100"))}>
            <Badge variant="blue" className="text-sm font-semibold">Start from {service.options[0].price/1000}k</Badge>
            <div className="h-full flex flex-col space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg xl:text-[22px] font-medium">{service.title}</h3>
                <p className="text-gray-700">Cocok untuk Anda yang ingin membuka Usaha Mikro dan Kecil (UMKM)</p>
              </div>
              <Separator />
              <div className="h-full space-y-3 grow">
                <p>Apa yang akan kamu dapatkan:</p>
                <ul className="list-none text-gray-700 space-y-3">
                  {
                      service.options[0].features.map((feature, index) => {
                          return <li key={index} className="before:content-['✔️'] before:tint-gray-50 before:mr-2">{feature}</li>
                      })
                  }
                </ul>
              </div>
              <Separator />
              <div className="group-data-[state=open]:hidden space-y-3">
                <p className="text-sm xl:text-base text-gray-700">Pilihan paket yang tersedia (berdasarkan pengerjaan):</p>
                <div className="flex flex-wrap gap-2">
                    {
                        service.options.map((option, index) => {
                            return (
                              <Badge key={index} variant={getVariant(index)} className="xl:text-sm text-nowrap">
                                {option.package} 
                                {
                                  !!option.duration && <span>&nbsp;({option.duration})</span>
                                }
                              </Badge>
                            )
                        })
                    }
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
            <ServiceDialog service={service} />
          </div>
        </div>
    );
}
