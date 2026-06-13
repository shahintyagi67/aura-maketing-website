"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const footerLinks = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Benefits", href: "#benefits" },
      { label: "Pricing", href: "#pricing" },
      { label: "Integrations", href: "#" },
      { label: "Changelog", href: "#" }
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "Guides", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "System Status", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" }
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "GDPR & Security", href: "#" },
      { label: "SLA Agreement", href: "#" }
    ]
  };

  return (
    <footer className="bg-[#02000a] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background decoration line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center">
                <span className="font-bold text-white text-lg">A</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Aura
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Real-time analytics engine and workflow automation platform powered by low-latency edge integrations. Built for modern product and software development teams.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/10 hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/10 hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="#" aria-label="Slack" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/10 hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1 2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.042a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.042zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.522-2.522V8.824a2.528 2.528 0 0 1 2.522-2.52h5.043zm10.135 3.78a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.52h-2.522v-2.52zm-1.262 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52V3.78a2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-3.78 10.135a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.262a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52h-5.043z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-600/10 hover:border-violet-500/20 transition-all duration-300">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 lg:col-span-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Company, Legal & Newsletter */}
          <div className="grid grid-cols-2 lg:col-span-1 gap-8 md:hidden lg:grid">
            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Input for medium screen / fallback grid */}
          <div className="md:col-span-2 lg:col-span-1 hidden md:block lg:hidden space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4 text-xs text-slate-500 font-medium">
          <span>&copy; {new Date().getFullYear()} Aura Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
