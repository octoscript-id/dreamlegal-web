import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ServiceCard from "./ServiceCard";


export default function ServiceAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full group-has-[div[data-state=open]]:col-span-2">
      <AccordionItem value="item-1" className="group py-6 px-5 [&[data-state=open]]:bg-brand-25 bg-white border border-brand-100 rounded-xl">
        <AccordionTrigger className="p-0 flex items-end text-start gap-3">
          <div className="w-full space-y-10">
              <Badge variant="blue" className="text-sm">Start from 799k</Badge>
              <div className="space-y-3">
                  <h3 className="text-lg xl:text-[22px] font-medium">Pendirian CV</h3>
                  <div className="group-data-[state=open]:hidden space-y-3">
                      <p className="text-sm xl:text-base text-gray-700">Paket yang tersedia:</p>
                      <div className="flex gap-2">
                          <Badge variant="yellow" className="xl:text-sm">Jack</Badge>
                          <Badge variant="green" className="xl:text-sm">Queen</Badge>
                          <Badge variant="purple" className="xl:text-sm">King</Badge>
                      </div>
                  </div>
              </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-6 max-md:space-y-4 md:grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
          <ServiceCard variant="yellow"/>
          <ServiceCard variant="green"/>
          <ServiceCard variant="purple" isLast/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
