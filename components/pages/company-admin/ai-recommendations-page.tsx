"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { ArrowLeft, Sparkles, Brain, TrendingUp, Zap, AlertCircle, Check, Send, LogOut } from "lucide-react"

interface AIRecommendationsPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function AIRecommendationsPage({ onBack, onLogout }: AIRecommendationsPageProps) {
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null)
  const [aiQuery, setAiQuery] = useState("")
  const [aiResponses, setAiResponses] = useState<Array<{ query: string; response: string }>>([])

  const demandForecast = [
    { week: "Week 1", predicted: 2400, actual: 2400 },
    { week: "Week 2", predicted: 2210, actual: 2290 },
    { week: "Week 3", predicted: 2290, actual: 2000 },
    { week: "Week 4", predicted: 2000, actual: 2181 },
    { week: "Week 5", predicted: 2181, actual: 2500 },
  ]

  const storageOptimization = [
    { zone: "Zone A", utilization: 95, capacity: 100, recommendation: "Consider expansion" },
    { zone: "Zone B", utilization: 72, capacity: 100, recommendation: "Good utilization" },
    { zone: "Zone C", utilization: 45, capacity: 100, recommendation: "Consolidate items" },
    { zone: "Zone D", utilization: 88, capacity: 100, recommendation: "Monitor closely" },
  ]

  const recommendations = [
    {
      id: "reorder",
      title: "Optimal Reorder Timing",
      icon: Zap,
      description: "Based on demand forecast, reorder 500 units of SKU-001 in 3 days",
      confidence: 94,
      impact: "Prevent 15% stockout risk",
      action: "Create PO",
    },
    {
      id: "storage",
      title: "Storage Optimization",
      icon: TrendingUp,
      description: "Move slow-moving items to Zone C to improve picking efficiency",
      confidence: 87,
      impact: "Reduce picking time by 12%",
      action: "Apply Changes",
    },
    {
      id: "route",
      title: "Route Optimization",
      icon: Brain,
      description: "New picking sequence for High-Velocity items reduces travel distance",
      confidence: 91,
      impact: "Save 28m per picking cycle",
      action: "Start Using",
    },
    {
      id: "staffing",
      title: "Staffing Forecast",
      icon: AlertCircle,
      description: "Predict 40% increase in orders on Friday - add 2 staff members",
      confidence: 88,
      impact: "Improve on-time delivery",
      action: "Schedule Staff",
    },
  ]

  const handleAIQuery = () => {
    if (!aiQuery.trim()) return

    const mockResponses: Record<string, string> = {
      forecast:
        "Based on historical data and seasonal trends, I predict a 25% increase in demand for Q2 2026. Recommend increasing stock levels by 30% for high-velocity items and 15% for seasonal products.",
      optimization:
        "Current warehouse utilization is at 73%. I recommend consolidating SKU-047 and SKU-103 in Zone B to improve picking efficiency by 18%. Expected travel distance reduction: 32 meters per cycle.",
      inventory:
        "Your critical items (Electronics Pack A) will reach minimum stock in 8 days at current consumption rate. With lead time of 12 days, you must place order within 4 days to avoid stockout.",
      staff:
        "Historical data shows Fridays have 35% higher order volume. Recommend scheduling additional 2 staff members on Friday to maintain 95% on-time delivery rate.",
      default:
        "AI Analysis: Based on current warehouse data and machine learning models, I recommend prioritizing the implementation of zone-based storage optimization, which could improve operational efficiency by 20-25%.",
    }

    const responseKey = Object.keys(mockResponses).find((key) => aiQuery.toLowerCase().includes(key))
    const response = mockResponses[responseKey || "default"]

    setAiResponses([...aiResponses, { query: aiQuery, response }])
    setAiQuery("")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              AI Intelligence Hub
            </h1>
          </div>
          <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
        {/* AI Chat Interface */}
        <Card className="bg-card border-border p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Ask Storix AI Assistant
          </h2>
          <div className="space-y-4">
            {aiResponses.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="bg-primary/20 p-4 rounded-lg border border-primary/30">
                  <p className="text-sm text-foreground font-medium">You: {item.query}</p>
                </div>
                <div className="bg-muted p-4 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">AI: {item.response}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-2">
              <Input
                placeholder="Ask about demand forecast, storage optimization, reordering, staffing..."
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleAIQuery()}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground bg-muted/50"
              />
              <Button onClick={handleAIQuery} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Recommendations Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Smart Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec) => {
              const Icon = rec.icon
              return (
                <Card
                  key={rec.id}
                  className="bg-card border-border p-6 cursor-pointer hover:border-primary/50 transition-all"
                  onClick={() => setSelectedRecommendation(rec.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-bold bg-primary/20 text-primary px-2 py-1 rounded">
                      {rec.confidence}% Confidence
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{rec.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium">📈 {rec.impact}</span>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8">{rec.action}</Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Demand Forecast Chart */}
        <Card className="bg-card border-border p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">Demand Forecast (AI Prediction)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={demandForecast}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }} />
              <Legend />
              <Line
                type="monotone"
                dataKey="predicted"
                stroke="var(--primary)"
                strokeWidth={2}
                name="AI Prediction"
                strokeDasharray="5 5"
              />
              <Line type="monotone" dataKey="actual" stroke="var(--foreground)" strokeWidth={2} name="Actual Demand" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Storage Optimization */}
        <Card className="bg-card border-border p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Zone Utilization & AI Recommendations</h2>
          <div className="space-y-3">
            {storageOptimization.map((zone, i) => (
              <div key={i} className="bg-muted/50 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">{zone.zone}</span>
                  <span className="text-sm text-primary font-medium">{zone.utilization}% Utilization</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: `${zone.utilization}%` }}></div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  {zone.recommendation}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  )
}
