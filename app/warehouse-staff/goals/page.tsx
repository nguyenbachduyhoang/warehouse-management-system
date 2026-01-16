"use client"

import { Card } from "@/components/ui/card"
import { Target, Trophy, TrendingUp } from "lucide-react"

export default function GoalsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-foreground">Goals & Targets</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                        <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Weekly Pick Rate</h2>
                    <p className="text-3xl font-bold text-primary my-2">95%</p>
                    <p className="text-sm text-muted-foreground">Target: 90%</p>
                </Card>

                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="bg-yellow-500/10 p-4 rounded-full mb-4">
                        <Trophy className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Task Completion</h2>
                    <p className="text-3xl font-bold text-yellow-500 my-2">124</p>
                    <p className="text-sm text-muted-foreground">Target: 100 / week</p>
                </Card>

                <Card className="p-6 bg-card border-border flex flex-col items-center text-center">
                    <div className="bg-green-500/10 p-4 rounded-full mb-4">
                        <TrendingUp className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Efficiency Score</h2>
                    <p className="text-3xl font-bold text-green-500 my-2">4.8</p>
                    <p className="text-sm text-muted-foreground">Max: 5.0</p>
                </Card>
            </div>
        </div>
    )
}
