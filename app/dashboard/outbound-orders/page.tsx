"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Eye } from "lucide-react"

export default function OutboundOrdersPage() {
    const [orders, setOrders] = useState([
        { id: "OUT-001", customer: "RetailCorp", items: 45, status: "Shipped", date: "2024-01-15", value: "$3,200" },
        { id: "OUT-002", customer: "Logistics Plus", items: 120, status: "Picking", date: "2024-01-14", value: "$8,900" },
        { id: "OUT-003", customer: "Distribution Hub", items: 80, status: "Packed", date: "2024-01-13", value: "$5,600" },
        { id: "OUT-004", customer: "Online Store", items: 160, status: "Processing", date: "2024-01-12", value: "$12,300" },
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Shipped":
                return "bg-green-500/10 text-green-500"
            case "Picking":
                return "bg-yellow-500/10 text-yellow-500"
            case "Packed":
                return "bg-blue-500/10 text-blue-500"
            case "Processing":
                return "bg-muted text-muted-foreground"
            default:
                return "bg-muted text-muted-foreground"
        }
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Outbound Orders</h1>

            {/* Header */}
            <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                        placeholder="Search orders..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-background border-border text-foreground"
                    />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <Plus className="w-4 h-4" /> New Order
                </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                    <p className="text-2xl font-bold text-foreground">89</p>
                    <p className="text-xs text-primary mt-2">-3 today</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Shipped</p>
                    <p className="text-2xl font-bold text-green-600">56</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">In Progress</p>
                    <p className="text-2xl font-bold text-yellow-600">28</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Processing</p>
                    <p className="text-2xl font-bold text-blue-600">5</p>
                </Card>
            </div>

            {/* Orders Table */}
            <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Order ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Customer</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Items</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Value</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Date</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {orders.map((order) => (
                                <tr key={order.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.id}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.customer}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-foreground">{order.items}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.value}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <button className="text-primary hover:text-primary/80 font-medium flex items-center gap-1">
                                            <Eye className="w-4 h-4" /> View
                                        </button>
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
