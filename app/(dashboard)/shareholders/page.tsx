"use client";

import { useState } from "react";
import {
  Users,
  Plus,
  Search,
  Filter,
  Edit,
  Eye,
  Download,
  Upload,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  Minus,
  PieChart,
  BarChart3,
  Calendar,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

export default function ShareholdersPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const { toast } = useToast();

  // Mock shareholders data
  const shareholders = [
    {
      id: 1,
      name: "Pension Fund Holdings",
      type: "Institutional",
      sharesOwned: 2500000,
      percentageOwned: 25.0,
      valueUSD: 125000000,
      lastTransaction: "2024-12-15",
      transactionType: "buy",
      contactEmail: "contact@pensionfund.com",
      representative: "Margaret Wilson",
      votingRights: true,
      status: "active",
      joinDate: "2020-03-15",
      avatar: "/avatars/institution1.png",
    },
    {
      id: 2,
      name: "TechVenture Capital",
      type: "Institutional",
      sharesOwned: 1800000,
      percentageOwned: 18.0,
      valueUSD: 90000000,
      lastTransaction: "2025-01-10",
      transactionType: "buy",
      contactEmail: "partners@techventure.com",
      representative: "David Chen",
      votingRights: true,
      status: "active",
      joinDate: "2019-08-22",
      avatar: "/avatars/institution2.png",
    },
    {
      id: 3,
      name: "Sarah Elizabeth Johnson",
      type: "Individual",
      sharesOwned: 1200000,
      percentageOwned: 12.0,
      valueUSD: 60000000,
      lastTransaction: "2024-11-20",
      transactionType: "hold",
      contactEmail: "sarah.johnson@email.com",
      representative: "Self",
      votingRights: true,
      status: "active",
      joinDate: "2018-01-10",
      avatar: "/avatars/sarah-shareholder.png",
    },
    {
      id: 4,
      name: "Global Investment Trust",
      type: "Institutional",
      sharesOwned: 800000,
      percentageOwned: 8.0,
      valueUSD: 40000000,
      lastTransaction: "2025-01-05",
      transactionType: "sell",
      contactEmail: "trustees@globalinvest.com",
      representative: "Michael Brown",
      votingRights: true,
      status: "active",
      joinDate: "2021-06-30",
      avatar: "/avatars/institution3.png",
    },
    {
      id: 5,
      name: "Robert Thompson",
      type: "Individual",
      sharesOwned: 600000,
      percentageOwned: 6.0,
      valueUSD: 30000000,
      lastTransaction: "2024-10-15",
      transactionType: "buy",
      contactEmail: "robert.thompson@email.com",
      representative: "Self",
      votingRights: true,
      status: "active",
      joinDate: "2019-04-12",
      avatar: "/avatars/robert-shareholder.png",
    },
    {
      id: 6,
      name: "Employee Stock Ownership Plan",
      type: "ESOP",
      sharesOwned: 500000,
      percentageOwned: 5.0,
      valueUSD: 25000000,
      lastTransaction: "2024-12-31",
      transactionType: "buy",
      contactEmail: "esop@company.com",
      representative: "HR Department",
      votingRights: false,
      status: "active",
      joinDate: "2020-01-01",
      avatar: "/avatars/esop.png",
    },
    {
      id: 7,
      name: "Green Investment Fund",
      type: "Institutional",
      sharesOwned: 450000,
      percentageOwned: 4.5,
      valueUSD: 22500000,
      lastTransaction: "2024-09-30",
      transactionType: "buy",
      contactEmail: "contact@greeninvest.org",
      representative: "Lisa Green",
      votingRights: true,
      status: "active",
      joinDate: "2022-03-20",
      avatar: "/avatars/green-fund.png",
    },
    {
      id: 8,
      name: "Legacy Holdings LLC",
      type: "Institutional",
      sharesOwned: 300000,
      percentageOwned: 3.0,
      valueUSD: 15000000,
      lastTransaction: "2024-08-15",
      transactionType: "sell",
      contactEmail: "info@legacyholdings.com",
      representative: "James Legacy",
      votingRights: true,
      status: "inactive",
      joinDate: "2017-11-05",
      avatar: "/avatars/legacy.png",
    },
  ];

  const totalShares = 10000000;
  const totalValue = 500000000;
  const sharePrice = 50.0;

  const handleAddShareholder = () => {
    toast({
      title: "Add Shareholder",
      description: "Opening shareholder registration form...",
    });
  };

  const handleEditShareholder = (shareholderId: number) => {
    const shareholder = shareholders.find((s) => s.id === shareholderId);
    toast({
      title: "Edit Shareholder",
      description: `Opening edit form for ${shareholder?.name}...`,
    });
  };

  const handleViewDetails = (shareholderId: number) => {
    const shareholder = shareholders.find((s) => s.id === shareholderId);
    toast({
      title: "Shareholder Details",
      description: `Opening detailed view for ${shareholder?.name}...`,
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export Data",
      description: "Generating shareholder report...",
    });
  };

  const handleImportData = () => {
    toast({
      title: "Import Data",
      description: "Opening data import wizard...",
    });
  };

  const getShareholderTypeBadge = (type: string) => {
    const colors = {
      Institutional: "bg-blue-100 text-blue-800",
      Individual: "bg-green-100 text-green-800",
      ESOP: "bg-purple-100 text-purple-800",
    };
    return (
      <Badge className={colors[type as keyof typeof colors]}>{type}</Badge>
    );
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "sell":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
    );
  };

  const filteredShareholders = shareholders.filter((shareholder) => {
    const matchesSearch =
      shareholder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shareholder.representative
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || shareholder.type === filterType;

    return matchesSearch && matchesType;
  });

  const shareholderDistribution = shareholders.reduce(
    (acc, shareholder) => {
      acc[shareholder.type] =
        (acc[shareholder.type] || 0) + shareholder.percentageOwned;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">
            Shareholders
          </h1>
          <p className="text-muted-foreground">
            Manage shareholder information and ownership distribution
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleImportData}>
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" onClick={handleExportData}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button
            onClick={handleAddShareholder}
            className="bg-corporate-600 hover:bg-corporate-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Shareholder
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Total Shareholders
                </p>
                <p className="text-2xl font-bold">{shareholders.length}</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Shares</p>
                <p className="text-2xl font-bold">
                  {totalShares.toLocaleString()}
                </p>
              </div>
              <PieChart className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Market Value</p>
                <p className="text-2xl font-bold">
                  ${(totalValue / 1000000).toFixed(0)}M
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Share Price</p>
                <p className="text-2xl font-bold">${sharePrice}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-orange-600" />
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
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="shareholders">Shareholders</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Ownership Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Ownership Distribution</CardTitle>
              <CardDescription>
                Breakdown of shareholding by investor type
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(shareholderDistribution).map(
                ([type, percentage]) => (
                  <div key={type} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{type}</span>
                      <span className="text-sm text-muted-foreground">
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                ),
              )}
            </CardContent>
          </Card>

          {/* Top Shareholders */}
          <Card>
            <CardHeader>
              <CardTitle>Top Shareholders</CardTitle>
              <CardDescription>
                Largest shareholders by ownership percentage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {shareholders
                  .sort((a, b) => b.percentageOwned - a.percentageOwned)
                  .slice(0, 5)
                  .map((shareholder, index) => (
                    <div
                      key={shareholder.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-corporate-100 text-corporate-700 font-semibold">
                          {index + 1}
                        </div>
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={shareholder.avatar}
                            alt={shareholder.name}
                          />
                          <AvatarFallback>
                            {shareholder.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{shareholder.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {shareholder.type}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {shareholder.percentageOwned.toFixed(1)}%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {shareholder.sharesOwned.toLocaleString()} shares
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shareholders" className="space-y-4">
          {/* Search and Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search shareholders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="flex gap-2">
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[160px]">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="Institutional">
                        Institutional
                      </SelectItem>
                      <SelectItem value="Individual">Individual</SelectItem>
                      <SelectItem value="ESOP">ESOP</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shareholders Table */}
          <Card>
            <CardHeader>
              <CardTitle>All Shareholders</CardTitle>
              <CardDescription>
                Complete list of registered shareholders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Shareholder</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Shares Owned</TableHead>
                    <TableHead>Ownership %</TableHead>
                    <TableHead>Value (USD)</TableHead>
                    <TableHead>Last Transaction</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredShareholders.map((shareholder) => (
                    <TableRow key={shareholder.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={shareholder.avatar}
                              alt={shareholder.name}
                            />
                            <AvatarFallback>
                              {shareholder.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{shareholder.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {shareholder.representative}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getShareholderTypeBadge(shareholder.type)}
                      </TableCell>
                      <TableCell>
                        {shareholder.sharesOwned.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        {shareholder.percentageOwned.toFixed(1)}%
                      </TableCell>
                      <TableCell>
                        ${(shareholder.valueUSD / 1000000).toFixed(1)}M
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTransactionIcon(shareholder.transactionType)}
                          <span className="text-sm">
                            {shareholder.lastTransaction}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(shareholder.status)}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleViewDetails(shareholder.id)}
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() =>
                                handleEditShareholder(shareholder.id)
                              }
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Export Data
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Analytics Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Voting Rights Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>With Voting Rights</span>
                    <span className="font-semibold">
                      {shareholders.filter((s) => s.votingRights).length}{" "}
                      shareholders
                    </span>
                  </div>
                  <Progress
                    value={
                      (shareholders.filter((s) => s.votingRights).length /
                        shareholders.length) *
                      100
                    }
                    className="h-2"
                  />
                  <div className="text-sm text-muted-foreground">
                    {(
                      (shareholders.filter((s) => s.votingRights).length /
                        shareholders.length) *
                      100
                    ).toFixed(1)}
                    % of shareholders have voting rights
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {shareholders
                    .sort(
                      (a, b) =>
                        new Date(b.lastTransaction).getTime() -
                        new Date(a.lastTransaction).getTime(),
                    )
                    .slice(0, 3)
                    .map((shareholder) => (
                      <div
                        key={shareholder.id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          {getTransactionIcon(shareholder.transactionType)}
                          <span className="text-sm">{shareholder.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {shareholder.lastTransaction}
                        </span>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ownership Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Ownership Timeline</CardTitle>
              <CardDescription>
                Track changes in shareholding over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Historical ownership data visualization would appear here</p>
                <p className="text-sm">
                  Showing ownership changes over the past 12 months
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
