import { Badge } from "@/components/ui/badge";
import { ServiceOption } from "@/types/Service";

interface ServiceCardProps {
    variant: "yellow" | "green" | "purple" | "default" | "blue"
    isLast: boolean
    option: ServiceOption
}

export default function ServiceCard({option, variant, isLast}: ServiceCardProps) {
    const getVariantClasses = () => {
        switch (variant) {
            case "yellow":
                return "bg-brand-yellow text-brand-dark-yellow"
            case "green":
                return "bg-brand-green text-brand-dark-green"
            case "purple":
                return "bg-brand-purple text-brand-dark-purple"
            default:
                return "bg-gray-50 text-gray-900"
        }
    }

    return (
        <div className={`h-full flex flex-col bg-white border border-brand-100 rounded-xl p-4 gap-8 ${isLast && "md:max-xl:col-span-2"}`}>
            <div className="flex flex-col items-start space-y-3">
                <Badge variant={variant} className="text-sm uppercase">{option.package}</Badge>
                { option.duration && <Badge className="text-sm">Proses: {option.duration}</Badge> }
            </div>
            <div className="grow space-y-3 text-sm">
                <p>Apa yang akan kamu dapatkan: </p>
                <ul className="list-none text-gray-700 space-y-3">
                    {
                        option.features.map((feature, index) => {
                            return <li key={index} className="before:content-['✔️'] before:tint-gray-50 before:mr-2">{feature}</li>
                        })
                    }
                </ul>
            </div>
            <div className={`grid place-items-center py-6 text-2xl ${getVariantClasses()}`}>
                Rp{Intl.NumberFormat("id-ID").format(option.price)}
            </div>
        </div>
    );
}
