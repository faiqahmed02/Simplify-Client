import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { InvoicesList } from "@/components/invoices-list"

export default function InvoicesPage() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Invoices</h1>
                <p className="text-muted-foreground">Manage and track all your invoices</p>
              </div>
            </div>
            <InvoicesList />
          </div>
        </main>
      </div>
    </div>
  )
}
