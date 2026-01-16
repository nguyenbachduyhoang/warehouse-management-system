"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Lightbulb, Zap, ArrowRight, Map, Box, Thermometer, Weight, TrendingUp, Layers } from "lucide-react"

export default function AISuggestionsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">AI Smart Tips & Optimization</h1>

            {/* AI Summary Banner */}
            <div className="p-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="bg-purple-500/20 p-4 rounded-full">
                    <Brain className="w-10 h-10 text-purple-400" />
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-2">Personalized Daily Insights</h2>
                    <p className="text-muted-foreground">
                        Analysis of your last 48 hours shows a <strong>15% efficiency gap</strong> in Zone B navigation.
                        Applying the recommendations below could save you approx. <strong>25 minutes</strong> today.
                    </p>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Apply All Tips
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Section 1: Route Optimization */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Map className="w-5 h-5 text-blue-500" /> Route Optimization
                    </h3>

                    <Card className="p-0 overflow-hidden bg-card border-border">
                        <div className="p-4 border-b border-border bg-muted/30">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h4 className="font-bold text-foreground">Picking Path Analysis</h4>
                                    <p className="text-xs text-muted-foreground">Batch #1024 (Zone A - Electronics)</p>
                                </div>
                                <Badge variant="outline" className="border-green-500 text-green-500 bg-green-500/10">
                                    Save 450m walking
                                </Badge>
                            </div>

                            {/* Visual Map Placeholder */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-center text-muted-foreground">Standard Path</p>
                                    <div className="aspect-square bg-background border border-border rounded-lg relative opacity-60">
                                        {/* Simplified Abstract Path */}
                                        <div className="absolute inset-4 border-l-2 border-t-2 border-dashed border-red-400/50 w-full h-full" />
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full" />
                                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full" />
                                        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-red-500 rounded-full" />
                                        <div className="absolute top-2 left-2 text-[10px] text-red-400">Inefficient Zig-Zag</div>
                                    </div>
                                    <p className="text-center text-sm font-mono text-red-500">12 mins / 850m</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-xs font-semibold text-center text-primary">AI Optimized</p>
                                    <div className="aspect-square bg-primary/5 border border-primary/20 rounded-lg relative">
                                        {/* Simplified Optimized Path */}
                                        <div className="absolute inset-4 border-2 border-primary w-2/3 h-2/3 rounded-tr-xl" />
                                        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full" />
                                        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full" />
                                        <div className="absolute top-2 left-2 text-[10px] text-primary">Snake Pattern</div>
                                    </div>
                                    <p className="text-center text-sm font-mono text-green-500 font-bold">8 mins / 400m</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5 className="font-semibold text-sm mb-2">Suggestion</h5>
                            <p className="text-sm text-muted-foreground mb-3">
                                Instead of picking by Order ID, enable <strong>"Wave Picking"</strong> mode to collect items for multiple orders in one unidirectional sweep.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">Enable Wave Picking Mode</Button>
                        </div>
                    </Card>
                </div>

                {/* Section 2: Smart Storage & Putaway */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Layers className="w-5 h-5 text-yellow-500" /> Smart Storage Suggestions
                    </h3>

                    <div className="space-y-3">
                        {/* Recommendation 1: Heavy Items */}
                        <Card className="p-4 bg-card border-border flex items-start gap-4">
                            <div className="bg-orange-500/10 p-2 rounded-lg mt-1">
                                <Weight className="w-5 h-5 text-orange-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-foreground text-sm">Heavy Item Protocol</h4>
                                <p className="text-xs text-muted-foreground mt-1 mb-2">
                                    Incoming shipment #992 includes <strong>Industrial Motors (45kg)</strong>.
                                </p>
                                <div className="bg-muted p-2 rounded text-xs flex items-center gap-2 border border-border">
                                    <span className="font-bold text-orange-500">Action:</span>
                                    Place on <strong>Rack A1 - Bottom Shelf</strong> only. Do not stack &gt; 2 high.
                                </div>
                            </div>
                        </Card>

                        {/* Recommendation 2: Seasonality */}
                        <Card className="p-4 bg-card border-border flex items-start gap-4">
                            <div className="bg-blue-500/10 p-2 rounded-lg mt-1">
                                <Thermometer className="w-5 h-5 text-blue-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-foreground text-sm">Seasonal Rotation: Winter</h4>
                                <p className="text-xs text-muted-foreground mt-1 mb-2">
                                    Demand for <strong>Heated Jackets</strong> is spiking (+200%).
                                </p>
                                <div className="bg-muted p-2 rounded text-xs flex items-center gap-2 border border-border">
                                    <span className="font-bold text-blue-500">Action:</span>
                                    Move stock from <strong>Zone D (Deep Storage)</strong> to <strong>Zone A (Fast Pick)</strong>.
                                </div>
                            </div>
                        </Card>

                        {/* Recommendation 3: Volume/Space */}
                        <Card className="p-4 bg-card border-border flex items-start gap-4">
                            <div className="bg-green-500/10 p-2 rounded-lg mt-1">
                                <Box className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-foreground text-sm">Volume Optimization</h4>
                                <p className="text-xs text-muted-foreground mt-1 mb-2">
                                    <strong>Phone Cables</strong> are taking up 3 Pallet spaces unnecessarily.
                                </p>
                                <div className="bg-muted p-2 rounded text-xs flex items-center gap-2 border border-border">
                                    <span className="font-bold text-green-500">Action:</span>
                                    Consolidate into <strong>Bin Boxes</strong> on Rack C4. Frees up 2 pallet positions.
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Additional Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card className="p-4 border-l-4 border-l-yellow-500 bg-card">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <h4 className="font-bold text-sm">Peak Hour Alert</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Trucks arriving at 2 PM. Charge forklift #4 (currently 20%) now.
                    </p>
                </Card>
                <Card className="p-4 border-l-4 border-l-blue-500 bg-card">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-blue-500" />
                        <h4 className="font-bold text-sm">Cross-Docking Opp</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Order #552 items are arriving in Inbound #3. Move directly to Outbound Dock 2.
                    </p>
                </Card>
                <Card className="p-4 border-l-4 border-l-purple-500 bg-card">
                    <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-purple-500" />
                        <h4 className="font-bold text-sm">Safety Reminder</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Heavy rain forecasted. Check Loading Bay seals for leaks before shift end.
                    </p>
                </Card>
            </div>
        </div>
    )
}
