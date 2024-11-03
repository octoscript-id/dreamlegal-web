import { StarFilledIcon } from "@radix-ui/react-icons";
import ServiceSection from "./components/services/ServiceSection";
import Image from "next/image";
import TestimoniCard from "./components/testimoni/TestimoniCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-4 md:p-6 xl:p-12 relative">
      <ServiceSection />
      <section id="testimoni" className="py-12 space-y-8">
        <div className="space-y-3">
          <h2 className="text-[28px]">Apa Kata Mereka Tentang Dream Legal?</h2>
          <p className="text-gray-700">Dream Legal telah dipercaya sebagai legal partner oleh banyak korporasi dan UMKM di Indonesia.</p>
        </div>
        <div className="space-y-8">
          <TestimoniCard />
          <TestimoniCard />
          <TestimoniCard />
        </div>
        <Button variant="secondary" className="w-full md:hidden">Konsultasi Layanan</Button>
      </section>
    </main>
  );
}
