import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import ServiceCard from "./OptionCard";
import { Service } from "@/types/Service";
import { checkIsLast, getVariant } from "@/lib/utils";
import { Button } from "../ui/button";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_NUMBER } from "@/static/Contact";
import { Badge } from "../ui/badge";

interface ServiceDialogProps {
  service: Service
}

export default function ServiceDialog({service}: ServiceDialogProps) {
    return (
      <Dialog>
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant={service.is_highlighted ? "default" : "tertiary"} 
            onClick={
              () => sendWhatsappMessage(CONTACT_NUMBER, `Halo Dream Legal! Saya tertarik untuk konsultasi mengenai layanan hukum ${service.title}. Mohon informasi lebih lanjut`)
            }
            >
            Pilih layanan
          </Button>
          <DialogTrigger className="w-full px-6 py-4 bg-gray-100 text-gray-800 shadow-sm hover:bg-gray-200 active:bg-gray-300 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            Lihat detail
          </DialogTrigger>
        </div>
        <DialogContent>
          <VisuallyHidden>
            <DialogTitle>{service.title}</DialogTitle>
          </VisuallyHidden>
          <ScrollArea className="max-h-[calc(100vh-96px)] border bg-brand-25 rounded-xl p-8 shadow-lg">
            <div className="space-y-6 xl:space-y-10">
              <div className="space-y-6">
                <Badge variant="blue" className="text-sm font-semibold">Start from {service.options[0].price/1000}k</Badge>
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-lg xl:text-[22px] font-medium">{service.title}</h3>
                    <p className="text-gray-700">Cocok untuk Anda yang ingin membuka Usaha Mikro dan Kecil (UMKM)</p>
                  </div>
                  <Button className="px-8"
                    onClick={
                      () => sendWhatsappMessage(CONTACT_NUMBER, `Halo Dream Legal! Saya tertarik untuk konsultasi mengenai layanan hukum ${service.title}. Mohon informasi lebih lanjut`)
                    }
                  >
                    Pilih layanan
                  </Button>
                </div>
              </div>
              
              <div className="max-md:space-y-4 md:grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
              {
                service.options.map((option, index) => {
                  return <ServiceCard key={index} option={option} variant={getVariant(index)} isLast={checkIsLast(service, index)}/>
                })
              }
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
}
