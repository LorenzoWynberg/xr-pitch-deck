"use client";

import { motion } from "framer-motion";
import { ArrowDown, Zap } from "lucide-react";
import Image from "next/image";

export function HeroSlide() {
  return (
    <section className="slide relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-600/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero image background */}
      <div className="absolute inset-0">
        <Image
          src="/imgs-optimized/IMG_8566-Mejorado-NR-2.webp"
          alt="XR Studio Event"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and brand */}
          <motion.div
            className="mb-8 inline-flex items-center gap-3 px-6 py-3 rounded-full glass"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium tracking-wider uppercase">
              Investor Pitch Deck 2026
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-gradient">XR Studio</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Latin America&apos;s Premier Live Experience Platform
          </motion.p>

          {/* Investment highlight */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-purple-400 mb-3">
                Structured Debt Opportunity
              </p>
              <p className="text-4xl md:text-5xl font-bold mb-2">
                USD $700,000
              </p>
              <p className="text-lg text-muted-foreground">
                24% annually, paid monthly with equity pledged as security
              </p>
            </div>
          </motion.div>

          {/* Brand logos */}
          <motion.div
            className="mt-12 flex flex-wrap justify-center items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            {[
              { name: "Electric Animals", logo: "/imgs-optimized/logos/electric-animals.webp" },
              { name: "Blockchain Jungle", logo: "/imgs-optimized/logos/blockchain-jungle.webp" },
              { name: "Pura Tinta", logo: "/imgs-optimized/logos/pura-tinta.webp" },
              { name: "Magflow", logo: "/imgs-optimized/logos/magflow.webp" },
              { name: "Sweetspot", logo: "/imgs-optimized/logos/sweetspot.webp" },
            ].map((brand, index) => (
              <motion.div
                key={brand.name}
                className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl p-2 hover:scale-105 transition-all shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.5, duration: 0.5 },
            y: { repeat: Infinity, duration: 2 },
          }}
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
}
