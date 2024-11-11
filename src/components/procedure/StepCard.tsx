import Image from "next/image";
import { Badge } from "../ui/badge";
import { Step } from "@/types/Step";

interface StepCardProps {
    step: Step
}

export default function Card({ step }: StepCardProps) {
    return (
        <div className={`flex flex-col justify-between p-4 space-y-5 md:space-y-4 border-l border-brand-100`}>
            <div className="space-y-5 md:space-y-4">
                <div className="space-y-3 md:space-y-4">
                    <Badge variant="blue" className="font-semibold text-sm">{step.id}</Badge>
                    <h3 className="text-[22px]">{step.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{step.description}</p>
            </div>
            <div className={`max-md:hidden w-full relative h-[200px] xl:h-60`}>
                <Image src={`/img/${step.image}`} fill alt="step-1" className="object-cover rounded-xl"/>
            </div>
        </div>
    );
}
