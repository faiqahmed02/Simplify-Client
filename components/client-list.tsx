"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ClientCard } from "@/components/client-card"

const clients = [
  {
    id: "1",
    name: "Acme Corporation",
    project: "Website Redesign",
    status: "active",
    lastUpdate: "2 hours ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 75,
  },
  {
    id: "2",
    name: "TechStart Inc",
    project: "Mobile App Development",
    status: "active",
    lastUpdate: "1 day ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 45,
  },
  {
    id: "3",
    name: "Global Solutions",
    project: "Brand Identity",
    status: "review",
    lastUpdate: "3 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 90,
  },
  {
    id: "4",
    name: "Creative Studios",
    project: "SEO Optimization",
    status: "active",
    lastUpdate: "5 days ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 60,
  },
  {
    id: "5",
    name: "Digital Ventures",
    project: "E-commerce Platform",
    status: "pending",
    lastUpdate: "1 week ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 20,
  },
  {
    id: "6",
    name: "Innovation Labs",
    project: "API Integration",
    status: "active",
    lastUpdate: "2 weeks ago",
    avatar: "/placeholder.svg?height=40&width=40",
    progress: 85,
  },
]

export function ClientList() {
  return (
    <div>
      <div className="flex justify-end mb-6">
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </div>
    </div>
  )
}
