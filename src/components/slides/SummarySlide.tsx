"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";

const highlights = [
  { icon: Shield, text: "Proven operating platform with zero cancellations" },
  { icon: TrendingUp, text: "Strong revenue growth (~3x YoY)" },
  { icon: Zap, text: "70,000+ estimated attendance in 2026" },
  { icon: CheckCircle, text: "Debt-first return with equity as downside protection" },
];

export function SummarySlide() {
  return (
    <section className="slide relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/imgs-optimized/_A1A6014.webp"
          alt="XR Studio Event"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-pink-600/20 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium">Investment Opportunity</span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-black tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Investment{" "}
            <span className="text-gradient">Summary</span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            This opportunity combines a proven operating platform, strong revenue growth,
            and increased attendance. Returns are driven primarily by predictable debt service,
            with equity used strictly as downside protection.
          </motion.p>

          {/* Highlights */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-3 glass rounded-xl p-4 text-left"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
              <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
                Structured Debt Opportunity
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black">$500K - $700K</p>
                  <p className="text-sm text-muted-foreground">Investment Range</p>
                </div>
                <ArrowRight className="w-6 h-6 text-purple-400" />
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-green-400">21-24%</p>
                  <p className="text-sm text-muted-foreground">Annual Return</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                36 month term, paid monthly, equity pledged as security
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <motion.a
                href="mailto:invest@xrstudio.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-500 hover:to-pink-500 transition-all pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                Get In Touch
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <p className="text-sm text-muted-foreground">
                XR Studio | Latin America&apos;s Premier Live Experience Platform
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
