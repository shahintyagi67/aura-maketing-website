"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/content";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 bg-[#030014] overflow-hidden border-t border-white/5">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-violet-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-4"
          >
            <HelpCircle className="w-3 h-3 text-violet-400" />
            <span>Support Accordion</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Frequently Asked <span className="text-gradient-purple">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Got questions? We've got answers. If you don't find what you are looking for, reach out to our support team.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card overflow-hidden border transition-all duration-300 ${
                  isOpen ? "border-violet-500/35 bg-white/5" : "border-white/5 bg-white/2"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-bold text-white group-hover:text-violet-300 transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300 shrink-0 ${
                    isOpen ? "bg-violet-600/10 border-violet-500/30 text-violet-400" : ""
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-white/5">
                        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
