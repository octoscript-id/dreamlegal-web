"use client"
import Link from "next/link";
import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";

export default function WhatsappFloatingButton() {
    return (
        <Link onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)} href="" className="fixed z-50 bottom-16 right-10 flex items-center gap-2 text-sm py-3 px-4 rounded-full bg-brand-green text-brand-dark-green font-bold shadow">
            <Image src="/img/WhatsApp-logo.png" alt="whatsapp-logo" width={21} height={21}/> Hubungi kami
        </Link>
    )

}