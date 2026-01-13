"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Music,
  Users,
  ShoppingBag,
  UserCog,
  Wallet,
  ArrowRight
} from "lucide-react";

const fundCategories = [
  {
    icon: Megaphone,
    title: "Marketing & Media",
    description: "Campaign acceleration, early launches and brand positioning",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Music,
    title: "Artist Booking",
    description: "Strategic advances, access to top-tier artists and improved booking terms",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Customer Experience",
    description: "Structured surveys, improved communication and direct audience relationships",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "Merch & Brand Assets",
    description: "Official merchandise production, brand activations and additional monetization",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: UserCog,
    title: "Top-Tier Talent",
    description: "Senior talent in production, operations, marketing and partnerships",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Wallet,
    title: "Working Capital",
    description: "Operating cash flow between events, financial flexibility",
    color: "from-violet-500 to-purple-500",
  },
];

export function UseOfFundsSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Capital Deployment
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Use of <span className="text-gradient">Funds</span>
          </h3>

          {/* Key message */}
          <motion.div
            className="inline-block glass rounded-2xl px-8 py-4 mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg font-bold text-purple-400 uppercase tracking-wide">
              This capital is not to plug gaps
            </p>
            <p className="text-2xl font-black mt-1">
              It is to accelerate a proven model
            </p>
          </motion.div>
        </motion.div>

        {/* Fund categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {fundCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative glass rounded-2xl p-6 overflow-hidden hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
                <ArrowRight className="w-5 h-5 mt-4 text-muted-foreground group-hover:text-purple-400 group-hover:translate-x-2 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="glass rounded-3xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 pulse-glow" />
              <span className="text-sm uppercase tracking-widest text-green-400">
                Company Status
              </span>
            </div>
            <p className="text-xl md:text-2xl font-bold mb-2">
              XR Studio has already passed the speculation phase.
            </p>
            <p className="text-lg text-muted-foreground">
              We are a trusted company with successful events across multiple verticals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
