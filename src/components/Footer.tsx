import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"

export default function Footer() {
    const socialMedia = [
        {
            'name': 'Instagram',
            'href': '/'
        },
        {
            'name': 'LinkedIn',
            'href': '/'
        },
        {
            'name': 'TikTok',
            'href': '/'
        },
    ]

    return (
        <>
        <footer className="p-6">
            <section className="bg-gray-50 p-8 flex flex-col lg:flex-row justify-between">
                <section id="left-footer">
                    <Image 
                        src="/img/Png 2.png"
                        alt="Dream Legal Logo"
                        width={72}
                        height={48}
                    />
                    <h1 className="text-display-xs text-gray-900 font-display">
                        <span className="text-brand-700">Legal Partner </span>
                        <br></br>
                        for Your Business.
                    </h1>
                </section>
                <section id="right-footer" className="flex flex-col md:flex-row gap-6 md:gap-20">
                    <section id="left-sub-footer">
                        <h3 className="text-gray-500 text-body-md mb-3">Media Sosial</h3>
                        <ul className="flex flex-col justify-center gap-1">
                            {
                                socialMedia.map((sm, key) => (
                                    <li key={key} className="text-gray-900 text-body-lg pr-3 py-2">
                                        <Link href={sm.href}>
                                            {sm.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
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
                                    +62 851-7000-9001
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