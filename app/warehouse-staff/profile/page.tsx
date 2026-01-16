"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Bell, Shield } from "lucide-react"

export default function ProfilePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">My Profile</h1>

            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <UserCircle className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Alex Staff</h2>
                <p className="text-muted-foreground">Warehouse Operator</p>
                <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-muted rounded-full">
                    <Shield className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-medium">Staff ID: WS-2024-88</span>
                </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label>Full Name</Label>
                            <Input defaultValue="Alex Staff" readOnly className="bg-muted text-muted-foreground" />
                        </div>
                        <div className="grid gap-2">
                            <Label>Email</Label>
                            <Input defaultValue="alex.staff@storix.com" readOnly className="bg-muted text-muted-foreground" />
                        </div>
                    </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">Preferences</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <Bell className="w-5 h-5 text-foreground" />
                                <div>
                                    <p className="font-medium text-foreground">Task Notifications</p>
                                    <p className="text-xs text-muted-foreground">Receive alerts for new assignments</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm">Enabled</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
