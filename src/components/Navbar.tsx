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
      text: "Alur Layanan",
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
        className="bg-white px-12 md:py-3 flex items-center justify-between"
      >
        <Link href="/">
          <Image
            src="/img/Png 2.png"
            alt="Dream Legal Logo"
            width={132}
            height={64}
          />
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-4">
          {links.map((link, key) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={key}
              className="text-gray-700 text-body-lg px-3 py-2"
            >
              <Link href={link.href}>{link.text}</Link>
            </motion.li>
          ))}
        </ul>
        <Button
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          variant="secondary"
          size="sm"
          className="md:hidden"
        >
          Hubungi Kami
        </Button>
        <Button
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          variant="secondary"
          className="hidden md:block"
        >
          Hubungi Kami
        </Button>
      </motion.nav>
    </>
  );
}
