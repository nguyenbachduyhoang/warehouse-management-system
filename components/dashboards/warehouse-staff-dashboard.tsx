"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import {
  LogOut,
  CheckCircle2,
  Clock,
  Navigation,
  AlertCircle,
  Menu,
  X,
  Home,
  Package,
  TrendingUp,
  Brain,
  Settings,
  UserCircle,
  Target,
  Zap,
} from "lucide-react"

import MyTasksPage from "@/components/pages/warehouse-staff/my-tasks-page"
import RoutesPage from "@/components/pages/warehouse-staff/routes-page"
import PerformancePage from "@/components/pages/warehouse-staff/performance-page"
import AISuggestionsPage from "@/components/pages/warehouse-staff/ai-suggestions-page"
import ProfilePage from "@/components/pages/warehouse-staff/profile-page"
import QuickActionsPage from "@/components/pages/warehouse-staff/quick-actions-page"
import { ThemeToggle } from "@/components/theme-toggle"

interface WarehouseStaffDashboardProps {
  onLogout: () => void
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function WarehouseStaffDashboard({
  onLogout,
  currentPage,
  setCurrentPage,
}: WarehouseStaffDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (currentPage !== "dashboard") {
    if (currentPage === "tasks") return <MyTasksPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
    if (currentPage === "routes") return <RoutesPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
    if (currentPage === "performance") return <PerformancePage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
    if (currentPage === "ai-suggestions") return <AISuggestionsPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
    if (currentPage === "profile" || currentPage === "preferences") return <ProfilePage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
    if (currentPage === "quick") return <QuickActionsPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
  }

  const todayTasks = [
    { id: 1, type: "Picking", location: "Zone A - Shelf 5", items: 15, status: "In Progress", efficiency: "94%" },
    { id: 2, type: "Putaway", location: "Zone B - Bin 12", items: 8, status: "Pending", efficiency: "-" },
    { id: 3, type: "Counting", location: "Zone C", items: 45, status: "Completed", efficiency: "100%" },
  ]

  const performanceData = [
    { day: "Mon", tasks: 24, efficiency: 92 },
    { day: "Tue", tasks: 28, efficiency: 94 },
    { day: "Wed", tasks: 26, efficiency: 90 },
    { day: "Thu", tasks: 32, efficiency: 96 },
    { day: "Fri", tasks: 30, efficiency: 93 },
    { day: "Today", tasks: 15, efficiency: 94 },
  ]

  const optimizedRoute = [
    { step: 1, location: "Shelf A-5-12", items: 3, distance: "Start" },
    { step: 2, location: "Shelf A-6-8", items: 2, distance: "15m" },
    { step: 3, location: "Shelf B-2-4", items: 5, distance: "12m" },
    { step: 4, location: "Shelf B-3-10", items: 4, distance: "8m" },
    { step: 5, location: "Packing Station", items: "-", distance: "20m" },
  ]

  const sidebarItems = [
    { icon: Home, label: "Dashboard", id: "dashboard", section: "main" },
    { icon: Package, label: "My Tasks", id: "tasks", section: "operations" },
    { icon: Navigation, label: "Routes", id: "routes", section: "operations" },
    { icon: TrendingUp, label: "Performance", id: "performance", section: "analytics" },
    { icon: Brain, label: "AI Suggestions", id: "ai-suggestions", section: "intelligence" },
    { icon: Target, label: "Goals & Targets", id: "goals", section: "analytics" },
    { icon: Zap, label: "Quick Actions", id: "quick", section: "operations" },
    { icon: UserCircle, label: "My Profile", id: "profile", section: "account" },
    { icon: Settings, label: "Preferences", id: "preferences", section: "account" },
  ]

  return (
    <div className="min-h-screen bg-background flex">
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"
          } bg-sidebar text-sidebar-foreground transition-all duration-300 fixed h-full border-r border-sidebar-border overflow-y-auto`}
      >
        <div className="p-4 border-b border-sidebar-border flex items-center justify-between">
          {sidebarOpen && <span className="font-bold text-lg">Storix</span>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <div className="p-4 space-y-6">
          {["main", "operations", "analytics", "intelligence", "account"].map((section) => {
            const sectionItems = sidebarItems.filter((item) => item.section === section)
            const sectionLabels: Record<string, string> = {
              main: "Menu",
              operations: "Work",
              analytics: "Performance",
              intelligence: "AI Insights",
              account: "Account",
            }

            return (
              <div key={section}>
                {section !== "main" && (
                  <p className="text-xs font-semibold text-sidebar-foreground/50 uppercase mb-2 px-2">
                    {sectionLabels[section]}
                  </p>
                )}
                <div className="space-y-2">
                  {sectionItems.map((item, i) => {
                    const Icon = item.icon
                    const isActive = currentPage === item.id
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(item.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "hover:bg-sidebar-accent text-sidebar-foreground"
                          }`}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            onClick={onLogout}
            variant="ghost"
            className="w-full text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent justify-start"
          >
            <LogOut className="w-4 h-4 mr-2" />
            {sidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300`}>
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Good morning, Alex!</h1>
              <p className="text-sm text-muted-foreground">You have 3 tasks assigned today</p>
            </div>
            <ThemeToggle />
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Today's Tasks */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Today's Tasks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {todayTasks.map((task) => (
                <Card key={task.id} className="bg-card border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{task.type}</p>
                      <h4 className="text-lg font-semibold text-foreground">{task.location}</h4>
                    </div>
                    {task.status === "In Progress" && <Clock className="w-5 h-5 text-yellow-500" />}
                    {task.status === "Completed" && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {task.status === "Pending" && <AlertCircle className="w-5 h-5 text-muted-foreground" />}
                  </div>

                  <div className="bg-muted/50 p-3 rounded-lg mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Items: {task.items}</span>
                      {task.efficiency !== "-" && <span className="text-primary font-semibold">{task.efficiency}</span>}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">Status: {task.status}</div>
                  </div>

                  {task.status === "In Progress" && (
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Navigation className="w-4 h-4 mr-2" />
                      View Route
                    </Button>
                  )}
                  {task.status === "Pending" && (
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Start Task
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Optimized Route */}
          <Card className="bg-gradient-to-r from-primary/80 to-primary/50 border-0 p-6 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                <Navigation className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary-foreground">AI-Optimized Picking Route</h3>
                <p className="text-sm text-primary-foreground/80">Total distance: 55m | Estimated time: 8 minutes</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
              {optimizedRoute.map((point, i) => (
                <div key={i} className="bg-white bg-opacity-10 p-3 rounded border border-white border-opacity-20">
                  <div className="text-xs font-semibold text-primary-foreground/80 mb-1">Step {point.step}</div>
                  <p className="text-sm font-semibold text-primary-foreground mb-1">{point.location}</p>
                  <p className="text-xs text-primary-foreground/70">
                    {point.items !== "-" ? `${point.items} items` : "Pack"}
                  </p>
                  {point.distance !== "Start" && (
                    <p className="text-xs text-primary-foreground/60 mt-1">→ {point.distance}</p>
                  )}
                </div>
              ))}
            </div>

            <Button className="w-full bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold">
              Start Picking
            </Button>
          </Card>

          {/* Performance & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-6">Your Weekly Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#888" />
                  <YAxis stroke="#888" yAxisId="left" />
                  <YAxis stroke="#888" yAxisId="right" orientation="right" />
                  <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="tasks" fill="#8b5cf6" name="Tasks Completed" />
                  <Bar yAxisId="right" dataKey="efficiency" fill="#06b6d4" name="Efficiency %" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Today's Summary</h3>
              <div className="space-y-4">
                <div className="bg-primary/20 p-4 rounded-lg border border-primary/30">
                  <p className="text-muted-foreground text-sm mb-1">Tasks Completed</p>
                  <p className="text-3xl font-bold text-primary">1/3</p>
                </div>
                <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                  <p className="text-muted-foreground text-sm mb-1">Current Efficiency</p>
                  <p className="text-3xl font-bold text-green-400">94%</p>
                </div>
                <div className="bg-cyan-500/20 p-4 rounded-lg border border-cyan-500/30">
                  <p className="text-muted-foreground text-sm mb-1">Items Processed</p>
                  <p className="text-3xl font-bold text-cyan-400">15</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
