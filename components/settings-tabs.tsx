"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SettingsProfile } from "@/components/settings-profile"
import { SettingsBranding } from "@/components/settings-branding"
import { SettingsBilling } from "@/components/settings-billing"

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full justify-start mb-8">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="branding">Branding</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <SettingsProfile />
      </TabsContent>

      <TabsContent value="branding">
        <SettingsBranding />
      </TabsContent>

      <TabsContent value="billing">
        <SettingsBilling />
      </TabsContent>
    </Tabs>
  )
}
