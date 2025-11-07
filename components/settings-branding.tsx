"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, Palette } from "lucide-react"

const presetColors = [
  { name: "Blue", value: "#2563eb" },
  { name: "Green", value: "#10b981" },
  { name: "Purple", value: "#8b5cf6" },
  { name: "Pink", value: "#ec4899" },
  { name: "Orange", value: "#f97316" },
  { name: "Red", value: "#ef4444" },
]

export function SettingsBranding() {
  const [selectedColor, setSelectedColor] = useState("#2563eb")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-6">
      {/* Logo Upload */}
      <Card>
        <CardHeader>
          <CardTitle>Company Logo</CardTitle>
          <CardDescription>Upload your logo to personalize invoices and client portals</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-border rounded-lg bg-muted/50">
            <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-foreground mb-2">Current Logo</p>
            <Button className="gap-2 mt-4">
              <Upload className="h-4 w-4" />
              Upload New Logo
            </Button>
            <p className="text-xs text-muted-foreground mt-2">
              PNG, SVG or JPG. Max size 1MB. Recommended size: 200x200px
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Brand Colors */}
      <Card>
        <CardHeader>
          <CardTitle>Brand Color</CardTitle>
          <CardDescription>Choose a primary color for your brand</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label>Color Presets</Label>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {presetColors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setSelectedColor(color.value)}
                    className={`group relative h-16 rounded-lg border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-foreground scale-105 shadow-md"
                        : "border-border hover:border-muted-foreground"
                    }`}
                    style={{ backgroundColor: color.value }}
                  >
                    {selectedColor === color.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white drop-shadow-md"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                    <span className="sr-only">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customColor">Custom Color</Label>
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Input
                    id="customColor"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    placeholder="#000000"
                  />
                  <Palette className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
                <div
                  className="w-12 h-10 rounded-lg border-2 border-border"
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
              <p className="text-xs text-muted-foreground">Enter a hex color code (e.g., #2563eb)</p>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" type="button">
                Reset
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Invoice Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Invoice Customization</CardTitle>
          <CardDescription>Customize how your invoices appear</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="invoicePrefix">Invoice Number Prefix</Label>
              <Input id="invoicePrefix" defaultValue="INV-" placeholder="e.g., INV-" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentTerms">Default Payment Terms (days)</Label>
              <Input id="paymentTerms" type="number" defaultValue="15" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="taxRate">Default Tax Rate (%)</Label>
              <Input id="taxRate" type="number" step="0.01" defaultValue="0" placeholder="0.00" />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button type="submit">Save Settings</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
