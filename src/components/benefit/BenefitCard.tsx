import { Benefit } from "@/types/Benefit";
import { AlarmClockCheck, LayoutGrid, ListChecks, ShieldCheck, Target } from "lucide-react";

interface BenefitCardProps {
    benefit: Benefit
}

const getIcon = (iconName: string) => {
    switch (iconName) {
        case 'listChecks':
            return <ListChecks size={24} className="text-brand-800"/>
        case 'alarmClockCheck':
            return <AlarmClockCheck size={24} className="text-brand-800"/>
        case 'target':
            return <Target size={24} className="text-brand-800"/>
        case 'layoutGrid':
            return <LayoutGrid size={24} className="text-brand-800"/>
        case 'shieldCheck':
            return <ShieldCheck size={24} className="text-brand-800"/>
        default:
            break;
    }
}

export default function BenefitCard({benefit}: BenefitCardProps) {
    return (
        <div className={`p-4 w-full md:w-[calc(50%-16px)] xl:w-[calc(34%-36px)] md:p-6 xl:p-8 flex items-start gap-6 border border-brand-100 rounded-xl`}>
            <div className="bg-brand-50 rounded-full p-4 grid place-items-center">
                {getIcon(benefit.icon)}
            </div>
            <div className="space-y-1">
                <h3 className="text-lg font-medium">{benefit.benefit}</h3>
                <p className="text-gray-700 text-base">{benefit.description}</p>
            </div>
        </div>
    );
}
