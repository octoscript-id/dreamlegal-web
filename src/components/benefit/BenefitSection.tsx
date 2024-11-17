"use client";

import { Button } from "@/components/ui/button";
import BenefitCard from "./BenefitCard";
import { Benefit } from "@/types/Benefit";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface BenefitSectionProps {
  benefits: Benefit[];
}

export default function BenefitSection({ benefits }: BenefitSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      id="benefit"
      className="py-12 md:py-14 xl:[py-120px] space-y-12 xl:space-y-14"
    >
      <div className="max-md:space-y-8 md:flex justify-between items-end gap-16">
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-[28px] md:text-[32px] xl:text-[40px]">
            Kenapa Harus Memilih Dream Legal?
          </h2>
          <p className="text-gray-700 max-w-xl">
            Solusi hukum yang mudah, efisien, terjangkau, fleksibel, dan aman.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
            variant="secondary"
            className="max-md:hidden"
          >
            Konsultasi sekarang
          </Button>
        </motion.div>
      </div>
      <motion.div
        variants={containerVariants}
        className="max-md:space-y-4 md:flex justify-center flex-wrap gap-6 xl:gap-8"
      >
        {benefits.map((benefit) => {
          return <BenefitCard key={benefit.id} benefit={benefit} />;
        })}
      </motion.div>
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="secondary" className="w-full md:hidden">
          Konsultasi sekarang
        </Button>
      </motion.div>
    </motion.section>
  );
}
