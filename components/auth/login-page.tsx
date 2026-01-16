"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Settings, ArrowRight, Check, Zap, TrendingUp, Shield } from "lucide-react"

interface LoginPageProps {
  onRoleSelect: (role: string) => void
}

export default function LoginPage({ onRoleSelect }: LoginPageProps) {
  const [email, setEmail] = useState("")
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleLogin = () => {
    if (selectedRole && email) {
      onRoleSelect(selectedRole)
    }
  }

  const roles = [
    {
      id: "system_super_admin",
      title: "System Super Admin",
      icon: Settings,
      description: "Platform-wide monitoring & company management",
    },
    {
      id: "company_admin",
      title: "Company Administrator",
      icon: TrendingUp,
      description: "Warehouse operations & inventory control",
    },
    {
      id: "warehouse_staff",
      title: "Warehouse Staff",
      icon: Package,
      description: "Daily tasks & picking operations",
    },
  ]

  const features = [
    { icon: Zap, title: "Real-Time Intelligence", desc: "AI-powered inventory tracking" },
    { icon: TrendingUp, title: "Optimized Operations", desc: "40% faster picking with AI routes" },
    { icon: Shield, title: "Enterprise Security", desc: "Role-based access control" },
    { icon: Package, title: "Complete Visibility", desc: "Live warehouse analytics" },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Left Section - Modern Clean Light Theme */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden p-16 flex-col justify-between bg-white border-r border-slate-200">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#0f766e 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

        <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-16">
            <div className="bg-teal-600 p-2.5 rounded-xl shadow-lg shadow-teal-200">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Storix</h1>
          </div>

          {/* Main heading */}
          <div className="mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6 border border-teal-100">
              New Version 2.0
            </span>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Smart Warehouse <br />
              <span className="text-teal-600">Management</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-md leading-relaxed">
              Experience the next generation of inventory control with AI-driven insights and automated optimization.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature, i) => {
              const IconComponent = feature.icon
              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm border border-slate-100 group-hover:border-teal-200 group-hover:shadow-md transition-all">
                    <IconComponent className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 mb-1">{feature.title}</p>
                    <p className="text-slate-500 text-sm leading-snug">{feature.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-slate-400 text-sm mt-auto">
          <p>© 2026 Storix Inc. All rights reserved.</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex flex-col justify-center px-8 lg:px-24 py-12">
        <div className="max-w-[420px] w-full mx-auto animate-in fade-in zoom-in-95 duration-500">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-10">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Package className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Storix</h1>
          </div>

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 block">Welcome back</h2>
            <p className="text-slate-500">Please enter your details to sign in.</p>
          </div>

          {/* Email Input */}
          <div className="mb-6 space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Email Address</label>
            <Input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-teal-500"
            />
          </div>

          {/* Role Selection */}
          <div className="mb-8 space-y-3">
            <label className="block text-sm font-semibold text-slate-700">Select Role</label>
            <div className="space-y-3">
              {roles.map((role) => {
                const IconComponent = role.icon
                const isSelected = selectedRole === role.id
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all text-left outline-none relative overflow-hidden group ${isSelected
                        ? "border-teal-600 bg-teal-50 shadow-md"
                        : "border-slate-200 bg-white hover:border-teal-200 hover:shadow-sm"
                      }`}
                  >
                    <div className="flex items-start gap-4 relative z-10">
                      <div
                        className={`p-2.5 rounded-lg flex-shrink-0 transition-colors ${isSelected
                            ? "bg-teal-600 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:text-teal-600 group-hover:bg-teal-50"
                          }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold mb-0.5 ${isSelected ? "text-teal-900" : "text-slate-900"}`}>
                          {role.title}
                        </h3>
                        <p className={`text-xs ${isSelected ? "text-teal-700 font-medium" : "text-slate-500"}`}>
                          {role.description}
                        </p>
                      </div>
                      {isSelected && <div className="bg-teal-600 rounded-full p-0.5"><Check className="w-3 h-3 text-white stroke-[3px]" /></div>}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleLogin}
            disabled={!selectedRole || !email}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 rounded-xl text-base shadow-lg shadow-teal-600/20 disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
          >
            Sign in <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <p className="text-center text-slate-400 text-xs mt-8">
            System v2.4.0 • Secure Connection
          </p>
        </div>
      </div>
    </div>
  )
}

