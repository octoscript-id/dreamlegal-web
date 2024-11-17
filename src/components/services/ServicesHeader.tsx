"use client";

import { Button } from "@/components/ui/button";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { SERVICE_BROCHURE_URL } from "@/static/Brochure";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ServicesHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="text-center md:text-start max-xl:space-y-8 xl:flex items-end"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="space-y-2 xl:space-y-4 w-full"
        variants={childVariants}
      >
        <motion.h1
          className="text-[28px] md:text-[32px] xl:text-[40px] leading-9 font-extrabold"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Layanan Kami
        </motion.h1>
        <motion.p
          className="text-gray-700 leading-6"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Kami menyediakan layanan konsultasi dan pendampingan hukum yang
          profesional dan komprehensif.
        </motion.p>
      </motion.div>
      <motion.div
        className={`flex gap-4 max-md:justify-center`}
        variants={childVariants}
      >
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            variant={pathname == "/" ? "tertiary" : "default"}
            onClick={() => window.open(SERVICE_BROCHURE_URL, "_blank")}
            className={`max-xl:text-sm font-bold ${
              pathname == "/" && "max-md:rounded-full"
            }`}
          >
            Unduh brosur layanan
          </Button>
        </motion.div>
        {pathname == "/" ? (
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              onClick={() => router.push("/services")}
              variant="secondary"
              className="max-md:hidden max-xl:text-sm"
            >
              Lihat semua layanan
            </Button>
          </motion.div>
        ) : (
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              onClick={() =>
                sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)
              }
              variant="secondary"
              className="max-xl:text-sm"
            >
              Konsultasi
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
