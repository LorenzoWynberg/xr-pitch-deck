"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, CheckCircle } from "lucide-react";

const fundamentals = [
  "Revenue growth from $195K (2022) to $6.0M projected (2026)",
  "Transition to sustained profitability",
  "Zero event cancellations",
  "Institutional credibility and compliance",
];

export function ValuationSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-br from-green-600/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-green-400 mb-4">
            Investment Thesis
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight">
            Company <span className="text-gradient">Valuation</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Valuation card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-6 h-6 text-green-400" />
                <span className="text-sm uppercase tracking-widest text-green-400">
                  Valuation Snapshot
                </span>
              </div>

              {/* Key metrics */}
              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Forward EBITDA (2026)</p>
                  <p className="text-3xl font-bold">~USD $950K</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Conservative Multiple</p>
                    <p className="text-xl font-bold">4.5x - 5.0x</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Growth-Adjusted Multiple</p>
                    <p className="text-xl font-bold">5.5x - 7.0x</p>
                  </div>
                </div>
              </div>

              {/* Implied valuation */}
              <div className="border-t border-white/10 pt-8">
                <p className="text-sm uppercase tracking-widest text-purple-400 mb-2">
                  Implied Valuation Range (Pre-Money)
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-black text-gradient">
                    $5M - $7M
                  </span>
                  <span className="text-2xl text-muted-foreground">USD</span>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10" />
          </motion.div>

          {/* Fundamentals */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-purple-400" />
              <h4 className="text-2xl font-bold">Fundamentals</h4>
            </div>

            <div className="space-y-4 mb-8">
              {fundamentals.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 glass rounded-xl p-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{item}</p>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              className="glass rounded-2xl p-6 border border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                The company is valued between{" "}
                <span className="text-white font-bold">USD $5 and $7 million</span> based on
                forward EBITDA and projected growth. The equity referenced in this structure
                is used strictly as security and is expected to{" "}
                <span className="text-green-400 font-bold">
                  appreciate materially over the next 12-36 months
                </span>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
