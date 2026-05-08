"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sage Olive Performance Suit",
    price: "$2,450",
    image: "/product-1.png",
    category: "Signature",
  },
  {
    id: 2,
    name: "Architectural Grey Wool Suit",
    price: "$2,800",
    image: "/product-2.png",
    category: "Modern",
  },
  {
    id: 3,
    name: "Avant-Garde Charcoal Series",
    price: "$3,200",
    image: "/hero.png", 
    category: "Editorial",
  },
  {
    id: 4,
    name: "Bespoke Navy Tailoring",
    price: "$2,650",
    image: "/story.png",
    category: "Classic",
  },
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-32 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-espresso/50 uppercase tracking-[0.3em] text-xs font-bold mb-6 block"
            >
              Bespoke Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-serif text-brand-espresso leading-[1.1] tracking-tight"
            >
              Suits that define <br />
              <span className="italic underline underline-offset-[12px] decoration-1 font-light">excellence.</span>
            </motion.h2>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-brand-espresso uppercase tracking-widest text-xs font-bold"
          >
            Explore All <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-sand mb-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <Plus className="w-6 h-6 text-brand-espresso" />
                </button>
                <div className="absolute top-6 left-6">
                   <span className="px-3 py-1 bg-brand-burgundy text-brand-cream text-[10px] uppercase tracking-widest">
                     {product.category}
                   </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-serif text-brand-espresso mb-1 group-hover:underline underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brand-charcoal/50">
                    Fine Fabrications
                  </p>
                </div>
                <span className="text-base font-medium text-brand-espresso">{product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
