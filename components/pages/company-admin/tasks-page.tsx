"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, CheckCircle, Clock, AlertCircle } from "lucide-react"
import SectionLayout from "@/components/layouts/section-layout"

interface TasksPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function TasksPage({ onBack, onLogout }: TasksPageProps) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      type: "Putaway",
      location: "Zone A",
      items: 45,
      assignee: "John Doe",
      status: "Completed",
      date: "2024-01-15",
    },
    {
      id: 2,
      type: "Picking",
      location: "Zone B",
      items: 32,
      assignee: "Jane Smith",
      status: "In Progress",
      date: "2024-01-15",
    },
    {
      id: 3,
      type: "Counting",
      location: "Zone C",
      items: 120,
      assignee: "Mike Johnson",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      id: 4,
      type: "Putaway",
      location: "Zone D",
      items: 28,
      assignee: "John Doe",
      status: "In Progress",
      date: "2024-01-14",
    },
  ])

  const [filterType, setFilterType] = useState("all")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "In Progress":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "Pending":
        return <AlertCircle className="w-5 h-5 text-gray-400" />
      default:
        return null
    }
  }

  return (
    <SectionLayout title="Task Management" onBack={onBack} onLogout={onLogout}>
      {/* Header */}
      <div className="flex gap-4 mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-border rounded-lg bg-background text-foreground"
        >
          <option value="all">All Tasks</option>
          <option value="putaway">Putaway</option>
          <option value="picking">Picking</option>
          <option value="counting">Counting</option>
        </select>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 ml-auto">
          <Plus className="w-4 h-4" /> Create Task
        </Button>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Total Tasks</p>
          <p className="text-2xl font-bold text-foreground">247</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Completed</p>
          <p className="text-2xl font-bold text-green-600">156</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">In Progress</p>
          <p className="text-2xl font-bold text-yellow-600">67</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground mb-1">Pending</p>
          <p className="text-2xl font-bold text-muted-foreground">24</p>
        </Card>
      </div>

      {/* Tasks Table */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Type</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Location</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Assignee</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {tasks.map((task) => (
                <tr key={task.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">{task.type}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{task.location}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{task.items}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{task.assignee}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(task.status)}
                      {task.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{task.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </SectionLayout>
  )
}
