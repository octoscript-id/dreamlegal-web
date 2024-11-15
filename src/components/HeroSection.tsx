"use client"

import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <section id="hero-banner" className="pt-4 pb-6 md:pb-14 xl:pb-[72px] flex flex-col gap-6 md:gap-10 items-center lg:items-start lg:flex-row lg:justify-between w-full">
    <section className="flex flex-col justify-between max-w-xl">
        <section className="flex flex-col items-center lg:items-start gap-2 md:gap-4">
            <Badge variant="blue" className="w-fit text-sm md:text-base">
                Dream Legal
            </Badge>
            <h1 className="font-display text-2xl md:text-display-md lg:text-display-lg text-center lg:text-left">
                <span className="text-brand-700">Legal Partner</span> For Your Business
            </h1>
            <p className="text-sm md:text-body-xl text-center lg:text-left">
                Start your business with Dream Legal — Penyedia jasa legal untuk membantu Anda memulai bisnis di Indonesia.
            </p>
            <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} className="w-fit hidden md:block">
                Konsultasi sekarang
            </Button>
        </section>
    </section>
    <section className="grid grid-cols-2 grid-flow-row gap-2 md:gap-3 w-full lg:w-fit">
        <Image 
            src="/img/unsplash/hero-banner-document.png"
            alt="Unsplash: Document"
            width={240}
            height={240}
            className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover"
        />
        <Image 
            src="/img/unsplash/image_2.png"
            alt="Unsplash: Talking"
            width={240}
            height={240}
            className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover"
        />
        <Image 
            src="/img/unsplash/hero-banner-handshake.jpg"
            alt="Unsplash: Handshake"
            width={560}
            height={320}
            className="col-span-2 w-full h-44 md:h-72 lg:h-80 rounded-xl object-cover"
        />
    </section>
    <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} className="md:hidden w-full text-sm">
        Konsultasi sekarang
    </Button>
</section>

    )

}