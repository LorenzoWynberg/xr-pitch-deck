"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Plane } from "lucide-react";

const costaRicaEvents = [
  { date: "Feb 13", event: "Elrow Costa Rica", brand: "Electric Animals" },
  { date: "Feb 27 - Mar 01", event: "Pura Tinta Fest", brand: "Pura Tinta" },
  { date: "Apr 11", event: "Electric Animals Fest feat Fabrik", brand: "Electric Animals" },
  { date: "Apr 25", event: "Miguel Bose", brand: "Magflow" },
  { date: "Sep 3", event: "Jon Batiste + Orquesta Filarmonica", brand: "Magflow" },
  { date: "Oct 31", event: "Electric Animals Halloween", brand: "Electric Animals" },
  { date: "Nov 13-14", event: "Blockchain Jungle", brand: "Blockchain Jungle" },
  { date: "Nov 28-29", event: "Oneiro Festival", brand: "XR Studio" },
  { date: "Dec 31", event: "Electric Animals NYE", brand: "Electric Animals" },
];

const internationalEvents = [
  { date: "Oct 10", event: "Electric Animals Fabrik Takeover", location: "Madrid" },
  { date: "Nov 13-14", event: "Electric Animals ADE feat Senso Sounds", location: "Amsterdam" },
  { date: "Nov", event: "Electric Animals El Salvador", location: "El Salvador" },
];

export function CalendarSlide() {
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
            Upcoming Events
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Calendar <span className="text-gradient">2026</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            12 confirmed events across 4 countries with an estimated attendance of 70,000+
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Costa Rica Events */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-purple-400" />
              <h4 className="text-xl font-bold">Costa Rica</h4>
              <span className="text-sm text-muted-foreground">9 Events</span>
            </div>

            <div className="space-y-3">
              {costaRicaEvents.map((item, index) => (
                <motion.div
                  key={item.event}
                  className="glass rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-purple-400 min-w-[120px]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.date}</span>
                    </div>
                    <div>
                      <h5 className="font-semibold">{item.event}</h5>
                      <p className="text-xs text-muted-foreground">{item.brand}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* International Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Plane className="w-5 h-5 text-pink-400" />
              <h4 className="text-xl font-bold">International</h4>
              <span className="text-sm text-muted-foreground">3 Events</span>
            </div>

            <div className="space-y-4">
              {internationalEvents.map((item, index) => (
                <motion.div
                  key={item.event}
                  className="glass rounded-2xl p-6 border border-pink-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex items-center gap-2 text-pink-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase">{item.location}</span>
                  </div>
                  <h5 className="font-bold mb-1">{item.event}</h5>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </motion.div>
              ))}
            </div>

            {/* Stat box */}
            <motion.div
              className="mt-8 glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-4xl font-black text-gradient mb-2">70,000+</p>
              <p className="text-sm text-muted-foreground">Estimated Attendance 2026</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
