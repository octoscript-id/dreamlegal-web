import Image from "next/image";
import { Badge } from "../ui/badge";

interface AlurCardProps {
    isLast?: boolean
}

export default function AlurCard({ isLast }: AlurCardProps) {
    return (
        <div className={`p-4 space-y-5 md:space-y-4 border-l border-brand-100 ${isLast && "col-span-2"}`}>
            <div className="space-y-3 md:space-y-4">
                <Badge variant="blue" className="font-semibold">01</Badge>
                <h3>Lorem ipsum is simply</h3>
            </div>
            <p className="text-gray-700 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
            <div className="max-md:hidden w-full h-[200px] relative">
                <Image src="/img/alur-dummy-1.jpeg" fill alt="step-1" className="object-cover"/>
            </div>
        </div>
    );
}