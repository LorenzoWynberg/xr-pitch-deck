"use client";

import { motion } from "framer-motion";
import { DollarSign, Shield, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const options = [
  {
    id: 1,
    name: "Structured Growth Facility",
    amount: "$500,000",
    rate: "1.75%",
    annualRate: "21%",
    equity: "10%",
    term: "36 months",
    minPayment: "12 months",
    recommended: false,
  },
  {
    id: 2,
    name: "Accelerated Growth Facility",
    amount: "$700,000",
    rate: "2.0%",
    annualRate: "24%",
    equity: "15%",
    term: "36 months",
    minPayment: "12 months",
    recommended: true,
  },
];

const keyPoints = [
  "Two structured financing options",
  "Debt-first return with equity used strictly as default protection",
  "No equity issued at closing",
  "Founder retains full control unless payment default occurs",
];

export function FinancingSlide() {
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
            Investment Structure
          </h2>
          <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
            Financing <span className="text-gradient">Options</span>
          </h3>

          {/* Key points */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Badge variant="secondary" className="text-xs py-1.5 px-3">
                  {point}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Options cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              className={`relative glass rounded-3xl p-8 ${
                option.recommended
                  ? "border-2 border-purple-500/50"
                  : "border border-white/10"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {option.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-purple-600 hover:bg-purple-600 text-white">
                    Recommended
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                  Option {option.id}
                </p>
                <h4 className="text-2xl font-bold mb-4">{option.name}</h4>
                <div className="text-5xl font-black text-gradient">{option.amount}</div>
              </div>

              {/* Capital details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Interest Rate
                  </span>
                  <span className="font-bold">{option.rate} monthly ({option.annualRate} annually)</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4" /> Term
                  </span>
                  <span className="font-bold">{option.term}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  <span className="text-muted-foreground">Minimum Interest Payment</span>
                  <span className="font-bold">{option.minPayment}</span>
                </div>
              </div>

              {/* Equity guarantee */}
              <div className="glass rounded-xl p-4 bg-purple-500/10">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-bold text-purple-400 uppercase tracking-wider">
                    Equity Guarantee
                  </span>
                </div>
                <p className="text-2xl font-bold mb-2">{option.equity} of company shares</p>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>Not issued at closing</li>
                  <li>Pledged as security only</li>
                  <li>90 days cure period</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important note */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass rounded-2xl p-6 border border-yellow-500/30">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ArrowRight className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-yellow-400">
                Key Structure Note
              </span>
            </div>
            <p className="text-lg">
              The shares are <span className="font-bold">not issued upfront</span>. They are
              pledged as a guarantee and are{" "}
              <span className="font-bold text-yellow-400">
                only transferred in the event of non-payment
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
