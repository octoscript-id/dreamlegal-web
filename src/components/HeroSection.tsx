"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      className="pt-4 pb-6 md:pb-14 xl:pb-[72px] flex flex-col gap-6 md:gap-10 items-center lg:items-start lg:flex-row lg:justify-between w-full"
    >
      <motion.section
        variants={itemVariants}
        className="flex flex-col justify-between max-w-xl"
      >
        <section className="flex flex-col items-center lg:items-start gap-2 md:gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge variant="blue" className="w-fit text-sm md:text-base">
              Dream Legal
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-2xl md:text-display-md lg:text-display-lg text-center lg:text-left"
          >
            <span className="text-brand-700">Legal Partner</span> For Your
            Business
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-body-xl text-center lg:text-left"
          >
            Start your business with Dream Legal — Penyedia jasa legal untuk
            membantu Anda memulai bisnis di Indonesia.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() =>
                sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)
              }
              className="w-fit hidden md:block"
            >
              Konsultasi sekarang
            </Button>
          </motion.div>
        </section>
      </motion.section>

      <motion.section
        variants={itemVariants}
        className="grid grid-cols-2 grid-flow-row gap-2 md:gap-3 w-full lg:w-fit"
      >
        <motion.div variants={imageVariants}>
          <Image
            src="/img/unsplash/hero-banner-document.png"
            alt="Unsplash: Document"
            width={240}
            height={240}
            className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div variants={imageVariants}>
          <Image
            src="/img/unsplash/image_2.png"
            alt="Unsplash: Talking"
            width={240}
            height={240}
            className="w-full h-32 md:h-48 lg:h-60 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div variants={imageVariants} className="col-span-2">
          <Image
            src="/img/unsplash/hero-banner-handshake.jpg"
            alt="Unsplash: Handshake"
            width={560}
            height={320}
            className="w-full h-44 md:h-72 lg:h-80 rounded-xl object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </motion.section>

      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          className="md:hidden w-full text-sm"
        >
          Konsultasi sekarang
        </Button>
      </motion.div>
    </motion.section>
  );
}
