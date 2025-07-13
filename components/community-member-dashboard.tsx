"use client";

import { useState } from "react";
import {
  Users,
  Heart,
  MessageSquare,
  Share,
  Bookmark,
  Plus,
  Search,
  Filter,
  Bell,
  UserPlus,
  Building,
  TrendingUp,
  Eye,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Award,
  Target,
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Repeat,
  ExternalLink,
  User,
  Briefcase,
  FileText,
  Hash,
  Mail,
  Settings,
  Star,
  Activity,
  Megaphone,
  PinIcon,
  ArrowUp,
  ArrowDown,
  Download,
  Verified,
  Flag,
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
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";

export function CommunityMemberDashboard() {
  const [activeTab, setActiveTab] = useState("feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [postType, setPostType] = useState("all");

  // Mock data
  const memberProfile = {
    name: "David Rodriguez",
    title: "Community Governance Advocate",
    location: "Austin, TX",
    joinedDate: "June 2023",
    followers: 847,
    following: 234,
    posts: 127,
    engagement: 1847,
    sectors: ["Technology", "Healthcare", "ESG"],
    avatar: "/avatars/david-community.png",
  };

  const followingStats = [
    { label: "Companies", count: 23, icon: Building },
    { label: "Board Members", count: 45, icon: User },
    { label: "Sectors", count: 3, icon: TrendingUp },
    { label: "Announcements", count: 12, icon: Bell },
  ];

  const sectorFeed = [
    {
      id: 1,
      type: "discussion",
      author: "Sarah Chen",
      authorTitle: "ESG Director at TechCorp",
      avatar: "/avatars/sarah-chen.png",
      sector: "Technology",
      timestamp: "2 hours ago",
      title: "The Future of AI Governance in Corporate Boards",
      content:
        "As AI becomes more integrated into business operations, how should board oversight adapt? What frameworks are you seeing work best for AI governance?",
      likes: 47,
      comments: 23,
      shares: 8,
      hasLiked: false,
      hasCommented: false,
      hasShared: false,
      tags: ["AI", "Governance", "Technology"],
      isPinned: false,
      isFollowing: true,
    },
    {
      id: 2,
      type: "announcement",
      author: "HealthCorp Industries",
      authorTitle: "Fortune 500 Healthcare Company",
      avatar: "/avatars/healthcorp.png",
      sector: "Healthcare",
      timestamp: "4 hours ago",
      title: "New Board Member Appointment",
      content:
        "We're pleased to announce Dr. Emily Watson as our new Independent Director, bringing 20+ years of healthcare innovation experience to our board.",
      likes: 89,
      comments: 15,
      shares: 12,
      hasLiked: true,
      hasCommented: false,
      hasShared: false,
      tags: ["BoardAppointment", "Healthcare", "Leadership"],
      isPinned: true,
      isFollowing: true,
      requiresConfirmation: false,
    },
    {
      id: 3,
      type: "legal",
      author: "TechVentures Legal",
      authorTitle: "Legal Department",
      avatar: "/avatars/legal-dept.png",
      sector: "Technology",
      timestamp: "1 day ago",
      title: "Mandatory: Updated Privacy Policy and Board Governance Framework",
      content:
        "Important legal update: Our revised privacy policy and governance framework are now in effect. All community members must acknowledge receipt by January 31, 2025.",
      likes: 23,
      comments: 7,
      shares: 3,
      hasLiked: false,
      hasCommented: false,
      hasShared: false,
      tags: ["Legal", "Privacy", "Governance"],
      isPinned: false,
      isFollowing: false,
      requiresConfirmation: true,
      isConfirmed: false,
    },
    {
      id: 4,
      type: "update",
      author: "Energy Solutions Board",
      authorTitle: "Renewable Energy Company",
      avatar: "/avatars/energy-board.png",
      sector: "Energy",
      timestamp: "2 days ago",
      title: "Q4 2024 ESG Performance Report Released",
      content:
        "Our latest ESG report shows 15% reduction in carbon footprint and achievement of diversity targets. Full report available for download.",
      likes: 156,
      comments: 34,
      shares: 28,
      hasLiked: false,
      hasCommented: true,
      hasShared: true,
      tags: ["ESG", "Sustainability", "Performance"],
      isPinned: false,
      isFollowing: true,
      requiresConfirmation: false,
      hasDocument: true,
    },
  ];

  const legalAnnouncements = [
    {
      id: 1,
      company: "TechVentures Legal",
      title: "Updated Privacy Policy and Board Governance Framework",
      dueDate: "Jan 31, 2025",
      status: "pending",
      priority: "high",
      description:
        "Mandatory acknowledgment required for updated privacy policy.",
    },
    {
      id: 2,
      company: "HealthCorp Industries",
      title: "Shareholder Rights Update",
      dueDate: "Feb 15, 2025",
      status: "pending",
      priority: "medium",
      description: "New shareholder communication protocols.",
    },
    {
      id: 3,
      company: "Energy Solutions Board",
      title: "Environmental Compliance Changes",
      dueDate: "Jan 25, 2025",
      status: "confirmed",
      priority: "high",
      description: "Updated environmental reporting requirements.",
    },
  ];

  const followingSuggestions = [
    {
      id: 1,
      type: "company",
      name: "InnovateTech Corp",
      description: "Leading AI and quantum computing company",
      sector: "Technology",
      followers: "12.4K",
      avatar: "/avatars/innovatetech.png",
      isFollowing: false,
    },
    {
      id: 2,
      type: "boardmember",
      name: "Dr. Maria Santos",
      description: "Independent Director, Healthcare Innovation Expert",
      sector: "Healthcare",
      followers: "8.7K",
      avatar: "/avatars/maria-santos.png",
      isFollowing: false,
    },
    {
      id: 3,
      type: "sector",
      name: "Clean Energy Governance",
      description: "ESG and renewable energy governance discussions",
      sector: "Energy",
      followers: "15.2K",
      avatar: "/avatars/clean-energy.png",
      isFollowing: false,
    },
  ];

  const engagementMetrics = [
    { label: "Posts Created", value: 127, change: "+12", trend: "up" },
    { label: "Comments Made", value: 234, change: "+23", trend: "up" },
    { label: "Shares", value: 89, change: "+8", trend: "up" },
    { label: "Likes Given", value: 567, change: "+45", trend: "up" },
  ];

  const filteredFeed = sectorFeed.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesSector =
      selectedSector === "all" || post.sector === selectedSector;
    const matchesType = postType === "all" || post.type === postType;

    return matchesSearch && matchesSector && matchesType;
  });

  const handleConfirmAnnouncement = (announcementId: number) => {
    // Handle confirmation logic
    console.log("Confirmed announcement:", announcementId);
  };

  const handleFollow = (itemId: number) => {
    // Handle follow logic
    console.log("Following item:", itemId);
  };

  const handleReaction = (
    postId: number,
    reactionType: "like" | "comment" | "share",
  ) => {
    // Handle reaction logic
    console.log("Reaction:", reactionType, "on post:", postId);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Member Profile Card */}
        <Card className="lg:w-1/3">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <Users className="h-10 w-10 text-purple-600" />
            </div>
            <CardTitle className="text-xl">{memberProfile.name}</CardTitle>
            <CardDescription>{memberProfile.title}</CardDescription>
            <div className="text-sm text-muted-foreground">
              {memberProfile.location} • Joined {memberProfile.joinedDate}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {memberProfile.followers}
                </div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {memberProfile.following}
                </div>
                <div className="text-xs text-muted-foreground">Following</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {memberProfile.posts}
                </div>
                <div className="text-xs text-muted-foreground">Posts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {memberProfile.engagement}
                </div>
                <div className="text-xs text-muted-foreground">Engagement</div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="text-sm font-medium">Following Interests</div>
              <div className="flex flex-wrap gap-1">
                {memberProfile.sectors.map((sector) => (
                  <Badge key={sector} variant="secondary" className="text-xs">
                    {sector}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              <Settings className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardFooter>
        </Card>

        {/* Following Stats Grid */}
        <div className="lg:w-2/3 space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {followingStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold">{stat.count}</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-full">
                      <stat.icon className="h-4 w-4 text-purple-600" />
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
                  Create Post
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <UserPlus className="h-5 w-5 mb-2" />
                  Find to Follow
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Bell className="h-5 w-5 mb-2" />
                  Announcements
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Activity className="h-5 w-5 mb-2" />
                  My Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Legal Announcements Alert */}
      {legalAnnouncements.some(
        (announcement) => announcement.status === "pending",
      ) && (
        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertTitle className="text-orange-800">
            Pending Legal Confirmations
          </AlertTitle>
          <AlertDescription className="text-orange-700">
            You have{" "}
            {legalAnnouncements.filter((a) => a.status === "pending").length}{" "}
            legal announcements requiring confirmation.
            <Button variant="link" className="p-0 h-auto text-orange-600 ml-2">
              Review Now
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
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="activity">My Activity</TabsTrigger>
          <TabsTrigger value="discover">Discover</TabsTrigger>
        </TabsList>

        <TabsContent value="feed" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Hash className="h-5 w-5" />
                <span>Sector Feed</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search posts, discussions, and updates..."
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
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Energy">Energy</SelectItem>
                      <SelectItem value="Financial Services">
                        Financial
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={postType} onValueChange={setPostType}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="discussion">Discussion</SelectItem>
                      <SelectItem value="announcement">Announcement</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="update">Update</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feed Posts */}
          <div className="space-y-4">
            {filteredFeed.map((post) => (
              <Card
                key={post.id}
                className={`hover:shadow-md transition-shadow ${
                  post.type === "legal"
                    ? "border-orange-200 bg-orange-50"
                    : post.isPinned
                      ? "border-blue-200 bg-blue-50"
                      : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Post Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback>
                            {post.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{post.author}</span>
                            {post.isFollowing && (
                              <Verified className="h-4 w-4 text-blue-500" />
                            )}
                            <Badge variant="outline" className="text-xs">
                              {post.sector}
                            </Badge>
                            {post.isPinned && (
                              <PinIcon className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {post.authorTitle}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {post.timestamp}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            post.type === "legal"
                              ? "destructive"
                              : post.type === "announcement"
                                ? "default"
                                : post.type === "discussion"
                                  ? "secondary"
                                  : "outline"
                          }
                        >
                          {post.type.toUpperCase()}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg">{post.title}</h3>
                      <p className="text-muted-foreground">{post.content}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Document Download */}
                      {post.hasDocument && (
                        <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                          <FileText className="h-5 w-5 text-blue-600" />
                          <span className="text-sm font-medium">
                            ESG Performance Report Q4 2024.pdf
                          </span>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      )}

                      {/* Legal Confirmation */}
                      {post.requiresConfirmation && !post.isConfirmed && (
                        <Alert className="border-orange-200 bg-orange-50">
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                          <AlertTitle className="text-orange-800">
                            Confirmation Required
                          </AlertTitle>
                          <AlertDescription className="text-orange-700 flex items-center justify-between">
                            <span>
                              You must acknowledge receipt of this legal
                              announcement.
                            </span>
                            <Button
                              size="sm"
                              className="bg-orange-600 hover:bg-orange-700"
                              onClick={() => handleConfirmAnnouncement(post.id)}
                            >
                              <CheckCircle className="mr-2 h-3 w-3" />
                              Confirm Receipt
                            </Button>
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>

                    {/* Engagement Actions */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={post.hasLiked ? "text-red-600" : ""}
                          onClick={() => handleReaction(post.id, "like")}
                        >
                          <Heart
                            className={`h-4 w-4 mr-1 ${post.hasLiked ? "fill-current" : ""}`}
                          />
                          {post.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReaction(post.id, "comment")}
                        >
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.comments}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleReaction(post.id, "share")}
                        >
                          <Share className="h-4 w-4 mr-1" />
                          {post.shares}
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Flag className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="following" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Current Following */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="h-5 w-5" />
                  <span>Currently Following ({memberProfile.following})</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {followingStats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-3 border rounded-lg"
                    >
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                      <div className="text-xl font-bold">{stat.count}</div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full">Manage Following List</Button>
              </CardContent>
            </Card>

            {/* Engagement Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Engagement Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {engagementMetrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{metric.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold">{metric.value}</span>
                      <span
                        className={`text-xs ${
                          metric.trend === "up"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Legal Announcements</span>
              </CardTitle>
              <CardDescription>
                Important legal notices and compliance requirements requiring
                your confirmation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {legalAnnouncements.map((announcement) => (
                  <Card
                    key={announcement.id}
                    className={`${
                      announcement.priority === "high"
                        ? "border-red-200 bg-red-50"
                        : announcement.priority === "medium"
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-gray-200"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Badge
                              variant={
                                announcement.status === "confirmed"
                                  ? "default"
                                  : "destructive"
                              }
                            >
                              {announcement.status.toUpperCase()}
                            </Badge>
                            <Badge
                              variant={
                                announcement.priority === "high"
                                  ? "destructive"
                                  : announcement.priority === "medium"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {announcement.priority.toUpperCase()} PRIORITY
                            </Badge>
                          </div>
                          <h3 className="font-semibold">
                            {announcement.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {announcement.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-3 w-3" />
                              <span>{announcement.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>Due: {announcement.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          {announcement.status === "pending" ? (
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() =>
                                handleConfirmAnnouncement(announcement.id)
                              }
                            >
                              <CheckCircle className="mr-2 h-3 w-3" />
                              Confirm
                            </Button>
                          ) : (
                            <Badge className="bg-green-100 text-green-800">
                              <CheckCircle className="mr-1 h-3 w-3" />
                              Confirmed
                            </Badge>
                          )}
                          <Button size="sm" variant="outline">
                            <Eye className="mr-1 h-3 w-3" />
                            View Details
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

        <TabsContent value="activity" className="space-y-6">
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
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Commented on AI Governance discussion
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Followed Dr. Maria Santos
                      </p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">
                        Shared ESG Performance Report
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Activity Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">This Week's Activity</span>
                      <span className="font-semibold">47 actions</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">23</div>
                      <div className="text-xs text-muted-foreground">
                        Comments
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-green-600">12</div>
                      <div className="text-xs text-muted-foreground">
                        Shares
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="discover" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Discover</span>
              </CardTitle>
              <CardDescription>
                Find new companies, board members, and sectors to follow
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {followingSuggestions.map((suggestion) => (
                  <Card
                    key={suggestion.id}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage
                              src={suggestion.avatar}
                              alt={suggestion.name}
                            />
                            <AvatarFallback>
                              {suggestion.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold">{suggestion.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {suggestion.description}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                {suggestion.sector}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {suggestion.followers} followers
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleFollow(suggestion.id)}
                        >
                          <UserPlus className="mr-2 h-3 w-3" />
                          Follow
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
