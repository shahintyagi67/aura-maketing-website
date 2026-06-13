import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura | Next-Gen AI Analytics & Smart Automation Platform",
  description: "Accelerate your team workflow with Aura's real-time AI-powered analytics, smart automations, secure cloud storage, and collaborative dashboards.",
  keywords: ["SaaS", "Analytics", "Automation", "AI", "Collaboration", "Dashboard", "Workflow"],
  authors: [{ name: "Aura Inc." }],
  openGraph: {
    title: "Aura | Next-Gen AI Analytics & Smart Automation Platform",
    description: "Accelerate your team workflow with Aura's real-time AI-powered analytics, smart automations, secure cloud storage, and collaborative dashboards.",
    type: "website",
    locale: "en_US",
    url: "https://aura-saas-demo.vercel.app",
    siteName: "Aura",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura | Next-Gen AI Analytics & Smart Automation Platform",
    description: "Accelerate your team workflow with Aura's real-time AI-powered analytics, smart automations, secure cloud storage, and collaborative dashboards.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-slate-100 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
