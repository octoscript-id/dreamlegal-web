import { Badge } from "@/components/ui/badge";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function ServiceCard() {
  return (
    <div className="md:basis-[calc(50%-0.75rem)] bg-white border border-brand-100 py-6 px-5 flex items-end gap-3">
        <div className="w-full space-y-10">
            <Badge className="text-sm">Start from 799k</Badge>
            <div className="space-y-3">
                <h3 className="text-lg xl:text-[22px] font-medium">Pendirian CV</h3>
                <div className="space-y-3">
                    <p className="text-sm xl:text-base text-gray-700">Paket yang tersedia:</p>
                    <div className="flex gap-2">
                        <Badge variant="yellow" className="xl:text-sm">Jack</Badge>
                        <Badge variant="green" className="xl:text-sm">Queen</Badge>
                        <Badge variant="purple" className="xl:text-sm">King</Badge>
                    </div>
                </div>
            </div>
        </div>
        <div className="shrink-0 h-10 w-10 xl:h-14 xl:w-14 grid place-items-center bg-brand-25 border border-brand-100 rounded-full">
            <ChevronDownIcon className="text-brand-900 h-4 w-4 xl:h-6 xl:w-6"/>
        </div>
    </div>
  );
}
