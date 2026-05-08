import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const footerLinks = {
  shop: [
    { name: "All Collections", href: "#" },
    { name: "Winter Lookbook", href: "#" },
    { name: "Essentials", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Ethics & Sustainability", href: "#" },
    { name: "Journal", href: "#" },
    { name: "Careers", href: "#" },
  ],
  support: [
    { name: "Shipping & Returns", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-espresso text-brand-cream pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="text-4xl font-serif tracking-tighter mb-10 block">
              KODA
            </Link>
            <p className="text-brand-sand/60 text-base leading-relaxed mb-10 max-w-xs font-light">
              Crafting timeless elegance for the modern individual. Our pieces are designed
              to last a lifetime, blending luxury with conscious creation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-sand transition-colors">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-sand transition-colors">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-brand-sand transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-brand-sand">Shop</h4>
            <ul className="flex flex-col gap-5">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-brand-sand/50 hover:text-brand-cream transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] font-bold mb-10 text-brand-sand">Company</h4>
            <ul className="flex flex-col gap-5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-brand-sand/50 hover:text-brand-cream transition-colors font-light">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-brand-sand">Newsletter</h4>
            <p className="text-sm text-brand-sand/60 mb-6">
              Subscribe to receive updates on new collections and exclusive events.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-brand-sand/30 py-3 text-sm focus:outline-none focus:border-brand-sand transition-colors pr-10"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-sand hover:text-brand-cream transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-sand/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs uppercase tracking-[0.2em] text-brand-sand/30 font-medium">
            © 2024 Koda Clothing Inc. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-brand-sand/30 hover:text-brand-cream transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs uppercase tracking-[0.2em] text-brand-sand/30 hover:text-brand-cream transition-colors font-medium">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
