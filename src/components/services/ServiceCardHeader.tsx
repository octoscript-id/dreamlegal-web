import { Badge } from "@/components/ui/badge";
import { getVariant } from "@/lib/utils";

interface ServiceCardHeaderProps {
    startFrom: number,
    title: string,
    options: string[]
}   

export default function ServiceCardHeader({startFrom, title, options}: ServiceCardHeaderProps) {
    return (
        <div className="p-0 w-full space-y-6 text-start">
            <Badge variant="blue" className="text-sm font-semibold">Start from {startFrom/1000}k</Badge>
            <div className="space-y-3">
                <h3 className="text-lg xl:text-[22px] font-medium">{title}</h3>
                <div className="h-full group-data-[state=open]:hidden space-y-3">
                    <p className="text-sm xl:text-base text-gray-700">Paket yang tersedia:</p>
                    <div className="flex flex-wrap gap-2">
                        {
                            options.map((option, index) => {
                                return <Badge key={index} variant={getVariant(index)} className="xl:text-sm text-nowrap">{option}</Badge>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
