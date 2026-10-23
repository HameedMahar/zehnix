"use client";

import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  isPill?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home", isPill: true },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "About Us", href: "#about-us" },
];

export interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-transparent", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group"
            aria-label="Zehnix Home"
          >
            <div className="transition-transform duration-200 group-hover:scale-105">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="3" fill="#5D91F5" />
                <circle cx="24" cy="8" r="3" fill="#5D91F5" />
                <circle cx="8" cy="24" r="3" fill="#5D91F5" />
                <circle cx="24" cy="24" r="3" fill="#5D91F5" />
                <line x1="24" y1="8" x2="8" y2="24" stroke="#5D91F5" strokeWidth="2.5" />
                <line x1="8" y1="8" x2="24" y2="8" stroke="#5D91F5" strokeWidth="2.5" />
                <line x1="8" y1="24" x2="24" y2="24" stroke="#5D91F5" strokeWidth="2.5" />
              </svg>
            </div>
            <span className="font-bold text-xl text-[#15254B] tracking-tight">
              zehnix
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-200",
                  item.isPill
                    ? "bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#15254B] shadow-sm hover:bg-white"
                    : "text-[#15254B] hover:text-[#5D91F5] px-4 py-1.5 rounded-full hover:bg-white/40"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right: Desktop Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 bg-white text-[#15254B] text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#15254B] hover:bg-white/60 focus:outline-hidden transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 flex flex-col gap-3">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    item.isPill
                      ? "bg-slate-100/80 text-[#15254B] font-semibold"
                      : "text-[#15254B] hover:bg-slate-50 hover:text-[#5D91F5]"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="#get-started"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#15254B] text-sm font-semibold px-5 py-3 rounded-full shadow-md hover:shadow-lg border border-slate-100 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
