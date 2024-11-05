import ServiceSection from "./components/services/ServiceSection";
import { Button } from "@/components/ui/button";
import TestimoniSection from "./components/testimoni/TestimoniSection";

export default function Home() {
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <ServiceSection />
      <TestimoniSection />
      <section id="cta" className="-mx-4 md:-mx-6 xl:-mx-12 bg-brand-25 space-y-8 md:space-y-10 xl:space-y-14 py-12 md:py-14 xl:py-[120px] px-4 md:px-6 xl:px-12 text-center">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Memerlukan Layanan Hukum?</h2>
          <p>Konsultasikan kebutuhan legal kamu sekarang -Hubungi kami melalui whatsapp</p>
        </div>
        <Button className="max-md:w-full py-6 md:py-8 md:px-16 rounded-full xl:text-lg">Hubungi melalui whatsapp</Button>
      </section>
    </main>
  );
}
