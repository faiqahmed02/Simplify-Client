"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

const messages = [
  {
    id: 1,
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Hi! Just wanted to share the latest design mockups with you. Let me know what you think!",
    timestamp: "10:30 AM",
    isOwn: true,
  },
  {
    id: 2,
    sender: "Acme Corp",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Thanks for sending these over! They look great. Just one question about the color scheme on the homepage.",
    timestamp: "11:15 AM",
    isOwn: false,
  },
  {
    id: 3,
    sender: "Acme Corp",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Could we try a slightly darker shade of blue for the primary buttons?",
    timestamp: "11:16 AM",
    isOwn: false,
  },
  {
    id: 4,
    sender: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "I'll create a few variations for you to review. Should have them ready by tomorrow.",
    timestamp: "2:45 PM",
    isOwn: true,
  },
]

export function ClientMessages() {
  const [message, setMessage] = useState("")

  return (
    <div className="flex flex-col h-[600px]">
      {/* Messages Area */}
      <Card className="flex-1 overflow-y-auto mb-4">
        <div className="p-6 space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.isOwn ? "flex-row-reverse" : ""}`}>
              <Avatar className="h-10 w-10">
                <AvatarImage src={msg.avatar || "/placeholder.svg"} alt={msg.sender} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {msg.sender
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className={`flex flex-col ${msg.isOwn ? "items-end" : "items-start"} max-w-[70%]`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{msg.sender}</span>
                  <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                </div>
                <div
                  className={`p-4 rounded-2xl ${
                    msg.isOwn
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-muted text-foreground rounded-tl-sm"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Message Input */}
      <Card>
        <div className="p-4">
          <div className="flex gap-3">
            <Textarea
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[60px] max-h-[120px] resize-none"
            />
            <Button size="icon" className="h-[60px] w-[60px] shrink-0">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
