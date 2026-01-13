"use client";

import { motion } from "framer-motion";
import { Ticket, Clock, Star, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Ticket,
    title: "VIP Access",
    description: "VIP table and premium access to all events across all brands",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Clock,
    title: "Agency Services",
    description: "40 hours per month of agency use for podcasting, graphic design, audiovisual production, or advertising",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Priority Access",
    description: "Priority/exclusivity when requesting working capital and future loans or specific projects",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: MessageCircle,
    title: "Sales Services",
    description: "Engagement of WhatsApp sales services with preferred commission rates",
    color: "from-green-500 to-emerald-500",
  },
];

export function BenefitsSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Investor Perks
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Additional <span className="text-gradient">Benefits</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beyond financial returns, investors receive exclusive perks and services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="group relative glass rounded-3xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-start gap-4">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
