import { Button } from "@/components/ui/button";
import ServiceSection from "./components/ServiceSection";


export default function ServicesPage() {
  return (
    <div className="px-4 md:px-6 py-6 xl:py-12 space-y-8">
        <header className="text-center md:text-start max-xl:space-y-8 xl:flex items-end">
            <div className="space-y-2 xl:space-y-4 w-full">
                <h1 className="text-[28px] md:text-[32px] xl:text-[40px] leading-9">Layanan Kami</h1>
                <p className="text-gray-700 leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex gap-4">
                <Button className="w-full max-xl:text-sm">Unduh Brosur</Button>
                <Button variant="secondary" className="w-full max-xl:text-sm">Konsultasi</Button>
            </div>
        </header>
        <div className="space-y-6">
            <ServiceSection/>
            <ServiceSection/>
        </div>
    </div>
    
  );
}
