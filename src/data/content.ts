import { LucideIcon } from "lucide-react";
import { 
  Brain, 
  Users, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Activity,
  Cpu,
  Lock,
  Globe,
  Database
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Company {
  name: string;
  logo: string; // We can use lucide icon name or text
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: "Brain" | "Users" | "Zap" | "BarChart3" | "ShieldCheck" | "Activity";
  badge?: string;
  gradient: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: "Cpu" | "Lock" | "Globe" | "Database";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const navLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" }
];

export const trustedCompanies: Company[] = [
  { name: "Vercel", logo: "/companies/vercel.svg" },
  { name: "Stripe", logo: "/companies/stripe.svg" },
  { name: "Linear", logo: "/companies/linear.svg" },
  { name: "Figma", logo: "/companies/figma.svg" },
  { name: "Supabase", logo: "/companies/supabase.svg" },
  { name: "GitHub", logo: "/companies/github.svg" },
  { name: "Slack", logo: "/companies/slack.svg" }
];

export const featuresData: Feature[] = [
  {
    id: "ai-analytics",
    title: "AI Powered Analytics",
    description: "Extract predictive patterns and deep business insights from your usage data automatically using our customized LLM models.",
    iconName: "Brain",
    badge: "Beta",
    gradient: "from-purple-500/20 to-indigo-500/5"
  },
  {
    id: "team-collab",
    title: "Team Collaboration",
    description: "Organize workspaces, share dashboards instantly, and align team efforts with multiplayer editing and granular user access levels.",
    iconName: "Users",
    gradient: "from-blue-500/20 to-cyan-500/5"
  },
  {
    id: "smart-automation",
    title: "Smart Automation",
    description: "Trigger advanced webhooks, connect 2,000+ custom integrations, and run conditional workflows with zero maintenance.",
    iconName: "Zap",
    badge: "Hot",
    gradient: "from-amber-500/20 to-orange-500/5"
  },
  {
    id: "adv-reporting",
    title: "Advanced Reporting",
    description: "Export high-resolution PDFs, auto-generate quarterly summaries, and set up daily Slack digests of your main metrics.",
    iconName: "BarChart3",
    gradient: "from-emerald-500/20 to-teal-500/5"
  },
  {
    id: "secure-cloud",
    title: "Secure Cloud Storage",
    description: "Your information is protected by industry-standard AES-256 encryption, automatic point-in-time recovery, and 99.999% durability.",
    iconName: "ShieldCheck",
    gradient: "from-rose-500/20 to-pink-500/5"
  },
  {
    id: "realtime-insights",
    title: "Real-time Insights",
    description: "Stream logs and monitor activities as they happen with sub-100ms updates directly in your browser or custom terminal.",
    iconName: "Activity",
    gradient: "from-cyan-500/20 to-indigo-500/5"
  }
];

export const benefitsData: Benefit[] = [
  {
    id: "dev-first",
    title: "Developer-First API",
    description: "Integrate Aura in minutes with our fully-typed SDKs, OpenAPI documentation, and local testing CLI.",
    iconName: "Cpu"
  },
  {
    id: "bank-grade",
    title: "Bank-Grade Security",
    description: "SOC2 Type II certified. We use end-to-end encryption for all sensitive fields and tokenized API authorizations.",
    iconName: "Lock"
  },
  {
    id: "global-edge",
    title: "Global Edge Network",
    description: "Stateless edge routes ensure your custom webhooks and analytics events complete with single-digit millisecond latency.",
    iconName: "Globe"
  },
  {
    id: "resilient-db",
    title: "Resilient Architecture",
    description: "Multi-region fallback guarantees that your business automations run regardless of single cloud-provider outages.",
    iconName: "Database"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "VP of Product",
    company: "Linear Technologies",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Aura has completely transformed how our product teams track usage patterns. The setup took 5 minutes, and the AI insights already caught an activation bottleneck we'd missed for months.",
    rating: 5
  },
  {
    id: "t2",
    name: "Marcus Chen",
    role: "Co-Founder & CTO",
    company: "ScribeFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "We migrated our analytics from custom pipelines to Aura, and we've reduced our storage bill by 40% while gaining real-time alerting that actually works. An absolute game-changer.",
    rating: 5
  },
  {
    id: "t3",
    name: "Elena Rostova",
    role: "Director of Operations",
    company: "StripeX",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "The multiplayer collaboration interface is incredibly polished. Our product managers, developers, and marketers now work in a single workspace without stepping on each other's toes.",
    rating: 5
  },
  {
    id: "t4",
    name: "David Vance",
    role: "Head of Growth",
    company: "VercelLabs",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "Aura's automated Slack reporting lets our executives stay on top of daily metrics. The custom workflows mean I can build complex event funnels without writing a single line of SQL.",
    rating: 5
  },
  {
    id: "t5",
    name: "Aiko Tanaka",
    role: "Lead Platform Engineer",
    company: "CloudCore",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    content: "As an engineer, the typed SDK and local testing suite are what won me over. Integrating analytics and triggers is no longer a chore, and the edge latency is virtually non-existent.",
    rating: 5
  },
  {
    id: "t6",
    name: "Oliver Smith",
    role: "VP of Engineering",
    company: "Quantize",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "We needed a secure analytics platform that complied with strict European privacy policies. Aura checked all the boxes. Their SOC2 validation made security review an absolute breeze.",
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 0,
    priceAnnually: 0,
    description: "Essential analytics and workflows for solo developers and early-stage side projects.",
    features: [
      "Up to 10,000 monthly events",
      "3 custom dashboards",
      "Basic automated triggers",
      "1-day data retention",
      "Community support"
    ],
    ctaText: "Start Free Trial"
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 29,
    priceAnnually: 23,
    description: "Powerful insights and advanced automation templates for growing product teams.",
    features: [
      "Up to 250,000 monthly events",
      "Unlimited dashboards & sharing",
      "Advanced AI analytics engine",
      "Multiplayer collaboration",
      "30-day data retention",
      "Slack & Email alerts",
      "Priority 24/7 support"
    ],
    isPopular: true,
    ctaText: "Upgrade to Pro"
  },
  {
    id: "business",
    name: "Business",
    priceMonthly: 99,
    priceAnnually: 79,
    description: "Enterprise-grade performance, dedicated storage, and full SOC2 compliance for scaling organizations.",
    features: [
      "Up to 2,000,000 monthly events",
      "Custom SSL edge endpoints",
      "Dedicated database storage",
      "Custom integrations & webhooks",
      "Unlimited retention history",
      "SAML SSO & MFA support",
      "Dedicated account manager",
      "Custom SLA agreement"
    ],
    ctaText: "Contact Sales"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long does it take to integrate Aura into my application?",
    answer: "Using our pre-built TypeScript SDKs or React components, you can integrate Aura in less than 5 minutes. Installing the SDK, initializing it with your API key, and tracking your first event requires only three lines of code."
  },
  {
    id: "faq-2",
    question: "Is Aura SOC2 compliant and secure?",
    answer: "Yes, security is a core pillar of our platform. Aura is SOC2 Type II certified. All data transferred is encrypted in transit using TLS 1.3 and at rest using AES-256. We also offer fields tokenization so that no PII (Personally Identifiable Information) ever reaches our servers unless explicitly permitted."
  },
  {
    id: "faq-3",
    question: "Can I try Aura's Pro features before subscribing?",
    answer: "Absolutely! Every new account gets a 14-day free trial of our Pro plan. No credit card is required to sign up. After 14 days, you can choose to upgrade or you will automatically transition to our generous Starter plan."
  },
  {
    id: "faq-4",
    question: "What happens if I exceed my plan's monthly event limits?",
    answer: "We never hard-cap your ingestion. If you exceed your limit, your dashboards and triggers will continue to function normally. We will reach out to you with details on usage-based overage rates (which are highly affordable) or help you transition to the next pricing tier."
  },
  {
    id: "faq-5",
    question: "Do you offer custom pricing and SLAs for enterprise clients?",
    answer: "Yes. For teams requiring custom event volume limits, dedicated database clusters, specific data retention, and custom SLA agreements, our Enterprise plan is the best fit. Contact our sales team and we will draft a custom proposal."
  },
  {
    id: "faq-6",
    question: "Can I export my analytical data out of Aura?",
    answer: "Absolutely. You own your data. You can export any dashboard view as CSV or Excel format. Additionally, you can query our REST API or configure custom webhook forwards to stream raw data events to your own cloud warehouses in real-time."
  }
];
