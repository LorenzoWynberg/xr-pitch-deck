"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leadershipTeam = [
  {
    name: "Sam Zahedi",
    role: "CEO, Founder",
    image: "/imgs-optimized/sam.webp",
  },
  {
    name: "Pablo Vargas",
    role: "COO, Partner",
    image: "/imgs-optimized/pablo.webp",
  },
];

const coreTeam = [
  {
    name: "Juan Jose Lopez",
    role: "Logistic Manager",
    image: "/imgs-optimized/juan-jose.webp",
  },
  {
    name: "Roberto Amarat",
    role: "Stage Manager",
    image: "/imgs-optimized/rob.webp",
  },
  {
    name: "Jeimy Sibaja",
    role: "Artistic Direction Lead",
    image: "/imgs-optimized/jeimy.webp",
  },
  {
    name: "Anna Pearson",
    role: "Hospitality & Sponsorships",
    image: "/imgs-optimized/ana-yancy.webp",
  },
  {
    name: "Fernando Lopez",
    role: "Vendor Coordinator",
    image: "/imgs-optimized/fernando.webp",
  },
  {
    name: "Ronald Mora",
    role: "Affiliate & Social Media",
    image: "/imgs-optimized/ronald.webp",
  },
  {
    name: "Sofia Rodriguez",
    role: "Art & Design Coordinator",
    image: "/imgs-optimized/sofia.webp",
  },
  {
    name: "Lorenzo Wynberg",
    role: "Senior Web Developer",
    image: "/imgs-optimized/lore.webp",
  },
];

export function TeamSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Background gradient orbs */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-600/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-pink-600/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            The People
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of event professionals with deep expertise in production,
            operations, and creative direction.
          </p>
        </motion.div>

        {/* Leadership */}
        <div className="flex justify-center gap-8 mb-16">
          {leadershipTeam.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative mb-4">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto relative neon-border">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full">
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {index === 0 ? "Founder" : "Partner"}
                  </span>
                </div>
              </div>
              <h4 className="text-xl font-bold">{member.name}</h4>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Core team grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {coreTeam.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <div className="relative mb-3">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto glass group-hover:ring-2 group-hover:ring-purple-500 transition-all">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h5 className="text-sm font-semibold">{member.name}</h5>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
