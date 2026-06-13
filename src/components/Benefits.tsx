"use client";

import { motion } from "framer-motion";
import { benefitsData } from "@/data/content";
import * as Icons from "lucide-react";

// Helper to resolve icon by string from Lucide
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  if (!IconComponent) return null;
  return <IconComponent className="w-5 h-5 text-violet-400" />;
};

export default function Benefits() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="benefits" className="relative py-24 bg-[#030014] overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column: Heading */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-widest"
            >
              <Icons.ShieldCheck className="w-3 h-3 text-violet-400" />
              <span>Enterprise Ready</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]"
            >
              Built for <span className="text-gradient-purple">reliability</span> at scale
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-400 leading-relaxed"
            >
              Aura's core infrastructure was designed from the ground up to support high-throughput analytical ingestion with zero downtime. See why leading engineering teams choose us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a 
                href="#pricing" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 group"
              >
                Explore our developer SLA plans
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Benefits Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefitsData.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={cardVariants}
                className="bg-white/2 border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-600/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {getIcon(benefit.iconName)}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
