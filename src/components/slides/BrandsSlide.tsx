"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const brands = [
  {
    name: "Electric Animals",
    description: "Leading electronic music festival brand in Costa Rica with international A-list artists.",
    image: "/imgs-optimized/_A1A6606.webp",
    logo: "/imgs-optimized/logos/electric-animals.webp",
    tags: ["Music Festivals", "International DJs", "Multi-Edition"],
    highlight: "Carl Cox, John Digweed, The Martinez Brothers",
    color: "from-purple-600 to-pink-600",
  },
  {
    name: "Blockchain Jungle",
    description: "The largest blockchain & crypto event in Central America.",
    image: "/imgs-optimized/BCJUNGLE-7.webp",
    logo: "/imgs-optimized/logos/blockchain-jungle.webp",
    tags: ["Tech Conference", "Networking", "Innovation"],
    highlight: "Nick Szabo, Peter Todd, Eli Ben Sasson",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Pura Tinta Fest",
    description: "Central America's leading tattoo convention with 200+ artists.",
    image: "/imgs-optimized/WUA00771-Enhanced-NR.webp",
    logo: "/imgs-optimized/logos/pura-tinta.webp",
    tags: ["Tattoo Convention", "Art", "Culture"],
    highlight: "International & Regional Artists",
    color: "from-red-500 to-orange-600",
  },
  {
    name: "Magflow",
    description: "Music and culture platform for artist development and live experiences.",
    image: "/imgs-optimized/JACOBCOLLIER_21-09-25-04416.webp",
    logo: "/imgs-optimized/logos/magflow.webp",
    tags: ["Artist Development", "Live Shows", "Concerts"],
    highlight: "Jacob Collier, Miguel Bose, Jon Batiste",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sweetspot",
    description: "Leading esports league and competitive gaming platform.",
    image: "/imgs-optimized/IMG_6282.webp",
    logo: "/imgs-optimized/logos/sweetspot.webp",
    tags: ["Esports", "Gaming", "Tournaments"],
    highlight: "National Leagues, Online & Live Events",
    color: "from-pink-500 to-rose-600",
  },
];

export function BrandsSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            Portfolio
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Our <span className="text-gradient">Brands</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five powerful event verticals under one platform, each with strong brand recognition
            and proven track records.
          </p>
        </motion.div>

        {/* Brands grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className={`relative group rounded-3xl overflow-hidden ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>

              {/* Logo in top right */}
              <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {brand.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/10 text-white/90 border-none text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-2">{brand.name}</h4>
                <p className="text-sm text-white/70 mb-2">{brand.description}</p>
                <p className="text-xs text-purple-300 font-medium">{brand.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Esencial Costa Rica note */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-sm">
              Electric Animals & Blockchain Jungle are officially recognized under{" "}
              <span className="font-bold text-green-400">Esencial Costa Rica</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
