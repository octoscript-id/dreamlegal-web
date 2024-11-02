import ServiceHeader from "./components/services/ServiceHeader";
import HomeServiceCard from "./components/services/HomeServiceCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4 md:p-6 xl:p-12">
      <section id="services" className="space-y-8">
        <ServiceHeader/>
        <div className="max-md:space-y-6 md:flex gap-8 overflow-scroll">
          <HomeServiceCard/>
          <HomeServiceCard/>
          <HomeServiceCard/>
        </div>
        <Button variant="secondary" className="w-full md:hidden">Lihat semua layanan</Button>
      </section>
    </main>
  );
}
