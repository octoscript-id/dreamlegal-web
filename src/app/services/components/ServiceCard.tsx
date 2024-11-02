import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
    variant?: "yellow" | "green" | "purple" | "default" | "blue"
    isLast?: boolean
}

export default function ServiceCard({variant, isLast}: ServiceCardProps) {
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
        <div className={`bg-white border border-brand-100 rounded-xl p-4 space-y-8 ${isLast && "md:max-xl:col-span-2"}`}>
            <div className="flex flex-col items-start space-y-3">
                <Badge variant={variant} className="text-sm">JACK</Badge>
                <Badge className="text-sm">Proses: 8-12 Hari kerja</Badge>
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
            <div className={`grid place-items-center py-6 text-2xl ${getVariantClasses()}`}>
                Rp799.000
            </div>
        </div>
    );
}
