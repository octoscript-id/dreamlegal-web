"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage"
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact"

export default function Navbar() {
    const links = [
        {
            text: 'Benefit',
            href: '/#benefit',
        },
        {
            text: 'Layanan',
            href: '/services',
        },
        {
            text: 'Alur Kerja',
            href: '/#alur',
        },
        {
            text: 'Testimoni',
            href: '/#testimoni',
        },
    ]

    return (
        <>
        <nav className="bg-white px-12 py-5 flex items-center justify-between">
            <Link href="/">
                <Image 
                    src="/img/Png 2.png"
                    alt="Dream Legal Logo"
                    width={72}
                    height={48}
                    />
            </Link>
            <ul className="hidden md:flex items-center justify-center gap-4">
                {
                    links.map((link, key) => (
                        <li key={key} className="text-gray-700 text-body-lg px-3 py-2">
                            <Link 
                                href={link.href}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Button onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} variant="secondary">
                Hubungi Kami
            </Button>
        </nav>
        </>
    )
}