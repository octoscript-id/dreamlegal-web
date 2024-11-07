import { Button } from "@/components/ui/button";
import BenefitCard from "./BenefitCard";

export default function BenefitSection() {
    return (
      <section id="benefit" className="py-12 md:py-14 xl:[py-120px] space-y-12 xl:space-y-14">
        <div className="max-md:space-y-8 md:flex justify-between items-end gap-16">
          <div className="space-y-3">
            <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Kenapa Harus Memilih Dream Legal?</h2>
            <p className="text-gray-700 max-w-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Button variant="secondary" className="max-md:hidden">Konsultasi sekarang</Button>
        </div>
        <div className="max-md:space-y-10 md:grid grid-cols-3 gap-8 xl:gap-14">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard/>
        </div>
        <Button variant="secondary" className="w-full md:hidden">Konsultasi sekarang</Button>
      </section>
    );
}
