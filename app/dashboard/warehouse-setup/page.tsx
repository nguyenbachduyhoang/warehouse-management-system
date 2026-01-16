"use client"

import VisualMap from "@/components/dashboard/warehouse/visual-map"
import { Button } from "@/components/ui/button"
import { Download, Plus, Settings2 } from "lucide-react"

export default function WarehouseSetupPage() {
    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Warehouse Layout</h1>
                    <p className="text-muted-foreground">Visualise and manage your warehouse zones, racks, and bins.</p>
                </div>

                <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Settings2 className="w-4 h-4" />
                        Configure
                    </Button>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Zone
                    </Button>
                </div>
            </div>

            <div className="flex-1 min-h-0">
                <VisualMap />
            </div>
        </div>
    )
}
