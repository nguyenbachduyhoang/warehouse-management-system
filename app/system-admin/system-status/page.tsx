"use client"

import { Card } from "@/components/ui/card"
import { Server, CheckCircle, AlertTriangle, Activity, Database, Cpu, Wifi, Shield } from "lucide-react"

export default function SystemStatusPage() {
    const services = [
        { name: "Core API", status: "Operational", uptime: "99.99%", latency: "45ms", icon: Server },
        { name: "Database Cluster", status: "Operational", uptime: "99.95%", latency: "12ms", icon: Database },
        { name: "AI Microservices", status: "High Load", uptime: "99.90%", latency: "350ms", icon: Cpu },
        { name: "Authentication", status: "Operational", uptime: "100%", latency: "85ms", icon: Shield },
        { name: "Storage Service", status: "Operational", uptime: "99.99%", latency: "24ms", icon: Database },
        { name: "WebSocket Gateway", status: "Operational", uptime: "99.98%", latency: "15ms", icon: Wifi },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">System Status</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 bg-green-500/10 border-green-500/20 flex items-center gap-4">
                    <div className="bg-green-500/20 p-3 rounded-full">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-foreground">All Systems Operational</h3>
                        <p className="text-sm text-muted-foreground">Last updated: Just now</p>
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Average Response Time</span>
                        <Activity className="w-4 h-4 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">124ms</h3>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">Error Rate</span>
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">0.05%</h3>
                </Card>
            </div>

            <h2 className="text-lg font-semibold text-foreground mb-4">Service Health</h2>
            <div className="grid grid-cols-1 gap-4">
                {services.map((service, index) => (
                    <Card key={index} className="p-4 bg-card border-border flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${service.status === 'Operational' ? 'bg-primary/10 text-primary' : 'bg-yellow-500/10 text-yellow-500'
                                }`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground">{service.name}</h3>
                                <p className="text-sm text-muted-foreground">Latency: {service.latency}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${service.status === 'Operational' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                                }`}>
                                {service.status}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Uptime: {service.uptime}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}
