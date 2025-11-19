"use client";

import { ComponentProps, ReactNode } from "react";
import { Variants, motion } from "framer-motion";
import { cn } from "../lib/utils";

const variants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type SectionProps = ComponentProps<typeof motion.section> & { children: ReactNode };

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
