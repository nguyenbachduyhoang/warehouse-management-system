"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, LogOut, TrendingUp, Sparkles, Calendar } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface InventoryForecastPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function InventoryForecastPage({ onBack, onLogout }: InventoryForecastPageProps) {
    const forecastData = [
        { date: 'Week 1', actual: 400, forecast: 420 },
        { date: 'Week 2', actual: 450, forecast: 460 },
        { date: 'Week 3', actual: 410, forecast: 430 },
        { date: 'Week 4', actual: null, forecast: 480 },
        { date: 'Week 5', actual: null, forecast: 510 },
        { date: 'Week 6', actual: null, forecast: 530 },
    ]

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">AI Inventory Forecast</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 mb-8 flex items-start gap-4">
                    <div className="bg-primary/20 p-3 rounded-lg">
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground mb-2">Demand Prediction</h2>
                        <p className="text-muted-foreground">
                            Based on historical data and seasonal trends, AI predicts a <strong>15% increase</strong> in demand for the upcoming month.
                            We recommend increasing stock levels for 'Electronics' category.
                        </p>
                    </div>
                </div>

                <Card className="p-6 bg-card border-border mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-foreground">6-Week Demand Forecast</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            Next 6 Weeks
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={forecastData}>
                            <defs>
                                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                            <YAxis stroke="var(--muted-foreground)" />
                            <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
                            <Area type="monotone" dataKey="forecast" stroke="var(--primary)" fillOpacity={1} fill="url(#colorForecast)" name="Forecast" strokeDasharray="5 5" />
                            <Area type="monotone" dataKey="actual" stroke="var(--foreground)" fillOpacity={1} fill="url(#colorActual)" name="Actual Sales" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>
            </main>
        </div>
    )
}
