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
          <motion.div
            className="relative h-10 md:h-12 aspect-[59/40]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Image
              src="/img/logo-w-text.png"
              alt="Dream Legal Logo"
              sizes="59px"
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          </motion.div>
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Button
            onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
            variant="secondary"
            size="sm"
            className="max-md:py-3 md:text-sm group relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -2 }}
              className="relative z-10"
            >
              Hubungi Kami
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-brand-100 opacity-0 group-hover:opacity-20 transition-opacity"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ type: "tween", duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </motion.nav>
    </>
  );
}
