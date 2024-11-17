"use client";

import { Button } from "@/components/ui/button";
import ServicesHeader from "./ServicesHeader";
import { Service } from "@/types/Service";
import { useRouter } from "next/navigation";
import ServicesCarousel from "./ServicesCarousel";
import { motion } from "framer-motion";

interface ServiceSectionProps {
  services: Service[];
}

export default function ServiceSection({ services }: ServiceSectionProps) {
  const router = useRouter();
  const selectedServices = [1, 5, 20, 15, 19];
  const filteredServices = services.filter((service) =>
    selectedServices.includes(service.id)
  );
  const hasHighlightedService = filteredServices.some(
    (service) => service.is_highlighted === true
  );

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
    <section
      id="services"
      className="py-12 md:py-14 xl:py-[96px] space-y-8 xl:space-y-10 relative"
    >
      <ServicesHeader />
      <ServicesCarousel
        services={filteredServices}
        hasHighlightedService={hasHighlightedService}
      />
      <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
        <Button
          onClick={() => router.push("/services")}
          variant="secondary"
          className="w-full md:hidden"
        >
          Lihat semua layanan
        </Button>
      </motion.div>
    </section>
  );
}
