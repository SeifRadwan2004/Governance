"use client";

import { useState } from "react";
import {
  Shield,
  Settings,
  Users,
  Database,
  Activity,
  Lock,
  Unlock,
  UserPlus,
  UserMinus,
  AlertTriangle,
  CheckCircle,
  Clock,
  Server,
  HardDrive,
  Cpu,
  Wifi,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export default function AdminPanelPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  // Mock system data
  const systemMetrics = {
    uptime: "99.9%",
    totalUsers: 48,
    activeUsers: 32,
    systemLoad: 45,
    memoryUsage: 67,
    diskUsage: 23,
    networkLoad: 12,
  };

  const recentUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@company.com",
      role: "Board Member",
      status: "active",
      lastLogin: "2025-01-22 14:30",
      loginCount: 127,
      avatar: "/avatars/alice.png",
    },
    {
      id: 2,
      name: "Bob Wilson",
      email: "bob@company.com",
      role: "Shareholder",
      status: "active",
      lastLogin: "2025-01-22 09:15",
      loginCount: 89,
      avatar: "/avatars/bob.png",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@company.com",
      role: "Legal Counsel",
      status: "inactive",
      lastLogin: "2025-01-18 16:45",
      loginCount: 245,
      avatar: "/avatars/carol.png",
    },
  ];

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "High Memory Usage",
      message: "System memory usage is above 65%",
      timestamp: "2025-01-22 15:30",
      severity: "medium",
    },
    {
      id: 2,
      type: "info",
      title: "Scheduled Backup Completed",
      message: "Daily backup completed successfully",
      timestamp: "2025-01-22 06:00",
      severity: "low",
    },
    {
      id: 3,
      type: "error",
      title: "Failed Login Attempts",
      message: "Multiple failed login attempts detected",
      timestamp: "2025-01-22 11:22",
      severity: "high",
    },
  ];

  const auditLogs = [
    {
      id: 1,
      user: "Admin Alex Morgan",
      action: "User Account Created",
      details: "Created account for new board member",
      timestamp: "2025-01-22 14:15",
      category: "user_management",
    },
    {
      id: 2,
      user: "System",
      action: "Backup Completed",
      details: "Daily automated backup to cloud storage",
      timestamp: "2025-01-22 06:00",
      category: "system",
    },
    {
      id: 3,
      user: "Sarah Johnson",
      action: "Document Uploaded",
      details: "Board meeting agenda uploaded",
      timestamp: "2025-01-22 10:30",
      category: "document",
    },
    {
      id: 4,
      user: "Admin Alex Morgan",
      action: "Security Settings Updated",
      details: "Password policy requirements changed",
      timestamp: "2025-01-21 16:45",
      category: "security",
    },
  ];

  const securitySettings = [
    {
      id: 1,
      setting: "Two-Factor Authentication",
      status: "enabled",
      description: "Required for all admin accounts",
    },
    {
      id: 2,
      setting: "Password Complexity",
      status: "enabled",
      description: "Minimum 8 characters with special characters",
    },
    {
      id: 3,
      setting: "Session Timeout",
      status: "enabled",
      description: "Auto logout after 30 minutes of inactivity",
    },
    {
      id: 4,
      setting: "Login Monitoring",
      status: "enabled",
      description: "Track and alert on suspicious login patterns",
    },
  ];

  const handleRestartSystem = () => {
    toast({
      title: "System Restart",
      description: "Initiating controlled system restart...",
      variant: "destructive",
    });
  };

  const handleBackupSystem = () => {
    toast({
      title: "Backup Started",
      description: "Manual backup process initiated...",
    });
  };

  const handleClearLogs = () => {
    toast({
      title: "Logs Cleared",
      description: "System logs have been archived and cleared.",
    });
  };

  const handleExportLogs = () => {
    toast({
      title: "Export Started",
      description: "Generating audit log export file...",
    });
  };

  const handleToggleSecurity = (settingId: number) => {
    const setting = securitySettings.find((s) => s.id === settingId);
    toast({
      title: "Security Setting Updated",
      description: `${setting?.setting} has been ${setting?.status === "enabled" ? "disabled" : "enabled"}.`,
    });
  };

  const handleUserAction = (action: string, userId: number) => {
    const user = recentUsers.find((u) => u.id === userId);
    toast({
      title: `User ${action}`,
      description: `${action} action performed for ${user?.name}.`,
    });
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case "info":
        return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    const colors = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800",
    };
    return (
      <Badge className={colors[severity as keyof typeof colors]}>
        {severity.toUpperCase()}
      </Badge>
    );
  };

  const getStatusBadge = (status: string) => {
    return status === "active" ? (
      <Badge className="bg-green-100 text-green-800">Active</Badge>
    ) : (
      <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
    );
  };

  const getCategoryBadge = (category: string) => {
    const colors = {
      user_management: "bg-blue-100 text-blue-800",
      system: "bg-purple-100 text-purple-800",
      document: "bg-green-100 text-green-800",
      security: "bg-red-100 text-red-800",
    };
    return (
      <Badge
        variant="outline"
        className={colors[category as keyof typeof colors]}
      >
        {category.replace("_", " ")}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold text-corporate-800">Admin Panel</h1>
          <p className="text-muted-foreground">
            System administration and monitoring dashboard
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleBackupSystem}>
            <Upload className="mr-2 h-4 w-4" />
            Backup System
          </Button>
          <Button variant="destructive" onClick={handleRestartSystem}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Restart System
          </Button>
        </div>
      </div>

      {/* System Alerts */}
      {systemAlerts.filter((alert) => alert.severity === "high").length > 0 && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800">
            Critical System Alerts
          </AlertTitle>
          <AlertDescription className="text-red-700">
            {systemAlerts.filter((alert) => alert.severity === "high").length}{" "}
            high priority alert(s) require immediate attention.
          </AlertDescription>
        </Alert>
      )}

      {/* System Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">System Uptime</p>
                <p className="text-2xl font-bold">{systemMetrics.uptime}</p>
              </div>
              <Server className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold">
                  {systemMetrics.activeUsers}/{systemMetrics.totalUsers}
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
                <p className="text-sm text-muted-foreground">Memory Usage</p>
                <p className="text-2xl font-bold">
                  {systemMetrics.memoryUsage}%
                </p>
              </div>
              <Cpu className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Disk Usage</p>
                <p className="text-2xl font-bold">{systemMetrics.diskUsage}%</p>
              </div>
              <HardDrive className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="logs">Audit Logs</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* System Performance */}
          <Card>
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>
                Real-time system resource monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>CPU Load</span>
                  <span>{systemMetrics.systemLoad}%</span>
                </div>
                <Progress value={systemMetrics.systemLoad} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Memory Usage</span>
                  <span>{systemMetrics.memoryUsage}%</span>
                </div>
                <Progress value={systemMetrics.memoryUsage} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Disk Usage</span>
                  <span>{systemMetrics.diskUsage}%</span>
                </div>
                <Progress value={systemMetrics.diskUsage} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Network Load</span>
                  <span>{systemMetrics.networkLoad}%</span>
                </div>
                <Progress value={systemMetrics.networkLoad} className="h-2" />
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent System Alerts</CardTitle>
              <CardDescription>
                Latest system notifications and warnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {systemAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-start space-x-3 p-3 border rounded-lg"
                  >
                    {getAlertIcon(alert.type)}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{alert.title}</p>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {alert.message}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {alert.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage user accounts and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Login Count</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>{user.loginCount}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUserAction("View", user.id)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUserAction("Edit", user.id)}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleUserAction(
                                user.status === "active"
                                  ? "Deactivate"
                                  : "Activate",
                                user.id,
                              )
                            }
                          >
                            {user.status === "active" ? (
                              <Lock className="h-3 w-3" />
                            ) : (
                              <Unlock className="h-3 w-3" />
                            )}
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

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Configure system security policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securitySettings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{setting.setting}</p>
                      <p className="text-sm text-muted-foreground">
                        {setting.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          setting.status === "enabled"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }
                      >
                        {setting.status}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleToggleSecurity(setting.id)}
                      >
                        <Settings className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Audit Logs</CardTitle>
                  <CardDescription>
                    System activity and user action logs
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleExportLogs}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleClearLogs}>
                    <Trash2 className="mr-1 h-3 w-3" />
                    Clear
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell>{log.action}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {log.details}
                      </TableCell>
                      <TableCell>{getCategoryBadge(log.category)}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span>Version:</span>
                  <span className="font-mono">v2.1.4</span>
                </div>
                <div className="flex justify-between">
                  <span>Last Update:</span>
                  <span>2025-01-15</span>
                </div>
                <div className="flex justify-between">
                  <span>Database Size:</span>
                  <span>2.4 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Storage:</span>
                  <span>50 GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Available Storage:</span>
                  <span>38.5 GB</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full"
                  variant="outline"
                  onClick={handleBackupSystem}
                >
                  <Database className="mr-2 h-4 w-4" />
                  Create Backup
                </Button>
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
                <Button className="w-full" variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Import Data
                </Button>
                <Button
                  className="w-full"
                  variant="destructive"
                  onClick={handleRestartSystem}
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Restart System
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
