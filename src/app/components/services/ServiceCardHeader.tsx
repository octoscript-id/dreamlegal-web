"use client"

import { Badge } from "@/components/ui/badge";

export default function ServiceCardHeader() {
    return (
        <div className="p-0 flex items-end text-start gap-3">
            <div className="w-full space-y-10">
                <Badge variant="blue" className="text-sm">Start from 799k</Badge>
                <div className="space-y-3">
                    <h3 className="text-lg xl:text-[22px] font-medium">Pendirian CV</h3>
                    <div className="group-data-[state=open]:hidden space-y-3">
                        <p className="text-sm xl:text-base text-gray-700">Paket yang tersedia:</p>
                        <div className="flex gap-2">
                            <Badge variant="yellow" className="xl:text-sm">Jack</Badge>
                            <Badge variant="green" className="xl:text-sm">Queen</Badge>
                            <Badge variant="purple" className="xl:text-sm">King</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
