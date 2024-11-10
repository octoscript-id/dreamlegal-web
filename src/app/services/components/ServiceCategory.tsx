import { ServiceCategory } from "@/types/Service";
import ServiceAccordion from "./ServiceAccordion";
import { chunkArray } from "@/lib/utils";

interface CategorySectionProps {
  category: ServiceCategory
}

export default function CategorySection({category}: CategorySectionProps) {
  const serviceChunks = chunkArray(category.services, 2);

  return (
    <section className="bg-gray-25 border border-brand-100 py-6 px-4 space-y-6">
        <h2 className="text-lg font-medium">{category.category}</h2>
        <div className="max-md:space-y-4 md:space-y-6">
          {
            serviceChunks.map((chunk, index) => {
              return (
                <div key={index} className="group max-md:space-y-4 md:grid grid-cols-2 gap-6">
                  {
                    chunk.map((service) => {
                      return <ServiceAccordion key={service.id} service={service}/>
                    })
                  }
                </div>
              )
            })
          }
        </div>
    </section>
  );
}
