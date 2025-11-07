import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ClientPortalTabs } from "@/components/client-portal-tabs"

export default function ClientPortalPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          <ClientPortalTabs clientId={params.id} />
        </main>
      </div>
    </div>
  )
}
