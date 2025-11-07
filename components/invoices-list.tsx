import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Eye, Download, Plus } from "lucide-react"
import Link from "next/link"

const allInvoices = [
  {
    id: "INV-001",
    client: "Acme Corporation",
    amount: "$3,500.00",
    status: "paid",
    issueDate: "Mar 1, 2024",
    dueDate: "Mar 15, 2024",
  },
  {
    id: "INV-002",
    client: "TechStart Inc",
    amount: "$2,800.00",
    status: "paid",
    issueDate: "Mar 15, 2024",
    dueDate: "Mar 29, 2024",
  },
  {
    id: "INV-003",
    client: "Acme Corporation",
    amount: "$5,600.00",
    status: "pending",
    issueDate: "Apr 1, 2024",
    dueDate: "Apr 15, 2024",
  },
  {
    id: "INV-004",
    client: "Global Solutions",
    amount: "$4,200.00",
    status: "pending",
    issueDate: "Apr 5, 2024",
    dueDate: "Apr 19, 2024",
  },
  {
    id: "INV-005",
    client: "Creative Studios",
    amount: "$1,900.00",
    status: "overdue",
    issueDate: "Mar 10, 2024",
    dueDate: "Mar 24, 2024",
  },
]

export function InvoicesList() {
  const totalAmount = allInvoices.reduce((sum, inv) => sum + Number.parseFloat(inv.amount.replace(/[$,]/g, "")), 0)
  const paidAmount = allInvoices
    .filter((inv) => inv.status === "paid")
    .reduce((sum, inv) => sum + Number.parseFloat(inv.amount.replace(/[$,]/g, "")), 0)
  const pendingAmount = allInvoices
    .filter((inv) => inv.status === "pending" || inv.status === "overdue")
    .reduce((sum, inv) => sum + Number.parseFloat(inv.amount.replace(/[$,]/g, "")), 0)

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">${totalAmount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">{allInvoices.length} invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-accent">${paidAmount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {allInvoices.filter((inv) => inv.status === "paid").length} invoices
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">${pendingAmount.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground mt-1">
              {allInvoices.filter((inv) => inv.status !== "paid").length} invoices
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Invoices List */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>All Invoices</CardTitle>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Invoice
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {allInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-foreground">{invoice.id}</p>
                    <Badge
                      variant={
                        invoice.status === "paid"
                          ? "default"
                          : invoice.status === "overdue"
                            ? "destructive"
                            : "secondary"
                      }
                      className={
                        invoice.status === "paid"
                          ? "bg-accent text-accent-foreground"
                          : invoice.status === "overdue"
                            ? ""
                            : "bg-primary/10 text-primary"
                      }
                    >
                      {invoice.status === "paid" ? "Paid" : invoice.status === "overdue" ? "Overdue" : "Pending"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{invoice.client}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>Issued: {invoice.issueDate}</span>
                    <span>•</span>
                    <span>Due: {invoice.dueDate}</span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-foreground">{invoice.amount}</p>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/invoice/${invoice.id}`}>
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                  </Link>
                  <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
