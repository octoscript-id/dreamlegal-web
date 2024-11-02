import ServicesHeader from "../components/services/ServiceHeader";
import ServiceSection from "./components/ServiceSection";


export default function ServicesPage() {
  return (
    <div className="px-4 md:px-6 py-6 xl:py-12 space-y-8">
        <ServicesHeader/>
        <div className="space-y-6">
            <ServiceSection/>
            <ServiceSection/>
        </div>
    </div>
    
  );
}
