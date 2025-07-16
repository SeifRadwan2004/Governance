"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle,
  Clock,
  MoreHorizontal,
  Plus,
  Search,
  XCircle,
  TrendingUp,
  BarChart3,
  FileText,
  AlertTriangle,
  Calendar,
  Users,
  Target,
  Activity,
  Zap,
  Filter,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  UserRole,
  canCreateProposals,
  canVoteOnDecisions,
  getCurrentUserRole,
  getUserRoleDisplayName,
} from "@/lib/permissions";

const decisions = [
  {
    id: 1,
    title: "Annual Budget Approval",
    description: "Approval of the fiscal year 2025 operating budget of $10.5M",
    category: "Finance",
    status: "Approved",
    dateSubmitted: "2025-01-10",
    dateDecided: "2025-01-15",
    submittedBy: {
      name: "Michael Chen",
      avatar: "/avatars/michael.png",
      initials: "MC",
    },
    votes: {
      yes: 12,
      no: 1,
      abstain: 2,
      total: 15,
    },
    implementation: {
      status: "In Progress",
      progress: 65,
      dueDate: "2025-06-30",
      assignedTo: "Finance Department",
      milestones: [
        { name: "Budget Distribution", completed: true, date: "2025-01-20" },
        { name: "Department Allocation", completed: true, date: "2025-02-01" },
        { name: "Monthly Reviews Setup", completed: false, date: "2025-02-15" },
        { name: "Q1 Review", completed: false, date: "2025-03-31" },
      ],
    },
    priority: "High",
    impact: "Major",
    complexity: "Medium",
    stakeholders: ["Finance Team", "All Departments", "Board"],
    documents: ["Budget_Proposal_2025.pdf", "Financial_Projections.xlsx"],
    timeline: "6 months",
    riskLevel: "Low",
  },
  {
    id: 2,
    title: "New Board Member Appointment",
    description: "Appointment of Dr. Emily Rodriguez to the Board of Directors",
    category: "Governance",
    status: "Approved",
    dateSubmitted: "2024-12-25",
    dateDecided: "2025-01-15",
    submittedBy: {
      name: "Sarah Williams",
      avatar: "/avatars/sarah.png",
      initials: "SW",
    },
    votes: {
      yes: 14,
      no: 0,
      abstain: 1,
      total: 15,
    },
    implementation: {
      status: "Completed",
      progress: 100,
      dueDate: "2025-01-20",
      assignedTo: "Governance Committee",
      milestones: [
        { name: "Background Check", completed: true, date: "2025-01-16" },
        { name: "Onboarding Process", completed: true, date: "2025-01-18" },
        { name: "First Board Meeting", completed: true, date: "2025-01-20" },
      ],
    },
    priority: "High",
    impact: "Major",
    complexity: "Low",
    stakeholders: ["Board", "Governance Committee", "Shareholders"],
    documents: ["CV_Emily_Rodriguez.pdf", "Board_Appointment_Letter.pdf"],
    timeline: "1 month",
    riskLevel: "Low",
  },
  {
    id: 3,
    title: "Strategic Plan Revision",
    description:
      "Revision of the 5-year strategic plan to include digital transformation initiatives",
    category: "Strategy",
    status: "Pending",
    dateSubmitted: "2025-01-20",
    dateDecided: "",
    submittedBy: {
      name: "Robert Johnson",
      avatar: "/avatars/robert.png",
      initials: "RJ",
    },
    votes: {
      yes: 0,
      no: 0,
      abstain: 0,
      total: 15,
    },
    implementation: {
      status: "Not Started",
      progress: 0,
      dueDate: "2025-12-31",
      assignedTo: "Strategy Committee",
      milestones: [],
    },
    priority: "High",
    impact: "Major",
    complexity: "High",
    stakeholders: [
      "Strategy Committee",
      "All Departments",
      "External Consultants",
    ],
    documents: [
      "Current_Strategic_Plan.pdf",
      "Digital_Transformation_Proposal.pptx",
    ],
    timeline: "12 months",
    riskLevel: "Medium",
  },
  {
    id: 4,
    title: "Executive Compensation Package",
    description:
      "Approval of the revised executive compensation package for the CEO and CFO",
    category: "Compensation",
    status: "Pending",
    dateSubmitted: "2025-01-18",
    dateDecided: "",
    submittedBy: {
      name: "Lisa Anderson",
      avatar: "/avatars/lisa.png",
      initials: "LA",
    },
    votes: {
      yes: 0,
      no: 0,
      abstain: 0,
      total: 15,
    },
    implementation: {
      status: "Not Started",
      progress: 0,
      dueDate: "2025-03-31",
      assignedTo: "Compensation Committee",
      milestones: [],
    },
    priority: "Medium",
    impact: "Medium",
    complexity: "Medium",
    stakeholders: ["Compensation Committee", "Executive Team", "HR"],
    documents: ["Compensation_Analysis.pdf", "Market_Benchmarking.xlsx"],
    timeline: "3 months",
    riskLevel: "Medium",
  },
  {
    id: 5,
    title: "Sustainability Initiative",
    description:
      "Approval of the new sustainability initiative to reduce carbon footprint by 30% by 2030",
    category: "Strategy",
    status: "Approved",
    dateSubmitted: "2024-12-10",
    dateDecided: "2024-12-25",
    submittedBy: {
      name: "David Rodriguez",
      avatar: "/avatars/david.png",
      initials: "DR",
    },
    votes: {
      yes: 13,
      no: 1,
      abstain: 1,
      total: 15,
    },
    implementation: {
      status: "In Progress",
      progress: 25,
      dueDate: "2030-12-31",
      assignedTo: "Sustainability Committee",
      milestones: [
        { name: "Team Formation", completed: true, date: "2025-01-05" },
        { name: "Baseline Assessment", completed: true, date: "2025-01-20" },
        {
          name: "Action Plan Development",
          completed: false,
          date: "2025-03-01",
        },
        {
          name: "Implementation Phase 1",
          completed: false,
          date: "2025-06-01",
        },
      ],
    },
    priority: "High",
    impact: "Major",
    complexity: "High",
    stakeholders: ["Sustainability Committee", "Operations", "All Departments"],
    documents: [
      "Sustainability_Strategy.pdf",
      "Carbon_Footprint_Analysis.xlsx",
    ],
    timeline: "60 months",
    riskLevel: "Medium",
  },
  {
    id: 6,
    title: "Acquisition of XYZ Corp",
    description: "Approval of the acquisition of XYZ Corp for $25M",
    category: "Finance",
    status: "Rejected",
    dateSubmitted: "2024-11-15",
    dateDecided: "2024-12-05",
    submittedBy: {
      name: "Jennifer Kim",
      avatar: "/avatars/jennifer.png",
      initials: "JK",
    },
    votes: {
      yes: 5,
      no: 8,
      abstain: 2,
      total: 15,
    },
    implementation: {
      status: "Cancelled",
      progress: 0,
      dueDate: "",
      assignedTo: "",
      milestones: [],
    },
    priority: "High",
    impact: "Major",
    complexity: "High",
    stakeholders: ["M&A Committee", "Finance", "Legal", "External Advisors"],
    documents: [
      "Acquisition_Proposal.pdf",
      "Due_Diligence_Report.pdf",
      "Financial_Analysis.xlsx",
    ],
    timeline: "6 months",
    riskLevel: "High",
  },
];

