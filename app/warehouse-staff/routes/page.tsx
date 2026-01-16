"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation, MapPin, Package, CheckSquare } from "lucide-react"

export default function RoutesPage() {
    const activeRoute = [
        { id: 1, location: "Zone A - Aisle 3 - Shelf 2", action: "Pick", item: "Wireless Mouse X1", qty: 20, done: true },
        { id: 2, location: "Zone A - Aisle 4 - Shelf 1", action: "Pick", item: "Keyboard Pro", qty: 10, done: false, active: true },
        { id: 3, location: "Zone B - Aisle 1 - Shelf 5", action: "Pick", item: "Monitor Stand", qty: 5, done: false },
        { id: 4, location: "Packing Station 1", action: "Dropoff", item: "All Items", qty: "-", done: false },
    ]

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Optimized Route</h1>

            <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl mb-6 flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                    <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-bold text-foreground">Current Path: Order #10234</h3>
                    <p className="text-sm text-muted-foreground">Total Distance: 120m • Est. Time: 15 mins</p>
                </div>
            </div>

            <div className="relative border-l-2 border-muted ml-6 space-y-8 py-2">
                {activeRoute.map((step, index) => (
                    <div key={step.id} className="relative pl-8">
                        <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 ${step.done ? 'bg-green-500 border-green-500' :
                            step.active ? 'bg-primary border-primary animate-pulse' :
                                'bg-background border-muted-foreground'
                            }`}></span>

                        <Card className={`p-4 border-border ${step.active ? 'border-primary shadow-md shadow-primary/10' : 'bg-card'}`}>
                            <div className="flex justify-between items-start mb-2">
                                <h4 className={`font-bold ${step.active ? 'text-primary' : 'text-foreground'}`}>
                                    Step {index + 1}: {step.action}
                                </h4>
                                {step.done && <CheckSquare className="w-5 h-5 text-green-500" />}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                                <MapPin className="w-4 h-4" />
                                {step.location}
                            </div>
                            <div className="bg-muted p-2 rounded flex items-center justify-between">
                                <span className="text-sm font-medium flex items-center gap-2">
                                    <Package className="w-4 h-4" /> {step.item}
                                </span>
                                <span className="font-bold text-foreground">Qty: {step.qty}</span>
                            </div>
                            {step.active && (
                                <Button className="w-full mt-4">Confirm {step.action}</Button>
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}
