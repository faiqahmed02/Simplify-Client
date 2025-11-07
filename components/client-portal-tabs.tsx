"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientOverview } from "@/components/client-overview"
import { ClientFiles } from "@/components/client-files"
import { ClientMessages } from "@/components/client-messages"
import { ClientInvoices } from "@/components/client-invoices"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface ClientPortalTabsProps {
  clientId: string
}

// Mock client data
const clientData = {
  name: "Acme Corporation",
  project: "Website Redesign",
  status: "active",
  avatar: "/placeholder.svg?height=64&width=64",
}

export function ClientPortalTabs({ clientId }: ClientPortalTabsProps) {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col h-full">
      {/* Client Header */}
      <div className="border-b border-border bg-card px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={clientData.avatar || "/placeholder.svg"} alt={clientData.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                {clientData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground mb-1">{clientData.name}</h1>
              <p className="text-muted-foreground">{clientData.project}</p>
            </div>
            <Badge variant="default" className="bg-accent text-accent-foreground">
              Active
            </Badge>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start border-b border-border bg-transparent rounded-none h-auto p-0">
              <TabsTrigger
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="files"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Files
              </TabsTrigger>
              <TabsTrigger
                value="messages"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Messages
              </TabsTrigger>
              <TabsTrigger
                value="invoices"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Invoices
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab}>
            <TabsContent value="overview" className="mt-0">
              <ClientOverview />
            </TabsContent>
            <TabsContent value="files" className="mt-0">
              <ClientFiles />
            </TabsContent>
            <TabsContent value="messages" className="mt-0">
              <ClientMessages />
            </TabsContent>
            <TabsContent value="invoices" className="mt-0">
              <ClientInvoices />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
