"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { Box, Layers, Info } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock Data Types
interface Bin {
    id: string
    name: string
    status: "empty" | "partial" | "full" | "maintenance"
    capacity: number
    current: number
    sku?: string
    productName?: string
}

interface Rack {
    id: string
    name: string
    bins: Bin[]
}

interface Zone {
    id: string
    name: string
    type: string
    racks: Rack[]
}

const MOCK_ZONES: Zone[] = [
    {
        id: "zone-a",
        name: "Zone A (Electronics)",
        type: "High Value",
        racks: Array.from({ length: 4 }).map((_, rIdx) => ({
            id: `rack-a-${rIdx}`,
            name: `Rack A-0${rIdx + 1}`,
            bins: Array.from({ length: 20 }).map((_, bIdx) => {
                const usage = Math.random()
                let status: Bin["status"] = "empty"
                if (usage > 0.8) status = "full"
                else if (usage > 0.3) status = "partial"

                return {
                    id: `bin-a-${rIdx}-${bIdx}`,
                    name: `A-${rIdx + 1}-${bIdx + 1}`,
                    status,
                    capacity: 100,
                    current: status === "empty" ? 0 : Math.floor(usage * 100),
                    sku: status === "empty" ? undefined : `SKU-${1000 + bIdx}`,
                    productName: status === "empty" ? undefined : "Electronic Component"
                }
            })
        }))
    },
    {
        id: "zone-b",
        name: "Zone B (Bulk Storage)",
        type: "Standard",
        racks: Array.from({ length: 3 }).map((_, rIdx) => ({
            id: `rack-b-${rIdx}`,
            name: `Rack B-0${rIdx + 1}`,
            bins: Array.from({ length: 16 }).map((_, bIdx) => {
                const usage = Math.random()
                const status: Bin["status"] = usage > 0.6 ? "full" : "empty"
                return {
                    id: `bin-b-${rIdx}-${bIdx}`,
                    name: `B-${rIdx + 1}-${bIdx + 1}`,
                    status,
                    capacity: 500,
                    current: status === "empty" ? 0 : 500,
                    sku: status === "empty" ? undefined : `SKU-BULK-${bIdx}`
                }
            })
        }))
    },
    {
        id: "zone-c",
        name: "Zone C (Cold Storage)",
        type: "Temperature Controlled",
        racks: Array.from({ length: 2 }).map((_, rIdx) => ({
            id: `rack-c-${rIdx}`,
            name: `Rack C-0${rIdx + 1}`,
            bins: Array.from({ length: 12 }).map((_, bIdx) => ({
                id: `bin-c-${rIdx}-${bIdx}`,
                name: `C-${rIdx + 1}-${bIdx + 1}`,
                status: bIdx % 3 === 0 ? "maintenance" : "partial",
                capacity: 200,
                current: 50,
                sku: "FROZEN-ITEM"
            }))
        }))
    }
]

