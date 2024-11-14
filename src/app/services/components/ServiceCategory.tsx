import { ServiceCategory } from "@/types/Service";
import ServicesCarousel from "@/components/services/ServicesCarousel";
import { Badge } from "@/components/ui/badge";

interface CategorySectionProps {
  category: ServiceCategory
}

export default function CategorySection({category}: CategorySectionProps) {
  return (
    <section className="bg-gray-25 border border-brand-100 p-6 space-y-6 md:space-y-8">
        <div className="space-y-3">
          <h2 className="text-[28px]">{category.category}</h2>
          <Badge>Tersedia {category.services.length} Layanan</Badge>
        </div>
        <ServicesCarousel services={category.services}/>
    </section>
  );
}
