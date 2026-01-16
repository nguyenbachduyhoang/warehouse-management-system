"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Shield, Lock, Key, Globe } from "lucide-react"

export default function SecurityPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Security Settings</h1>

            <div className="space-y-6">
                <Card className="p-6 bg-card border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground">Authentication Policy</h2>
                            <p className="text-sm text-muted-foreground">Manage user access and password requirements</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-foreground">Two-Factor Authentication (2FA)</h3>
                                <p className="text-sm text-muted-foreground">Require 2FA for all administrator accounts</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-foreground">Password Rotation</h3>
                                <p className="text-sm text-muted-foreground">Force password reset every 90 days</p>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-medium text-foreground">Session Timeout</h3>
                                <p className="text-sm text-muted-foreground">Auto-logout after 15 minutes of inactivity</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-primary/10 p-3 rounded-lg">
                            <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-foreground">Network Security</h2>
                            <p className="text-sm text-muted-foreground">IP whitelisting and access control</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            <Lock className="w-4 h-4 mr-2" /> Manage IP Whitelist
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Key className="w-4 h-4 mr-2" /> Manage API Keys
                        </Button>
                    </div>

                </Card>
            </div>
        </div>
    )
}