export default function VisualMap() {
    const [activeZoneId, setActiveZoneId] = useState(MOCK_ZONES[0].id)
    const [selectedBin, setSelectedBin] = useState<Bin | null>(null)

    const activeZone = MOCK_ZONES.find(z => z.id === activeZoneId) || MOCK_ZONES[0]

    const getStatusColor = (status: Bin["status"]) => {
        switch (status) {
            case "full": return "bg-primary hover:bg-primary/90 border-primary"
            case "partial": return "bg-orange-400 hover:bg-orange-500 border-orange-400"
            case "maintenance": return "bg-destructive hover:bg-destructive/90 border-destructive"
            default: return "bg-muted hover:bg-muted-foreground/20 border-border"
        }
    }

    const getStatusLabel = (status: Bin["status"]) => {
        switch (status) {
            case "full": return "Occupied"
            case "partial": return "Partial"
            case "maintenance": return "Maintenance"
            default: return "Empty"
        }
    }

    return (
        <div className="flex flex-col gap-6 h-[calc(100vh-200px)]">
            {/* Zone Selector */}
            <div className="flex gap-2 p-1 bg-muted/50 rounded-lg w-fit">
                {MOCK_ZONES.map(zone => (
                    <button
                        key={zone.id}
                        onClick={() => {
                            setActiveZoneId(zone.id)
                            setSelectedBin(null)
                        }}
                        className={cn(
                            "px-4 py-2 rounded-md text-sm font-medium transition-all",
                            activeZoneId === zone.id
                                ? "bg-background text-foreground shadow-sm"
                                : "text-muted-foreground hover:text-foreground"
                        )}
                    >
                        {zone.name}
                    </button>
                ))}
            </div>

            <div className="flex flex-1 gap-6 overflow-hidden">
                {/* Map Area */}
                <Card className="flex-1 bg-card/50 backdrop-blur border-border p-6 overflow-auto relative">
                    <div className="absolute top-4 right-4 flex gap-4 text-xs">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-muted border border-border" />
                            <span className="text-muted-foreground">Empty</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-orange-400" />
                            <span className="text-muted-foreground">Partial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-primary" />
                            <span className="text-muted-foreground">Full</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-sm bg-destructive" />
                            <span className="text-muted-foreground">Maintenance</span>
                        </div>
                    </div>

                    <div className="min-w-[800px] space-y-8 mt-4">
                        {activeZone.racks.map(rack => (
                            <div key={rack.id} className="space-y-3">
                                <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                    <Layers className="w-4 h-4" />
                                    {rack.name}
                                </div>
                                <div className="grid grid-cols-10 gap-2">
                                    {rack.bins.map(bin => (
                                        <TooltipProvider key={bin.id}>
                                            <Tooltip delayDuration={0}>
                                                <TooltipTrigger asChild>
                                                    <button
                                                        onClick={() => setSelectedBin(bin)}
                                                        className={cn(
                                                            "h-12 rounded-md border transition-all duration-200 relative group",
                                                            getStatusColor(bin.status),
                                                            selectedBin?.id === bin.id ? "ring-2 ring-foreground ring-offset-2" : ""
                                                        )}
                                                    >
                                                        <span className="text-[10px] font-medium opacity-50 group-hover:opacity-100 dark:text-black">
                                                            {bin.name.split('-')[2]}
                                                        </span>
                                                    </button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="font-bold">{bin.name}</p>
                                                    <p className="text-xs text-muted-foreground">{getStatusLabel(bin.status)}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Selected Bin Details */}
                <div className="w-80 flex-shrink-0">
                    {selectedBin ? (
                        <Card className="h-full p-6 border-border bg-card flex flex-col animate-in slide-in-from-right-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className="bg-primary/20 p-3 rounded-lg">
                                    <Box className="w-6 h-6 text-primary" />
                                </div>
                                <Badge variant={selectedBin.status === 'full' ? 'default' : 'secondary'}>
                                    {getStatusLabel(selectedBin.status)}
                                </Badge>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-1">{selectedBin.name}</h3>
                            <p className="text-sm text-muted-foreground mb-6">Located in {activeZone.name}</p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Usage</p>
                                    <div className="flex items-end gap-2 mb-1">
                                        <span className="text-3xl font-bold text-foreground">{Math.round((selectedBin.current / selectedBin.capacity) * 100)}%</span>
                                        <span className="text-sm text-muted-foreground mb-1">filled</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div
                                            className={cn("h-2 rounded-full transition-all",
                                                selectedBin.status === 'maintenance' ? 'bg-destructive' : 'bg-primary'
                                            )}
                                            style={{ width: `${(selectedBin.current / selectedBin.capacity) * 100}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2 flex justify-between">
                                        <span>{selectedBin.current} units</span>
                                        <span>{selectedBin.capacity} max</span>
                                    </p>
                                </div>

                                {selectedBin.sku && (
                                    <div className="p-4 bg-muted/50 rounded-lg border border-border">
                                        <p className="text-xs text-muted-foreground mb-1">Current Item</p>
                                        <p className="font-semibold text-foreground">{selectedBin.productName || "Unknown Product"}</p>
                                        <p className="text-xs font-mono text-primary mt-1">{selectedBin.sku}</p>
                                    </div>
                                )}

                                <div className="pt-4 border-t border-border mt-auto">
                                    <Button className="w-full">
                                        Manage Contents
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Card className="h-full p-6 border-border border-dashed bg-muted/20 flex flex-col items-center justify-center text-center">
                            <div className="bg-muted p-4 rounded-full mb-4">
                                <Info className="w-8 h-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">No Bin Selected</h3>
                            <p className="text-sm text-muted-foreground">
                                Click on any bin in the map to view detailed information and manage inventory.
                            </p>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}
