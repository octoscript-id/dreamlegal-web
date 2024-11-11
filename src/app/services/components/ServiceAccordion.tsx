import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ServiceCard from "../../../components/services/ServiceCard";
import ServiceCardHeader from "../../../components/services/ServiceCardHeader";
import { Service } from "@/types/Service";
import { checkIsLast, getVariant } from "@/lib/utils";

interface ServiceAccordionProps {
  service: Service
}

export default function ServiceAccordion({service}: ServiceAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full group-has-[div[data-state=open]]:col-span-2">
      <AccordionItem value="item-1" className="group py-6 px-5 [&[data-state=open]]:bg-brand-25 bg-white border border-brand-100 rounded-xl">
        <AccordionTrigger>
          <ServiceCardHeader 
            startFrom={service.options[0].price} 
            title={service.title} 
            options={service.options.flatMap((option) => option.package)}
          />
        </AccordionTrigger>
        <AccordionContent className="pt-6 max-md:space-y-4 md:grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
          {
            service.options.map((option, index) => {
              return <ServiceCard key={index} option={option} variant={getVariant(index)} isLast={checkIsLast(service, index)}/>
            })
          }
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
