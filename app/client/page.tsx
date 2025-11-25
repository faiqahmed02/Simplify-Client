"use client";
import {ClientList} from "@/components/client-list";
import {DashboardHeader} from "@/components/dashboard-header";
import {DashboardSidebar} from "@/components/dashboard-sidebar";
import TopNavbar from "@/components/top-navbar";

export default function ClientsPage() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <ClientList />
        </main>
      </div>
    </div>
  );
}
