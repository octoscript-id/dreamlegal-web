import { Testimony } from "@/types/Testimony";
import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface TestimonyCardProps {
    testimony: Testimony
}

export default function TestimonyCard({testimony}: TestimonyCardProps) {
    return (
        <div className="py-5 px-4 border border-brand-100 rounded-xl space-y-6">
            <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarFilledIcon key={index} width={20} height={20} className="text-brand-800" />
                ))}
            </div>
            <div className="space-y-2">
                <h3 className="font-medium xl:text-lg">{testimony.title}</h3>
                <p className="text-sm text-gray-700">“{testimony.testimonial}”</p>
            </div>
            <div className="flex gap-2">
                <div className="h-10 w-10 relative">
                    <Image src={`/img/${testimony.profile.photoUrl}`} alt="testimoni-profile" fill className="object-cover object-top rounded-full"/>
                </div>
                <div className="space-y-1 text-xs">
                    <h4 className="font-medium">{testimony.profile.name}</h4>
                    <p className="text-gray-700 m-0">{testimony.profile.position}</p>
                </div>
            </div>
        </div>
    );
}
