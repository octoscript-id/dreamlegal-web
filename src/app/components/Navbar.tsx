import Image from "next/image"
import Link from "next/link"

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
        <nav className="bg-white p-6 flex items-center justify-between">
            <Link href="/">
                <Image 
                    src="/img/Logo.png"
                    alt="Dream Legal Logo"
                    width={48}
                    height={48}
                    />
            </Link>
            <ul className="flex items-center justify-center gap-10">
                {
                    links.map((link, key) => (
                        <li key={key} className="text-gray-700 text-body-lg">
                            <Link 
                                href={link.href}
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <button className="text-label-md text-gray-800 bg-gray-100 p-3 rounded-md">
                Hubungi Kami
            </button>
        </nav>
        </>
    )
}