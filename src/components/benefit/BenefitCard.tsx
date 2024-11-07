import Image from "next/image";
import { Badge } from "../ui/badge";

export default function BenefitCard() {
    return (
        <div className={`p-4 space-y-6 md:space-y-4 border-l border-brand-100`}>
            <Badge variant="blue" className="font-medium">Profesional</Badge>
            <div className={`max-md:hidden w-full relative h-[200px] xl:h-[272px]`}>
                <Image src="/img/alur-dummy-1.jpeg" fill alt="step-1" className="object-cover rounded-xl"/>
            </div>
            <div className="space-y-2 md:space-y-4">
                <h3 className="text-[32px] md:text-[40px] xl:text-[56px]">&gt;120<span className="text-base">klien</span></h3>
                <p className="text-gray-700 text-sm xl:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            </div>
        </div>
    );
}
