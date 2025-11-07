import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Eye, Download } from "lucide-react"
import Link from "next/link"

const invoices = [
  {
    id: "INV-001",
    amount: "$3,500.00",
    status: "paid",
    issueDate: "Mar 1, 2024",
    dueDate: "Mar 15, 2024",
    paidDate: "Mar 12, 2024",
  },
  {
    id: "INV-002",
    amount: "$2,800.00",
    status: "paid",
    issueDate: "Mar 15, 2024",
    dueDate: "Mar 29, 2024",
    paidDate: "Mar 28, 2024",
  },
  {
    id: "INV-003",
    amount: "$4,200.00",
    status: "pending",
    issueDate: "Apr 1, 2024",
    dueDate: "Apr 15, 2024",
    paidDate: null,
  },
]

export function ClientInvoices() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Invoiced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-foreground">$10,500</p>
            <p className="text-xs text-muted-foreground mt-1">3 invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-accent">$6,300</p>
            <p className="text-xs text-muted-foreground mt-1">2 invoices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">$4,200</p>
            <p className="text-xs text-muted-foreground mt-1">1 invoice</p>
          </CardContent>
        </Card>
      </div>

      {/* Invoices List */}
      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-semibold text-foreground">{invoice.id}</p>
                    <Badge
                      variant={invoice.status === "paid" ? "default" : "secondary"}
                      className={
                        invoice.status === "paid" ? "bg-accent text-accent-foreground" : "bg-primary/10 text-primary"
                      }
                    >
                      {invoice.status === "paid" ? "Paid" : "Pending"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Issued: {invoice.issueDate}</span>
                    <span>•</span>
                    <span>Due: {invoice.dueDate}</span>
                    {invoice.paidDate && (
                      <>
                        <span>•</span>
                        <span>Paid: {invoice.paidDate}</span>
                      </>
                    )}
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
                  {invoice.status === "pending" && (
                    <Button size="sm" className="gap-2">
                      Pay Now
                    </Button>
                  )}
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
