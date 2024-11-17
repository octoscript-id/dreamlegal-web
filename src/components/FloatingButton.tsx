"use client";

import Link from "next/link";
import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsappFloatingButton() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <Link
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          href=""
          className="fixed z-50 bottom-16 right-10"
        >
          <motion.div
            className="flex items-center gap-2 text-sm py-3 px-4 rounded-full bg-brand-green text-brand-dark-green font-bold shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/img/WhatsApp-logo.png"
                alt="whatsapp-logo"
                width={21}
                height={21}
              />
            </motion.div>
            <span>Hubungi kami</span>
          </motion.div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
}
