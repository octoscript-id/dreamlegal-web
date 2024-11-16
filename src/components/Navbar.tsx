"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    {
      text: "Layanan",
      href: "/services",
    },
    {
      text: "Benefit",
      href: "/#benefit",
    },
    {
      text: "Alur Kerja",
      href: "/#alur",
    },
    // {
    //     text: 'Testimoni',
    //     href: '/#testimoni',
    // },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white px-4 md:px-6 xl:px-12 py-5 md:py-3 flex items-center justify-between"
      >
        <Link href="/">
          <div className="relative h-10 md:h-12 aspect-[59/40]">
            <Image
              src="/img/logo-w-text.png"
              alt="Dream Legal Logo"
              sizes="59px"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-2 xl:gap-4">
          {links.map((link, key) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={key}
              className="text-gray-700 text-sm xl:text-body-lg px-4 py-3"
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.li>
          ))}
        </ul>
        <Button
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          variant="secondary"
          size="sm"
          className="max-md:py-3 md:text-sm"
        >
          Hubungi Kami
        </Button>
      </motion.nav>
    </>
  );
}
