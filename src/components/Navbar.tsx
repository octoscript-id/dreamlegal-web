import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
    const links = [
        {
            text: 'Benefit',
            href: '/',
        },
        {
            text: 'Layanan',
            href: '/',
        },
        {
            text: 'Alur Kerja',
            href: '/',
        },
        {
            text: 'Testimoni',
            href: '/',
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
            <ul className="flex items-center justify-center gap-4">
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
            <Button variant="secondary">
                Hubungi Kami
            </Button>
        </nav>
        </>
    )
}