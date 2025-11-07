"use client"

import Link from "next/link"
import { MoreVertical } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ClientCardProps {
  client: {
    id: string
    name: string
    project: string
    status: string
    lastUpdate: string
    avatar: string
    progress: number
  }
}

const statusConfig = {
  active: { label: "Active", variant: "default" as const, color: "bg-accent text-accent-foreground" },
  review: { label: "In Review", variant: "secondary" as const, color: "bg-secondary text-secondary-foreground" },
  pending: { label: "Pending", variant: "outline" as const, color: "bg-muted text-muted-foreground" },
}

export function ClientCard({ client }: ClientCardProps) {
  const status = statusConfig[client.status as keyof typeof statusConfig] || statusConfig.active

  return (
    <Link href={`/client/${client.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={client.avatar || "/placeholder.svg"} alt={client.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {client.name}
              </h3>
              <p className="text-sm text-muted-foreground">{client.project}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.preventDefault()}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Send Message</DropdownMenuItem>
              <DropdownMenuItem>Edit Client</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Archive</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{client.progress}%</span>
            </div>
            <Progress value={client.progress} className="h-2" />
          </div>

          <div className="flex items-center justify-between">
            <Badge variant={status.variant} className={status.color}>
              {status.label}
            </Badge>
            <span className="text-xs text-muted-foreground">Updated {client.lastUpdate}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
