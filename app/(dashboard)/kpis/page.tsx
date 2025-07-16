"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  CalendarDays,
  FileText,
  Vote,
  CheckCircle,
  Clock,
  Shield,
  Activity,
  Target,
  Award,
  AlertTriangle,
  Download,
  RefreshCw,
  Filter,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  UserRole,
  getFilteredKPIs,
  getCurrentUserRole,
  getUserRoleDisplayName,
} from "@/lib/permissions";
import { Badge } from "@/components/ui/badge";

export default function KPIsPage() {
  const [timeframe, setTimeframe] = useState("30d");
  const [activeTab, setActiveTab] = useState("overview");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");
  const [availableKPIs, setAvailableKPIs] = useState<string[]>([]);

  useEffect(() => {
    const role = getCurrentUserRole();
    setUserRole(role);
    setAvailableKPIs(getFilteredKPIs(role));
  }, []);

  // Mock KPI data - in a real app, this would come from an API
  const kpiData = {
    governance: {
      boardEffectiveness: 92,
      complianceScore: 96,
      riskManagement: 88,
      transparency: 94,
      decisionVelocity: 85,
      trend: "+3.2%",
    },
    meetings: {
      totalMeetings: 48,
      averageAttendance: 94,
      onTimeCompletion: 87,
      documentReadiness: 92,
      actionItemCompletion: 89,
      trend: "+5.1%",
    },
    decisions: {
      totalDecisions: 156,
      approvalRate: 78,
      implementationRate: 91,
      averageTimeToDecision: 12, // days
      consensusLevel: 86,
      trend: "+2.8%",
    },
    members: {
      totalMembers: 12,
      activeParticipation: 95,
      expertiseCoverage: 89,
      independenceRatio: 67,
      diversityScore: 58,
      trend: "+1.5%",
    },
    security: {
      overallSecurityScore: 96,
      twoFactorAdoption: 92,
      dataProtection: 98,
      accessControl: 94,
      incidentResponse: 100,
      trend: "+0.8%",
    },
    performance: {
      systemUptime: 99.9,
      responseTime: 245, // ms
      userSatisfaction: 4.7, // out of 5
      featureAdoption: 87,
      supportTickets: 3,
      trend: "+1.2%",
    },
  };

  const alertsAndInsights = [
    {
      type: "success",
      title: "Exceptional Compliance Score",
      description:
        "Your compliance score of 96% is above industry benchmark of 85%",
      priority: "low",
      category: "governance",
    },
    {
      type: "warning",
      title: "Meeting Duration Trending Up",
      description: "Average meeting duration increased by 15min this month",
      priority: "medium",
      category: "meetings",
    },
    {
      type: "info",
      title: "High Decision Implementation Rate",
      description:
        "91% of approved decisions are being implemented successfully",
      priority: "low",
      category: "decisions",
    },
    {
      type: "warning",
      title: "Diversity Target Below Goal",
      description: "Board diversity at 58% vs target of 65%",
      priority: "medium",
      category: "members",
    },
  ];

  const benchmarkData = {
    governance: { current: 92, industry: 78, best: 95 },
    meetings: { current: 94, industry: 82, best: 97 },
    decisions: { current: 78, industry: 72, best: 85 },
    security: { current: 96, industry: 88, best: 98 },
  };

  const getTrendIcon = (trend: string) => {
    if (trend.startsWith("+")) {
      return <ArrowUpRight className="h-4 w-4 text-green-600" />;
    } else if (trend.startsWith("-")) {
      return <ArrowDownRight className="h-4 w-4 text-red-600" />;
    }
    return <Minus className="h-4 w-4 text-gray-600" />;
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "info":
        return <Activity className="h-5 w-5 text-blue-600" />;
      default:
        return <Clock className="h-5 w-5 text-gray-600" />;
    }
  };

  const getBenchmarkColor = (
    current: number,
    industry: number,
    best: number,
  ) => {
    if (current >= best * 0.95) return "text-green-600";
    if (current >= industry) return "text-blue-600";
    return "text-orange-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">
            KPIs Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive governance performance metrics and analytics
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[120px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 3 months</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Governance Score
                </p>
                <p className="text-3xl font-bold text-corporate-800">
                  {kpiData.governance.boardEffectiveness}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {getTrendIcon(kpiData.governance.trend)}
                  <span className="text-sm text-green-600">
                    {kpiData.governance.trend}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-corporate-100 rounded-full">
                <Shield className="h-6 w-6 text-corporate-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Meeting Efficiency
                </p>
                <p className="text-3xl font-bold text-corporate-800">
                  {kpiData.meetings.averageAttendance}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {getTrendIcon(kpiData.meetings.trend)}
                  <span className="text-sm text-green-600">
                    {kpiData.meetings.trend}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <CalendarDays className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Decision Success
                </p>
                <p className="text-3xl font-bold text-corporate-800">
                  {kpiData.decisions.implementationRate}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {getTrendIcon(kpiData.decisions.trend)}
                  <span className="text-sm text-green-600">
                    {kpiData.decisions.trend}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <Target className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Health</p>
                <p className="text-3xl font-bold text-corporate-800">
                  {kpiData.performance.systemUptime}%
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {getTrendIcon(kpiData.performance.trend)}
                  <span className="text-sm text-green-600">
                    {kpiData.performance.trend}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts and Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Alerts & Insights
          </CardTitle>
          <CardDescription>
            Key observations and recommendations based on your KPIs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alertsAndInsights.map((alert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{alert.title}</h4>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className={
                          alert.priority === "high"
                            ? "border-red-200 text-red-700"
                            : alert.priority === "medium"
                              ? "border-orange-200 text-orange-700"
                              : "border-green-200 text-green-700"
                        }
                      >
                        {alert.priority}
                      </Badge>
                      <Badge variant="outline" className="capitalize">
                        {alert.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {alert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="decisions">Decisions</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
                <CardDescription>
                  Key metrics across all governance areas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Board Effectiveness
                    </span>
                    <span className="text-sm">
                      {kpiData.governance.boardEffectiveness}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.governance.boardEffectiveness}
                    className="h-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Meeting Attendance
                    </span>
                    <span className="text-sm">
                      {kpiData.meetings.averageAttendance}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.meetings.averageAttendance}
                    className="h-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Decision Implementation
                    </span>
                    <span className="text-sm">
                      {kpiData.decisions.implementationRate}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.decisions.implementationRate}
                    className="h-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Security Score</span>
                    <span className="text-sm">
                      {kpiData.security.overallSecurityScore}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.security.overallSecurityScore}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
                <CardDescription>
                  At-a-glance performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {kpiData.meetings.totalMeetings}
                    </div>
                    <div className="text-sm text-blue-600">Meetings Held</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {kpiData.decisions.totalDecisions}
                    </div>
                    <div className="text-sm text-green-600">Decisions Made</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {kpiData.members.totalMembers}
                    </div>
                    <div className="text-sm text-purple-600">Board Members</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {kpiData.performance.userSatisfaction}
                    </div>
                    <div className="text-sm text-orange-600">User Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Governance Metrics</CardTitle>
                <CardDescription>
                  Key governance performance indicators
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  "Board Effectiveness": kpiData.governance.boardEffectiveness,
                  "Compliance Score": kpiData.governance.complianceScore,
                  "Risk Management": kpiData.governance.riskManagement,
                  Transparency: kpiData.governance.transparency,
                  "Decision Velocity": kpiData.governance.decisionVelocity,
                }).map(([metric, value]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{metric}</span>
                      <span className="text-sm">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Overview</CardTitle>
                <CardDescription>
                  Regulatory and internal compliance status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">SOX Compliance</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Compliant
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">Board Independence</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">67%</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <span className="font-medium">Diversity Targets</span>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-800">58%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Meeting Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  "Average Attendance": kpiData.meetings.averageAttendance,
                  "On-Time Completion": kpiData.meetings.onTimeCompletion,
                  "Document Readiness": kpiData.meetings.documentReadiness,
                  "Action Item Completion":
                    kpiData.meetings.actionItemCompletion,
                }).map(([metric, value]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{metric}</span>
                      <span className="text-sm">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {kpiData.meetings.totalMeetings}
                </div>
                <p className="text-sm text-muted-foreground">Total Meetings</p>
                <p className="text-xs text-muted-foreground mt-1">
                  This period
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  4.2
                </div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Meeting satisfaction
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="decisions" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Decision Analytics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {kpiData.decisions.totalDecisions}
                    </div>
                    <div className="text-sm text-blue-600">Total Decisions</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {kpiData.decisions.approvalRate}%
                    </div>
                    <div className="text-sm text-green-600">Approval Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Implementation Rate
                    </span>
                    <span className="text-sm">
                      {kpiData.decisions.implementationRate}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.decisions.implementationRate}
                    className="h-2"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Consensus Level</span>
                    <span className="text-sm">
                      {kpiData.decisions.consensusLevel}%
                    </span>
                  </div>
                  <Progress
                    value={kpiData.decisions.consensusLevel}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Decision Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-corporate-600">
                    {kpiData.decisions.averageTimeToDecision}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Average days to decision
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Fastest Decision</span>
                    <span className="font-medium">2 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Slowest Decision</span>
                    <span className="font-medium">45 days</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Industry Average</span>
                    <span className="font-medium">18 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Member Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries({
                  "Active Participation": kpiData.members.activeParticipation,
                  "Expertise Coverage": kpiData.members.expertiseCoverage,
                  "Independence Ratio": kpiData.members.independenceRatio,
                  "Diversity Score": kpiData.members.diversityScore,
                }).map(([metric, value]) => (
                  <div key={metric} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{metric}</span>
                      <span className="text-sm">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Board Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl font-bold text-blue-600">
                        {kpiData.members.totalMembers}
                      </div>
                      <div className="text-xs text-blue-600">Total Members</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xl font-bold text-green-600">8</div>
                      <div className="text-xs text-green-600">Independent</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Tenure</span>
                      <span className="font-medium">4.2 years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Skills Diversity</span>
                      <span className="font-medium">High</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Meeting Attendance</span>
                      <span className="font-medium">
                        {kpiData.members.activeParticipation}%
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Industry Benchmarks</CardTitle>
              <CardDescription>
                Compare your performance against industry standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(benchmarkData).map(([category, data]) => (
                  <div key={category} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium capitalize">{category}</h4>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          Industry: {data.industry}%
                        </span>
                        <span className="text-muted-foreground">
                          Best: {data.best}%
                        </span>
                        <span
                          className={`font-bold ${getBenchmarkColor(
                            data.current,
                            data.industry,
                            data.best,
                          )}`}
                        >
                          You: {data.current}%
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={data.current} className="h-3" />
                      <div
                        className="absolute top-0 h-3 w-1 bg-gray-400"
                        style={{ left: `${data.industry}%` }}
                      />
                      <div
                        className="absolute top-0 h-3 w-1 bg-green-600"
                        style={{ left: `${data.best}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0%</span>
                      <span>Industry Avg</span>
                      <span>Best in Class</span>
                      <span>100%</span>
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
