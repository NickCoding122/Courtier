import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";

type BaseProps = {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button" | "link";
  };

const baseStyles =
  "inline-flex items-center justify-center border uppercase tracking-[0.3em] text-xs md:text-sm transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "border-white bg-white/10 px-6 py-3 text-white hover:bg-white/20",
  ghost: "border-transparent px-6 py-3 text-white hover:border-white/40",
  outline: "border-white/60 px-6 py-3 text-white hover:border-white",
};

export function Button({
  variant = "primary",
  href,
  children,
  className,
  as = "button",
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
