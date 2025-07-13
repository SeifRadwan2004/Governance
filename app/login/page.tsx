"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Building2, Eye, EyeOff, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    if (!email || !password || !role) {
      setError("Please fill in all fields")
      return
    }

    try {
      // Special case: If password is "Shareholder", set role to shareholder regardless of selection
      if (password === "Shareholder") {
        localStorage.setItem("userRole", "shareholder")
        router.push("/dashboard")
        return
      }

      // For all other cases, use the selected role
      localStorage.setItem("userRole", role)
      router.push("/dashboard")
    } catch (err) {
      console.error("Login error:", err)
      setError("An error occurred during login. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-corporate-50 to-white p-4">
      <div className="mb-8 flex items-center space-x-2">
        <Building2 className="h-10 w-10 text-corporate-600" />
        <h1 className="text-3xl font-bold text-corporate-800">GovernancePro</h1>
      </div>
      <Card className="w-full max-w-md border-corporate-100 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center text-corporate-800">Sign In</CardTitle>
          <CardDescription className="text-center">Access your corporate governance dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              {error && <div className="bg-red-50 text-red-500 p-2 rounded-md text-sm">{error}</div>}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Select Your Role</Label>
                <Select value={role} onValueChange={setRole} required>
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shareholder">Shareholder</SelectItem>
                    <SelectItem value="assembly">General Assembly Holder</SelectItem>
                    <SelectItem value="chairman">Chairman</SelectItem>
                    <SelectItem value="md">Managing Director (MD)</SelectItem>
                    <SelectItem value="bod">Board of Directors (BOD) Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full bg-corporate-600 hover:bg-corporate-700"
                disabled={!email || !password}
              >
                <Lock className="mr-2 h-4 w-4" /> Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            Forgot your password?{" "}
            <a href="#" className="text-corporate-600 hover:underline">
              Reset it here
            </a>
          </div>
          <div className="text-xs text-muted-foreground text-center">© 2025 GovernancePro. All rights reserved.</div>
        </CardFooter>
      </Card>
    </div>
  )
}
