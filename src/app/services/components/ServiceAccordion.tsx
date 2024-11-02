import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ServiceCard from "./ServiceCard";
import ServiceCardHeader from "../../components/services/ServiceCardHeader";


export default function ServiceAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full group-has-[div[data-state=open]]:col-span-2">
      <AccordionItem value="item-1" className="group py-6 px-5 [&[data-state=open]]:bg-brand-25 bg-white border border-brand-100 rounded-xl">
        <AccordionTrigger>
          <ServiceCardHeader/>
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
