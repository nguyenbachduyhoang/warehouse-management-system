"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, ArrowLeft, LogOut, FileText, AlertCircle, CheckCircle, Clock } from "lucide-react"

interface AuditLogsPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function AuditLogsPage({ onBack, onLogout }: AuditLogsPageProps) {
    const [logs, setLogs] = useState([
        { id: 1, action: "User Login", user: "admin@techretail.com", ip: "192.168.1.1", status: "Success", time: "2 mins ago" },
        { id: 2, action: "Delete Product", user: "john@logistics.co", ip: "192.168.1.45", status: "Warning", time: "15 mins ago" },
        { id: 3, action: "System Config Change", user: "super@storix.com", ip: "10.0.0.1", status: "Success", time: "1 hour ago" },
        { id: 4, action: "Failed Login Attempt", user: "unknown", ip: "203.112.44.12", status: "Failed", time: "2 hours ago" },
        { id: 5, action: "API Key Generated", user: "admin@techretail.com", ip: "192.168.1.1", status: "Success", time: "3 hours ago" },
    ])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">Audit Logs</h1>
                    </div>
                    <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </header>

            <main className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
                <div className="flex gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search logs..."
                            className="pl-10 bg-card border-border"
                        />
                    </div>
                    <Button variant="outline">Export Logs</Button>
                </div>

                <Card className="bg-card border-border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50 border-b border-border">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Action</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">User</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">IP Address</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {logs.map((log) => (
                                    <tr key={log.id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                {log.status === 'Success' ? <CheckCircle className="w-4 h-4 text-green-500" /> :
                                                    log.status === 'Warning' ? <AlertCircle className="w-4 h-4 text-yellow-500" /> :
                                                        <AlertCircle className="w-4 h-4 text-red-500" />}
                                                <span className="text-sm font-medium text-foreground">{log.action}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-foreground">{log.user}</td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground font-mono">{log.ip}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${log.status === 'Success' ? 'bg-green-500/10 text-green-500' :
                                                    log.status === 'Warning' ? 'bg-yellow-500/10 text-yellow-500' :
                                                        'bg-red-500/10 text-red-500'
                                                }`}>
                                                {log.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                                            <Clock className="w-3 h-3" /> {log.time}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </main>
        </div>
    )
}
