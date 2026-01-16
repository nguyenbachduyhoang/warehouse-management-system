"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Save, Bell, Zap } from "lucide-react"
import SectionLayout from "@/components/layouts/section-layout"

interface SettingsPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function SettingsPage({ onBack, onLogout }: SettingsPageProps) {
  return (
    <SectionLayout title="Settings" onBack={onBack} onLogout={onLogout}>
      {/* Company Settings */}
      <Card className="bg-card border-border p-6 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Company Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
            <Input defaultValue="Acme Corp" className="border-border bg-background text-foreground" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Warehouse Name</label>
            <Input defaultValue="Main Warehouse" className="border-border bg-background text-foreground" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Contact Email</label>
            <Input defaultValue="admin@acme.com" className="border-border bg-background text-foreground" />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Changes
          </Button>
        </div>
      </Card>

      {/* AI Optimization Settings */}
      <Card className="bg-card border-border p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">AI Optimization</h3>
        </div>
        <div className="space-y-4">
          <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <div>
              <p className="font-medium text-foreground">Path Optimization</p>
              <p className="text-sm text-muted-foreground">Enable AI-powered picking route optimization</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <div>
              <p className="font-medium text-foreground">Demand Forecasting</p>
              <p className="text-sm text-muted-foreground">Enable inventory demand predictions</p>
            </div>
          </label>
          <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-muted transition-colors">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <div>
              <p className="font-medium text-foreground">Storage Recommendations</p>
              <p className="text-sm text-muted-foreground">Get smart placement suggestions</p>
            </div>
          </label>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-foreground">Low stock alerts</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-foreground">Order completion notifications</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="w-4 h-4" />
            <span className="text-sm text-foreground">Staff performance updates</span>
          </label>
        </div>
      </Card>
    </SectionLayout>
  )
}
