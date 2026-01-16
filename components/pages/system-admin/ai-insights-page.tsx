"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, LogOut, Sparkles, Brain, Zap, TrendingUp, AlertTriangle } from "lucide-react"

interface AIInsightsPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function AIInsightsPage({ onBack, onLogout }: AIInsightsPageProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">AI Platform Insights</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/20">
                    <div className="flex items-start gap-4">
                        <div className="bg-purple-500/20 p-3 rounded-lg">
                            <Sparkles className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-2">Platform Intelligence Summary</h2>
                            <p className="text-purple-200">
                                AI analysis indicates a 15% increase in cross-company inventory efficiency.
                                Predictive scaling is currently active handling 2.4M transactions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="p-6 bg-card border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Brain className="w-5 h-5 text-blue-500" />
                            <h3 className="font-semibold text-foreground">Global Stock Predictions</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-foreground">Electronics Sector</span>
                                    <span className="text-xs text-green-500">+12% Demand</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-foreground">Logistics Capacity</span>
                                    <span className="text-xs text-yellow-500">Near Limit</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 bg-card border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Zap className="w-5 h-5 text-yellow-500" />
                            <h3 className="font-semibold text-foreground">Optimization Opportunities</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <TrendingUp className="w-4 h-4 text-green-500 mt-1" />
                                <div>
                                    <p className="font-medium text-foreground text-sm">Route Optimization Available</p>
                                    <p className="text-xs text-muted-foreground">3 companies can improve picking time by ~12%</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                                <div>
                                    <p className="font-medium text-foreground text-sm">Storage Anomaly Detected</p>
                                    <p className="text-xs text-muted-foreground">Unusual storage patterns in Warehouse B-12</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
