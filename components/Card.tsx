import { ReactNode } from "react";
import { cn } from "../lib/utils";

type CardProps = {
  title: string;
  children: ReactNode;
  cta?: ReactNode;
  className?: string;
};

export function Card({ title, children, cta, className }: CardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-4 rounded-xl border border-white/15 bg-white/5 p-6 text-white transition duration-300 hover:border-white/40 hover:bg-white/10",
        className
      )}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-white/60">{title}</p>
      </div>
      <div className="flex-1 text-lg leading-relaxed text-white/80">{children}</div>
      {cta && <div className="pt-2 text-sm text-[#C9B37E]">{cta}</div>}
    </div>
  );
}
