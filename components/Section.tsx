"use client";

import { HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={cn("px-6 py-12 md:py-16", className)}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl leading-relaxed">{children}</div>
    </motion.section>
  );
}
