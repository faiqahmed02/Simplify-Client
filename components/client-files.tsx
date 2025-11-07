"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, ImageIcon, Download, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

const files = [
  {
    id: 1,
    name: "homepage-mockup-v3.fig",
    type: "design",
    size: "2.4 MB",
    uploadedBy: "John Doe",
    uploadDate: "Mar 20, 2024",
    version: "v3",
  },
  {
    id: 2,
    name: "brand-guidelines.pdf",
    type: "document",
    size: "1.8 MB",
    uploadedBy: "Acme Corp",
    uploadDate: "Mar 15, 2024",
    version: "v1",
  },
  {
    id: 3,
    name: "logo-final.svg",
    type: "image",
    size: "124 KB",
    uploadedBy: "John Doe",
    uploadDate: "Mar 18, 2024",
    version: "v2",
  },
  {
    id: 4,
    name: "content-strategy.docx",
    type: "document",
    size: "856 KB",
    uploadedBy: "Acme Corp",
    uploadDate: "Mar 22, 2024",
    version: "v1",
  },
]

export function ClientFiles() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="space-y-6">
      {/* Upload Area */}
      <Card
        className={`border-2 border-dashed transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-border"
        }`}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
        }}
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Upload className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
          <p className="text-sm text-muted-foreground mb-4">Drag and drop files here, or click to browse</p>
          <Button>Choose Files</Button>
        </CardContent>
      </Card>

      {/* Files List */}
      <Card>
        <CardHeader>
          <CardTitle>All Files</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    file.type === "design"
                      ? "bg-purple-100 text-purple-600"
                      : file.type === "image"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {file.type === "image" ? <ImageIcon className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground truncate">{file.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-muted-foreground">{file.size}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">By {file.uploadedBy}</p>
                    <span className="text-xs text-muted-foreground">•</span>
                    <p className="text-xs text-muted-foreground">{file.uploadDate}</p>
                  </div>
                </div>

                <Badge variant="secondary" className="text-xs">
                  {file.version}
                </Badge>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
