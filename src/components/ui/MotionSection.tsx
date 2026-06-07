"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function MotionSection({ children, className, id }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      {children}
    </motion.section>
  );
}
