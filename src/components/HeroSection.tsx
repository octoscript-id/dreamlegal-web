"use client"

import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <section id="hero-banner" className="xl:pt-12 pb-12 md:pb-14 xl:pb-[72px] flex flex-col gap-10 items-center md:items-start lg:flex-row lg:justify-between w-full">
            <section className="flex flex-col justify-between max-w-xl">
                <section className="flex flex-col items-center md:items-start gap-4">
                    <Badge variant="blue" className="w-fit">
                        Dream Legal
                    </Badge>
                    <h1 className="font-display text-[32px] md:text-display-md lg:text-display-lg text-center md:text-left">
                        <span className="text-brand-700">Legal Partner</span> For Your Business
                    </h1>
                    <p className="text-[16px] md:text-body-xl text-center md:text-left">
                        Start your business with Dream Legal — Penyedia jasa legal online untuk membantu Anda memulai bisnis di Indonesia.
                    </p>
                    <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} className="w-fit hidden md:block">
                        Konsultasi sekarang
                    </Button>
                </section>
            </section>
            <section className="grid grid-cols-2 grid-flow-row gap-3 w-full lg:w-fit">
                <Image 
                    src="/img/unsplash/hero-banner-document.png"
                    alt="Unsplash: Document"
                    width={240}
                    height={240}
                    className="w-full h-32 md:h-40 lg:h-60 rounded-xl object-cover"
                />
                <Image 
                    src="/img/unsplash/image_2.png"
                    alt="Unsplash: Talking"
                    width={240}
                    height={240}
                    className="w-full h-32 md:h-40 lg:h-60 rounded-xl object-cover" 
                />
                <Image 
                    src="/img/unsplash/hero-banner-handshake.jpg"
                    alt="Unsplash: Handshake"
                    width={560}
                    height={320}
                    className="col-span-2 w-full h-52 md:h-60 lg:h-80 rounded-xl object-cover"
                />
            </section>
            <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} className="md:hidden w-full">
                Konsultasi sekarang
            </Button>
        </section>
    )

}