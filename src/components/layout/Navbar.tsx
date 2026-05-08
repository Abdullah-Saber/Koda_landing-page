"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Menswear", href: "#menswear" },
  { name: "Artisanal", href: "#artisanal" },
  { name: "Craft", href: "#craft" },
  { name: "Journal", href: "#journal" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-brand-cream/80 backdrop-blur-lg py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-charcoal hover:text-brand-espresso transition-colors"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] font-medium text-brand-charcoal hover:text-brand-espresso transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-3xl lg:text-4xl font-serif tracking-tighter text-brand-espresso"
        >
          KODA
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-brand-charcoal hover:text-brand-espresso transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-brand-charcoal hover:text-brand-espresso transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-brand-espresso text-brand-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-brand-espresso/20 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-brand-cream z-[70] p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-16">
                <span className="text-2xl font-serif text-brand-espresso">KODA</span>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-brand-charcoal" />
                </button>
              </div>
              <nav className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-serif text-brand-charcoal hover:text-brand-espresso"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-10 border-t border-brand-sand">
                <Link
                  href="/account"
                  className="text-sm uppercase tracking-widest text-brand-charcoal"
                >
                  My Account
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
