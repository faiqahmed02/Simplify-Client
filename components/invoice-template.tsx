import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface InvoiceTemplateProps {
  invoiceId: string
}

const invoiceData = {
  id: "INV-003",
  status: "pending",
  issueDate: "April 1, 2024",
  dueDate: "April 15, 2024",
  freelancer: {
    name: "John Doe",
    company: "JD Design Studio",
    email: "john@jddesign.com",
    phone: "+1 (555) 123-4567",
    address: "123 Creative Street, San Francisco, CA 94102",
  },
  client: {
    name: "Acme Corporation",
    contactPerson: "Jane Smith",
    email: "jane@acmecorp.com",
    phone: "+1 (555) 987-6543",
    address: "456 Business Ave, New York, NY 10001",
  },
  items: [
    {
      description: "Website Design - Homepage",
      quantity: 1,
      rate: 1500,
      amount: 1500,
    },
    {
      description: "Website Design - About & Contact Pages",
      quantity: 2,
      rate: 800,
      amount: 1600,
    },
    {
      description: "Responsive Development",
      quantity: 1,
      rate: 1200,
      amount: 1200,
    },
    {
      description: "SEO Optimization",
      quantity: 1,
      rate: 500,
      amount: 500,
    },
    {
      description: "Project Management & Revisions",
      quantity: 8,
      rate: 100,
      amount: 800,
    },
  ],
  subtotal: 5600,
  tax: 0,
  total: 5600,
  notes:
    "Payment is due within 15 days of invoice date. Please make payment to the bank account details provided below.",
  paymentDetails: {
    bankName: "Chase Bank",
    accountName: "JD Design Studio LLC",
    accountNumber: "****1234",
    routingNumber: "****5678",
  },
}

export function InvoiceTemplate({ invoiceId }: InvoiceTemplateProps) {
  return (
    <Card className="p-8 lg:p-12 bg-card">
      {/* Header with Logo and Invoice Info */}
      <div className="flex items-start justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
              <svg className="w-6 h-6 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-foreground">ClientDock</h2>
          </div>
          <p className="text-sm text-muted-foreground">{invoiceData.freelancer.company}</p>
        </div>
        <div className="text-right">
          <h1 className="text-4xl font-bold text-foreground mb-2">INVOICE</h1>
          <p className="text-lg font-semibold text-foreground">{invoiceData.id}</p>
          <Badge
            variant="secondary"
            className={
              invoiceData.status === "paid"
                ? "bg-accent text-accent-foreground mt-2"
                : "bg-primary/10 text-primary mt-2"
            }
          >
            {invoiceData.status === "paid" ? "Paid" : "Pending Payment"}
          </Badge>
        </div>
      </div>

      {/* Freelancer and Client Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">From</h3>
          <p className="font-semibold text-foreground mb-1">{invoiceData.freelancer.name}</p>
          <p className="text-sm text-muted-foreground">{invoiceData.freelancer.company}</p>
          <p className="text-sm text-muted-foreground">{invoiceData.freelancer.address}</p>
          <p className="text-sm text-muted-foreground mt-2">{invoiceData.freelancer.email}</p>
          <p className="text-sm text-muted-foreground">{invoiceData.freelancer.phone}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Bill To</h3>
          <p className="font-semibold text-foreground mb-1">{invoiceData.client.name}</p>
          <p className="text-sm text-muted-foreground">Attn: {invoiceData.client.contactPerson}</p>
          <p className="text-sm text-muted-foreground">{invoiceData.client.address}</p>
          <p className="text-sm text-muted-foreground mt-2">{invoiceData.client.email}</p>
          <p className="text-sm text-muted-foreground">{invoiceData.client.phone}</p>
        </div>
      </div>

      {/* Invoice Dates */}
      <div className="flex gap-8 mb-8 p-4 bg-muted/50 rounded-lg">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Issue Date</p>
          <p className="font-semibold text-foreground">{invoiceData.issueDate}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Due Date</p>
          <p className="font-semibold text-foreground">{invoiceData.dueDate}</p>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Line Items */}
      <div className="mb-8">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Description
              </th>
              <th className="text-right py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Qty
              </th>
              <th className="text-right py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Rate
              </th>
              <th className="text-right py-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b border-border last:border-0">
                <td className="py-4 text-sm text-foreground">{item.description}</td>
                <td className="py-4 text-sm text-foreground text-right">{item.quantity}</td>
                <td className="py-4 text-sm text-foreground text-right">${item.rate.toFixed(2)}</td>
                <td className="py-4 text-sm font-medium text-foreground text-right">${item.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex justify-end mb-8">
        <div className="w-full max-w-xs space-y-3">
          <div className="flex justify-between py-2">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-sm font-medium text-foreground">${invoiceData.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-muted-foreground">Tax (0%)</span>
            <span className="text-sm font-medium text-foreground">${invoiceData.tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between py-3 bg-primary/5 px-4 rounded-lg">
            <span className="text-lg font-semibold text-foreground">Total Due</span>
            <span className="text-2xl font-bold text-primary">${invoiceData.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Button (if pending) */}
      {invoiceData.status === "pending" && (
        <div className="mb-8">
          <Button size="lg" className="w-full md:w-auto gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Pay Now
          </Button>
        </div>
      )}

      <Separator className="my-8" />

      {/* Notes and Payment Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Notes</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{invoiceData.notes}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Payment Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bank Name:</span>
              <span className="font-medium text-foreground">{invoiceData.paymentDetails.bankName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Name:</span>
              <span className="font-medium text-foreground">{invoiceData.paymentDetails.accountName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Account Number:</span>
              <span className="font-medium text-foreground">{invoiceData.paymentDetails.accountNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Routing Number:</span>
              <span className="font-medium text-foreground">{invoiceData.paymentDetails.routingNumber}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          Thank you for your business! For any questions, contact {invoiceData.freelancer.email}
        </p>
      </div>
    </Card>
  )
}
