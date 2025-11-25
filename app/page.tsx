"use client";
// SimplifyClient Landing Page (Next.js - single file React component)
// File suggestion: app/page.tsx (or pages/index.tsx for pages-dir)
// Requirements: TailwindCSS configured, Framer Motion installed (`npm i framer-motion`)
// Tailwind: use Inter/Poppins/Manrope via a global import or link in _document

import React from "react";
import {motion} from "framer-motion";

export default function ClientDockLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900 antialiased">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur-sm bg-white/60 border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold">
              SC
            </div>
            <span className="font-semibold text-lg">SimplifyClient</span>
            <span className="sr-only">
              Build client trust with a beautiful portal
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#features"
              className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
            >
              Contact
            </a>
            <a
              href="#"
              className="ml-2 inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-medium shadow-md hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started Free
            </a>
          </div>

          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              ☰
            </button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{y: 10, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 0.5}}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Your All-in-One Client Portal.
            </motion.h1>

            <motion.p
              initial={{y: 6, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.08, duration: 0.45}}
              className="mt-4 text-lg text-slate-700 max-w-2xl"
            >
              Manage clients, projects, invoices, and communications — all in
              one dashboard.
            </motion.p>

            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 0.18}}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="/signup"
                className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium shadow hover:scale-[.995] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="button"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-5 py-3 rounded-full border border-slate-200 bg-white text-slate-800 font-medium shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                Book Demo
              </a>
            </motion.div>

            <motion.p className="mt-6 text-sm text-slate-500">
              Optional tagline:{" "}
              <span className="font-medium text-slate-700">
                Build client trust with a beautiful portal.
              </span>
            </motion.p>

            {/* Trust badges */}
            <div className="mt-6 flex items-center space-x-4 text-xs text-slate-500">
              <div className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-slate-100 rounded-full grid place-items-center">
                  ★
                </span>
                <span>Trusted by freelancers & small agencies</span>
              </div>
            </div>
          </div>

          {/* Hero illustration - SaaS dashboard mockup */}
          <div className="relative">
            <motion.div
              initial={{scale: 0.98, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{delay: 0.12, duration: 0.6}}
              className="mx-auto w-full max-w-[640px]"
            >
              {/* Dashboard card mockup */}
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-100 bg-white">
                <div className="p-5 bg-gradient-to-r from-sky-50 to-white border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 grid place-items-center">
                      👩‍💻
                    </div>
                    <div>
                      <div className="text-sm font-medium">Alex Morgan</div>
                      <div className="text-xs text-slate-400">
                        Freelance Designer
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">
                    SimplifyClient • Dashboard
                  </div>
                </div>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="text-xs text-slate-400">
                      Active Projects
                    </div>
                    <div className="text-2xl font-semibold">6</div>
                    <div className="text-xs text-slate-500">
                      In progress tasks • 42
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-xs text-slate-400">
                      Outstanding Invoices
                    </div>
                    <div className="text-2xl font-semibold">€1,820</div>
                    <div className="text-xs text-slate-500">Due in 7 days</div>
                  </div>
                  <div className="col-span-1 sm:col-span-2 mt-2">
                    <div className="text-xs text-slate-400 mb-2">
                      Recent Activity
                    </div>
                    <div className="rounded-lg bg-sky-50 border border-sky-100 p-3 text-sm text-slate-700">
                      Client Alice commented on "Website Redesign" • 2 hours ago
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              Everything you need to manage clients — without the clutter
            </h2>
            <p className="mt-2 text-slate-500">
              Core features built for freelancers and small agencies to run
              projects and get paid.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <motion.article
                key={f.title}
                initial={{y: 10, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 grid place-items-center text-2xl">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>

                {f.screenshot && (
                  <div className="mt-4 rounded-md overflow-hidden border border-slate-100">
                    <img
                      src={f.screenshot}
                      alt={`${f.title} screenshot`}
                      className="w-full object-cover h-36"
                    />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold">How it works</h3>
          <p className="mt-2 text-slate-500">
            Three simple steps to onboard clients and get paid faster.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STEPS.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{y: 8, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{delay: idx * 0.07}}
                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-sky-50 grid place-items-center text-2xl mb-3">
                  {s.icon}
                </div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-500">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-semibold">Pricing</h3>
            <p className="mt-2 text-slate-500">
              Start for free — upgrade for advanced features and collaboration.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING.map((p) => (
              <motion.div
                key={p.name}
                whileHover={{translateY: -6}}
                className={`rounded-2xl p-6 border ${
                  p.recommended
                    ? "border-indigo-300 shadow-lg"
                    : "border-slate-100"
                } bg-white`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">{p.name}</div>
                    <div className="mt-2 text-3xl font-bold">{p.price}</div>
                    <div className="text-sm text-slate-500">{p.period}</div>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span aria-hidden>✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl border border-slate-200 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {p.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold">
            Loved by freelancers & agencies
          </h3>
          <p className="mt-2 text-slate-500">
            Hear from people who streamlined client work with SimplifyClient.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.blockquote
                key={t.name}
                initial={{y: 10, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 grid place-items-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600">“{t.quote}”</p>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center">
            Frequently asked questions
          </h3>
          <div className="mt-6 space-y-3">
            {FAQS.map((q) => (
              <details
                key={q.q}
                className="group rounded-lg border border-slate-100 bg-white p-4"
              >
                <summary className="cursor-pointer list-none font-medium">
                  {q.q}
                </summary>
                <div className="mt-2 text-sm text-slate-500">{q.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 grid place-items-center text-white font-bold">
              CD
            </div>
            <div>
              <div className="font-semibold">SimplifyClient</div>
              <div className="text-xs text-slate-500">
                © {new Date().getFullYear()} SimplifyClient
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-sm hover:underline">
              About
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms
            </a>
            <a href="#" aria-label="LinkedIn" className="ml-4">
              in
            </a>
            <a href="#" aria-label="Twitter">
              tw
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ---------- Data & small helpers ----------

const FEATURES = [
  {
    title: "Client Management",
    desc: "Keep client contact, projects, conversations and files organized in one secure place.",
    icon: "👥",
    screenshot: null,
  },
  {
    title: "Project Tracking",
    desc: "Kanban-style boards, milestones, and time tracking to deliver on schedule.",
    icon: "📈",
    screenshot: null,
  },
  {
    title: "Secure File Sharing",
    desc: "Share drafts, assets and contracts with permissioned access and activity logging.",
    icon: "🔒",
    screenshot: null,
  },
  {
    title: "Invoicing & Payments",
    desc: "Create invoices, accept payments, and automate reminders — get paid faster.",
    icon: "💶",
    screenshot: null,
  },
];

const STEPS = [
  {
    title: "Add your client",
    text: "Import or create client profiles in seconds.",
    icon: "➕",
  },
  {
    title: "Share projects",
    text: "Invite clients to project pages and collaborate.",
    icon: "📤",
  },
  {
    title: "Get paid faster",
    text: "Send invoices and accept payments through Stripe & PayPal.",
    icon: "💸",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "€0",
    period: "/month",
    features: ["Up to 3 clients", "Basic invoicing", "File sharing"],
    cta: "Start Free",
    recommended: false,
  },
  {
    name: "Pro",
    price: "€12",
    period: "/month",
    features: [
      "Unlimited clients",
      "Advanced invoicing",
      "Time tracking",
      "Integrations",
    ],
    cta: "Upgrade",
    recommended: true,
  },
  {
    name: "Agency",
    price: "€49",
    period: "/month",
    features: ["Team seats", "SAML SSO", "Priority support", "White-labeling"],
    cta: "Contact Sales",
    recommended: false,
  },
];

const TESTIMONIALS = [
  {
    name: "Sofia R.",
    role: "Freelance Developer",
    quote:
      "SimplifyClient cleared up my billing chaos — invoices paid 3x faster.",
    avatar: "S",
  },
  {
    name: "Leo G.",
    role: "Design Agency Owner",
    quote: "Our team loves the client-facing portal and approval flows.",
    avatar: "L",
  },
  {
    name: "Maya T.",
    role: "UX Consultant",
    quote: "Everything in one place — communication, files and billing.",
    avatar: "M",
  },
];

const FAQS = [
  {
    q: "How does billing work?",
    a: "You can start on the Free plan and upgrade at any time. Payments are billed monthly and can be cancelled anytime.",
  },
  {
    q: "Is my data secure?",
    a: "Yes — data is encrypted in transit and at rest. We support 2FA and SSO for teams.",
  },
  {
    q: "What integrations are available?",
    a: "We integrate with Stripe, PayPal, Google Drive, Slack, and common project management tools via Zapier.",
  },
];
