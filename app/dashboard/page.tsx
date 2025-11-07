"use client";
// import { DashboardHeader } from "@/components/dashboard-header"
import {DashboardSidebar} from "@/components/dashboard-sidebar";
// import { ClientList } from "@/components/client-list"

// export default function DashboardPage() {
//   return (
//     <div className="flex h-screen bg-background">
//       <DashboardSidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <DashboardHeader />
//         <main className="flex-1 overflow-y-auto p-6 lg:p-8">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex items-center justify-between mb-8">
//               <div>
//                 <h1 className="text-3xl font-bold text-foreground mb-2">Clients</h1>
//                 <p className="text-muted-foreground">Manage your client projects and relationships</p>
//               </div>
//             </div>
//             <ClientList />
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

import React, {useEffect, useState} from "react";
import {
  Home,
  Users,
  Folder,
  FileText,
  MessageCircle,
  Settings,
  Bell,
  Search,
  Plus,
  LogOut,
  Sun,
  Moon,
} from "lucide-react";
import {motion} from "framer-motion";

// Single-file React component preview for SimplifyClient dashboard
// Built for Next.js + TailwindCSS. Drop this in a page or a Storybook story.

export default function ClientDockDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const userName = "Faiq";

  useEffect(() => {
    // Toggle the `dark` class on <html> so Tailwind dark: works site-wide.
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", dark);
    }
  }, [dark]);

  const stats = [
    {
      title: "Active Clients",
      value: 24,
      change: "+6%",
      spark: [2, 3, 2, 5, 6, 7],
    },
    {
      title: "Ongoing Projects",
      value: 7,
      change: "-1%",
      spark: [5, 4, 4, 6, 5, 4],
    },
    {
      title: "Pending Invoices",
      value: 3,
      change: "+25%",
      spark: [1, 2, 1, 3, 4, 3],
    },
    {
      title: "Total Earnings (mo)",
      value: "$6.2k",
      change: "+12%",
      spark: [3, 4, 6, 8, 7, 9],
    },
  ];

  const projects = [
    {
      name: "Website Redesign",
      client: "Acme Co.",
      status: "In Progress",
      progress: 62,
      due: "Nov 18, 2025",
    },
    {
      name: "Mobile App MVP",
      client: "Bright Labs",
      status: "On Hold",
      progress: 28,
      due: "Dec 10, 2025",
    },
    {
      name: "Brand Refresh",
      client: "Studio 9",
      status: "Completed",
      progress: 100,
      due: "Oct 5, 2025",
    },
  ];

  const messages = [
    {from: "Lena", text: "Can we push the demo to Friday?", time: "2h"},
    {from: "Omar", text: "Invoice #119 needs review.", time: "1d"},
    {from: "Priya", text: "Files uploaded — logos and assets.", time: "3d"},
  ];

  const invoices = [
    {id: 125, client: "Acme Co.", amount: "$1,200", status: "Pending"},
    {id: 124, client: "Studio 9", amount: "$850", status: "Paid"},
    {id: 123, client: "Bright Labs", amount: "$2,400", status: "Overdue"},
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          {/* <aside
            className={`fixed z-20 inset-y-0 left-0 w-64 transform bg-white dark:bg-slate-900 shadow-lg rounded-tr-2xl rounded-br-2xl p-4 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
            aria-label="Sidebar"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                  CD
                </div>
                <div>
                  <h1 className="text-lg font-semibold">SimplifyClient</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Client portal
                  </p>
                </div>
              </div>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setSidebarOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="space-y-1">
              {[
                {name: "Dashboard", icon: <Home size={18} />},
                {name: "Clients", icon: <Users size={18} />},
                {name: "Projects", icon: <Folder size={18} />},
                {name: "Invoices", icon: <FileText size={18} />},
                {name: "Files", icon: <Folder size={18} />},
                {name: "Messages", icon: <MessageCircle size={18} />},
                {name: "Settings", icon: <Settings size={18} />},
              ].map((item) => (
                <a
                  key={item.name}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  href="#"
                >
                  <span className="text-slate-500 dark:text-slate-300">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </nav>

            <div className="mt-8 text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} SimplifyClient
            </div>
          </aside> */}
          <DashboardSidebar />
          {/* Main area */}
          <main className="flex-1 min-h-screen ml-0 py-8">
            {/* Top navbar */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <button
                  className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setSidebarOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-slate-400" />
                  </div>
                  <input
                    className="pl-10 pr-4 py-2 rounded-2xl border border-transparent bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-indigo-400 focus:outline-none w-72"
                    placeholder="Search clients or projects..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 relative">
                  <Bell size={18} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">
                    3
                  </span>
                </button>

                <button
                  onClick={() => setDark(!dark)}
                  className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <div className="relative">
                  <button className="flex items-center gap-2 rounded-full bg-white dark:bg-slate-900 p-1 px-2 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                      FA
                    </div>
                    <div className="text-sm">{userName}</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Welcome back, {userName} 👋
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Here's a quick overview of your business.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md hover:scale-[1.01] transition-transform">
                  <Plus size={16} /> New
                </button>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  Last synced: Today
                </div>
              </div>
            </div>

            {/* KPI cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {stats.map((s) => (
                <motion.div
                  key={s.title}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow hover:shadow-lg transition-shadow"
                  whileHover={{y: -4}}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {s.title}
                      </div>
                      <div className="text-xl font-semibold">{s.value}</div>
                    </div>
                    <div className="text-sm text-green-500 dark:text-green-400">
                      {s.change}
                    </div>
                  </div>

                  {/* Tiny sparkline */}
                  <Sparkline data={s.spark} />
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="lg:col-span-2 space-y-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Projects Overview</h3>
                    <a
                      className="text-sm text-indigo-600 hover:underline"
                      href="#"
                    >
                      View all
                    </a>
                  </div>

                  <ProjectsTable projects={projects} />
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Quick Actions</h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Shortcuts
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 py-2 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                      Add New Client
                    </button>
                    <button className="flex-1 py-2 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                      Create Project
                    </button>
                    <button className="flex-1 py-2 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                      Send Invoice
                    </button>
                  </div>
                </div>
              </section>

              <aside className="space-y-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Recent Messages</h4>
                    <a
                      className="text-sm text-indigo-600 hover:underline"
                      href="#"
                    >
                      View all
                    </a>
                  </div>

                  <MessagesWidget messages={messages} />
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Invoices</h4>
                    <a
                      className="text-sm text-indigo-600 hover:underline"
                      href="#"
                    >
                      Manage
                    </a>
                  </div>

                  <InvoicesWidget invoices={invoices} />
                </div>
              </aside>
            </div>

            <footer className="mt-8 text-xs text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} SimplifyClient •{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Subcomponents ------------------ */

function Sparkline({data = []}: {data: number[]}) {
  const max = Math.max(...data, 1);
  const points = data
    .map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d / max) * 100}`)
    .join(" ");
  return (
    <svg
      className="w-full h-8"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polyline
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2"
        points={points}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectsTable({projects}: {projects: any[]}) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="text-slate-500 dark:text-slate-400">
          <th className="text-left py-2">Project</th>
          <th className="text-left py-2">Client</th>
          <th className="py-2">Status</th>
          <th className="py-2">Progress</th>
          <th className="py-2">Due</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr
            key={p.name}
            className="border-t border-slate-100 dark:border-slate-800"
          >
            <td className="py-3">{p.name}</td>
            <td className="py-3 text-slate-500 dark:text-slate-400">
              {p.client}
            </td>
            <td className="py-3 text-center">
              <StatusBadge status={p.status} />
            </td>
            <td className="py-3">
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-indigo-600"
                  style={{width: `${p.progress}%`}}
                ></div>
              </div>
              <div className="text-xs text-slate-500 mt-1">{p.progress}%</div>
            </td>
            <td className="py-3 text-slate-500 dark:text-slate-400">{p.due}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function StatusBadge({status}: {status: string}) {
  const map: Record<string, string> = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    "On Hold": "bg-slate-100 text-slate-800",
  };
  const cls = map[status] || "bg-slate-100 text-slate-800";
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${cls}`}>
      {status}
    </span>
  );
}