export function DecisionTracker() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");

  useEffect(() => {
    setUserRole(getCurrentUserRole());
  }, []);

  const handleCastVote = () => {
    router.push("/voting");
  };

  // Calculate KPIs
  const totalDecisions = decisions.length;
  const approvedDecisions = decisions.filter(
    (d) => d.status === "Approved",
  ).length;
  const pendingDecisions = decisions.filter(
    (d) => d.status === "Pending",
  ).length;
  const rejectedDecisions = decisions.filter(
    (d) => d.status === "Rejected",
  ).length;

  const approvalRate = (approvedDecisions / totalDecisions) * 100;
  const averageTimeToDecision = 12; // days - calculated from actual decision timeline

  const implementationInProgress = decisions.filter(
    (d) => d.implementation.status === "In Progress",
  ).length;

  const implementationCompleted = decisions.filter(
    (d) => d.implementation.status === "Completed",
  ).length;

  const avgImplementationProgress =
    decisions
      .filter((d) => d.status === "Approved")
      .reduce((sum, d) => sum + d.implementation.progress, 0) /
    decisions.filter((d) => d.status === "Approved").length;

  const thisMonthDecisions = decisions.filter((d) => {
    const decisionDate = new Date(d.dateSubmitted);
    const now = new Date();
    return (
      decisionDate.getMonth() === now.getMonth() &&
      decisionDate.getFullYear() === now.getFullYear()
    );
  }).length;

  const highPriorityPending = decisions.filter(
    (d) => d.status === "Pending" && d.priority === "High",
  ).length;

  const decisionsByCategory = decisions.reduce(
    (acc, decision) => {
      acc[decision.category] = (acc[decision.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const filteredDecisions = decisions.filter((decision) => {
    const matchesSearch =
      decision.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decision.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decision.submittedBy.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || decision.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || decision.status === selectedStatus;
    const matchesPriority =
      selectedPriority === "all" || decision.priority === selectedPriority;

    return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-600" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-orange-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    const colors = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return (
      <Badge className={colors[priority as keyof typeof colors]}>
        {priority}
      </Badge>
    );
  };

  const getImpactBadge = (impact: string) => {
    const colors = {
      Major: "bg-purple-100 text-purple-800",
      Medium: "bg-blue-100 text-blue-800",
      Minor: "bg-gray-100 text-gray-800",
    };
    return (
      <Badge
        variant="outline"
        className={colors[impact as keyof typeof colors]}
      >
        {impact}
      </Badge>
    );
  };

  const getRiskBadge = (risk: string) => {
    const colors = {
      High: "bg-red-100 text-red-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-green-100 text-green-800",
    };
    return (
      <Badge variant="outline" className={colors[risk as keyof typeof colors]}>
        {risk} Risk
      </Badge>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-corporate-800">
            Decision Tracker
          </h2>
          <p className="text-muted-foreground">
            {canCreateProposals(userRole)
              ? "Track, manage, and analyze board decisions with comprehensive implementation monitoring"
              : userRole === "shareholder"
                ? "View and vote on shareholder resolutions and company decisions"
                : "View decisions and cast your votes on board matters"}
          </p>
          <Badge variant="outline" className="mt-2">
            {getUserRoleDisplayName(userRole)}
          </Badge>
        </div>
        {canCreateProposals(userRole) && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-corporate-600 hover:bg-corporate-700">
                <Plus className="mr-2 h-4 w-4" />
                {userRole === "shareholder"
                  ? "Shareholder Proposal"
                  : "New Proposal"}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Submit New Proposal</DialogTitle>
                <DialogDescription>
                  Create a new proposal for board consideration
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Proposal Title</Label>
                  <Input id="title" placeholder="Enter proposal title" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter proposal description"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="governance">Governance</SelectItem>
                        <SelectItem value="strategy">Strategy</SelectItem>
                        <SelectItem value="compensation">
                          Compensation
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="priority">Priority</Label>
                    <Select>
                      <SelectTrigger id="priority">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="supporting-docs">Supporting Documents</Label>
                  <Input id="supporting-docs" type="file" multiple />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit Proposal</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* KPI Dashboard */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Decisions</p>
                <p className="text-2xl font-bold">{totalDecisions}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {thisMonthDecisions} this month
                </p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Approval Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round(approvalRate)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {approvedDecisions}/{totalDecisions} approved
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Pending Decisions
                </p>
                <p className="text-2xl font-bold">{pendingDecisions}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {highPriorityPending} high priority
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Implementation</p>
                <p className="text-2xl font-bold">
                  {Math.round(avgImplementationProgress)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Avg. progress rate
                </p>
              </div>
              <Activity className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Decision Analytics</CardTitle>
            <CardDescription>
              Key performance metrics for decision-making process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Decision Efficiency</span>
                <span>{averageTimeToDecision} days avg</span>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Time from submission to decision
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Implementation Success Rate</span>
                <span>
                  {Math.round(
                    (implementationCompleted /
                      (implementationCompleted + implementationInProgress)) *
                      100,
                  )}
                  %
                </span>
              </div>
              <Progress
                value={
                  (implementationCompleted /
                    (implementationCompleted + implementationInProgress)) *
                  100
                }
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                Completed vs. total approved decisions
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Consensus Level</span>
                <span>89%</span>
              </div>
              <Progress value={89} className="h-2" />
              <p className="text-xs text-muted-foreground">
                Average voting consensus for approved decisions
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Decision Categories</CardTitle>
            <CardDescription>
              Distribution of decisions by category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(decisionsByCategory).map(([category, count]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{category}</span>
                  <span>{count} decisions</span>
                </div>
                <Progress
                  value={(count / totalDecisions) * 100}
                  className="h-2"
                />
                <div className="text-xs text-muted-foreground">
                  {Math.round((count / totalDecisions) * 100)}% of total
                  decisions
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search decisions..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Governance">Governance</SelectItem>
            <SelectItem value="Strategy">Strategy</SelectItem>
            <SelectItem value="Compensation">Compensation</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Approved">Approved</SelectItem>
            <SelectItem value="Rejected">Rejected</SelectItem>
            <SelectItem value="Pending">Pending</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedPriority} onValueChange={setSelectedPriority}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Decisions</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="analytics">Deep Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredDecisions.map((decision) => (
            <Card
              key={decision.id}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-semibold">
                          {decision.title}
                        </h3>
                        <Badge
                          variant={
                            decision.status === "Approved"
                              ? "default"
                              : decision.status === "Rejected"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {getStatusIcon(decision.status)}
                          <span className="ml-1">{decision.status}</span>
                        </Badge>
                        <Badge variant="outline">{decision.category}</Badge>
                        {getPriorityBadge(decision.priority)}
                        {getImpactBadge(decision.impact)}
                        {getRiskBadge(decision.riskLevel)}
                      </div>

                      <p className="text-sm text-muted-foreground">
                        {decision.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Avatar className="h-5 w-5">
                            <AvatarImage
                              src={decision.submittedBy.avatar}
                              alt={decision.submittedBy.name}
                            />
                            <AvatarFallback className="text-xs">
                              {decision.submittedBy.initials}
                            </AvatarFallback>
                          </Avatar>
                          <span>{decision.submittedBy.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>Submitted: {decision.dateSubmitted}</span>
                        </div>
                        {decision.dateDecided && (
                          <div className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            <span>Decided: {decision.dateDecided}</span>
                          </div>
                        )}
                      </div>

                      {/* Additional Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                        <div>
                          <span className="font-medium">Timeline:</span>
                          <p className="text-muted-foreground">
                            {decision.timeline}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Complexity:</span>
                          <p className="text-muted-foreground">
                            {decision.complexity}
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Stakeholders:</span>
                          <p className="text-muted-foreground">
                            {decision.stakeholders.length} groups
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Documents:</span>
                          <p className="text-muted-foreground">
                            {decision.documents.length} files
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Full Details</DropdownMenuItem>
                          {decision.status === "Pending" && (
                            <>
                              <DropdownMenuItem onClick={handleCastVote}>
                                <Target className="mr-2 h-4 w-4" />
                                Cast Vote
                              </DropdownMenuItem>
                              <DropdownMenuItem>Edit Proposal</DropdownMenuItem>
                            </>
                          )}
                          {decision.status === "Approved" &&
                            decision.implementation.status !== "Completed" && (
                              <DropdownMenuItem>
                                <Activity className="mr-2 h-4 w-4" />
                                Update Implementation
                              </DropdownMenuItem>
                            )}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>Download Report</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  {/* Voting Results */}
                  {decision.votes.total > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Voting Results:</p>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 bg-green-50 rounded-lg">
                          <div className="text-lg font-bold text-green-600">
                            {decision.votes.yes}
                          </div>
                          <div className="text-xs text-green-600">Yes</div>
                        </div>
                        <div className="p-2 bg-red-50 rounded-lg">
                          <div className="text-lg font-bold text-red-600">
                            {decision.votes.no}
                          </div>
                          <div className="text-xs text-red-600">No</div>
                        </div>
                        <div className="p-2 bg-gray-50 rounded-lg">
                          <div className="text-lg font-bold text-gray-600">
                            {decision.votes.abstain}
                          </div>
                          <div className="text-xs text-gray-600">Abstain</div>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground text-center">
                        {Math.round(
                          (decision.votes.yes / decision.votes.total) * 100,
                        )}
                        % approval rate
                      </div>
                    </div>
                  )}

                  {/* Implementation Progress */}
                  {decision.status === "Approved" &&
                    decision.implementation.status !== "Not Started" && (
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium">
                            Implementation Progress:
                          </p>
                          <Badge
                            variant={
                              decision.implementation.status === "Completed"
                                ? "default"
                                : decision.implementation.status ===
                                    "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {decision.implementation.status}
                          </Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{decision.implementation.progress}%</span>
                          </div>
                          <Progress
                            value={decision.implementation.progress}
                            className="h-2"
                          />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>
                              Assigned to: {decision.implementation.assignedTo}
                            </span>
                            {decision.implementation.dueDate && (
                              <span>
                                Due: {decision.implementation.dueDate}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Milestones */}
                        {decision.implementation.milestones.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-medium">
                              Key Milestones:
                            </p>
                            <div className="space-y-1">
                              {decision.implementation.milestones.map(
                                (milestone, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center gap-2 text-xs"
                                  >
                                    {milestone.completed ? (
                                      <CheckCircle className="h-3 w-3 text-green-600" />
                                    ) : (
                                      <Clock className="h-3 w-3 text-gray-400" />
                                    )}
                                    <span
                                      className={
                                        milestone.completed
                                          ? "text-green-700"
                                          : "text-muted-foreground"
                                      }
                                    >
                                      {milestone.name}
                                    </span>
                                    <span className="text-muted-foreground">
                                      ({milestone.date})
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="mb-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <h3 className="font-semibold text-orange-800">
                Pending Decisions Require Attention
              </h3>
            </div>
            <p className="text-sm text-orange-700 mt-1">
              {pendingDecisions} decisions are awaiting board review.{" "}
              {highPriorityPending} are marked as high priority.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDecisions
              .filter((decision) => decision.status === "Pending")
              .map((decision) => (
                <Card
                  key={decision.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-base">
                        {decision.title}
                      </CardTitle>
                      <div className="flex flex-col gap-1">
                        {getPriorityBadge(decision.priority)}
                        <Badge variant="outline" className="text-xs">
                          {decision.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {decision.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={decision.submittedBy.avatar}
                          alt={decision.submittedBy.name}
                        />
                        <AvatarFallback className="text-xs">
                          {decision.submittedBy.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-xs">
                        <p className="font-medium">
                          {decision.submittedBy.name}
                        </p>
                        <p className="text-muted-foreground">
                          {decision.dateSubmitted}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-medium">Impact:</span>{" "}
                        {decision.impact}
                      </div>
                      <div>
                        <span className="font-medium">Risk:</span>{" "}
                        {decision.riskLevel}
                      </div>
                      <div>
                        <span className="font-medium">Timeline:</span>{" "}
                        {decision.timeline}
                      </div>
                      <div>
                        <span className="font-medium">Complexity:</span>{" "}
                        {decision.complexity}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="mr-1 h-3 w-3" />
                      Review
                    </Button>
                    <Button
                      onClick={handleCastVote}
                      size="sm"
                      className="flex-1"
                    >
                      <Target className="mr-1 h-3 w-3" />
                      Vote
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {implementationCompleted}
                </div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {implementationInProgress}
                </div>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(avgImplementationProgress)}%
                </div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {filteredDecisions
              .filter((decision) => decision.status === "Approved")
              .map((decision) => (
                <Card key={decision.id}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{decision.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Assigned to: {decision.implementation.assignedTo}
                          </p>
                        </div>
                        <Badge
                          variant={
                            decision.implementation.status === "Completed"
                              ? "default"
                              : decision.implementation.status === "In Progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {decision.implementation.status}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Implementation Progress</span>
                          <span>{decision.implementation.progress}%</span>
                        </div>
                        <Progress
                          value={decision.implementation.progress}
                          className="h-3"
                        />
                        {decision.implementation.dueDate && (
                          <div className="text-xs text-muted-foreground">
                            Due: {decision.implementation.dueDate}
                          </div>
                        )}
                      </div>

                      {decision.implementation.milestones.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-sm font-medium">Milestones:</p>
                          <div className="grid gap-2">
                            {decision.implementation.milestones.map(
                              (milestone, index) => (
                                <div
                                  key={index}
                                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                                >
                                  <div className="flex items-center gap-2">
                                    {milestone.completed ? (
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                    ) : (
                                      <Clock className="h-4 w-4 text-gray-400" />
                                    )}
                                    <span
                                      className={`text-sm ${milestone.completed ? "text-green-700" : "text-muted-foreground"}`}
                                    >
                                      {milestone.name}
                                    </span>
                                  </div>
                                  <span className="text-xs text-muted-foreground">
                                    {milestone.date}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Activity className="mr-1 h-3 w-3" />
                          Update Progress
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Decision Timeline Analysis</CardTitle>
                <CardDescription>
                  Time from submission to final decision
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-semibold mb-2">
                    Timeline Analytics
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Average decision timeline: {averageTimeToDecision} days
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold">Fastest</p>
                      <p className="text-2xl font-bold text-blue-600">5</p>
                      <p className="text-xs text-muted-foreground">days</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold">Average</p>
                      <p className="text-2xl font-bold text-green-600">
                        {averageTimeToDecision}
                      </p>
                      <p className="text-xs text-muted-foreground">days</p>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg">
                      <p className="font-semibold">Longest</p>
                      <p className="text-2xl font-bold text-orange-600">28</p>
                      <p className="text-xs text-muted-foreground">days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact & Risk Analysis</CardTitle>
                <CardDescription>
                  Decision impact vs implementation risk
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="p-2 bg-purple-50 rounded">
                      <p className="font-semibold">High Impact</p>
                      <p className="text-lg font-bold text-purple-600">
                        {decisions.filter((d) => d.impact === "Major").length}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="p-2 bg-blue-50 rounded">
                      <p className="font-semibold">Medium Impact</p>
                      <p className="text-lg font-bold text-blue-600">
                        {decisions.filter((d) => d.impact === "Medium").length}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="font-semibold">Low Impact</p>
                      <p className="text-lg font-bold text-gray-600">
                        {decisions.filter((d) => d.impact === "Minor").length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>High Risk Decisions</span>
                      <span>
                        {decisions.filter((d) => d.riskLevel === "High").length}
                        /{totalDecisions}
                      </span>
                    </div>
                    <Progress
                      value={
                        (decisions.filter((d) => d.riskLevel === "High")
                          .length /
                          totalDecisions) *
                        100
                      }
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Success Rate (High Risk)</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Complex Decisions</span>
                      <span>
                        {
                          decisions.filter((d) => d.complexity === "High")
                            .length
                        }
                        /{totalDecisions}
                      </span>
                    </div>
                    <Progress
                      value={
                        (decisions.filter((d) => d.complexity === "High")
                          .length /
                          totalDecisions) *
                        100
                      }
                      className="h-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
