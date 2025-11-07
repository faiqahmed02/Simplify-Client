import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Download } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Up to 5 clients", "Basic invoicing", "File sharing", "Email support"],
    current: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    features: [
      "Unlimited clients",
      "Advanced invoicing",
      "Priority file sharing",
      "Custom branding",
      "Analytics dashboard",
      "Priority support",
    ],
    current: false,
    popular: true,
  },
  {
    name: "Business",
    price: "$79",
    period: "per month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Advanced analytics",
      "API access",
      "White-label option",
      "Dedicated account manager",
    ],
    current: false,
  },
]

const billingHistory = [
  {
    date: "Mar 1, 2024",
    description: "Pro Plan - Monthly",
    amount: "$29.00",
    status: "paid",
    invoiceUrl: "#",
  },
  {
    date: "Feb 1, 2024",
    description: "Pro Plan - Monthly",
    amount: "$29.00",
    status: "paid",
    invoiceUrl: "#",
  },
  {
    date: "Jan 1, 2024",
    description: "Pro Plan - Monthly",
    amount: "$29.00",
    status: "paid",
    invoiceUrl: "#",
  },
]

export function SettingsBilling() {
  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>You are currently on the Free plan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-semibold text-lg text-foreground mb-1">Free Plan</p>
              <p className="text-sm text-muted-foreground">Perfect for getting started</p>
            </div>
            <Badge variant="secondary">Current Plan</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Plans */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Choose a Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.current ? "outline" : "default"} disabled={plan.current}>
                  {plan.current ? "Current Plan" : "Upgrade Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment Method */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <CardDescription>Manage your payment methods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 border border-border rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-foreground">No payment method on file</p>
              <p className="text-sm text-muted-foreground">Add a payment method to upgrade</p>
            </div>
            <Button variant="outline">Add Card</Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View and download past invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {billingHistory.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.description}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-foreground">{item.amount}</p>
                    <Badge variant="default" className="bg-accent text-accent-foreground">
                      {item.status}
                    </Badge>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {index < billingHistory.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
