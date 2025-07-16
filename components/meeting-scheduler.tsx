"use client";

import { useState, useEffect } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  Upload,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Calendar as CalendarIcon,
  User,
  FileText,
  Activity,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  UserRole,
  canScheduleMeetings,
  canManageMembers,
  getCurrentUserRole,
  getUserRoleDisplayName,
} from "@/lib/permissions";

const meetings = [
  {
    id: 1,
    title: "Board Meeting",
    date: "2025-02-15",
    time: "10:00 AM - 12:00 PM",
    location: "Conference Room A",
    type: "In-person",
    status: "Scheduled",
    attendees: 12,
    confirmed: 10,
    declined: 1,
    pending: 1,
    organizer: "Sarah Johnson",
    agenda: [
      "Q4 Financial Review",
      "2025 Budget Approval",
      "Strategic Planning",
    ],
    documents: [
      { id: 1, name: "Agenda.pdf", type: "agenda", size: "245 KB" },
      {
        id: 2,
        name: "Q4_Financial_Report.pdf",
        type: "report",
        size: "1.2 MB",
      },
      {
        id: 3,
        name: "Budget_Proposal_2025.xlsx",
        type: "report",
        size: "890 KB",
      },
    ],
    category: "Board",
    priority: "High",
    recurring: false,
    estimatedDuration: 120,
    actualDuration: null,
  },
  {
    id: 2,
    title: "Finance Committee",
    date: "2025-02-20",
    time: "2:00 PM - 3:30 PM",
    location: "Virtual",
    type: "Virtual",
    status: "Scheduled",
    attendees: 6,
    confirmed: 5,
    declined: 0,
    pending: 1,
    organizer: "Michael Chen",
    agenda: [
      "Monthly Financial Review",
      "Budget Variance Analysis",
      "Investment Portfolio Update",
    ],
    documents: [
      {
        id: 3,
        name: "Finance_Committee_Agenda.pdf",
        type: "agenda",
        size: "180 KB",
      },
      { id: 4, name: "Budget_Review.xlsx", type: "report", size: "650 KB" },
    ],
    category: "Committee",
    priority: "Medium",
    recurring: true,
    estimatedDuration: 90,
    actualDuration: null,
  },
  {
    id: 3,
    title: "Strategic Planning",
    date: "2025-02-25",
    time: "9:00 AM - 4:00 PM",
    location: "Offsite - Grand Hotel",
    type: "In-person",
    status: "Scheduled",
    attendees: 8,
    confirmed: 6,
    declined: 0,
    pending: 2,
    organizer: "James Wilson",
    agenda: [
      "5-Year Strategic Vision",
      "Market Expansion Plans",
      "Digital Transformation Strategy",
    ],
    documents: [
      {
        id: 5,
        name: "Strategic_Planning_Agenda.pdf",
        type: "agenda",
        size: "320 KB",
      },
      {
        id: 6,
        name: "5_Year_Plan_Draft.pptx",
        type: "presentation",
        size: "2.8 MB",
      },
    ],
    category: "Strategic",
    priority: "High",
    recurring: false,
    estimatedDuration: 420,
    actualDuration: null,
  },
  {
    id: 4,
    title: "Governance Committee",
    date: "2025-01-30",
    time: "1:00 PM - 2:30 PM",
    location: "Conference Room B",
    type: "In-person",
    status: "Completed",
    attendees: 5,
    confirmed: 5,
    declined: 0,
    pending: 0,
    organizer: "Maria Santos",
    agenda: ["Policy Review", "Compliance Update", "Board Evaluation Process"],
    documents: [
      {
        id: 7,
        name: "Governance_Committee_Agenda.pdf",
        type: "agenda",
        size: "210 KB",
      },
      { id: 8, name: "Meeting_Minutes.pdf", type: "minutes", size: "340 KB" },
    ],
    category: "Committee",
    priority: "Medium",
    recurring: true,
    estimatedDuration: 90,
    actualDuration: 85,
  },
  {
    id: 5,
    title: "Audit Committee",
    date: "2025-01-25",
    time: "11:00 AM - 12:30 PM",
    location: "Virtual",
    type: "Virtual",
    status: "Completed",
    attendees: 4,
    confirmed: 4,
    declined: 0,
    pending: 0,
    organizer: "Patricia Thompson",
    agenda: [
      "Internal Audit Report",
      "Risk Assessment Review",
      "Compliance Status",
    ],
    documents: [
      {
        id: 8,
        name: "Audit_Committee_Agenda.pdf",
        type: "agenda",
        size: "195 KB",
      },
      {
        id: 9,
        name: "Internal_Audit_Report.pdf",
        type: "report",
        size: "1.5 MB",
      },
      { id: 10, name: "Meeting_Minutes.pdf", type: "minutes", size: "280 KB" },
    ],
    category: "Committee",
    priority: "High",
    recurring: true,
    estimatedDuration: 90,
    actualDuration: 95,
  },
  {
    id: 6,
    title: "Executive Committee",
    date: "2025-01-20",
    time: "9:00 AM - 10:30 AM",
    location: "Conference Room A",
    type: "In-person",
    status: "Completed",
    attendees: 4,
    confirmed: 4,
    declined: 0,
    pending: 0,
    organizer: "Sarah Johnson",
    agenda: [
      "CEO Performance Review",
      "Market Position Analysis",
      "Next Quarter Priorities",
    ],
    documents: [
      {
        id: 10,
        name: "Executive_Committee_Agenda.pdf",
        type: "agenda",
        size: "165 KB",
      },
      { id: 11, name: "Meeting_Minutes.pdf", type: "minutes", size: "310 KB" },
    ],
    category: "Executive",
    priority: "High",
    recurring: true,
    estimatedDuration: 90,
    actualDuration: 88,
  },
];

