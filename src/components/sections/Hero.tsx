"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { imgSrc } from "@/lib/basePath";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-sand">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imgSrc('/hero.png')}
          alt="Luxury Menswear Suit Collection"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-cream/90 uppercase tracking-[0.4em] text-xs lg:text-sm font-bold mb-8 block"
        >
          Artisanal Menswear 2024
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl lg:text-9xl font-serif text-brand-cream leading-[0.9] mb-12 text-balance tracking-tighter"
        >
          Niche <br />
          <span className="italic font-light">Tailoring</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <button className="px-12 py-5 bg-brand-cream text-brand-espresso text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-all duration-500 premium-shadow">
            Explore Menswear
          </button>
          <button className="px-12 py-5 border border-brand-cream/30 text-brand-cream text-sm uppercase tracking-[0.2em] font-bold hover:bg-brand-cream hover:text-brand-espresso transition-all duration-500 backdrop-blur-sm">
            Our Craft
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-brand-cream/50 text-[10px] uppercase tracking-[0.2em] vertical-rl">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-brand-cream/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
