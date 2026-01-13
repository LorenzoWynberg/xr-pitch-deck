"use client";

import { motion } from "framer-motion";
import { Star, Mic, Building } from "lucide-react";

const sponsors = [
  "Tether", "Avalanche", "Bitfinex", "FIFCO", "Coca Cola",
  "Red Bull", "Davivienda", "Kolbi", "Bybit", "Exness",
  "Redfi", "Lulubit", "Multimoney", "Tradingview"
];

const notableArtists = [
  "Carl Cox", "John Digweed", "Nick Szabo", "Jacob Collier",
  "Miguel Bose", "Padre Guilherme", "Boza", "The Martinez Brothers"
];

const agencies = ["UTA", "WME", "Wasserman", "B4 Bookings", "Analog"];

export function SponsorsSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Validation
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Notable <span className="text-gradient">Partners</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading global brands, artists, and agencies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sponsors */}
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building className="w-6 h-6 text-blue-400" />
              <h4 className="text-xl font-bold">Sponsors</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {sponsors.map((sponsor, index) => (
                <motion.span
                  key={sponsor}
                  className="px-3 py-1.5 rounded-full text-sm bg-blue-500/10 border border-blue-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  {sponsor}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Artists */}
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-yellow-400" />
              <h4 className="text-xl font-bold">Notable Artists</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {notableArtists.map((artist, index) => (
                <motion.span
                  key={artist}
                  className="px-3 py-1.5 rounded-full text-sm bg-yellow-500/10 border border-yellow-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {artist}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              + 350 more international artists
            </p>
          </motion.div>

          {/* Agencies */}
          <motion.div
            className="glass rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mic className="w-6 h-6 text-pink-400" />
              <h4 className="text-xl font-bold">Agencies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {agencies.map((agency, index) => (
                <motion.span
                  key={agency}
                  className="px-4 py-2 rounded-full text-sm font-bold bg-pink-500/10 border border-pink-500/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {agency}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              World-class talent representation
            </p>
          </motion.div>
        </div>

        {/* Stats banner */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-black text-gradient">350+</p>
            <p className="text-sm text-muted-foreground">International Artists</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-black text-gradient">14+</p>
            <p className="text-sm text-muted-foreground">Corporate Sponsors</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-black text-gradient">5</p>
            <p className="text-sm text-muted-foreground">Major Agencies</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <p className="text-3xl font-black text-gradient">0</p>
            <p className="text-sm text-muted-foreground">Event Cancellations</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
