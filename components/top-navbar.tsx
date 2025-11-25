import {Bell, Moon, Search, Sun} from "lucide-react";
import {useState} from "react";

export default function TopNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const userName = "Faiq";
  return (
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
  );
}
