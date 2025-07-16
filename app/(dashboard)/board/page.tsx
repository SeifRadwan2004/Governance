"use client";

import { useState, useEffect } from "react";
import {
  UserCheck,
  Plus,
  Search,
  Filter,
  Edit,
  Eye,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Award,
  Clock,
  Users,
  TrendingUp,
  MoreVertical,
  Star,
  MessageSquare,
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { UserRole, getCurrentUserRole } from "@/lib/permissions";

export default function BoardPage() {
  const [activeTab, setActiveTab] = useState("members");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");
  const { toast } = useToast();

  useEffect(() => {
    setUserRole(getCurrentUserRole());
  }, []);

  // Mock board members data
  const boardMembers = [
    {
      id: 1,
      name: "Sarah Elizabeth Johnson",
      role: "Chairman",
      type: "Executive",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      joinDate: "2020-01-15",
      termEnd: "2026-01-15",
      experience: "15+ years",
      specialization: ["Corporate Governance", "Strategic Planning", "Finance"],
      education: "MBA Harvard Business School",
      previousRoles: ["CEO TechCorp", "VP Strategy InnovateTech"],
      committeeMemberships: ["Executive Committee", "Compensation Committee"],
      meetingAttendance: 95,
      status: "active",
      bio: "Seasoned executive with extensive experience in corporate governance and strategic planning.",
      avatar: "/avatars/sarah-chairman.png",
      linkedIn: "https://linkedin.com/in/sarahjohnson",
      isIndependent: false,
    },
    {
      id: 2,
      name: "Dr. Emily Watson",
      role: "Independent Director",
      type: "Independent",
      email: "emily.watson@email.com",
      phone: "+1 (555) 234-5678",
      location: "San Francisco, CA",
      joinDate: "2021-06-01",
      termEnd: "2027-06-01",
      experience: "20+ years",
      specialization: [
        "Healthcare Innovation",
        "Technology",
        "Risk Management",
      ],
      education: "PhD Stanford University, MD Johns Hopkins",
      previousRoles: [
        "Chief Medical Officer HealthTech",
        "Research Director Stanford",
      ],
      committeeMemberships: ["Audit Committee", "Risk Committee"],
      meetingAttendance: 88,
      status: "active",
      bio: "Healthcare innovation expert with deep expertise in medical technology and risk assessment.",
      avatar: "/avatars/emily-director.png",
      linkedIn: "https://linkedin.com/in/emilywatson",
      isIndependent: true,
    },
    {
      id: 3,
      name: "Michael David Chen",
      role: "Non-Executive Director",
      type: "Non-Executive",
      email: "michael.chen@company.com",
      phone: "+1 (555) 345-6789",
      location: "Chicago, IL",
      joinDate: "2019-03-10",
      termEnd: "2025-03-10",
      experience: "25+ years",
      specialization: ["Finance", "Investment", "International Markets"],
      education: "CFA, MBA Wharton",
      previousRoles: ["CFO Global Investments", "Director Finance Corp"],
      committeeMemberships: ["Audit Committee", "Finance Committee"],
      meetingAttendance: 92,
      status: "active",
      bio: "Financial expert with extensive international markets experience and investment strategy expertise.",
      avatar: "/avatars/michael-director.png",
      linkedIn: "https://linkedin.com/in/michaelchen",
      isIndependent: false,
    },
    {
      id: 4,
      name: "Maria Elena Santos",
      role: "Independent Director",
      type: "Independent",
      email: "maria.santos@email.com",
      phone: "+1 (555) 456-7890",
      location: "Los Angeles, CA",
      joinDate: "2022-09-15",
      termEnd: "2028-09-15",
      experience: "18+ years",
      specialization: ["ESG", "Sustainability", "Legal Affairs"],
      education: "JD Yale Law School, LLM Environmental Law",
      previousRoles: [
        "General Counsel GreenTech",
        "Partner Environmental Law Firm",
      ],
      committeeMemberships: ["ESG Committee", "Nominating Committee"],
      meetingAttendance: 96,
      status: "active",
      bio: "ESG and sustainability expert with strong legal background in environmental and corporate law.",
      avatar: "/avatars/maria-director.png",
      linkedIn: "https://linkedin.com/in/mariasantos",
      isIndependent: true,
    },
    {
      id: 5,
      name: "James Robert Wilson",
      role: "CEO",
      type: "Executive",
      email: "james.wilson@company.com",
      phone: "+1 (555) 567-8901",
      location: "Austin, TX",
      joinDate: "2018-11-01",
      termEnd: "2024-11-01",
      experience: "22+ years",
      specialization: ["Operations", "Technology", "Digital Transformation"],
      education: "MBA MIT Sloan, BS Computer Science",
      previousRoles: ["COO TechStart", "VP Engineering InnovateTech"],
      committeeMemberships: ["Executive Committee"],
      meetingAttendance: 98,
      status: "active",
      bio: "Technology leader with proven track record in digital transformation and operational excellence.",
      avatar: "/avatars/james-ceo.png",
      linkedIn: "https://linkedin.com/in/jameswilson",
      isIndependent: false,
    },
    {
      id: 6,
      name: "Patricia Anne Thompson",
      role: "Independent Director",
      type: "Independent",
      email: "patricia.thompson@email.com",
      phone: "+1 (555) 678-9012",
      location: "Boston, MA",
      joinDate: "2020-04-20",
      termEnd: "2026-04-20",
      experience: "30+ years",
      specialization: [
        "Human Resources",
        "Compensation",
        "Organizational Development",
      ],
      education: "PhD Organizational Psychology, MBA HR Management",
      previousRoles: ["CHRO Fortune 500", "HR Consultant"],
      committeeMemberships: ["Compensation Committee", "Nominating Committee"],
      meetingAttendance: 91,
      status: "active",
      bio: "HR expert with extensive experience in executive compensation and organizational development.",
      avatar: "/avatars/patricia-director.png",
      linkedIn: "https://linkedin.com/in/patriciathompson",
      isIndependent: true,
    },
  ];

  const committees = [
    {
      id: 1,
      name: "Executive Committee",
      description: "Strategic oversight and key decision making",
      chair: "Sarah Elizabeth Johnson",
      members: ["Sarah Elizabeth Johnson", "James Robert Wilson"],
      meetingFrequency: "Monthly",
      lastMeeting: "2025-01-15",
      nextMeeting: "2025-02-15",
    },
    {
      id: 2,
      name: "Audit Committee",
      description: "Financial oversight and compliance monitoring",
      chair: "Michael David Chen",
      members: ["Michael David Chen", "Dr. Emily Watson"],
      meetingFrequency: "Quarterly",
      lastMeeting: "2025-01-10",
      nextMeeting: "2025-04-10",
    },
    {
      id: 3,
      name: "Compensation Committee",
      description: "Executive compensation and benefits oversight",
      chair: "Patricia Anne Thompson",
      members: ["Patricia Anne Thompson", "Sarah Elizabeth Johnson"],
      meetingFrequency: "Quarterly",
      lastMeeting: "2024-12-20",
      nextMeeting: "2025-03-20",
    },
    {
      id: 4,
      name: "ESG Committee",
      description: "Environmental, social, and governance oversight",
      chair: "Maria Elena Santos",
      members: ["Maria Elena Santos", "Dr. Emily Watson"],
      meetingFrequency: "Bi-monthly",
      lastMeeting: "2025-01-08",
      nextMeeting: "2025-03-08",
    },
  ];

  const upcomingMeetings = [
    {
      id: 1,
      title: "Board Meeting - Q4 Review",
      date: "2025-01-30",
      time: "10:00 AM EST",
      location: "Board Room A",
      attendees: 6,
      agenda: [
        "Q4 Financial Review",
        "2025 Budget Approval",
        "Strategic Planning",
      ],
    },
    {
      id: 2,
      title: "Executive Committee",
      date: "2025-02-15",
      time: "2:00 PM EST",
      location: "Executive Conference Room",
      attendees: 2,
      agenda: [
        "Strategic Initiatives Update",
        "Market Analysis",
        "Risk Assessment",
      ],
    },
  ];

  const handleAddMember = () => {
    toast({
      title: "Add Board Member",
      description: "Opening board member registration form...",
    });
  };

  const handleEditMember = (memberId: number) => {
    const member = boardMembers.find((m) => m.id === memberId);
    toast({
      title: "Edit Board Member",
      description: `Opening edit form for ${member?.name}...`,
    });
  };

  const handleViewProfile = (memberId: number) => {
    const member = boardMembers.find((m) => m.id === memberId);
    toast({
      title: "View Profile",
      description: `Opening detailed profile for ${member?.name}...`,
    });
  };

  const handleContactMember = (memberId: number) => {
    const member = boardMembers.find((m) => m.id === memberId);
    toast({
      title: "Contact Member",
      description: `Opening contact options for ${member?.name}...`,
    });
  };

  const getRoleBadge = (role: string, type: string) => {
    const colors = {
      Chairman: "bg-purple-100 text-purple-800",
      CEO: "bg-blue-100 text-blue-800",
      "Independent Director": "bg-green-100 text-green-800",
      "Non-Executive Director": "bg-orange-100 text-orange-800",
    };
    return (
      <Badge
        className={
          colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800"
        }
      >
        {role}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    const colors = {
      Executive: "bg-blue-100 text-blue-800",
      Independent: "bg-green-100 text-green-800",
      "Non-Executive": "bg-orange-100 text-orange-800",
    };
    return (
      <Badge variant="outline" className={colors[type as keyof typeof colors]}>
        {type}
      </Badge>
    );
  };

  const filteredMembers = boardMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.specialization.some((spec) =>
        spec.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesRole = filterRole === "all" || member.type === filterRole;

    return matchesSearch && matchesRole;
  });

  const totalMembers = boardMembers.length;
  const independentMembers = boardMembers.filter((m) => m.isIndependent).length;
  const averageAttendance =
    boardMembers.reduce((sum, m) => sum + m.meetingAttendance, 0) /
    boardMembers.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">
            Board of Directors
          </h1>
          <p className="text-muted-foreground">
            Manage board composition, committees, and governance activities
          </p>
        </div>
        {(userRole === "admin" || userRole === "chairman") && (
          <Button
            onClick={handleAddMember}
            className="bg-corporate-600 hover:bg-corporate-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Board Member
          </Button>
        )}
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Members</p>
                <p className="text-2xl font-bold">{totalMembers}</p>
              </div>
              <UserCheck className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Independent</p>
                <p className="text-2xl font-bold">{independentMembers}</p>
              </div>
              <Award className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Attendance</p>
                <p className="text-2xl font-bold">
                  {averageAttendance.toFixed(0)}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Committees</p>
                <p className="text-2xl font-bold">{committees.length}</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="members">Board Members</TabsTrigger>
          <TabsTrigger value="committees">Committees</TabsTrigger>
          <TabsTrigger value="meetings">Meetings</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="members" className="space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search board members..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={filterRole} onValueChange={setFilterRole}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Executive">Executive</SelectItem>
                      <SelectItem value="Independent">Independent</SelectItem>
                      <SelectItem value="Non-Executive">
                        Non-Executive
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Board Members Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredMembers.map((member) => (
              <Card
                key={member.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Member Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
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
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleViewProfile(member.id)}
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View Profile
                          </DropdownMenuItem>
                          {(userRole === "admin" ||
                            userRole === "chairman") && (
                            <>
                              <DropdownMenuItem
                                onClick={() => handleEditMember(member.id)}
                              >
                                <Edit className="mr-2 h-4 w-4" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                            </>
                          )}
                          <DropdownMenuItem
                            onClick={() => handleContactMember(member.id)}
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Badges */}
                    <div className="space-y-2">
                      {getRoleBadge(member.role, member.type)}
                      {getTypeBadge(member.type)}
                    </div>

                    {/* Specializations */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Specializations</p>
                      <div className="flex flex-wrap gap-1">
                        {member.specialization.slice(0, 3).map((spec) => (
                          <Badge
                            key={spec}
                            variant="outline"
                            className="text-xs"
                          >
                            {spec}
                          </Badge>
                        ))}
                        {member.specialization.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{member.specialization.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Committees */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Committees</p>
                      <div className="text-sm text-muted-foreground">
                        {member.committeeMemberships.join(", ")}
                      </div>
                    </div>

                    {/* Attendance */}
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

                    {/* Contact Info */}
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          Term: {member.joinDate} - {member.termEnd}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleViewProfile(member.id)}
                    >
                      <Eye className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleContactMember(member.id)}
                    >
                      <Mail className="mr-1 h-3 w-3" />
                      Contact
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="committees" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {committees.map((committee) => (
              <Card key={committee.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{committee.name}</span>
                    <Badge variant="outline">
                      {committee.members.length} members
                    </Badge>
                  </CardTitle>
                  <CardDescription>{committee.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Chair:</span>
                      <span>{committee.chair}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Frequency:</span>
                      <span>{committee.meetingFrequency}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Last Meeting:</span>
                      <span>{committee.lastMeeting}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Next Meeting:</span>
                      <span>{committee.nextMeeting}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Members:</p>
                    <div className="space-y-1">
                      {committee.members.map((member) => (
                        <div
                          key={member}
                          className="text-sm text-muted-foreground"
                        >
                          • {member}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Committee Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="meetings" className="space-y-4">
          {/* Upcoming Meetings */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Meetings</CardTitle>
              <CardDescription>
                Scheduled board and committee meetings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-4 border rounded-lg space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{meeting.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{meeting.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{meeting.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{meeting.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">
                        {meeting.attendees} attendees
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium">Agenda:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {meeting.agenda.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="mr-1 h-3 w-3" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="mr-1 h-3 w-3" />
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-4">
          {/* Governance Overview */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Board Composition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Independent Directors</span>
                    <span>
                      {independentMembers}/{totalMembers}
                    </span>
                  </div>
                  <Progress
                    value={(independentMembers / totalMembers) * 100}
                    className="h-2"
                  />
                  <div className="text-sm text-muted-foreground">
                    {((independentMembers / totalMembers) * 100).toFixed(0)}%
                    independence ratio
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Average Tenure</span>
                    <span>4.2 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Gender Diversity</span>
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Skills Diversity</span>
                    <span>High</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meeting Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Meetings This Year</span>
                    <span>12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Attendance</span>
                    <span>{averageAttendance.toFixed(0)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Committee Meetings</span>
                    <span>28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Decision Rate</span>
                    <span>98%</span>
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
