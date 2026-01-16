"use client"

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
import { Zap, LogOut, Users, Building2, Sparkles } from "lucide-react"

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const statsData = [
    { label: "Total Companies", value: "24", change: "+3 this month" },
    { label: "Active Warehouses", value: "156", change: "+12 this month" },
    { label: "System Load", value: "67%", change: "Normal" },
    { label: "Users Online", value: "1,240", change: "+180 today" },
  ]

  const platformData = [
    { month: "Jan", orders: 4000, transactions: 2400 },
    { month: "Feb", orders: 3000, transactions: 1398 },
    { month: "Mar", orders: 2000, transactions: 9800 },
    { month: "Apr", orders: 2780, transactions: 3908 },
    { month: "May", orders: 1890, transactions: 4800 },
    { month: "Jun", orders: 2390, transactions: 3800 },
  ]

  const companyBreakdown = [
    { name: "Tech Retail", value: 45 },
    { name: "Logistics Co", value: 30 },
    { name: "Manufacturing", value: 20 },
    { name: "E-commerce", value: 5 },
  ]

  const COLORS = ["#a855f7", "#8b5cf6", "#7c3aed", "#6d28d9"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-8 h-8 text-purple-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">Storix</h1>
              <p className="text-xs text-gray-400">System Super Admin</p>
            </div>
          </div>
          <Button onClick={onLogout} variant="ghost" className="flex items-center gap-2 text-gray-300 hover:text-white">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Platform Overview</h2>
          <p className="text-gray-400">Monitor all companies and system health</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statsData.map((stat, i) => (
            <Card key={i} className="bg-slate-900 border-slate-800 p-6">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Orders & Transactions */}
          <Card className="bg-slate-900 border-slate-800 p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Orders & Transactions</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={platformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #475569" }} />
                <Legend />
                <Line type="monotone" dataKey="orders" stroke="#a855f7" strokeWidth={2} />
                <Line type="monotone" dataKey="transactions" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Company Breakdown */}
          <Card className="bg-slate-900 border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Top Companies</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={companyBreakdown}
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
        <Card className="bg-gradient-to-r from-purple-900 to-purple-800 border-purple-700 p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-purple-700 p-3 rounded-lg">
              <Sparkles className="w-6 h-6 text-purple-200" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">AI Platform Insights</h3>
              <ul className="space-y-2 text-sm text-purple-100">
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">→</span>
                  <span>
                    <strong>Predicted Growth:</strong> 15% increase in active warehouses expected next quarter
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">→</span>
                  <span>
                    <strong>System Optimization:</strong> Peak load expected 2-4 PM EST, recommend scaling preparation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-300 mt-1">→</span>
                  <span>
                    <strong>Churn Alert:</strong> 2 companies showing reduced API usage - reach out for support
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Management Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Companies</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Manage subscriptions, billing, and company settings</p>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Companies</Button>
          </Card>

          <Card className="bg-slate-900 border-slate-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Users & Access</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Monitor user activity and security logs</p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Manage Users</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
