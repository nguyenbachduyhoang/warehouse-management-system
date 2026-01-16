"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Package } from "lucide-react"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function AnalyticsPage() {
    const data = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 500 },
        { name: 'Jun', value: 700 },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">System Analytics</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Transactions</h3>
                    <p className="text-2xl font-bold text-foreground">2.4M</p>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +12.5% from last month
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Users</h3>
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                        <Users className="w-4 h-4 mr-1" />
                        +5.2% from last month
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Data Processed</h3>
                    <p className="text-2xl font-bold text-foreground">450 TB</p>
                    <div className="flex items-center text-blue-500 text-sm mt-1">
                        <Package className="w-4 h-4 mr-1" />
                        +8.1% from last month
                    </div>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Traffic Overview</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} />
                            <Line type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="p-6 bg-card border-border">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Resource Usage</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none" }} />
                            <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>
            </div>
        </div>
    )
}
