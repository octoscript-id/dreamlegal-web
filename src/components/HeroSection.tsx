"use client"

import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <section id="hero-banner" className="pt-6 xl:pt-12 pb-12 md:pb-14 xl:pb-[72px] flex flex-col gap-10 items-center md:items-start lg:flex-row lg:justify-between w-full">
            <section className="flex flex-col justify-between max-w-md">
                <section className="flex flex-col items-center md:items-start gap-4">
                    <Badge variant="blue" className="w-fit">
                        Dream Legal
                    </Badge>
                    <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg text-center md:text-left">
                        <span className="text-brand-700">Legal Partner</span> For Your Business
                    </h1>
                    <p className="text-body-xl text-center md:text-left">
                        Start your business with Dream Legal -- Penyedia jasa legal online untuk membantu Anda memulai bisnis di Indonesia.
                    </p>
                    <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} className="w-fit hidden md:block">
                        Konsultasi sekarang
                    </Button>
                </section>
            </section>
            <section className="grid grid-rows-2 grid-flow-col gap-3 w-full lg:w-fit">
                <Image 
                    src="/img/unsplash/image_1.png"
                    alt="Unsplash Image 1"
                    width={325}
                    height={325}
                    className="w-full"
                />
                <Image 
                    src="/img/unsplash/image_2.png"
                    alt="Unsplash Image 2"
                    width={325}
                    height={325}
                    className="w-full"
                />
                <Image 
                    src="/img/unsplash/image_3.png"
                    alt="Unsplash Image 3"
                    width={325}
                    height={560}
                    className="row-span-2 w-full"
                />
            </section>
            <Button className="md:hidden w-full">
                Konsultasi sekarang
            </Button>
        </section>
    )

}