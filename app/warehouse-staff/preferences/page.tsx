"use client"

import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Bell, Smartphone, Moon } from "lucide-react"

export default function PreferencesPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">User Preferences</h1>

            <Card className="p-6 bg-card border-border max-w-2xl">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <Label className="text-base">Push Notifications</Label>
                                <p className="text-sm text-muted-foreground">Receive alerts for new tasks</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Smartphone className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <Label className="text-base">Vibration Feedback</Label>
                                <p className="text-sm text-muted-foreground">Vibrate on scan confirmation</p>
                            </div>
                        </div>
                        <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Moon className="w-5 h-5 text-muted-foreground" />
                            <div>
                                <Label className="text-base">High Contrast Mode</Label>
                                <p className="text-sm text-muted-foreground">Increase contrast for better visibility</p>
                            </div>
                        </div>
                        <Switch />
                    </div>
                </div>
            </Card>
        </div>
    )
}
