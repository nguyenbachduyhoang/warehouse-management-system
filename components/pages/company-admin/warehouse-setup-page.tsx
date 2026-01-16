"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Edit2, Trash2, MapPin } from "lucide-react"
import SectionLayout from "@/components/layouts/section-layout"

interface WarehouseSetupPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function WarehouseSetupPage({ onBack, onLogout }: WarehouseSetupPageProps) {
  const [zones, setZones] = useState([
    { id: 1, name: "Zone A", capacity: 5000, used: 3650, aisles: 8 },
    { id: 2, name: "Zone B", capacity: 4000, used: 2800, aisles: 6 },
    { id: 3, name: "Zone C", capacity: 3000, used: 1800, aisles: 4 },
  ])

  const [staff, setStaff] = useState([
    { id: 1, name: "John Doe", role: "Warehouse Staff", email: "john@example.com", tasks: 12 },
    { id: 2, name: "Jane Smith", role: "Warehouse Staff", email: "jane@example.com", tasks: 8 },
    { id: 3, name: "Mike Johnson", role: "Manager", email: "mike@example.com", tasks: 0 },
  ])

  return (
    <SectionLayout title="Warehouse Setup" onBack={onBack} onLogout={onLogout}>
      {/* Warehouse Overview */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">Warehouse Structure</h3>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Zone
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <Card key={zone.id} className="bg-card border-border p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-muted rounded">
                    <Edit2 className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-muted rounded">
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </button>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{zone.name}</h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="font-semibold">
                    {zone.used}/{zone.capacity}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${(zone.used / zone.capacity) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{zone.aisles} Aisles</span>
                  <span>{Math.round((zone.used / zone.capacity) * 100)}% Used</span>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent">
                Manage Zone
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Staff Management */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-foreground">Staff Members</h3>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Invite Staff
          </Button>
        </div>

        <Card className="bg-card border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Tasks Assigned</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {staff.map((member) => (
                  <tr key={member.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{member.email}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-medium">
                        {member.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{member.tasks}</td>
                    <td className="px-6 py-4 text-sm flex gap-2">
                      <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-foreground">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded text-muted-foreground hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </SectionLayout>
  )
}
