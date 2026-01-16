"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, AlertTriangle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function AnalyticsPage() {
    const pickingData = [
        { name: 'Mon', value: 120 },
        { name: 'Tue', value: 150 },
        { name: 'Wed', value: 180 },
        { name: 'Thu', value: 140 },
        { name: 'Fri', value: 200 },
        { name: 'Sat', value: 100 },
        { name: 'Sun', value: 80 },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Warehouse Analytics</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Inbound</h3>
                    <p className="text-2xl font-bold text-foreground">1,240</p>
                    <div className="flex items-center text-primary text-sm mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +5.2%
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Outbound</h3>
                    <p className="text-2xl font-bold text-foreground">980</p>
                    <div className="flex items-center text-primary text-sm mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +3.8%
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg Picking Time</h3>
                    <p className="text-2xl font-bold text-foreground">4m 12s</p>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        -12% (Improved)
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Stock Accuracy</h3>
                    <p className="text-2xl font-bold text-foreground">99.8%</p>
                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                        <AlertTriangle className="w-4 h-4 mr-1" />
                        0.2% Variance
                    </div>
                </Card>
            </div>

            <Card className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">Daily Picking Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={pickingData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                        <XAxis dataKey="name" stroke="var(--muted-foreground)" />
                        <YAxis stroke="var(--muted-foreground)" />
                        <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} cursor={{ fill: 'var(--muted)' }} />
                        <Bar dataKey="value" fill="#14b8a6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        </div>
    )
}
