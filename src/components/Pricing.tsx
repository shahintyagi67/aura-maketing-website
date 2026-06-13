"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/content";
import { Check, Info, Sparkles } from "lucide-react";

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annually">("annually");

  return (
    <section id="pricing" className="relative py-28 bg-[#030014] overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Fair & Simple Plans</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Scale your logs, <span className="text-gradient-purple">not your bill</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Start for free and scale up as your volume increases. No hidden fees, cancel or change your subscription at any time.
          </motion.p>

          {/* Billing Switcher Toggle */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${billingInterval === "monthly" ? "text-white" : "text-slate-500"}`}>
              Bill Monthly
            </span>
            <button
              onClick={() => setBillingInterval(billingInterval === "monthly" ? "annually" : "monthly")}
              className="relative w-14 h-7 bg-white/10 rounded-full p-1 transition-colors hover:bg-white/15 focus:outline-none"
            >
              <motion.div
                className="w-5 h-5 bg-violet-500 rounded-full"
                animate={{ x: billingInterval === "annually" ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${billingInterval === "annually" ? "text-white" : "text-slate-500"}`}>
                Bill Annually
              </span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const price = billingInterval === "monthly" ? plan.priceMonthly : plan.priceAnnually;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-violet-950/20 border-violet-500/50 shadow-2xl shadow-violet-500/5 before:absolute before:inset-0 before:rounded-2xl before:border before:border-violet-500/10 before:animate-pulse-slow"
                    : "bg-white/2 border-white/5 hover:border-white/10 hover:bg-white/5"
                }`}
              >
                {/* Popular Ribbon/Badge */}
                {plan.isPopular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-[10px] font-bold text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-lg shadow-violet-500/25">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-xs text-slate-400 min-h-[40px] leading-relaxed">{plan.description}</p>
                  
                  {/* Price */}
                  <div className="my-6 flex items-baseline gap-1.5 text-white">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">${price}</span>
                    <span className="text-sm font-semibold text-slate-500">/ month</span>
                  </div>

                  {billingInterval === "annually" && price > 0 && (
                    <p className="text-[10px] text-emerald-400 font-semibold mb-6">Billed annually (${price * 12}/year)</p>
                  )}
                  {price === 0 && <div className="h-4 mb-6" />}

                  {/* Divider */}
                  <div className="h-[1px] bg-white/5 w-full my-6" />

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-violet-400" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 px-4 font-semibold text-sm rounded-xl transition-all ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-lg shadow-violet-500/20"
                      : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                  }`}
                >
                  {plan.ctaText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Info Banner */}
        <div className="flex items-center gap-2.5 max-w-2xl mx-auto mt-16 bg-white/2 border border-white/5 rounded-xl px-4 py-3.5 text-slate-400 text-xs sm:text-sm">
          <Info className="w-5 h-5 text-violet-400 shrink-0" />
          <span>Need custom scale limits or multi-cloud deployment agreements? Check our Enterprise pricing or contact sales for dedicated clusters.</span>
        </div>
      </div>
    </section>
  );
}
