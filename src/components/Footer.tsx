import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"

export default function Footer() {
    const socialMedia = [
        {
            'name': 'Instagram',
            'href': 'https://www.instagram.com/dreamlegal.id/'
        },
        {
            'name': 'TikTok',
            'href': 'https://www.tiktok.com/@dreamlegal.id'
        },
    ]

    return (
        <>
        <footer className="p-6">
            <section className="bg-gray-50 p-8 flex flex-col lg:flex-row gap-10 justify-between">
                <section id="left-footer" className="space-y-3">
                    <div className="relative h-10 md:h-12 aspect-[59/40]">
                        <Image
                        src="/img/logo-w-text.png"
                        alt="Dream Legal Logo"
                        sizes="59px"
                        fill
                        className="object-contain"
                        />
                    </div>
                    <h1 className="text-display-xs text-gray-900 font-display">
                        <span className="text-brand-700">Legal Partner </span>
                        <br></br>
                        for Your Business.
                    </h1>
                </section>
                <section id="right-footer" className="flex flex-col md:flex-row gap-6 md:gap-20">
                    <section id="left-sub-footer">
                        <h3 className="text-gray-500 text-body-md mb-3">Media Sosial</h3>
                        <div className="flex flex-col justify-center gap-1">
                            {
                                socialMedia.map((sm, key) => (
                                    <Link key={key} href={sm.href} className="text-gray-900 text-body-lg pr-3 py-2">
                                        {sm.name}
                                    </Link>
                                ))
                            }
                        </div>
                    </section>
                    <section id="right-sub-footer">
                        <h3 className="text-gray-500 text-body-md mb-3">Kontak kami</h3>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-2 pr-3 py-2">
                                <h4 className="text-gray-900 text-body-lg">E-mail</h4>
                                <Badge>
                                    legalitasmilikbersama@gmail.com
                                </Badge>
                            </div>
                            <div className="flex flex-col gap-2 pr-3 py-2">
                                <h4 className="text-gray-900 text-body-lg">Whatsapp</h4>
                                <Badge className="w-fit">
                                    +62 877-2272-7077
                                </Badge>
                            </div>
                        </div>
                    </section>
                </section>
            </section>
            <section className="mt-3 flex justify-between items-center">
                <span>© Dream Legal 2024</span>
                <span>by Octoscript</span>
            </section>
        </footer>
        </>
    )
}