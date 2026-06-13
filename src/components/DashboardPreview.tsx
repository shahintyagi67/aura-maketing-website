"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Settings, 
  Activity, 
  TrendingUp, 
  Server, 
  Shield, 
  Zap, 
  RefreshCw, 
  CircleDot,
  CheckCircle2
} from "lucide-react";

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "logs" | "settings">("overview");
  const [copiedKey, setCopiedKey] = useState(false);

  const handleCopyKey = () => {
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  const logs = [
    { time: "09:41:22.102", method: "POST", path: "/v1/events", status: 200, latency: "14ms" },
    { time: "09:41:23.004", method: "GET", path: "/v1/analytics/realtime", status: 200, latency: "28ms" },
    { time: "09:41:23.501", method: "POST", path: "/v1/workflows/trigger", status: 202, latency: "8ms" },
    { time: "09:41:24.112", method: "POST", path: "/v1/events", status: 200, latency: "12ms" },
    { time: "09:41:25.034", method: "GET", path: "/v1/metrics/aggregate", status: 304, latency: "5ms" }
  ];

  return (
    <section className="relative py-20 bg-[#030014] overflow-hidden">
      {/* Subtle backglow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Powerful dashboard. <span className="text-gradient-purple">Developer simplicity.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Everything you need to configure events, inspect real-time logs, and monitor cloud executions.
          </p>
        </div>

        {/* Dashboard Shell */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto glass-card overflow-hidden shadow-2xl shadow-violet-950/20"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/5 px-4 sm:px-6 py-4 bg-white/2">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              </div>
              <div className="h-4 w-[1px] bg-white/10 mx-2" />
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 rounded-full px-3 py-1 border border-white/5">
                <Server className="w-3 h-3 text-emerald-400" />
                <span>US-East-1 Edge Node</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Menu Tabs */}
            <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "overview"
                    ? "bg-violet-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Overview
              </button>
              <button
                onClick={() => setActiveTab("logs")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "logs"
                    ? "bg-violet-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                Logs
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeTab === "settings"
                    ? "bg-violet-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Settings className="w-3.5 h-3.5" />
                API Config
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-4 sm:p-8 bg-slate-950/40 min-h-[350px] relative">
            <AnimatePresence mode="wait">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Performance stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-slate-400 font-semibold mb-1">Total API Requests</p>
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                        1.48M
                        <span className="text-[10px] text-emerald-400 font-semibold">+12.4%</span>
                      </h4>
                    </div>
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-slate-400 font-semibold mb-1">Avg Edge Latency</p>
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                        18.2ms
                        <span className="text-[10px] text-emerald-400 font-semibold">-4.1ms</span>
                      </h4>
                    </div>
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-slate-400 font-semibold mb-1">Active Integrations</p>
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                        14
                        <span className="text-[10px] text-violet-400 font-semibold">Active</span>
                      </h4>
                    </div>
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4">
                      <p className="text-xs text-slate-400 font-semibold mb-1">Uptime SLA</p>
                      <h4 className="text-lg sm:text-xl font-bold text-white flex items-baseline gap-1">
                        99.998%
                        <span className="text-[10px] text-emerald-400 font-semibold">Healthy</span>
                      </h4>
                    </div>
                  </div>

                  {/* Main Wave Chart */}
                  <div className="bg-white/2 border border-white/5 rounded-xl p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-violet-400 animate-pulse" />
                        <span className="text-xs sm:text-sm font-semibold text-white">Event Streams (Requests / Sec)</span>
                      </div>
                      <span className="text-[10px] bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded px-2 py-0.5 font-semibold">
                        Live Stream
                      </span>
                    </div>

                    <div className="h-44 w-full relative">
                      {/* Animated SVG Chart Wave */}
                      <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Shaded Area */}
                        <motion.path
                          d="M0,200 C100,100 150,160 250,90 C350,20 400,180 500,110 C600,40 680,120 800,40 L800,200 L0,200 Z"
                          fill="url(#gradient)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Colored Line */}
                        <motion.path
                          d="M0,200 C100,100 150,160 250,90 C350,20 400,180 500,110 C600,40 680,120 800,40"
                          fill="none"
                          stroke="#a78bfa"
                          strokeWidth="3"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                        {/* Highlight Point */}
                        <circle cx="800" cy="40" r="5" fill="#8b5cf6" className="animate-ping" />
                        <circle cx="800" cy="40" r="4" fill="#a78bfa" />
                      </svg>
                    </div>

                    {/* Chart Timeline Labels */}
                    <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2 font-medium">
                      <span>09:30</span>
                      <span>09:35</span>
                      <span>09:40</span>
                      <span>09:45</span>
                      <span>Live Stream</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Logs Tab */}
              {activeTab === "logs" && (
                <motion.div
                  key="logs"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-xs text-slate-300 space-y-3 bg-[#02000a] border border-white/5 rounded-xl p-4 sm:p-6 overflow-x-auto"
                >
                  <div className="flex justify-between border-b border-white/5 pb-2 text-[10px] text-slate-500 font-semibold tracking-wider uppercase">
                    <span>Timestamp</span>
                    <span>Action</span>
                    <span>Endpoint</span>
                    <span>Status</span>
                    <span>Latency</span>
                  </div>

                  {logs.map((log, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-white/2 py-2 hover:bg-white/2 rounded px-1 transition-colors duration-150">
                      <span className="text-slate-500">{log.time}</span>
                      <span className={`font-semibold ${log.method === "POST" ? "text-violet-400" : "text-sky-400"}`}>
                        {log.method}
                      </span>
                      <span className="text-slate-300 font-medium">{log.path}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        log.status === 200 || log.status === 202 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {log.status}
                      </span>
                      <span className="text-slate-400">{log.latency}</span>
                    </div>
                  ))}

                  <div className="flex items-center gap-2 text-violet-400 pt-2 font-semibold text-[10px] cursor-pointer hover:underline">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span>Streaming live API logs...</span>
                  </div>
                </motion.div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <motion.div
                  key="settings"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="bg-white/2 border border-white/5 rounded-xl p-6 space-y-4">
                    <h5 className="text-sm font-semibold text-white">Generate Edge Authentication Key</h5>
                    <p className="text-xs text-slate-400">
                      Authenticate event feeds and backend automation hooks with this encrypted project token. Do not leak in client bundles.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <div className="relative flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-3 font-mono text-xs text-slate-300 select-all flex items-center justify-between">
                        <span>aura_live_prod_52x8ef9120a1bc7e8...</span>
                        <Shield className="w-4 h-4 text-violet-500" />
                      </div>
                      <button
                        onClick={handleCopyKey}
                        className="px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-xs font-semibold text-white transition-all shadow-md shadow-violet-500/20 shrink-0"
                      >
                        {copiedKey ? (
                          <span className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                            Copied
                          </span>
                        ) : (
                          "Copy Secret Key"
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4 flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-white">Automations Triggered</h6>
                        <p className="text-[10px] text-slate-400">3,492 runs executed this hour</p>
                      </div>
                    </div>
                    <div className="bg-white/2 border border-white/5 rounded-xl p-4 flex gap-3 items-center">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                        <CircleDot className="w-5 h-5" />
                      </div>
                      <div>
                        <h6 className="text-xs font-semibold text-white">Edge Node Handshake</h6>
                        <p className="text-[10px] text-slate-400">SSL handshakes verified at edge</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
