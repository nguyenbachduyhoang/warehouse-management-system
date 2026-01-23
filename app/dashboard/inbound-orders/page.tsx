"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { AddInboundModal } from "@/components/modals/add-inbound-modal"

export default function InboundOrdersPage() {
    const [orders, setOrders] = useState([
        {
            id: "INB-001",
            supplier: "Tech Supplies Ltd",
            items: 250,
            status: "Received",
            date: "2024-01-15",
            value: "$8,500",
        },
        {
            id: "INB-002",
            supplier: "Global Components",
            items: 180,
            status: "In Transit",
            date: "2024-01-14",
            value: "$6,200",
        },
        {
            id: "INB-003",
            supplier: "Quality Hardware",
            items: 320,
            status: "Processing",
            date: "2024-01-13",
            value: "$12,000",
        },
        { id: "INB-004", supplier: "Tech Supplies Ltd", items: 95, status: "Pending", date: "2024-01-12", value: "$3,800" },
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const handleAddOrder = (newOrder: any) => {
        setOrders([newOrder, ...orders])
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Received":
                return "bg-green-500/10 text-green-500"
            case "In Transit":
                return "bg-blue-500/10 text-blue-500"
            case "Processing":
                return "bg-yellow-500/10 text-yellow-500"
            case "Pending":
                return "bg-muted text-muted-foreground"
            default:
                return "bg-muted text-muted-foreground"
        }
    }

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Received":
                return <CheckCircle className="w-4 h-4" />
            case "In Transit":
                return <Clock className="w-4 h-4" />
            case "Processing":
                return <AlertCircle className="w-4 h-4" />
            default:
                return <Clock className="w-4 h-4" />
        }
    }

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Inbound Orders</h1>

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
                <AddInboundModal onAdd={handleAddOrder} />
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
                    <p className="text-2xl font-bold text-foreground">128</p>
                    <p className="text-xs text-primary mt-2">+12 this month</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Received</p>
                    <p className="text-2xl font-bold text-green-600">89</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">In Transit</p>
                    <p className="text-2xl font-bold text-blue-600">24</p>
                </Card>
                <Card className="bg-card border-border p-4">
                    <p className="text-sm text-muted-foreground mb-1">Pending</p>
                    <p className="text-2xl font-bold text-muted-foreground">15</p>
                </Card>
            </div>

            {/* Orders Table */}
            <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Order ID</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Supplier</th>
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
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{order.supplier}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-foreground">{order.items}</td>
                                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{order.value}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <div
                                            className={`flex items-center gap-2 w-fit px-3 py-1 rounded-full ${getStatusColor(order.status)}`}
                                        >
                                            {getStatusIcon(order.status)}
                                            {order.status}
                                        </div>
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
