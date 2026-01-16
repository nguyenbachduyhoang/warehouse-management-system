"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, CheckCircle, Star } from "lucide-react"

export default function PerformancePage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">My Performance</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Tasks Completed</h3>
                    <p className="text-3xl font-bold text-foreground">1,240</p>
                    <div className="flex items-center text-green-500 text-sm mt-1">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Top 5%
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Avg Picking Rate</h3>
                    <p className="text-3xl font-bold text-foreground">45</p>
                    <span className="text-xs text-muted-foreground">items / hour</span>
                    <div className="flex items-center text-blue-500 text-sm mt-1">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        +12% this week
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Accuracy Rate</h3>
                    <p className="text-3xl font-bold text-foreground">99.9%</p>
                    <div className="flex items-center text-yellow-500 text-sm mt-1">
                        <Star className="w-4 h-4 mr-1" fill="currentColor" />
                        Excellent
                    </div>
                </Card>
                <Card className="p-6 bg-card border-border">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Distance Traveled</h3>
                    <p className="text-3xl font-bold text-foreground">4.2 km</p>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        Today
                    </div>
                </Card>
            </div>

            <h2 className="text-lg font-semibold mb-4 text-foreground">Recent Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-r from-yellow-500/10 to-transparent border-yellow-500/20 flex items-center gap-4">
                    <div className="bg-yellow-500/20 p-3 rounded-full">
                        <Star className="w-8 h-8 text-yellow-500" fill="currentColor" />
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground">Perfect Week</h3>
                        <p className="text-sm text-muted-foreground">0 errors recorded for 7 consecutive days.</p>
                    </div>
                </Card>
                <Card className="p-4 bg-gradient-to-r from-blue-500/10 to-transparent border-blue-500/20 flex items-center gap-4">
                    <div className="bg-blue-500/20 p-3 rounded-full">
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-foreground">Speed Demon</h3>
                        <p className="text-sm text-muted-foreground">Completed 50 picks in under 1 hour.</p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
