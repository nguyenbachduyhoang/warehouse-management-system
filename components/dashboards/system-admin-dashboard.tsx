"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Zap,
  LogOut,
  Users,
  Building2,
  Sparkles,
  BarChart3,
  Settings,
  Bell,
  Menu,
  X,
  TrendingUp,
  Server,
  Shield,
  Database,
  Brain,
} from "lucide-react"
import CompaniesPage from "@/components/pages/system-admin/companies-page"
import UsersPage from "@/components/pages/system-admin/users-page"
import SystemStatusPage from "@/components/pages/system-admin/system-status-page"
import AuditLogsPage from "@/components/pages/system-admin/audit-logs-page"
import SecurityPage from "@/components/pages/system-admin/security-page"
import AnalyticsPage from "@/components/pages/system-admin/analytics-page"
import AIInsightsPage from "@/components/pages/system-admin/ai-insights-page"
import ConfigurationPage from "@/components/pages/system-admin/configuration-page"
import { ThemeToggle } from "@/components/theme-toggle"

interface SystemAdminDashboardProps {
  onLogout: () => void
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function SystemAdminDashboard({ onLogout, currentPage, setCurrentPage }: SystemAdminDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { label: "Total Companies", value: "24", change: "+3 this month", icon: Building2 },
    { label: "Active Warehouses", value: "156", change: "+12 this month", icon: BarChart3 },
    { label: "System Health", value: "98.5%", change: "Excellent", icon: Zap },
    { label: "Users Online", value: "1,240", change: "+180 today", icon: Users },
  ]

  const chartData = [
    { month: "Jan", orders: 4000, transactions: 2400 },
    { month: "Feb", orders: 3000, transactions: 1398 },
    { month: "Mar", orders: 2000, transactions: 9800 },
    { month: "Apr", orders: 2780, transactions: 3908 },
    { month: "May", orders: 1890, transactions: 4800 },
    { month: "Jun", orders: 2390, transactions: 3800 },
  ]

  const companyData = [
    { name: "Tech Retail", value: 45 },
    { name: "Logistics Co", value: 30 },
    { name: "Manufacturing", value: 20 },
    { name: "E-commerce", value: 5 },
  ]

  const COLORS = ["#8b5cf6", "#06b6d4", "#0ea5e9", "#3b82f6"]

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", id: "dashboard", section: "main" },
    { icon: Building2, label: "Companies", id: "companies", section: "management" },
    { icon: Users, label: "Users & Access", id: "users", section: "management" },
    { icon: Database, label: "Audit Logs", id: "logs", section: "security" },
    { icon: Shield, label: "Security", id: "security", section: "security" },
    { icon: Server, label: "System Status", id: "status", section: "system" },
    { icon: TrendingUp, label: "Analytics", id: "analytics", section: "reports" },
    { icon: Brain, label: "AI Insights", id: "ai-insights", section: "ai" },
    { icon: Settings, label: "Configuration", id: "config", section: "settings" },
  ]

  if (currentPage !== "dashboard") {
    switch (currentPage) {
      case "companies":
        return <CompaniesPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "users":
        return <UsersPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "logs":
        return <AuditLogsPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "security":
        return <SecurityPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "status":
        return <SystemStatusPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "analytics":
        return <AnalyticsPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "ai-insights":
        return <AIInsightsPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      case "config":
        return <ConfigurationPage onBack={() => setCurrentPage("dashboard")} onLogout={onLogout} />
      default:
        setCurrentPage("dashboard")
        return null
    }
  }

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
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-foreground"
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
            <h1 className="text-2xl font-bold text-foreground">Platform Overview</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} className="bg-card border-border p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs text-primary font-medium">{stat.change}</p>
                </Card>
              )
            })}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-card border-border p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground mb-6">Orders & Transactions</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: "#1a1a1a", border: "1px solid #333" }} />
                  <Legend />
                  <Line type="monotone" dataKey="orders" stroke="#8b5cf6" strokeWidth={2} />
                  <Line type="monotone" dataKey="transactions" stroke="#06b6d4" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            <Card className="bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Top Companies</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={companyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {COLORS.map((color, index) => (
                      <Cell key={`cell-${index}`} fill={color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* AI Insights */}
          <Card className="bg-gradient-to-r from-primary/80 to-primary/50 border-0 p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-primary-foreground mb-3">AI Platform Insights</h3>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/60 mt-1">→</span>
                    <span>
                      <strong>Growth Forecast:</strong> 15% increase in active warehouses next quarter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/60 mt-1">→</span>
                    <span>
                      <strong>Peak Load Alert:</strong> Expected 2-4 PM EST, scaling preparation recommended
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-foreground/60 mt-1">→</span>
                    <span>
                      <strong>Churn Alert:</strong> 2 companies showing reduced usage - outreach recommended
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Management Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
              <Building2 className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Companies</h3>
              <p className="text-muted-foreground text-sm mb-6">Manage subscriptions & billing</p>
              <Button onClick={() => setCurrentPage('companies')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Manage</Button>
            </Card>

            <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
              <Users className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Users & Access</h3>
              <p className="text-muted-foreground text-sm mb-6">Monitor activity & security</p>
              <Button onClick={() => setCurrentPage('users')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Manage</Button>
            </Card>

            <Card className="bg-card border-border p-6 cursor-pointer hover:shadow-lg transition-shadow hover:border-primary/50">
              <Server className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">System Health</h3>
              <p className="text-muted-foreground text-sm mb-6">Monitor infrastructure</p>
              <Button onClick={() => setCurrentPage('status')} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Status</Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
