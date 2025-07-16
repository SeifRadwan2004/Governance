"use client";

import { useState, useEffect } from "react";
import {
  Download,
  MoreHorizontal,
  Plus,
  Search,
  Users,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Award,
  Activity,
  Clock,
  BarChart3,
  User,
  Star,
  Target,
  Briefcase,
  GraduationCap,
  Filter,
} from "lucide-react";

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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  UserRole,
  canManageMembers,
  canViewAllKPIs,
  getCurrentUserRole,
  getUserRoleDisplayName,
} from "@/lib/permissions";

const boardMembers = [
  {
    id: 1,
    name: "Robert Johnson",
    role: "Chairperson",
    email: "robert.johnson@company.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    termStart: "2023-01-01",
    termEnd: "2025-12-31",
    committees: ["Executive", "Finance"],
    avatar: "/avatars/robert.png",
    initials: "RJ",
    status: "Active",
    expertise: ["Corporate Governance", "Finance", "Strategic Planning"],
    education: "MBA Harvard Business School",
    experience: "25+ years",
    previousRoles: ["CEO TechCorp", "CFO InnovateCorp"],
    linkedIn: "https://linkedin.com/in/robertjohnson",
    meetingAttendance: 95,
    votingParticipation: 98,
    lastActivity: "2025-01-22",
    joinDate: "2023-01-01",
    isIndependent: false,
    age: 52,
    gender: "Male",
    tenure: 2.1,
    performanceScore: 92,
    contributionLevel: "High",
    specializations: 3,
    networkConnections: 150,
    publicSpeaking: 12,
    boardEvaluationScore: 4.8,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Vice Chair",
    email: "sarah.williams@company.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    termStart: "2022-01-01",
    termEnd: "2024-12-31",
    committees: ["Executive", "Governance"],
    avatar: "/avatars/sarah.png",
    initials: "SW",
    status: "Active",
    expertise: ["ESG", "Legal Affairs", "Risk Management"],
    education: "JD Stanford Law School",
    experience: "20+ years",
    previousRoles: ["General Counsel LegalTech", "Partner at Law Firm"],
    linkedIn: "https://linkedin.com/in/sarahwilliams",
    meetingAttendance: 92,
    votingParticipation: 96,
    lastActivity: "2025-01-21",
    joinDate: "2022-01-01",
    isIndependent: true,
    age: 48,
    gender: "Female",
    tenure: 3.1,
    performanceScore: 89,
    contributionLevel: "High",
    specializations: 3,
    networkConnections: 120,
    publicSpeaking: 8,
    boardEvaluationScore: 4.7,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Treasurer",
    email: "michael.chen@company.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    termStart: "2024-01-01",
    termEnd: "2026-12-31",
    committees: ["Finance", "Audit"],
    avatar: "/avatars/michael.png",
    initials: "MC",
    status: "Active",
    expertise: ["Finance", "Investment", "International Markets"],
    education: "CFA, MBA Wharton",
    experience: "18+ years",
    previousRoles: ["CFO Global Investments", "Director Finance Corp"],
    linkedIn: "https://linkedin.com/in/michaelchen",
    meetingAttendance: 97,
    votingParticipation: 100,
    lastActivity: "2025-01-22",
    joinDate: "2024-01-01",
    isIndependent: false,
    age: 45,
    gender: "Male",
    tenure: 1.1,
    performanceScore: 94,
    contributionLevel: "High",
    specializations: 3,
    networkConnections: 200,
    publicSpeaking: 15,
    boardEvaluationScore: 4.9,
  },
  {
    id: 4,
    name: "Lisa Anderson",
    role: "Secretary",
    email: "lisa.anderson@company.com",
    phone: "+1 (555) 456-7890",
    location: "Boston, MA",
    termStart: "2023-01-01",
    termEnd: "2025-12-31",
    committees: ["Governance", "Nominating"],
    avatar: "/avatars/lisa.png",
    initials: "LA",
    status: "Active",
    expertise: [
      "Human Resources",
      "Compensation",
      "Organizational Development",
    ],
    education: "PhD Organizational Psychology",
    experience: "22+ years",
    previousRoles: ["CHRO Fortune 500", "HR Consultant"],
    linkedIn: "https://linkedin.com/in/lisaanderson",
    meetingAttendance: 89,
    votingParticipation: 94,
    lastActivity: "2025-01-20",
    joinDate: "2023-01-01",
    isIndependent: true,
    age: 50,
    gender: "Female",
    tenure: 2.1,
    performanceScore: 87,
    contributionLevel: "Medium",
    specializations: 3,
    networkConnections: 95,
    publicSpeaking: 6,
    boardEvaluationScore: 4.5,
  },
  {
    id: 5,
    name: "David Rodriguez",
    role: "Board Member",
    email: "david.rodriguez@company.com",
    phone: "+1 (555) 567-8901",
    location: "Austin, TX",
    termStart: "2022-01-01",
    termEnd: "2024-12-31",
    committees: ["Audit", "Strategic Planning"],
    avatar: "/avatars/david.png",
    initials: "DR",
    status: "Active",
    expertise: ["Technology", "Digital Transformation", "Cybersecurity"],
    education: "MS Computer Science MIT",
    experience: "15+ years",
    previousRoles: ["CTO StartupTech", "VP Engineering BigTech"],
    linkedIn: "https://linkedin.com/in/davidrodriguez",
    meetingAttendance: 94,
    votingParticipation: 97,
    lastActivity: "2025-01-21",
    joinDate: "2022-01-01",
    isIndependent: true,
    age: 42,
    gender: "Male",
    tenure: 3.1,
    performanceScore: 91,
    contributionLevel: "High",
    specializations: 3,
    networkConnections: 180,
    publicSpeaking: 10,
    boardEvaluationScore: 4.6,
  },
  {
    id: 6,
    name: "Jennifer Kim",
    role: "Board Member",
    email: "jennifer.kim@company.com",
    phone: "+1 (555) 678-9012",
    location: "Seattle, WA",
    termStart: "2024-01-01",
    termEnd: "2026-12-31",
    committees: ["Strategic Planning", "Nominating"],
    avatar: "/avatars/jennifer.png",
    initials: "JK",
    status: "Active",
    expertise: ["Healthcare Innovation", "Biotech", "Regulatory Affairs"],
    education: "MD Johns Hopkins, MBA",
    experience: "16+ years",
    previousRoles: ["Chief Medical Officer HealthTech", "Director FDA"],
    linkedIn: "https://linkedin.com/in/jenniferkim",
    meetingAttendance: 91,
    votingParticipation: 95,
    lastActivity: "2025-01-19",
    joinDate: "2024-01-01",
    isIndependent: true,
    age: 46,
    gender: "Female",
    tenure: 1.1,
    performanceScore: 88,
    contributionLevel: "Medium",
    specializations: 3,
    networkConnections: 110,
    publicSpeaking: 7,
    boardEvaluationScore: 4.4,
  },
  {
    id: 7,
    name: "Thomas Wilson",
    role: "Board Member",
    email: "thomas.wilson@company.com",
    phone: "+1 (555) 789-0123",
    location: "Denver, CO",
    termStart: "2023-01-01",
    termEnd: "2025-12-31",
    committees: ["Finance", "Strategic Planning"],
    avatar: "/avatars/thomas.png",
    initials: "TW",
    status: "Active",
    expertise: ["Private Equity", "M&A", "Capital Markets"],
    education: "MBA Wharton, CPA",
    experience: "28+ years",
    previousRoles: ["Managing Partner PE Firm", "Investment Banking Director"],
    linkedIn: "https://linkedin.com/in/thomaswilson",
    meetingAttendance: 96,
    votingParticipation: 99,
    lastActivity: "2025-01-22",
    joinDate: "2023-01-01",
    isIndependent: false,
    age: 55,
    gender: "Male",
    tenure: 2.1,
    performanceScore: 93,
    contributionLevel: "High",
    specializations: 3,
    networkConnections: 250,
    publicSpeaking: 20,
    boardEvaluationScore: 4.8,
  },
  {
    id: 8,
    name: "Maria Garcia",
    role: "Board Member",
    email: "maria.garcia@company.com",
    phone: "+1 (555) 890-1234",
    location: "Miami, FL",
    termStart: "2022-01-01",
    termEnd: "2024-12-31",
    committees: ["Governance", "Audit"],
    avatar: "/avatars/maria.png",
    initials: "MG",
    status: "Active",
    expertise: ["International Business", "Marketing", "Brand Strategy"],
    education: "MBA INSEAD",
    experience: "19+ years",
    previousRoles: ["CMO Global Brand", "VP Marketing Consumer Goods"],
    linkedIn: "https://linkedin.com/in/mariagarcia",
    meetingAttendance: 88,
    votingParticipation: 92,
    lastActivity: "2025-01-18",
    joinDate: "2022-01-01",
    isIndependent: true,
    age: 47,
    gender: "Female",
    tenure: 3.1,
    performanceScore: 85,
    contributionLevel: "Medium",
    specializations: 3,
    networkConnections: 140,
    publicSpeaking: 9,
    boardEvaluationScore: 4.3,
  },
];

