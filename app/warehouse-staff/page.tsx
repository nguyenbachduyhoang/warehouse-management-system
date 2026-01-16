"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
    Clock,
    CheckCircle2,
    AlertCircle,
    Navigation,
} from "lucide-react"

export default function WarehouseStaffDashboardPage() {
    const todayTasks = [
        { id: 1, type: "Picking", location: "Zone A - Shelf 5", items: 15, status: "In Progress", efficiency: "94%" },
        { id: 2, type: "Putaway", location: "Zone B - Bin 12", items: 8, status: "Pending", efficiency: "-" },
        { id: 3, type: "Counting", location: "Zone C", items: 45, status: "Completed", efficiency: "100%" },
    ]

    const performanceData = [
        { day: "Mon", tasks: 24, efficiency: 92 },
        { day: "Tue", tasks: 28, efficiency: 94 },
        { day: "Wed", tasks: 26, efficiency: 90 },
        { day: "Thu", tasks: 32, efficiency: 96 },
        { day: "Fri", tasks: 30, efficiency: 93 },
        { day: "Today", tasks: 15, efficiency: 94 },
    ]

    const optimizedRoute = [
        { step: 1, location: "Shelf A-5-12", items: 3, distance: "Start" },
        { step: 2, location: "Shelf A-6-8", items: 2, distance: "15m" },
        { step: 3, location: "Shelf B-2-4", items: 5, distance: "12m" },
        { step: 4, location: "Shelf B-3-10", items: 4, distance: "8m" },
        { step: 5, location: "Packing Station", items: "-", distance: "20m" },
    ]

    return (
        <div className="space-y-8">
            {/* Today's Tasks */}
            <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Today's Tasks</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {todayTasks.map((task) => (
                        <Card key={task.id} className="bg-card border-border p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">{task.type}</p>
                                    <h4 className="text-lg font-semibold text-foreground">{task.location}</h4>
                                </div>
                                {task.status === "In Progress" && <Clock className="w-5 h-5 text-yellow-500" />}
                                {task.status === "Completed" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                                {task.status === "Pending" && <AlertCircle className="w-5 h-5 text-muted-foreground" />}
                            </div>

                            <div className="bg-muted/50 p-3 rounded-lg mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-muted-foreground">Items: {task.items}</span>
                                    {task.efficiency !== "-" && <span className="text-primary font-semibold">{task.efficiency}</span>}
                                </div>
                                <div className="text-xs text-muted-foreground font-medium">Status: {task.status}</div>
                            </div>

                            {task.status === "In Progress" && (
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <Navigation className="w-4 h-4 mr-2" />
                                    View Route
                                </Button>
                            )}
                            {task.status === "Pending" && (
                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    Start Task
                                </Button>
                            )}
                        </Card>
                    ))}
                </div>
            </div>

            {/* Optimized Route */}
            <Card className="bg-gradient-to-r from-primary/80 to-primary/50 border-0 p-6">
                <div className="flex items-start gap-4 mb-4">
                    <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                        <Navigation className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary-foreground">AI-Optimized Picking Route</h3>
                        <p className="text-sm text-primary-foreground/80">Total distance: 55m | Estimated time: 8 minutes</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
                    {optimizedRoute.map((point, i) => (
                        <div key={i} className="bg-white bg-opacity-10 p-3 rounded border border-white border-opacity-20">
                            <div className="text-xs font-semibold text-primary-foreground/80 mb-1">Step {point.step}</div>
                            <p className="text-sm font-semibold text-primary-foreground mb-1">{point.location}</p>
                            <p className="text-xs text-primary-foreground/70">
                                {point.items !== "-" ? `${point.items} items` : "Pack"}
                            </p>
                            {point.distance !== "Start" && (
                                <p className="text-xs text-primary-foreground/60 mt-1">→ {point.distance}</p>
                            )}
                        </div>
                    ))}
                </div>

                <Button className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold">
                    Start Picking
                </Button>
            </Card>

            {/* Performance & Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="bg-card border-border p-6 lg:col-span-2">
                    <h3 className="text-lg font-semibold text-foreground mb-6">Your Weekly Performance</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                            <XAxis stroke="#888" />
                            <YAxis stroke="#888" yAxisId="left" />
                            <YAxis stroke="#888" yAxisId="right" orientation="right" />
                            <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                            <Legend />
                            <Bar yAxisId="left" dataKey="tasks" fill="#8b5cf6" name="Tasks Completed" />
                            <Bar yAxisId="right" dataKey="efficiency" fill="#06b6d4" name="Efficiency %" />
                        </BarChart>
                    </ResponsiveContainer>
                </Card>

                <Card className="bg-card border-border p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Today's Summary</h3>
                    <div className="space-y-4">
                        <div className="bg-primary/20 p-4 rounded-lg border border-primary/30">
                            <p className="text-muted-foreground text-sm mb-1">Tasks Completed</p>
                            <p className="text-3xl font-bold text-primary">1/3</p>
                        </div>
                        <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                            <p className="text-muted-foreground text-sm mb-1">Current Efficiency</p>
                            <p className="text-3xl font-bold text-green-400">94%</p>
                        </div>
                        <div className="bg-cyan-500/20 p-4 rounded-lg border border-cyan-500/30">
                            <p className="text-muted-foreground text-sm mb-1">Items Processed</p>
                            <p className="text-3xl font-bold text-cyan-400">15</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
