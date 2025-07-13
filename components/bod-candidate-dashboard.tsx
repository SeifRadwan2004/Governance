"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Eye,
  TrendingUp,
  AlertTriangle,
  Star,
  Calendar,
  Building,
  Award,
  Camera,
  Edit,
  Plus,
  FileText,
  Globe,
  LinkedinIcon,
  Twitter,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Users,
  Shield,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

export function BODCandidateDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const candidateProfile = {
    name: "Sarah Elizabeth Johnson",
    title: "Former Fortune 500 CFO",
    location: "New York, NY",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    profilePicture: "/avatars/sarah-johnson.png",
    completionScore: 85,
    profileViews: 2847,
    totalOffers: 12,
    activeOffers: 3,
    engagements: 156,
    rating: 4.8,
    experience: "25+ years",
    specializations: [
      "Financial Strategy",
      "Risk Management",
      "Digital Transformation",
      "ESG",
    ],
    linkedIn: "linkedin.com/in/sarahjohnson",
    website: "sarahjohnson.com",
  };

  const performanceMetrics = [
    { label: "Profile Views", value: 2847, change: "+15%", trend: "up" },
    { label: "Total Offers", value: 12, change: "+3", trend: "up" },
    { label: "Active Offers", value: 3, change: "0", trend: "neutral" },
    { label: "Response Rate", value: "92%", change: "+5%", trend: "up" },
    { label: "Average Rating", value: "4.8/5", change: "+0.2", trend: "up" },
    { label: "Profile Completion", value: "85%", change: "+10%", trend: "up" },
  ];

  const activeInvitations = [
    {
      id: 1,
      company: "TechCorp Industries",
      position: "Independent Director",
      sector: "Technology",
      compensation: "$120,000/year",
      timeCommitment: "8-10 hours/month",
      deadline: "Jan 15, 2025",
      status: "pending",
      conflictRisk: "low",
    },
    {
      id: 2,
      company: "Global Energy Solutions",
      position: "Audit Committee Chair",
      sector: "Energy",
      compensation: "$150,000/year",
      timeCommitment: "12-15 hours/month",
      deadline: "Jan 20, 2025",
      status: "pending",
      conflictRisk: "medium",
    },
    {
      id: 3,
      company: "Healthcare Innovations Ltd",
      position: "Board Member",
      sector: "Healthcare",
      compensation: "$100,000/year",
      timeCommitment: "6-8 hours/month",
      deadline: "Jan 25, 2025",
      status: "pending",
      conflictRisk: "low",
    },
  ];

  const pastExperience = [
    {
      company: "MegaCorp Financial",
      position: "Chief Financial Officer",
      duration: "2018 - 2023",
      type: "executive",
    },
    {
      company: "Investment Holdings Inc",
      position: "Independent Director",
      duration: "2020 - Present",
      type: "board",
    },
    {
      company: "Tech Startup Ventures",
      position: "Advisory Board Member",
      duration: "2019 - 2022",
      type: "advisory",
    },
  ];

  const conflictChecks = [
    {
      category: "Industry Overlap",
      status: "clear",
      description: "No conflicts with current board positions",
    },
    {
      category: "Competitor Analysis",
      status: "warning",
      description:
        "Potential conflict with TechCorp - same industry as current position",
    },
    {
      category: "Time Commitment",
      status: "clear",
      description:
        "Total commitment within recommended limits (30 hours/month)",
    },
    {
      category: "Geographic Conflicts",
      status: "clear",
      description: "No overlapping jurisdictions",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Profile Overview Card */}
        <Card className="lg:w-1/3">
          <CardHeader className="text-center">
            <div className="relative mx-auto w-24 h-24 mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={candidateProfile.profilePicture}
                  alt={candidateProfile.name}
                />
                <AvatarFallback className="text-lg bg-purple-100 text-purple-700">
                  {candidateProfile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-xl">{candidateProfile.name}</CardTitle>
            <CardDescription>{candidateProfile.title}</CardDescription>
            <div className="flex items-center justify-center space-x-1 text-yellow-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(candidateProfile.rating) ? "fill-current" : ""}`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {candidateProfile.rating}/5
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Profile Completion</span>
                <span className="font-medium">
                  {candidateProfile.completionScore}%
                </span>
              </div>
              <Progress
                value={candidateProfile.completionScore}
                className="h-2"
              />
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{candidateProfile.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{candidateProfile.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{candidateProfile.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <LinkedinIcon className="h-4 w-4 text-muted-foreground" />
                <span className="text-blue-600">
                  {candidateProfile.linkedIn}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-blue-600">
                  {candidateProfile.website}
                </span>
              </div>
            </div>

            <Separator />

            <div className="flex flex-wrap gap-1">
              {candidateProfile.specializations.map((spec) => (
                <Badge key={spec} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Performance Metrics Grid */}
        <div className="lg:w-2/3 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {performanceMetrics.map((metric) => (
              <Card key={metric.label}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold">{metric.value}</p>
                      <div className="flex items-center space-x-1 mt-1">
                        <TrendingUp
                          className={`h-3 w-3 ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : metric.trend === "down"
                                ? "text-red-500"
                                : "text-gray-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : metric.trend === "down"
                                ? "text-red-500"
                                : "text-gray-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      {metric.label.includes("Views") && (
                        <Eye className="h-4 w-4 text-purple-600" />
                      )}
                      {metric.label.includes("Offers") && (
                        <Mail className="h-4 w-4 text-purple-600" />
                      )}
                      {metric.label.includes("Response") && (
                        <CheckCircle className="h-4 w-4 text-purple-600" />
                      )}
                      {metric.label.includes("Rating") && (
                        <Star className="h-4 w-4 text-purple-600" />
                      )}
                      {metric.label.includes("Completion") && (
                        <User className="h-4 w-4 text-purple-600" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Plus className="h-5 w-5 mb-2" />
                  Add Experience
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <FileText className="h-5 w-5 mb-2" />
                  Upload Documents
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Users className="h-5 w-5 mb-2" />
                  Network
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <TrendingUp className="h-5 w-5 mb-2" />
                  Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="invitations">Invitations</TabsTrigger>
          <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">
                      Profile viewed by TechCorp Industries
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">
                      New board invitation received
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Profile updated</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Strength */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Profile Strength</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Basic Information</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Work Experience</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Board Experience</span>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Professional Photo</span>
                    <XCircle className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">References</span>
                    <Clock className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Improve Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invitations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Board Invitations</span>
                <Badge variant="secondary">
                  {activeInvitations.length} Active
                </Badge>
              </CardTitle>
              <CardDescription>
                Manage your board position invitations and track application
                status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeInvitations.map((invitation) => (
                  <Card
                    key={invitation.id}
                    className="border-l-4 border-l-purple-500"
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold">
                              {invitation.company}
                            </span>
                            <Badge variant="outline">{invitation.sector}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {invitation.position}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{invitation.compensation}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{invitation.timeCommitment}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>Due: {invitation.deadline}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                invitation.conflictRisk === "low"
                                  ? "default"
                                  : invitation.conflictRisk === "medium"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="text-xs"
                            >
                              {invitation.conflictRisk.toUpperCase()} CONFLICT
                              RISK
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700"
                          >
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                          >
                            Decline
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conflicts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span>Conflict of Interest Analysis</span>
              </CardTitle>
              <CardDescription>
                Automated detection and analysis of potential conflicts across
                board positions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conflictChecks.map((check, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border"
                  >
                    <div className="flex items-center space-x-3">
                      {check.status === "clear" ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : check.status === "warning" ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                      <div>
                        <p className="font-medium">{check.category}</p>
                        <p className="text-sm text-muted-foreground">
                          {check.description}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        check.status === "clear"
                          ? "default"
                          : check.status === "warning"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {check.status.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {conflictChecks.some((check) => check.status === "warning") && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Potential Conflicts Detected</AlertTitle>
              <AlertDescription>
                Review the warnings above and consider how they might impact
                your board service decisions. Some conflicts may be manageable
                with proper disclosure and recusal procedures.
              </AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="experience" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Professional Experience</span>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </CardTitle>
              <CardDescription>
                Showcase your executive and board experience to potential
                recruiters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {pastExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 pb-4 border-b last:border-b-0"
                  >
                    <div className="p-2 bg-purple-100 rounded-full">
                      {exp.type === "executive" ? (
                        <Briefcase className="h-4 w-4 text-purple-600" />
                      ) : exp.type === "board" ? (
                        <Users className="h-4 w-4 text-purple-600" />
                      ) : (
                        <GraduationCap className="h-4 w-4 text-purple-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{exp.position}</h4>
                        <Button size="sm" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {exp.duration}
                      </p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {exp.type === "executive"
                          ? "Executive Role"
                          : exp.type === "board"
                            ? "Board Position"
                            : "Advisory Role"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