function MessagesWidget({messages}: {messages: any[]}) {
  return (
    <div className="space-y-3">
      {messages.map((m, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            {m.from[0]}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="font-medium">{m.from}</div>
              <div className="text-xs text-slate-400">{m.time}</div>
            </div>
            <div className="text-sm text-slate-500">{m.text}</div>
          </div>
        </div>
      ))}

      {messages.length === 0 && (
        <div className="text-center text-slate-400 py-6">
          No messages yet — start a conversation with a client.
        </div>
      )}
    </div>
  );
}

function InvoicesWidget({invoices}: {invoices: any[]}) {
  return (
    <div className="space-y-3">
      {invoices.map((inv) => (
        <div
          key={inv.id}
          className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 last:border-none"
        >
          <div>
            <div className="text-sm font-medium">Invoice #{inv.id}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {inv.client}
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{inv.amount}</div>
            <div className="text-xs mt-1">
              <StatusBadgeInline status={inv.status} />
            </div>
          </div>
        </div>
      ))}

      {invoices.length === 0 && (
        <div className="text-center text-slate-400 py-6">
          No invoices found.
        </div>
      )}
    </div>
  );
}

function StatusBadgeInline({status}: {status: string}) {
  const map: Record<string, string> = {
    Paid: "text-green-600",
    Pending: "text-yellow-500",
    Overdue: "text-red-500",
  };
  const cls = map[status] || "text-slate-500";
  return <span className={`font-medium ${cls}`}>{status}</span>;
}
