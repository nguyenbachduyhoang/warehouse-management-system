"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import {
  LogOut,
  Package,
  Truck,
  AlertTriangle,
  Sparkles,
  Settings,
  BarChart3,
  Bell,
  Menu,
  X,
  MapPin,
  ShoppingCart,
  FileText,
  Zap,
  Brain,
  TrendingUp,
  Users,
  Briefcase,
} from "lucide-react"
import ProductsPage from "@/components/pages/company-admin/products-page"
import InboundOrdersPage from "@/components/pages/company-admin/inbound-orders-page"
import OutboundOrdersPage from "@/components/pages/company-admin/outbound-orders-page"
import TasksPage from "@/components/pages/company-admin/tasks-page"
import WarehouseSetupPage from "@/components/pages/company-admin/warehouse-setup-page"
import ReportsPage from "@/components/pages/company-admin/reports-page"
import SettingsPage from "@/components/pages/company-admin/settings-page"
import AIRecommendationsPage from "@/components/pages/company-admin/ai-recommendations-page"

import InventoryForecastPage from "@/components/pages/company-admin/inventory-forecast-page"
import AnalyticsPage from "@/components/pages/company-admin/analytics-page"
import TeamManagementPage from "@/components/pages/company-admin/team-management-page"
import { ThemeToggle } from "@/components/theme-toggle"

interface CompanyAdminDashboardProps {
  onLogout: () => void
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function CompanyAdminDashboard({ onLogout, currentPage, setCurrentPage }: CompanyAdminDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const stats = [
    { label: "Total Stock", value: "45,230 units", change: "+5.2%", icon: Package },
    { label: "Inbound Orders", value: "128", change: "+12 today", icon: Truck },
    { label: "Outbound Orders", value: "89", change: "-3 today", icon: Package },
    { label: "Utilization", value: "73%", change: "Optimal", icon: BarChart3 },
  ]

  const inventoryData = [
    { date: "Mon", inbound: 240, outbound: 220, stock: 22400 },
    { date: "Tue", inbound: 139, outbound: 200, stock: 22339 },
    { date: "Wed", inbound: 200, outbound: 220, stock: 22319 },
    { date: "Thu", inbound: 220, outbound: 250, stock: 22289 },
    { date: "Fri", inbound: 250, outbound: 210, stock: 22329 },
    { date: "Sat", inbound: 210, outbound: 120, stock: 22419 },
    { date: "Sun", inbound: 180, outbound: 200, stock: 22399 },
  ]

  const lowStockItems = [
    { sku: "SKU-001", product: "Electronics Pack A", stock: 45, reorder: 100 },
    { sku: "SKU-047", product: "Hardware Kit B", stock: 23, reorder: 75 },
    { sku: "SKU-103", product: "Connector Set", stock: 12, reorder: 50 },
  ]

  const sidebarItems = [
    { icon: BarChart3, label: "Dashboard", id: "dashboard", section: "main" },
    { icon: Package, label: "Products", id: "products", section: "operations" },
    { icon: MapPin, label: "Warehouse Setup", id: "warehouse", section: "operations" },
    { icon: Truck, label: "Inbound Orders", id: "inbound", section: "operations" },
    { icon: ShoppingCart, label: "Outbound Orders", id: "outbound", section: "operations" },
    { icon: Zap, label: "Tasks", id: "tasks", section: "operations" },
    { icon: TrendingUp, label: "Analytics", id: "analytics", section: "reports" },
    { icon: FileText, label: "Reports", id: "reports", section: "reports" },
    { icon: Brain, label: "AI Recommendations", id: "ai", section: "ai" },
    { icon: Users, label: "Team Management", id: "team", section: "settings" },
    { icon: Briefcase, label: "Inventory Forecast", id: "forecast", section: "ai" },
    { icon: Settings, label: "Settings", id: "settings", section: "settings" },
  ]

  if (currentPage !== "dashboard") {
    if (currentPage === "products")
      return (
        <ProductsPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "warehouse")
      return (
        <WarehouseSetupPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "inbound")
      return (
        <InboundOrdersPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "outbound")
      return (
        <OutboundOrdersPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "tasks")
      return (
        <TasksPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "reports")
      return (
        <ReportsPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "ai")
      return (
        <AIRecommendationsPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "analytics")
      return (
        <AnalyticsPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "team")
      return (
        <TeamManagementPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "forecast")
      return (
        <InventoryForecastPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
    if (currentPage === "settings")
      return (
        <SettingsPage
          onBack={() => {
            setCurrentPage("dashboard")
          }}
          onLogout={onLogout}
        />
      )
  }

  return (
    <div className="min-h-screen bg-background flex">
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"
          } bg-sidebar border-r border-sidebar-border transition-all duration-300 sticky top-0 h-screen overflow-y-auto`}
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
        <nav className="p-4 space-y-8">
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
                    const isActive = currentPage === item.id
                    return (
                      <button
                        key={item.id}
                        onClick={() => setCurrentPage(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isActive
                          ? "bg-sidebar-primary/20 text-sidebar-primary border border-sidebar-primary/30"
                          : "text-sidebar-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent"
                          }`}
                        title={!sidebarOpen ? item.label : ""}
                      >
                        <IconComponent className="w-5 h-5 flex-shrink-0" />
                        {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
                      </button>
                    )
                  })}
              </div>
            </div>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
          <Button
            onClick={onLogout}
            className="w-full bg-sidebar-accent hover:bg-sidebar-accent/80 text-sidebar-foreground flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            {sidebarOpen && "Logout"}
          </Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-40">
          <div className="px-8 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {sidebarItems.find((i) => i.id === currentPage)?.label || "Dashboard"}
            </h2>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="p-2 hover:bg-accent rounded-lg transition-colors text-muted-foreground">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon
              return (
                <Card key={i} className="bg-card border-border p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div className="bg-primary/20 p-3 rounded-lg border border-primary/30">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-xs text-primary">{stat.change}</p>
                </Card>
              )
            })}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Inventory Chart */}
            <Card className="lg:col-span-2 bg-card border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">Weekly Inventory Flow</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={inventoryData}>
                  <defs>
                    <linearGradient id="colorInbound" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#39C6C6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#39C6C6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }}
                  />
                  <Area type="monotone" dataKey="stock" stroke="#39C6C6" fillOpacity={1} fill="url(#colorInbound)" />
                </AreaChart>
              </ResponsiveContainer>
            </Card>

            {/* AI Recommendations Widget */}
            <Card className="bg-card border-border p-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">AI Insights</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Stock Alert</p>
                  <p className="text-sm text-foreground">Low stock on SKU-001 detected</p>
                </div>
                <div className="bg-muted p-3 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Optimization</p>
                  <p className="text-sm text-foreground">40% faster picking route available</p>
                </div>
                <div className="bg-muted p-3 rounded-lg border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Forecast</p>
                  <p className="text-sm text-foreground">25% demand increase next week</p>
                </div>
              </div>
              <Button
                onClick={() => setCurrentPage("ai")}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                View All Insights
              </Button>
            </Card>
          </div>

          {/* Low Stock Items Table */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h3 className="text-lg font-semibold text-foreground">Low Stock Alerts</h3>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">SKU</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Current Stock</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Reorder Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {lowStockItems.map((item) => (
                    <tr key={item.sku} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{item.sku}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.product}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-warning/20 text-warning px-3 py-1 rounded-full">{item.stock}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{item.reorder}</td>
                      <td className="px-6 py-4 text-sm">
                        <button className="text-primary hover:text-primary/80 font-medium">Create PO</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
