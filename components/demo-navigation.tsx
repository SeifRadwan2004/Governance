"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import {
  Building2,
  Users,
  UserCheck,
  UserCog,
  Briefcase,
  User,
  Shield,
  GraduationCap,
  UserPlus,
  Scale,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function DemoNavigation() {
  const router = useRouter()

  const handleRoleSelect = (role: string) => {
    try {
      localStorage.setItem("userRole", role)
    } catch (error) {
      console.error("Error setting localStorage:", error)
    }
    router.push("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-corporate-50 to-white p-4">
      <div className="mb-8 flex items-center space-x-2">
        <Building2 className="h-12 w-12 text-corporate-600" />
        <h1 className="text-4xl font-bold text-corporate-800">GovernancePro</h1>
      </div>

      <Card className="w-full max-w-6xl border-corporate-100 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-corporate-800">Governance Platform Demo</CardTitle>
          <CardDescription className="text-lg">Select a role to explore the different dashboards</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RoleCard
              title="Admin"
              description="Configure organization settings and voting rules"
              icon={<Shield className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("admin")}
            />

            <RoleCard
              title="Shareholder"
              description="View shareholding, delegate voting rights, and attend meetings"
              icon={<User className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("shareholder")}
            />

            <RoleCard
              title="General Assembly"
              description="Participate in meetings and vote on resolutions"
              icon={<Users className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("assembly")}
            />

            <RoleCard
              title="Chairman"
              description="Create meetings, set agendas, and monitor voting"
              icon={<UserCog className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("chairman")}
            />

            <RoleCard
              title="Managing Director"
              description="Oversee operations and strategic initiatives"
              icon={<Briefcase className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("md")}
            />

            <RoleCard
              title="BOD Member"
              description="Track KPIs and monitor implementation of resolutions"
              icon={<UserCheck className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("bod")}
            />

            <RoleCard
              title="CEO"
              description="Review and implement approved resolutions"
              icon={<GraduationCap className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("ceo")}
            />

            <RoleCard
              title="Committee Member"
              description="Participate in specialized committee activities"
              icon={<UserPlus className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("committee")}
            />

            <RoleCard
              title="Legal Consultant"
              description="Single-person operation mode for external consultants"
              icon={<Scale className="h-10 w-10 text-corporate-500" />}
              onClick={() => handleRoleSelect("legal")}
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center border-t border-corporate-100 p-6">
          <p className="text-center text-sm text-muted-foreground">
            This is a demo of a corporate governance platform. Select any role to explore the interface.
            <br />© 2025 GovernancePro. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

interface RoleCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
}

function RoleCard({ title, description, icon, onClick }: RoleCardProps) {
  return (
    <Card
      className="flex flex-col items-center text-center border-corporate-100 transition-all hover:border-corporate-300 hover:shadow-md cursor-pointer"
      onClick={onClick}
    >
      <CardHeader>
        <div className="mb-2 flex justify-center">{icon}</div>
        <CardTitle className="text-xl text-corporate-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="bg-corporate-600 hover:bg-corporate-700">Enter Dashboard</Button>
      </CardFooter>
    </Card>
  )
}
