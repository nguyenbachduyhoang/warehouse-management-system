"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Settings, Save } from "lucide-react"

export default function ConfigurationPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">System Configuration</h1>

            <Card className="p-6 bg-card border-border mb-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-lg">
                        <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-foreground">General Settings</h2>
                        <p className="text-sm text-muted-foreground">Configure global system parameters</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="sys-name">System Name</Label>
                        <Input id="sys-name" defaultValue="Storix WMS Platform" className="bg-background" />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="timezone">Default Timezone</Label>
                        <Select defaultValue="utc">
                            <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                                <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                                <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="maint-mode">Maintenance Mode</Label>
                        <Select defaultValue="disabled">
                            <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="disabled">Disabled (System Active)</SelectItem>
                                <SelectItem value="scheduled">Scheduled</SelectItem>
                                <SelectItem value="active">Active (System Offline)</SelectItem>
                            </SelectContent>
                        </Select>
                        <p className="text-xs text-muted-foreground">Enabling maintenance mode will prevent users from logging in.</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Save className="w-4 h-4 mr-2" /> Save Changes
                    </Button>
                </div>
            </Card>
        </div>
    )
}
