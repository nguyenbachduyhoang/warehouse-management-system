"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download } from "lucide-react"
import SectionLayout from "@/components/layouts/section-layout"

interface ReportsPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function ReportsPage({ onBack, onLogout }: ReportsPageProps) {
  const chartData = [
    { month: "Jan", inbound: 450, outbound: 380, efficiency: 92 },
    { month: "Feb", inbound: 520, outbound: 410, efficiency: 94 },
    { month: "Mar", inbound: 480, outbound: 450, efficiency: 91 },
    { month: "Apr", inbound: 610, outbound: 520, efficiency: 95 },
    { month: "May", inbound: 550, outbound: 480, efficiency: 93 },
    { month: "Jun", inbound: 680, outbound: 590, efficiency: 96 },
  ]

  return (
    <SectionLayout title="Reports & Analytics" onBack={onBack} onLogout={onLogout}>
      {/* Export Button */}
      <div className="flex gap-4 mb-6">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
          <Download className="w-4 h-4" /> Export Report
        </Button>
        <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground">
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Inbound</p>
          <p className="text-2xl font-bold text-foreground">3,290</p>
          <p className="text-xs text-primary">+12% vs last period</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Outbound</p>
          <p className="text-2xl font-bold text-foreground">2,830</p>
          <p className="text-xs text-primary">+8% vs last period</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Avg Efficiency</p>
          <p className="text-2xl font-bold text-green-600">93.5%</p>
          <p className="text-xs text-primary">+2% improvement</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Cost Savings</p>
          <p className="text-2xl font-bold text-foreground">$45K</p>
          <p className="text-xs text-primary">AI optimization</p>
        </Card>
      </div>

      {/* Charts */}
      <Card className="bg-card border-border p-6 mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Operations Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
            <Legend />
            <Line type="monotone" dataKey="inbound" stroke="var(--primary)" strokeWidth={2} name="Inbound Orders" />
            <Line type="monotone" dataKey="outbound" stroke="#06b6d4" strokeWidth={2} name="Outbound Orders" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="bg-card border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Efficiency by Month</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis stroke="var(--muted-foreground)" />
            <YAxis stroke="var(--muted-foreground)" />
            <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }} />
            <Bar dataKey="efficiency" fill="var(--primary)" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </SectionLayout>
  )
}
