"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { imgSrc } from "@/lib/basePath";

export default function BrandStory() {
  return (
    <section id="story" className="py-32 bg-brand-sand/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] w-full max-w-lg mx-auto">
              <Image
                src={imgSrc('/story.png')}
                alt="Bespoke Niche Tailoring"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-espresso p-8 hidden md:flex flex-col justify-end">
                <span className="text-brand-cream text-4xl font-serif leading-none mb-2">Est.</span>
                <span className="text-brand-sand/60 text-lg uppercase tracking-widest font-bold">2024</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl"
          >
            <span className="text-brand-espresso/50 uppercase tracking-[0.3em] text-xs font-bold mb-8 block">
              Our Craftsmanship
            </span>
            <h2 className="text-5xl lg:text-7xl font-serif text-brand-espresso leading-[1.1] mb-10 tracking-tight">
              The Art of <span className="italic font-light">Tailoring.</span>
            </h2>
            <p className="text-brand-charcoal/70 leading-relaxed mb-12 text-xl font-light">
              Koda Menswear embodies the pinnacle of avant-garde sartorial excellence. 
              We specialize in niche silhouettes and unconventional textures, 
              meticulously crafted by master tailors to create garments that 
              push the boundaries of traditional tailoring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-brand-espresso/10">
              <div>
                <h4 className="text-brand-espresso font-serif text-2xl mb-3">Italian Fabrics</h4>
                <p className="text-base text-brand-charcoal/60 leading-relaxed">We source only the finest Italian wool and silk, ensuring unparalleled quality and drape.</p>
              </div>
              <div>
                <h4 className="text-brand-espresso font-serif text-2xl mb-3">Master Tailoring</h4>
                <p className="text-base text-brand-charcoal/60 leading-relaxed">Each suit is handcrafted by master tailors with decades of experience in bespoke menswear.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
