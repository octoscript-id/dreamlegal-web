"use client";

import { Button } from "@/components/ui/button";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CtaSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="cta"
      className="-mx-4 md:-mx-6 xl:-mx-12 bg-brand-25 space-y-8 md:space-y-10 xl:space-y-14 py-12 md:py-14 xl:py-[120px] px-4 md:px-6 xl:px-12 text-center"
    >
      <motion.div
        className="space-y-3 max-w-2xl mx-auto"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <motion.h2
          className="text-[28px] md:text-[32px] xl:text-[40px] font-bold"
          whileHover={{ color: "var(--brand-800)" }}
          transition={{ duration: 0.2 }}
        >
          Memerlukan Layanan Hukum?
        </motion.h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Konsultasikan kebutuhan legal kamu sekarang - Hubungi kami melalui
          whatsapp
        </motion.p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          className="max-md:w-full py-6 md:py-8 md:px-16 rounded-full xl:text-lg hover:shadow-xl transition-all"
        >
          <motion.span
            initial={{ x: -5 }}
            animate={{ x: 5 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
            }}
          >
            👋
          </motion.span>{" "}
          Hubungi melalui whatsapp
        </Button>
      </motion.div>
    </motion.section>
  );
}
