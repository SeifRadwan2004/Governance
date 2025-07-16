"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Send,
  Eye,
  Users,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  MapPin,
  Building,
  Briefcase,
  GraduationCap,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Plus,
  TrendingUp,
  DollarSign,
  Calendar,
  FileText,
  UserCheck,
  Edit,
  Megaphone,
  PinIcon,
  Share,
  ThumbsUp,
  MessageCircle,
  Globe,
  LinkedinIcon,
  Phone,
  Award,
  Target,
  BarChart3,
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

export function CompanyRecruiterDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [experienceRange, setExperienceRange] = useState([5]);
  const [reputationFilter, setReputationFilter] = useState("");
  const { toast } = useToast();

  // Button handlers
  const handleManageCompanyProfile = () => {
    toast({
      title: "Manage Company Profile",
      description: "Opening company profile management form...",
    });
  };

  const handleSearchCandidates = () => {
    setActiveTab("candidates");
    toast({
      title: "Search Candidates",
      description: "Navigating to candidate search section...",
    });
  };

  const handleSendInvitation = () => {
    setActiveTab("invitations");
    toast({
      title: "Send Invitation",
      description: "Opening invitation management section...",
    });
  };

  const handlePostToWall = () => {
    setActiveTab("company-wall");
    toast({
      title: "Post to Wall",
      description: "Opening company wall section...",
    });
  };

  const handleCreateReport = () => {
    toast({
      title: "Create Report",
      description: "Generating recruitment analytics report...",
    });
  };

  const handleViewCandidate = (candidateId: number) => {
    const candidate = candidates.find((c) => c.id === candidateId);
    toast({
      title: "View Candidate",
      description: `Opening detailed profile for ${candidate?.name}...`,
    });
  };

  const handleInviteCandidate = (candidateId: number) => {
    const candidate = candidates.find((c) => c.id === candidateId);
    toast({
      title: "Send Invitation",
      description: `Sending board invitation to ${candidate?.name}...`,
    });
  };

  const handleSendNewInvitation = () => {
    toast({
      title: "New Invitation",
      description: "Opening invitation creation form...",
    });
  };

  const handleCreatePost = () => {
    toast({
      title: "Create Post",
      description: "Opening post creation form...",
    });
  };

  // Mock data
  const companyInfo = {
    name: "TechCorp Industries",
    sector: "Technology",
    size: "Fortune 500",
    headquarters: "San Francisco, CA",
    activeRoles: 3,
    totalCandidates: 247,
    pendingInvitations: 8,
    wallPosts: 12,
  };

  const dashboardMetrics = [
    { label: "Active Searches", value: 5, change: "+2", trend: "up" },
    { label: "Candidates Reviewed", value: 89, change: "+15", trend: "up" },
    { label: "Invitations Sent", value: 12, change: "+4", trend: "up" },
    { label: "Response Rate", value: "78%", change: "+8%", trend: "up" },
    { label: "Successful Placements", value: 7, change: "+3", trend: "up" },
    {
      label: "Average Time to Fill",
      value: "32 days",
      change: "-5 days",
      trend: "up",
    },
  ];

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Former Fortune 500 CFO",
      experience: "25+ years",
      sector: "Financial Services",
      rating: 4.8,
      location: "New York, NY",
      avatar: "/avatars/sarah-johnson.png",
      specializations: ["Financial Strategy", "Risk Management", "ESG"],
      conflicts: "low",
      availability: "available",
      lastActive: "2 hours ago",
      boardExperience: 8,
      currentBoards: 3,
      compensation: "$150k-200k",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Tech Executive & Board Member",
      experience: "20+ years",
      sector: "Technology",
      rating: 4.9,
      location: "San Francisco, CA",
      avatar: "/avatars/michael-chen.png",
      specializations: [
        "Digital Transformation",
        "Cybersecurity",
        "Innovation",
      ],
      conflicts: "medium",
      availability: "limited",
      lastActive: "1 day ago",
      boardExperience: 5,
      currentBoards: 2,
      compensation: "$120k-180k",
    },
    {
      id: 3,
      name: "Elizabeth Rodriguez",
      title: "Former Healthcare CEO",
      experience: "30+ years",
      sector: "Healthcare",
      rating: 4.7,
      location: "Boston, MA",
      avatar: "/avatars/elizabeth-rodriguez.png",
      specializations: ["Healthcare Policy", "Operations", "Regulatory"],
      conflicts: "low",
      availability: "available",
      lastActive: "4 hours ago",
      boardExperience: 12,
      currentBoards: 4,
      compensation: "$180k-250k",
    },
  ];

  const invitations = [
    {
      id: 1,
      candidateName: "Sarah Johnson",
      position: "Independent Director",
      status: "pending",
      sentDate: "Jan 10, 2025",
      deadline: "Jan 25, 2025",
      compensation: "$150,000/year",
      response: null,
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      position: "Technology Committee Chair",
      status: "negotiating",
      sentDate: "Jan 8, 2025",
      deadline: "Jan 22, 2025",
      compensation: "$120,000/year",
      response: "Counter-offered $140k",
    },
    {
      id: 3,
      candidateName: "Robert Williams",
      position: "Audit Committee Member",
      status: "accepted",
      sentDate: "Jan 5, 2025",
      deadline: "Jan 20, 2025",
      compensation: "$100,000/year",
      response: "Accepted with terms",
    },
  ];

  const companyWallPosts = [
    {
      id: 1,
      type: "announcement",
      title: "New Board Position Available",
      content:
        "We're seeking an experienced Independent Director with financial expertise to join our board.",
      author: "HR Department",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 7,
      isPinned: true,
    },
    {
      id: 2,
      type: "role",
      title: "Technology Committee Chair Opening",
      content:
        "Looking for a technology executive to lead our digital transformation initiatives.",
      author: "Recruitment Team",
      timestamp: "1 day ago",
      likes: 18,
      comments: 12,
      isPinned: false,
    },
    {
      id: 3,
      type: "update",
      title: "Company Wins Industry Award",
      content:
        "TechCorp has been recognized as the most innovative company in our sector for 2025.",
      author: "Communications",
      timestamp: "3 days ago",
      likes: 45,
      comments: 23,
      isPinned: false,
    },
  ];

  const conflictAlerts = [
    {
      id: 1,
      candidateName: "Michael Chen",
      alertType: "Industry Overlap",
      severity: "medium",
      description: "Candidate currently serves on board of direct competitor",
      recommendation: "Review non-compete clauses before proceeding",
    },
    {
      id: 2,
      candidateName: "Sarah Johnson",
      alertType: "Time Commitment",
      severity: "low",
      description: "Candidate approaching recommended board limit",
      recommendation: "Confirm availability for required time commitment",
    },
  ];

  const filteredCandidates = candidates.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.specializations.some((spec) =>
        spec.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesSector =
      !selectedSector ||
      selectedSector === "all" ||
      candidate.sector === selectedSector;
    const matchesExperience =
      parseInt(candidate.experience) >= experienceRange[0];
    const matchesReputation =
      !reputationFilter ||
      reputationFilter === "all" ||
      candidate.rating >= parseFloat(reputationFilter);

    return (
      matchesSearch && matchesSector && matchesExperience && matchesReputation
    );
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Company Overview Card */}
        <Card className="lg:w-1/3">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Building className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl">{companyInfo.name}</CardTitle>
            <CardDescription>
              {companyInfo.sector} • {companyInfo.size}
            </CardDescription>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground mt-2">
              <MapPin className="h-4 w-4" />
              <span>{companyInfo.headquarters}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {companyInfo.activeRoles}
                </div>
                <div className="text-xs text-muted-foreground">
                  Active Roles
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {companyInfo.totalCandidates}
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Candidates
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {companyInfo.pendingInvitations}
                </div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {companyInfo.wallPosts}
                </div>
                <div className="text-xs text-muted-foreground">Wall Posts</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleManageCompanyProfile}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Edit className="mr-2 h-4 w-4" />
              Manage Company Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Metrics Grid */}
        <div className="lg:w-2/3 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dashboardMetrics.map((metric, index) => (
              <Card key={index}>
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
                              : "text-red-500"
                          }`}
                        />
                        <span
                          className={`text-xs ${
                            metric.trend === "up"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {metric.change}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-full">
                      <BarChart3 className="h-4 w-4 text-blue-600" />
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
                <Button
                  onClick={handleSearchCandidates}
                  variant="outline"
                  className="h-auto flex-col py-4"
                >
                  <Search className="h-5 w-5 mb-2" />
                  Search Candidates
                </Button>
                <Button
                  onClick={handleSendInvitation}
                  variant="outline"
                  className="h-auto flex-col py-4"
                >
                  <Send className="h-5 w-5 mb-2" />
                  Send Invitation
                </Button>
                <Button
                  onClick={handlePostToWall}
                  variant="outline"
                  className="h-auto flex-col py-4"
                >
                  <Plus className="h-5 w-5 mb-2" />
                  Post to Wall
                </Button>
                <Button
                  onClick={handleCreateReport}
                  variant="outline"
                  className="h-auto flex-col py-4"
                >
                  <FileText className="h-5 w-5 mb-2" />
                  Create Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Conflict Alerts */}
      {conflictAlerts.length > 0 && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-800">
            Conflict of Interest Alerts
          </AlertTitle>
          <AlertDescription className="text-orange-700">
            You have {conflictAlerts.length} potential conflicts requiring
            review.
            <Button variant="link" className="p-0 h-auto text-orange-600 ml-2">
              Review Details
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* Main Content Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="candidates">Candidates</TabsTrigger>
          <TabsTrigger value="invitations">Invitations</TabsTrigger>
          <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
          <TabsTrigger value="company-wall">Company Wall</TabsTrigger>
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
                      Sarah Johnson responded to invitation
                    </p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">
                      New candidate profile viewed
                    </p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">
                      Company wall post published
                    </p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recruitment Pipeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Recruitment Pipeline</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Sourcing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">15</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Screening</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Interviewing</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Final Review</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <span className="text-xs text-muted-foreground">3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="candidates" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Search Board Candidates</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search by name, title, or specialization..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Select
                    value={selectedSector}
                    onValueChange={setSelectedSector}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Financial Services">
                        Financial Services
                      </SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Manufacturing">
                        Manufacturing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select
                    value={reputationFilter}
                    onValueChange={setReputationFilter}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="4.5">4.5+ Stars</SelectItem>
                      <SelectItem value="4.0">4.0+ Stars</SelectItem>
                      <SelectItem value="3.5">3.5+ Stars</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Minimum Experience: {experienceRange[0]} years
                </label>
                <Slider
                  value={experienceRange}
                  onValueChange={setExperienceRange}
                  max={40}
                  min={0}
                  step={5}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Candidates List */}
          <div className="space-y-4">
            {filteredCandidates.map((candidate) => (
              <Card
                key={candidate.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage
                          src={candidate.avatar}
                          alt={candidate.name}
                        />
                        <AvatarFallback className="bg-blue-100 text-blue-700">
                          {candidate.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <div>
                          <h3 className="font-semibold text-lg">
                            {candidate.name}
                          </h3>
                          <p className="text-muted-foreground">
                            {candidate.title}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{candidate.experience}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Building className="h-4 w-4" />
                            <span>{candidate.sector}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{candidate.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < Math.floor(candidate.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                            <span className="text-xs text-muted-foreground ml-1">
                              {candidate.rating}
                            </span>
                          </div>
                          <Badge
                            variant={
                              candidate.conflicts === "low"
                                ? "default"
                                : candidate.conflicts === "medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {candidate.conflicts.toUpperCase()} CONFLICT
                          </Badge>
                          <Badge
                            variant={
                              candidate.availability === "available"
                                ? "default"
                                : "secondary"
                            }
                            className="text-xs"
                          >
                            {candidate.availability.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {candidate.specializations.map((spec) => (
                            <Badge
                              key={spec}
                              variant="outline"
                              className="text-xs"
                            >
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="text-right text-sm text-muted-foreground">
                        <div>
                          {candidate.boardExperience} boards •{" "}
                          {candidate.currentBoards} current
                        </div>
                        <div>{candidate.compensation}</div>
                        <div>Active {candidate.lastActive}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Send className="mr-1 h-3 w-3" />
                          Invite
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="invitations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Board Invitations</span>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Send New Invitation
                </Button>
              </CardTitle>
              <CardDescription>
                Track and manage board position invitations sent to candidates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Compensation</TableHead>
                    <TableHead>Response</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invitations.map((invitation) => (
                    <TableRow key={invitation.id}>
                      <TableCell className="font-medium">
                        {invitation.candidateName}
                      </TableCell>
                      <TableCell>{invitation.position}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            invitation.status === "accepted"
                              ? "default"
                              : invitation.status === "pending"
                                ? "secondary"
                                : invitation.status === "negotiating"
                                  ? "outline"
                                  : "destructive"
                          }
                        >
                          {invitation.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell>{invitation.sentDate}</TableCell>
                      <TableCell>{invitation.deadline}</TableCell>
                      <TableCell>{invitation.compensation}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {invitation.response || "No response yet"}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conflicts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                <span>Conflict of Interest Monitoring</span>
              </CardTitle>
              <CardDescription>
                Monitor and resolve potential conflicts during candidate
                selection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conflictAlerts.map((alert) => (
                  <div key={alert.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              alert.severity === "low"
                                ? "default"
                                : alert.severity === "medium"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {alert.severity.toUpperCase()}
                          </Badge>
                          <span className="font-medium">
                            {alert.candidateName}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            {alert.alertType}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {alert.description}
                          </p>
                          <p className="text-sm text-blue-600 mt-1">
                            <strong>Recommendation:</strong>{" "}
                            {alert.recommendation}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Review
                        </Button>
                        <Button size="sm" variant="outline">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company-wall" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Company Wall</span>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Post
                </Button>
              </CardTitle>
              <CardDescription>
                Manage company announcements, role postings, and updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {companyWallPosts.map((post) => (
                  <Card
                    key={post.id}
                    className={
                      post.isPinned ? "border-blue-200 bg-blue-50" : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            {post.isPinned && (
                              <PinIcon className="h-4 w-4 text-blue-600" />
                            )}
                            <Badge
                              variant={
                                post.type === "announcement"
                                  ? "default"
                                  : post.type === "role"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {post.type.toUpperCase()}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              by {post.author}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              • {post.timestamp}
                            </span>
                          </div>
                          <h3 className="font-semibold">{post.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {post.content}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="p-0 h-auto"
                            >
                              <Share className="h-4 w-4 mr-1" />
                              Share
                            </Button>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
