"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts"
import {
    Zap,
    Users,
    Building2,
    BarChart3,
    Sparkles,
    Server,
} from "lucide-react"
import Link from "next/link"

export default function SystemAdminDashboardPage() {
    const stats = [
        { label: "Total Companies", value: "24", change: "+3 this month", icon: Building2 },
        { label: "Active Warehouses", value: "156", change: "+12 this month", icon: BarChart3 },
        { label: "System Health", value: "98.5%", change: "Excellent", icon: Zap },
        { label: "Users Online", value: "1,240", change: "+180 today", icon: Users },
    ]

    const chartData = [
        { month: "Jan", orders: 4000, transactions: 2400 },
        { month: "Feb", orders: 3000, transactions: 1398 },
        { month: "Mar", orders: 2000, transactions: 9800 },
        { month: "Apr", orders: 2780, transactions: 3908 },
        { month: "May", orders: 1890, transactions: 4800 },
        { month: "Jun", orders: 2390, transactions: 3800 },
    ]

    const companyData = [
        { name: "Tech Retail", value: 45 },
        { name: "Logistics Co", value: 30 },
        { name: "Manufacturing", value: 20 },
        { name: "E-commerce", value: 5 },
    ]

    const COLORS = ["#8b5cf6", "#06b6d4", "#0ea5e9", "#3b82f6"]

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                        <Card key={i} className="bg-card border-border p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Icon className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                            <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                            <p className="text-xs text-primary font-medium">{stat.change}</p>
                        </Card>
                    )
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border p-6 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Orders & Transactions</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                            <Legend />
                            <Line type="monotone" dataKey="orders" stroke="#8b5cf6" strokeWidth={2} />
                            <Line type="monotone" dataKey="transactions" stroke="#06b6d4" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="bg-card border-border p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Top Companies</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={companyData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, value }) => `${name}: ${value}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {COLORS.map((color, index) => (
                                    <Cell key={`cell-${index}`} fill={color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
            </div>

            {/* AI Insights */}
            <Card className="bg-gradient-to-r from-primary/80 to-primary/50 border-0 p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                        <Sparkles className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary-foreground mb-3">AI Platform Insights</h3>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-foreground/60 mt-1">→</span>
                                <span>
                                    <strong>Growth Forecast:</strong> 15% increase in active warehouses next quarter
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-foreground/60 mt-1">→</span>
                                <span>
                                    <strong>Peak Load Alert:</strong> Expected 2-4 PM EST, scaling preparation recommended
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-foreground/60 mt-1">→</span>
                                <span>
                                    <strong>Churn Alert:</strong> 2 companies showing reduced usage - outreach recommended
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Management Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
                    <Building2 className="w-6 h-6 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Companies</h3>
                    <p className="text-muted-foreground text-sm mb-6">Manage subscriptions & billing</p>
                    <Link href="/system-admin/companies">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Manage</Button>
                    </Link>
                </Card>

                <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
                    <Users className="w-6 h-6 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Users & Access</h3>
                    <p className="text-muted-foreground text-sm mb-6">Monitor activity & security</p>
                    <Link href="/system-admin/users">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Manage</Button>
                    </Link>
                </Card>

                <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
                    <Server className="w-6 h-6 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">System Health</h3>
                    <p className="text-muted-foreground text-sm mb-6">Monitor infrastructure</p>
                    <Link href="/system-admin/system-status">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Status</Button>
                    </Link>
                </Card>
            </div>
        </div>
    )
}
