"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const router = useRouter()

    const handleLogout = () => {
        // In a real app, this would clear auth state
        router.push("/")
    }

    return (
        <div className="min-h-screen bg-background flex">
            <AppSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onLogout={handleLogout}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header - Sticky */}
                <header className="bg-card border-b border-border sticky top-0 z-40 shrink-0">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-foreground">
                            {/* Dynamic Title could go here, for now keeping generic or context based */}
                            Dashboard
                        </h2>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground">
                                <Bell className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Scrollable Content */}
                <main className="flex-1 overflow-auto p-8">
                    {children}
                </main>
            </div>
        </div>
    )
}
