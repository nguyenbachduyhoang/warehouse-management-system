"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, LogOut, Bell } from "lucide-react"

interface SectionLayoutProps {
  title: string
  onBack: () => void
  onLogout: () => void
  children: React.ReactNode
}

export default function SectionLayout({ title, onBack, onLogout, children }: SectionLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
              <Bell className="w-5 h-5" />
            </button>
            <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8 flex-1 overflow-auto">{children}</main>
    </div>
  )
}
