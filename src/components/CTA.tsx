"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative py-28 bg-[#030014] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/20 via-slate-950/80 to-[#030014] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-violet-950/20 flex flex-col items-center text-center"
        >
          {/* Subtle decoration lines */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none radial-fade" />

          {/* Sparkle badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-950/40 text-[10px] font-semibold text-violet-300 uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>GET STARTED INSTANTLY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-2xl leading-[1.15]">
            Ready to accelerate your <span className="text-gradient-primary">event telemetry?</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mb-10 leading-relaxed">
            Join thousands of developers and product leaders analyzing billions of events on Aura. Set up your workspace in less than 5 minutes.
          </p>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-10">
              <input
                type="email"
                required
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex items-center justify-center gap-1.5 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-500/20 transition-all text-sm whitespace-nowrap shrink-0 group"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-5 py-4 rounded-xl text-emerald-400 text-sm font-semibold"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Awesome! We've sent a verification link to your email.</span>
            </motion.div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs text-slate-500 mt-8 font-medium">
            <span>No credit card required</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>14-day free trial of Pro plan</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
