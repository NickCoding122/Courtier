"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/join-us", label: "Join Us" },
    { href: "/founders", label: "Founders" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="page-container navbar-inner">
          <div>
            <span className="logo-nav">COURTIER</span>
          </div>
          <nav className="nav-links" aria-label="Primary Navigation">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