export function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedContribution, setSelectedContribution] = useState("all");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");

  useEffect(() => {
    setUserRole(getCurrentUserRole());
  }, []);

  // Calculate KPIs
  const totalMembers = boardMembers.length;
  const activeMembers = boardMembers.filter(
    (m) => m.status === "Active",
  ).length;
  const independentMembers = boardMembers.filter((m) => m.isIndependent).length;
  const femaleMembers = boardMembers.filter(
    (m) => m.gender === "Female",
  ).length;

  const averageAttendance =
    boardMembers.reduce((sum, m) => sum + m.meetingAttendance, 0) /
    boardMembers.length;
  const averageVotingParticipation =
    boardMembers.reduce((sum, m) => sum + m.votingParticipation, 0) /
    boardMembers.length;
  const averageTenure =
    boardMembers.reduce((sum, m) => sum + m.tenure, 0) / boardMembers.length;
  const averageAge =
    boardMembers.reduce((sum, m) => sum + m.age, 0) / boardMembers.length;
  const averagePerformance =
    boardMembers.reduce((sum, m) => sum + m.performanceScore, 0) /
    boardMembers.length;

  const highContributors = boardMembers.filter(
    (m) => m.contributionLevel === "High",
  ).length;
  const experiencedMembers = boardMembers.filter(
    (m) => parseInt(m.experience) >= 20,
  ).length;

  const committeeCoverage = {
    Executive: boardMembers.filter((m) => m.committees.includes("Executive"))
      .length,
    Finance: boardMembers.filter((m) => m.committees.includes("Finance"))
      .length,
    Governance: boardMembers.filter((m) => m.committees.includes("Governance"))
      .length,
    Audit: boardMembers.filter((m) => m.committees.includes("Audit")).length,
    "Strategic Planning": boardMembers.filter((m) =>
      m.committees.includes("Strategic Planning"),
    ).length,
    Nominating: boardMembers.filter((m) => m.committees.includes("Nominating"))
      .length,
  };

  const expertiseAreas = boardMembers.reduce(
    (acc, member) => {
      member.expertise.forEach((area) => {
        acc[area] = (acc[area] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  // Filter sensitive information based on user role
  const getFilteredMemberData = (member: any) => {
    const publicData = {
      ...member,
      // Always show basic info
      id: member.id,
      name: member.name,
      role: member.role,
      committees: member.committees,
      expertise: member.expertise,
      education: member.education,
      experience: member.experience,
      status: member.status,
      avatar: member.avatar,
      initials: member.initials,
    };

    // Role-based data filtering
    switch (userRole) {
      case "admin":
      case "chairman":
        return member; // Full access
      case "ceo":
      case "md":
      case "bod":
      case "committee":
      case "legal":
        return {
          ...publicData,
          email: member.email,
          phone: member.phone,
          location: member.location,
          meetingAttendance: member.meetingAttendance,
          votingParticipation: member.votingParticipation,
          // Hide sensitive performance data
        };
      case "shareholder":
        return {
          ...publicData,
          // Shareholders get minimal info
          tenure: member.tenure,
          joinDate: member.joinDate,
        };
      default:
        return publicData; // Minimal public info only
    }
  };

  const filteredMembers = boardMembers
    .map(getFilteredMemberData)
    .filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.expertise.some((exp: string) =>
          exp.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCommittee =
        selectedCommittee === "all" ||
        member.committees.includes(selectedCommittee);
      const matchesStatus =
        selectedStatus === "all" || member.status === selectedStatus;
      const matchesContribution =
        selectedContribution === "all" ||
        member.contributionLevel === selectedContribution;

      return (
        matchesSearch &&
        matchesCommittee &&
        matchesStatus &&
        matchesContribution
      );
    });

  const getContributionBadge = (level: string) => {
    const colors = {
      High: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Low: "bg-red-100 text-red-800",
    };
    return (
      <Badge className={colors[level as keyof typeof colors]}>{level}</Badge>
    );
  };

  const getPerformanceBadge = (score: number) => {
    if (score >= 90)
      return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    if (score >= 80)
      return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
    if (score >= 70)
      return <Badge className="bg-yellow-100 text-yellow-800">Average</Badge>;
    return <Badge className="bg-red-100 text-red-800">Below Average</Badge>;
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-corporate-800">
            Board Members Directory
          </h2>
          <p className="text-muted-foreground">
            {canManageMembers(userRole)
              ? "Comprehensive member profiles, analytics, and performance tracking"
              : userRole === "shareholder"
                ? "View board member profiles and public information"
                : "View board member profiles and contact information"}
          </p>
          <Badge variant="outline" className="mt-2">
            {getUserRoleDisplayName(userRole)}
          </Badge>
        </div>
        {canManageMembers(userRole) && (
          <Button className="bg-corporate-600 hover:bg-corporate-700">
            <Plus className="mr-2 h-4 w-4" />
            Add Member
          </Button>
        )}
      </div>

      {/* KPI Dashboard */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold">{totalMembers}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {activeMembers} active
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Independence</p>
                <p className="text-2xl font-bold">
                  {Math.round((independentMembers / totalMembers) * 100)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {independentMembers}/{totalMembers} independent
                </p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Diversity</p>
                <p className="text-2xl font-bold">
                  {Math.round((femaleMembers / totalMembers) * 100)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Gender diversity
                </p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Performance</p>
                <p className="text-2xl font-bold">
                  {Math.round(averagePerformance)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Avg. board score
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Engagement Metrics</CardTitle>
            <CardDescription>
              Member participation and activity levels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Average Meeting Attendance</span>
                <span>{Math.round(averageAttendance)}%</span>
              </div>
              <Progress value={averageAttendance} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Voting Participation</span>
                <span>{Math.round(averageVotingParticipation)}%</span>
              </div>
              <Progress value={averageVotingParticipation} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>High Contributors</span>
                <span>
                  {highContributors}/{totalMembers}
                </span>
              </div>
              <Progress
                value={(highContributors / totalMembers) * 100}
                className="h-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">
                  {Math.round(averageTenure * 10) / 10}
                </div>
                <div className="text-xs text-blue-600">Avg Tenure (years)</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600">
                  {Math.round(averageAge)}
                </div>
                <div className="text-xs text-green-600">Avg Age</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Committee Coverage</CardTitle>
            <CardDescription>
              Member distribution across committees
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(committeeCoverage).map(([committee, count]) => (
              <div key={committee} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{committee}</span>
                  <span>{count} members</span>
                </div>
                <Progress
                  value={(count / totalMembers) * 100}
                  className="h-2"
                />
                <div className="text-xs text-muted-foreground">
                  {Math.round((count / totalMembers) * 100)}% coverage
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
            placeholder="Search members..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedCommittee} onValueChange={setSelectedCommittee}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Committee" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Committees</SelectItem>
            <SelectItem value="Executive">Executive</SelectItem>
            <SelectItem value="Finance">Finance</SelectItem>
            <SelectItem value="Governance">Governance</SelectItem>
            <SelectItem value="Audit">Audit</SelectItem>
            <SelectItem value="Nominating">Nominating</SelectItem>
            <SelectItem value="Strategic Planning">
              Strategic Planning
            </SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Select
          value={selectedContribution}
          onValueChange={setSelectedContribution}
        >
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Contribution" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="High">High</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Low">Low</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <Tabs defaultValue="grid" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="grid">Member Profiles</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="w-full">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <Card
                key={member.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-lg">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Full Profile</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                        {canManageMembers(userRole) && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit Member</DropdownMenuItem>
                            <DropdownMenuItem>
                              Performance Review
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              Remove Member
                            </DropdownMenuItem>
                          </>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Status and Performance */}
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={
                        member.status === "Active" ? "default" : "secondary"
                      }
                    >
                      {member.status}
                    </Badge>
                    {member.isIndependent && (
                      <Badge className="bg-green-100 text-green-800">
                        Independent
                      </Badge>
                    )}
                    {getContributionBadge(member.contributionLevel)}
                    {getPerformanceBadge(member.performanceScore)}
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Activity className="h-3 w-3 text-green-600" />
                        <span className="text-xs text-muted-foreground">
                          Attendance
                        </span>
                      </div>
                      <div className="font-semibold">
                        {member.meetingAttendance}%
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3 text-blue-600" />
                        <span className="text-xs text-muted-foreground">
                          Voting
                        </span>
                      </div>
                      <div className="font-semibold">
                        {member.votingParticipation}%
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-purple-600" />
                        <span className="text-xs text-muted-foreground">
                          Tenure
                        </span>
                      </div>
                      <div className="font-semibold">{member.tenure}yr</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-orange-600" />
                        <span className="text-xs text-muted-foreground">
                          Rating
                        </span>
                      </div>
                      <div className="font-semibold">
                        {member.boardEvaluationScore}/5
                      </div>
                    </div>
                  </div>

                  {/* Committees */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Committees</p>
                    <div className="flex flex-wrap gap-1">
                      {member.committees.map((committee) => (
                        <Badge
                          key={committee}
                          variant="outline"
                          className="text-xs"
                        >
                          {committee}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Expertise</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.slice(0, 3).map((exp) => (
                        <Badge
                          key={exp}
                          variant="outline"
                          className="text-xs bg-blue-50 text-blue-700"
                        >
                          {exp}
                        </Badge>
                      ))}
                      {member.expertise.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{member.expertise.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        Term: {member.termStart.slice(0, 4)} -{" "}
                        {member.termEnd.slice(0, 4)}
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="flex gap-2 w-full">
                    <Button variant="outline" size="sm" className="flex-1">
                      <User className="mr-1 h-3 w-3" />
                      Profile
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="mr-1 h-3 w-3" />
                      Contact
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b">
                    <tr className="text-left">
                      <th className="p-4 font-medium">Member</th>
                      <th className="p-4 font-medium">Role</th>
                      <th className="p-4 font-medium">Committees</th>
                      <th className="p-4 font-medium">Performance</th>
                      <th className="p-4 font-medium">Attendance</th>
                      <th className="p-4 font-medium">Tenure</th>
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredMembers.map((member) => (
                      <tr key={member.id} className="hover:bg-gray-50">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={member.avatar}
                                alt={member.name}
                              />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{member.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {member.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <div className="font-medium">{member.role}</div>
                            <div className="text-sm text-muted-foreground">
                              {member.isIndependent
                                ? "Independent"
                                : "Non-Independent"}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex flex-wrap gap-1">
                            {member.committees.map((committee) => (
                              <Badge
                                key={committee}
                                variant="outline"
                                className="text-xs"
                              >
                                {committee}
                              </Badge>
                            ))}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="font-medium">
                              {member.performanceScore}%
                            </div>
                            {getPerformanceBadge(member.performanceScore)}
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="font-medium">
                              {member.meetingAttendance}%
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Voting: {member.votingParticipation}%
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="space-y-1">
                            <div className="font-medium">
                              {member.tenure} years
                            </div>
                            <div className="text-xs text-muted-foreground">
                              Since {member.joinDate.slice(0, 4)}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              {canManageMembers(userRole) && (
                                <>
                                  <DropdownMenuItem>
                                    Edit Member
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    Performance Review
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">
                                    Remove
                                  </DropdownMenuItem>
                                </>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Expertise Distribution</CardTitle>
                <CardDescription>
                  Areas of expertise across board members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(expertiseAreas)
                  .sort(([, a], [, b]) => b - a)
                  .slice(0, 8)
                  .map(([area, count]) => (
                    <div key={area} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{area}</span>
                        <span>{count} members</span>
                      </div>
                      <Progress
                        value={(count / totalMembers) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Board Composition</CardTitle>
                <CardDescription>
                  Demographic and structural analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {Math.round((independentMembers / totalMembers) * 100)}%
                    </div>
                    <div className="text-sm text-blue-600">Independent</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round((femaleMembers / totalMembers) * 100)}%
                    </div>
                    <div className="text-sm text-purple-600">Female</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Experienced Members (20+ years)</span>
                      <span>
                        {experiencedMembers}/{totalMembers}
                      </span>
                    </div>
                    <Progress
                      value={(experiencedMembers / totalMembers) * 100}
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>High Network Connections</span>
                      <span>
                        {
                          boardMembers.filter((m) => m.networkConnections > 150)
                            .length
                        }
                        /{totalMembers}
                      </span>
                    </div>
                    <Progress
                      value={
                        (boardMembers.filter((m) => m.networkConnections > 150)
                          .length /
                          totalMembers) *
                        100
                      }
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Public Speaking Experience</span>
                      <span>
                        {
                          boardMembers.filter((m) => m.publicSpeaking > 10)
                            .length
                        }
                        /{totalMembers}
                      </span>
                    </div>
                    <Progress
                      value={
                        (boardMembers.filter((m) => m.publicSpeaking > 10)
                          .length /
                          totalMembers) *
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

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(averagePerformance)}%
                </div>
                <p className="text-sm text-muted-foreground">Avg Performance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(averageAttendance)}%
                </div>
                <p className="text-sm text-muted-foreground">Avg Attendance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(averageVotingParticipation)}%
                </div>
                <p className="text-sm text-muted-foreground">Voting Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {highContributors}
                </div>
                <p className="text-sm text-muted-foreground">
                  High Contributors
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {filteredMembers
              .sort((a, b) => b.performanceScore - a.performanceScore)
              .map((member) => (
                <Card key={member.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>{member.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {getPerformanceBadge(member.performanceScore)}
                        {getContributionBadge(member.contributionLevel)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Performance Score</span>
                          <span>{member.performanceScore}%</span>
                        </div>
                        <Progress
                          value={member.performanceScore}
                          className="h-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Meeting Attendance</span>
                          <span>{member.meetingAttendance}%</span>
                        </div>
                        <Progress
                          value={member.meetingAttendance}
                          className="h-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Voting Participation</span>
                          <span>{member.votingParticipation}%</span>
                        </div>
                        <Progress
                          value={member.votingParticipation}
                          className="h-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Board Evaluation</span>
                          <span>{member.boardEvaluationScore}/5</span>
                        </div>
                        <Progress
                          value={(member.boardEvaluationScore / 5) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 pt-4 border-t text-sm text-muted-foreground">
                      <span>Last Activity: {member.lastActivity}</span>
                      <span>
                        Network: {member.networkConnections} connections
                      </span>
                      <span>
                        Public Speaking: {member.publicSpeaking} events
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
