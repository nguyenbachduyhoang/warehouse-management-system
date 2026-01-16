"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, LogOut, AlertTriangle, Box, RefreshCw, Flag } from "lucide-react"

interface QuickActionsPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function QuickActionsPage({ onBack, onLogout }: QuickActionsPageProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">Quick Actions</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-4xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6 bg-card border-border hover:border-red-500/50 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-red-500/10 p-3 rounded-lg group-hover:bg-red-500/20 transition-colors">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-red-500 transition-colors">Report Damaged Stock</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Log damaged items found during picking or putaway. Requires photo evidence.
                                </p>
                                <Button variant="outline" className="mt-4 border-red-500/20 hover:bg-red-500/10 hover:text-red-500">
                                    Report Issue
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card border-border hover:border-blue-500/50 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-500/10 p-3 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                                <Box className="w-8 h-8 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors">Ad-hoc Stock Check</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Perform a quick count for a specific bin or location without a predefined task.
                                </p>
                                <Button variant="outline" className="mt-4 border-blue-500/20 hover:bg-blue-500/10 hover:text-blue-500">
                                    Start Check
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card border-border hover:border-yellow-500/50 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-500/10 p-3 rounded-lg group-hover:bg-yellow-500/20 transition-colors">
                                <RefreshCw className="w-8 h-8 text-yellow-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-yellow-500 transition-colors">Replenishment Request</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Signal that a fast-moving pick face is running low and needs replenishment.
                                </p>
                                <Button variant="outline" className="mt-4 border-yellow-500/20 hover:bg-yellow-500/10 hover:text-yellow-500">
                                    Request Stock
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card border-border hover:border-purple-500/50 transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-purple-500/10 p-3 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                <Flag className="w-8 h-8 text-purple-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground group-hover:text-purple-500 transition-colors">Raise Safety Concern</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Report spills, blocked aisles, or equipment malfunction immediately.
                                </p>
                                <Button variant="outline" className="mt-4 border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-500">
                                    Log Incident
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
