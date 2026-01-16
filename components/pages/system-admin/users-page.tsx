"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, ArrowLeft, LogOut, Shield, User } from "lucide-react"

interface UsersPageProps {
    onBack: () => void
    onLogout: () => void
}

export default function UsersPage({ onBack, onLogout }: UsersPageProps) {
    const [users, setUsers] = useState([
        { id: 1, name: "Admin One", email: "admin@techretail.com", role: "Company Admin", company: "Tech Retail", status: "Active" },
        { id: 2, name: "John Doe", email: "john@logistics.co", role: "Warehouse Staff", company: "Logistics Co", status: "Active" },
        { id: 3, name: "Jane Smith", email: "jane@manufacturing.com", role: "Warehouse Staff", company: "Manufacturing", status: "Inactive" },
        { id: 4, name: "Super User", email: "super@storix.com", role: "System Admin", company: "Storix", status: "Active" },
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="bg-card border-b border-border sticky top-0 z-40">
                <div className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <h1 className="text-2xl font-bold text-foreground">Users & Access</h1>
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
                            placeholder="Search users..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 bg-card border-border"
                        />
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add User
                    </Button>
                </div>

                <Card className="bg-card border-border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted/50 border-b border-border">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Email</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Role</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Company</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                {filteredUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 p-2 rounded-full">
                                                    <User className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="text-sm font-medium text-foreground">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                                        <td className="px-6 py-4 text-sm text-foreground flex items-center gap-2">
                                            {user.role === 'System Admin' && <Shield className="w-3 h-3 text-purple-500" />}
                                            {user.role}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-muted-foreground">{user.company}</td>
                                        <td className="px-6 py-4 text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-gray-500/10 text-gray-500'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm flex gap-2">
                                            <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
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
