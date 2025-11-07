import { InvoiceTemplate } from "@/components/invoice-template"
import { Button } from "@/components/ui/button"
import { Download, Printer, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function InvoicePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header Actions */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/dashboard">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Invoice */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <InvoiceTemplate invoiceId={params.id} />
      </div>
    </div>
  )
}
