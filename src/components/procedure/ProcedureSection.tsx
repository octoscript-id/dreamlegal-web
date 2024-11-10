import { Button } from "@/components/ui/button";
import AlurCard from "./StepCard";
import { Step } from "@/types/Step";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";

interface ProcedureSectionProps {
  steps: Step[] 
}

export default function ProcedureSection({steps}: ProcedureSectionProps) {
    return (
      <section id="alur" className="-mx-4 md:-mx-6 xl:-mx-12 px-4 md:px-6 xl:px-12 py-12 md:py-14 xl:[py-120px] bg-gray-25">
        <div className="py-5 px-4 bg-white rounded-xl border border-brand-100 space-y-8 md:space-y-12">
          <div className="max-xl:space-y-8 xl:flex justify-between items-end">
            <div className="space-y-3">
              <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">Bagaimana Alur Layanan Dream Legal?</h2>
              <p className="text-gray-700 max-w-xl">Hubungi kami melalui kontak yang tersedia — Tim kami akan menjawab secepatnya.</p>
            </div>
            <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} variant="secondary" className="max-md:hidden">Konsultasi sekarang</Button>
          </div>
          <div className="max-md:space-y-8 md:grid grid-cols-2 xl:grid-cols-4 gap-8">
            {
              steps.map((step) => {
                return <AlurCard key={step.id} step={step} />
              })
            }
          </div>
          <Button variant="secondary" className="w-full md:hidden">Konsultasi sekarang</Button>
        </div>
      </section>
    );
}