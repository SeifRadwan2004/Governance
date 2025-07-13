"use client";

import { useRouter } from "next/navigation";
import { Building2, Users, ArrowRight, Briefcase, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PlatformSelection() {
  const router = useRouter();

  const handlePlatformSelect = (platform: "corporate" | "social") => {
    if (platform === "corporate") {
      router.push("/corporate-login");
    } else {
      // For now, redirect to corporate login. Later can be expanded for social platform
      router.push("/social-login");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4">
      <div className="w-full max-w-6xl">
        {/* Main Header */}
        <div className="mb-12 text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            GovernancePro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your governance platform to get started with powerful tools
            for decision-making and collaboration
          </p>
        </div>

        {/* Platform Selection Cards */}
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Corporate Platform */}
          <Card className="group border-2 hover:border-corporate-300 transition-all duration-300 hover:shadow-xl cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-corporate-100 group-hover:bg-corporate-200 transition-colors">
                  <Briefcase className="h-8 w-8 text-corporate-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-corporate-800">
                Corporate Governance
              </CardTitle>
              <CardDescription className="text-base">
                Enterprise-grade governance solutions for corporations and
                organizations
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-corporate-500"></div>
                  <span className="text-sm text-gray-600">
                    Board of Directors Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-corporate-500"></div>
                  <span className="text-sm text-gray-600">
                    Shareholder Voting & Assembly
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-corporate-500"></div>
                  <span className="text-sm text-gray-600">
                    Committee & Meeting Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-corporate-500"></div>
                  <span className="text-sm text-gray-600">
                    Compliance & Legal Framework
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-corporate-500"></div>
                  <span className="text-sm text-gray-600">
                    Executive & CEO Dashboard
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                onClick={() => handlePlatformSelect("corporate")}
                className="w-full bg-corporate-600 hover:bg-corporate-700 text-white group-hover:shadow-lg transition-all"
              >
                Enter Corporate Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Social Platform */}
          <Card className="group border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-xl cursor-pointer">
            <CardHeader className="text-center pb-4">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <CardTitle className="text-2xl text-purple-800">
                Social Governance
              </CardTitle>
              <CardDescription className="text-base">
                Community-driven governance for social organizations and NGOs
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">
                    Community Member Management
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">
                    Participatory Decision Making
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">
                    Social Impact Tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">
                    Volunteer & Resource Coordination
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-gray-600">
                    Transparency & Accountability
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                onClick={() => handlePlatformSelect("social")}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white group-hover:shadow-lg transition-all"
              >
                Enter Social Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            © 2025 GovernancePro. Empowering governance across all sectors.
          </p>
        </div>
      </div>
    </div>
  );
}
