"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import LoginPage from "@/components/auth/login-page"

export default function Home() {
  const router = useRouter()

  const handleRoleSelect = (role: string) => {
    if (role === "company_admin") {
      router.push("/dashboard")
    } else if (role === "system_super_admin") {
      router.push("/system-admin")
    } else if (role === "warehouse_staff") {
      router.push("/warehouse-staff")
    }
  }

  return <LoginPage onRoleSelect={handleRoleSelect} />
}
