"use client";

import { motion } from "framer-motion";
import { featuresData } from "@/data/content";
import * as Icons from "lucide-react";

// Helper to resolve icon by string from Lucide
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  if (!IconComponent) return null;
  return <IconComponent className="w-6 h-6 text-violet-400" />;
};

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  // Custom widgets for each card to look extremely premium
  const renderCardWidget = (id: string) => {
    switch (id) {
      case "ai-analytics":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg overflow-hidden flex items-end justify-between px-3 pb-2 pt-6 relative">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">Prediction Model</span>
            <div className="w-7 bg-violet-600/30 rounded-t h-[40%]" />
            <div className="w-7 bg-violet-600/40 rounded-t h-[60%]" />
            <div className="w-7 bg-violet-600/50 rounded-t h-[50%]" />
            <div className="w-7 bg-violet-600/70 rounded-t h-[80%] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
            </div>
            <div className="w-7 bg-indigo-600 rounded-t h-[95%]" />
          </div>
        );
      case "team-collab":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">Multiplayer Presence</span>
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border border-violet-500 bg-violet-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">A</div>
              <div className="w-8 h-8 rounded-full border border-teal-500 bg-teal-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg animate-bounce">JD</div>
              <div className="w-8 h-8 rounded-full border border-pink-500 bg-pink-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">SK</div>
              <div className="w-8 h-8 rounded-full border border-amber-500 bg-amber-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">MC</div>
            </div>
          </div>
        );
      case "smart-automation":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-around px-4 relative overflow-hidden">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">Webhook Node</span>
            <div className="w-6 h-6 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-[8px]">In</div>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-violet-600 via-indigo-500 to-emerald-500 relative">
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
            <div className="w-6 h-6 rounded bg-slate-900 border border-white/10 flex items-center justify-center text-[8px]">Out</div>
          </div>
        );
      case "adv-reporting":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg flex flex-col justify-end p-3 relative overflow-hidden">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">Daily Export</span>
            <div className="flex justify-between items-center text-[10px] text-slate-400 mb-1 border-b border-white/5 pb-1">
              <span>weekly_report.pdf</span>
              <span className="text-emerald-400 font-semibold text-[8px]">COMPLETED</span>
            </div>
            <div className="flex justify-between items-center text-[10px] text-slate-400">
              <span>active_users.csv</span>
              <span className="text-emerald-400 font-semibold text-[8px]">COMPLETED</span>
            </div>
          </div>
        );
      case "secure-cloud":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">AES-256 Storage</span>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-12 h-12 rounded-full border border-violet-500/20 animate-ping" />
              <div className="w-8 h-8 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                <Icons.Lock className="w-4 h-4" />
              </div>
            </div>
          </div>
        );
      case "realtime-insights":
        return (
          <div className="h-24 mt-4 bg-black/40 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden p-2">
            <span className="absolute top-2 left-2 text-[8px] uppercase tracking-wider text-slate-500">Live Latency</span>
            <div className="w-full flex items-center gap-1.5 px-3 py-2 bg-emerald-500/5 border border-emerald-500/20 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">12ms response time</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="relative py-28 bg-[#030014] overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-4"
          >
            <Icons.Cpu className="w-3 h-3 text-violet-400" />
            <span>Platform Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Everything you need to <span className="text-gradient-primary">scale event pipelines</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            No complex infrastructure setups. Integrate our edge client, define triggers, and unlock rich insights across your entire technology stack instantly.
          </motion.p>
        </div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col justify-between group hover:shadow-xl hover:shadow-violet-950/10"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-violet-500/30 group-hover:bg-violet-600/10 transition-all duration-300">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="text-[9px] font-bold tracking-wider uppercase bg-violet-500/10 border border-violet-500/30 text-violet-300 px-2 py-0.5 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>

              {/* Visual widget decoration */}
              {renderCardWidget(feature.id)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
