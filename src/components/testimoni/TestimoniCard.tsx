import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function TestimoniCard() {
    return (
        <div className="py-5 px-4 border border-brand-100 rounded-xl space-y-6">
            <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarFilledIcon key={index} width={20} height={20} className="text-brand-800" />
                ))}
            </div>
            <div className="space-y-2">
                <h3 className="font-medium xl:text-lg">Lorem Ipsum is simply</h3>
                <p className="text-sm text-gray-700">“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos`s standard dummy text ever since the 1500s.”</p>
            </div>
            <div className="flex gap-2">
                <div className="h-10 w-10 relative">
                    <Image src="/img/profile-dummy.jpeg" alt="testimoni-profile" fill className="object-cover object-top rounded-full"/>
                </div>
                <div className="space-y-1 text-xs">
                    <h4 className="font-medium">James Gouse</h4>
                    <p className="text-gray-700 m-0">Telkom Indonesia</p>
                </div>
            </div>
        </div>
    );
}