export function MeetingScheduler() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");

  useEffect(() => {
    setUserRole(getCurrentUserRole());
  }, []);

  // Calculate KPIs
  const totalMeetings = meetings.length;
  const scheduledMeetings = meetings.filter(
    (m) => m.status === "Scheduled",
  ).length;
  const completedMeetings = meetings.filter(
    (m) => m.status === "Completed",
  ).length;
  const averageAttendance =
    meetings.reduce((sum, m) => sum + (m.confirmed / m.attendees) * 100, 0) /
    meetings.length;

  const thisMonthMeetings = meetings.filter((m) => {
    const meetingDate = new Date(m.date);
    const now = new Date();
    return (
      meetingDate.getMonth() === now.getMonth() &&
      meetingDate.getFullYear() === now.getFullYear()
    );
  }).length;

  const completedThisMonth = meetings.filter((m) => {
    const meetingDate = new Date(m.date);
    const now = new Date();
    return (
      m.status === "Completed" &&
      meetingDate.getMonth() === now.getMonth() &&
      meetingDate.getFullYear() === now.getFullYear()
    );
  }).length;

  const averageDuration =
    meetings
      .filter((m) => m.actualDuration)
      .reduce((sum, m) => sum + m.actualDuration!, 0) /
      meetings.filter((m) => m.actualDuration).length || 0;

  const onTimePerformance =
    (meetings
      .filter((m) => m.actualDuration && m.estimatedDuration)
      .filter((m) => m.actualDuration! <= m.estimatedDuration * 1.1).length /
      meetings.filter((m) => m.actualDuration).length) *
      100 || 0;

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch =
      meeting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      meeting.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || meeting.type === selectedType;
    const matchesStatus =
      selectedStatus === "all" || meeting.status === selectedStatus;
    const matchesCategory =
      selectedCategory === "all" || meeting.category === selectedCategory;

    // Role-based filtering
    const hasAccess = (() => {
      switch (userRole) {
        case "admin":
        case "chairman":
          return true; // Full access
        case "ceo":
        case "md":
          return (
            meeting.category === "Board" ||
            meeting.category === "Executive" ||
            meeting.category === "Strategic"
          );
        case "bod":
        case "committee":
          return (
            meeting.category === "Board" || meeting.category === "Committee"
          );
        case "legal":
          return (
            meeting.category === "Board" ||
            meeting.category === "Committee" ||
            meeting.title.toLowerCase().includes("legal")
          );
        case "shareholder":
          return (
            meeting.title.toLowerCase().includes("shareholder") ||
            meeting.title.toLowerCase().includes("annual")
          );
        default:
          return false;
      }
    })();

    return (
      matchesSearch &&
      matchesType &&
      matchesStatus &&
      matchesCategory &&
      hasAccess
    );
  });

  const upcomingMeetings = meetings
    .filter((m) => m.status === "Scheduled")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  const meetingsByCategory = meetings.reduce(
    (acc, meeting) => {
      acc[meeting.category] = (acc[meeting.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const attendanceRate =
    (meetings.reduce((sum, m) => sum + m.confirmed / m.attendees, 0) /
      meetings.length) *
    100;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-corporate-800">
            Meetings Dashboard
          </h2>
          <p className="text-muted-foreground">
            {canScheduleMeetings(userRole)
              ? "Schedule, manage, and track board and committee meetings with comprehensive analytics"
              : "View and track meetings you have access to"}
          </p>
          <Badge variant="outline" className="mt-2">
            {getUserRoleDisplayName(userRole)}
          </Badge>
        </div>
        {canScheduleMeetings(userRole) && (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-corporate-600 hover:bg-corporate-700">
                <Plus className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Schedule New Meeting</DialogTitle>
                <DialogDescription>
                  Create a new meeting and notify all participants
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Meeting Title</Label>
                  <Input id="title" placeholder="Enter meeting title" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter meeting location" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="type">Meeting Type</Label>
                    <Select>
                      <SelectTrigger id="type">
                        <SelectValue placeholder="Select meeting type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-person</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="board">Board</SelectItem>
                        <SelectItem value="committee">Committee</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                        <SelectItem value="strategic">Strategic</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter meeting description"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="attendees">Attendees</Label>
                  <Select>
                    <SelectTrigger id="attendees">
                      <SelectValue placeholder="Select attendees" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-board">
                        All Board Members
                      </SelectItem>
                      <SelectItem value="executive">
                        Executive Committee
                      </SelectItem>
                      <SelectItem value="finance">Finance Committee</SelectItem>
                      <SelectItem value="governance">
                        Governance Committee
                      </SelectItem>
                      <SelectItem value="audit">Audit Committee</SelectItem>
                      <SelectItem value="custom">Custom Selection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Schedule Meeting</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Meetings</p>
                <p className="text-2xl font-bold">{totalMeetings}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {thisMonthMeetings} this month
                </p>
              </div>
              <CalendarIcon className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Scheduled</p>
                <p className="text-2xl font-bold">{scheduledMeetings}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {Math.round((scheduledMeetings / totalMeetings) * 100)}% of
                  total
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
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round(attendanceRate)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {attendanceRate > 85
                    ? "Excellent"
                    : attendanceRate > 70
                      ? "Good"
                      : "Needs improvement"}
                </p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On-Time Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round(onTimePerformance)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Avg: {Math.round(averageDuration)}min
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Meeting Distribution</CardTitle>
            <CardDescription>Meetings by category this quarter</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(meetingsByCategory).map(([category, count]) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{category}</span>
                  <span>{count} meetings</span>
                </div>
                <Progress
                  value={(count / totalMeetings) * 100}
                  className="h-2"
                />
                <div className="text-xs text-muted-foreground">
                  {Math.round((count / totalMeetings) * 100)}% of total meetings
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Meeting Performance</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Completion Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round((completedMeetings / totalMeetings) * 100)}%
                </p>
              </div>
              <div className="text-right">
                <Badge className="bg-green-100 text-green-800">
                  {completedMeetings}/{totalMeetings}
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Average Response Rate</p>
                <p className="text-2xl font-bold">
                  {Math.round(averageAttendance)}%
                </p>
              </div>
              <div className="text-right">
                <Badge className="bg-blue-100 text-blue-800">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5% vs last month
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">Document Compliance</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <div className="text-right">
                <Badge className="bg-purple-100 text-purple-800">High</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search meetings..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="In-person">In-person</SelectItem>
            <SelectItem value="Virtual">Virtual</SelectItem>
            <SelectItem value="Hybrid">Hybrid</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Scheduled">Scheduled</SelectItem>
            <SelectItem value="Completed">Completed</SelectItem>
            <SelectItem value="Cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[150px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Board">Board</SelectItem>
            <SelectItem value="Committee">Committee</SelectItem>
            <SelectItem value="Executive">Executive</SelectItem>
            <SelectItem value="Strategic">Strategic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="list">Meeting List</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="w-full">
          <div className="space-y-4">
            {filteredMeetings.map((meeting) => (
              <Card
                key={meeting.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold">
                            {meeting.title}
                          </h3>
                          <Badge
                            variant={
                              meeting.status === "Scheduled"
                                ? "default"
                                : meeting.status === "Completed"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {meeting.status}
                          </Badge>
                          <Badge variant="outline">{meeting.category}</Badge>
                          {meeting.priority === "High" && (
                            <Badge className="bg-red-100 text-red-800">
                              High Priority
                            </Badge>
                          )}
                          {meeting.recurring && (
                            <Badge className="bg-blue-100 text-blue-800">
                              Recurring
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{meeting.organizer}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {meeting.location}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-1 h-3 w-3" />
                          View Details
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {canScheduleMeetings(userRole) && (
                              <>
                                <DropdownMenuItem>
                                  Edit Meeting
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Upload className="mr-2 h-4 w-4" />
                                  Upload Documents
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  View Attendees
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  Cancel Meeting
                                </DropdownMenuItem>
                              </>
                            )}
                            {!canScheduleMeetings(userRole) && (
                              <>
                                <DropdownMenuItem>
                                  View Attendees
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Add to Calendar
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  Download Agenda
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>

                    {/* Attendance Overview */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Attendance</span>
                        <span>
                          {meeting.confirmed}/{meeting.attendees} confirmed
                        </span>
                      </div>
                      <Progress
                        value={(meeting.confirmed / meeting.attendees) * 100}
                        className="h-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Confirmed: {meeting.confirmed}</span>
                        <span>Declined: {meeting.declined}</span>
                        <span>Pending: {meeting.pending}</span>
                      </div>
                    </div>

                    {/* Agenda Preview */}
                    {meeting.agenda.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Agenda:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {meeting.agenda.slice(0, 3).map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                          {meeting.agenda.length > 3 && (
                            <li className="text-xs">
                              ... and {meeting.agenda.length - 3} more items
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Documents */}
                    {meeting.documents.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          Documents ({meeting.documents.length}):
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {meeting.documents.slice(0, 3).map((doc) => (
                            <Badge
                              key={doc.id}
                              variant="outline"
                              className="text-xs"
                            >
                              {doc.name}
                            </Badge>
                          ))}
                          {meeting.documents.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{meeting.documents.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Duration Info */}
                    <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t">
                      <span>Estimated: {meeting.estimatedDuration}min</span>
                      {meeting.actualDuration && (
                        <span>Actual: {meeting.actualDuration}min</span>
                      )}
                      <span>Type: {meeting.type}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar" className="w-full">
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="md:col-span-5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Meeting Calendar</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
                <CardDescription>Next 5 scheduled meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingMeetings.map((meeting) => (
                    <div
                      key={meeting.id}
                      className="flex flex-col space-y-1 p-3 border rounded-lg"
                    >
                      <div className="font-medium text-sm">{meeting.title}</div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {meeting.date}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {meeting.time}
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {meeting.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {meeting.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Scheduled
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="w-full">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Monthly Meeting Trends</CardTitle>
                <CardDescription>
                  Meeting frequency and performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg font-semibold mb-2">
                    Meeting Analytics
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed analytics showing meeting trends, attendance
                    patterns, and performance metrics
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="font-semibold">This Month</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {thisMonthMeetings}
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="font-semibold">Completed</p>
                      <p className="text-2xl font-bold text-green-600">
                        {completedThisMonth}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Key performance indicators for meeting management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Meeting Preparation Score</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Based on agenda and document readiness
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Post-Meeting Follow-up</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Minutes and action items completion
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Technology Readiness</span>
                    <span>95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Virtual meeting setup and connectivity
                  </p>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Overall Meeting Score</span>
                    <Badge className="bg-green-100 text-green-800">
                      Excellent
                    </Badge>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">91%</div>
                    <p className="text-xs text-muted-foreground">
                      Based on all meeting KPIs
                    </p>
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
