"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";
import { cn } from "../lib/utils";

type ActiveLinkProps = LinkProps &
  PropsWithChildren<{ className?: string; accent?: boolean; onClick?: () => void }>;

export function ActiveLink({ href, children, className, accent = true, onClick, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const currentPath = pathname || "/";

  const isActive = typeof href === "string" ? matchPath(currentPath, href) : false;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center gap-2 px-1 pb-1 text-xs uppercase tracking-[0.35em] transition hover:text-white",
        accent &&
          isActive &&
          "text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-[#C9B37E]",
        !isActive && "text-white/60",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

function matchPath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  const normalizedHref = href.replace(/#.*/, "");
  return pathname.startsWith(normalizedHref);
}
