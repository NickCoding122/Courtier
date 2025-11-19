import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("px-6 py-20 md:py-28", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
