"use client"

import { Badge } from "@/components/ui/badge";

export default function ServiceCardHeader() {
    return (
        <div className="p-0 flex items-end text-start gap-3">
            <div className="w-full space-y-6">
                <Badge variant="blue" className="text-sm">Start from 799k</Badge>
                <div className="space-y-3 flex flex-col justify-center gap-6">
                    <div>
                        <h3 className="text-lg xl:text-[22px] font-medium">Pendirian CV</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                        <p>Apa yang akan kamu dapatkan: </p>
                        <ul className="list-none text-gray-700 space-y-3">
                            <li className="before:content-['✔️'] before:tint-gray-50 before:mr-2">Pendaftaran Nama PT</li>
                            <li className="before:content-['✔️'] before:text-gray-50 before:mr-2">Sertifikat Pendirian PT</li>
                            <li className="before:content-['✔️'] before:text-gray-50 before:mr-2">Surat Pernyataan Pendirian PT</li>
                            <li className="before:content-['✔️'] before:text-gray-50 before:mr-2">NPWP PT</li>
                            <li className="before:content-['✔️'] before:text-gray-50 before:mr-2">15 KBLI Bidang Usaha</li>
                        </ul>
                    </div>
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
