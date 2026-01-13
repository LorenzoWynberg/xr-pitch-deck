"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, DollarSign, Percent } from "lucide-react";

const financialData = [
  { year: "2022", income: "$196K", ebitda: "-$73K", margin: "-38%", attendance: "2,740" },
  { year: "2023", income: "$261K", ebitda: "$10K", margin: "4%", attendance: "3,586" },
  { year: "2024", income: "$833K", ebitda: "-$165K", margin: "-20%", attendance: "16,591" },
  { year: "2025", income: "$2.5M", ebitda: "$210K", margin: "8%", attendance: "34,500" },
  { year: "2026*", income: "$6.0M", ebitda: "$951K", margin: "16%", attendance: "70,000", highlight: true },
];

const keyPoints = [
  { icon: TrendingUp, value: "~3x", label: "YoY Revenue Growth" },
  { icon: DollarSign, value: "$951K", label: "Forecasted EBITDA 2026" },
  { icon: Percent, value: "16%", label: "Target EBITDA Margin" },
  { icon: Users, value: "25x", label: "Attendance Growth Since 2022" },
];

export function GrowthSlide() {
  return (
    <section className="slide relative min-h-screen py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-green-600/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-purple-600/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-green-400 mb-4">
            Financial Performance
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Company <span className="text-gradient">Growth</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            XR Studio has crossed into institutional credibility with repeatable scale
            and improving margins.
          </p>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {keyPoints.map((point, index) => (
            <motion.div
              key={point.label}
              className="glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <point.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-black mb-1">{point.value}</p>
              <p className="text-sm text-muted-foreground">{point.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Financial table */}
        <motion.div
          className="glass rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-medium text-muted-foreground">Year</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Revenue</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">EBITDA</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Margin</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-muted-foreground">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {financialData.map((row, index) => (
                  <motion.tr
                    key={row.year}
                    className={`border-b border-white/5 ${
                      row.highlight
                        ? "bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20"
                        : ""
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <td className="px-6 py-4">
                      <span className={`font-bold ${row.highlight ? "text-purple-400" : ""}`}>
                        {row.year}
                      </span>
                      {row.highlight && (
                        <span className="ml-2 text-xs text-muted-foreground">Forecasted</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-mono font-bold">{row.income}</td>
                    <td className={`px-6 py-4 text-right font-mono font-bold ${
                      row.ebitda.startsWith("-") ? "text-red-400" : "text-green-400"
                    }`}>
                      {row.ebitda}
                    </td>
                    <td className={`px-6 py-4 text-right font-mono ${
                      row.margin.startsWith("-") ? "text-red-400" : "text-green-400"
                    }`}>
                      {row.margin}
                    </td>
                    <td className="px-6 py-4 text-right font-mono">{row.attendance}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>2025 confirms operating leverage</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span>2026 EBITDA margin approaching industry-healthy levels (8-15%)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
