"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, MapPin, Calendar, Music } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Zero Cancellations",
    description: "Proven operational reliability since inception",
  },
  {
    icon: Award,
    title: "Carbon Neutral",
    description: "Only carbon-neutral entertainment producer in Costa Rica",
  },
  {
    icon: Users,
    title: "350+ Artists",
    description: "International artists hosted across all verticals",
  },
  {
    icon: MapPin,
    title: "Regional Expansion",
    description: "Events in Costa Rica, El Salvador, Thailand, Madrid, Amsterdam",
  },
  {
    icon: Calendar,
    title: "Multi-Vertical",
    description: "Music, Blockchain, Esports, Tattoo conventions & more",
  },
  {
    icon: Music,
    title: "End-to-End",
    description: "Full production platform with centralized control",
  },
];

export function WhoWeAreSlide() {
  return (
    <section className="slide relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/JACOBCOLLIER_21-09-25-04612.jpg"
          alt="XR Studio Concert"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
              Who We Are
            </h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              The Trusted Gateway to{" "}
              <span className="text-gradient">Latin America</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              XR Studio is a vertically integrated live-experience platform that designs,
              builds, and operates large-scale events end-to-end across multiple verticals
              with standardized quality and institutional compliance.
            </p>

            {/* Backed by badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">Esencial Costa Rica</span>
              </div>
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
                <Shield className="w-5 h-5 text-pink-400" />
                <span className="text-sm font-medium">National Convention Center</span>
              </div>
            </div>

            <p className="text-muted-foreground italic">
              &quot;In this region, almost no one can say that, and it creates a real competitive advantage.&quot;
            </p>
          </motion.div>

          {/* Right - Feature grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
