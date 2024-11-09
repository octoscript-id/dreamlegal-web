import ServicesHeader from "../../components/services/ServicesHeader";
import ServiceCategory from "./components/ServiceCategory";
import data from '../../data/data.json'

export default function ServicesPage() {
  return (
    <div className="px-4 md:px-6 py-6 xl:py-12 space-y-8">
        <ServicesHeader/>
        <div className="space-y-6">
          {
            data.services.map((service) => {
              return (
                <ServiceCategory key={service.id}/>
              )
            })
          }
        </div>
    </div>
    
  );
}
