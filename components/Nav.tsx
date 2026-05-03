"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Grid3X3 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Fleet" },
  { href: "/technology", label: "Technology" },
];

export function Nav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-canopy ${
        isScrolled
          ? "bg-canopy-bg/95"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Grid3X3 className="w-4 h-4 text-canopy-green transition-transform duration-300 group-hover:rotate-90" />
            <span className="font-sans text-[15px] font-medium tracking-tight text-canopy-text">
              CANOPY
            </span>
          </Link>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-sans text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-canopy-green"
                    : "text-canopy-muted hover:text-canopy-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/fleet"
            className="hidden md:block px-5 py-2.5 border border-canopy-green text-canopy-green font-sans text-[14px] font-medium uppercase tracking-[0.12em] rounded hover:bg-canopy-green hover:text-canopy-bg transition-all duration-200"
          >
            Request Demo
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-canopy-text">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              className="stroke-current"
            >
              <path d="M0 1H20" strokeWidth="1.5" />
              <path d="M0 7H20" strokeWidth="1.5" />
              <path d="M0 13H20" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
