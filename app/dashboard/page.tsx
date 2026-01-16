"use client"

import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
    Package,
    Truck,
    BarChart3,
    Brain,
    Sparkles,
    AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function DashboardPage() {
    const stats = [
        { label: "Total Stock", value: "45,230 units", change: "+5.2%", icon: Package },
        { label: "Inbound Orders", value: "128", change: "+12 today", icon: Truck },
        { label: "Outbound Orders", value: "89", change: "-3 today", icon: Package },
        { label: "Utilization", value: "73%", change: "Optimal", icon: BarChart3 },
    ]

    const inventoryData = [
        { date: "Mon", inbound: 240, outbound: 220, stock: 22400 },
        { date: "Tue", inbound: 139, outbound: 200, stock: 22339 },
        { date: "Wed", inbound: 200, outbound: 220, stock: 22319 },
        { date: "Thu", inbound: 220, outbound: 250, stock: 22289 },
        { date: "Fri", inbound: 250, outbound: 210, stock: 22329 },
        { date: "Sat", inbound: 210, outbound: 120, stock: 22419 },
        { date: "Sun", inbound: 180, outbound: 200, stock: 22399 },
    ]

    const lowStockItems = [
        { sku: "SKU-001", product: "Electronics Pack A", stock: 45, reorder: 100 },
        { sku: "SKU-047", product: "Hardware Kit B", stock: 23, reorder: 75 },
        { sku: "SKU-103", product: "Connector Set", stock: 12, reorder: 50 },
    ]

    return (
        <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => {
                    const IconComponent = stat.icon
                    return (
                        <Card key={i} className="bg-card border-border p-6">
                            <div className="flex items-start justify-between mb-2">
                                <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                                    <IconComponent className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
                            <p className="text-xs text-primary">{stat.change}</p>
                        </Card>
                    )
                })}
            </div>

            {/* Charts and Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Inventory Chart */}
                <Card className="lg:col-span-2 bg-card border-border p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Inventory Flow</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={inventoryData}>
                            <defs>
                                <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#39C6C6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#39C6C6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                            <XAxis dataKey="date" stroke="var(--muted-foreground)" />
                            <YAxis stroke="var(--muted-foreground)" />
                            <Tooltip
                                contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }}
                            />
                            <Area type="monotone" dataKey="stock" stroke="#39C6C6" fillOpacity={1} fill="url(#colorInbound)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </Card>

                {/* AI Recommendations Widget */}
                <Card className="bg-card border-border p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Brain className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-muted p-3 rounded-lg border border-border">
                            <p className="text-xs text-muted-foreground mb-1">Stock Alert</p>
                            <p className="text-sm text-foreground">Low stock on SKU-001 detected</p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg border border-border">
                            <p className="text-xs text-muted-foreground mb-1">Optimization</p>
                            <p className="text-sm text-foreground">40% faster picking route available</p>
                        </div>
                        <div className="bg-muted p-3 rounded-lg border border-border">
                            <p className="text-xs text-muted-foreground mb-1">Forecast</p>
                            <p className="text-sm text-foreground">25% demand increase next week</p>
                        </div>
                    </div>
                    <Button
                        asChild
                        className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        <Link href="/dashboard/ai-recommendations">
                            <Sparkles className="w-4 h-4 mr-2" />
                            View All Insights
                        </Link>
                    </Button>
                </Card>
            </div>

            {/* Low Stock Items Table */}
            <Card className="bg-card border-border overflow-hidden">
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-warning" />
                        <h3 className="text-lg font-semibold text-foreground">Low Stock Alerts</h3>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">SKU</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Product</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Current Stock</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Reorder Level</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {lowStockItems.map((item) => (
                                <tr key={item.sku} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-foreground">{item.sku}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{item.product}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className="bg-warning/20 text-warning px-3 py-1 rounded-full">{item.stock}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{item.reorder}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-primary hover:text-primary/80 font-medium">Create PO</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    )
}
