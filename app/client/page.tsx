"use client";
import {ClientList} from "@/components/client-list";
import {DashboardSidebar} from "@/components/dashboard-sidebar";
import TopNavbar from "@/components/top-navbar";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100">
      <div className="mx-auto">
        <div className="flex gap-6">
          <DashboardSidebar />
     
        <main className="flex-1 min-h-screen ml-0 py-8 pr-4 sm:pr-6 lg:pr-8">
          <TopNavbar />
          <ClientList />
        </main>
      </div>
    </div>
    </div> 
  );
}
