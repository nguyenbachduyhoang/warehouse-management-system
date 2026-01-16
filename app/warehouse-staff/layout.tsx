"use client"

import { useState } from "react"
import { WarehouseStaffSidebar } from "@/components/dashboard/warehouse-staff/warehouse-staff-sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { useRouter } from "next/navigation"

export default function WarehouseStaffLayout({
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
            <WarehouseStaffSidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                onLogout={handleLogout}
            />

            <div className={`${sidebarOpen ? "ml-64" : "ml-20"} flex-1 flex flex-col min-h-screen transition-all duration-300`}>
                <header className="bg-card border-b border-border sticky top-0 z-40">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Good morning, Alex!</h1>
                            <p className="text-sm text-muted-foreground">You have 3 tasks assigned today</p>
                        </div>
                        <ThemeToggle />
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}
