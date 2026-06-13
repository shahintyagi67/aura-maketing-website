"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const companies = [
  {
    name: "Stripe",
    svg: (
      <svg className="h-6 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 80 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M41.4 13.9c0-3.3 2.1-5.1 5.3-5.1 1.7 0 3 .5 3.7.9l-.7 2.8c-.6-.3-1.5-.6-2.6-.6-1.5 0-2.3.8-2.3 2 0 3.2 4.6 2.8 4.6 6.3 0 3.4-2.1 5.3-5.6 5.3-1.8 0-3.4-.6-4.2-1.1l.8-2.8c.8.5 2 1 3.2 1 1.6 0 2.4-.7 2.4-2.1 0-3.3-4.6-2.8-4.6-6.3zm12.3 1.3v-5.9h2.9v5.9c0 1.5.7 2.1 1.8 2.1.5 0 .9-.1 1.2-.2l.1 2.8c-.5.2-1.2.3-2.1.3-3.1 0-3.9-1.7-3.9-5zm10.7-9.5c0-1.1.9-1.9 2-1.9s2 .8 2 1.9c0 1.1-.9 2-2 2s-2-.9-2-2zm.4 4.3h3.2v14.9h-3.2zm9.1 0h3.1v2.1c.7-1.4 2.1-2.5 4-2.5 3.3 0 5.4 2.5 5.4 6.7v8.6h-3.2v-8c0-2.5-1.1-3.9-2.9-3.9-1.7 0-2.9 1.2-2.9 3.5v8.4h-3.2V10zm-43.2 5.2c0-3 2-4.9 4.8-4.9 1.5 0 2.7.5 3.3.8l-.7 2.6c-.5-.3-1.3-.5-2.2-.5-1.3 0-2 .6-2 1.7 0 2.7 4.1 2.4 4.1 5.3 0 2.9-1.8 4.5-4.9 4.5-1.6 0-3-.5-3.7-.9l.7-2.6c.7.4 1.8.8 2.8.8 1.4 0 2-.6 2-1.7 0-2.7-4.1-2.4-4.1-5.2zm23-4.3h2.3l.3-2.7c.1-.8.6-1.3 1.4-1.3h1.7v2.7h-1c-.4 0-.6.2-.7.6l-.3 2.1h2v2.7h-2v9.3h-3v-9.3h-1.7v-2.7z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    svg: (
      <svg className="h-5 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 116 26" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6 2.5L23.2 22.5H0L11.6 2.5Z" />
        <text x="32" y="20" className="font-bold text-lg fill-current tracking-wider">VERCEL</text>
      </svg>
    ),
  },
  {
    name: "Linear",
    svg: (
      <svg className="h-5 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="3" width="18" height="18" rx="4" />
        <path d="M4 12h10M9 7v10" stroke="currentColor" strokeWidth="2" />
        <text x="26" y="18" className="font-bold text-lg fill-current tracking-wider">LINEAR</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg className="h-5 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 80 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 2c1.7 0 3 1.3 3 3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3v2.5c0 1.4-1.1 2.5-2.5 2.5S3 17.9 3 16.5V14c0-1.7 1.3-3 3-3zm6-9c1.7 0 3 1.3 3 3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3V5c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm6-9c1.7 0 3 1.3 3 3v3c0 1.7-1.3 3-3 3V5c0-1.7 1.3-3 3-3z" />
        <text x="26" y="18" className="font-bold text-lg fill-current tracking-wider">Figma</text>
      </svg>
    ),
  },
  {
    name: "Supabase",
    svg: (
      <svg className="h-5 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 110 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4 1.2L2.7 12.8h7.9l-2.6 10 10.7-11.6H10.8z" />
        <text x="26" y="18" className="font-bold text-lg fill-current tracking-wider">SUPABASE</text>
      </svg>
    ),
  },
  {
    name: "GitHub",
    svg: (
      <svg className="h-5 w-auto text-slate-500 fill-current hover:text-white transition-colors duration-300" viewBox="0 0 90 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5 0-.2 0-.9 0-1.7-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.7 9.7 0 015 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9 0 1.4 0 2.5 0 2.8 0 .3.2.6.7.5C17.1 18.2 20 14.4 20 10c0-5.5-4.5-10-10-10z" />
        <text x="26" y="18" className="font-bold text-lg fill-current tracking-wider">GitHub</text>
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden grid-bg">
      {/* Radial fade to blur out the grid around edges */}
      <div className="absolute inset-0 radial-fade pointer-events-none" />

      {/* Floating Glowing Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-violet-600/20 blur-[100px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[120px] animate-glow pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Glowing Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/30 text-xs font-medium text-violet-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(139,92,246,0.1)] hover:border-violet-400/50 transition-colors duration-300 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-violet-400" />
          <span>Aura AI V2 is officially live</span>
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          The Next-Gen OS for <br />
          <span className="text-gradient-primary">Smart Team Analytics</span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 font-normal leading-relaxed"
        >
          Connect all your product logs, automate custom event pipelines, and deploy predictive business alerts in minutes. Powered by low-latency edge integrations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16 z-10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-full shadow-lg shadow-violet-500/25 transition-all text-base group"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 transition-all text-base"
          >
            <Play className="w-4 h-4 text-violet-400 fill-violet-400" />
            Watch Demo
          </motion.button>
        </motion.div>
      </div>

      {/* Trusted By Companies Marquee */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-8 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xs font-semibold tracking-wider text-slate-500 uppercase mb-8"
        >
          TRUSTED BY LEADING TECHNOLOGY TEAMS
        </motion.p>

        {/* Marquee Wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full relative overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-20 before:bg-gradient-to-r before:from-[#030014] before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-20 after:bg-gradient-to-l after:from-[#030014] after:to-transparent after:z-10"
        >
          <div className="flex gap-16 items-center w-max animate-marquee">
            {/* First Set of Logos */}
            {companies.map((company, index) => (
              <div key={`company-1-${index}`} className="flex items-center justify-center">
                {company.svg}
              </div>
            ))}
            {/* Duplicated for Seamless Marquee */}
            {companies.map((company, index) => (
              <div key={`company-2-${index}`} className="flex items-center justify-center">
                {company.svg}
              </div>
            ))}
            {/* Tripled to guarantee width */}
            {companies.map((company, index) => (
              <div key={`company-3-${index}`} className="flex items-center justify-center">
                {company.svg}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
