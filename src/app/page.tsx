import AlurCard from "@/components/alur/AlurCard";
import ServiceSection from "../components/services/ServiceSection";
import TestimoniSection from "../components/testimoni/TestimoniSection";
import CtaSection from "@/components/cta/CtaSection";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="px-4 md:px-6 xl:px-12 relative">
      <ServiceSection />
      <section id="alur" className="-mx-4 md:-mx-6 xl:-mx-12 px-4 md:px-6 xl:px-12 py-12 md:py-14 bg-gray-25">
        <div className="py-5 px-4 bg-white rounded-xl border border-brand-100 space-y-8 md:space-y-12">
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="text-[28px]">Bagaimana Alur Layanan Dream Legal?</h2>
              <p className="text-gray-700">Hubungi kami melalui kontak yang tersedia — Tim kami akan menjawab secepatnya.</p>
            </div>
            <Button variant="secondary" className="max-md:hidden">Konsultasi sekarang</Button>
          </div>
          <div className="max-md:space-y-8 md:grid grid-cols-2">
            <AlurCard />
            <AlurCard />
            <AlurCard isLast/>
          </div>
          <Button variant="secondary" className="w-full md:hidden">Konsultasi sekarang</Button>
        </div>
      </section>
      <TestimoniSection />
      <CtaSection />
    </main>
  );
}
