"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/join-us", label: "Join Us" },
    { href: "/founders", label: "Founders" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container page-container">
        <span className="logo-nav">COURTIER</span>
        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`nav-links ${isOpen ? "nav-links-open" : ""}`}
          aria-label="Primary Navigation"
        >
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
    </header>
  );
};

export default Navbar;
