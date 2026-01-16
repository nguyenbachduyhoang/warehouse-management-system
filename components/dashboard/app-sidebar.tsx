"use client"

import {
    BarChart3,
    Package,
    MapPin,
    Truck,
    ShoppingCart,
    Zap,
    TrendingUp,
    FileText,
    Brain,
    Users,
    Briefcase,
    Settings,
    Menu,
    X,
    LogOut
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface AppSidebarProps {
    sidebarOpen: boolean
    setSidebarOpen: (open: boolean) => void
    onLogout?: () => void
}

export function AppSidebar({ sidebarOpen, setSidebarOpen, onLogout }: AppSidebarProps) {
    const pathname = usePathname()

    const sidebarItems = [
        { icon: BarChart3, label: "Dashboard", href: "/dashboard", section: "main" },
        { icon: Package, label: "Products", href: "/dashboard/products", section: "operations" },
        { icon: MapPin, label: "Warehouse Setup", href: "/dashboard/warehouse-setup", section: "operations" },
        { icon: Truck, label: "Inbound Orders", href: "/dashboard/inbound-orders", section: "operations" },
        { icon: ShoppingCart, label: "Outbound Orders", href: "/dashboard/outbound-orders", section: "operations" },
        { icon: Zap, label: "Tasks", href: "/dashboard/tasks", section: "operations" },
        { icon: TrendingUp, label: "Analytics", href: "/dashboard/analytics", section: "reports" },
        { icon: FileText, label: "Reports", href: "/dashboard/reports", section: "reports" },
        { icon: Brain, label: "AI Recommendations", href: "/dashboard/ai-recommendations", section: "ai" },
        { icon: Users, label: "Team Management", href: "/dashboard/team-management", section: "settings" },
        { icon: Briefcase, label: "Inventory Forecast", href: "/dashboard/inventory-forecast", section: "ai" },
        { icon: Settings, label: "Settings", href: "/dashboard/settings", section: "settings" },
    ]

    return (
        <div
            className={cn(
                "bg-sidebar border-r border-sidebar-border transition-all duration-300 sticky top-0 h-screen overflow-y-auto flex flex-col",
                sidebarOpen ? "w-64" : "w-20"
            )}
        >
            {/* Logo Section */}
            <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
                {sidebarOpen && <h1 className="text-2xl font-bold text-sidebar-primary">Storix</h1>}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-2 hover:bg-sidebar-accent rounded-lg text-sidebar-foreground"
                >
                    {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Navigation Sections */}
            <nav className="p-4 space-y-8 flex-1">
                {["main", "operations", "reports", "ai", "settings"].map((section) => (
                    <div key={section}>
                        {sidebarOpen && section !== "main" && (
                            <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase mb-3 px-2">{section}</p>
                        )}
                        <div className="space-y-2">
                            {sidebarItems
                                .filter((item) => item.section === section)
                                .map((item) => {
                                    const IconComponent = item.icon
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                                                isActive
                                                    ? "bg-sidebar-primary/20 text-sidebar-primary border border-sidebar-primary/30"
                                                    : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
                                            )}
                                            title={!sidebarOpen ? item.label : ""}
                                        >
                                            <IconComponent className="w-5 h-5 flex-shrink-0" />
                                            {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                                        </Link>
                                    )
                                })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="p-4 border-t border-slate-800">
                <Button
                    onClick={onLogout}
                    className="w-full bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-foreground flex items-center justify-center gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    {sidebarOpen && "Logout"}
                </Button>
            </div>
        </div>
    )
}
