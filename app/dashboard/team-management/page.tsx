"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, User, Shield } from "lucide-react"

export default function TeamManagementPage() {
    const [users, setUsers] = useState([
        { id: 1, name: "John Warehouse", email: "john@storedemo.com", role: "Warehouse Manager", status: "Active" },
        { id: 2, name: "Sarah Picker", email: "sarah@storedemo.com", role: "Picker", status: "Active" },
        { id: 3, name: "Mike Loader", email: "mike@storedemo.com", role: "Loader", status: "Inactive" },
        { id: 4, name: "Emily Admin", email: "emily@storedemo.com", role: "Company Admin", status: "Active" },
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter((u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Team Management</h1>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                        placeholder="Search team members..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-card border-border text-foreground"
                    />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Member
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
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredUsers.map((user) => (
                                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/20 p-2 rounded-full">
                                                <User className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{user.email}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground flex items-center gap-2">
                                        {user.role === 'Company Admin' && <Shield className="w-3 h-3 text-purple-400" />}
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs ${user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-secondary text-muted-foreground'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm flex gap-2">
                                        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-destructive">
                                            <Trash2 className="w-4 h-4" />
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
