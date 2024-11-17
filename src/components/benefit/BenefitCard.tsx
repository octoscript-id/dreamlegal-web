import { Benefit } from "@/types/Benefit";
import {
  AlarmClockCheck,
  LayoutGrid,
  ListChecks,
  ShieldCheck,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

interface BenefitCardProps {
  benefit: Benefit;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "listChecks":
      return <ListChecks size={24} className="text-brand-800" />;
    case "alarmClockCheck":
      return <AlarmClockCheck size={24} className="text-brand-800" />;
    case "target":
      return <Target size={24} className="text-brand-800" />;
    case "layoutGrid":
      return <LayoutGrid size={24} className="text-brand-800" />;
    case "shieldCheck":
      return <ShieldCheck size={24} className="text-brand-800" />;
    default:
      break;
  }
};

export default function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <motion.div
      className={`p-4 w-full md:w-[calc(50%-16px)] xl:w-[calc(34%-36px)] md:p-6 xl:p-8 flex items-start gap-6 border border-brand-100 rounded-xl bg-white`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        borderColor: "var(--brand-200)",
      }}
      transition={{
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      }}
    >
      <motion.div
        className="bg-brand-50 rounded-full p-4 grid place-items-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {getIcon(benefit.icon)}
        </motion.div>
      </motion.div>
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.h3
          className="text-lg font-medium"
          whileHover={{ color: "var(--brand-800)" }}
          transition={{ duration: 0.2 }}
        >
          {benefit.benefit}
        </motion.h3>
        <motion.p
          className="text-gray-700 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {benefit.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
