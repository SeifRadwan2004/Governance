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
  totalUsers: 12,
  activeUsers: 10,
  totalSessions: 45,
  avgSessionDuration: 42,
  systemUptime: 99.9,
  responseTime: 245,
  storageUsed: 67,
  bandwidthUsage: 23,
  securityIncidents: 0,
  dataBackups: 30,
  apiCalls: 15420,
  errorRate: 0.02,
};

export function Settings() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState("general");
  const [userRole, setUserRole] = useState<UserRole>("shareholder");

  useEffect(() => {
    const role = getCurrentUserRole();
    setUserRole(role);
    // Non-admin users should start on profile tab
    if (!canManageSystemSettings(role)) {
      setActiveTab("profile");
    }
  }, []);

  const isAdmin = canManageSystemSettings(userRole);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-corporate-800">
            {isAdmin ? "System Settings" : "Profile Settings"}
          </h2>
          <p className="text-muted-foreground">
            {isAdmin
              ? "Manage your organization's governance settings with comprehensive analytics and monitoring"
              : "Manage your profile and notification preferences"}
          </p>
          <Badge variant="outline" className="mt-2">
            {getUserRoleDisplayName(userRole)}
          </Badge>
        </div>
        {isAdmin && (
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        )}
      </div>

      {/* System Overview KPIs - Admin Only */}
      {isAdmin && (
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
                  <p className="text-sm text-muted-foreground">
                    Security Score
                  </p>
                  <p className="text-2xl font-bold">94%</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    92% 2FA enabled
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
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-6">
          {isAdmin && (
            <>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="users">Users & Permissions</TabsTrigger>
              <TabsTrigger value="committees">Committees</TabsTrigger>
              <TabsTrigger value="analytics">System Analytics</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </>
          )}
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        {/* Profile Tab - Available to all users */}
        <TabsContent value="profile" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="John" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Doe" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@company.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Update Profile
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notifications Tab - Available to all users */}
        <TabsContent value="notifications" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure your notification preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Meeting Notifications</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Invitations</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for new meeting invitations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Meeting Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive reminders before scheduled meetings
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
              </div>
              {userRole === "shareholder" && (
                <>
                  <Separator />
                  <div className="space-y-4">
                    <h4 className="font-medium">Shareholder Notifications</h4>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Annual Reports</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive annual and quarterly reports
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Dividend Announcements</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about dividend declarations
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save Preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Admin Only Tabs */}
        {isAdmin && (
          <>
            <TabsContent value="general" className="w-full">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2">
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
              </div>
            </TabsContent>

            <TabsContent value="users" className="w-full">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>
                    Manage system users and their permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>{user.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {user.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="capitalize">
                            {user.role}
                          </Badge>
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="committees" className="w-full">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {committees.map((committee) => (
                  <Card key={committee.value}>
                    <CardHeader>
                      <CardTitle>{committee.label}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Committee management and member assignments
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        Manage
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>System Performance</CardTitle>
                    <CardDescription>Key performance metrics</CardDescription>
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
                        <div className="text-xs text-blue-600">
                          Response Time
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>User Activity</CardTitle>
                    <CardDescription>
                      Current user engagement metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Active Users</span>
                          <span>
                            {systemMetrics.activeUsers}/
                            {systemMetrics.totalUsers}
                          </span>
                        </div>
                        <Progress
                          value={
                            (systemMetrics.activeUsers /
                              systemMetrics.totalUsers) *
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

            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Overview</CardTitle>
                  <CardDescription>
                    System security status and configurations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Require 2FA for all users
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
                </CardContent>
                <CardFooter>
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Update Security Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
