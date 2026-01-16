"use client"

import { useState } from "react"
import { SystemAdminSidebar } from "@/components/dashboard/system-admin/system-admin-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bell } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SystemAdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const router = useRouter()

    const handleLogout = () => {
        router.push("/")
    }

    return (
        <div className="min-h-screen bg-background flex">
            <SystemAdminSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onLogout={handleLogout}
            />

            <div className={`${sidebarOpen ? "ml-64" : "ml-20"} flex-1 flex flex-col min-h-screen transition-all duration-300`}>
                <header className="bg-card border-b border-border sticky top-0 z-40">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-foreground">Platform Overview</h1>
                        <div className="flex items-center gap-2">
                            <ThemeToggle />
                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                <Bell className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
