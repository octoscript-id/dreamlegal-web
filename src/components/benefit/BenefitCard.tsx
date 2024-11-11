import Image from "next/image";
import { Badge } from "../ui/badge";
import { Benefit } from "@/types/Benefit";

interface BenefitCardProps {
    benefit: Benefit
}

export default function BenefitCard({benefit}: BenefitCardProps) {
    return (
        <div className={`p-4 space-y-6 md:space-y-4 border-l border-brand-100`}>
            <Badge variant="blue" className="font-medium">{benefit.benefit}</Badge>
            <div className={`max-md:hidden w-full relative h-[200px] xl:h-[272px]`}>
                <Image src={`/img/${benefit.image}`} fill alt="step-1" className="object-cover rounded-xl"/>
            </div>
            <p className="text-gray-700 text-sm xl:text-base">{benefit.description}</p>
        </div>
    );
}
