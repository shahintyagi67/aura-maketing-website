"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/data/content";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

  return (
    <section id="testimonials" className="relative py-28 bg-[#030014] overflow-hidden border-t border-white/5">
      {/* Background glow orb */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold text-slate-300 uppercase tracking-widest mb-4"
          >
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>Customer Stories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Loved by <span className="text-gradient-purple">product builders</span> worldwide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            See how organizations of all sizes—from early-stage startups to scaling public companies—leverage Aura to accelerate metrics.
          </motion.p>
        </div>

        {/* Testimonials Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="glass-card p-6 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-violet-950/10"
            >
              {/* background quote watermark */}
              <div className="absolute right-6 top-6 opacity-[0.02] text-white pointer-events-none group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-16 h-16" />
              </div>

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-violet-400 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {testimonial.role} &middot; <span className="text-slate-400">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
