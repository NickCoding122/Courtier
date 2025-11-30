import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="page-container navbar-inner">
          <div>
            <span className="logo-nav">COURTIER</span>
          </div>
          <nav className="nav-links" aria-label="Primary Navigation">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/join-us" className="nav-link">
              Join Us
            </Link>
            <Link href="/founders" className="nav-link">
              Founders
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
