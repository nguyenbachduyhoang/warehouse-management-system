"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, MoreVertical, Building2 } from "lucide-react"

export default function CompaniesPage() {
    const [companies, setCompanies] = useState([
        { id: 1, name: "Tech Retail", industry: "Electronics", status: "Active", users: 12, plan: "Enterprise" },
        { id: 2, name: "Logistics Co", industry: "Logistics", status: "Active", users: 45, plan: "Pro" },
        { id: 3, name: "Manufacturing", industry: "Manufacturing", status: "Warning", users: 8, plan: "Starter" },
        { id: 4, name: "E-commerce", industry: "Retail", status: "Active", users: 24, plan: "Pro" },
        { id: 5, name: "Global Trade", industry: "Import/Export", status: "Suspended", users: 5, plan: "Starter" },
    ])

    const [searchTerm, setSearchTerm] = useState("")

    const filteredCompanies = companies.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Company Management</h1>

            <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input
                        placeholder="Search companies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-card border-border"
                    />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add Company
                </Button>
            </div>

            <Card className="bg-card border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-muted/50 border-b border-border">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Company Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Industry</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Users</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Plan</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {filteredCompanies.map((company) => (
                                <tr key={company.id} className="hover:bg-muted/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-primary/10 p-2 rounded">
                                                <Building2 className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground">{company.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{company.industry}</td>
                                    <td className="px-6 py-4 text-sm">
                                        <span className={`px-2 py-1 rounded-full text-xs ${company.status === 'Active' ? 'bg-green-500/10 text-green-500' :
                                                company.status === 'Warning' ? 'bg-yellow-500/10 text-yellow-500' :
                                                    'bg-red-500/10 text-red-500'
                                            }`}>
                                            {company.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-foreground">{company.users}</td>
                                    <td className="px-6 py-4 text-sm text-muted-foreground">{company.plan}</td>
                                    <td className="px-6 py-4 text-sm flex gap-2">
                                        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-muted rounded transition-colors text-muted-foreground hover:text-foreground">
                                            <MoreVertical className="w-4 h-4" />
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
