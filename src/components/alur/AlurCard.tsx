import Image from "next/image";
import { Badge } from "../ui/badge";

interface AlurCardProps {
    isLast?: boolean
}

export default function AlurCard({ isLast }: AlurCardProps) {
    return (
        <div className={`p-4 space-y-5 md:space-y-4 border-l border-brand-100 ${isLast && "max-xl:col-span-2"}`}>
            <div className="space-y-3 md:space-y-4">
                <Badge variant="blue" className="font-semibold text-sm">01</Badge>
                <h3 className="text-[22px]">Lorem ipsum is simply</h3>
            </div>
            <p className="text-gray-700 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            <div className={`max-md:hidden w-full relative h-[200px] xl:h-60 ${isLast && 'md:max-xl:h-[320px]'}`}>
                <Image src="/img/alur-dummy-1.jpeg" fill alt="step-1" className="object-cover rounded-xl"/>
            </div>
        </div>
    );
}
