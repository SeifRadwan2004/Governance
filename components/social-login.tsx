"use client";

import type React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import {
  Heart,
  UserCheck,
  Building,
  TrendingUp,
  Users,
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

export function SocialLogin() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [username, setUsername] = useState("");

  const roles = [
    {
      id: "bod-candidate",
      name: "BOD Candidate",
      icon: UserCheck,
      description: "Apply for board positions and showcase qualifications",
    },
    {
      id: "company-recruiter",
      name: "Company Recruiter",
      icon: Building,
      description: "Source and evaluate candidates for board positions",
    },
    {
      id: "investment-analyst",
      name: "Investment Analyst",
      icon: TrendingUp,
      description: "Analyze governance practices and investment opportunities",
    },
    {
      id: "community-member",
      name: "Community Member",
      icon: Users,
      description:
        "Participate in governance discussions and community initiatives",
    },
  ];

  const handleLogin = () => {
    if (!selectedRole || !username.trim()) {
      return;
    }

    try {
      localStorage.setItem("userRole", selectedRole);
      localStorage.setItem("username", username.trim());
      localStorage.setItem("platform", "social");
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
    router.push("/dashboard");
  };

  const selectedRoleData = roles.find((role) => role.id === selectedRole);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-100 p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-purple-800">
            Social Governance
          </h1>
          <p className="mt-2 text-purple-600">Community-Driven Platform</p>
        </div>

        {/* Login Card */}
        <Card className="border-purple-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-800">Sign In</CardTitle>
            <CardDescription>
              Enter your credentials and select your role to access the social
              governance platform
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-purple-700">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label htmlFor="role" className="text-purple-700">
                Select Your Role
              </Label>
              <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="border-purple-200 focus:border-purple-500 focus:ring-purple-500">
                  <SelectValue placeholder="Choose your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => {
                    const IconComponent = role.icon;
                    return (
                      <SelectItem key={role.id} value={role.id}>
                        <div className="flex items-center space-x-2">
                          <IconComponent className="h-4 w-4 text-purple-500" />
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
              <div className="rounded-lg bg-purple-50 p-3 border border-purple-200">
                <div className="flex items-center space-x-2 mb-1">
                  <selectedRoleData.icon className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-800">
                    {selectedRoleData.name}
                  </span>
                </div>
                <p className="text-sm text-purple-600">
                  {selectedRoleData.description}
                </p>
              </div>
            )}
          </CardContent>

          <CardFooter>
            <Button
              onClick={handleLogin}
              disabled={!selectedRole || !username.trim()}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Sign In to Dashboard
            </Button>
          </CardFooter>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-purple-500">
            © 2025 GovernancePro. Empowering social governance.
          </p>
        </div>
      </div>
    </div>
  );
}
