"use client";
import { motion } from "framer-motion";
import CtaSection from "@/components/cta/CtaSection";
import BenefitSection from "@/components/benefit/BenefitSection";
import ServiceSection from "@/components/services/ServiceSection";
import data from "../data/data.json";
import { Service } from "@/types/Service";
import ProcedureSection from "@/components/procedure/ProcedureSection";
import HeroSection from "@/components/HeroSection";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <motion.main
      className="px-4 md:px-6 xl:px-12 relative"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <motion.div variants={sectionVariants}>
        <HeroSection />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <ServiceSection
          services={data.services.flatMap(
            (service) => service.services as Service[]
          )}
        />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <BenefitSection benefits={data.benefits} />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <ProcedureSection steps={data.steps} />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <CtaSection />
      </motion.div>
    </motion.main>
  );
}
