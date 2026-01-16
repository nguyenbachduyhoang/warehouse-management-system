"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    BarChart3,
    Building2,
    Users,
    Database,
    Shield,
    Server,
    TrendingUp,
    Brain,
    Settings,
    LogOut,
    X,
    Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface SystemAdminSidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: (open: boolean) => void
    onLogout: () => void
}

export function SystemAdminSidebar({ sidebarOpen, setSidebarOpen, onLogout }: SystemAdminSidebarProps) {
    const pathname = usePathname()

    const sidebarItems = [
        { icon: BarChart3, label: "Dashboard", href: "/system-admin", section: "main" },
        { icon: Building2, label: "Companies", href: "/system-admin/companies", section: "management" },
        { icon: Users, label: "Users & Access", href: "/system-admin/users", section: "management" },
        { icon: Database, label: "Audit Logs", href: "/system-admin/audit-logs", section: "security" },
        { icon: Shield, label: "Security", href: "/system-admin/security", section: "security" },
        { icon: Server, label: "System Status", href: "/system-admin/system-status", section: "system" },
        { icon: TrendingUp, label: "Analytics", href: "/system-admin/analytics", section: "reports" },
        { icon: Brain, label: "AI Insights", href: "/system-admin/ai-insights", section: "ai" },
        { icon: Settings, label: "Configuration", href: "/system-admin/configuration", section: "settings" },
    ]

    return (
        <div
            className={cn(
                "bg-sidebar text-sidebar-foreground transition-all duration-300 fixed h-full border-r border-sidebar-border overflow-y-auto z-50",
                sidebarOpen ? "w-64" : "w-20"
            )}
        >
            <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
                {sidebarOpen && <span className="font-bold text-lg">Storix Admin</span>}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
                >
                    {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            <nav className="p-4 space-y-6 flex-1">
                {["main", "management", "system", "reports", "ai", "security", "settings"].map((section) => {
                    const sectionItems = sidebarItems.filter((item) => item.section === section)
                    const sectionLabels: Record<string, string> = {
                        main: "Menu",
                        management: "Company Mgmt",
                        system: "System Ops",
                        reports: "Analytics",
                        ai: "AI & Insights",
                        security: "Security",
                        settings: "Configuration",
                    }

                    if (sectionItems.length === 0) return null

                    return (
                        <div key={section}>
                            {section !== "main" && sidebarOpen && (
                                <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase mb-2 px-2">
                                    {sectionLabels[section]}
                                </p>
                            )}
                            <div className="space-y-2">
                                {sectionItems.map((item) => {
                                    const Icon = item.icon
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full",
                                                isActive
                                                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                                    : "hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-foreground"
                                            )}
                                            title={!sidebarOpen ? item.label : undefined}
                                        >
                                            <Icon className="w-5 h-5 flex-shrink-0" />
                                            {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-sidebar-border">
                <Button
                    onClick={onLogout}
                    variant="ghost"
                    className={cn(
                        "w-full text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent",
                        sidebarOpen ? "justify-start" : "justify-center px-0"
                    )}
                >
                    <LogOut className="w-4 h-4 flex-shrink-0" />
                    {sidebarOpen && <span className="ml-2">Logout</span>}
                </Button>
            </div>
        </div>
    )
}
