"use client";

import { Button } from "@/components/ui/button";
import AlurCard from "./StepCard";
import { Step } from "@/types/Step";
import { sendWhatsappMessage } from "@/lib/sendWhatsappMessage";
import { CONTACT_MESSAGE, CONTACT_NUMBER } from "@/static/Contact";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProcedureSectionProps {
  steps: Step[];
}

export default function ProcedureSection({ steps }: ProcedureSectionProps) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
      id="alur"
      className="-mx-4 md:-mx-6 xl:-mx-12 px-4 md:px-6 xl:px-12 py-12 md:py-14 xl:[py-120px] bg-gray-25"
    >
      <motion.div
        className="py-5 px-4 bg-white rounded-xl border border-brand-100 space-y-8 md:space-y-12"
        whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-xl:space-y-8 xl:flex justify-between items-end">
          <motion.div className="space-y-3" variants={cardVariants}>
            <motion.h2
              className="text-[28px] md:text-[32px] xl:text-[40px]"
              whileHover={{ scale: 1.02 }}
            >
              Bagaimana Alur Layanan Dream Legal?
            </motion.h2>
            <motion.p
              className="text-gray-700 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hubungi kami melalui kontak yang tersedia — Tim kami akan menjawab
              secepatnya.
            </motion.p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() =>
                sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)
              }
              variant="secondary"
              className="max-md:hidden hover:shadow-lg transition-all"
            >
              Konsultasi sekarang
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="max-md:space-y-8 md:grid grid-cols-2 xl:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              custom={index}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <AlurCard step={step} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="secondary"
            className="w-full md:hidden hover:shadow-lg transition-all"
            onClick={() => sendWhatsappMessage(CONTACT_NUMBER, CONTACT_MESSAGE)}
          >
            Konsultasi sekarang
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
