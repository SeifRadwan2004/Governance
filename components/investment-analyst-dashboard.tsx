"use client";

import { useState } from "react";
import {
  TrendingUp,
  FileText,
  DollarSign,
  Eye,
  Users,
  Star,
  BarChart3,
  LineChart,
  PieChart,
  Calendar,
  Download,
  Upload,
  Edit,
  Plus,
  Search,
  Filter,
  Globe,
  Award,
  Target,
  Bookmark,
  Share,
  MessageSquare,
  ThumbsUp,
  Clock,
  AlertCircle,
  CheckCircle,
  TrendingDown,
  Activity,
  CreditCard,
  Wallet,
  PiggyBank,
  Receipt,
  Building,
  Briefcase,
  UserCheck,
  Settings,
  Bell,
  Mail,
  RefreshCw,
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
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export function InvestmentAnalystDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const { toast } = useToast();

  // Button handlers
  const handleEditProfile = () => {
    toast({
      title: "Edit Profile",
      description: "Opening analyst profile editor...",
    });
  };

  const handleNewReport = () => {
    setActiveTab("reports");
    toast({
      title: "New Report",
      description: "Opening report creation wizard...",
    });
  };

  const handleViewAnalytics = () => {
    setActiveTab("analytics");
    toast({
      title: "View Analytics",
      description: "Navigating to analytics dashboard...",
    });
  };

  const handleEarnings = () => {
    setActiveTab("earnings");
    toast({
      title: "Earnings",
      description: "Opening earnings management section...",
    });
  };

  const handleMarketData = () => {
    setActiveTab("market-data");
    toast({
      title: "Market Data",
      description: "Accessing real-time market data feed...",
    });
  };

  const handleCreateNewReport = () => {
    toast({
      title: "Create New Report",
      description: "Opening investment report creation form...",
    });
  };

  const handleViewReport = (reportId: number) => {
    const report = publishedReports.find((r) => r.id === reportId);
    toast({
      title: "View Report",
      description: `Opening detailed view for "${report?.title}"...`,
    });
  };

  const handleEditReport = (reportId: number) => {
    const report = publishedReports.find((r) => r.id === reportId);
    toast({
      title: "Edit Report",
      description: `Opening editor for "${report?.title}"...`,
    });
  };

  const handleReportAnalytics = (reportId: number) => {
    const report = publishedReports.find((r) => r.id === reportId);
    toast({
      title: "Report Analytics",
      description: `Opening analytics for "${report?.title}"...`,
    });
  };

  const handleAddPaymentMethod = () => {
    toast({
      title: "Add Payment Method",
      description: "Opening payment method setup...",
    });
  };

  const handleDownloadInvoice = (month: string) => {
    toast({
      title: "Download Invoice",
      description: `Generating invoice for ${month}...`,
    });
  };

  const handleRefreshMarketData = () => {
    toast({
      title: "Refresh Market Data",
      description: "Updating market data from live feeds...",
    });
  };

  // Mock data
  const analystProfile = {
    name: "Jessica Chen",
    title: "Senior Investment Analyst",
    specialization: "ESG & Technology",
    rating: 4.7,
    followers: 12847,
    reportsPublished: 47,
    totalEarnings: 156780,
    monthlyEarnings: 23450,
    subscriptions: 2384,
  };

  const dashboardMetrics = [
    {
      label: "Total Reports",
      value: 47,
      change: "+3",
      trend: "up",
      icon: FileText,
    },
    {
      label: "Active Subscribers",
      value: 2384,
      change: "+127",
      trend: "up",
      icon: Users,
    },
    {
      label: "Monthly Revenue",
      value: "$23.4K",
      change: "+15%",
      trend: "up",
      icon: DollarSign,
    },
    {
      label: "Avg. Rating",
      value: "4.7/5",
      change: "+0.2",
      trend: "up",
      icon: Star,
    },
    {
      label: "Total Views",
      value: "89.2K",
      change: "+8.5K",
      trend: "up",
      icon: Eye,
    },
    {
      label: "Download Rate",
      value: "78%",
      change: "+5%",
      trend: "up",
      icon: Download,
    },
  ];

  const publishedReports = [
    {
      id: 1,
      title: "ESG Investment Opportunities in Tech Sector Q1 2025",
      sector: "Technology",
      price: 149.99,
      publishDate: "Jan 10, 2025",
      status: "published",
      views: 2847,
      downloads: 1243,
      rating: 4.8,
      earnings: 18587.37,
      subscribers: 891,
      type: "premium",
    },
    {
      id: 2,
      title: "Healthcare Innovation: Biotech Investment Analysis",
      sector: "Healthcare",
      price: 99.99,
      publishDate: "Jan 5, 2025",
      status: "published",
      views: 1956,
      downloads: 876,
      rating: 4.6,
      earnings: 8763.24,
      subscribers: 543,
      type: "standard",
    },
    {
      id: 3,
      title: "Renewable Energy Market Outlook 2025",
      sector: "Energy",
      price: 199.99,
      publishDate: "Dec 28, 2024",
      status: "published",
      views: 3421,
      downloads: 1567,
      rating: 4.9,
      earnings: 31334.33,
      subscribers: 1203,
      type: "premium",
    },
    {
      id: 4,
      title: "AI and Machine Learning Investment Thesis",
      sector: "Technology",
      price: 0,
      publishDate: "Jan 12, 2025",
      status: "draft",
      views: 0,
      downloads: 0,
      rating: 0,
      earnings: 0,
      subscribers: 0,
      type: "free",
    },
  ];

  const sectorData = [
    {
      sector: "Technology",
      marketCap: "$2.1T",
      change: "+12.4%",
      trend: "up",
      companies: 1247,
      avgPE: 28.5,
      recommendation: "Buy",
      lastUpdated: "2 hours ago",
    },
    {
      sector: "Healthcare",
      marketCap: "$1.8T",
      change: "+8.7%",
      trend: "up",
      companies: 893,
      avgPE: 22.1,
      recommendation: "Hold",
      lastUpdated: "1 hour ago",
    },
    {
      sector: "Energy",
      marketCap: "$1.2T",
      change: "-3.2%",
      trend: "down",
      companies: 567,
      avgPE: 15.8,
      recommendation: "Sell",
      lastUpdated: "30 mins ago",
    },
    {
      sector: "Financial Services",
      marketCap: "$1.5T",
      change: "+5.1%",
      trend: "up",
      companies: 724,
      avgPE: 18.9,
      recommendation: "Buy",
      lastUpdated: "45 mins ago",
    },
  ];

  const earningsBreakdown = [
    {
      month: "Jan 2025",
      premium: 18587,
      standard: 8763,
      free: 0,
      total: 27350,
    },
    {
      month: "Dec 2024",
      premium: 31334,
      standard: 12450,
      free: 0,
      total: 43784,
    },
    {
      month: "Nov 2024",
      premium: 24567,
      standard: 9876,
      free: 0,
      total: 34443,
    },
    {
      month: "Oct 2024",
      premium: 19234,
      standard: 7654,
      free: 0,
      total: 26888,
    },
  ];

  const recentActivity = [
    {
      type: "purchase",
      user: "Goldman Sachs",
      report: "ESG Tech Analysis",
      amount: 149.99,
      time: "2 hours ago",
    },
    {
      type: "rating",
      user: "Morgan Stanley",
      report: "Healthcare Innovation",
      rating: 5,
      time: "4 hours ago",
    },
    {
      type: "download",
      user: "BlackRock",
      report: "Renewable Energy Outlook",
      time: "6 hours ago",
    },
    {
      type: "subscription",
      user: "Vanguard",
      tier: "Premium",
      time: "1 day ago",
    },
  ];

  const filteredReports = publishedReports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.sector.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector =
      !selectedSector ||
      selectedSector === "all" ||
      report.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Analyst Profile Card */}
        <Card className="lg:w-1/3">
          <CardHeader className="text-center">
            <div className="mx-auto w-20 h-20 mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-xl">{analystProfile.name}</CardTitle>
            <CardDescription>{analystProfile.title}</CardDescription>
            <div className="text-sm text-muted-foreground">
              {analystProfile.specialization}
            </div>
            <div className="flex items-center justify-center space-x-1 text-yellow-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(analystProfile.rating) ? "fill-current" : ""}`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {analystProfile.rating}/5
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {analystProfile.reportsPublished}
                </div>
                <div className="text-xs text-muted-foreground">Reports</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {analystProfile.followers.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {analystProfile.subscriptions.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Subscribers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  ${(analystProfile.totalEarnings / 1000).toFixed(1)}K
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Earnings
                </div>
              </div>
            </div>
            <Separator />
            <div className="text-center">
              <div className="text-lg font-semibold text-green-600">
                ${analystProfile.monthlyEarnings.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                This Month's Earnings
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
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
                    <div className="p-3 bg-green-100 rounded-full">
                      <metric.icon className="h-4 w-4 text-green-600" />
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
                  New Report
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <BarChart3 className="h-5 w-5 mb-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Wallet className="h-5 w-5 mb-2" />
                  Earnings
                </Button>
                <Button variant="outline" className="h-auto flex-col py-4">
                  <Globe className="h-5 w-5 mb-2" />
                  Market Data
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
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="market-data">Market Data</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        activity.type === "purchase"
                          ? "bg-green-500"
                          : activity.type === "rating"
                            ? "bg-yellow-500"
                            : activity.type === "download"
                              ? "bg-blue-500"
                              : "bg-purple-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.type === "purchase" &&
                          `${activity.user} purchased ${activity.report} for $${activity.amount}`}
                        {activity.type === "rating" &&
                          `${activity.user} rated ${activity.report} ${activity.rating}/5 stars`}
                        {activity.type === "download" &&
                          `${activity.user} downloaded ${activity.report}`}
                        {activity.type === "subscription" &&
                          `${activity.user} subscribed to ${activity.tier} tier`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Performing Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Top Performing Reports</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {publishedReports
                  .filter((report) => report.status === "published")
                  .sort((a, b) => b.earnings - a.earnings)
                  .slice(0, 3)
                  .map((report, index) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium line-clamp-1">
                          {report.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {report.downloads} downloads • {report.rating}/5
                          rating
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">
                          ${report.earnings.toLocaleString()}
                        </p>
                        <Badge
                          variant={index === 0 ? "default" : "secondary"}
                          className="text-xs"
                        >
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>

          {/* Monthly Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LineChart className="h-5 w-5" />
                <span>Monthly Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {earningsBreakdown.map((month, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{month.month}</span>
                      <span className="text-sm font-semibold">
                        ${month.total.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{
                          width: `${(month.total / Math.max(...earningsBreakdown.map((m) => m.total))) * 100}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Premium: ${month.premium.toLocaleString()} • Standard: $
                      {month.standard.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Published Reports</span>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Report
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search reports by title or sector..."
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
                      <SelectValue placeholder="All Sectors" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      <SelectItem value="Technology">Technology</SelectItem>
                      <SelectItem value="Healthcare">Healthcare</SelectItem>
                      <SelectItem value="Energy">Energy</SelectItem>
                      <SelectItem value="Financial Services">
                        Financial Services
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reports List */}
          <div className="space-y-4">
            {filteredReports.map((report) => (
              <Card
                key={report.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">
                          {report.title}
                        </h3>
                        <Badge
                          variant={
                            report.status === "published"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {report.status.toUpperCase()}
                        </Badge>
                        <Badge
                          variant={
                            report.type === "premium"
                              ? "default"
                              : report.type === "standard"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {report.type.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{report.sector}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{report.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="h-4 w-4" />
                          <span>
                            {report.price === 0 ? "Free" : `$${report.price}`}
                          </span>
                        </div>
                      </div>
                      {report.status === "published" && (
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4 text-blue-500" />
                            <span>{report.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4 text-green-500" />
                            <span>
                              {report.downloads.toLocaleString()} downloads
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{report.rating}/5 rating</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      {report.status === "published" && (
                        <div className="text-right">
                          <div className="text-lg font-semibold text-green-600">
                            ${report.earnings.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {report.subscribers} subscribers
                          </div>
                        </div>
                      )}
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="mr-1 h-3 w-3" />
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="mr-1 h-3 w-3" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline">
                          <BarChart3 className="mr-1 h-3 w-3" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Views Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>Views Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Views</span>
                    <span className="font-semibold">89,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">This Month</span>
                    <span className="font-semibold text-green-600">+8,523</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Average per Report</span>
                    <span className="font-semibold">1,899</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">View-to-Download Rate</span>
                    <span className="font-semibold">78%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Subscription Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Subscription Analytics</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Subscribers</span>
                    <span className="font-semibold">2,384</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">New This Month</span>
                    <span className="font-semibold text-green-600">+127</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Churn Rate</span>
                    <span className="font-semibold">4.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Retention Rate</span>
                    <span className="font-semibold text-green-600">95.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Rating Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{rating}★</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-yellow-500 h-2 rounded-full"
                          style={{
                            width: `${rating === 5 ? 68 : rating === 4 ? 23 : rating === 3 ? 7 : rating === 2 ? 2 : 0}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {rating === 5
                          ? "68%"
                          : rating === 4
                            ? "23%"
                            : rating === 3
                              ? "7%"
                              : rating === 2
                                ? "2%"
                                : "0%"}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">4.7</div>
                  <div className="text-sm text-muted-foreground">
                    Average Rating
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Geographic Analytics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Geographic Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { country: "United States", percentage: 45 },
                    { country: "United Kingdom", percentage: 18 },
                    { country: "Canada", percentage: 12 },
                    { country: "Germany", percentage: 8 },
                    { country: "Australia", percentage: 7 },
                    { country: "Others", percentage: 10 },
                  ].map((item) => (
                    <div
                      key={item.country}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-sm w-20">{item.country}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-8">
                        {item.percentage}%
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Earnings Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wallet className="h-5 w-5" />
                  <span>Earnings Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">
                    ${analystProfile.totalEarnings.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Lifetime Earnings
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-semibold">
                      ${analystProfile.monthlyEarnings.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      This Month
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-semibold">$18.7K</div>
                    <div className="text-xs text-muted-foreground">
                      Last Month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5" />
                  <span>Payout Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Bank Transfer</p>
                        <p className="text-xs text-muted-foreground">
                          ****1234
                        </p>
                      </div>
                    </div>
                    <Badge>Primary</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center">
                        <Wallet className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">PayPal</p>
                        <p className="text-xs text-muted-foreground">
                          j***@email.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Earnings Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Receipt className="h-5 w-5" />
                <span>Monthly Earnings Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead>Premium Reports</TableHead>
                    <TableHead>Standard Reports</TableHead>
                    <TableHead>Free Reports</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {earningsBreakdown.map((month, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">
                        {month.month}
                      </TableCell>
                      <TableCell className="text-green-600">
                        ${month.premium.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-blue-600">
                        ${month.standard.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        ${month.free.toLocaleString()}
                      </TableCell>
                      <TableCell className="font-semibold">
                        ${month.total.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <Download className="h-3 w-3 mr-1" />
                          Invoice
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market-data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Curated Sector Data Feed</span>
                </span>
                <Button size="sm" variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh Data
                </Button>
              </CardTitle>
              <CardDescription>
                Real-time market data and insights across key sectors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sectorData.map((sector, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">
                            {sector.sector}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{sector.companies} companies</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <BarChart3 className="h-4 w-4" />
                              <span>P/E: {sector.avgPE}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>Updated {sector.lastUpdated}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <div className="text-xl font-bold">
                            {sector.marketCap}
                          </div>
                          <div
                            className={`flex items-center space-x-1 ${
                              sector.trend === "up"
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {sector.trend === "up" ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingDown className="h-4 w-4" />
                            )}
                            <span className="font-semibold">
                              {sector.change}
                            </span>
                          </div>
                          <Badge
                            variant={
                              sector.recommendation === "Buy"
                                ? "default"
                                : sector.recommendation === "Hold"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {sector.recommendation}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Market Alerts */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Market Alert</AlertTitle>
            <AlertDescription>
              Technology sector showing strong growth momentum (+12.4%) driven
              by AI and cloud computing advancements. Consider updating your
              tech sector analysis reports.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}
