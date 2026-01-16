"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, LogOut, CheckCircle2, Clock, AlertCircle, Package, ArrowRight, Scan } from "lucide-react"

interface MyTasksPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function MyTasksPage({ onBack, onLogout }: MyTasksPageProps) {
    const [tasks, setTasks] = useState([
        { id: 1, type: "Picking", location: "Zone A - Aisle 3 - Shelf 2", item: "Wireless Mouse X1", quantity: 50, status: "In Progress", priority: "High" },
        { id: 2, type: "Putaway", location: "Receiving Dock B", item: "Gaming Keyboard Pro", quantity: 20, status: "Pending", priority: "Medium" },
        { id: 3, type: "Cycle Count", location: "Zone C - Aisle 1", item: "Monitor 24 inch", quantity: 15, status: "Pending", priority: "Low" },
        { id: 4, type: "Picking", location: "Zone A - Aisle 2 - Shelf 4", item: "USB-C Cable 2m", quantity: 100, status: "Completed", priority: "High" },
    ])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">My Assigned Tasks</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-5xl mx-auto w-full">
                <div className="grid gap-4">
                    {tasks.map((task) => (
                        <Card key={task.id} className="p-6 bg-card border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant={
                                        task.type === 'Picking' ? 'default' :
                                            task.type === 'Putaway' ? 'secondary' : 'outline'
                                    }>{task.type}</Badge>
                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${task.priority === 'High' ? 'bg-red-500/10 text-red-500' :
                                            task.priority === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                                'bg-blue-500/10 text-blue-500'
                                        }`}>
                                        {task.priority} Priority
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground">{task.item}</h3>
                                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                                    <Package className="w-4 h-4" /> Qty: {task.quantity}
                                    <span className="text-border">|</span>
                                    {task.location}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 w-full md:w-auto mt-4 md:mt-0">
                                {task.status === "In Progress" && (
                                    <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">In Progress</span>
                                    </div>
                                )}
                                {task.status === "Completed" && (
                                    <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                                        <CheckCircle2 className="w-4 h-4" />
                                        <span className="text-sm font-medium">Completed</span>
                                    </div>
                                )}
                                {task.status === "Pending" && (
                                    <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                        <AlertCircle className="w-4 h-4" />
                                        <span className="text-sm font-medium">Pending</span>
                                    </div>
                                )}

                                {task.status !== "Completed" && (
                                    <Button className="w-full md:w-auto gap-2">
                                        <Scan className="w-4 h-4" />
                                        {task.status === "In Progress" ? "Continue" : "Start"}
                                    </Button>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}
