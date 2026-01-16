"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, LogOut, Brain, Lightbulb, Zap, ArrowRight } from "lucide-react"

interface AISuggestionsPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function AISuggestionsPage({ onBack, onLogout }: AISuggestionsPageProps) {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">AI Smart Tips</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-4xl mx-auto w-full">
                <div className="mb-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl flex items-start gap-4">
                    <div className="bg-purple-500/20 p-3 rounded-full">
                        <Brain className="w-8 h-8 text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Personalized Insights</h2>
                        <p className="text-muted-foreground">
                            Based on your recent activity, our AI has identified a few ways you can improve your efficiency and reduce fatigue.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <Card className="p-6 bg-card border-border hover:border-primary transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-yellow-500/10 p-2 rounded-lg">
                                <Lightbulb className="w-6 h-6 text-yellow-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Optimized Batch Picking</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    You often revisit Zone A. Try batching orders #1023 and #1029 together to save 5 minutes of travel time.
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                    </Card>

                    <Card className="p-6 bg-card border-border hover:border-primary transition-colors cursor-pointer group">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-lg">
                                <Zap className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">Fast Path Recommendation</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    During peak hours (2 PM - 4 PM), use Aisle 4B instead of the main corridor to avoid forklift traffic.
                                </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                    </Card>
                </div>
            </main>
        </div>
    )
}
