"use client";

import { Service } from "@/types/Service";
import { cn, formatPriceToK, getVariant } from "@/lib/utils";
import ServiceDialog from "./ServiceDialog";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const listVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const badgeVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className={cn(
        "bg-gray-0 border flex flex-col h-full",
        service.is_highlighted
          ? "border-brand-500 rounded-b-xl"
          : "border-brand-100 rounded-xl"
      )}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className={cn(
          "flex flex-col items-start gap-8 p-8 border-b grow",
          service.is_highlighted ? "border-brand-500" : "border-brand-100"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          variants={badgeVariants}
          whileHover="hover"
          initial="initial"
        >
          <Badge variant="blue" className="text-sm font-semibold">
            Mulai dari {formatPriceToK(service.options[0].price)}
          </Badge>
        </motion.div>

        <div className="h-full flex flex-col space-y-6">
          <motion.div
            className="space-y-3"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-lg xl:text-[22px] font-bold">
              {service.title}
            </h3>
            <p className="text-gray-700">
              {service.subtitle ?? "Cocok untuk Anda yang ingin membuka Usaha Mikro dan Kecil (UMKM)"}
            </p>
          </motion.div>

          <Separator />

          <div className="h-full space-y-3 grow">
            <p className="font-semibold">Apa yang akan kamu dapatkan:</p>
            <ul className="list-none text-gray-700 space-y-3">
              {(service.thumb_features || service.options[0].features).map((feature, index) => (
                <motion.li
                  key={index}
                  variants={listVariants}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="before:content-['✔️'] before:tint-gray-50 before:mr-2"
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="group-data-[state=open]:hidden space-y-3">
            <p className="text-sm xl:text-base text-gray-700">
              Pilihan paket yang tersedia (berdasarkan pengerjaan):
            </p>
            <div className="flex flex-wrap gap-2">
              {service.options.map((option, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Badge
                    variant={getVariant(index)}
                    className="xl:text-sm text-nowrap font-bold"
                  >
                    {option.package}
                    {!!option.duration && (
                      <span>&nbsp;({option.duration})</span>
                    )}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="p-5"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <ServiceDialog service={service} />
      </motion.div>
    </motion.div>
  );
}
