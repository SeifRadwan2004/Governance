"use client";

import type React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
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
  LogIn,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DemoNavigation() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [username, setUsername] = useState("");

  const roles = [
    {
      id: "admin",
      name: "Admin",
      icon: Shield,
      description: "Configure organization settings and voting rules",
    },
    {
      id: "shareholder",
      name: "Shareholder",
      icon: User,
      description: "View shareholding and delegate voting rights",
    },
    {
      id: "assembly",
      name: "General Assembly",
      icon: Users,
      description: "Participate in meetings and vote on resolutions",
    },
    {
      id: "chairman",
      name: "Chairman",
      icon: UserCog,
      description: "Create meetings, set agendas, and monitor voting",
    },
    {
      id: "md",
      name: "Managing Director",
      icon: Briefcase,
      description: "Oversee operations and strategic initiatives",
    },
    {
      id: "bod",
      name: "BOD Member",
      icon: UserCheck,
      description: "Track KPIs and monitor implementation",
    },
    {
      id: "ceo",
      name: "CEO",
      icon: GraduationCap,
      description: "Review and implement approved resolutions",
    },
    {
      id: "committee",
      name: "Committee Member",
      icon: UserPlus,
      description: "Participate in specialized committee activities",
    },
    {
      id: "legal",
      name: "Legal Consultant",
      icon: Scale,
      description: "External consultant operations",
    },
  ];

  const handleLogin = () => {
    if (!selectedRole || !username.trim()) {
      return;
    }

    try {
      localStorage.setItem("userRole", selectedRole);
      localStorage.setItem("username", username.trim());
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
    router.push("/dashboard");
  };

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-corporate-50 via-white to-corporate-100 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-corporate-600 shadow-lg">
              <Building2 className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-corporate-800">
            GovernancePro
          </h1>
          <p className="mt-2 text-corporate-600">
            Corporate Governance Platform
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-corporate-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-corporate-800">
              Sign In
            </CardTitle>
            <CardDescription>
              Enter your credentials and select your role to access the platform
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-corporate-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-corporate-200 focus:border-corporate-500 focus:ring-corporate-500"
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-corporate-700">
                Select Your Role
              </Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="border-corporate-200 focus:border-corporate-500 focus:ring-corporate-500">
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => {
                    const IconComponent = role.icon;
                    return (
                      <SelectItem key={role.id} value={role.id}>
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-4 w-4 text-corporate-500" />
                          <span>{role.name}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {/* Role Description */}
            {selectedRoleData && (
              <div className="rounded-lg bg-corporate-50 p-3 border border-corporate-200">
                <div className="flex items-center space-x-2 mb-1">
                  <selectedRoleData.icon className="h-4 w-4 text-corporate-600" />
                  <span className="font-medium text-corporate-800">
                    {selectedRoleData.name}
                  </span>
                </div>
                <p className="text-sm text-corporate-600">
                  {selectedRoleData.description}
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button
              onClick={handleLogin}
              disabled={!selectedRole || !username.trim()}
              className="w-full bg-corporate-600 hover:bg-corporate-700 text-white"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In to Dashboard
            </Button>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-corporate-500">
            © 2025 GovernancePro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
