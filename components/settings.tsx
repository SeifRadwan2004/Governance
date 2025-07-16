"use client";

import { useState, useEffect } from "react";
import {
  Check,
  ChevronsUpDown,
  Plus,
  Save,
  Trash,
  UserPlus,
  Activity,
  Users,
  BarChart3,
  Server,
  Database,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  Settings as SettingsIcon,
  HardDrive,
  Wifi,
  Bell,
  Lock,
  Eye,
  Download,
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import {
  UserRole,
  canManageSystemSettings,
  getCurrentUserRole,
  getUserRoleDisplayName,
} from "@/lib/permissions";

const users = [
  {
    id: 1,
    name: "Robert Johnson",
    email: "robert.johnson@company.com",
    role: "admin",
    avatar: "/avatars/robert.png",
    initials: "RJ",
    status: "active",
    lastLogin: "2025-01-22 14:30",
    loginCount: 127,
    sessionsThisMonth: 15,
    avgSessionDuration: 45,
    featuresUsed: ["Dashboard", "Meetings", "Voting", "Documents"],
    securityScore: 95,
    twoFactorEnabled: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah.williams@company.com",
    role: "member",
    avatar: "/avatars/sarah.png",
    initials: "SW",
    status: "active",
    lastLogin: "2025-01-22 09:15",
    loginCount: 89,
    sessionsThisMonth: 12,
    avgSessionDuration: 38,
    featuresUsed: ["Dashboard", "Meetings", "Decisions", "Documents"],
    securityScore: 88,
    twoFactorEnabled: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    role: "member",
    avatar: "/avatars/michael.png",
    initials: "MC",
    status: "active",
    lastLogin: "2025-01-21 16:45",
    loginCount: 145,
    sessionsThisMonth: 18,
    avgSessionDuration: 52,
    featuresUsed: ["Dashboard", "Meetings", "Voting", "Documents", "Analytics"],
    securityScore: 92,
    twoFactorEnabled: true,
  },
  {
    id: 4,
    name: "Lisa Anderson",
    email: "lisa.anderson@company.com",
    role: "observer",
    avatar: "/avatars/lisa.png",
    initials: "LA",
    status: "active",
    lastLogin: "2025-01-20 11:22",
    loginCount: 34,
    sessionsThisMonth: 6,
    avgSessionDuration: 25,
    featuresUsed: ["Dashboard", "Documents"],
    securityScore: 82,
    twoFactorEnabled: false,
  },
];

const committees = [
  { value: "executive", label: "Executive Committee" },
  { value: "finance", label: "Finance Committee" },
  { value: "governance", label: "Governance Committee" },
  { value: "audit", label: "Audit Committee" },
  { value: "nominating", label: "Nominating Committee" },
  { value: "strategic", label: "Strategic Planning Committee" },
];

const systemMetrics = {
  totalUsers: users.length,
  activeUsers: users.filter((u) => u.status === "active").length,
  totalSessions: users.reduce((sum, u) => sum + u.sessionsThisMonth, 0),
  avgSessionDuration:
    users.reduce((sum, u) => sum + u.avgSessionDuration, 0) / users.length,
  systemUptime: 99.9,
  responseTime: 245,
  storageUsed: 67,
  bandwidthUsage: 23,
  securityIncidents: 0,
  dataBackups: 30,
  apiCalls: 15420,
  errorRate: 0.02,
};

const usageStats = {
  topFeatures: [
    { name: "Dashboard", usage: 98, users: users.length },
    {
      name: "Meetings",
      usage: 87,
      users: users.filter((u) => u.featuresUsed.includes("Meetings")).length,
    },
    {
      name: "Documents",
      usage: 95,
      users: users.filter((u) => u.featuresUsed.includes("Documents")).length,
    },
    {
      name: "Voting",
      usage: 73,
      users: users.filter((u) => u.featuresUsed.includes("Voting")).length,
    },
    {
      name: "Decisions",
      usage: 45,
      users: users.filter((u) => u.featuresUsed.includes("Decisions")).length,
    },
    {
      name: "Analytics",
      usage: 25,
      users: users.filter((u) => u.featuresUsed.includes("Analytics")).length,
    },
  ],
  dailyActiveUsers: [
    { day: "Mon", users: 8 },
    { day: "Tue", users: 12 },
    { day: "Wed", users: 15 },
    { day: "Thu", users: 11 },
    { day: "Fri", users: 9 },
    { day: "Sat", users: 3 },
    { day: "Sun", users: 2 },
  ],
  peakHours: [
    { hour: "9 AM", usage: 85 },
    { hour: "10 AM", usage: 92 },
    { hour: "11 AM", usage: 78 },
    { hour: "2 PM", usage: 88 },
    { hour: "3 PM", usage: 95 },
    { hour: "4 PM", usage: 72 },
  ],
};

const securityMetrics = {
  twoFactorAdoption:
    (users.filter((u) => u.twoFactorEnabled).length / users.length) * 100,
  averageSecurityScore:
    users.reduce((sum, u) => sum + u.securityScore, 0) / users.length,
  passwordStrength: 87,
  sessionSecurity: 94,
  dataEncryption: 100,
  accessControls: 96,
};

export function Settings() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");

  useEffect(() => {
    setUserRole(getCurrentUserRole());
    // Non-admin users should start on profile tab
    if (!canManageSystemSettings(getCurrentUserRole())) {
      setActiveTab("profile");
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-corporate-800">
            System Settings
          </h2>
          <p className="text-muted-foreground">
            Manage your organization's governance settings with comprehensive
            analytics and monitoring
          </p>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* System Overview KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">
                  {systemMetrics.activeUsers}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {systemMetrics.totalSessions} sessions
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
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <p className="text-2xl font-bold">
                  {systemMetrics.systemUptime}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {systemMetrics.responseTime}ms avg
                </p>
              </div>
              <Server className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Security Score</p>
                <p className="text-2xl font-bold">
                  {Math.round(securityMetrics.averageSecurityScore)}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {Math.round(securityMetrics.twoFactorAdoption)}% 2FA enabled
                </p>
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Storage Used</p>
                <p className="text-2xl font-bold">
                  {systemMetrics.storageUsed}%
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {systemMetrics.dataBackups} backups
                </p>
              </div>
              <HardDrive className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="users">Users & Permissions</TabsTrigger>
          <TabsTrigger value="committees">Committees</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="analytics">System Analytics</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="w-full">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Organization Information</CardTitle>
                  <CardDescription>
                    Update your organization's basic information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="org-name">Organization Name</Label>
                    <Input
                      id="org-name"
                      defaultValue="GovernancePro Corporation"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-description">Description</Label>
                    <Textarea
                      id="org-description"
                      defaultValue="A leading corporation focused on innovative governance solutions and sustainable business practices."
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-website">Website</Label>
                    <Input
                      id="org-website"
                      defaultValue="https://governancepro.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="org-email">Contact Email</Label>
                    <Input
                      id="org-email"
                      defaultValue="contact@governancepro.com"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>
                    Current system health and performance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>System Status</Label>
                      <p className="text-sm text-muted-foreground">
                        All systems operational
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Healthy
                    </Badge>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>CPU Usage</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Memory Usage</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Storage</span>
                      <span>{systemMetrics.storageUsed}%</span>
                    </div>
                    <Progress
                      value={systemMetrics.storageUsed}
                      className="h-2"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" variant="outline">
                    <Database className="mr-2 h-4 w-4" />
                    Backup System
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                  </Button>
                  <Button className="w-full" variant="outline">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    System Maintenance
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Governance Settings</CardTitle>
                <CardDescription>
                  Configure your governance system settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable Electronic Voting</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow board members to cast votes electronically
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Require Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Enhance security with two-factor authentication
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Document Version Control</Label>
                    <p className="text-sm text-muted-foreground">
                      Track changes to documents with version history
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Anonymous Voting</Label>
                    <p className="text-sm text-muted-foreground">
                      Hide individual votes from other board members
                    </p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Real-time Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send instant notifications for important events
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Settings
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Meeting Settings</CardTitle>
                <CardDescription>
                  Configure default meeting settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="default-duration">
                    Default Meeting Duration
                  </Label>
                  <Select defaultValue="60">
                    <SelectTrigger id="default-duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="90">1.5 hours</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="180">3 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reminder-time">Default Reminder Time</Label>
                  <Select defaultValue="24">
                    <SelectTrigger id="reminder-time">
                      <SelectValue placeholder="Select reminder time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 hour before</SelectItem>
                      <SelectItem value="3">3 hours before</SelectItem>
                      <SelectItem value="24">1 day before</SelectItem>
                      <SelectItem value="48">2 days before</SelectItem>
                      <SelectItem value="168">1 week before</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Auto-generate Minutes</Label>
                    <p className="text-sm text-muted-foreground">
                      Generate meeting minutes automatically
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="w-full">
          <div className="space-y-6">
            {/* User Analytics */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {systemMetrics.totalUsers}
                  </div>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {systemMetrics.activeUsers}
                  </div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round(systemMetrics.avgSessionDuration)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Avg Session (min)
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">User Management</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>
                      Invite a new user to the governance portal
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter full name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Select>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="member">Board Member</SelectItem>
                          <SelectItem value="observer">Observer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label>Committees</Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="justify-between"
                          >
                            {value
                              ? committees.find(
                                  (committee) => committee.value === value,
                                )?.label
                              : "Select committee..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Command>
                            <CommandInput placeholder="Search committees..." />
                            <CommandList>
                              <CommandEmpty>No committee found.</CommandEmpty>
                              <CommandGroup>
                                {committees.map((committee) => (
                                  <CommandItem
                                    key={committee.value}
                                    value={committee.value}
                                    onSelect={(currentValue) => {
                                      setValue(
                                        currentValue === value
                                          ? ""
                                          : currentValue,
                                      );
                                      setOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={`mr-2 h-4 w-4 ${
                                        value === committee.value
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }`}
                                    />
                                    {committee.label}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Invite User</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr className="text-left">
                        <th className="p-4 font-medium">User</th>
                        <th className="p-4 font-medium">Role</th>
                        <th className="p-4 font-medium">Status</th>
                        <th className="p-4 font-medium">Usage</th>
                        <th className="p-4 font-medium">Security</th>
                        <th className="p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarImage
                                  src={user.avatar}
                                  alt={user.name}
                                />
                                <AvatarFallback>{user.initials}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-medium">{user.name}</div>
                                <div className="text-sm text-muted-foreground">
                                  {user.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant="outline" className="capitalize">
                              {user.role}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <Badge
                                variant={
                                  user.status === "active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {user.status}
                              </Badge>
                              <div className="text-xs text-muted-foreground">
                                Last: {user.lastLogin}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="text-sm font-medium">
                                {user.sessionsThisMonth} sessions
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {user.avgSessionDuration}min avg
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {user.featuresUsed.length} features used
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium">
                                  {user.securityScore}%
                                </div>
                                {user.twoFactorEnabled ? (
                                  <Shield className="h-4 w-4 text-green-600" />
                                ) : (
                                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                2FA:{" "}
                                {user.twoFactorEnabled ? "Enabled" : "Disabled"}
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  Actions
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>Edit User</DropdownMenuItem>
                                <DropdownMenuItem>Change Role</DropdownMenuItem>
                                <DropdownMenuItem>
                                  Reset Password
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete User
                                </DropdownMenuItem>
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
          </div>
        </TabsContent>

        <TabsContent value="committees" className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium">Committee Management</h3>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Committee
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {committees.map((committee) => (
                <Card key={committee.value}>
                  <CardHeader>
                    <CardTitle>{committee.label}</CardTitle>
                    <CardDescription>
                      {committee.value === "executive" &&
                        "Oversees operations between board meetings"}
                      {committee.value === "finance" &&
                        "Reviews financial performance and budgets"}
                      {committee.value === "governance" &&
                        "Ensures governance best practices"}
                      {committee.value === "audit" &&
                        "Oversees financial reporting and compliance"}
                      {committee.value === "nominating" &&
                        "Identifies and recruits board candidates"}
                      {committee.value === "strategic" &&
                        "Develops long-term strategic plans"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {users
                          .slice(0, committee.value === "executive" ? 2 : 3)
                          .map((user) => (
                            <Badge
                              key={user.id}
                              variant="secondary"
                              className="flex items-center gap-1"
                            >
                              <Avatar className="h-4 w-4">
                                <AvatarImage
                                  src={user.avatar}
                                  alt={user.name}
                                />
                                <AvatarFallback className="text-[8px]">
                                  {user.initials}
                                </AvatarFallback>
                              </Avatar>
                              <span>{user.name.split(" ")[0]}</span>
                            </Badge>
                          ))}
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-medium">Meetings:</span>
                          <p className="text-muted-foreground">
                            {committee.value === "executive"
                              ? "12"
                              : committee.value === "finance"
                                ? "8"
                                : "6"}{" "}
                            this year
                          </p>
                        </div>
                        <div>
                          <span className="font-medium">Decisions:</span>
                          <p className="text-muted-foreground">
                            {committee.value === "executive"
                              ? "25"
                              : committee.value === "finance"
                                ? "15"
                                : "8"}{" "}
                            made
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-1 h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <SettingsIcon className="mr-1 h-3 w-3" />
                      Edit
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure system-wide notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Meeting Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Invitations</Label>
                    <p className="text-sm text-muted-foreground">
                      Send notifications for new meeting invitations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Send reminders before scheduled meetings
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when meeting details change
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium">Decision Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>New Proposals</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify about new proposals requiring votes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Voting Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Send reminders for pending votes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Decision Results</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify when decisions are finalized
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-medium">System Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Maintenance</Label>
                    <p className="text-sm text-muted-foreground">
                      Notify about scheduled maintenance
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Send alerts for security-related events
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Performance Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Alert when system performance degrades
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          {/* Usage Analytics */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Feature Usage</CardTitle>
                <CardDescription>
                  Most popular features and adoption rates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {usageStats.topFeatures.map((feature) => (
                  <div key={feature.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{feature.name}</span>
                      <span>{feature.usage}% usage</span>
                    </div>
                    <Progress value={feature.usage} className="h-2" />
                    <div className="text-xs text-muted-foreground">
                      {feature.users} users active
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Performance</CardTitle>
                <CardDescription>
                  Key performance metrics and system health
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">
                      {systemMetrics.systemUptime}%
                    </div>
                    <div className="text-xs text-green-600">Uptime</div>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">
                      {systemMetrics.responseTime}ms
                    </div>
                    <div className="text-xs text-blue-600">Response Time</div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">
                      {systemMetrics.apiCalls.toLocaleString()}
                    </div>
                    <div className="text-xs text-purple-600">API Calls</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">
                      {systemMetrics.errorRate}%
                    </div>
                    <div className="text-xs text-orange-600">Error Rate</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Storage Usage</span>
                      <span>{systemMetrics.storageUsed}%</span>
                    </div>
                    <Progress
                      value={systemMetrics.storageUsed}
                      className="h-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Bandwidth Usage</span>
                      <span>{systemMetrics.bandwidthUsage}%</span>
                    </div>
                    <Progress
                      value={systemMetrics.bandwidthUsage}
                      className="h-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Daily Activity */}
          <Card>
            <CardHeader>
              <CardTitle>User Activity Patterns</CardTitle>
              <CardDescription>
                Daily active users and peak usage times
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="font-medium mb-4">Daily Active Users</h4>
                  <div className="space-y-3">
                    {usageStats.dailyActiveUsers.map((day) => (
                      <div
                        key={day.day}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{day.day}</span>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(day.users / 15) * 100}
                            className="h-2 w-20"
                          />
                          <span className="text-sm font-medium w-8">
                            {day.users}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Peak Usage Hours</h4>
                  <div className="space-y-3">
                    {usageStats.peakHours.map((hour) => (
                      <div
                        key={hour.hour}
                        className="flex items-center justify-between"
                      >
                        <span className="text-sm">{hour.hour}</span>
                        <div className="flex items-center gap-2">
                          <Progress value={hour.usage} className="h-2 w-20" />
                          <span className="text-sm font-medium w-8">
                            {hour.usage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          {/* Security Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(securityMetrics.averageSecurityScore)}%
                </div>
                <p className="text-sm text-muted-foreground">Security Score</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(securityMetrics.twoFactorAdoption)}%
                </div>
                <p className="text-sm text-muted-foreground">2FA Adoption</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {systemMetrics.securityIncidents}
                </div>
                <p className="text-sm text-muted-foreground">
                  Security Incidents
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {systemMetrics.dataBackups}
                </div>
                <p className="text-sm text-muted-foreground">Data Backups</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Security Metrics</CardTitle>
                <CardDescription>
                  Comprehensive security assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Password Strength</span>
                    <span>{securityMetrics.passwordStrength}%</span>
                  </div>
                  <Progress
                    value={securityMetrics.passwordStrength}
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Session Security</span>
                    <span>{securityMetrics.sessionSecurity}%</span>
                  </div>
                  <Progress
                    value={securityMetrics.sessionSecurity}
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Data Encryption</span>
                    <span>{securityMetrics.dataEncryption}%</span>
                  </div>
                  <Progress
                    value={securityMetrics.dataEncryption}
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Access Controls</span>
                    <span>{securityMetrics.accessControls}%</span>
                  </div>
                  <Progress
                    value={securityMetrics.accessControls}
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Configure security policies and controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Force 2FA for All Users</Label>
                    <p className="text-sm text-muted-foreground">
                      Require two-factor authentication
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-muted-foreground">
                      Auto-logout after inactivity
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Login Monitoring</Label>
                    <p className="text-sm text-muted-foreground">
                      Track suspicious login attempts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Data Backup Encryption</Label>
                    <p className="text-sm text-muted-foreground">
                      Encrypt all backup data
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
              <CardFooter>
                <Button>
                  <Save className="mr-2 h-4 w-4" />
                  Update Security Settings
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Security Incidents Log */}
          <Card>
            <CardHeader>
              <CardTitle>Security Activity Log</CardTitle>
              <CardDescription>
                Recent security events and incidents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">
                        System Security Scan Completed
                      </p>
                      <p className="text-sm text-muted-foreground">
                        No vulnerabilities detected
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    2 hours ago
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">2FA Enabled for User</p>
                      <p className="text-sm text-muted-foreground">
                        lisa.anderson@company.com enabled 2FA
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    1 day ago
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="font-medium">Automated Backup Completed</p>
                      <p className="text-sm text-muted-foreground">
                        Daily backup completed successfully
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    1 day ago
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
