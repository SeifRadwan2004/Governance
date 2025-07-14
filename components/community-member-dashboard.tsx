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
  DollarSign,
  ShoppingCart,
  CreditCard,
  Newspaper,
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
import { ProfileEditForm } from "@/components/profile-edit-form";
import { CreatePostModal } from "@/components/create-post-modal";
import { useToast } from "@/hooks/use-toast";

export function CommunityMemberDashboard() {
  const [activeTab, setActiveTab] = useState("feed");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [postType, setPostType] = useState("all");
  const [isProfileEditOpen, setIsProfileEditOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const { toast } = useToast();

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

  const globalHeadlines = [
    {
      id: 1,
      title: "Global ESG Regulations Tighten Across Major Markets",
      source: "Financial Times",
      category: "Regulatory",
      timestamp: "2 hours ago",
      summary:
        "New sustainability reporting requirements announced by EU, affecting multinational corporations worldwide.",
      impact: "high",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "AI Governance Standards Emerge from G20 Summit",
      source: "Reuters",
      category: "Technology",
      timestamp: "5 hours ago",
      summary:
        "International consensus reached on AI transparency and accountability in corporate governance.",
      impact: "medium",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Market Volatility Drives Board Oversight Changes",
      source: "Wall Street Journal",
      category: "Markets",
      timestamp: "1 day ago",
      summary:
        "Rising economic uncertainty prompts boards to enhance risk management frameworks.",
      impact: "high",
      readTime: "5 min read",
    },
  ];

  const investmentReports = [
    {
      id: 1,
      title: "Q1 2025 Corporate Governance Trends Report",
      description:
        "Comprehensive analysis of emerging governance practices across Fortune 500 companies",
      price: 149,
      category: "Governance",
      pages: 85,
      publishDate: "March 2025",
      rating: 4.8,
      reviews: 124,
      preview: true,
    },
    {
      id: 2,
      title: "ESG Investment Strategies: 2025 Market Outlook",
      description:
        "Deep dive into sustainable investment opportunities and regulatory compliance strategies",
      price: 199,
      category: "ESG",
      pages: 120,
      publishDate: "February 2025",
      rating: 4.9,
      reviews: 89,
      preview: true,
    },
    {
      id: 3,
      title: "Board Composition Analytics: Diversity & Performance",
      description:
        "Statistical analysis of board diversity impact on corporate performance metrics",
      price: 129,
      category: "Analytics",
      pages: 67,
      publishDate: "January 2025",
      rating: 4.7,
      reviews: 156,
      preview: false,
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

  // Initialize state with data
  const [posts, setPosts] = useState(sectorFeed);
  const [profile, setProfile] = useState(memberProfile);

  const handlePurchaseReport = (reportId: number) => {
    const report = investmentReports.find((r) => r.id === reportId);
    toast({
      title: "Purchase Initiated",
      description: `Starting purchase process for "${report?.title}"`,
    });
    // In a real app, this would integrate with payment processing
  };

  const handlePreviewReport = (reportId: number) => {
    const report = investmentReports.find((r) => r.id === reportId);
    toast({
      title: "Opening Preview",
      description: `Opening preview for "${report?.title}"`,
    });
    // In a real app, this would open a preview modal or new tab
  };

  const handleEditProfile = () => {
    setIsProfileEditOpen(true);
  };

  const handleSaveProfile = (updatedProfile: any) => {
    setProfile({ ...profile, ...updatedProfile });
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleCreatePost = () => {
    setIsCreatePostOpen(true);
  };

  const handleSubmitPost = (postData: any) => {
    const newPost = {
      id: posts.length + 1,
      type: postData.type,
      author: profile.name,
      authorTitle: profile.title,
      avatar: profile.avatar,
      sector: postData.sector,
      timestamp: "just now",
      title: postData.title,
      content: postData.content,
      likes: 0,
      comments: 0,
      shares: 0,
      hasLiked: false,
      hasCommented: false,
      hasShared: false,
      tags: postData.tags,
      isPinned: false,
      isFollowing: false,
    };
    setPosts([newPost, ...posts]);
    toast({
      title: "Post Created",
      description: "Your post has been published successfully.",
    });
  };

  const handleManageFollowing = () => {
    toast({
      title: "Following Management",
      description: "Opening following management panel...",
    });
  };

  const handleFindToFollow = () => {
    setActiveTab("discover");
  };

  const handleViewAnnouncements = () => {
    setActiveTab("headlines");
  };

  const handleViewActivity = () => {
    setActiveTab("activity");
  };

  const handleReadArticle = (headlineId: number) => {
    const headline = globalHeadlines.find((h) => h.id === headlineId);
    toast({
      title: "Opening Article",
      description: `Opening "${headline?.title}" in new tab`,
    });
    // In a real app, this would open the article URL
  };

  const handleSaveArticle = (headlineId: number) => {
    const headline = globalHeadlines.find((h) => h.id === headlineId);
    toast({
      title: "Article Saved",
      description: `"${headline?.title}" saved to your reading list`,
    });
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
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={handleEditProfile}
            >
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
                <Button
                  variant="outline"
                  className="h-auto flex-col py-4"
                  onClick={handleCreatePost}
                >
                  <Plus className="h-5 w-5 mb-2" />
                  Create Post
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex-col py-4"
                  onClick={handleFindToFollow}
                >
                  <UserPlus className="h-5 w-5 mb-2" />
                  Find to Follow
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex-col py-4"
                  onClick={handleViewAnnouncements}
                >
                  <Bell className="h-5 w-5 mb-2" />
                  Announcements
                </Button>
                <Button
                  variant="outline"
                  className="h-auto flex-col py-4"
                  onClick={handleViewActivity}
                >
                  <Activity className="h-5 w-5 mb-2" />
                  My Activity
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
        <TabsList className="grid w-full grid-cols-3 xl:grid-cols-6 gap-0.5">
          <TabsTrigger
            value="feed"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            Feed
          </TabsTrigger>
          <TabsTrigger
            value="following"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            <span className="hidden xl:inline">Following</span>
            <span className="xl:hidden">Follow</span>
          </TabsTrigger>
          <TabsTrigger
            value="headlines"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            <span className="hidden xl:inline">Global Headlines</span>
            <span className="xl:hidden">News</span>
          </TabsTrigger>
          <TabsTrigger
            value="reports"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            <span className="hidden xl:inline">Investment Reports</span>
            <span className="xl:hidden">Reports</span>
          </TabsTrigger>
          <TabsTrigger
            value="activity"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            <span className="hidden xl:inline">My Activity</span>
            <span className="xl:hidden">Activity</span>
          </TabsTrigger>
          <TabsTrigger
            value="discover"
            className="text-[10px] sm:text-xs xl:text-sm px-1 xl:px-3"
          >
            <span className="hidden xl:inline">Discover</span>
            <span className="xl:hidden">More</span>
          </TabsTrigger>
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
                <Button className="w-full" onClick={handleManageFollowing}>
                  Manage Following List
                </Button>
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

        <TabsContent value="headlines" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Newspaper className="h-5 w-5" />
                <span>Global Headlines</span>
              </CardTitle>
              <CardDescription>
                Latest news and developments affecting corporate governance
                worldwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {globalHeadlines.map((headline) => (
                  <Card
                    key={headline.id}
                    className={`hover:shadow-md transition-shadow ${
                      headline.impact === "high"
                        ? "border-red-200 bg-red-50"
                        : headline.impact === "medium"
                          ? "border-yellow-200 bg-yellow-50"
                          : "border-gray-200"
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">{headline.category}</Badge>
                            <Badge
                              variant={
                                headline.impact === "high"
                                  ? "destructive"
                                  : headline.impact === "medium"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {headline.impact.toUpperCase()} IMPACT
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {headline.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-lg">
                            {headline.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {headline.summary}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Globe className="h-3 w-3" />
                              <span>{headline.source}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{headline.timestamp}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2 ml-4">
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Read Full Article
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Bookmark className="mr-1 h-3 w-3" />
                            Save
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

        <TabsContent value="reports" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Investment Reports</span>
              </CardTitle>
              <CardDescription>
                Browse and purchase professional investment and governance
                reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Filter and Search */}
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search reports by title or category..."
                      className="w-full"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="governance">Governance</SelectItem>
                        <SelectItem value="esg">ESG</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                        <SelectItem value="compliance">Compliance</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="newest">
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest First</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Reports Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {investmentReports.map((report) => (
                    <Card
                      key={report.id}
                      className="hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="outline">{report.category}</Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">
                                  {report.rating}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  ({report.reviews})
                                </span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg leading-tight">
                              {report.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {report.description}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Pages:
                              </span>
                              <span className="font-medium">
                                {report.pages}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Published:
                              </span>
                              <span className="font-medium">
                                {report.publishDate}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t">
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <span className="text-xl font-bold text-green-600">
                                ${report.price}
                              </span>
                            </div>
                            <div className="flex space-x-2">
                              {report.preview && (
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handlePreviewReport(report.id)}
                                >
                                  <Eye className="mr-1 h-3 w-3" />
                                  Preview
                                </Button>
                              )}
                              <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700"
                                onClick={() => handlePurchaseReport(report.id)}
                              >
                                <ShoppingCart className="mr-1 h-3 w-3" />
                                Buy Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Purchase History */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CreditCard className="h-5 w-5" />
                      <span>Recent Purchases</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8 text-muted-foreground">
                      <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No recent purchases</p>
                      <p className="text-sm">
                        Your purchased reports will appear here
                      </p>
                    </div>
                  </CardContent>
                </Card>
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
