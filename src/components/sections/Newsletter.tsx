"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section className="py-32 bg-brand-espresso text-brand-cream overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Background Text Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-white/5 whitespace-nowrap select-none pointer-events-none uppercase italic tracking-tighter">
          Exclusive Access
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-sand/60 uppercase tracking-[0.5em] text-xs font-bold mb-10 block"
          >
            The Inner Circle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-8xl font-serif mb-16 leading-[0.9] tracking-tighter"
          >
            Stay Ahead of the <br /> <span className="italic font-light">Curve.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-cream/5 backdrop-blur-md p-1 lg:p-2 border border-brand-cream/10 rounded-full max-w-xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                type="email"
                required
                placeholder="Join our newsletter"
                className="flex-grow bg-transparent px-8 py-4 text-brand-cream placeholder:text-brand-sand/30 focus:outline-none text-sm lg:text-base"
              />
              <button
                type="submit"
                disabled={status !== "idle"}
                className="bg-brand-cream text-brand-espresso px-8 py-4 rounded-full text-xs lg:text-sm uppercase tracking-[0.2em] font-bold hover:bg-white transition-all disabled:opacity-50 min-w-[140px] flex items-center justify-center gap-2"
              >
                {status === "idle" && "Subscribe"}
                {status === "loading" && <div className="w-4 h-4 border-2 border-brand-espresso border-t-transparent rounded-full animate-spin" />}
                {status === "success" && (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Joined</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
          <p className="mt-8 text-brand-sand/40 text-xs uppercase tracking-widest">
            By joining, you agree to our privacy policy and terms.
          </p>
        </div>
      </div>
    </section>
  );
}
